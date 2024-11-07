import { Optional, PromiseFunction } from "@tdesign-pro-components/utils";
import { FormProps, FormRule, FormRules, UploadProps, ValueType } from "tdesign-vue-next";
import { ProFormCheckboxProps } from "../ProFormCheckbox";
import { ProFormRadioProps } from "../ProFormRadio/types";
import { ProFormTextProps } from "../ProFormText";
import { ProFormInputNumberProps } from "../ProFormInputNumber";
import { ProFormTextareaProps } from "../ProFormTextarea";
import { ProFormSelectProps } from "../ProFormSelect";
import { ProFormDatepickerProps } from "../ProFormDatepicker";
import { ProFormTreeSelectProps } from "../ProFormTreeSelect";

export type ProFormItemType = 'text' | 'treeSelect' | 'number' | 'textarea' | 'select' | 'radio' | 'checkbox' | 'datepicker';

export interface ProFormProps {
    options: ProFormOption[];
    request?: PromiseFunction<any>;
    rules?: FormRules;
    labelAlign?: 'left' | 'top' | 'right';
    labelWidth?: string | number;
    readonly?: boolean;
    disabled?: boolean;
    layout?: 'vertical' | 'inline';
    resetText?: string;
    submitText?: string;
    showReset?: boolean;
    formProps?: FormProps;
    filterEmpty?: boolean; // 过滤空值
    submitFilter?: boolean; // 提交时候是否只要修改变化的数据（增量提交）
}

export interface ProFormOption {
    name: string;
    type?: ProFormItemType;
    labelName?: string;
    valueName?: string;
    childrenName?: string;
    label?: string;
    data?: any[] | PromiseFunction<any[]>;
    disabled?: boolean;
    readonly?: boolean;
    rules?: FormRule[];
    checkboxProps?: ProFormCheckboxProps;
    radioProps?: ProFormRadioProps;
    textProps?: Optional<ProFormTextProps, 'name' | 'modelValue'>;
    numberProps?: ProFormInputNumberProps;
    textareaProps?: ProFormTextareaProps;
    selectProps?: Optional<ProFormSelectProps, 'name' | 'modelValue'>;
    datepickerProps?: ProFormDatepickerProps;
    treeSelectProps?: ProFormTreeSelectProps;
    uploadProps?: UploadProps;
    span?: number;
    offset?: number;
    initalValue?: ValueType | Array<ValueType>;
}