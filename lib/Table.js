"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/table/style");

var _table = _interopRequireDefault(require("antd/lib/table"));

require("antd/lib/card/style");

var _card = _interopRequireDefault(require("antd/lib/card"));

require("antd/lib/typography/style");

var _typography = _interopRequireDefault(require("antd/lib/typography"));

require("antd/lib/tooltip/style");

var _tooltip = _interopRequireDefault(require("antd/lib/tooltip"));

require("./index.less");

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _useMergeValue3 = _interopRequireDefault(require("use-merge-value"));

var _moment = _interopRequireDefault(require("moment"));

var _useFetchData = _interopRequireDefault(require("./useFetchData"));

var _container = _interopRequireDefault(require("./container"));

var _indexColumn = _interopRequireDefault(require("./component/indexColumn"));

var _toolBar = _interopRequireDefault(require("./component/toolBar"));

var _alert = _interopRequireDefault(require("./component/alert"));

var _Form = _interopRequireDefault(require("./Form"));

var _util = require("./component/util");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var mergePagination = function mergePagination() {
  var pagination = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (pagination === false) {
    return {};
  }

  var defaultPagination = pagination || {};
  var current = action.current,
      pageSize = action.pageSize;

  if (pagination === true) {
    defaultPagination = {};
  }

  return _objectSpread({
    total: action.total
  }, defaultPagination, {
    current: current,
    pageSize: pageSize,
    onChange: function onChange(page, newPageSize) {
      // pageSize 改变之后就没必要切换页码
      if (newPageSize !== pageSize) {
        action.setPageSize(pageSize);
      } else if (current !== page) {
        action.setCurrent(page);
      }

      var onChange = pagination.onChange;

      if (onChange) {
        onChange(page, newPageSize || 10);
      }
    },
    onShowSizeChange: function onShowSizeChange(curt, size) {
      action.setPageSize(size);
      action.setCurrent(curt);
      var onShowSizeChange = pagination.onShowSizeChange;

      if (onShowSizeChange) {
        onShowSizeChange(curt, size || 10);
      }
    }
  });
};

var moneyIntl = new Intl.NumberFormat('zh-Hans-CN', {
  currency: 'CNY',
  style: 'currency',
  minimumFractionDigits: 2
});
/**
 * 根据不同的类型来转化数值
 * @param text
 * @param valueType
 */

var defaultRenderText = function defaultRenderText(text, valueType, index) {
  /**
   * 如果是金额的值
   */
  if (valueType === 'money' && (text || text === 0)) {
    /**
     * 这个 api 支持三星和华为的手机
     */
    if (typeof text === 'string') {
      return moneyIntl.format(parseFloat(text));
    }

    return moneyIntl.format(text);
  }
  /**
   *如果是日期的值
   */


  if (valueType === 'date' && text) {
    return (0, _moment.default)(text).format('YYYY-MM-DD');
  }
  /**
   *如果是日期加时间类型的值
   */


  if (valueType === 'dateTime' && text) {
    return (0, _moment.default)(text).format('YYYY-MM-DD HH:mm:SS');
  }
  /**
   *如果是时间类型的值
   */


  if (valueType === 'time' && text) {
    return (0, _moment.default)(text).format('HH:mm:SS');
  }

  if (valueType === 'index') {
    return _react.default.createElement(_indexColumn.default, null, index + 1);
  }

  if (valueType === 'indexBorder') {
    return _react.default.createElement(_indexColumn.default, {
      border: true
    }, index + 1);
  }

  return text;
};
/**
 * 生成 Ellipsis 的 tooltip
 * @param dom
 * @param item
 * @param text
 */


var genEllipsis = function genEllipsis(dom, item, text) {
  if (!item.ellipsis) {
    return dom;
  }

  return _react.default.createElement(_tooltip.default, {
    getPopupContainer: function getPopupContainer() {
      return document.getElementById('ant-design-pro-table') || document.body;
    },
    title: text
  }, dom);
};

var genCopyable = function genCopyable(dom, item) {
  if (item.copyable || item.ellipsis) {
    return _react.default.createElement(_typography.default.Text, {
      style: {
        width: item.width
      },
      copyable: item.copyable,
      ellipsis: item.ellipsis
    }, dom);
  }

  return dom;
};

var ColumRender = function ColumRender(_ref) {
  var item = _ref.item,
      text = _ref.text,
      row = _ref.row,
      index = _ref.index;

  var counter = _container.default.useContainer();

  var action = counter.action;
  var _item$renderText = item.renderText,
      renderText = _item$renderText === void 0 ? function (val) {
    return val;
  } : _item$renderText,
      _item$valueEnum = item.valueEnum,
      valueEnum = _item$valueEnum === void 0 ? {} : _item$valueEnum;

  if (!action) {
    return null;
  }

  var renderTextStr = renderText((0, _util.parsingText)(text, valueEnum), row, index, action);
  var textDom = defaultRenderText(renderTextStr, item.valueType || 'text', index);
  var dom = genEllipsis(genCopyable(textDom, item), item, text);

  if (item.render) {
    var renderDom = item.render(dom, row, index, action);

    if (renderDom && item.valueType === 'option' && Array.isArray(renderDom)) {
      return _react.default.createElement("div", {
        className: "ant-pro-table-option-cell"
      }, renderDom.map(function (optionDom, domIndex) {
        return (// eslint-disable-next-line react/no-array-index-key
          _react.default.createElement("div", {
            className: "ant-pro-table-option-cell-item",
            key: "".concat(index, "-").concat(domIndex)
          }, optionDom)
        );
      }));
    }

    return renderDom;
  }

  return dom || null;
};

