import axios from 'axios';
import { getUser } from './auth';

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',
});

// Helper: build a full URL for static assets served by the backend
export const getAssetUrl = (path: string) =>
  `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}${path}`;

// Attach x-user-id header automatically
api.interceptors.request.use((config) => {
  const user = getUser();
  if (user?.id) {
    config.headers['x-user-id'] = String(user.id);
  }
  return config;
});

// ── Auth ──────────────────────────────────────────────
export const register = async (email: string, password: string) => {
  const res = await api.post('/auth/register', { email, password });
  return res.data;
};

export const login = async (email: string, password: string) => {
  const res = await api.post('/auth/login', { email, password });
  return res.data;
};

// ── Categories ────────────────────────────────────────
export const getCategories = async () => {
  const res = await api.get('/categories');
  return res.data;
};

// ── Books ─────────────────────────────────────────────
export const getBooks = async () => {
  const res = await api.get('/books');
  return res.data;
};

export const getBook = async (id: string | number) => {
  const res = await api.get(`/books/${id}`);
  return res.data;
};

export const createBook = async (data: {
  title: string;
  author?: string;
  description?: string;
  isMultiChap?: boolean;
  categoryId?: number;
  categoryName?: string;
}) => {
  const res = await api.post('/books', data);
  return res.data;
};

export const updateBook = async (
  id: number,
  data: {
    currentPage?: number;
    currentChapterId?: number;
    readingMode?: string;
    title?: string;
    author?: string;
    description?: string;
  },
) => {
  const res = await api.patch(`/books/${id}`, data);
  return res.data;
};

export const deleteBook = async (id: number) => {
  const res = await api.delete(`/books/${id}`);
  return res.data;
};

export const uploadBookCover = async (id: number, imageFile: File) => {
  const formData = new FormData();
  formData.append('cover', imageFile);
  const res = await api.post(`/books/${id}/cover`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return res.data;
};

// ── Chapters ──────────────────────────────────────────
export const uploadChapter = async (
  bookId: number,
  chapterNum: number,
  file: File,
  title?: string,
  coverBlob?: Blob,
) => {
  const formData = new FormData();
  formData.append('bookId', String(bookId));
  formData.append('chapterNum', String(chapterNum));
  formData.append('file', file);
  if (title) formData.append('title', title);
  if (coverBlob) {
    formData.append('cover', coverBlob, 'cover.png');
  }
  const res = await api.post('/chapters/upload', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return res.data;
};

export const deleteChapter = async (id: number) => {
  const res = await api.delete(`/chapters/${id}`);
  return res.data;
};

// ── PDF cover extraction (front-end) ──────────────────
export const extractPdfCover = async (file: File): Promise<Blob> => {
  const { getDocument, GlobalWorkerOptions } = await import('pdfjs-dist');
  GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${(await import('pdfjs-dist')).version}/build/pdf.worker.min.mjs`;

  const arrayBuffer = await file.arrayBuffer();
  const pdf = await getDocument({ data: arrayBuffer }).promise;
  const page = await pdf.getPage(1);
  const viewport = page.getViewport({ scale: 1.5 });

  const canvas = document.createElement('canvas');
  canvas.width = viewport.width;
  canvas.height = viewport.height;
  const ctx = canvas.getContext('2d')!;
  await page.render({ canvasContext: ctx, viewport, canvas } as any).promise;

  return new Promise((resolve) => {
    canvas.toBlob((blob) => resolve(blob!), 'image/png', 0.85);
  });
};
