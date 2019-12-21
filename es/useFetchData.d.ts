export interface RequestData<T> {
    data: T[];
    success?: boolean;
    total?: number;
}
export interface UseFetchDataAction<T extends RequestData<any>> {
    dataSource: T['data'] | T;
    loading: boolean;
    hasMore: boolean;
    current: number;
    pageSize: number;
    total: number;
    fetch: () => Promise<void>;
    reload: () => Promise<void>;
    fetchMore: () => void;
    fullScreen?: () => void;
    resetPageIndex: () => void;
    setCurrent: (current: number) => void;
    setPageSize: (pageSize: number) => void;
    restColumnsConfig?: () => void;
}
declare const useFetchData: <T extends RequestData<any>, U = {}>(getData: (params: {
    pageSize: number;
    current: number;
}) => Promise<T>, defaultData?: Partial<T["data"]> | undefined, options?: {
    defaultCurrent?: number | undefined;
    defaultPageSize?: number | undefined;
    manual?: boolean | undefined;
    effects?: any[] | undefined;
    onLoad?: ((dataSource: T["data"]) => void) | undefined;
} | undefined) => UseFetchDataAction<T>;
export default useFetchData;