var genColumnList = function genColumnList(columns, action, map) {
  return columns.map(function (item) {
    var key = item.key,
        dataIndex = item.dataIndex;
    var columnKey = "".concat(key || '', "-").concat(dataIndex || '');
    var config = map[columnKey] || {
      fixed: item.fixed
    };
    return _objectSpread({
      onFilter: function onFilter(value, record) {
        var itemValue = String(record[item.dataIndex || ''] || '');
        return String(itemValue) === String(value);
      },
      filters: (0, _util.parsingValueEnumToArray)(item.valueEnum)
    }, item, {
      fixed: config.fixed,
      width: item.width || (item.fixed ? 200 : undefined),
      children: item.children ? genColumnList(item.children, action, map) : undefined,
      ellipsis: false,
      render: function render(text, row, index) {
        return _react.default.createElement(ColumRender, {
          item: item,
          text: text,
          row: row,
          index: index
        });
      }
    });
  }).filter(function (item) {
    return !item.hideInTable;
  });
};
/**
 * 🏆 Use Ant Design Table like a Pro!
 * 更快 更好 更方便
 * @param props
 */


var ProTable = function ProTable(props) {
  var request = props.request,
      propsClassName = props.className,
      _props$params = props.params,
      params = _props$params === void 0 ? {} : _props$params,
      _props$defaultData = props.defaultData,
      defaultData = _props$defaultData === void 0 ? [] : _props$defaultData,
      headerTitle = props.headerTitle,
      postData = props.postData,
      propsPagination = props.pagination,
      onInit = props.onInit,
      _props$columns = props.columns,
      propsColumns = _props$columns === void 0 ? [] : _props$columns,
      _props$toolBarRender = props.toolBarRender,
      toolBarRender = _props$toolBarRender === void 0 ? function () {
    return [];
  } : _props$toolBarRender,
      onLoad = props.onLoad,
      style = props.style,
      tableStyle = props.tableStyle,
      tableClassName = props.tableClassName,
      url = props.url,
      options = props.options,
      _props$search = props.search,
      search = _props$search === void 0 ? true : _props$search,
      _props$rowSelection = props.rowSelection,
      propsRowSelection = _props$rowSelection === void 0 ? false : _props$rowSelection,
      _props$beforeSearchSu = props.beforeSearchSubmit,
      beforeSearchSubmit = _props$beforeSearchSu === void 0 ? function (searchParams) {
    return searchParams;
  } : _props$beforeSearchSu,
      tableAlertRender = props.tableAlertRender,
      reset = _objectWithoutProperties(props, ["request", "className", "params", "defaultData", "headerTitle", "postData", "pagination", "onInit", "columns", "toolBarRender", "onLoad", "style", "tableStyle", "tableClassName", "url", "options", "search", "rowSelection", "beforeSearchSubmit", "tableAlertRender"]);

  var _useState = (0, _react.useState)({}),
      _useState2 = _slicedToArray(_useState, 2),
      formSearch = _useState2[0],
      setFormSearch = _useState2[1];
  /**
   * 需要初始化 不然默认可能报错
   */


  var _ref2 = _typeof(propsPagination) === 'object' ? propsPagination : {
    defaultCurrent: 1,
    defaultPageSize: 10
  },
      defaultCurrent = _ref2.defaultCurrent,
      defaultPageSize = _ref2.defaultPageSize;

  var action = (0, _useFetchData.default)(
  /*#__PURE__*/
  function () {
    var _ref4 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(_ref3) {
      var pageSize, current, tempRequest, msg;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              pageSize = _ref3.pageSize, current = _ref3.current;
              tempRequest = request || url;

              if (tempRequest) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return", {
                data: props.dataSource || [],
                success: true
              });

            case 4:
              _context.next = 6;
              return tempRequest(_objectSpread({
                current: current,
                pageSize: pageSize
              }, params, {}, formSearch));

            case 6:
              msg = _context.sent;

              if (!postData) {
                _context.next = 9;
                break;
              }

              return _context.abrupt("return", _objectSpread({}, msg, {
                data: postData(msg.data)
              }));

            case 9:
              return _context.abrupt("return", msg);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref4.apply(this, arguments);
    };
  }(), defaultData, {
    defaultCurrent: defaultCurrent,
    defaultPageSize: defaultPageSize,
    onLoad: onLoad,
    effects: [Object.values(params).filter(function (item) {
      return item;
    }).join('-'), Object.values(formSearch).filter(function (item) {
      return item;
    }).join('-')]
  });
  var rootRef = (0, _react.useRef)(null);

  action.fullScreen = function () {
    if (!rootRef.current || !document.fullscreenEnabled) {
      return;
    }

    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      rootRef.current.requestFullscreen();
    }
  };

  (0, _react.useEffect)(function () {
    // 页码更改的时候触发一下
    // 不然会造成 action 中数据老旧
    if (onInit) {
      onInit({
        reload: action.reload,
        fetch: action.fetch,
        fetchMore: action.fetchMore
      });
    }
  }, []);
  var pagination = mergePagination(propsPagination, action);
  var className = (0, _classnames.default)('ant-pro-table', propsClassName);

  var counter = _container.default.useContainer();
  /**
   *  保存一下 propsColumns
   *  生成 from 需要用
   */


  (0, _react.useEffect)(function () {
    counter.setAction(action);
    counter.setProColumns(propsColumns);
  }, [JSON.stringify(propsColumns)]);
  var tableColumn = genColumnList(propsColumns, action, counter.columnsMap);
  /**
   * tableColumn 变化的时候更新一下，这个参数将会用于渲染
   */

  (0, _react.useEffect)(function () {
    if (tableColumn && tableColumn.length > 0) {
      counter.setColumns(tableColumn);
    }
  }, [JSON.stringify(tableColumn)]);

  var _useMergeValue = (0, _useMergeValue3.default)([], {
    value: propsRowSelection ? propsRowSelection.selectedRowKeys : undefined
  }),
      _useMergeValue2 = _slicedToArray(_useMergeValue, 2),
      selectedRowKeys = _useMergeValue2[0],
      setSelectedRowKeys = _useMergeValue2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      selectedRows = _useState4[0],
      setSelectedRows = _useState4[1]; // 映射 selectedRowKeys 与 selectedRow


  (0, _react.useEffect)(function () {
    var tableKey = reset.rowKey;
    setSelectedRows((action.dataSource || []).filter(function (item, index) {
      if (!tableKey) {
        return selectedRowKeys.includes(index);
      }

      if (typeof tableKey === 'function') {
        var key = tableKey(item, index);
        return selectedRowKeys.includes(key);
      }

      return selectedRowKeys.includes(item[tableKey]);
    }));
  }, [selectedRowKeys.join('-'), action.loading]);

  var rowSelection = _objectSpread({
    selectedRowKeys: selectedRowKeys
  }, propsRowSelection, {
    onChange: function onChange(keys, rows) {
      if (propsRowSelection && propsRowSelection.onChange) {
        propsRowSelection.onChange(keys, rows);
      }

      setSelectedRowKeys(keys);
    }
  });

  return _react.default.createElement("div", {
    className: className,
    id: "ant-design-pro-table",
    style: style,
    ref: rootRef
  }, search && _react.default.createElement(_Form.default, {
    onSubmit: function onSubmit(value) {
      setFormSearch(beforeSearchSubmit(value)); // back first page

      action.resetPageIndex();
    },
    onReset: function onReset() {
      setFormSearch(beforeSearchSubmit({})); // back first page

      action.resetPageIndex();
    },
    dateFormatter: reset.dateFormatter
  }), _react.default.createElement(_card.default, {
    bordered: false,
    style: {
      height: '100%'
    },
    bodyStyle: {
      padding: 0
    }
  }, _react.default.createElement(_toolBar.default, {
    options: options,
    headerTitle: headerTitle,
    action: action,
    selectedRows: selectedRows,
    selectedRowKeys: selectedRowKeys,
    toolBarRender: toolBarRender
  }), propsRowSelection !== false && _react.default.createElement(_alert.default, {
    selectedRowKeys: selectedRowKeys,
    selectedRows: selectedRows,
    onCleanSelected: function onCleanSelected() {
      if (propsRowSelection && propsRowSelection.onChange) {
        propsRowSelection.onChange([], []);
      }

      setSelectedRowKeys([]);
      setSelectedRows([]);
    },
    renderInfo: tableAlertRender
  }), _react.default.createElement(_table.default, Object.assign({}, reset, {
    rowSelection: propsRowSelection === false ? undefined : rowSelection,
    className: tableClassName,
    style: tableStyle,
    columns: counter.columns.filter(function (item) {
      // 删掉不应该显示的
      var key = item.key,
          dataIndex = item.dataIndex;
      var columnKey = "".concat(key || '', "-").concat(dataIndex || '');
      var config = counter.columnsMap[columnKey];

      if (config && config.show === false) {
        return false;
      }

      return true;
    }),
    loading: action.loading,
    dataSource: action.dataSource,
    pagination: pagination
  }))));
};
/**
 * 🏆 Use Ant Design Table like a Pro!
 * 更快 更好 更方便
 * @param props
 */


var ProviderWarp = function ProviderWarp(props) {
  return _react.default.createElement(_container.default.Provider, null, _react.default.createElement(ProTable, Object.assign({}, props)));
};

var _default = ProviderWarp;
exports.default = _default;