"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _reverseString = require("./reverse-string");
Object.keys(_reverseString).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _reverseString[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _reverseString[key];
    }
  });
});