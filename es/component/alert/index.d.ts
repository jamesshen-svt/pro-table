import React from 'react';
import './index.less';
interface TableAlertProps<T> {
    selectedRowKeys: (number | string)[];
    selectedRows: T[];
    renderInfo?: ((selectedRowKeys: (number | string)[], selectedRows: T[]) => React.ReactNode) | false;
    onCleanSelected: () => void;
}
declare const TableAlert: <T, U = {}>({ selectedRowKeys, onCleanSelected, selectedRows, renderInfo, }: TableAlertProps<T>) => JSX.Element;
export default TableAlert;
