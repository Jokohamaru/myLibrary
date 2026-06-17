'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Plus, BookOpen, LogOut, Search, X, Library } from 'lucide-react';
import { getBooks, getCategories } from '@/lib/api';
import { getUser, removeUser } from '@/lib/auth';
import BookCard from '@/components/BookCard';
import UploadModal from '@/components/UploadModal';
import AuthGuard from '@/components/AuthGuard';

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

interface Category {
  id: number;
  name: string;
}

function HomeContent() {
  const router = useRouter();
  const user = getUser();
  const [books, setBooks] = useState<Book[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const loadData = useCallback(async () => {
    try {
      setLoading(true);
      const [booksData, catsData] = await Promise.all([getBooks(), getCategories()]);
      setBooks(booksData);
      setCategories(catsData);
    } catch (err) {
      console.error('Failed to load data', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { loadData(); }, [loadData]);

  const handleLogout = () => {
    removeUser();
    router.replace('/login');
  };

  const handleUploadSuccess = (bookId?: number) => {
    loadData();
    if (bookId) router.push(`/books/${bookId}`);
  };

  const filteredBooks = books.filter((b) => {
    const matchesCategory = activeCategory === null || b.category?.id === activeCategory;
    const matchesSearch =
      b.title.toLowerCase().includes(search.toLowerCase()) ||
      (b.author?.toLowerCase().includes(search.toLowerCase()) ?? false);
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* ── Header ── */}
      <header className="sticky top-0 z-30 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-3">

          {/* Logo */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-base sm:text-lg hidden xs:block">MyLibrary</span>
          </div>

          {/* Search — desktop inline */}
          <div className="flex-1 max-w-xs hidden sm:block">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Tìm kiếm sách..."
                className="w-full pl-9 pr-4 py-2 bg-zinc-800/60 border border-zinc-700/50 rounded-xl text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-1 sm:gap-3">
            {/* Mobile search toggle */}
            <button
              onClick={() => setShowSearch((v) => !v)}
              className="sm:hidden p-2.5 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all"
              aria-label="Tìm kiếm"
            >
              {showSearch ? <X className="w-5 h-5" /> : <Search className="w-5 h-5" />}
            </button>

            {/* User email — md+ */}
            <span className="text-sm text-zinc-400 hidden lg:block truncate max-w-[160px]">{user?.email}</span>

            {/* Add book */}
            <button
              onClick={() => setIsUploadOpen(true)}
              className="flex items-center gap-1.5 bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white px-3 sm:px-4 py-2 rounded-xl font-medium text-sm transition-all shadow-lg hover:shadow-violet-500/25"
            >
              <Plus className="w-4 h-4" />
              <span className="hidden sm:inline">Thêm sách</span>
            </button>

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="p-2.5 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all"
              title="Đăng xuất"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Mobile search bar — expandable */}
        {showSearch && (
          <div className="sm:hidden px-4 pb-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
              <input
                autoFocus
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Tìm kiếm sách..."
                className="w-full pl-9 pr-4 py-2.5 bg-zinc-800/80 border border-zinc-700 rounded-xl text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all"
              />
            </div>
          </div>
        )}
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 sm:py-8">
        {/* ── Category tabs ── */}
        {categories.length > 0 && (
          <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-1 scrollbar-hide">
            <button
              onClick={() => setActiveCategory(null)}
              className={`shrink-0 px-3.5 py-1.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === null
                  ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/25'
                  : 'bg-zinc-800 text-zinc-400 hover:text-white'
              }`}
            >
              Tất cả
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
                className={`shrink-0 px-3.5 py-1.5 rounded-full text-sm font-medium capitalize transition-all ${
                  activeCategory === cat.id
                    ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/25'
                    : 'bg-zinc-800 text-zinc-400 hover:text-white'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        )}

        {/* ── Book grid ── */}
        {loading ? (
          <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-5">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="animate-pulse bg-zinc-800/60 rounded-2xl aspect-[3/4]" />
            ))}
          </div>
        ) : filteredBooks.length > 0 ? (
          <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-5">
            {filteredBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 sm:py-32">
            <div className="w-20 h-20 rounded-2xl bg-zinc-800 flex items-center justify-center mx-auto mb-4">
              <Library className="w-10 h-10 text-zinc-600" />
            </div>
            <h3 className="text-xl font-semibold text-zinc-300 mb-2">
              {search ? 'Không tìm thấy kết quả' : 'Thư viện trống'}
            </h3>
            <p className="text-zinc-500 mb-6 px-6">
              {search ? 'Thử từ khóa khác' : 'Thêm cuốn sách đầu tiên của bạn!'}
            </p>
            {!search && (
              <button
                onClick={() => setIsUploadOpen(true)}
                className="px-6 py-3 bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white rounded-xl font-medium transition-all shadow-lg"
              >
                Thêm sách ngay
              </button>
            )}
          </div>
        )}
      </div>

      {/* ── Mobile FAB — add book shortcut ── */}
      <div className="fixed bottom-6 right-4 sm:hidden z-20 pb-safe">
        <button
          onClick={() => setIsUploadOpen(true)}
          className="w-14 h-14 rounded-full bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center shadow-2xl shadow-violet-500/40 active:scale-95 transition-transform"
          aria-label="Thêm sách"
        >
          <Plus className="w-6 h-6 text-white" />
        </button>
      </div>

      <UploadModal
        isOpen={isUploadOpen}
        onClose={() => setIsUploadOpen(false)}
        onUploadSuccess={handleUploadSuccess}
      />
    </main>
  );
}

export default function Home() {
  return (
    <AuthGuard>
      <HomeContent />
    </AuthGuard>
  );
}
