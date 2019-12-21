import "antd/es/divider/style";
import _Divider from "antd/es/divider";
import "antd/es/tooltip/style";
import _Tooltip from "antd/es/tooltip";
import React from 'react';
import { ReloadOutlined, SettingOutlined } from '@ant-design/icons';
import { ConfigConsumer } from "antd/es/config-provider/context";
import ColumnSetting from '../columnSetting';
import './index.less';
import FullScreenIcon from './FullscreenIcon';
var buttonText = {
  fullScreen: {
    text: 'Full screen',
    icon: React.createElement(FullScreenIcon, null)
  },
  reload: {
    text: 'Refresh',
    icon: React.createElement(ReloadOutlined, null)
  },
  setting: {
    text: 'Column setting',
    icon: React.createElement(SettingOutlined, null)
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
      return React.createElement(ColumnSetting, {
        key: key
      });
    }

    if (key === 'fullScreen') {
      return React.createElement("span", {
        key: key,
        style: {
          marginLeft: index === 0 ? 8 : 16
        },
        className: className,
        onClick: value === true ? defaultOptions[key] : value
      }, React.createElement(FullScreenIcon, null));
    }

    var optionItem = buttonText[key];

    if (optionItem) {
      return React.createElement("span", {
        key: key,
        style: {
          marginLeft: index === 0 ? 8 : 16
        },
        className: className,
        onClick: value === true ? defaultOptions[key] : value
      }, React.createElement(_Tooltip, {
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
  return React.createElement(ConfigConsumer, null, function (_ref2) {
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
    return React.createElement("div", {
      className: className
    }, React.createElement("div", {
      className: "".concat(className, "-title")
    }, headerTitle), React.createElement("div", {
      className: "".concat(className, "-option")
    }, actions.filter(function (item) {
      return item;
    }).map(function (node, index) {
      return React.createElement("div", {
        // eslint-disable-next-line react/no-array-index-key
        key: index,
        className: "".concat(className, "-item")
      }, node);
    }), optionDom.length > 0 && actions.length > 0 && React.createElement(_Divider, {
      type: "vertical"
    }), optionDom));
  });
};

export default ToolBar;