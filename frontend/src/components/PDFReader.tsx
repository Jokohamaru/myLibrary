'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import {
  ChevronLeft, ChevronRight, ZoomIn, ZoomOut,
  Layers, AlignJustify, ArrowLeft, Menu, X, Space, FoldVertical, UnfoldVertical
} from 'lucide-react';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import { updateBook } from '@/lib/api';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface Chapter {
  id: number;
  chapterNum: number;
  title?: string;
  path: string;
}

interface PDFReaderProps {
  bookId: number;
  fileUrl: string;
  initialPage?: number;
  initialMode?: 'scroll' | 'paged';
  chapters?: Chapter[];
  currentChapterNum?: number;
  onChapterChange?: (chapNum: number) => void;
  bookTitle?: string;
  onBack?: () => void;
}

export default function PDFReader({
  bookId, fileUrl, initialPage = 1, initialMode = 'scroll',
  chapters = [], currentChapterNum, onChapterChange, bookTitle, onBack,
}: PDFReaderProps) {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState(initialPage);
  const [scale, setScale] = useState(1.0);
  const [mode, setMode] = useState<'scroll' | 'paged'>(initialMode);
  const [isContinuous, setIsContinuous] = useState(false);
  const [showChapMenu, setShowChapMenu] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const saveTimeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const isMultiChap = chapters.length > 1;
  const currentChapIndex = isMultiChap
    ? chapters.findIndex((c) => c.chapterNum === currentChapterNum)
    : -1;

  // Measure container for responsive PDF sizing
  useEffect(() => {
    const update = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };
    update();
    const ro = new ResizeObserver(update);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  // Compute scale based on container width (mobile-first)
  const responsiveScale = (() => {
    if (!containerWidth) return scale;
    // target PDF width = containerWidth minus horizontal padding
    const padding = mode === 'paged' ? 72 : 32; // arrows take space in paged mode
    const targetW = Math.min(containerWidth - padding, 900);
    const pdfNativeW = 612; // standard US Letter at 72dpi
    const autoScale = targetW / pdfNativeW;
    return Math.min(autoScale * scale, 3);
  })();

  const savProgress = useCallback(
    (page: number, m: string) => {
      clearTimeout(saveTimeout.current);
      saveTimeout.current = setTimeout(async () => {
        const chapObj = chapters.find((c) => c.chapterNum === currentChapterNum);
        await updateBook(bookId, {
          currentPage: page,
          currentChapterId: chapObj?.id,
          readingMode: m,
        }).catch(console.error);
      }, 1500);
    },
    [bookId, currentChapterNum, chapters],
  );

  useEffect(() => { setPageNumber(initialPage); setNumPages(undefined); }, [fileUrl]);

  const changePage = (next: number) => {
    const p = Math.min(numPages ?? 1, Math.max(1, next));
    setPageNumber(p);
    savProgress(p, mode);
    // scroll to top when flipping page on mobile
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleMode = () => {
    const next = mode === 'scroll' ? 'paged' : 'scroll';
    setMode(next);
    savProgress(pageNumber, next);
  };

  const goChapter = (chapNum: number) => {
    onChapterChange?.(chapNum);
    setShowChapMenu(false);
  };

  // Swipe support for paged mode
  const touchStartX = useRef(0);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (mode !== 'paged') return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) < 50) return; // threshold
    if (dx < 0) changePage(pageNumber + 1); // swipe left → next
    else changePage(pageNumber - 1);         // swipe right → prev
  };

  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 overflow-x-hidden">

      {/* ── Toolbar ── */}
      <div className="sticky top-0 z-20 bg-zinc-900/95 backdrop-blur-md border-b border-zinc-800">
        <div className="flex items-center gap-2 px-3 sm:px-4 h-12 sm:h-14">

          {/* Back */}
          {onBack && (
            <button
              onClick={onBack}
              className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all shrink-0"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          )}

          {/* Title */}
          <div className="flex-1 min-w-0">
            <p className="text-xs sm:text-sm font-medium text-white truncate">
              {bookTitle}
              {isMultiChap && currentChapterNum
                ? <span className="text-zinc-400"> · Chap {currentChapterNum}</span>
                : null}
            </p>
          </div>

          {/* Page indicator — paged mode */}
          {mode === 'paged' && (
            <div className="flex items-center gap-1 shrink-0">
              <button
                onClick={() => changePage(pageNumber - 1)}
                disabled={pageNumber <= 1}
                className="p-1.5 rounded-lg hover:bg-zinc-800 disabled:opacity-30 text-zinc-300 transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs text-zinc-400 w-16 sm:w-20 text-center tabular-nums">
                {pageNumber}/{numPages || '—'}
              </span>
              <button
                onClick={() => changePage(pageNumber + 1)}
                disabled={pageNumber >= (numPages ?? 1)}
                className="p-1.5 rounded-lg hover:bg-zinc-800 disabled:opacity-30 text-zinc-300 transition-all"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Zoom — hidden on very small screens */}
          <div className="hidden sm:flex items-center gap-1 shrink-0">
            <button onClick={() => setScale((s) => Math.max(0.4, s - 0.25))} className="p-1.5 rounded-lg hover:bg-zinc-800 text-zinc-400 transition-all">
              <ZoomOut className="w-4 h-4" />
            </button>
            <span className="text-xs text-zinc-500 w-10 text-center">{Math.round(scale * 100)}%</span>
            <button onClick={() => setScale((s) => Math.min(2.5, s + 0.25))} className="p-1.5 rounded-lg hover:bg-zinc-800 text-zinc-400 transition-all">
              <ZoomIn className="w-4 h-4" />
            </button>
          </div>

          {/* Continuous toggle — only in scroll mode */}
          {mode === 'scroll' && (
            <button
              onClick={() => setIsContinuous(!isContinuous)}
              className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-medium transition-all shrink-0 border border-zinc-700/50"
            >
              {isContinuous
                ? <><UnfoldVertical className="w-3.5 h-3.5" /><span className="hidden sm:inline">Cách trang</span></>
                : <><FoldVertical className="w-3.5 h-3.5" /><span className="hidden sm:inline">Liền trang</span></>}
            </button>
          )}

          {/* Mode toggle */}
          <button
            onClick={toggleMode}
            className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-medium transition-all shrink-0 border border-zinc-700/50"
          >
            {mode === 'scroll'
              ? <><Layers className="w-3.5 h-3.5" /><span className="hidden sm:inline">Lật trang</span></>
              : <><AlignJustify className="w-3.5 h-3.5" /><span className="hidden sm:inline">Cuộn dọc</span></>}
          </button>

          {/* Chapter menu button (multi-chap) */}
          {isMultiChap && (
            <button
              onClick={() => setShowChapMenu((v) => !v)}
              className="p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition-all shrink-0 border border-zinc-700/50"
            >
              {showChapMenu ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          )}
        </div>
      </div>

      {/* ── Chapter drawer (slide-in on mobile) ── */}
      {showChapMenu && isMultiChap && (
        <div className="fixed inset-0 z-40 flex">
          <div className="absolute inset-0 bg-black/60" onClick={() => setShowChapMenu(false)} />
          <div className="relative ml-auto w-72 bg-zinc-900 border-l border-zinc-800 h-full overflow-y-auto shadow-2xl">
            <div className="p-4 border-b border-zinc-800 flex items-center justify-between">
              <h3 className="font-semibold text-white">Danh sách chương</h3>
              <button onClick={() => setShowChapMenu(false)} className="p-1 text-zinc-500 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-2 space-y-1">
              {chapters.map((chap) => (
                <button
                  key={chap.id}
                  onClick={() => goChapter(chap.chapterNum)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm transition-all ${
                    chap.chapterNum === currentChapterNum
                      ? 'bg-violet-600/20 text-violet-400 font-medium'
                      : 'text-zinc-300 hover:bg-zinc-800'
                  }`}
                >
                  {chap.title || `Chapter ${chap.chapterNum}`}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── Content ── */}
      <div
        ref={containerRef}
        className="flex-1 relative"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {mode === 'paged' ? (
          // ── Paged mode ──────────────────────────
          <div className="flex items-center justify-center min-h-[calc(100dvh-48px)] sm:min-h-[calc(100dvh-56px)] relative">

            {/* Left arrow — desktop only (mobile uses swipe) */}
            <button
              onClick={() => changePage(pageNumber - 1)}
              disabled={pageNumber <= 1}
              className="hidden sm:flex fixed left-0 top-1/2 -translate-y-1/2 z-10 h-40 w-14 items-center justify-center text-white/30 hover:text-white/80 hover:bg-white/5 disabled:opacity-0 transition-all rounded-r-2xl"
            >
              <ChevronLeft className="w-9 h-9" />
            </button>

            {/* Page */}
            <div className="py-4 sm:py-8 px-2 sm:px-16 flex justify-center w-full">
              <Document
                file={fileUrl}
                onLoadSuccess={({ numPages: n }) => setNumPages(n)}
                loading={
                  <div className="flex items-center justify-center h-64 w-full">
                    <div className="w-8 h-8 border-4 border-violet-500 border-t-transparent rounded-full animate-spin" />
                  </div>
                }
              >
                <Page
                  pageNumber={pageNumber}
                  width={containerWidth ? Math.min(containerWidth - (containerWidth < 640 ? 16 : 128), 800) : undefined}
                  scale={scale}
                  renderTextLayer={containerWidth > 640}
                  renderAnnotationLayer={containerWidth > 640}
                  className="shadow-2xl rounded-sm max-w-full"
                />
              </Document>
            </div>

            {/* Right arrow — desktop only */}
            <button
              onClick={() => changePage(pageNumber + 1)}
              disabled={pageNumber >= (numPages ?? 1)}
              className="hidden sm:flex fixed right-0 top-1/2 -translate-y-1/2 z-10 h-40 w-14 items-center justify-center text-white/30 hover:text-white/80 hover:bg-white/5 disabled:opacity-0 transition-all rounded-l-2xl"
            >
              <ChevronRight className="w-9 h-9" />
            </button>

            {/* Mobile tap zones */}
            <div className="sm:hidden fixed inset-y-0 left-0 w-1/3 z-10" onClick={() => changePage(pageNumber - 1)} />
            <div className="sm:hidden fixed inset-y-0 right-0 w-1/3 z-10" onClick={() => changePage(pageNumber + 1)} />
          </div>
        ) : (
          // ── Scroll mode ──────────────────────────
          <div className={`flex justify-center ${isContinuous ? 'py-0 bg-black' : 'py-4 sm:py-8 bg-zinc-900/30'}`}>
            <Document
              file={fileUrl}
              onLoadSuccess={({ numPages: n }) => setNumPages(n)}
              loading={
                <div className="flex items-center justify-center h-64 w-full">
                  <div className="w-8 h-8 border-4 border-violet-500 border-t-transparent rounded-full animate-spin" />
                </div>
              }
              className={isContinuous ? 'flex flex-col items-center' : ''}
            >
              {numPages &&
                Array.from({ length: numPages }, (_, i) => (
                  <div key={i + 1} className={`${isContinuous ? 'mb-[-1px]' : 'mb-3 sm:mb-4'} flex justify-center`}>
                    <Page
                      pageNumber={i + 1}
                      width={containerWidth ? Math.min(containerWidth - (isContinuous ? 0 : 16), 800) : undefined}
                      scale={scale}
                      renderTextLayer={containerWidth > 640}
                      renderAnnotationLayer={containerWidth > 640}
                      className={`${isContinuous ? 'shadow-none' : 'shadow-xl'} max-w-full`}
                    />
                  </div>
                ))}
            </Document>
          </div>
        )}

        {/* ── Bottom chapter bar (multi-chap) ── */}
        {isMultiChap && !showChapMenu && (
          <div className="fixed bottom-0 left-0 right-0 z-20 pb-safe">
            <div className="mx-auto w-fit">
              <div className="flex items-center gap-3 bg-zinc-900/95 backdrop-blur border border-zinc-700/50 rounded-2xl px-3 sm:px-4 py-2 sm:py-2.5 shadow-2xl mb-4 sm:mb-6 mx-4">
                <button
                  onClick={() => currentChapIndex > 0 && goChapter(chapters[currentChapIndex - 1].chapterNum)}
                  disabled={currentChapIndex <= 0}
                  className="flex items-center gap-1 text-xs sm:text-sm text-zinc-400 hover:text-white disabled:opacity-30 transition-all"
                >
                  <ChevronLeft className="w-4 h-4" /> <span className="hidden xs:inline">Trước</span>
                </button>
                <span className="text-xs sm:text-sm font-medium text-zinc-300 px-1 sm:px-2 truncate max-w-[120px] sm:max-w-[200px]">
                  {chapters[currentChapIndex]?.title || `Chap ${currentChapterNum}`}
                </span>
                <button
                  onClick={() => currentChapIndex < chapters.length - 1 && goChapter(chapters[currentChapIndex + 1].chapterNum)}
                  disabled={currentChapIndex >= chapters.length - 1}
                  className="flex items-center gap-1 text-xs sm:text-sm text-zinc-400 hover:text-white disabled:opacity-30 transition-all"
                >
                  <span className="hidden xs:inline">Sau</span> <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
