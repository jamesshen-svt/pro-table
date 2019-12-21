import './index.less';
import React, { CSSProperties, ReactNode } from 'react';
import { ColumnProps, TableProps } from 'antd/es/table';
import { UseFetchDataAction, RequestData } from './useFetchData';
import { OptionsType, ToolBarProps } from './component/toolBar';
import { StatusType } from './component/status';
/**
 * money 金额
 * option 操作 需要返回一个数组
 * date 日期 YYYY-MM-DD
 * dateTime 日期和时间 YYYY-MM-DD HH:mm:SS
 * time: 时间 HH:mm:SS
 */
export declare type ProColumnsValueType = 'money' | 'option' | 'date' | 'dateTime' | 'time' | 'text' | 'index' | 'indexBorder';
export interface ProColumns<T = unknown> extends Omit<ColumnProps<T>, 'render' | 'children'> {
    /**
     * 自定义 render
     */
    render?: (text: React.ReactNode, record: T, index: number, action: UseFetchDataAction<RequestData<T>>) => React.ReactNode | React.ReactNode[];
    /**
     * 自定义 render，但是需要返回 string
     */
    renderText?: (text: any, record: T, index: number, action: UseFetchDataAction<RequestData<T>>) => string;
    /**
     * 自定义搜索 form 的输入
     */
    renderFormItem?: (item: ProColumns<T>, config: {
        value?: any;
        onChange?: (value: any) => void;
    }) => React.ReactNode;
    /**
     * 搜索表单的默认值
     */
    initialValue?: any;
    /**
     * 是否缩略
     */
    ellipsis?: boolean;
    /**
     * 是否拷贝
     */
    copyable?: boolean;
    /**
     * 值的类型
     */
    valueType?: ProColumnsValueType;
    children?: ProColumns<T>[];
    /**
     * 值的枚举，如果存在枚举，Search 中会生成 select
     */
    valueEnum?: {
        [key: string]: {
            text: ReactNode;
            status: StatusType;
        } | ReactNode;
    };
    /**
     * 在查询表单中隐藏
     */
    hideInSearch?: boolean;
    /**
     * 在 table 中隐藏
     */
    hideInTable?: boolean;
}
export interface ProTableProps<T> extends Omit<TableProps<T>, 'columns' | 'rowSelection'> {
    columns?: ProColumns<T>[];
    params?: {
        [key: string]: any;
    };
    /**
     * 一个获得 dataSource 的方法
     */
    request?: (params?: {
        pageSize?: number;
        current?: number;
        [key: string]: any;
    }) => Promise<RequestData<T>>;
    /**
     * 一个获得 dataSource 的方法
     */
    url?: (params?: {
        pageSize: number;
        current: number;
        [key: string]: any;
    }) => Promise<RequestData<T>>;
    /**
     * 对数据进行一些处理
     */
    filterData?: (data: any[]) => any[];
    /**
     * 默认的数据
     */
    defaultData?: T[];
    /**
     * 是否手动模式
     */
    manual?: boolean;
    /**
     * 某些参数改变时，自动刷新数据
     * 等同于 effects 的值
     * 推荐使用基本数据结构，不然可能造成重复更新
     */
    effects?: (number | string | boolean)[];
    /**
     * 初始化的参数，可以操作 table
     */
    onInit?: (action: UseFetchDataAction<RequestData<T>>) => void;
    /**
     * 渲染操作栏
     */
    toolBarRender?: ToolBarProps<T>['toolBarRender'];
    /**
     * 数据加载完成后触发
     */
    onLoad?: (dataSource: T[]) => void;
    /**
     * 给封装的 table 的 className
     */
    tableClassName?: string;
    /**
     * 给封装的 table 的 style
     */
    tableStyle?: CSSProperties;
    /**
     * 左上角的 title
     */
    headerTitle?: React.ReactNode;
    /**
     * 默认的操作栏配置
     */
    options?: {
        fullScreen: OptionsType<T>;
        reload: OptionsType<T>;
        setting: boolean;
    };
    /**
     * 是否显示搜索表单
     */
    search?: boolean;
    /**
     * 如何格式化moment
     */
    momentFormat?: 'string' | 'number' | false;
    /**
     * 格式化搜索表单提交数据
     */
    beforeSearchSubmit?: (params: Partial<T>) => Partial<T>;
    /**
     * 自定义 table 的 alert
     * 设置或者返回false 即可关闭
     */
    tableAlertRender?: (keys: (string | number)[], rows: T[]) => React.ReactNode;
    rowSelection?: TableProps<T>['rowSelection'] | false;
    style?: React.CSSProperties;
}
/**
 * 🏆 Use Ant Design Table like a Pro!
 * 更快 更好 更方便
 * @param props
 */
declare const ProviderWarp: <T, U = {}>(props: ProTableProps<T>) => JSX.Element;
export default ProviderWarp;
