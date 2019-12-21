import "antd/es/button/style";
import _Button from "antd/es/button";
import "antd/es/row/style";
import _Row from "antd/es/row";
import "antd/es/form/style";
import _Form from "antd/es/form";
import "antd/es/col/style";
import _Col from "antd/es/col";
import "antd/es/input-number/style";
import _InputNumber from "antd/es/input-number";
import "antd/es/time-picker/style";
import _TimePicker from "antd/es/time-picker";
import "antd/es/date-picker/style";
import _DatePicker from "antd/es/date-picker";
import "antd/es/input/style";
import _Input from "antd/es/input";
import "antd/es/select/style";
import _Select from "antd/es/select";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useState, useEffect } from 'react';
import { DownOutlined } from '@ant-design/icons';
import moment from 'moment';
import RcResizeObserver from 'rc-resize-observer';
import { ConfigConsumer } from "antd/es/config-provider";
import { parsingValueEnumToArray } from '../component/util';
import Container from '../container';
import './index.less';
var FromInputRender = React.forwardRef(function (_ref, ref) {
  var item = _ref.item,
      rest = _objectWithoutProperties(_ref, ["item"]);

  /**
   * 自定义 render
   */
  if (item.renderFormItem) {
    return item.renderFormItem(item, rest);
  }

  if (!item.valueType || item.valueType === 'text') {
    var valueEnum = item.valueEnum;

    if (valueEnum) {
      return React.createElement(_Select, Object.assign({
        placeholder: "Select",
        ref: ref
      }, rest), React.createElement(_Select.Option, {
        key: "all",
        value: "all"
      }, "All"), parsingValueEnumToArray(valueEnum).map(function (_ref2) {
        var value = _ref2.value,
            text = _ref2.text;
        return React.createElement(_Select.Option, {
          key: value,
          value: value
        }, text);
      }));
    }

    return React.createElement(_Input, Object.assign({
      placeholder: "Please type"
    }, rest));
  }

  if (item.valueType === 'date') {
    return React.createElement(_DatePicker, Object.assign({
      ref: ref,
      placeholder: "Select",
      style: {
        width: '100%'
      }
    }, rest));
  }

  if (item.valueType === 'dateTime') {
    return React.createElement(_DatePicker, Object.assign({
      showTime: true,
      ref: ref,
      placeholder: "Select",
      style: {
        width: '100%'
      }
    }, rest));
  }

  if (item.valueType === 'time') {
    return React.createElement(_TimePicker, Object.assign({
      ref: ref,
      placeholder: "Select",
      style: {
        width: '100%'
      }
    }, rest));
  }

  if (item.valueType === 'money') {
    return React.createElement(_InputNumber, Object.assign({
      ref: ref,
      min: 0,
      formatter: function formatter(value) {
        if (value) {
          return "$ ".concat(value).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        }

        return '';
      },
      parser: function parser(value) {
        return value ? value.replace(/\$\s?|(,*)/g, '') : '';
      },
      placeholder: "Please type",
      precision: 2,
      style: {
        width: '100%'
      }
    }, rest));
  }

  return undefined;
});
var momentFormatMap = {
  time: 'HH:mm:SS',
  date: 'YYYY-MM-DD',
  dateTime: 'YYYY-MM-DD HH:mm:SS'
};

var genValue = function genValue(value, momentFormat, proColumnsMap) {
  var tmpValue = {};
  Object.keys(value).forEach(function (key) {
    var itemValue = value[key];

    if (itemValue && itemValue !== 'all') {
      if (moment.isMoment(itemValue) && momentFormat) {
        if (momentFormat === 'string') {
          var formatString = momentFormatMap[(proColumnsMap[key || 'null'] || {}).valueType || 'dateTime'];
          tmpValue[key] = itemValue.format(formatString || 'YYYY-MM-DD HH:mm:SS');
          return;
        }

        if (momentFormat === 'number') {
          tmpValue[key] = itemValue.valueOf();
          return;
        }
      }

      tmpValue[key] = itemValue;
    }
  });
  return tmpValue;
};

var FormSearch = function FormSearch(_ref3) {
  var form = _ref3.form,
      onSubmit = _ref3.onSubmit,
      _ref3$momentFormat = _ref3.momentFormat,
      momentFormat = _ref3$momentFormat === void 0 ? 'string' : _ref3$momentFormat;
  var counter = Container.useContainer();

  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      collapse = _useState2[0],
      setCollapse = _useState2[1];

  var _useState3 = useState({}),
      _useState4 = _slicedToArray(_useState3, 2),
      proColumnsMap = _useState4[0],
      setProColumnsMap = _useState4[1];

  var _useState5 = useState(88),
      _useState6 = _slicedToArray(_useState5, 2),
      formHeight = _useState6[0],
      setFormHeight = _useState6[1];

  var submit = function submit() {
    var value = form.getFieldsValue();

    if (onSubmit) {
      onSubmit(genValue(value, momentFormat, proColumnsMap));
    }
  };

  useEffect(function () {
    var tempMap = {};
    counter.proColumns.forEach(function (item) {
      var columnsKey = item.key || item.dataIndex || 'null';
      tempMap[columnsKey] = item;
    });
    setProColumnsMap(tempMap);
  }, [JSON.stringify(counter.proColumns)]);
  var columnsList = counter.proColumns.filter(function (item) {
    return item.valueType !== 'index' && item.valueType !== 'indexBorder' && item.valueType !== 'option' && !item.hideInSearch && (item.key || item.dataIndex);
  });
  var domList = columnsList.filter(function (_, index) {
    return collapse ? index < 2 : true;
  }).map(function (item) {
    return React.createElement(_Col, {
      span: 8,
      key: item.key || item.dataIndex
    }, React.createElement(_Form.Item, {
      label: item.title
    }, form.getFieldDecorator(item.key || item.dataIndex, {
      initialValue: item.initialValue
    })(React.createElement(FromInputRender, {
      item: item
    }))));
  });
  return React.createElement(ConfigConsumer, null, function (_ref4) {
    var getPrefixCls = _ref4.getPrefixCls;
    var className = getPrefixCls('pro-table-form-search');
    return React.createElement("div", {
      className: className,
      style: {
        height: formHeight
      }
    }, React.createElement(RcResizeObserver, {
      onResize: function onResize(_ref5) {
        var height = _ref5.height;
        return setFormHeight(height + 24);
      }
    }, React.createElement(_Form, null, React.createElement(_Row, {
      gutter: 16,
      justify: "end"
    }, domList, React.createElement(_Col, {
      span: 8,
      offset: (2 - domList.length % 3) * 8,
      key: "option",
      className: "".concat(className, "-option")
    }, React.createElement(_Button, {
      type: "primary",
      htmlType: "submit",
      onClick: function onClick() {
        return submit();
      }
    }, "Search"), React.createElement(_Button, {
      style: {
        marginLeft: 8
      },
      onClick: function onClick() {
        form.resetFields();
        submit();
      }
    }, "Reset"), columnsList.length > 2 && React.createElement("a", {
      style: {
        marginLeft: 8
      },
      onClick: function onClick() {
        setCollapse(!collapse);
      }
    }, collapse ? 'Unfold' : 'Collapse', ' ', React.createElement(DownOutlined, {
      style: {
        transition: '0.3s all',
        transform: "rotate(".concat(collapse ? 0 : 0.5, "turn)")
      }
    })))))));
  });
};

export default _Form.create()(FormSearch);