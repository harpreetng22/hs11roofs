"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/universalify";
exports.ids = ["vendor-chunks/universalify"];
exports.modules = {

/***/ "(rsc)/./node_modules/universalify/index.js":
/*!********************************************!*\
  !*** ./node_modules/universalify/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nexports.fromCallback = function(fn) {\n    return Object.defineProperty(function(...args) {\n        if (typeof args[args.length - 1] === \"function\") fn.apply(this, args);\n        else {\n            return new Promise((resolve, reject)=>{\n                args.push((err, res)=>err != null ? reject(err) : resolve(res));\n                fn.apply(this, args);\n            });\n        }\n    }, \"name\", {\n        value: fn.name\n    });\n};\nexports.fromPromise = function(fn) {\n    return Object.defineProperty(function(...args) {\n        const cb = args[args.length - 1];\n        if (typeof cb !== \"function\") return fn.apply(this, args);\n        else {\n            args.pop();\n            fn.apply(this, args).then((r)=>cb(null, r), cb);\n        }\n    }, \"name\", {\n        value: fn.name\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvdW5pdmVyc2FsaWZ5L2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBRUFBLG9CQUFvQixHQUFHLFNBQVVFLEVBQUU7SUFDakMsT0FBT0MsT0FBT0MsY0FBYyxDQUFDLFNBQVUsR0FBR0MsSUFBSTtRQUM1QyxJQUFJLE9BQU9BLElBQUksQ0FBQ0EsS0FBS0MsTUFBTSxHQUFHLEVBQUUsS0FBSyxZQUFZSixHQUFHSyxLQUFLLENBQUMsSUFBSSxFQUFFRjthQUMzRDtZQUNILE9BQU8sSUFBSUcsUUFBUSxDQUFDQyxTQUFTQztnQkFDM0JMLEtBQUtNLElBQUksQ0FBQyxDQUFDQyxLQUFLQyxNQUFRLE9BQVEsT0FBUUgsT0FBT0UsT0FBT0gsUUFBUUk7Z0JBQzlEWCxHQUFHSyxLQUFLLENBQUMsSUFBSSxFQUFFRjtZQUNqQjtRQUNGO0lBQ0YsR0FBRyxRQUFRO1FBQUVTLE9BQU9aLEdBQUdhLElBQUk7SUFBQztBQUM5QjtBQUVBZixtQkFBbUIsR0FBRyxTQUFVRSxFQUFFO0lBQ2hDLE9BQU9DLE9BQU9DLGNBQWMsQ0FBQyxTQUFVLEdBQUdDLElBQUk7UUFDNUMsTUFBTVksS0FBS1osSUFBSSxDQUFDQSxLQUFLQyxNQUFNLEdBQUcsRUFBRTtRQUNoQyxJQUFJLE9BQU9XLE9BQU8sWUFBWSxPQUFPZixHQUFHSyxLQUFLLENBQUMsSUFBSSxFQUFFRjthQUMvQztZQUNIQSxLQUFLYSxHQUFHO1lBQ1JoQixHQUFHSyxLQUFLLENBQUMsSUFBSSxFQUFFRixNQUFNYyxJQUFJLENBQUNDLENBQUFBLElBQUtILEdBQUcsTUFBTUcsSUFBSUg7UUFDOUM7SUFDRixHQUFHLFFBQVE7UUFBRUgsT0FBT1osR0FBR2EsSUFBSTtJQUFDO0FBQzlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaHMxMS8uL25vZGVfbW9kdWxlcy91bml2ZXJzYWxpZnkvaW5kZXguanM/YmIxYyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxuZXhwb3J0cy5mcm9tQ2FsbGJhY2sgPSBmdW5jdGlvbiAoZm4pIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmdW5jdGlvbiAoLi4uYXJncykge1xuICAgIGlmICh0eXBlb2YgYXJnc1thcmdzLmxlbmd0aCAtIDFdID09PSAnZnVuY3Rpb24nKSBmbi5hcHBseSh0aGlzLCBhcmdzKVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgYXJncy5wdXNoKChlcnIsIHJlcykgPT4gKGVyciAhPSBudWxsKSA/IHJlamVjdChlcnIpIDogcmVzb2x2ZShyZXMpKVxuICAgICAgICBmbi5hcHBseSh0aGlzLCBhcmdzKVxuICAgICAgfSlcbiAgICB9XG4gIH0sICduYW1lJywgeyB2YWx1ZTogZm4ubmFtZSB9KVxufVxuXG5leHBvcnRzLmZyb21Qcm9taXNlID0gZnVuY3Rpb24gKGZuKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICBjb25zdCBjYiA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXVxuICAgIGlmICh0eXBlb2YgY2IgIT09ICdmdW5jdGlvbicpIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmdzKVxuICAgIGVsc2Uge1xuICAgICAgYXJncy5wb3AoKVxuICAgICAgZm4uYXBwbHkodGhpcywgYXJncykudGhlbihyID0+IGNiKG51bGwsIHIpLCBjYilcbiAgICB9XG4gIH0sICduYW1lJywgeyB2YWx1ZTogZm4ubmFtZSB9KVxufVxuIl0sIm5hbWVzIjpbImV4cG9ydHMiLCJmcm9tQ2FsbGJhY2siLCJmbiIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiYXJncyIsImxlbmd0aCIsImFwcGx5IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJwdXNoIiwiZXJyIiwicmVzIiwidmFsdWUiLCJuYW1lIiwiZnJvbVByb21pc2UiLCJjYiIsInBvcCIsInRoZW4iLCJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/universalify/index.js\n");

/***/ })

};
;