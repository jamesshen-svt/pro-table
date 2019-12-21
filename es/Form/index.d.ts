/// <reference types="react" />
import { FormComponentProps } from 'antd/lib/form';
import './index.less';
interface FormItem<T> extends FormComponentProps {
    onSubmit?: (value: T) => void;
    onReset?: () => void;
    momentFormat?: 'string' | 'number' | false;
}
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<(<T, U = {}>({ form, onSubmit, momentFormat }: FormItem<T>) => JSX.Element), Pick<FormItem<any>, "onReset" | "onSubmit" | "momentFormat" | "wrappedComponentRef">>;
export default _default;
