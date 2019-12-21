/// <reference types="react" />
import { ColumnProps } from 'antd/es/table';
import { UseFetchDataAction, RequestData, ProColumns } from './index';
export interface ColumnsMapItem {
    fixed: 'right' | 'left' | undefined;
    show: boolean;
}
declare const Counter: import("unstated-next").Container<{
    action: UseFetchDataAction<RequestData<any>> | undefined;
    setAction: import("react").Dispatch<import("react").SetStateAction<UseFetchDataAction<RequestData<any>> | undefined>>;
    columns: ColumnProps<any>[];
    setColumns: import("react").Dispatch<import("react").SetStateAction<ColumnProps<any>[]>>;
    columnsMap: {
        [key: string]: ColumnsMapItem;
    };
    setColumnsMap: import("react").Dispatch<import("react").SetStateAction<{
        [key: string]: ColumnsMapItem;
    }>>;
    proColumns: ProColumns<any>[];
    setProColumns: import("react").Dispatch<import("react").SetStateAction<ProColumns<any>[]>>;
}, void>;
export default Counter;
