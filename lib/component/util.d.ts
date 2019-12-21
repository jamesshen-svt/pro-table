import React from 'react';
/**
 * 转化 text 和 valueEnum
 * 通过 type 来添加 Status
 * @param text
 * @param valueEnum
 * @param prue 纯净模式，不增加 status
 */
export declare const parsingText: (text: React.ReactText, valueEnum?: {
    [key: string]: string | number | boolean | {} | React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)> | React.ReactNodeArray | React.ReactPortal | {
        text: React.ReactNode;
        type: "Success" | "Error" | "Processing" | "Default" | "Warning";
    } | null | undefined;
} | undefined, pure?: boolean | undefined) => {} | null | undefined;
/**
 * 把 value 的枚举转化为 数组
 * @param valueEnum
 */
export declare const parsingValueEnumToArray: (valueEnum?: {
    [key: string]: string | number | boolean | {} | React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)> | React.ReactNodeArray | React.ReactPortal | {
        text: React.ReactNode;
        type: "Success" | "Error" | "Processing" | "Default" | "Warning";
    } | null | undefined;
}) => {
    value: string;
    text: string;
}[];
