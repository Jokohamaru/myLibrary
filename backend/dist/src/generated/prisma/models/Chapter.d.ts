import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ChapterModel = runtime.Types.Result.DefaultSelection<Prisma.$ChapterPayload>;
export type AggregateChapter = {
    _count: ChapterCountAggregateOutputType | null;
    _avg: ChapterAvgAggregateOutputType | null;
    _sum: ChapterSumAggregateOutputType | null;
    _min: ChapterMinAggregateOutputType | null;
    _max: ChapterMaxAggregateOutputType | null;
};
export type ChapterAvgAggregateOutputType = {
    id: number | null;
    chapterNum: number | null;
    bookId: number | null;
};
export type ChapterSumAggregateOutputType = {
    id: number | null;
    chapterNum: number | null;
    bookId: number | null;
};
export type ChapterMinAggregateOutputType = {
    id: number | null;
    chapterNum: number | null;
    title: string | null;
    filename: string | null;
    path: string | null;
    bookId: number | null;
    createdAt: Date | null;
};
export type ChapterMaxAggregateOutputType = {
    id: number | null;
    chapterNum: number | null;
    title: string | null;
    filename: string | null;
    path: string | null;
    bookId: number | null;
    createdAt: Date | null;
};
export type ChapterCountAggregateOutputType = {
    id: number;
    chapterNum: number;
    title: number;
    filename: number;
    path: number;
    bookId: number;
    createdAt: number;
    _all: number;
};
export type ChapterAvgAggregateInputType = {
    id?: true;
    chapterNum?: true;
    bookId?: true;
};
export type ChapterSumAggregateInputType = {
    id?: true;
    chapterNum?: true;
    bookId?: true;
};
export type ChapterMinAggregateInputType = {
    id?: true;
    chapterNum?: true;
    title?: true;
    filename?: true;
    path?: true;
    bookId?: true;
    createdAt?: true;
};
export type ChapterMaxAggregateInputType = {
    id?: true;
    chapterNum?: true;
    title?: true;
    filename?: true;
    path?: true;
    bookId?: true;
    createdAt?: true;
};
export type ChapterCountAggregateInputType = {
    id?: true;
    chapterNum?: true;
    title?: true;
    filename?: true;
    path?: true;
    bookId?: true;
    createdAt?: true;
    _all?: true;
};
export type ChapterAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ChapterWhereInput;
    orderBy?: Prisma.ChapterOrderByWithRelationInput | Prisma.ChapterOrderByWithRelationInput[];
    cursor?: Prisma.ChapterWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ChapterCountAggregateInputType;
    _avg?: ChapterAvgAggregateInputType;
    _sum?: ChapterSumAggregateInputType;
    _min?: ChapterMinAggregateInputType;
    _max?: ChapterMaxAggregateInputType;
};
export type GetChapterAggregateType<T extends ChapterAggregateArgs> = {
    [P in keyof T & keyof AggregateChapter]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateChapter[P]> : Prisma.GetScalarType<T[P], AggregateChapter[P]>;
};
export type ChapterGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ChapterWhereInput;
    orderBy?: Prisma.ChapterOrderByWithAggregationInput | Prisma.ChapterOrderByWithAggregationInput[];
    by: Prisma.ChapterScalarFieldEnum[] | Prisma.ChapterScalarFieldEnum;
    having?: Prisma.ChapterScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ChapterCountAggregateInputType | true;
    _avg?: ChapterAvgAggregateInputType;
    _sum?: ChapterSumAggregateInputType;
    _min?: ChapterMinAggregateInputType;
    _max?: ChapterMaxAggregateInputType;
};
export type ChapterGroupByOutputType = {
    id: number;
    chapterNum: number;
    title: string | null;
    filename: string;
    path: string;
    bookId: number;
    createdAt: Date;
    _count: ChapterCountAggregateOutputType | null;
    _avg: ChapterAvgAggregateOutputType | null;
    _sum: ChapterSumAggregateOutputType | null;
    _min: ChapterMinAggregateOutputType | null;
    _max: ChapterMaxAggregateOutputType | null;
};
export type GetChapterGroupByPayload<T extends ChapterGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ChapterGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ChapterGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ChapterGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ChapterGroupByOutputType[P]>;
}>>;
export type ChapterWhereInput = {
    AND?: Prisma.ChapterWhereInput | Prisma.ChapterWhereInput[];
    OR?: Prisma.ChapterWhereInput[];
    NOT?: Prisma.ChapterWhereInput | Prisma.ChapterWhereInput[];
    id?: Prisma.IntFilter<"Chapter"> | number;
    chapterNum?: Prisma.IntFilter<"Chapter"> | number;
    title?: Prisma.StringNullableFilter<"Chapter"> | string | null;
    filename?: Prisma.StringFilter<"Chapter"> | string;
    path?: Prisma.StringFilter<"Chapter"> | string;
    bookId?: Prisma.IntFilter<"Chapter"> | number;
    createdAt?: Prisma.DateTimeFilter<"Chapter"> | Date | string;
    book?: Prisma.XOR<Prisma.BookScalarRelationFilter, Prisma.BookWhereInput>;
};
export type ChapterOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    chapterNum?: Prisma.SortOrder;
    title?: Prisma.SortOrderInput | Prisma.SortOrder;
    filename?: Prisma.SortOrder;
    path?: Prisma.SortOrder;
    bookId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    book?: Prisma.BookOrderByWithRelationInput;
};
export type ChapterWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    bookId_chapterNum?: Prisma.ChapterBookIdChapterNumCompoundUniqueInput;
    AND?: Prisma.ChapterWhereInput | Prisma.ChapterWhereInput[];
    OR?: Prisma.ChapterWhereInput[];
    NOT?: Prisma.ChapterWhereInput | Prisma.ChapterWhereInput[];
    chapterNum?: Prisma.IntFilter<"Chapter"> | number;
    title?: Prisma.StringNullableFilter<"Chapter"> | string | null;
    filename?: Prisma.StringFilter<"Chapter"> | string;
    path?: Prisma.StringFilter<"Chapter"> | string;
    bookId?: Prisma.IntFilter<"Chapter"> | number;
    createdAt?: Prisma.DateTimeFilter<"Chapter"> | Date | string;
    book?: Prisma.XOR<Prisma.BookScalarRelationFilter, Prisma.BookWhereInput>;
}, "id" | "bookId_chapterNum">;
export type ChapterOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    chapterNum?: Prisma.SortOrder;
    title?: Prisma.SortOrderInput | Prisma.SortOrder;
    filename?: Prisma.SortOrder;
    path?: Prisma.SortOrder;
    bookId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ChapterCountOrderByAggregateInput;
    _avg?: Prisma.ChapterAvgOrderByAggregateInput;
    _max?: Prisma.ChapterMaxOrderByAggregateInput;
    _min?: Prisma.ChapterMinOrderByAggregateInput;
    _sum?: Prisma.ChapterSumOrderByAggregateInput;
};
export type ChapterScalarWhereWithAggregatesInput = {
    AND?: Prisma.ChapterScalarWhereWithAggregatesInput | Prisma.ChapterScalarWhereWithAggregatesInput[];
    OR?: Prisma.ChapterScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ChapterScalarWhereWithAggregatesInput | Prisma.ChapterScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Chapter"> | number;
    chapterNum?: Prisma.IntWithAggregatesFilter<"Chapter"> | number;
    title?: Prisma.StringNullableWithAggregatesFilter<"Chapter"> | string | null;
    filename?: Prisma.StringWithAggregatesFilter<"Chapter"> | string;
    path?: Prisma.StringWithAggregatesFilter<"Chapter"> | string;
    bookId?: Prisma.IntWithAggregatesFilter<"Chapter"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Chapter"> | Date | string;
};
export type ChapterCreateInput = {
    chapterNum: number;
    title?: string | null;
    filename: string;
    path: string;
    createdAt?: Date | string;
    book: Prisma.BookCreateNestedOneWithoutChaptersInput;
};
export type ChapterUncheckedCreateInput = {
    id?: number;
    chapterNum: number;
    title?: string | null;
    filename: string;
    path: string;
    bookId: number;
    createdAt?: Date | string;
};
export type ChapterUpdateInput = {
    chapterNum?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    path?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    book?: Prisma.BookUpdateOneRequiredWithoutChaptersNestedInput;
};
export type ChapterUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    chapterNum?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    path?: Prisma.StringFieldUpdateOperationsInput | string;
    bookId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ChapterCreateManyInput = {
    id?: number;
    chapterNum: number;
    title?: string | null;
    filename: string;
    path: string;
    bookId: number;
    createdAt?: Date | string;
};
export type ChapterUpdateManyMutationInput = {
    chapterNum?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    path?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ChapterUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    chapterNum?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    path?: Prisma.StringFieldUpdateOperationsInput | string;
    bookId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ChapterListRelationFilter = {
    every?: Prisma.ChapterWhereInput;
    some?: Prisma.ChapterWhereInput;
    none?: Prisma.ChapterWhereInput;
};
export type ChapterOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ChapterBookIdChapterNumCompoundUniqueInput = {
    bookId: number;
    chapterNum: number;
};
export type ChapterCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    chapterNum?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    filename?: Prisma.SortOrder;
    path?: Prisma.SortOrder;
    bookId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ChapterAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    chapterNum?: Prisma.SortOrder;
    bookId?: Prisma.SortOrder;
};
export type ChapterMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    chapterNum?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    filename?: Prisma.SortOrder;
    path?: Prisma.SortOrder;
    bookId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ChapterMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    chapterNum?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    filename?: Prisma.SortOrder;
    path?: Prisma.SortOrder;
    bookId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ChapterSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    chapterNum?: Prisma.SortOrder;
    bookId?: Prisma.SortOrder;
};
export type ChapterCreateNestedManyWithoutBookInput = {
    create?: Prisma.XOR<Prisma.ChapterCreateWithoutBookInput, Prisma.ChapterUncheckedCreateWithoutBookInput> | Prisma.ChapterCreateWithoutBookInput[] | Prisma.ChapterUncheckedCreateWithoutBookInput[];
    connectOrCreate?: Prisma.ChapterCreateOrConnectWithoutBookInput | Prisma.ChapterCreateOrConnectWithoutBookInput[];
    createMany?: Prisma.ChapterCreateManyBookInputEnvelope;
    connect?: Prisma.ChapterWhereUniqueInput | Prisma.ChapterWhereUniqueInput[];
};
export type ChapterUncheckedCreateNestedManyWithoutBookInput = {
    create?: Prisma.XOR<Prisma.ChapterCreateWithoutBookInput, Prisma.ChapterUncheckedCreateWithoutBookInput> | Prisma.ChapterCreateWithoutBookInput[] | Prisma.ChapterUncheckedCreateWithoutBookInput[];
    connectOrCreate?: Prisma.ChapterCreateOrConnectWithoutBookInput | Prisma.ChapterCreateOrConnectWithoutBookInput[];
    createMany?: Prisma.ChapterCreateManyBookInputEnvelope;
    connect?: Prisma.ChapterWhereUniqueInput | Prisma.ChapterWhereUniqueInput[];
};
export type ChapterUpdateManyWithoutBookNestedInput = {
    create?: Prisma.XOR<Prisma.ChapterCreateWithoutBookInput, Prisma.ChapterUncheckedCreateWithoutBookInput> | Prisma.ChapterCreateWithoutBookInput[] | Prisma.ChapterUncheckedCreateWithoutBookInput[];
    connectOrCreate?: Prisma.ChapterCreateOrConnectWithoutBookInput | Prisma.ChapterCreateOrConnectWithoutBookInput[];
    upsert?: Prisma.ChapterUpsertWithWhereUniqueWithoutBookInput | Prisma.ChapterUpsertWithWhereUniqueWithoutBookInput[];
    createMany?: Prisma.ChapterCreateManyBookInputEnvelope;
    set?: Prisma.ChapterWhereUniqueInput | Prisma.ChapterWhereUniqueInput[];
    disconnect?: Prisma.ChapterWhereUniqueInput | Prisma.ChapterWhereUniqueInput[];
    delete?: Prisma.ChapterWhereUniqueInput | Prisma.ChapterWhereUniqueInput[];
    connect?: Prisma.ChapterWhereUniqueInput | Prisma.ChapterWhereUniqueInput[];
    update?: Prisma.ChapterUpdateWithWhereUniqueWithoutBookInput | Prisma.ChapterUpdateWithWhereUniqueWithoutBookInput[];
    updateMany?: Prisma.ChapterUpdateManyWithWhereWithoutBookInput | Prisma.ChapterUpdateManyWithWhereWithoutBookInput[];
    deleteMany?: Prisma.ChapterScalarWhereInput | Prisma.ChapterScalarWhereInput[];
};
export type ChapterUncheckedUpdateManyWithoutBookNestedInput = {
    create?: Prisma.XOR<Prisma.ChapterCreateWithoutBookInput, Prisma.ChapterUncheckedCreateWithoutBookInput> | Prisma.ChapterCreateWithoutBookInput[] | Prisma.ChapterUncheckedCreateWithoutBookInput[];
    connectOrCreate?: Prisma.ChapterCreateOrConnectWithoutBookInput | Prisma.ChapterCreateOrConnectWithoutBookInput[];
    upsert?: Prisma.ChapterUpsertWithWhereUniqueWithoutBookInput | Prisma.ChapterUpsertWithWhereUniqueWithoutBookInput[];
    createMany?: Prisma.ChapterCreateManyBookInputEnvelope;
    set?: Prisma.ChapterWhereUniqueInput | Prisma.ChapterWhereUniqueInput[];
    disconnect?: Prisma.ChapterWhereUniqueInput | Prisma.ChapterWhereUniqueInput[];
    delete?: Prisma.ChapterWhereUniqueInput | Prisma.ChapterWhereUniqueInput[];
    connect?: Prisma.ChapterWhereUniqueInput | Prisma.ChapterWhereUniqueInput[];
    update?: Prisma.ChapterUpdateWithWhereUniqueWithoutBookInput | Prisma.ChapterUpdateWithWhereUniqueWithoutBookInput[];
    updateMany?: Prisma.ChapterUpdateManyWithWhereWithoutBookInput | Prisma.ChapterUpdateManyWithWhereWithoutBookInput[];
    deleteMany?: Prisma.ChapterScalarWhereInput | Prisma.ChapterScalarWhereInput[];
};
export type ChapterCreateWithoutBookInput = {
    chapterNum: number;
    title?: string | null;
    filename: string;
    path: string;
    createdAt?: Date | string;
};
export type ChapterUncheckedCreateWithoutBookInput = {
    id?: number;
    chapterNum: number;
    title?: string | null;
    filename: string;
    path: string;
    createdAt?: Date | string;
};
export type ChapterCreateOrConnectWithoutBookInput = {
    where: Prisma.ChapterWhereUniqueInput;
    create: Prisma.XOR<Prisma.ChapterCreateWithoutBookInput, Prisma.ChapterUncheckedCreateWithoutBookInput>;
};
export type ChapterCreateManyBookInputEnvelope = {
    data: Prisma.ChapterCreateManyBookInput | Prisma.ChapterCreateManyBookInput[];
};
export type ChapterUpsertWithWhereUniqueWithoutBookInput = {
    where: Prisma.ChapterWhereUniqueInput;
    update: Prisma.XOR<Prisma.ChapterUpdateWithoutBookInput, Prisma.ChapterUncheckedUpdateWithoutBookInput>;
    create: Prisma.XOR<Prisma.ChapterCreateWithoutBookInput, Prisma.ChapterUncheckedCreateWithoutBookInput>;
};
export type ChapterUpdateWithWhereUniqueWithoutBookInput = {
    where: Prisma.ChapterWhereUniqueInput;
    data: Prisma.XOR<Prisma.ChapterUpdateWithoutBookInput, Prisma.ChapterUncheckedUpdateWithoutBookInput>;
};
export type ChapterUpdateManyWithWhereWithoutBookInput = {
    where: Prisma.ChapterScalarWhereInput;
    data: Prisma.XOR<Prisma.ChapterUpdateManyMutationInput, Prisma.ChapterUncheckedUpdateManyWithoutBookInput>;
};
export type ChapterScalarWhereInput = {
    AND?: Prisma.ChapterScalarWhereInput | Prisma.ChapterScalarWhereInput[];
    OR?: Prisma.ChapterScalarWhereInput[];
    NOT?: Prisma.ChapterScalarWhereInput | Prisma.ChapterScalarWhereInput[];
    id?: Prisma.IntFilter<"Chapter"> | number;
    chapterNum?: Prisma.IntFilter<"Chapter"> | number;
    title?: Prisma.StringNullableFilter<"Chapter"> | string | null;
    filename?: Prisma.StringFilter<"Chapter"> | string;
    path?: Prisma.StringFilter<"Chapter"> | string;
    bookId?: Prisma.IntFilter<"Chapter"> | number;
    createdAt?: Prisma.DateTimeFilter<"Chapter"> | Date | string;
};
export type ChapterCreateManyBookInput = {
    id?: number;
    chapterNum: number;
    title?: string | null;
    filename: string;
    path: string;
    createdAt?: Date | string;
};
export type ChapterUpdateWithoutBookInput = {
    chapterNum?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    path?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ChapterUncheckedUpdateWithoutBookInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    chapterNum?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    path?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ChapterUncheckedUpdateManyWithoutBookInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    chapterNum?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    path?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ChapterSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    chapterNum?: boolean;
    title?: boolean;
    filename?: boolean;
    path?: boolean;
    bookId?: boolean;
    createdAt?: boolean;
    book?: boolean | Prisma.BookDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["chapter"]>;
export type ChapterSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    chapterNum?: boolean;
    title?: boolean;
    filename?: boolean;
    path?: boolean;
    bookId?: boolean;
    createdAt?: boolean;
    book?: boolean | Prisma.BookDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["chapter"]>;
export type ChapterSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    chapterNum?: boolean;
    title?: boolean;
    filename?: boolean;
    path?: boolean;
    bookId?: boolean;
    createdAt?: boolean;
    book?: boolean | Prisma.BookDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["chapter"]>;
export type ChapterSelectScalar = {
    id?: boolean;
    chapterNum?: boolean;
    title?: boolean;
    filename?: boolean;
    path?: boolean;
    bookId?: boolean;
    createdAt?: boolean;
};
export type ChapterOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "chapterNum" | "title" | "filename" | "path" | "bookId" | "createdAt", ExtArgs["result"]["chapter"]>;
export type ChapterInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    book?: boolean | Prisma.BookDefaultArgs<ExtArgs>;
};
export type ChapterIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    book?: boolean | Prisma.BookDefaultArgs<ExtArgs>;
};
export type ChapterIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    book?: boolean | Prisma.BookDefaultArgs<ExtArgs>;
};
export type $ChapterPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Chapter";
    objects: {
        book: Prisma.$BookPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        chapterNum: number;
        title: string | null;
        filename: string;
        path: string;
        bookId: number;
        createdAt: Date;
    }, ExtArgs["result"]["chapter"]>;
    composites: {};
};
export type ChapterGetPayload<S extends boolean | null | undefined | ChapterDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ChapterPayload, S>;
export type ChapterCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ChapterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ChapterCountAggregateInputType | true;
};
export interface ChapterDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Chapter'];
        meta: {
            name: 'Chapter';
        };
    };
    findUnique<T extends ChapterFindUniqueArgs>(args: Prisma.SelectSubset<T, ChapterFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ChapterClient<runtime.Types.Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ChapterFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ChapterFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ChapterClient<runtime.Types.Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ChapterFindFirstArgs>(args?: Prisma.SelectSubset<T, ChapterFindFirstArgs<ExtArgs>>): Prisma.Prisma__ChapterClient<runtime.Types.Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ChapterFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ChapterFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ChapterClient<runtime.Types.Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ChapterFindManyArgs>(args?: Prisma.SelectSubset<T, ChapterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ChapterCreateArgs>(args: Prisma.SelectSubset<T, ChapterCreateArgs<ExtArgs>>): Prisma.Prisma__ChapterClient<runtime.Types.Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ChapterCreateManyArgs>(args?: Prisma.SelectSubset<T, ChapterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ChapterCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ChapterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ChapterDeleteArgs>(args: Prisma.SelectSubset<T, ChapterDeleteArgs<ExtArgs>>): Prisma.Prisma__ChapterClient<runtime.Types.Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ChapterUpdateArgs>(args: Prisma.SelectSubset<T, ChapterUpdateArgs<ExtArgs>>): Prisma.Prisma__ChapterClient<runtime.Types.Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ChapterDeleteManyArgs>(args?: Prisma.SelectSubset<T, ChapterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ChapterUpdateManyArgs>(args: Prisma.SelectSubset<T, ChapterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ChapterUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ChapterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ChapterUpsertArgs>(args: Prisma.SelectSubset<T, ChapterUpsertArgs<ExtArgs>>): Prisma.Prisma__ChapterClient<runtime.Types.Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ChapterCountArgs>(args?: Prisma.Subset<T, ChapterCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ChapterCountAggregateOutputType> : number>;
    aggregate<T extends ChapterAggregateArgs>(args: Prisma.Subset<T, ChapterAggregateArgs>): Prisma.PrismaPromise<GetChapterAggregateType<T>>;
    groupBy<T extends ChapterGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ChapterGroupByArgs['orderBy'];
    } : {
        orderBy?: ChapterGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ChapterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChapterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ChapterFieldRefs;
}
export interface Prisma__ChapterClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    book<T extends Prisma.BookDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BookDefaultArgs<ExtArgs>>): Prisma.Prisma__BookClient<runtime.Types.Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ChapterFieldRefs {
    readonly id: Prisma.FieldRef<"Chapter", 'Int'>;
    readonly chapterNum: Prisma.FieldRef<"Chapter", 'Int'>;
    readonly title: Prisma.FieldRef<"Chapter", 'String'>;
    readonly filename: Prisma.FieldRef<"Chapter", 'String'>;
    readonly path: Prisma.FieldRef<"Chapter", 'String'>;
    readonly bookId: Prisma.FieldRef<"Chapter", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"Chapter", 'DateTime'>;
}
export type ChapterFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChapterSelect<ExtArgs> | null;
    omit?: Prisma.ChapterOmit<ExtArgs> | null;
    include?: Prisma.ChapterInclude<ExtArgs> | null;
    where: Prisma.ChapterWhereUniqueInput;
};
export type ChapterFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChapterSelect<ExtArgs> | null;
    omit?: Prisma.ChapterOmit<ExtArgs> | null;
    include?: Prisma.ChapterInclude<ExtArgs> | null;
    where: Prisma.ChapterWhereUniqueInput;
};
export type ChapterFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ChapterFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ChapterFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ChapterCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChapterSelect<ExtArgs> | null;
    omit?: Prisma.ChapterOmit<ExtArgs> | null;
    include?: Prisma.ChapterInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ChapterCreateInput, Prisma.ChapterUncheckedCreateInput>;
};
export type ChapterCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ChapterCreateManyInput | Prisma.ChapterCreateManyInput[];
};
export type ChapterCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChapterSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ChapterOmit<ExtArgs> | null;
    data: Prisma.ChapterCreateManyInput | Prisma.ChapterCreateManyInput[];
    include?: Prisma.ChapterIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ChapterUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChapterSelect<ExtArgs> | null;
    omit?: Prisma.ChapterOmit<ExtArgs> | null;
    include?: Prisma.ChapterInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ChapterUpdateInput, Prisma.ChapterUncheckedUpdateInput>;
    where: Prisma.ChapterWhereUniqueInput;
};
export type ChapterUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ChapterUpdateManyMutationInput, Prisma.ChapterUncheckedUpdateManyInput>;
    where?: Prisma.ChapterWhereInput;
    limit?: number;
};
export type ChapterUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChapterSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ChapterOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ChapterUpdateManyMutationInput, Prisma.ChapterUncheckedUpdateManyInput>;
    where?: Prisma.ChapterWhereInput;
    limit?: number;
    include?: Prisma.ChapterIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ChapterUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChapterSelect<ExtArgs> | null;
    omit?: Prisma.ChapterOmit<ExtArgs> | null;
    include?: Prisma.ChapterInclude<ExtArgs> | null;
    where: Prisma.ChapterWhereUniqueInput;
    create: Prisma.XOR<Prisma.ChapterCreateInput, Prisma.ChapterUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ChapterUpdateInput, Prisma.ChapterUncheckedUpdateInput>;
};
export type ChapterDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChapterSelect<ExtArgs> | null;
    omit?: Prisma.ChapterOmit<ExtArgs> | null;
    include?: Prisma.ChapterInclude<ExtArgs> | null;
    where: Prisma.ChapterWhereUniqueInput;
};
export type ChapterDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ChapterWhereInput;
    limit?: number;
};
export type ChapterDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChapterSelect<ExtArgs> | null;
    omit?: Prisma.ChapterOmit<ExtArgs> | null;
    include?: Prisma.ChapterInclude<ExtArgs> | null;
};
