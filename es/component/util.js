import React from 'react';
import TableStaus from './status';
/**
 * 转化 text 和 valueEnum
 * 通过 type 来添加 Status
 * @param text
 * @param valueEnum
 * @param prue 纯净模式，不增加 status
 */

export var parsingText = function parsingText(text, valueEnum, pure) {
  if (!valueEnum) {
    return text;
  }

  var domText = valueEnum[text];

  if (!domText) {
    return text;
  }

  if (domText.status) {
    if (pure) {
      return domText.text;
    }

    var status = domText.status;
    var Status = TableStaus[status || 'Init'];
    return React.createElement(Status, null, domText.text);
  }

  return domText.text || domText;
};
/**
 * 把 value 的枚举转化为 数组
 * @param valueEnum
 */

export var parsingValueEnumToArray = function parsingValueEnumToArray() {
  var valueEnum = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object.keys(valueEnum).map(function (key) {
    var value = valueEnum[key] || '';
    return {
      text: value.text || value || '',
      value: key
    };
  });
};