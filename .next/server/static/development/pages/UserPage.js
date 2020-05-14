module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/UserPage.js":
/*!***************************!*\
  !*** ./pages/UserPage.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_pages_userPage_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/pages/userPage.module.css */ "./styles/pages/userPage.module.css");
/* harmony import */ var _styles_pages_userPage_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_userPage_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/oliver/Documents/projects/Unilous/pages/UserPage.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const UserPage = props => {
  //   const [currentUser, setCurrentUser] = useState(null)
  //   const message = useField('text')
  //   const decodedUser = decodeURIComponent(props.userUsername)
  //   const userQuery = useQuery(FIND_USER, {
  //     variables: {username: decodedUser}
  //   })
  //   const onError = (e) => {
  //     const eMessage = e.message
  //     if (eMessage.includes('Path `message` (')) {
  //       triggerAlert('warning', `message$: message of ${message.fields.value.length} characters cannot be more than 800 characters`, props.setAlert, props.resetAlert)
  //     }
  //   }
  //   const [sendMessage] = useMutation(MAKE_NOTIFICATION, {
  //     onError
  //   })
  //   const handleMessage = async () => {
  //     if (!message.fields.value.length) {
  //       triggerAlert('warning', `message$: message field is required`, props.setAlert, props.resetAlert)
  //       return null
  //     }
  //     const result = await sendMessage({
  //         variables: {
  //             userFromId: props.currentUser._id,
  //             userToId: currentUser._id,
  //             message: message.fields.value,
  //         }
  //     })
  //     if (result) {
  //         message.reset()
  //         triggerAlert('success', `sent: message has been sent to ${currentUser.username}`, props.setAlert, props.resetAlert)
  //     }
  // }
  //   const userConditions = () => {
  //     const query = userQuery.data
  //     const reducer = currentUser
  //     if (!query) return null
  //     if (!query.findUser) return null
  //     if (!reducer || reducer.username !== query.username) return query.findUser
  //     return null
  //   }
  //   const user = userConditions()
  //   useEffect(() => {
  //     if (user) {
  //       setCurrentUser(user)
  //     }
  //   }, [user, setCurrentUser])
  //   if (!currentUser) {
  //     return (
  //       <div>
  //           <div style={{height: '15vh'}}/>
  //           <Loading />
  //       </div>
  //     )
  //   }
  //   const pallette = palletteGenerator("rgb(40,40,40)").colorPallette
  return __jsx("h1", {
    className: _styles_pages_userPage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.test,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }, "UserPage.js") // <div className={UP.UP-container}>
  //   <div className="navbar-height" style={{gridColumn: '1/3'}} />
  //   <div className={UP.UP-content}>
  //     <div className={UP.UP-title-container}>
  //       <img className={UP.UP-title-icon} src={userIcon} alt="user" />
  //       <h2 className={UP.UP-title}>{currentUser.username}</h2>
  //     </div>
  //     <h3 className={UP.UP-title} style={{opacity: '0.8'}}>profile link</h3>
  //     <ReferenceLink rl={currentUser.referenceLink} />
  //     <h2 className={UP.UP-title}>posts</h2>
  //     <div className={UP.UP-posts-container}>
  //       <PostSmallList posts={currentUser.posts} />
  //     </div>
  //   </div>
  //     <FormContainer pallette={pallette} >
  //           <h3 className="form-title">contact {currentUser.username}</h3>
  //           <h4 className="form-title-secondary">message</h4>
  //           <div className="form-field-container">
  //             <textarea className="form-field" {...message.fields} />
  //           </div >
  //           <div className="form-submit-button-container">
  //           <h4 onClick={() => handleMessage()} className="form-submit-button">send</h4>
  //           </div>
  //     </FormContainer>
  // </div>
  ;
}; // const mapStateToProps = (state) => {
// 	return {
//     currentUser: state.currentUser        
// 	}
// }
// export default connect(
//   mapStateToProps,
//   {setAlert, resetAlert}
// )(UserPage)


/* harmony default export */ __webpack_exports__["default"] = (UserPage); // uses formContainer.css

/***/ }),

/***/ "./styles/pages/userPage.module.css":
/*!******************************************!*\
  !*** ./styles/pages/userPage.module.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"UP-container": "userPage_UP-container__3NWNU",
	"userPage-container": "userPage_userPage-container__3wbjg",
	"UP-posts-container": "userPage_UP-posts-container__2guuV",
	"UP-title-container": "userPage_UP-title-container__D4ySV",
	"UP-title-icon": "userPage_UP-title-icon__jw9A6",
	"UP-title": "userPage_UP-title__1hg02",
	"UP-RL-container": "userPage_UP-RL-container__1OS3p",
	"UP-RL": "userPage_UP-RL__39dDY",
	"UP-RL-icon-container": "userPage_UP-RL-icon-container__3J4dI",
	"UP-RL-icon": "userPage_UP-RL-icon__2WfRD",
	"UP-RL-link": "userPage_UP-RL-link__Qj2t6",
	"test": "userPage_test__1rNpl"
};


/***/ }),

