"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/button/style");

var _button = _interopRequireDefault(require("antd/lib/button"));

require("antd/lib/row/style");

var _row = _interopRequireDefault(require("antd/lib/row"));

require("antd/lib/form/style");

var _form = _interopRequireDefault(require("antd/lib/form"));

require("antd/lib/col/style");

var _col = _interopRequireDefault(require("antd/lib/col"));

require("antd/lib/input-number/style");

var _inputNumber = _interopRequireDefault(require("antd/lib/input-number"));

require("antd/lib/time-picker/style");

var _timePicker = _interopRequireDefault(require("antd/lib/time-picker"));

require("antd/lib/date-picker/style");

var _datePicker = _interopRequireDefault(require("antd/lib/date-picker"));

require("antd/lib/input/style");

var _input = _interopRequireDefault(require("antd/lib/input"));

require("antd/lib/select/style");

var _select = _interopRequireDefault(require("antd/lib/select"));

var _react = _interopRequireWildcard(require("react"));

var _icons = require("@ant-design/icons");

var _moment = _interopRequireDefault(require("moment"));

var _rcResizeObserver = _interopRequireDefault(require("rc-resize-observer"));

var _configProvider = require("antd/lib/config-provider");

var _util = require("../component/util");

var _container = _interopRequireDefault(require("../container"));

require("./index.less");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var FromInputRender = _react.default.forwardRef(function (_ref, ref) {
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
      return _react.default.createElement(_select.default, Object.assign({
        placeholder: "Select",
        ref: ref
      }, rest), _react.default.createElement(_select.default.Option, {
        key: "all",
        value: "all"
      }, "All"), (0, _util.parsingValueEnumToArray)(valueEnum).map(function (_ref2) {
        var value = _ref2.value,
            text = _ref2.text;
        return _react.default.createElement(_select.default.Option, {
          key: value,
          value: value
        }, text);
      }));
    }

    return _react.default.createElement(_input.default, Object.assign({
      placeholder: "Please type"
    }, rest));
  }

  if (item.valueType === 'date') {
    return _react.default.createElement(_datePicker.default, Object.assign({
      ref: ref,
      placeholder: "Select",
      style: {
        width: '100%'
      }
    }, rest));
  }

  if (item.valueType === 'dateTime') {
    return _react.default.createElement(_datePicker.default, Object.assign({
      showTime: true,
      ref: ref,
      placeholder: "Select",
      style: {
        width: '100%'
      }
    }, rest));
  }

  if (item.valueType === 'time') {
    return _react.default.createElement(_timePicker.default, Object.assign({
      ref: ref,
      placeholder: "Select",
      style: {
        width: '100%'
      }
    }, rest));
  }

  if (item.valueType === 'money') {
    return _react.default.createElement(_inputNumber.default, Object.assign({
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
      if (_moment.default.isMoment(itemValue) && momentFormat) {
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

  var counter = _container.default.useContainer();

  var _useState = (0, _react.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      collapse = _useState2[0],
      setCollapse = _useState2[1];

  var _useState3 = (0, _react.useState)({}),
      _useState4 = _slicedToArray(_useState3, 2),
      proColumnsMap = _useState4[0],
      setProColumnsMap = _useState4[1];

  var _useState5 = (0, _react.useState)(88),
      _useState6 = _slicedToArray(_useState5, 2),
      formHeight = _useState6[0],
      setFormHeight = _useState6[1];

  var submit = function submit() {
    var value = form.getFieldsValue();

    if (onSubmit) {
      onSubmit(genValue(value, momentFormat, proColumnsMap));
    }
  };

  (0, _react.useEffect)(function () {
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
    return _react.default.createElement(_col.default, {
      span: 8,
      key: item.key || item.dataIndex
    }, _react.default.createElement(_form.default.Item, {
      label: item.title
    }, form.getFieldDecorator(item.key || item.dataIndex, {
      initialValue: item.initialValue
    })(_react.default.createElement(FromInputRender, {
      item: item
    }))));
  });
  return _react.default.createElement(_configProvider.ConfigConsumer, null, function (_ref4) {
    var getPrefixCls = _ref4.getPrefixCls;
    var className = getPrefixCls('pro-table-form-search');
    return _react.default.createElement("div", {
      className: className,
      style: {
        height: formHeight
      }
    }, _react.default.createElement(_rcResizeObserver.default, {
      onResize: function onResize(_ref5) {
        var height = _ref5.height;
        return setFormHeight(height + 24);
      }
    }, _react.default.createElement(_form.default, null, _react.default.createElement(_row.default, {
      gutter: 16,
      justify: "end"
    }, domList, _react.default.createElement(_col.default, {
      span: 8,
      offset: (2 - domList.length % 3) * 8,
      key: "option",
      className: "".concat(className, "-option")
    }, _react.default.createElement(_button.default, {
      type: "primary",
      htmlType: "submit",
      onClick: function onClick() {
        return submit();
      }
    }, "Search"), _react.default.createElement(_button.default, {
      style: {
        marginLeft: 8
      },
      onClick: function onClick() {
        form.resetFields();
        submit();
      }
    }, "Reset"), columnsList.length > 2 && _react.default.createElement("a", {
      style: {
        marginLeft: 8
      },
      onClick: function onClick() {
        setCollapse(!collapse);
      }
    }, collapse ? 'Unfold' : 'Collapse', ' ', _react.default.createElement(_icons.DownOutlined, {
      style: {
        transition: '0.3s all',
        transform: "rotate(".concat(collapse ? 0 : 0.5, "turn)")
      }
    })))))));
  });
};

var _default = _form.default.create()(FormSearch);

exports.default = _default;