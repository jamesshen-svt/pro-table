"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/popover/style");

var _popover = _interopRequireDefault(require("antd/lib/popover"));

require("antd/lib/checkbox/style");

var _checkbox = _interopRequireDefault(require("antd/lib/checkbox"));

require("antd/lib/tooltip/style");

var _tooltip = _interopRequireDefault(require("antd/lib/tooltip"));

var _react = _interopRequireWildcard(require("react"));

var _context = require("antd/lib/config-provider/context");

var _icons = require("@ant-design/icons");

var _container = _interopRequireDefault(require("../../container"));

require("./index.less");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ToolTipIcon = function ToolTipIcon(_ref) {
  var title = _ref.title,
      show = _ref.show,
      children = _ref.children,
      columnKey = _ref.columnKey,
      fixed = _ref.fixed;

  var _Container$useContain = _container.default.useContainer(),
      columnsMap = _Container$useContain.columnsMap,
      setColumnsMap = _Container$useContain.setColumnsMap;

  if (show) {
    return _react.default.createElement(_tooltip.default, {
      title: title
    }, _react.default.createElement("span", {
      onClick: function onClick() {
        var config = columnsMap[columnKey || ''] || {};

        var columnKeyMap = _objectSpread({}, columnsMap, _defineProperty({}, columnKey, _objectSpread({}, config, {
          fixed: fixed
        })));

        setColumnsMap(columnKeyMap);
      }
    }, children));
  }

  return null;
};

var CheckboxList = function CheckboxList(_ref2) {
  var localColumns = _ref2.localColumns,
      className = _ref2.className;

  var _Container$useContain2 = _container.default.useContainer(),
      columnsMap = _Container$useContain2.columnsMap,
      setColumnsMap = _Container$useContain2.setColumnsMap;

  var rightList = [];
  var leftList = [];
  var list = [];
  localColumns.forEach(function (_ref3) {
    var title = _ref3.title,
        key = _ref3.key,
        dataIndex = _ref3.dataIndex,
        fixed = _ref3.fixed;
    var columnKey = "".concat(key || '', "-").concat(dataIndex || '');
    var config = columnsMap[columnKey || 'null'] || {
      show: true
    };

    var dom = _react.default.createElement("span", {
      className: "".concat(className, "-list-item"),
      key: columnKey
    }, _react.default.createElement(_checkbox.default, {
      onChange: function onChange(e) {
        if (columnKey) {
          var tempConfig = columnsMap[columnKey || ''] || {};

          var columnKeyMap = _objectSpread({}, columnsMap, _defineProperty({}, columnKey, _objectSpread({}, tempConfig, {
            show: e.target.checked
          })));

          setColumnsMap(columnKeyMap);
        }
      },
      checked: config.show !== false
    }, title), _react.default.createElement("span", {
      className: "".concat(className, "-list-item-option")
    }, _react.default.createElement(ToolTipIcon, {
      columnKey: columnKey,
      fixed: "left",
      title: "fix to left",
      show: fixed !== 'left'
    }, _react.default.createElement(_icons.PushpinOutlined, {
      style: {
        transform: 'rotate(-90deg)'
      }
    })), _react.default.createElement(ToolTipIcon, {
      columnKey: columnKey,
      fixed: undefined,
      title: "\u53D6\u6D88\u56FA\u5B9A",
      show: !!fixed
    }, _react.default.createElement(_icons.VerticalAlignMiddleOutlined, null)), _react.default.createElement(ToolTipIcon, {
      columnKey: columnKey,
      fixed: "right",
      title: "fix to right",
      show: fixed !== 'right'
    }, _react.default.createElement(_icons.PushpinOutlined, null))));

    if (fixed === 'left') {
      leftList.push(dom);
      return;
    }

    if (fixed === 'right') {
      rightList.push(dom);
      return;
    }

    list.push(dom);
  });
  var showLeft = leftList && leftList.length > 0;
  var showRight = rightList && rightList.length > 0;
  return _react.default.createElement("div", {
    className: "".concat(className, "-list")
  }, showLeft && _react.default.createElement("span", {
    className: "".concat(className, "-list-title")
  }, "fix to left"), leftList, list && list.length > 0 && (showLeft || showRight) && _react.default.createElement("span", {
    className: "".concat(className, "-list-title")
  }, "unfixed"), list, showRight && _react.default.createElement("span", {
    className: "".concat(className, "-list-title")
  }, "fix to right"), rightList);
};

var ColumnSetting = function ColumnSetting(props) {
  var counter = _container.default.useContainer();

  var localColumns = props.columns || counter.columns || [];
  var columnsMap = counter.columnsMap,
      setColumnsMap = counter.setColumnsMap;
  /**
   * 设置全部选中，或全部未选中
   * @param show
   */

  var setAllSelectAction = function setAllSelectAction() {
    var show = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    var columnKeyMap = {};
    localColumns.forEach(function (_ref4) {
      var key = _ref4.key,
          fixed = _ref4.fixed,
          dataIndex = _ref4.dataIndex;
      var columnKey = "".concat(key || '', "-").concat(dataIndex || '');

      if (columnKey) {
        columnKeyMap[columnKey] = {
          show: show,
          fixed: fixed
        };
      }
    });
    setColumnsMap(columnKeyMap);
  };

  (0, _react.useEffect)(function () {
    setAllSelectAction();
  }, [JSON.stringify(localColumns)]);
  (0, _react.useEffect)(function () {
    // 将方法赋值
    if (counter.action) {
      counter.action.restColumnsConfig = function () {
        setColumnsMap({});
      };
    }
  }, []);
  var selectKeys = Object.values(columnsMap).filter(function (value) {
    return !value || value.show !== false;
  });
  var indeterminate = selectKeys.length > 0 && selectKeys.length !== localColumns.length;
  return _react.default.createElement(_context.ConfigConsumer, null, function (_ref5) {
    var getPrefixCls = _ref5.getPrefixCls;
    var className = getPrefixCls('pro-table-column-setting');
    var toolBarClassName = getPrefixCls('pro-table-toolbar');
    return _react.default.createElement(_popover.default, {
      arrowPointAtCenter: true,
      getPopupContainer: function getPopupContainer() {
        return document.getElementById('ant-design-pro-table') || document.body;
      },
      title: _react.default.createElement("div", {
        className: "".concat(className, "-title")
      }, _react.default.createElement(_checkbox.default, {
        indeterminate: indeterminate,
        checked: selectKeys.length === localColumns.length || Object.values(columnsMap).length === 0,
        onChange: function onChange(e) {
          if (e.target.checked) {
            setAllSelectAction();
          } else {
            setAllSelectAction(false);
          }
        }
      }, "Column display"), _react.default.createElement("a", {
        onClick: function onClick() {
          setColumnsMap({});
        }
      }, "Reset")),
      trigger: "click",
      placement: "bottomRight",
      content: _react.default.createElement(CheckboxList, {
        className: className,
        localColumns: localColumns
      })
    }, _react.default.createElement(_tooltip.default, {
      title: "Column display",
      getPopupContainer: function getPopupContainer() {
        return document.getElementById('ant-design-pro-table') || document.body;
      }
    }, _react.default.createElement(_icons.SettingOutlined, {
      className: "".concat(toolBarClassName, "-item-icon"),
      style: {
        fontSize: 16
      }
    })));
  });
};

var _default = ColumnSetting;
exports.default = _default;