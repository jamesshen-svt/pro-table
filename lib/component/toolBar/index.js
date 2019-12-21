"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/divider/style");

var _divider = _interopRequireDefault(require("antd/lib/divider"));

require("antd/lib/tooltip/style");

var _tooltip = _interopRequireDefault(require("antd/lib/tooltip"));

var _react = _interopRequireDefault(require("react"));

var _icons = require("@ant-design/icons");

var _context = require("antd/lib/config-provider/context");

var _columnSetting = _interopRequireDefault(require("../columnSetting"));

require("./index.less");

var _FullscreenIcon = _interopRequireDefault(require("./FullscreenIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var buttonText = {
  fullScreen: {
    text: 'Full screen',
    icon: _react.default.createElement(_FullscreenIcon.default, null)
  },
  reload: {
    text: 'Refresh',
    icon: _react.default.createElement(_icons.ReloadOutlined, null)
  },
  setting: {
    text: 'Column setting',
    icon: _react.default.createElement(_icons.SettingOutlined, null)
  }
};
/**
 * 渲染默认的 工具栏
 * @param options
 * @param className
 */

var renderDefaultOption = function renderDefaultOption(options, className, defaultOptions) {
  return options && Object.keys(options).filter(function (item) {
    return item;
  }).map(function (key, index) {
    var value = options[key];

    if (!value) {
      return null;
    }

    if (key === 'setting') {
      return _react.default.createElement(_columnSetting.default, {
        key: key
      });
    }

    if (key === 'fullScreen') {
      return _react.default.createElement("span", {
        key: key,
        style: {
          marginLeft: index === 0 ? 8 : 16
        },
        className: className,
        onClick: value === true ? defaultOptions[key] : value
      }, _react.default.createElement(_FullscreenIcon.default, null));
    }

    var optionItem = buttonText[key];

    if (optionItem) {
      return _react.default.createElement("span", {
        key: key,
        style: {
          marginLeft: index === 0 ? 8 : 16
        },
        className: className,
        onClick: value === true ? defaultOptions[key] : value
      }, _react.default.createElement(_tooltip.default, {
        getPopupContainer: function getPopupContainer() {
          return document.getElementById('ant-design-pro-table') || document.body;
        },
        title: optionItem.text
      }, optionItem.icon));
    }

    return null;
  }).filter(function (item) {
    return item;
  });
};

var ToolBar = function ToolBar(_ref) {
  var headerTitle = _ref.headerTitle,
      toolBarRender = _ref.toolBarRender,
      action = _ref.action,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? {
    fullScreen: function fullScreen() {
      return action.fullScreen && action.fullScreen();
    },
    reload: function reload() {
      return action.reload();
    },
    setting: true
  } : _ref$options,
      selectedRowKeys = _ref.selectedRowKeys,
      selectedRows = _ref.selectedRows;
  return _react.default.createElement(_context.ConfigConsumer, null, function (_ref2) {
    var getPrefixCls = _ref2.getPrefixCls;
    var className = getPrefixCls('pro-table-toolbar');
    var optionDom = renderDefaultOption(options, "".concat(className, "-item-icon"), {
      fullScreen: function fullScreen() {
        return action.fullScreen && action.fullScreen();
      },
      reload: function reload() {
        return action.reload();
      },
      setting: true
    }) || []; // 操作列表

    var actions = toolBarRender ? toolBarRender(action, {
      selectedRowKeys: selectedRowKeys,
      selectedRows: selectedRows
    }) : [];
    return _react.default.createElement("div", {
      className: className
    }, _react.default.createElement("div", {
      className: "".concat(className, "-title")
    }, headerTitle), _react.default.createElement("div", {
      className: "".concat(className, "-option")
    }, actions.filter(function (item) {
      return item;
    }).map(function (node, index) {
      return _react.default.createElement("div", {
        // eslint-disable-next-line react/no-array-index-key
        key: index,
        className: "".concat(className, "-item")
      }, node);
    }), optionDom.length > 0 && actions.length > 0 && _react.default.createElement(_divider.default, {
      type: "vertical"
    }), optionDom));
  });
};

var _default = ToolBar;
exports.default = _default;