/***/ 4:
/*!*********************************!*\
  !*** multi ./pages/UserPage.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/oliver/Documents/projects/Unilous/pages/UserPage.js */"./pages/UserPage.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvVXNlclBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL3BhZ2VzL3VzZXJQYWdlLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJVc2VyUGFnZSIsInByb3BzIiwiVVAiLCJ0ZXN0Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBOztBQUVBLE1BQU1BLFFBQVEsR0FBSUMsS0FBRCxJQUFXO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0UsU0FDRTtBQUFJLGFBQVMsRUFBRUMsd0VBQUUsQ0FBQ0MsSUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixDQUVJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBM0JKO0FBNkJILENBdkZELEMsQ0F5RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFZUgsdUVBQWYsRSxDQUVBLHlCOzs7Ozs7Ozs7OztBQ3hHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLGtDIiwiZmlsZSI6InN0YXRpYy9kZXZlbG9wbWVudC9wYWdlcy9Vc2VyUGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVVAgZnJvbSAnLi4vc3R5bGVzL3BhZ2VzL3VzZXJQYWdlLm1vZHVsZS5jc3MnO1xuXG5jb25zdCBVc2VyUGFnZSA9IChwcm9wcykgPT4ge1xuICAvLyAgIGNvbnN0IFtjdXJyZW50VXNlciwgc2V0Q3VycmVudFVzZXJdID0gdXNlU3RhdGUobnVsbClcbiAgLy8gICBjb25zdCBtZXNzYWdlID0gdXNlRmllbGQoJ3RleHQnKVxuICAvLyAgIGNvbnN0IGRlY29kZWRVc2VyID0gZGVjb2RlVVJJQ29tcG9uZW50KHByb3BzLnVzZXJVc2VybmFtZSlcbiAgLy8gICBjb25zdCB1c2VyUXVlcnkgPSB1c2VRdWVyeShGSU5EX1VTRVIsIHtcbiAgLy8gICAgIHZhcmlhYmxlczoge3VzZXJuYW1lOiBkZWNvZGVkVXNlcn1cbiAgLy8gICB9KVxuICAvLyAgIGNvbnN0IG9uRXJyb3IgPSAoZSkgPT4ge1xuICAvLyAgICAgY29uc3QgZU1lc3NhZ2UgPSBlLm1lc3NhZ2VcbiAgLy8gICAgIGlmIChlTWVzc2FnZS5pbmNsdWRlcygnUGF0aCBgbWVzc2FnZWAgKCcpKSB7XG4gIC8vICAgICAgIHRyaWdnZXJBbGVydCgnd2FybmluZycsIGBtZXNzYWdlJDogbWVzc2FnZSBvZiAke21lc3NhZ2UuZmllbGRzLnZhbHVlLmxlbmd0aH0gY2hhcmFjdGVycyBjYW5ub3QgYmUgbW9yZSB0aGFuIDgwMCBjaGFyYWN0ZXJzYCwgcHJvcHMuc2V0QWxlcnQsIHByb3BzLnJlc2V0QWxlcnQpXG4gIC8vICAgICB9XG4gIC8vICAgfVxuICAvLyAgIGNvbnN0IFtzZW5kTWVzc2FnZV0gPSB1c2VNdXRhdGlvbihNQUtFX05PVElGSUNBVElPTiwge1xuICAvLyAgICAgb25FcnJvclxuICAvLyAgIH0pXG4gIC8vICAgY29uc3QgaGFuZGxlTWVzc2FnZSA9IGFzeW5jICgpID0+IHtcbiAgLy8gICAgIGlmICghbWVzc2FnZS5maWVsZHMudmFsdWUubGVuZ3RoKSB7XG4gIC8vICAgICAgIHRyaWdnZXJBbGVydCgnd2FybmluZycsIGBtZXNzYWdlJDogbWVzc2FnZSBmaWVsZCBpcyByZXF1aXJlZGAsIHByb3BzLnNldEFsZXJ0LCBwcm9wcy5yZXNldEFsZXJ0KVxuICAvLyAgICAgICByZXR1cm4gbnVsbFxuICAvLyAgICAgfVxuICAvLyAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc2VuZE1lc3NhZ2Uoe1xuICAvLyAgICAgICAgIHZhcmlhYmxlczoge1xuICAvLyAgICAgICAgICAgICB1c2VyRnJvbUlkOiBwcm9wcy5jdXJyZW50VXNlci5faWQsXG4gIC8vICAgICAgICAgICAgIHVzZXJUb0lkOiBjdXJyZW50VXNlci5faWQsXG4gIC8vICAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UuZmllbGRzLnZhbHVlLFxuICAvLyAgICAgICAgIH1cbiAgLy8gICAgIH0pXG4gIC8vICAgICBpZiAocmVzdWx0KSB7XG4gIC8vICAgICAgICAgbWVzc2FnZS5yZXNldCgpXG4gIC8vICAgICAgICAgdHJpZ2dlckFsZXJ0KCdzdWNjZXNzJywgYHNlbnQ6IG1lc3NhZ2UgaGFzIGJlZW4gc2VudCB0byAke2N1cnJlbnRVc2VyLnVzZXJuYW1lfWAsIHByb3BzLnNldEFsZXJ0LCBwcm9wcy5yZXNldEFsZXJ0KVxuICAvLyAgICAgfVxuICAvLyB9XG5cbiAgLy8gICBjb25zdCB1c2VyQ29uZGl0aW9ucyA9ICgpID0+IHtcbiAgLy8gICAgIGNvbnN0IHF1ZXJ5ID0gdXNlclF1ZXJ5LmRhdGFcbiAgLy8gICAgIGNvbnN0IHJlZHVjZXIgPSBjdXJyZW50VXNlclxuICAvLyAgICAgaWYgKCFxdWVyeSkgcmV0dXJuIG51bGxcbiAgLy8gICAgIGlmICghcXVlcnkuZmluZFVzZXIpIHJldHVybiBudWxsXG4gIC8vICAgICBpZiAoIXJlZHVjZXIgfHwgcmVkdWNlci51c2VybmFtZSAhPT0gcXVlcnkudXNlcm5hbWUpIHJldHVybiBxdWVyeS5maW5kVXNlclxuICAvLyAgICAgcmV0dXJuIG51bGxcbiAgLy8gICB9XG5cbiAgLy8gICBjb25zdCB1c2VyID0gdXNlckNvbmRpdGlvbnMoKVxuICAvLyAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgICBpZiAodXNlcikge1xuICAvLyAgICAgICBzZXRDdXJyZW50VXNlcih1c2VyKVxuICAvLyAgICAgfVxuICAvLyAgIH0sIFt1c2VyLCBzZXRDdXJyZW50VXNlcl0pXG4gIC8vICAgaWYgKCFjdXJyZW50VXNlcikge1xuICAvLyAgICAgcmV0dXJuIChcbiAgLy8gICAgICAgPGRpdj5cbiAgLy8gICAgICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6ICcxNXZoJ319Lz5cbiAgLy8gICAgICAgICAgIDxMb2FkaW5nIC8+XG4gIC8vICAgICAgIDwvZGl2PlxuICAvLyAgICAgKVxuICAvLyAgIH1cbiAgLy8gICBjb25zdCBwYWxsZXR0ZSA9IHBhbGxldHRlR2VuZXJhdG9yKFwicmdiKDQwLDQwLDQwKVwiKS5jb2xvclBhbGxldHRlXG4gICAgcmV0dXJuIChcbiAgICAgIDxoMSBjbGFzc05hbWU9e1VQLnRlc3R9PlVzZXJQYWdlLmpzPC9oMT5cbiAgICAgICAgLy8gPGRpdiBjbGFzc05hbWU9e1VQLlVQLWNvbnRhaW5lcn0+XG4gICAgICAgIC8vICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItaGVpZ2h0XCIgc3R5bGU9e3tncmlkQ29sdW1uOiAnMS8zJ319IC8+XG4gICAgICAgIC8vICAgPGRpdiBjbGFzc05hbWU9e1VQLlVQLWNvbnRlbnR9PlxuICAgICAgICAvLyAgICAgPGRpdiBjbGFzc05hbWU9e1VQLlVQLXRpdGxlLWNvbnRhaW5lcn0+XG4gICAgICAgIC8vICAgICAgIDxpbWcgY2xhc3NOYW1lPXtVUC5VUC10aXRsZS1pY29ufSBzcmM9e3VzZXJJY29ufSBhbHQ9XCJ1c2VyXCIgLz5cbiAgICAgICAgLy8gICAgICAgPGgyIGNsYXNzTmFtZT17VVAuVVAtdGl0bGV9PntjdXJyZW50VXNlci51c2VybmFtZX08L2gyPlxuICAgICAgICAvLyAgICAgPC9kaXY+XG4gICAgICAgIC8vICAgICA8aDMgY2xhc3NOYW1lPXtVUC5VUC10aXRsZX0gc3R5bGU9e3tvcGFjaXR5OiAnMC44J319PnByb2ZpbGUgbGluazwvaDM+XG4gICAgICAgIC8vICAgICA8UmVmZXJlbmNlTGluayBybD17Y3VycmVudFVzZXIucmVmZXJlbmNlTGlua30gLz5cbiAgICAgICAgLy8gICAgIDxoMiBjbGFzc05hbWU9e1VQLlVQLXRpdGxlfT5wb3N0czwvaDI+XG4gICAgICAgIC8vICAgICA8ZGl2IGNsYXNzTmFtZT17VVAuVVAtcG9zdHMtY29udGFpbmVyfT5cbiAgICAgICAgLy8gICAgICAgPFBvc3RTbWFsbExpc3QgcG9zdHM9e2N1cnJlbnRVc2VyLnBvc3RzfSAvPlxuICAgICAgICAvLyAgICAgPC9kaXY+XG4gICAgICAgIC8vICAgPC9kaXY+XG4gICAgICAgIC8vICAgICA8Rm9ybUNvbnRhaW5lciBwYWxsZXR0ZT17cGFsbGV0dGV9ID5cbiAgICAgICAgLy8gICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb3JtLXRpdGxlXCI+Y29udGFjdCB7Y3VycmVudFVzZXIudXNlcm5hbWV9PC9oMz5cbiAgICAgICAgLy8gICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmb3JtLXRpdGxlLXNlY29uZGFyeVwiPm1lc3NhZ2U8L2g0PlxuICAgICAgICAvLyAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZpZWxkLWNvbnRhaW5lclwiPlxuICAgICAgICAvLyAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwiZm9ybS1maWVsZFwiIHsuLi5tZXNzYWdlLmZpZWxkc30gLz5cbiAgICAgICAgLy8gICAgICAgICAgIDwvZGl2ID5cbiAgICAgICAgLy8gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1zdWJtaXQtYnV0dG9uLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgLy8gICAgICAgICAgIDxoNCBvbkNsaWNrPXsoKSA9PiBoYW5kbGVNZXNzYWdlKCl9IGNsYXNzTmFtZT1cImZvcm0tc3VibWl0LWJ1dHRvblwiPnNlbmQ8L2g0PlxuICAgICAgICAvLyAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIC8vICAgICA8L0Zvcm1Db250YWluZXI+XG4gICAgICAgIC8vIDwvZGl2PlxuICAgIClcbn1cblxuLy8gY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4vLyBcdHJldHVybiB7XG4vLyAgICAgY3VycmVudFVzZXI6IHN0YXRlLmN1cnJlbnRVc2VyICAgICAgICBcbi8vIFx0fVxuLy8gfVxuLy8gZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbi8vICAgbWFwU3RhdGVUb1Byb3BzLFxuLy8gICB7c2V0QWxlcnQsIHJlc2V0QWxlcnR9XG4vLyApKFVzZXJQYWdlKVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyUGFnZTsgXG5cbi8vIHVzZXMgZm9ybUNvbnRhaW5lci5jc3MiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJVUC1jb250YWluZXJcIjogXCJ1c2VyUGFnZV9VUC1jb250YWluZXJfXzNOV05VXCIsXG5cdFwidXNlclBhZ2UtY29udGFpbmVyXCI6IFwidXNlclBhZ2VfdXNlclBhZ2UtY29udGFpbmVyX18zd2JqZ1wiLFxuXHRcIlVQLXBvc3RzLWNvbnRhaW5lclwiOiBcInVzZXJQYWdlX1VQLXBvc3RzLWNvbnRhaW5lcl9fMmd1dVZcIixcblx0XCJVUC10aXRsZS1jb250YWluZXJcIjogXCJ1c2VyUGFnZV9VUC10aXRsZS1jb250YWluZXJfX0Q0eVNWXCIsXG5cdFwiVVAtdGl0bGUtaWNvblwiOiBcInVzZXJQYWdlX1VQLXRpdGxlLWljb25fX2p3OUE2XCIsXG5cdFwiVVAtdGl0bGVcIjogXCJ1c2VyUGFnZV9VUC10aXRsZV9fMWhnMDJcIixcblx0XCJVUC1STC1jb250YWluZXJcIjogXCJ1c2VyUGFnZV9VUC1STC1jb250YWluZXJfXzFPUzNwXCIsXG5cdFwiVVAtUkxcIjogXCJ1c2VyUGFnZV9VUC1STF9fMzlkRFlcIixcblx0XCJVUC1STC1pY29uLWNvbnRhaW5lclwiOiBcInVzZXJQYWdlX1VQLVJMLWljb24tY29udGFpbmVyX18zSjRkSVwiLFxuXHRcIlVQLVJMLWljb25cIjogXCJ1c2VyUGFnZV9VUC1STC1pY29uX18yV2ZSRFwiLFxuXHRcIlVQLVJMLWxpbmtcIjogXCJ1c2VyUGFnZV9VUC1STC1saW5rX19RajJ0NlwiLFxuXHRcInRlc3RcIjogXCJ1c2VyUGFnZV90ZXN0X18xck5wbFwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==