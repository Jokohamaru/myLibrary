'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { getBook, getAssetUrl } from '@/lib/api';
import PDFReader from '@/components/PDFReader';
import AuthGuard from '@/components/AuthGuard';

interface Chapter {
  id: number;
  chapterNum: number;
  title?: string;
  path: string;
}

interface Book {
  id: number;
  title: string;
  currentPage: number;
  currentChapterId?: number;
  readingMode: string;
  chapters: Chapter[];
}

function ReaderContent() {
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(true);

  const chapNumParam = parseInt(searchParams.get('chapter') || '1', 10);
  const pageParam = parseInt(searchParams.get('page') || '1', 10);
  const [currentChapNum, setCurrentChapNum] = useState(chapNumParam);

  useEffect(() => {
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
    if (params.id) loadBook();
  }, [params.id]);

  const handleChapterChange = (chapNum: number) => {
    setCurrentChapNum(chapNum);
    router.replace(`/read/${params.id}?chapter=${chapNum}&page=1`, { scroll: false });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-950">
        <div className="w-10 h-10 border-4 border-violet-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!book) return null;

  const chapter = book.chapters.find((c) => c.chapterNum === currentChapNum) || book.chapters[0];
  if (!chapter) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-950 text-white">
        <p>Không tìm thấy chapter</p>
      </div>
    );
  }

  const fileUrl = getAssetUrl(chapter.path);

  return (
    <PDFReader
      bookId={book.id}
      fileUrl={fileUrl}
      initialPage={pageParam}
      initialMode={(book.readingMode as 'scroll' | 'paged') || 'scroll'}
      chapters={book.chapters}
      currentChapterNum={currentChapNum}
      onChapterChange={handleChapterChange}
      bookTitle={book.title}
      onBack={() => router.push(`/books/${book.id}`)}
    />
  );
}

export default function ReaderPage() {
  return (
    <AuthGuard>
      <ReaderContent />
    </AuthGuard>
  );
}
