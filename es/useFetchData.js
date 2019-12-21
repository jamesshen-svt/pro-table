function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import { useState, useEffect } from 'react';

var useFetchData = function useFetchData(getData, defaultData, options) {
  var _ref = options || {},
      _ref$defaultPageSize = _ref.defaultPageSize,
      defaultPageSize = _ref$defaultPageSize === void 0 ? 10 : _ref$defaultPageSize,
      _ref$defaultCurrent = _ref.defaultCurrent,
      defaultCurrent = _ref$defaultCurrent === void 0 ? 1 : _ref$defaultCurrent,
      _ref$onLoad = _ref.onLoad,
      onLoad = _ref$onLoad === void 0 ? function () {
    return null;
  } : _ref$onLoad;

  var _useState = useState(defaultData),
      _useState2 = _slicedToArray(_useState, 2),
      list = _useState2[0],
      setList = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = useState(defaultCurrent),
      _useState6 = _slicedToArray(_useState5, 2),
      pageIndex = _useState6[0],
      setPageIndex = _useState6[1];

  var _useState7 = useState(defaultPageSize),
      _useState8 = _slicedToArray(_useState7, 2),
      pageSize = _useState8[0],
      setPageSize = _useState8[1];

  var _useState9 = useState(0),
      _useState10 = _slicedToArray(_useState9, 2),
      total = _useState10[0],
      setTotal = _useState10[1];

  var _useState11 = useState(false),
      _useState12 = _slicedToArray(_useState11, 2),
      hasMore = _useState12[0],
      setHasMore = _useState12[1];

  var _ref2 = options || {},
      _ref2$manual = _ref2.manual,
      manual = _ref2$manual === void 0 ? false : _ref2$manual,
      _ref2$effects = _ref2.effects,
      effects = _ref2$effects === void 0 ? [] : _ref2$effects;
  /**
   * 请求数据
   * @param isAppend 是否添加数据到后面
   */


  var fetchList =
  /*#__PURE__*/
  function () {
    var _ref3 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(isAppend) {
      var _ref4, data, success, _ref4$total, dataTotal;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(manual && loading)) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              setLoading(true);
              _context.next = 5;
              return getData({
                current: pageIndex,
                pageSize: pageSize
              });

            case 5:
              _context.t0 = _context.sent;

              if (_context.t0) {
                _context.next = 8;
                break;
              }

              _context.t0 = {};

            case 8:
              _ref4 = _context.t0;
              data = _ref4.data;
              success = _ref4.success;
              _ref4$total = _ref4.total;
              dataTotal = _ref4$total === void 0 ? 0 : _ref4$total;

              if (success !== false) {
                if (isAppend && list) {
                  setList([].concat(_toConsumableArray(list), _toConsumableArray(data)));
                } else {
                  setList(data);
                }

                if (dataTotal !== total) {
                  setTotal(dataTotal);
                } // 判断是否可以继续翻页


                setHasMore(dataTotal > pageSize * pageIndex);
              }

              setLoading(false);

              if (onLoad) {
                onLoad(data);
              }

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function fetchList(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  var fetchMore = function fetchMore() {
    // 如果没有更多的就忽略掉
    if (hasMore) {
      setPageIndex(pageIndex + 1);
    }
  };
  /**
   * pageIndex 改变的时候自动刷新
   */


  useEffect(function () {
    // 如果 list 的长度大于 pageSize 的长度
    // 说明是一个假分页
    // (pageIndex - 1 || 1) 至少要第一页
    // 在第一页大于 10
    // 第二页也应该是大于 10
    if (pageIndex !== undefined && list.length <= pageSize) {
      fetchList();
    }
  }, [pageIndex]); // pageSize 修改后返回第一页

  useEffect(function () {
    setPageIndex(1);
  }, [pageSize]);
  /**
   * 重置pageIndex 到 1
   */

  var resetPageIndex = function resetPageIndex() {
    setPageIndex(1);
  };

  useEffect(function () {
    if (manual === false) {
      fetchList();
    }
  }, effects);
  return {
    dataSource: list,
    loading: loading,
    fetch: fetchList,
    reload: fetchList,
    fetchMore: fetchMore,
    total: total,
    hasMore: hasMore,
    resetPageIndex: resetPageIndex,
    current: pageIndex,
    pageSize: pageSize,
    setCurrent: setPageIndex,
    setPageSize: setPageSize
  };
};

export default useFetchData;