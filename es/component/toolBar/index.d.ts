import React from 'react';
import { UseFetchDataAction, RequestData } from '../../useFetchData';
import './index.less';
export declare type OptionsType<T = unknown> = ((e: React.MouseEvent<HTMLSpanElement>, action: UseFetchDataAction<RequestData<T>>) => void) | boolean;
export interface ToolBarProps<T = unknown> {
    headerTitle?: React.ReactNode;
    toolBarRender?: (action: UseFetchDataAction<RequestData<T>>, rows: {
        selectedRowKeys?: (string | number)[];
        selectedRows?: T[];
    }) => React.ReactNode[];
    action: UseFetchDataAction<RequestData<T>>;
    options?: {
        fullScreen: OptionsType<T>;
        reload: OptionsType<T>;
        setting: boolean;
    };
    selectedRowKeys?: (string | number)[];
    selectedRows?: T[];
}
declare const ToolBar: <T, U = {}>({ headerTitle, toolBarRender, action, options, selectedRowKeys, selectedRows, }: ToolBarProps<T>) => JSX.Element;
export default ToolBar;
