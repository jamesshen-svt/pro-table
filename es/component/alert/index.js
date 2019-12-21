import "antd/es/alert/style";
import _Alert from "antd/es/alert";
import React from 'react';
import { ConfigConsumer } from "antd/es/config-provider/context";
import './index.less';

var TableAlert = function TableAlert(_ref) {
  var _ref$selectedRowKeys = _ref.selectedRowKeys,
      selectedRowKeys = _ref$selectedRowKeys === void 0 ? [] : _ref$selectedRowKeys,
      onCleanSelected = _ref.onCleanSelected,
      _ref$selectedRows = _ref.selectedRows,
      selectedRows = _ref$selectedRows === void 0 ? [] : _ref$selectedRows,
      _ref$renderInfo = _ref.renderInfo,
      renderInfo = _ref$renderInfo === void 0 ? function () {
    return React.createElement("span", null, "Selected ", React.createElement("a", {
      style: {
        fontWeight: 600
      }
    }, selectedRowKeys.length), " records\xA0\xA0");
  } : _ref$renderInfo;
  return React.createElement(ConfigConsumer, null, function (_ref2) {
    var getPrefixCls = _ref2.getPrefixCls;
    var className = getPrefixCls('pro-table-alert');

    if (renderInfo === false) {
      return null;
    }

    var dom = renderInfo(selectedRowKeys, selectedRows);

    if (dom === false) {
      return null;
    }

    return React.createElement("div", {
      className: className
    }, React.createElement(_Alert, {
      message: React.createElement("div", {
        className: "".concat(className, "-info")
      }, React.createElement("div", {
        className: "".concat(className, "-info-content")
      }, dom), React.createElement("div", {
        className: "".concat(className, "-info-option")
      }, React.createElement("a", {
        onClick: onCleanSelected
      }, "Clear"))),
      type: "info",
      showIcon: true
    }));
  });
};

export default TableAlert;