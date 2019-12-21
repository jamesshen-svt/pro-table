"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/alert/style");

var _alert = _interopRequireDefault(require("antd/lib/alert"));

var _react = _interopRequireDefault(require("react"));

var _context = require("antd/lib/config-provider/context");

require("./index.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableAlert = function TableAlert(_ref) {
  var _ref$selectedRowKeys = _ref.selectedRowKeys,
      selectedRowKeys = _ref$selectedRowKeys === void 0 ? [] : _ref$selectedRowKeys,
      onCleanSelected = _ref.onCleanSelected,
      _ref$selectedRows = _ref.selectedRows,
      selectedRows = _ref$selectedRows === void 0 ? [] : _ref$selectedRows,
      _ref$renderInfo = _ref.renderInfo,
      renderInfo = _ref$renderInfo === void 0 ? function () {
    return _react.default.createElement("span", null, "Selected ", _react.default.createElement("a", {
      style: {
        fontWeight: 600
      }
    }, selectedRowKeys.length), " records\xA0\xA0");
  } : _ref$renderInfo;
  return _react.default.createElement(_context.ConfigConsumer, null, function (_ref2) {
    var getPrefixCls = _ref2.getPrefixCls;
    var className = getPrefixCls('pro-table-alert');

    if (renderInfo === false) {
      return null;
    }

    var dom = renderInfo(selectedRowKeys, selectedRows);

    if (dom === false) {
      return null;
    }

    return _react.default.createElement("div", {
      className: className
    }, _react.default.createElement(_alert.default, {
      message: _react.default.createElement("div", {
        className: "".concat(className, "-info")
      }, _react.default.createElement("div", {
        className: "".concat(className, "-info-content")
      }, dom), _react.default.createElement("div", {
        className: "".concat(className, "-info-option")
      }, _react.default.createElement("a", {
        onClick: onCleanSelected
      }, "Clear"))),
      type: "info",
      showIcon: true
    }));
  });
};

var _default = TableAlert;
exports.default = _default;