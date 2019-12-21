/// <reference types="react" />
import { FormComponentProps } from 'antd/lib/form';
import './index.less';
interface FormItem<T> extends FormComponentProps {
    onSubmit?: (value: T) => void;
    onReset?: () => void;
    dateFormatter?: 'string' | 'number' | false;
}
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<(<T, U = {}>({ form, onSubmit, dateFormatter }: FormItem<T>) => JSX.Element), Pick<FormItem<any>, "onReset" | "onSubmit" | "dateFormatter" | "wrappedComponentRef">>;
export default _default;
