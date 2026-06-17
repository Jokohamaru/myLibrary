'use client';

import { useEffect, useRef, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import {
  ArrowLeft, BookOpen, User, AlignLeft, Layers,
  Play, BookMarked, Trash2, Plus, Upload, X, Loader2, Camera,
} from 'lucide-react';
import { getBook, deleteBook, deleteChapter, uploadChapter, extractPdfCover, getAssetUrl, uploadBookCover } from '@/lib/api';
import AuthGuard from '@/components/AuthGuard';

interface Chapter {
  id: number;
  chapterNum: number;
  title?: string;
  filename: string;
  path: string;
  coverPath?: string;
  createdAt: string;
}

interface Book {
  id: number;
  title: string;
  author?: string;
  description?: string;
  coverPath?: string;
  isMultiChap: boolean;
  currentPage: number;
  currentChapterId?: number;
  readingMode: string;
  category?: { id: number; name: string };
  chapters: Chapter[];
  createdAt: string;
}

// ── Confirm Dialog ─────────────────────────────────────
function ConfirmDialog({
  message, onConfirm, onCancel, loading,
}: { message: string; onConfirm: () => void; onCancel: () => void; loading?: boolean }) {
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-end sm:items-center justify-center z-50 p-4">
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 w-full max-w-sm shadow-2xl mb-safe">
        <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
          <Trash2 className="w-6 h-6 text-red-500" />
        </div>
        <p className="text-white text-center font-medium mb-6 whitespace-pre-line">{message}</p>
        <div className="flex gap-3">
          <button
            onClick={onCancel}
            className="flex-1 py-3 rounded-xl border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 transition-all font-medium"
          >
            Không
          </button>
          <button
            onClick={onConfirm}
            disabled={loading}
            className="flex-1 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-semibold transition-all flex items-center justify-center gap-2 disabled:opacity-60"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Xóa'}
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Upload Chapter Modal ──────────────────────────────
function UploadChapterModal({
  bookId, nextChapNum, onClose, onSuccess,
}: { bookId: number; nextChapNum: number; onClose: () => void; onSuccess: () => void }) {
  const [file, setFile] = useState<File | null>(null);
  const [chapTitle, setChapTitle] = useState('');
  const [loading, setLoading] = useState(false);
  const [coverPreview, setCoverPreview] = useState<string | null>(null);
  const coverRef = useRef<Blob | null>(null);

  const handleFile = async (f: File | null) => {
    setFile(f);
    if (f) {
      const blob = await extractPdfCover(f).catch(() => null);
      if (blob) { coverRef.current = blob; setCoverPreview(URL.createObjectURL(blob)); }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;
    try {
      setLoading(true);
      await uploadChapter(bookId, nextChapNum, file, chapTitle || `Chapter ${nextChapNum}`, coverRef.current ?? undefined);
      onSuccess();
      onClose();
    } catch (err: any) {
      alert(err?.response?.data?.message || 'Lỗi upload chapter');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-end sm:items-center justify-center z-50 p-4">
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl w-full max-w-md shadow-2xl overflow-hidden mb-safe">
        <div className="h-1 bg-gradient-to-r from-violet-600 to-blue-600" />
        <div className="p-5 sm:p-6">
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-lg font-bold text-white">Upload Chapter {nextChapNum}</h3>
            <button onClick={onClose} className="p-2 rounded-full text-zinc-500 hover:text-white hover:bg-zinc-800 transition-all">
              <X className="w-4 h-4" />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-zinc-300 mb-1.5">Tên chapter (tùy chọn)</label>
              <input
                type="text"
                value={chapTitle}
                onChange={(e) => setChapTitle(e.target.value)}
                placeholder={`Chapter ${nextChapNum}`}
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </div>
            <div>
              <label className="block text-sm text-zinc-300 mb-1.5">File PDF <span className="text-red-400">*</span></label>
              <div className="flex gap-3">
                <label
                  htmlFor="chap-upload"
                  className={`flex-1 flex flex-col items-center gap-2 border-2 border-dashed rounded-xl p-4 cursor-pointer transition-all ${
                    file ? 'border-violet-500 bg-violet-500/10' : 'border-zinc-700 hover:border-zinc-500'
                  }`}
                >
                  <Upload className="w-5 h-5 text-zinc-400" />
                  <span className="text-sm text-zinc-400 text-center break-all">{file ? file.name : 'Chọn file PDF'}</span>
                  <input id="chap-upload" type="file" accept="application/pdf" className="hidden" onChange={(e) => handleFile(e.target.files?.[0] || null)} />
                </label>
                {coverPreview && (
                  <img src={coverPreview} alt="cover" className="w-16 h-24 object-cover rounded-lg border border-zinc-700 shrink-0" />
                )}
              </div>
            </div>
            <button
              type="submit"
              disabled={!file || loading}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white font-semibold transition-all disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Upload Chapter'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

// ── Main Book Detail ──────────────────────────────────
function BookDetailContent() {
  const params = useParams();
  const router = useRouter();
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(true);
  const [confirmDeleteBook, setConfirmDeleteBook] = useState(false);
  const [deletingBook, setDeletingBook] = useState(false);
  const [confirmDeleteChap, setConfirmDeleteChap] = useState<Chapter | null>(null);
  const [deletingChap, setDeletingChap] = useState(false);
  const [showUploadChap, setShowUploadChap] = useState(false);
  const [coverUploading, setCoverUploading] = useState(false);
  const [localCoverUrl, setLocalCoverUrl] = useState<string | null>(null);
  const coverInputRef = useRef<HTMLInputElement>(null);

  const loadBook = async () => {
    try {
      const data = await getBook(params.id as string);
      setBook(data);
    } catch {
      router.push('/');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { if (params.id) loadBook(); }, [params.id]);

  const handleDeleteBook = async () => {
    try {
      setDeletingBook(true);
      await deleteBook(book!.id);
      router.replace('/');
    } catch {
      alert('Xóa thất bại');
      setDeletingBook(false);
    }
  };

  const handleDeleteChapter = async () => {
    if (!confirmDeleteChap) return;
    try {
      setDeletingChap(true);
      await deleteChapter(confirmDeleteChap.id);
      setConfirmDeleteChap(null);
      loadBook();
    } catch {
      alert('Xóa chapter thất bại');
    } finally {
      setDeletingChap(false);
    }
  };

  const getReadUrl = (chapterId?: number, page?: number) => {
    const chap = chapterId
      ? book!.chapters.find((c) => c.id === chapterId)
      : book!.chapters[0];
    return `/read/${book!.id}?chapter=${chap?.chapterNum ?? 1}&page=${page ?? 1}`;
  };

  const getContinueUrl = () => {
    if (book!.currentChapterId) return getReadUrl(book!.currentChapterId, book!.currentPage);
    return `/read/${book!.id}?chapter=${book!.chapters[0]?.chapterNum ?? 1}&page=${book!.currentPage}`;
  };

  const handleCoverChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !book) return;
    // Instant local preview
    setLocalCoverUrl(URL.createObjectURL(file));
    try {
      setCoverUploading(true);
      await uploadBookCover(book.id, file);
      await loadBook(); // refresh to get server URL
    } catch (err: any) {
      alert(err?.response?.data?.message || 'Lỗi upload ảnh bìa');
      setLocalCoverUrl(null);
    } finally {
      setCoverUploading(false);
      // reset input so same file can be re-selected
      if (coverInputRef.current) coverInputRef.current.value = '';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-violet-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }
  if (!book) return null;

  const coverUrl = book.coverPath ? getAssetUrl(book.coverPath) : null;
  const nextChapNum = (book.chapters[book.chapters.length - 1]?.chapterNum ?? 0) + 1;
  const hasChapters = book.chapters.length > 0;

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center gap-3">
          <button
            onClick={() => router.push('/')}
            className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all shrink-0"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="font-semibold truncate text-sm">{book.title}</h1>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        {/* ── Book hero ── */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">

          {/* Cover — clickable to change */}
          <div className="shrink-0 flex justify-center sm:block">
            <div
              className="relative w-36 h-52 sm:w-52 sm:h-72 rounded-2xl overflow-hidden shadow-2xl shadow-black/60 border border-zinc-800 cursor-pointer group"
              onClick={() => coverInputRef.current?.click()}
              title="Nhấp để đổi ảnh bìa"
            >
              {/* Actual cover image */}
              {(localCoverUrl || coverUrl) ? (
                <img
                  src={localCoverUrl || coverUrl!}
                  alt={book.title}
                  className="w-full h-full object-cover transition-all group-hover:brightness-50"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-violet-900/50 to-blue-900/50 flex items-center justify-center group-hover:from-violet-800/60 group-hover:to-blue-800/60 transition-all">
                  <BookOpen className="w-12 h-12 sm:w-16 sm:h-16 text-zinc-600 group-hover:opacity-30 transition-opacity" />
                </div>
              )}

              {/* Hover / Loading overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                {coverUploading ? (
                  <Loader2 className="w-7 h-7 text-white animate-spin" />
                ) : (
                  <>
                    <Camera className="w-7 h-7 text-white drop-shadow-lg" />
                    <span className="text-white text-xs font-medium px-2 text-center drop-shadow-lg">Đổi ảnh bìa</span>
                  </>
                )}
              </div>
            </div>

            {/* Hidden file input */}
            <input
              ref={coverInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleCoverChange}
            />
          </div>

          {/* Info */}
          <div className="flex-1 space-y-3 sm:space-y-4 text-center sm:text-left">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold">{book.title}</h2>
              {book.category && (
                <span className="inline-block mt-2 bg-violet-600/20 text-violet-400 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide border border-violet-600/30">
                  {book.category.name}
                </span>
              )}
            </div>

            <div className="space-y-1.5 text-sm">
              {book.author && (
                <div className="flex items-center justify-center sm:justify-start gap-2 text-zinc-300">
                  <User className="w-4 h-4 text-zinc-500 shrink-0" />
                  <span>{book.author}</span>
                </div>
              )}
              <div className="flex items-center justify-center sm:justify-start gap-2 text-zinc-400">
                <Layers className="w-4 h-4 text-zinc-500 shrink-0" />
                <span>{book.isMultiChap ? `${book.chapters.length} chương` : 'Sách đơn'}</span>
              </div>
              {book.description && (
                <div className="flex gap-2 text-zinc-400 pt-1">
                  <AlignLeft className="w-4 h-4 text-zinc-500 mt-0.5 shrink-0" />
                  <p className="leading-relaxed text-left">{book.description}</p>
                </div>
              )}
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center sm:justify-start pt-2">
              {hasChapters && (
                <button
                  onClick={() => router.push(getReadUrl())}
                  className="flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white font-semibold transition-all shadow-lg hover:shadow-violet-500/25 hover:-translate-y-0.5 text-sm"
                >
                  <Play className="w-4 h-4 fill-current" /> Đọc từ đầu
                </button>
              )}
              {hasChapters && (book.currentPage > 1 || book.currentChapterId) && (
                <button
                  onClick={() => router.push(getContinueUrl())}
                  className="flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-semibold transition-all border border-zinc-700 text-sm"
                >
                  <BookMarked className="w-4 h-4" /> Đọc tiếp
                </button>
              )}
            </div>

            {/* Delete */}
            <div className="pt-1 flex justify-center sm:justify-start">
              <button
                onClick={() => setConfirmDeleteBook(true)}
                className="flex items-center gap-2 text-sm text-red-500 hover:text-red-400 transition-colors"
              >
                <Trash2 className="w-4 h-4" /> Xóa toàn bộ truyện
              </button>
            </div>
          </div>
        </div>

        {/* ── Chapters ── */}
        <div className="mt-10 sm:mt-12">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base sm:text-lg font-bold">
              {book.isMultiChap ? 'Danh sách chương' : 'File PDF'}
            </h3>
            {book.isMultiChap && (
              <button
                onClick={() => setShowUploadChap(true)}
                className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-sm text-white transition-all border border-zinc-700"
              >
                <Plus className="w-4 h-4" />
                <span className="hidden xs:inline">Upload chap mới</span>
                <span className="xs:hidden">Upload</span>
              </button>
            )}
          </div>

          {book.chapters.length === 0 ? (
            <div className="text-center py-10 border-2 border-dashed border-zinc-800 rounded-2xl">
              <p className="text-zinc-500 mb-4 text-sm">Chưa có chapter nào</p>
              {book.isMultiChap && (
                <button
                  onClick={() => setShowUploadChap(true)}
                  className="px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-medium text-sm transition-all"
                >
                  Upload chapter đầu tiên
                </button>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {book.chapters.map((chap) => {
                const chapCoverUrl = chap.coverPath ? getAssetUrl(chap.coverPath) : null;
                return (
                  <div
                    key={chap.id}
                    className="flex bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-violet-600/50 hover:shadow-lg hover:shadow-violet-900/20 transition-all group"
                  >
                    {/* Thumbnail */}
                    <button
                      onClick={() => router.push(`/read/${book.id}?chapter=${chap.chapterNum}&page=1`)}
                      className="shrink-0 w-20 sm:w-24 relative overflow-hidden"
                    >
                      {chapCoverUrl ? (
                        <img
                          src={chapCoverUrl}
                          alt={chap.title || `Chapter ${chap.chapterNum}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full min-h-[88px] bg-gradient-to-br from-violet-900/60 to-blue-900/60 flex items-center justify-center group-hover:from-violet-800/70 group-hover:to-blue-800/70 transition-all">
                          <BookOpen className="w-6 h-6 text-zinc-500 group-hover:text-violet-400 transition-colors" />
                        </div>
                      )}
                      {/* Chapter number badge */}
                      <div className="absolute bottom-1 left-1 bg-black/70 backdrop-blur-sm text-white text-[10px] font-bold px-1.5 py-0.5 rounded-md">
                        #{chap.chapterNum}
                      </div>
                    </button>

                    {/* Info */}
                    <div className="flex-1 flex flex-col justify-between p-3 min-w-0">
                      <div>
                        <button
                          onClick={() => router.push(`/read/${book.id}?chapter=${chap.chapterNum}&page=1`)}
                          className="text-left w-full"
                        >
                          <p className="font-semibold text-zinc-100 group-hover:text-violet-400 transition-colors text-sm leading-tight truncate">
                            {chap.title || `Chapter ${chap.chapterNum}`}
                          </p>
                          <p className="text-xs text-zinc-500 mt-1">
                            {new Date(chap.createdAt).toLocaleDateString('vi-VN')}
                          </p>
                        </button>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => router.push(`/read/${book.id}?chapter=${chap.chapterNum}&page=1`)}
                          className="flex-1 py-1.5 rounded-lg bg-zinc-800 hover:bg-violet-600/20 hover:text-violet-400 text-xs font-medium text-zinc-400 transition-all border border-zinc-700 text-center"
                        >
                          Đọc ngay
                        </button>
                        <button
                          onClick={() => setConfirmDeleteChap(chap)}
                          className="p-1.5 rounded-lg text-zinc-600 hover:text-red-500 hover:bg-red-500/10 transition-all"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {confirmDeleteBook && (
        <ConfirmDialog
          message={`Bạn có chắc muốn xóa\n"${book.title}"?\nHành động này không thể hoàn tác.`}
          onConfirm={handleDeleteBook}
          onCancel={() => setConfirmDeleteBook(false)}
          loading={deletingBook}
        />
      )}
      {confirmDeleteChap && (
        <ConfirmDialog
          message={`Xóa ${confirmDeleteChap.title || `Chapter ${confirmDeleteChap.chapterNum}`}?`}
          onConfirm={handleDeleteChapter}
          onCancel={() => setConfirmDeleteChap(null)}
          loading={deletingChap}
        />
      )}
      {showUploadChap && (
        <UploadChapterModal
          bookId={book.id}
          nextChapNum={nextChapNum}
          onClose={() => setShowUploadChap(false)}
          onSuccess={loadBook}
        />
      )}
    </div>
  );
}

export default function BookDetailPage() {
  return (
    <AuthGuard>
      <BookDetailContent />
    </AuthGuard>
  );
}
