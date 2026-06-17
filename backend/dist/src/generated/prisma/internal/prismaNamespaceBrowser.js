import * as runtime from "@prisma/client/runtime/index-browser";
export const Decimal = runtime.Decimal;
export const NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
export const DbNull = runtime.DbNull;
export const JsonNull = runtime.JsonNull;
export const AnyNull = runtime.AnyNull;
export const ModelName = {
    User: 'User',
    Category: 'Category',
    Book: 'Book',
    Chapter: 'Chapter'
};
export const TransactionIsolationLevel = runtime.makeStrictEnum({
    Serializable: 'Serializable'
});
export const UserScalarFieldEnum = {
    id: 'id',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt'
};
export const CategoryScalarFieldEnum = {
    id: 'id',
    name: 'name'
};
export const BookScalarFieldEnum = {
    id: 'id',
    title: 'title',
    author: 'author',
    description: 'description',
    coverPath: 'coverPath',
    isMultiChap: 'isMultiChap',
    currentPage: 'currentPage',
    currentChapterId: 'currentChapterId',
    readingMode: 'readingMode',
    userId: 'userId',
    categoryId: 'categoryId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const ChapterScalarFieldEnum = {
    id: 'id',
    chapterNum: 'chapterNum',
    title: 'title',
    filename: 'filename',
    path: 'path',
    bookId: 'bookId',
    createdAt: 'createdAt'
};
export const SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
export const NullsOrder = {
    first: 'first',
    last: 'last'
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map