import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type BookModel = runtime.Types.Result.DefaultSelection<Prisma.$BookPayload>;
export type AggregateBook = {
    _count: BookCountAggregateOutputType | null;
    _avg: BookAvgAggregateOutputType | null;
    _sum: BookSumAggregateOutputType | null;
    _min: BookMinAggregateOutputType | null;
    _max: BookMaxAggregateOutputType | null;
};
export type BookAvgAggregateOutputType = {
    id: number | null;
    currentPage: number | null;
    currentChapterId: number | null;
    userId: number | null;
    categoryId: number | null;
};
export type BookSumAggregateOutputType = {
    id: number | null;
    currentPage: number | null;
    currentChapterId: number | null;
    userId: number | null;
    categoryId: number | null;
};
export type BookMinAggregateOutputType = {
    id: number | null;
    title: string | null;
    author: string | null;
    description: string | null;
    coverPath: string | null;
    isMultiChap: boolean | null;
    currentPage: number | null;
    currentChapterId: number | null;
    readingMode: string | null;
    userId: number | null;
    categoryId: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type BookMaxAggregateOutputType = {
    id: number | null;
    title: string | null;
    author: string | null;
    description: string | null;
    coverPath: string | null;
    isMultiChap: boolean | null;
    currentPage: number | null;
    currentChapterId: number | null;
    readingMode: string | null;
    userId: number | null;
    categoryId: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type BookCountAggregateOutputType = {
    id: number;
    title: number;
    author: number;
    description: number;
    coverPath: number;
    isMultiChap: number;
    currentPage: number;
    currentChapterId: number;
    readingMode: number;
    userId: number;
    categoryId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type BookAvgAggregateInputType = {
    id?: true;
    currentPage?: true;
    currentChapterId?: true;
    userId?: true;
    categoryId?: true;
};
export type BookSumAggregateInputType = {
    id?: true;
    currentPage?: true;
    currentChapterId?: true;
    userId?: true;
    categoryId?: true;
};
export type BookMinAggregateInputType = {
    id?: true;
    title?: true;
    author?: true;
    description?: true;
    coverPath?: true;
    isMultiChap?: true;
    currentPage?: true;
    currentChapterId?: true;
    readingMode?: true;
    userId?: true;
    categoryId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type BookMaxAggregateInputType = {
    id?: true;
    title?: true;
    author?: true;
    description?: true;
    coverPath?: true;
    isMultiChap?: true;
    currentPage?: true;
    currentChapterId?: true;
    readingMode?: true;
    userId?: true;
    categoryId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type BookCountAggregateInputType = {
    id?: true;
    title?: true;
    author?: true;
    description?: true;
    coverPath?: true;
    isMultiChap?: true;
    currentPage?: true;
    currentChapterId?: true;
    readingMode?: true;
    userId?: true;
    categoryId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type BookAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BookWhereInput;
    orderBy?: Prisma.BookOrderByWithRelationInput | Prisma.BookOrderByWithRelationInput[];
    cursor?: Prisma.BookWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BookCountAggregateInputType;
    _avg?: BookAvgAggregateInputType;
    _sum?: BookSumAggregateInputType;
    _min?: BookMinAggregateInputType;
    _max?: BookMaxAggregateInputType;
};
export type GetBookAggregateType<T extends BookAggregateArgs> = {
    [P in keyof T & keyof AggregateBook]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBook[P]> : Prisma.GetScalarType<T[P], AggregateBook[P]>;
};
export type BookGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BookWhereInput;
    orderBy?: Prisma.BookOrderByWithAggregationInput | Prisma.BookOrderByWithAggregationInput[];
    by: Prisma.BookScalarFieldEnum[] | Prisma.BookScalarFieldEnum;
    having?: Prisma.BookScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BookCountAggregateInputType | true;
    _avg?: BookAvgAggregateInputType;
    _sum?: BookSumAggregateInputType;
    _min?: BookMinAggregateInputType;
    _max?: BookMaxAggregateInputType;
};
export type BookGroupByOutputType = {
    id: number;
    title: string;
    author: string | null;
    description: string | null;
    coverPath: string | null;
    isMultiChap: boolean;
    currentPage: number;
    currentChapterId: number | null;
    readingMode: string;
    userId: number;
    categoryId: number | null;
    createdAt: Date;
    updatedAt: Date;
    _count: BookCountAggregateOutputType | null;
    _avg: BookAvgAggregateOutputType | null;
    _sum: BookSumAggregateOutputType | null;
    _min: BookMinAggregateOutputType | null;
    _max: BookMaxAggregateOutputType | null;
};
export type GetBookGroupByPayload<T extends BookGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BookGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BookGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BookGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BookGroupByOutputType[P]>;
}>>;
export type BookWhereInput = {
    AND?: Prisma.BookWhereInput | Prisma.BookWhereInput[];
    OR?: Prisma.BookWhereInput[];
    NOT?: Prisma.BookWhereInput | Prisma.BookWhereInput[];
    id?: Prisma.IntFilter<"Book"> | number;
    title?: Prisma.StringFilter<"Book"> | string;
    author?: Prisma.StringNullableFilter<"Book"> | string | null;
    description?: Prisma.StringNullableFilter<"Book"> | string | null;
    coverPath?: Prisma.StringNullableFilter<"Book"> | string | null;
    isMultiChap?: Prisma.BoolFilter<"Book"> | boolean;
    currentPage?: Prisma.IntFilter<"Book"> | number;
    currentChapterId?: Prisma.IntNullableFilter<"Book"> | number | null;
    readingMode?: Prisma.StringFilter<"Book"> | string;
    userId?: Prisma.IntFilter<"Book"> | number;
    categoryId?: Prisma.IntNullableFilter<"Book"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"Book"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Book"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    category?: Prisma.XOR<Prisma.CategoryNullableScalarRelationFilter, Prisma.CategoryWhereInput> | null;
    chapters?: Prisma.ChapterListRelationFilter;
};
export type BookOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    author?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    coverPath?: Prisma.SortOrderInput | Prisma.SortOrder;
    isMultiChap?: Prisma.SortOrder;
    currentPage?: Prisma.SortOrder;
    currentChapterId?: Prisma.SortOrderInput | Prisma.SortOrder;
    readingMode?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    category?: Prisma.CategoryOrderByWithRelationInput;
    chapters?: Prisma.ChapterOrderByRelationAggregateInput;
};
export type BookWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.BookWhereInput | Prisma.BookWhereInput[];
    OR?: Prisma.BookWhereInput[];
    NOT?: Prisma.BookWhereInput | Prisma.BookWhereInput[];
    title?: Prisma.StringFilter<"Book"> | string;
    author?: Prisma.StringNullableFilter<"Book"> | string | null;
    description?: Prisma.StringNullableFilter<"Book"> | string | null;
    coverPath?: Prisma.StringNullableFilter<"Book"> | string | null;
    isMultiChap?: Prisma.BoolFilter<"Book"> | boolean;
    currentPage?: Prisma.IntFilter<"Book"> | number;
    currentChapterId?: Prisma.IntNullableFilter<"Book"> | number | null;
    readingMode?: Prisma.StringFilter<"Book"> | string;
    userId?: Prisma.IntFilter<"Book"> | number;
    categoryId?: Prisma.IntNullableFilter<"Book"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"Book"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Book"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    category?: Prisma.XOR<Prisma.CategoryNullableScalarRelationFilter, Prisma.CategoryWhereInput> | null;
    chapters?: Prisma.ChapterListRelationFilter;
}, "id">;
export type BookOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    author?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    coverPath?: Prisma.SortOrderInput | Prisma.SortOrder;
    isMultiChap?: Prisma.SortOrder;
    currentPage?: Prisma.SortOrder;
    currentChapterId?: Prisma.SortOrderInput | Prisma.SortOrder;
    readingMode?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.BookCountOrderByAggregateInput;
    _avg?: Prisma.BookAvgOrderByAggregateInput;
    _max?: Prisma.BookMaxOrderByAggregateInput;
    _min?: Prisma.BookMinOrderByAggregateInput;
    _sum?: Prisma.BookSumOrderByAggregateInput;
};
export type BookScalarWhereWithAggregatesInput = {
    AND?: Prisma.BookScalarWhereWithAggregatesInput | Prisma.BookScalarWhereWithAggregatesInput[];
    OR?: Prisma.BookScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BookScalarWhereWithAggregatesInput | Prisma.BookScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Book"> | number;
    title?: Prisma.StringWithAggregatesFilter<"Book"> | string;
    author?: Prisma.StringNullableWithAggregatesFilter<"Book"> | string | null;
    description?: Prisma.StringNullableWithAggregatesFilter<"Book"> | string | null;
    coverPath?: Prisma.StringNullableWithAggregatesFilter<"Book"> | string | null;
    isMultiChap?: Prisma.BoolWithAggregatesFilter<"Book"> | boolean;
    currentPage?: Prisma.IntWithAggregatesFilter<"Book"> | number;
    currentChapterId?: Prisma.IntNullableWithAggregatesFilter<"Book"> | number | null;
    readingMode?: Prisma.StringWithAggregatesFilter<"Book"> | string;
    userId?: Prisma.IntWithAggregatesFilter<"Book"> | number;
    categoryId?: Prisma.IntNullableWithAggregatesFilter<"Book"> | number | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Book"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Book"> | Date | string;
};
export type BookCreateInput = {
    title: string;
    author?: string | null;
    description?: string | null;
    coverPath?: string | null;
    isMultiChap?: boolean;
    currentPage?: number;
    currentChapterId?: number | null;
    readingMode?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutBooksInput;
    category?: Prisma.CategoryCreateNestedOneWithoutBooksInput;
    chapters?: Prisma.ChapterCreateNestedManyWithoutBookInput;
};
export type BookUncheckedCreateInput = {
    id?: number;
    title: string;
    author?: string | null;
    description?: string | null;
    coverPath?: string | null;
    isMultiChap?: boolean;
    currentPage?: number;
    currentChapterId?: number | null;
    readingMode?: string;
    userId: number;
    categoryId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    chapters?: Prisma.ChapterUncheckedCreateNestedManyWithoutBookInput;
};
export type BookUpdateInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    author?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverPath?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isMultiChap?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    currentPage?: Prisma.IntFieldUpdateOperationsInput | number;
    currentChapterId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    readingMode?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutBooksNestedInput;
    category?: Prisma.CategoryUpdateOneWithoutBooksNestedInput;
    chapters?: Prisma.ChapterUpdateManyWithoutBookNestedInput;
};
export type BookUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    author?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverPath?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isMultiChap?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    currentPage?: Prisma.IntFieldUpdateOperationsInput | number;
    currentChapterId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    readingMode?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    categoryId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    chapters?: Prisma.ChapterUncheckedUpdateManyWithoutBookNestedInput;
};
export type BookCreateManyInput = {
    id?: number;
    title: string;
    author?: string | null;
    description?: string | null;
    coverPath?: string | null;
    isMultiChap?: boolean;
    currentPage?: number;
    currentChapterId?: number | null;
    readingMode?: string;
    userId: number;
    categoryId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BookUpdateManyMutationInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    author?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverPath?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isMultiChap?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    currentPage?: Prisma.IntFieldUpdateOperationsInput | number;
    currentChapterId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    readingMode?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BookUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    author?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverPath?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isMultiChap?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    currentPage?: Prisma.IntFieldUpdateOperationsInput | number;
    currentChapterId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    readingMode?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    categoryId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BookListRelationFilter = {
    every?: Prisma.BookWhereInput;
    some?: Prisma.BookWhereInput;
    none?: Prisma.BookWhereInput;
};
export type BookOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BookCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    author?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    coverPath?: Prisma.SortOrder;
    isMultiChap?: Prisma.SortOrder;
    currentPage?: Prisma.SortOrder;
    currentChapterId?: Prisma.SortOrder;
    readingMode?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BookAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    currentPage?: Prisma.SortOrder;
    currentChapterId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
};
export type BookMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    author?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    coverPath?: Prisma.SortOrder;
    isMultiChap?: Prisma.SortOrder;
    currentPage?: Prisma.SortOrder;
    currentChapterId?: Prisma.SortOrder;
    readingMode?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BookMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    author?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    coverPath?: Prisma.SortOrder;
    isMultiChap?: Prisma.SortOrder;
    currentPage?: Prisma.SortOrder;
    currentChapterId?: Prisma.SortOrder;
    readingMode?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BookSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    currentPage?: Prisma.SortOrder;
    currentChapterId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
};
export type BookScalarRelationFilter = {
    is?: Prisma.BookWhereInput;
    isNot?: Prisma.BookWhereInput;
};
export type BookCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.BookCreateWithoutUserInput, Prisma.BookUncheckedCreateWithoutUserInput> | Prisma.BookCreateWithoutUserInput[] | Prisma.BookUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.BookCreateOrConnectWithoutUserInput | Prisma.BookCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.BookCreateManyUserInputEnvelope;
    connect?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
};
export type BookUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.BookCreateWithoutUserInput, Prisma.BookUncheckedCreateWithoutUserInput> | Prisma.BookCreateWithoutUserInput[] | Prisma.BookUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.BookCreateOrConnectWithoutUserInput | Prisma.BookCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.BookCreateManyUserInputEnvelope;
    connect?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
};
export type BookUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.BookCreateWithoutUserInput, Prisma.BookUncheckedCreateWithoutUserInput> | Prisma.BookCreateWithoutUserInput[] | Prisma.BookUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.BookCreateOrConnectWithoutUserInput | Prisma.BookCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.BookUpsertWithWhereUniqueWithoutUserInput | Prisma.BookUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.BookCreateManyUserInputEnvelope;
    set?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
    disconnect?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
    delete?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
    connect?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
    update?: Prisma.BookUpdateWithWhereUniqueWithoutUserInput | Prisma.BookUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.BookUpdateManyWithWhereWithoutUserInput | Prisma.BookUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.BookScalarWhereInput | Prisma.BookScalarWhereInput[];
};
export type BookUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.BookCreateWithoutUserInput, Prisma.BookUncheckedCreateWithoutUserInput> | Prisma.BookCreateWithoutUserInput[] | Prisma.BookUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.BookCreateOrConnectWithoutUserInput | Prisma.BookCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.BookUpsertWithWhereUniqueWithoutUserInput | Prisma.BookUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.BookCreateManyUserInputEnvelope;
    set?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
    disconnect?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
    delete?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
    connect?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
    update?: Prisma.BookUpdateWithWhereUniqueWithoutUserInput | Prisma.BookUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.BookUpdateManyWithWhereWithoutUserInput | Prisma.BookUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.BookScalarWhereInput | Prisma.BookScalarWhereInput[];
};
export type BookCreateNestedManyWithoutCategoryInput = {
    create?: Prisma.XOR<Prisma.BookCreateWithoutCategoryInput, Prisma.BookUncheckedCreateWithoutCategoryInput> | Prisma.BookCreateWithoutCategoryInput[] | Prisma.BookUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.BookCreateOrConnectWithoutCategoryInput | Prisma.BookCreateOrConnectWithoutCategoryInput[];
    createMany?: Prisma.BookCreateManyCategoryInputEnvelope;
    connect?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
};
export type BookUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: Prisma.XOR<Prisma.BookCreateWithoutCategoryInput, Prisma.BookUncheckedCreateWithoutCategoryInput> | Prisma.BookCreateWithoutCategoryInput[] | Prisma.BookUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.BookCreateOrConnectWithoutCategoryInput | Prisma.BookCreateOrConnectWithoutCategoryInput[];
    createMany?: Prisma.BookCreateManyCategoryInputEnvelope;
    connect?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
};
export type BookUpdateManyWithoutCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.BookCreateWithoutCategoryInput, Prisma.BookUncheckedCreateWithoutCategoryInput> | Prisma.BookCreateWithoutCategoryInput[] | Prisma.BookUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.BookCreateOrConnectWithoutCategoryInput | Prisma.BookCreateOrConnectWithoutCategoryInput[];
    upsert?: Prisma.BookUpsertWithWhereUniqueWithoutCategoryInput | Prisma.BookUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: Prisma.BookCreateManyCategoryInputEnvelope;
    set?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
    disconnect?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
    delete?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
    connect?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
    update?: Prisma.BookUpdateWithWhereUniqueWithoutCategoryInput | Prisma.BookUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?: Prisma.BookUpdateManyWithWhereWithoutCategoryInput | Prisma.BookUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: Prisma.BookScalarWhereInput | Prisma.BookScalarWhereInput[];
};
export type BookUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.BookCreateWithoutCategoryInput, Prisma.BookUncheckedCreateWithoutCategoryInput> | Prisma.BookCreateWithoutCategoryInput[] | Prisma.BookUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.BookCreateOrConnectWithoutCategoryInput | Prisma.BookCreateOrConnectWithoutCategoryInput[];
    upsert?: Prisma.BookUpsertWithWhereUniqueWithoutCategoryInput | Prisma.BookUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: Prisma.BookCreateManyCategoryInputEnvelope;
    set?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
    disconnect?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
    delete?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
    connect?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
    update?: Prisma.BookUpdateWithWhereUniqueWithoutCategoryInput | Prisma.BookUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?: Prisma.BookUpdateManyWithWhereWithoutCategoryInput | Prisma.BookUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: Prisma.BookScalarWhereInput | Prisma.BookScalarWhereInput[];
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type BookCreateNestedOneWithoutChaptersInput = {
    create?: Prisma.XOR<Prisma.BookCreateWithoutChaptersInput, Prisma.BookUncheckedCreateWithoutChaptersInput>;
    connectOrCreate?: Prisma.BookCreateOrConnectWithoutChaptersInput;
    connect?: Prisma.BookWhereUniqueInput;
};
export type BookUpdateOneRequiredWithoutChaptersNestedInput = {
    create?: Prisma.XOR<Prisma.BookCreateWithoutChaptersInput, Prisma.BookUncheckedCreateWithoutChaptersInput>;
    connectOrCreate?: Prisma.BookCreateOrConnectWithoutChaptersInput;
    upsert?: Prisma.BookUpsertWithoutChaptersInput;
    connect?: Prisma.BookWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BookUpdateToOneWithWhereWithoutChaptersInput, Prisma.BookUpdateWithoutChaptersInput>, Prisma.BookUncheckedUpdateWithoutChaptersInput>;
};
export type BookCreateWithoutUserInput = {
    title: string;
    author?: string | null;
    description?: string | null;
    coverPath?: string | null;
    isMultiChap?: boolean;
    currentPage?: number;
    currentChapterId?: number | null;
    readingMode?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    category?: Prisma.CategoryCreateNestedOneWithoutBooksInput;
    chapters?: Prisma.ChapterCreateNestedManyWithoutBookInput;
};
export type BookUncheckedCreateWithoutUserInput = {
    id?: number;
    title: string;
    author?: string | null;
    description?: string | null;
    coverPath?: string | null;
    isMultiChap?: boolean;
    currentPage?: number;
    currentChapterId?: number | null;
    readingMode?: string;
    categoryId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    chapters?: Prisma.ChapterUncheckedCreateNestedManyWithoutBookInput;
};
export type BookCreateOrConnectWithoutUserInput = {
    where: Prisma.BookWhereUniqueInput;
    create: Prisma.XOR<Prisma.BookCreateWithoutUserInput, Prisma.BookUncheckedCreateWithoutUserInput>;
};
export type BookCreateManyUserInputEnvelope = {
    data: Prisma.BookCreateManyUserInput | Prisma.BookCreateManyUserInput[];
};
export type BookUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.BookWhereUniqueInput;
    update: Prisma.XOR<Prisma.BookUpdateWithoutUserInput, Prisma.BookUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.BookCreateWithoutUserInput, Prisma.BookUncheckedCreateWithoutUserInput>;
};
export type BookUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.BookWhereUniqueInput;
    data: Prisma.XOR<Prisma.BookUpdateWithoutUserInput, Prisma.BookUncheckedUpdateWithoutUserInput>;
};
export type BookUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.BookScalarWhereInput;
    data: Prisma.XOR<Prisma.BookUpdateManyMutationInput, Prisma.BookUncheckedUpdateManyWithoutUserInput>;
};
export type BookScalarWhereInput = {
    AND?: Prisma.BookScalarWhereInput | Prisma.BookScalarWhereInput[];
    OR?: Prisma.BookScalarWhereInput[];
    NOT?: Prisma.BookScalarWhereInput | Prisma.BookScalarWhereInput[];
    id?: Prisma.IntFilter<"Book"> | number;
    title?: Prisma.StringFilter<"Book"> | string;
    author?: Prisma.StringNullableFilter<"Book"> | string | null;
    description?: Prisma.StringNullableFilter<"Book"> | string | null;
    coverPath?: Prisma.StringNullableFilter<"Book"> | string | null;
    isMultiChap?: Prisma.BoolFilter<"Book"> | boolean;
    currentPage?: Prisma.IntFilter<"Book"> | number;
    currentChapterId?: Prisma.IntNullableFilter<"Book"> | number | null;
    readingMode?: Prisma.StringFilter<"Book"> | string;
    userId?: Prisma.IntFilter<"Book"> | number;
    categoryId?: Prisma.IntNullableFilter<"Book"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"Book"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Book"> | Date | string;
};
export type BookCreateWithoutCategoryInput = {
    title: string;
    author?: string | null;
    description?: string | null;
    coverPath?: string | null;
    isMultiChap?: boolean;
    currentPage?: number;
    currentChapterId?: number | null;
    readingMode?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutBooksInput;
    chapters?: Prisma.ChapterCreateNestedManyWithoutBookInput;
};
export type BookUncheckedCreateWithoutCategoryInput = {
    id?: number;
    title: string;
    author?: string | null;
    description?: string | null;
    coverPath?: string | null;
    isMultiChap?: boolean;
    currentPage?: number;
    currentChapterId?: number | null;
    readingMode?: string;
    userId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    chapters?: Prisma.ChapterUncheckedCreateNestedManyWithoutBookInput;
};
export type BookCreateOrConnectWithoutCategoryInput = {
    where: Prisma.BookWhereUniqueInput;
    create: Prisma.XOR<Prisma.BookCreateWithoutCategoryInput, Prisma.BookUncheckedCreateWithoutCategoryInput>;
};
export type BookCreateManyCategoryInputEnvelope = {
    data: Prisma.BookCreateManyCategoryInput | Prisma.BookCreateManyCategoryInput[];
};
export type BookUpsertWithWhereUniqueWithoutCategoryInput = {
    where: Prisma.BookWhereUniqueInput;
    update: Prisma.XOR<Prisma.BookUpdateWithoutCategoryInput, Prisma.BookUncheckedUpdateWithoutCategoryInput>;
    create: Prisma.XOR<Prisma.BookCreateWithoutCategoryInput, Prisma.BookUncheckedCreateWithoutCategoryInput>;
};
export type BookUpdateWithWhereUniqueWithoutCategoryInput = {
    where: Prisma.BookWhereUniqueInput;
    data: Prisma.XOR<Prisma.BookUpdateWithoutCategoryInput, Prisma.BookUncheckedUpdateWithoutCategoryInput>;
};
export type BookUpdateManyWithWhereWithoutCategoryInput = {
    where: Prisma.BookScalarWhereInput;
    data: Prisma.XOR<Prisma.BookUpdateManyMutationInput, Prisma.BookUncheckedUpdateManyWithoutCategoryInput>;
};
export type BookCreateWithoutChaptersInput = {
    title: string;
    author?: string | null;
    description?: string | null;
    coverPath?: string | null;
    isMultiChap?: boolean;
    currentPage?: number;
    currentChapterId?: number | null;
    readingMode?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutBooksInput;
    category?: Prisma.CategoryCreateNestedOneWithoutBooksInput;
};
export type BookUncheckedCreateWithoutChaptersInput = {
    id?: number;
    title: string;
    author?: string | null;
    description?: string | null;
    coverPath?: string | null;
    isMultiChap?: boolean;
    currentPage?: number;
    currentChapterId?: number | null;
    readingMode?: string;
    userId: number;
    categoryId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BookCreateOrConnectWithoutChaptersInput = {
    where: Prisma.BookWhereUniqueInput;
    create: Prisma.XOR<Prisma.BookCreateWithoutChaptersInput, Prisma.BookUncheckedCreateWithoutChaptersInput>;
};
export type BookUpsertWithoutChaptersInput = {
    update: Prisma.XOR<Prisma.BookUpdateWithoutChaptersInput, Prisma.BookUncheckedUpdateWithoutChaptersInput>;
    create: Prisma.XOR<Prisma.BookCreateWithoutChaptersInput, Prisma.BookUncheckedCreateWithoutChaptersInput>;
    where?: Prisma.BookWhereInput;
};
export type BookUpdateToOneWithWhereWithoutChaptersInput = {
    where?: Prisma.BookWhereInput;
    data: Prisma.XOR<Prisma.BookUpdateWithoutChaptersInput, Prisma.BookUncheckedUpdateWithoutChaptersInput>;
};
export type BookUpdateWithoutChaptersInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    author?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverPath?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isMultiChap?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    currentPage?: Prisma.IntFieldUpdateOperationsInput | number;
    currentChapterId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    readingMode?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutBooksNestedInput;
    category?: Prisma.CategoryUpdateOneWithoutBooksNestedInput;
};
export type BookUncheckedUpdateWithoutChaptersInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    author?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverPath?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isMultiChap?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    currentPage?: Prisma.IntFieldUpdateOperationsInput | number;
    currentChapterId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    readingMode?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    categoryId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BookCreateManyUserInput = {
    id?: number;
    title: string;
    author?: string | null;
    description?: string | null;
    coverPath?: string | null;
    isMultiChap?: boolean;
    currentPage?: number;
    currentChapterId?: number | null;
    readingMode?: string;
    categoryId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BookUpdateWithoutUserInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    author?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverPath?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isMultiChap?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    currentPage?: Prisma.IntFieldUpdateOperationsInput | number;
    currentChapterId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    readingMode?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    category?: Prisma.CategoryUpdateOneWithoutBooksNestedInput;
    chapters?: Prisma.ChapterUpdateManyWithoutBookNestedInput;
};
export type BookUncheckedUpdateWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    author?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverPath?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isMultiChap?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    currentPage?: Prisma.IntFieldUpdateOperationsInput | number;
    currentChapterId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    readingMode?: Prisma.StringFieldUpdateOperationsInput | string;
    categoryId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    chapters?: Prisma.ChapterUncheckedUpdateManyWithoutBookNestedInput;
};
export type BookUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    author?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverPath?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isMultiChap?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    currentPage?: Prisma.IntFieldUpdateOperationsInput | number;
    currentChapterId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    readingMode?: Prisma.StringFieldUpdateOperationsInput | string;
    categoryId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BookCreateManyCategoryInput = {
    id?: number;
    title: string;
    author?: string | null;
    description?: string | null;
    coverPath?: string | null;
    isMultiChap?: boolean;
    currentPage?: number;
    currentChapterId?: number | null;
    readingMode?: string;
    userId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BookUpdateWithoutCategoryInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    author?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverPath?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isMultiChap?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    currentPage?: Prisma.IntFieldUpdateOperationsInput | number;
    currentChapterId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    readingMode?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutBooksNestedInput;
    chapters?: Prisma.ChapterUpdateManyWithoutBookNestedInput;
};
export type BookUncheckedUpdateWithoutCategoryInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    author?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverPath?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isMultiChap?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    currentPage?: Prisma.IntFieldUpdateOperationsInput | number;
    currentChapterId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    readingMode?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    chapters?: Prisma.ChapterUncheckedUpdateManyWithoutBookNestedInput;
};
export type BookUncheckedUpdateManyWithoutCategoryInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    author?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverPath?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isMultiChap?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    currentPage?: Prisma.IntFieldUpdateOperationsInput | number;
    currentChapterId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    readingMode?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BookCountOutputType = {
    chapters: number;
};
export type BookCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    chapters?: boolean | BookCountOutputTypeCountChaptersArgs;
};
export type BookCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookCountOutputTypeSelect<ExtArgs> | null;
};
export type BookCountOutputTypeCountChaptersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ChapterWhereInput;
};
export type BookSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    author?: boolean;
    description?: boolean;
    coverPath?: boolean;
    isMultiChap?: boolean;
    currentPage?: boolean;
    currentChapterId?: boolean;
    readingMode?: boolean;
    userId?: boolean;
    categoryId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    category?: boolean | Prisma.Book$categoryArgs<ExtArgs>;
    chapters?: boolean | Prisma.Book$chaptersArgs<ExtArgs>;
    _count?: boolean | Prisma.BookCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["book"]>;
