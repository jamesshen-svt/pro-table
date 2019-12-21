import "antd/es/tooltip/style";
import _Tooltip from "antd/es/tooltip";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useEffect, useState } from 'react';
import { FullscreenExitOutlined, FullscreenOutlined } from '@ant-design/icons';

var FullScreenIcon = function FullScreenIcon() {
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      fullscreen = _useState2[0],
      setFullscreen = _useState2[1];

  useEffect(function () {
    document.onfullscreenchange = function () {
      setFullscreen(!!document.fullscreenElement);
    };
  }, []);
  return fullscreen ? React.createElement(_Tooltip, {
    title: "\u9000\u51FA\u5168\u5C4F",
    getPopupContainer: function getPopupContainer() {
      return document.getElementById('ant-design-pro-table') || document.body;
    }
  }, React.createElement(FullscreenExitOutlined, null)) : React.createElement(_Tooltip, {
    title: "\u5168\u5C4F",
    getPopupContainer: function getPopupContainer() {
      return document.getElementById('ant-design-pro-table') || document.body;
    }
  }, React.createElement(FullscreenOutlined, null));
};

export default FullScreenIcon;