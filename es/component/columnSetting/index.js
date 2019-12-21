import "antd/es/popover/style";
import _Popover from "antd/es/popover";
import "antd/es/checkbox/style";
import _Checkbox from "antd/es/checkbox";
import "antd/es/tooltip/style";
import _Tooltip from "antd/es/tooltip";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { useEffect } from 'react';
import { ConfigConsumer } from "antd/es/config-provider/context";
import { PushpinOutlined, SettingOutlined, VerticalAlignMiddleOutlined } from '@ant-design/icons';
import Container from '../../container';
import './index.less';

var ToolTipIcon = function ToolTipIcon(_ref) {
  var title = _ref.title,
      show = _ref.show,
      children = _ref.children,
      columnKey = _ref.columnKey,
      fixed = _ref.fixed;

  var _Container$useContain = Container.useContainer(),
      columnsMap = _Container$useContain.columnsMap,
      setColumnsMap = _Container$useContain.setColumnsMap;

  if (show) {
    return React.createElement(_Tooltip, {
      title: title
    }, React.createElement("span", {
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

  var _Container$useContain2 = Container.useContainer(),
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
    var dom = React.createElement("span", {
      className: "".concat(className, "-list-item"),
      key: columnKey
    }, React.createElement(_Checkbox, {
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
    }, title), React.createElement("span", {
      className: "".concat(className, "-list-item-option")
    }, React.createElement(ToolTipIcon, {
      columnKey: columnKey,
      fixed: "left",
      title: "fix to left",
      show: fixed !== 'left'
    }, React.createElement(PushpinOutlined, {
      style: {
        transform: 'rotate(-90deg)'
      }
    })), React.createElement(ToolTipIcon, {
      columnKey: columnKey,
      fixed: undefined,
      title: "Cancel fix",
      show: !!fixed
    }, React.createElement(VerticalAlignMiddleOutlined, null)), React.createElement(ToolTipIcon, {
      columnKey: columnKey,
      fixed: "right",
      title: "fix to right",
      show: fixed !== 'right'
    }, React.createElement(PushpinOutlined, null))));

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
  return React.createElement("div", {
    className: "".concat(className, "-list")
  }, showLeft && React.createElement("span", {
    className: "".concat(className, "-list-title")
  }, "fix to left"), leftList, list && list.length > 0 && (showLeft || showRight) && React.createElement("span", {
    className: "".concat(className, "-list-title")
  }, "unfixed"), list, showRight && React.createElement("span", {
    className: "".concat(className, "-list-title")
  }, "fix to right"), rightList);
};

var ColumnSetting = function ColumnSetting(props) {
  var counter = Container.useContainer();
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

  useEffect(function () {
    setAllSelectAction();
  }, [JSON.stringify(localColumns)]);
  useEffect(function () {
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
  return React.createElement(ConfigConsumer, null, function (_ref5) {
    var getPrefixCls = _ref5.getPrefixCls;
    var className = getPrefixCls('pro-table-column-setting');
    var toolBarClassName = getPrefixCls('pro-table-toolbar');
    return React.createElement(_Popover, {
      arrowPointAtCenter: true,
      getPopupContainer: function getPopupContainer() {
        return document.getElementById('ant-design-pro-table') || document.body;
      },
      title: React.createElement("div", {
        className: "".concat(className, "-title")
      }, React.createElement(_Checkbox, {
        indeterminate: indeterminate,
        checked: selectKeys.length === localColumns.length || Object.values(columnsMap).length === 0,
        onChange: function onChange(e) {
          if (e.target.checked) {
            setAllSelectAction();
          } else {
            setAllSelectAction(false);
          }
        }
      }, "Col. display"), React.createElement("a", {
        onClick: function onClick() {
          setColumnsMap({});
        }
      }, "reset")),
      trigger: "click",
      placement: "bottomRight",
      content: React.createElement(CheckboxList, {
        className: className,
        localColumns: localColumns
      })
    }, React.createElement(_Tooltip, {
      title: "Col. display",
      getPopupContainer: function getPopupContainer() {
        return document.getElementById('ant-design-pro-table') || document.body;
      }
    }, React.createElement(SettingOutlined, {
      className: "".concat(toolBarClassName, "-item-icon"),
      style: {
        fontSize: 16
      }
    })));
  });
};

export default ColumnSetting;