export type BookSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    author?: boolean;
    description?: boolean;
    coverPath?: boolean;
    isMultiChap?: boolean;
    currentPage?: boolean;
    currentChapterId?: boolean;
    readingMode?: boolean;
    userId?: boolean;
    categoryId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    category?: boolean | Prisma.Book$categoryArgs<ExtArgs>;
}, ExtArgs["result"]["book"]>;
export type BookSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    author?: boolean;
    description?: boolean;
    coverPath?: boolean;
    isMultiChap?: boolean;
    currentPage?: boolean;
    currentChapterId?: boolean;
    readingMode?: boolean;
    userId?: boolean;
    categoryId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    category?: boolean | Prisma.Book$categoryArgs<ExtArgs>;
}, ExtArgs["result"]["book"]>;
export type BookSelectScalar = {
    id?: boolean;
    title?: boolean;
    author?: boolean;
    description?: boolean;
    coverPath?: boolean;
    isMultiChap?: boolean;
    currentPage?: boolean;
    currentChapterId?: boolean;
    readingMode?: boolean;
    userId?: boolean;
    categoryId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type BookOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "author" | "description" | "coverPath" | "isMultiChap" | "currentPage" | "currentChapterId" | "readingMode" | "userId" | "categoryId" | "createdAt" | "updatedAt", ExtArgs["result"]["book"]>;
export type BookInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    category?: boolean | Prisma.Book$categoryArgs<ExtArgs>;
    chapters?: boolean | Prisma.Book$chaptersArgs<ExtArgs>;
    _count?: boolean | Prisma.BookCountOutputTypeDefaultArgs<ExtArgs>;
};
export type BookIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    category?: boolean | Prisma.Book$categoryArgs<ExtArgs>;
};
export type BookIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    category?: boolean | Prisma.Book$categoryArgs<ExtArgs>;
};
export type $BookPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Book";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        category: Prisma.$CategoryPayload<ExtArgs> | null;
        chapters: Prisma.$ChapterPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        title: string;
        author: string | null;
        description: string | null;
        coverPath: string | null;
        isMultiChap: boolean;
        currentPage: number;
        currentChapterId: number | null;
        readingMode: string;
        userId: number;
        categoryId: number | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["book"]>;
    composites: {};
};
export type BookGetPayload<S extends boolean | null | undefined | BookDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BookPayload, S>;
export type BookCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BookFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BookCountAggregateInputType | true;
};
export interface BookDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Book'];
        meta: {
            name: 'Book';
        };
    };
    findUnique<T extends BookFindUniqueArgs>(args: Prisma.SelectSubset<T, BookFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BookClient<runtime.Types.Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends BookFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BookFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BookClient<runtime.Types.Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends BookFindFirstArgs>(args?: Prisma.SelectSubset<T, BookFindFirstArgs<ExtArgs>>): Prisma.Prisma__BookClient<runtime.Types.Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends BookFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BookFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BookClient<runtime.Types.Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends BookFindManyArgs>(args?: Prisma.SelectSubset<T, BookFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends BookCreateArgs>(args: Prisma.SelectSubset<T, BookCreateArgs<ExtArgs>>): Prisma.Prisma__BookClient<runtime.Types.Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends BookCreateManyArgs>(args?: Prisma.SelectSubset<T, BookCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends BookCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BookCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends BookDeleteArgs>(args: Prisma.SelectSubset<T, BookDeleteArgs<ExtArgs>>): Prisma.Prisma__BookClient<runtime.Types.Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends BookUpdateArgs>(args: Prisma.SelectSubset<T, BookUpdateArgs<ExtArgs>>): Prisma.Prisma__BookClient<runtime.Types.Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends BookDeleteManyArgs>(args?: Prisma.SelectSubset<T, BookDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends BookUpdateManyArgs>(args: Prisma.SelectSubset<T, BookUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends BookUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BookUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends BookUpsertArgs>(args: Prisma.SelectSubset<T, BookUpsertArgs<ExtArgs>>): Prisma.Prisma__BookClient<runtime.Types.Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends BookCountArgs>(args?: Prisma.Subset<T, BookCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BookCountAggregateOutputType> : number>;
    aggregate<T extends BookAggregateArgs>(args: Prisma.Subset<T, BookAggregateArgs>): Prisma.PrismaPromise<GetBookAggregateType<T>>;
    groupBy<T extends BookGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BookGroupByArgs['orderBy'];
    } : {
        orderBy?: BookGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: BookFieldRefs;
}
export interface Prisma__BookClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    category<T extends Prisma.Book$categoryArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Book$categoryArgs<ExtArgs>>): Prisma.Prisma__CategoryClient<runtime.Types.Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    chapters<T extends Prisma.Book$chaptersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Book$chaptersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface BookFieldRefs {
    readonly id: Prisma.FieldRef<"Book", 'Int'>;
    readonly title: Prisma.FieldRef<"Book", 'String'>;
    readonly author: Prisma.FieldRef<"Book", 'String'>;
    readonly description: Prisma.FieldRef<"Book", 'String'>;
    readonly coverPath: Prisma.FieldRef<"Book", 'String'>;
    readonly isMultiChap: Prisma.FieldRef<"Book", 'Boolean'>;
    readonly currentPage: Prisma.FieldRef<"Book", 'Int'>;
    readonly currentChapterId: Prisma.FieldRef<"Book", 'Int'>;
    readonly readingMode: Prisma.FieldRef<"Book", 'String'>;
    readonly userId: Prisma.FieldRef<"Book", 'Int'>;
    readonly categoryId: Prisma.FieldRef<"Book", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"Book", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Book", 'DateTime'>;
}
export type BookFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookSelect<ExtArgs> | null;
    omit?: Prisma.BookOmit<ExtArgs> | null;
    include?: Prisma.BookInclude<ExtArgs> | null;
    where: Prisma.BookWhereUniqueInput;
};
export type BookFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookSelect<ExtArgs> | null;
    omit?: Prisma.BookOmit<ExtArgs> | null;
    include?: Prisma.BookInclude<ExtArgs> | null;
    where: Prisma.BookWhereUniqueInput;
};
export type BookFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookSelect<ExtArgs> | null;
    omit?: Prisma.BookOmit<ExtArgs> | null;
    include?: Prisma.BookInclude<ExtArgs> | null;
    where?: Prisma.BookWhereInput;
    orderBy?: Prisma.BookOrderByWithRelationInput | Prisma.BookOrderByWithRelationInput[];
    cursor?: Prisma.BookWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BookScalarFieldEnum | Prisma.BookScalarFieldEnum[];
};
export type BookFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookSelect<ExtArgs> | null;
    omit?: Prisma.BookOmit<ExtArgs> | null;
    include?: Prisma.BookInclude<ExtArgs> | null;
    where?: Prisma.BookWhereInput;
    orderBy?: Prisma.BookOrderByWithRelationInput | Prisma.BookOrderByWithRelationInput[];
    cursor?: Prisma.BookWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BookScalarFieldEnum | Prisma.BookScalarFieldEnum[];
};
export type BookFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookSelect<ExtArgs> | null;
    omit?: Prisma.BookOmit<ExtArgs> | null;
    include?: Prisma.BookInclude<ExtArgs> | null;
    where?: Prisma.BookWhereInput;
    orderBy?: Prisma.BookOrderByWithRelationInput | Prisma.BookOrderByWithRelationInput[];
    cursor?: Prisma.BookWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BookScalarFieldEnum | Prisma.BookScalarFieldEnum[];
};
export type BookCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookSelect<ExtArgs> | null;
    omit?: Prisma.BookOmit<ExtArgs> | null;
    include?: Prisma.BookInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BookCreateInput, Prisma.BookUncheckedCreateInput>;
};
export type BookCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.BookCreateManyInput | Prisma.BookCreateManyInput[];
};
export type BookCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BookOmit<ExtArgs> | null;
    data: Prisma.BookCreateManyInput | Prisma.BookCreateManyInput[];
    include?: Prisma.BookIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type BookUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookSelect<ExtArgs> | null;
    omit?: Prisma.BookOmit<ExtArgs> | null;
    include?: Prisma.BookInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BookUpdateInput, Prisma.BookUncheckedUpdateInput>;
    where: Prisma.BookWhereUniqueInput;
};
export type BookUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.BookUpdateManyMutationInput, Prisma.BookUncheckedUpdateManyInput>;
    where?: Prisma.BookWhereInput;
    limit?: number;
};
export type BookUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BookOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BookUpdateManyMutationInput, Prisma.BookUncheckedUpdateManyInput>;
    where?: Prisma.BookWhereInput;
    limit?: number;
    include?: Prisma.BookIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type BookUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookSelect<ExtArgs> | null;
    omit?: Prisma.BookOmit<ExtArgs> | null;
    include?: Prisma.BookInclude<ExtArgs> | null;
    where: Prisma.BookWhereUniqueInput;
    create: Prisma.XOR<Prisma.BookCreateInput, Prisma.BookUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.BookUpdateInput, Prisma.BookUncheckedUpdateInput>;
};
export type BookDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookSelect<ExtArgs> | null;
    omit?: Prisma.BookOmit<ExtArgs> | null;
    include?: Prisma.BookInclude<ExtArgs> | null;
    where: Prisma.BookWhereUniqueInput;
};
export type BookDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BookWhereInput;
    limit?: number;
};
export type Book$categoryArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategorySelect<ExtArgs> | null;
    omit?: Prisma.CategoryOmit<ExtArgs> | null;
    include?: Prisma.CategoryInclude<ExtArgs> | null;
    where?: Prisma.CategoryWhereInput;
};
export type Book$chaptersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChapterSelect<ExtArgs> | null;
    omit?: Prisma.ChapterOmit<ExtArgs> | null;
    include?: Prisma.ChapterInclude<ExtArgs> | null;
    where?: Prisma.ChapterWhereInput;
    orderBy?: Prisma.ChapterOrderByWithRelationInput | Prisma.ChapterOrderByWithRelationInput[];
    cursor?: Prisma.ChapterWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ChapterScalarFieldEnum | Prisma.ChapterScalarFieldEnum[];
};
export type BookDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookSelect<ExtArgs> | null;
    omit?: Prisma.BookOmit<ExtArgs> | null;
    include?: Prisma.BookInclude<ExtArgs> | null;
};
