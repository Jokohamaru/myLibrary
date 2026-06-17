'use client';

import { useEffect, useState, useRef } from 'react';
import { Upload, X, Plus, Loader2, BookOpen, Layers } from 'lucide-react';
import { createBook, uploadChapter, getCategories, extractPdfCover } from '@/lib/api';

interface Category {
  id: number;
  name: string;
}

interface UploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUploadSuccess: (bookId?: number) => void;
}

export default function UploadModal({ isOpen, onClose, onUploadSuccess }: UploadModalProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [isMultiChap, setIsMultiChap] = useState(false);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | '' | '__new__'>('');
  const [newCategoryName, setNewCategoryName] = useState('');
  const [categories, setCategories] = useState<Category[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [coverPreview, setCoverPreview] = useState<string | null>(null);
  const coverBlobRef = useRef<Blob | null>(null);

  useEffect(() => {
    if (isOpen) getCategories().then(setCategories).catch(console.error);
  }, [isOpen]);

  const handleFileChange = async (f: File | null) => {
    setFile(f);
    setCoverPreview(null);
    coverBlobRef.current = null;
    if (f) {
      try {
        const blob = await extractPdfCover(f);
        coverBlobRef.current = blob;
        setCoverPreview(URL.createObjectURL(blob));
      } catch {
        // cover extraction failed, continue without cover
      }
    }
  };

  const handleClose = () => {
    setStep(1);
    setIsMultiChap(false);
    setTitle(''); setAuthor(''); setDescription('');
    setSelectedCategoryId(''); setNewCategoryName('');
    setFile(null); setCoverPreview(null); coverBlobRef.current = null;
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    if (!isMultiChap && !file) return;

    try {
      setLoading(true);
      const catId = typeof selectedCategoryId === 'number' ? selectedCategoryId : undefined;
      const catName = newCategoryName.trim() || undefined;

      const book = await createBook({
        title,
        author: author || undefined,
        description: description || undefined,
        isMultiChap,
        categoryId: catId,
        categoryName: catName,
      });

      if (!isMultiChap && file) {
        const nextChap = 1;
        await uploadChapter(book.id, nextChap, file, `Chapter 1`, coverBlobRef.current ?? undefined);
      }

      handleClose();
      onUploadSuccess(book.id);
    } catch (err: any) {
      alert(err?.response?.data?.message || 'Lỗi khi tạo sách');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-end sm:items-center justify-center z-50 p-0 sm:p-4">
      <div className="bg-zinc-900 border border-zinc-800 rounded-t-3xl sm:rounded-2xl w-full max-w-lg shadow-2xl relative overflow-hidden max-h-[92dvh] overflow-y-auto sm:max-h-[90vh]">
        {/* Drag handle — mobile only */}
        <div className="sm:hidden flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 rounded-full bg-zinc-700" />
        </div>

        {/* Decorative gradient */}
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-violet-600 to-blue-600" />

        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white">Thêm Sách Mới</h2>
            <button onClick={handleClose} className="p-2 rounded-full text-zinc-500 hover:text-white hover:bg-zinc-800 transition-all">
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Book type selector */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { value: false, icon: BookOpen, label: 'Sách đơn', desc: '1 file PDF' },
                { value: true, icon: Layers, label: 'Nhiều chap', desc: 'Upload lần lượt' },
              ].map((opt) => (
                <button
                  key={String(opt.value)}
                  type="button"
                  onClick={() => setIsMultiChap(opt.value)}
                  className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${
                    isMultiChap === opt.value
                      ? 'border-violet-500 bg-violet-500/10 text-violet-300'
                      : 'border-zinc-700 text-zinc-400 hover:border-zinc-500'
                  }`}
                >
                  <opt.icon className="w-6 h-6" />
                  <span className="font-semibold text-sm">{opt.label}</span>
                  <span className="text-xs opacity-70">{opt.desc}</span>
                </button>
              ))}
            </div>

            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-1.5">Tên sách <span className="text-red-400">*</span></label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                placeholder="Nhập tên sách..."
                className="w-full px-4 py-3 bg-zinc-800/60 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all"
              />
            </div>

            {/* Author */}
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-1.5">Tác giả</label>
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Tên tác giả..."
                className="w-full px-4 py-3 bg-zinc-800/60 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-1.5">Mô tả</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Tóm tắt nội dung..."
                rows={2}
                className="w-full px-4 py-3 bg-zinc-800/60 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all resize-none"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-1.5">Danh mục</label>
              <div className="flex gap-2">
                <select
                  value={selectedCategoryId}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (val === '') setSelectedCategoryId('');
                    else if (val === '__new__') setSelectedCategoryId('__new__');
                    else setSelectedCategoryId(Number(val));
                    setNewCategoryName('');
                  }}
                  className="flex-1 px-4 py-3 bg-zinc-800/60 border border-zinc-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all"
                >
                  <option value="">-- Không có --</option>
                  {categories.map((c) => (
                    <option key={c.id} value={c.id}>{c.name}</option>
                  ))}
                  <option value="__new__">+ Tạo mới...</option>
                </select>
              </div>
              {selectedCategoryId === '__new__' && (
                <input
                  type="text"
                  value={newCategoryName}
                  onChange={(e) => setNewCategoryName(e.target.value)}
                  placeholder="Nhập tên danh mục mới (vd: manga)"
                  autoFocus
                  className="mt-2 w-full px-4 py-3 bg-zinc-800/60 border border-violet-500 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all"
                />
              )}
            </div>

            {/* PDF file — only for single book */}
            {!isMultiChap && (
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-1.5">File PDF <span className="text-red-400">*</span></label>
                <div className="flex gap-3 items-start">
                  <label
                    htmlFor="pdf-upload"
                    className={`flex-1 flex flex-col items-center gap-2 border-2 border-dashed rounded-xl p-5 cursor-pointer transition-all ${
                      file ? 'border-violet-500 bg-violet-500/10' : 'border-zinc-700 hover:border-zinc-500 hover:bg-zinc-800/50'
                    }`}
                  >
                    <Upload className="w-6 h-6 text-zinc-400" />
                    <span className="text-sm text-zinc-400 text-center">
                      {file ? file.name : 'Nhấp để chọn file PDF'}
                    </span>
                    <input
                      id="pdf-upload"
                      type="file"
                      accept="application/pdf"
                      className="hidden"
                      onChange={(e) => handleFileChange(e.target.files?.[0] || null)}
                    />
                  </label>
                  {coverPreview && (
                    <div className="shrink-0">
                      <img src={coverPreview} alt="Cover preview" className="w-20 h-28 object-cover rounded-lg border border-zinc-700" />
                      <p className="text-xs text-zinc-500 text-center mt-1">Ảnh bìa</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {isMultiChap && (
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 text-sm text-blue-300">
                Sách nhiều chap: Sau khi tạo, bạn có thể upload từng chapter ở <strong>Trang Giới Thiệu</strong> của sách.
              </div>
            )}

            <button
              type="submit"
              disabled={loading || !title.trim() || (!isMultiChap && !file)}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white font-semibold transition-all shadow-lg hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:translate-y-0 flex items-center justify-center gap-2"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : isMultiChap ? 'Tạo sách' : 'Upload & Lưu'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
