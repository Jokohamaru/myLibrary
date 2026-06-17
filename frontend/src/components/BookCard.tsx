import Link from 'next/link';
import { Layers } from 'lucide-react';
import { getAssetUrl } from '@/lib/api';

interface Book {
  id: number;
  title: string;
  author?: string;
  coverPath?: string;
  isMultiChap: boolean;
  category?: { id: number; name: string };
  chapters: { id: number }[];
  createdAt: string;
}

export default function BookCard({ book }: { book: Book }) {
  const coverUrl = book.coverPath ? getAssetUrl(book.coverPath) : null;

  return (
    <Link href={`/books/${book.id}`} className="group block">
      <div className="relative bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-600 hover:shadow-2xl hover:shadow-violet-500/10 transition-all duration-300 hover:-translate-y-1">
        {/* Cover */}
        <div className="aspect-[3/4] relative overflow-hidden bg-zinc-800">
          {coverUrl ? (
            <img
              src={coverUrl}
              alt={book.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-violet-900/40 to-blue-900/40">
              <div className="text-center px-3">
                <div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center mx-auto mb-2">
                  <span className="text-2xl font-bold text-violet-400">{book.title[0]}</span>
                </div>
                <p className="text-xs text-zinc-500 line-clamp-3">{book.title}</p>
              </div>
            </div>
          )}

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
            <span className="text-white text-xs font-medium">Xem chi tiết →</span>
          </div>

          {/* Category badge */}
          {book.category && (
            <div className="absolute top-2 left-2">
              <span className="bg-violet-600/90 backdrop-blur-sm text-white text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wide">
                {book.category.name}
              </span>
            </div>
          )}

          {/* Multi-chap badge */}
          {book.isMultiChap && (
            <div className="absolute top-2 right-2">
              <div className="bg-blue-600/90 backdrop-blur-sm text-white rounded-full w-7 h-7 flex items-center justify-center" title={`${book.chapters.length} chap`}>
                <Layers className="w-3.5 h-3.5" />
              </div>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="p-3">
          <h3 className="font-semibold text-white text-sm leading-tight line-clamp-2" title={book.title}>
            {book.title}
          </h3>
          {book.author && (
            <p className="text-xs text-zinc-500 mt-0.5 truncate">{book.author}</p>
          )}
          {book.isMultiChap && (
            <p className="text-xs text-zinc-600 mt-1">{book.chapters.length} chương</p>
          )}
        </div>
      </div>
    </Link>
  );
}
