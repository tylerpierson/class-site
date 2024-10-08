/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _pages_HomePage_HomePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/HomePage/HomePage */ "./src/pages/HomePage/HomePage.js");
/* harmony import */ var _pages_AboutPage_AboutPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/AboutPage/AboutPage */ "./src/pages/AboutPage/AboutPage.js");
/* harmony import */ var _pages_ContactPage_ContactPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/ContactPage/ContactPage */ "./src/pages/ContactPage/ContactPage.js");
/* harmony import */ var _pages_AuthPage_AuthPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/AuthPage/AuthPage */ "./src/pages/AuthPage/AuthPage.js");
/* harmony import */ var _pages_ProfilePage_ProfilePage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/ProfilePage/ProfilePage */ "./src/pages/ProfilePage/ProfilePage.js");
/* harmony import */ var _App_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./App.module.scss */ "./src/App.module.scss");
/* harmony import */ var _utilities_users_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utilities/users-service */ "./src/utilities/users-service.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");









function App() {
  const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null); // Initial user state is null
  const [token, setToken] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,_utilities_users_service__WEBPACK_IMPORTED_MODULE_7__.getToken)());
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    async function fetchUser() {
      const fetchedUser = await (0,_utilities_users_service__WEBPACK_IMPORTED_MODULE_7__.getUser)();
      setUser(fetchedUser);
    }
    fetchUser();
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: _App_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].App
  }, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Routes, null, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
    path: "/",
    element: /*#__PURE__*/React.createElement(_pages_AuthPage_AuthPage__WEBPACK_IMPORTED_MODULE_4__["default"], {
      user: user,
      setUser: setUser
    })
  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
    path: "/:id",
    element: /*#__PURE__*/React.createElement(_pages_ProfilePage_ProfilePage__WEBPACK_IMPORTED_MODULE_5__["default"], {
      user: user,
      setUser: setUser
    })
  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
    path: "/home",
    element: /*#__PURE__*/React.createElement(_pages_HomePage_HomePage__WEBPACK_IMPORTED_MODULE_1__["default"], null)
  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
    path: "/about",
    element: /*#__PURE__*/React.createElement(_pages_AboutPage_AboutPage__WEBPACK_IMPORTED_MODULE_2__["default"], null)
  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
    path: "/contact",
    element: /*#__PURE__*/React.createElement(_pages_ContactPage_ContactPage__WEBPACK_IMPORTED_MODULE_3__["default"], null)
  })));
}

/***/ }),

/***/ "./src/components/FourthBanner/FourthBanner.js":
/*!*****************************************************!*\
  !*** ./src/components/FourthBanner/FourthBanner.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FourthBanner_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FourthBanner.module.scss */ "./src/components/FourthBanner/FourthBanner.module.scss");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function FourthBanner() {
  return /*#__PURE__*/React.createElement("div", {
    className: _FourthBanner_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].FourthBanner
  }, /*#__PURE__*/React.createElement("div", {
    className: _FourthBanner_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].contentContainer
  }, /*#__PURE__*/React.createElement("h1", {
    className: _FourthBanner_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].title
  }, "Fourth", /*#__PURE__*/React.createElement("br", null), "Grade")), /*#__PURE__*/React.createElement("p", {
    className: _FourthBanner_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].titleDescription
  }, "Here's what we have planned..."));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FourthBanner);

/***/ }),

/***/ "./src/components/IntroContainer/IntroContainer.js":
/*!*********************************************************!*\
  !*** ./src/components/IntroContainer/IntroContainer.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IntroContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IntroContainer.module.scss */ "./src/components/IntroContainer/IntroContainer.module.scss");
/* harmony import */ var _SpriteAnimation_SpriteAnimation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SpriteAnimation/SpriteAnimation */ "./src/components/SpriteAnimation/SpriteAnimation.js");
/* harmony import */ var _SpriteAnimation_SpriteAnimationMed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SpriteAnimation/SpriteAnimationMed */ "./src/components/SpriteAnimation/SpriteAnimationMed.js");
/* harmony import */ var _SpriteAnimation_SpriteAnimationSm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SpriteAnimation/SpriteAnimationSm */ "./src/components/SpriteAnimation/SpriteAnimationSm.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");




function IntroContainer() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: _IntroContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].IntroContainer
  }, /*#__PURE__*/React.createElement("div", {
    className: _IntroContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].mainContent
  }, /*#__PURE__*/React.createElement("h4", {
    className: _IntroContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].headingSM
  }, "Sandbrock Ranch Elementary"), /*#__PURE__*/React.createElement("h1", {
    className: _IntroContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].heading
  }, "Hello! ", /*#__PURE__*/React.createElement("span", {
    className: _IntroContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].spanText
  }, "I'm"), /*#__PURE__*/React.createElement("br", null), "Mr. Pierson "), /*#__PURE__*/React.createElement("h3", {
    className: _IntroContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].subHeading
  }, "4th Grade Math & Science")), /*#__PURE__*/React.createElement("div", {
    className: _IntroContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].SpriteContainer
  }, /*#__PURE__*/React.createElement("div", {
    className: _IntroContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].SpriteAnimation
  }, /*#__PURE__*/React.createElement(_SpriteAnimation_SpriteAnimation__WEBPACK_IMPORTED_MODULE_1__["default"], null)), /*#__PURE__*/React.createElement("div", {
    className: _IntroContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].SpriteAnimationMed
  }, /*#__PURE__*/React.createElement(_SpriteAnimation_SpriteAnimationMed__WEBPACK_IMPORTED_MODULE_2__["default"], null)), /*#__PURE__*/React.createElement("div", {
    className: _IntroContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].SpriteAnimationSm
  }, /*#__PURE__*/React.createElement(_SpriteAnimation_SpriteAnimationSm__WEBPACK_IMPORTED_MODULE_3__["default"], null)))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IntroContainer);

/***/ }),

/***/ "./src/components/Login/Login.js":
/*!***************************************!*\
  !*** ./src/components/Login/Login.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _Login_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.module.scss */ "./src/components/Login/Login.module.scss");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");



const LOGIN_URL_USER = '/api/users/login';
const LOGIN_URL_PARENT = '/api/parents/login';
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const Login = _ref => {
  let {
    toggleLoginForm,
    setUser
  } = _ref;
  const navigateTo = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
  const emailRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const studentIdRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const passwordRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const errRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [studentId, setStudentId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [errMsg, setErrMsg] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [success, setSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    emailRef.current.focus();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setErrMsg('');
  }, [email, studentId, password]);
  const handleSubmitUser = async e => {
    e.preventDefault();
    if (!EMAIL_REGEX.test(email)) {
      setErrMsg('Please enter a valid email address.');
      return;
    }
    try {
      const response = await fetch(LOGIN_URL_USER, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        }),
        credentials: 'include'
      });
      if (!response.ok) {
        throw new Error('Login Failed');
      }
      const responseData = await response.json();
      const accessToken = responseData === null || responseData === void 0 ? void 0 : responseData.token;

      // Save the token in localStorage
      localStorage.setItem('token', accessToken);

      // Fetch user data based on email
      const userResponse = await fetch("/api/users?email=".concat(email), {
        method: 'GET',
        headers: {
          'Authorization': "Bearer ".concat(accessToken)
        }
      });
      if (!userResponse.ok) {
        throw new Error('Failed to fetch user data');
      }
      const userArray = await userResponse.json();
      console.log('Fetched user array:', userArray); // Debug log

      if (userArray.length > 0) {
        const user = userArray[0]; // Access the first user object
        console.log('Setting user:', user); // Debug log
        setUser(user);

        // Redirect to the user's profile page
        navigateTo("/".concat(user._id));
        setSuccess(true);
      } else {
        throw new Error('User not found');
      }
    } catch (err) {
      console.error(err); // Debug log
      setErrMsg(err.message || 'Login Failed');
      errRef.current.focus();
    }
  };
  const handleSubmitParent = async e => {
    e.preventDefault();
    if (!studentId) {
      setErrMsg('Please enter a student ID.');
      return;
    }
    try {
      const response = await fetch(LOGIN_URL_PARENT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          studentId,
          password
        }),
        credentials: 'include'
      });
      if (!response.ok) {
        throw new Error('Login Failed');
      }
      const responseData = await response.json();
      const accessToken = responseData === null || responseData === void 0 ? void 0 : responseData.token;

      // Save the token in localStorage
      localStorage.setItem('token', accessToken);

      // Fetch user data based on student ID
      const userResponse = await fetch("/api/parents?studentId=".concat(studentId), {
        method: 'GET',
        headers: {
          'Authorization': "Bearer ".concat(accessToken)
        }
      });
      if (!userResponse.ok) {
        throw new Error('Failed to fetch user data');
      }
      const userArray = await userResponse.json();
      console.log('Fetched user array:', userArray); // Debug log

      if (userArray.length > 0) {
        const user = userArray[0]; // Access the first user object
        console.log('Setting user:', user); // Debug log
        setUser(user);

        // Redirect to the user's profile page
        {
          user.role === "teacher" ? navigateTo("/".concat(user._id)) : navigateTo("/home");
        }
      } else {
        throw new Error('Parent not found');
      }
    } catch (err) {
      console.error(err); // Debug log
      setErrMsg(err.message || 'Login Failed');
      errRef.current.focus();
    }
  };
  const handleSubmit = e => {
    if (email) {
      handleSubmitUser(e);
    } else if (studentId) {
      handleSubmitParent(e);
    } else {
      setErrMsg('Please enter either an email or a student ID.');
      errRef.current.focus();
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: _Login_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].Login
  }, success ? /*#__PURE__*/React.createElement("section", {
    className: _Login_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].section
  }, /*#__PURE__*/React.createElement("h1", null, "You are logged in!"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("a", {
    className: _Login_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].a,
    href: "#"
  }, "Go to Home"))) : /*#__PURE__*/React.createElement("section", {
    className: _Login_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].section
  }, /*#__PURE__*/React.createElement("p", {
    ref: errRef,
    className: errMsg ? _Login_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].errmsg : _Login_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].offscreen,
    "aria-live": "assertive"
  }, errMsg), /*#__PURE__*/React.createElement("h1", null, "Sign In"), /*#__PURE__*/React.createElement("form", {
    className: _Login_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].form,
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement("label", {
    className: _Login_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].label,
    htmlFor: "email"
  }, "(For Teachers) Email:"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    id: "email",
    ref: emailRef,
    autoComplete: "off",
    onChange: e => setEmail(e.target.value),
    value: email,
    className: _Login_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].input,
    disabled: studentId.length > 0 // Disable email if studentId has text
  }), /*#__PURE__*/React.createElement("label", {
    className: _Login_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].label,
    htmlFor: "studentId"
  }, "(For Parents) Student ID:"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "studentId",
    ref: studentIdRef,
    autoComplete: "off",
    onChange: e => setStudentId(e.target.value),
    value: studentId,
    className: _Login_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].input,
    disabled: email.length > 0 // Disable studentId if email has text
  }), /*#__PURE__*/React.createElement("label", {
    className: _Login_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].label,
    htmlFor: "password"
  }, "Password:"), /*#__PURE__*/React.createElement("input", {
    type: "password",
    id: "password",
    ref: passwordRef,
    autoComplete: "off",
    onChange: e => setPassword(e.target.value),
    value: password,
    required: true,
    className: _Login_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].input
  }), /*#__PURE__*/React.createElement("button", {
    className: _Login_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].button
  }, "Sign In")), /*#__PURE__*/React.createElement("p", {
    className: _Login_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].togglePara
  }, "Need an Account?", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: _Login_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].line,
    onClick: toggleLoginForm
  }, /*#__PURE__*/React.createElement("a", {
    className: _Login_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].a,
    href: "#"
  }, "Sign Up")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);

/***/ }),

/***/ "./src/components/MathBanner/MathBanner.js":
/*!*************************************************!*\
  !*** ./src/components/MathBanner/MathBanner.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MathBanner_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MathBanner.module.scss */ "./src/components/MathBanner/MathBanner.module.scss");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function MathBanner() {
  return /*#__PURE__*/React.createElement("div", {
    className: _MathBanner_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].mathBannerContainer
  }, /*#__PURE__*/React.createElement("h1", {
    className: _MathBanner_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].title
  }, "Math"), /*#__PURE__*/React.createElement("h3", {
    className: _MathBanner_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].subTitle
  }, "Workshop"), /*#__PURE__*/React.createElement("div", {
    className: _MathBanner_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].spritesheet
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MathBanner);

/***/ }),

/***/ "./src/components/MathContainer/MathContainer.js":
/*!*******************************************************!*\
  !*** ./src/components/MathContainer/MathContainer.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MathContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MathContainer.module.scss */ "./src/components/MathContainer/MathContainer.module.scss");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function MathContainer() {
  return /*#__PURE__*/React.createElement("div", {
    className: _MathContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].mathContainerMain
  }, /*#__PURE__*/React.createElement("div", {
    className: _MathContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].mathContainerLeft
  }, /*#__PURE__*/React.createElement("div", {
    className: _MathContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].mathCard
  }, /*#__PURE__*/React.createElement("h4", {
    className: _MathContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].mathTitle
  }, "This weeks TEKS"), /*#__PURE__*/React.createElement("ul", {
    className: _MathContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].mathList
  }, /*#__PURE__*/React.createElement("li", {
    className: _MathContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].mathListItem
  }, /*#__PURE__*/React.createElement("span", {
    className: _MathContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].span
  }, "4.2C"), " Compare and order whole numbers to 1,000,000,000 and represent comparisons using the symbols >, <, or =."))), /*#__PURE__*/React.createElement("div", {
    className: _MathContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].mathCard
  }, /*#__PURE__*/React.createElement("h4", {
    className: _MathContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].mathTitle
  }, "Anchor Charts"), /*#__PURE__*/React.createElement("ul", {
    className: _MathContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].mathList
  }, /*#__PURE__*/React.createElement("li", {
    className: _MathContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].mathListItem
  }, /*#__PURE__*/React.createElement("a", {
    target: "_blank",
    href: "https://i.ebayimg.com/images/g/UsMAAOSwlTpj8imL/s-l1200.jpg"
  }, /*#__PURE__*/React.createElement("img", {
    className: _MathContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].img,
    src: "https://i.ebayimg.com/images/g/UsMAAOSwlTpj8imL/s-l1200.jpg"
  })))))), /*#__PURE__*/React.createElement("div", {
    className: _MathContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].mathContainerRight
  }, /*#__PURE__*/React.createElement("div", {
    className: _MathContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].mathCard
  }, /*#__PURE__*/React.createElement("h4", {
    className: _MathContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].mathTitle
  }, "I can..."), /*#__PURE__*/React.createElement("ul", {
    className: _MathContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].mathList
  }, /*#__PURE__*/React.createElement("li", {
    className: _MathContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].mathListItem
  }, /*#__PURE__*/React.createElement("span", {
    className: _MathContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].span
  }, "I can "), "compare and order numbers up to 1,000,000,000 and use the symbols >, < or = to show which numbers are greater, less than, or equal to each other."))), /*#__PURE__*/React.createElement("div", {
    className: _MathContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].mathCard
  }, /*#__PURE__*/React.createElement("h4", {
    className: _MathContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].mathTitle
  }, "Extra Resources"), /*#__PURE__*/React.createElement("ul", {
    className: _MathContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].mathList
  }, /*#__PURE__*/React.createElement("li", {
    className: _MathContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].mathListItem
  }, /*#__PURE__*/React.createElement("a", {
    className: _MathContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].link,
    href: "https://www.khanacademy.org/math/cc-fourth-grade-math/imp-place-value-and-rounding-3/imp-comparing-multi-digit-numbers/v/comparing-whole-numbers"
  }, "Khan Academy - Comparing Multi-Digit Numbers")), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("li", {
    className: _MathContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].mathListItem
  }, /*#__PURE__*/React.createElement("a", {
    className: _MathContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].link,
    href: "https://www.ixl.com/math/grade-4/compare-numbers-up-to-one-billion"
  }, "IXL - Compare Numbers Up to 1 Billion")), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("li", {
    className: _MathContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].mathListItem
  }, /*#__PURE__*/React.createElement("a", {
    className: _MathContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].link,
    href: "https://www.mathplayground.com/place_value_pirates.html"
  }, "Math Playground - Comparing Numbers (Place Value Pirates)")), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("li", {
    className: _MathContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].mathListItem
  }, /*#__PURE__*/React.createElement("a", {
    className: _MathContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].link,
    href: "https://www.education.com/worksheets/comparing-large-numbers/"
  }, "Education.com - Comparing Large Numbers Worksheets")), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("li", {
    className: _MathContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].mathListItem
  }, /*#__PURE__*/React.createElement("a", {
    className: _MathContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].link,
    href: "https://www.splashlearn.com/number-games-for-4th-graders"
  }, "SplashLearn - Compare and Order Numbers"))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MathContainer);

/***/ }),

/***/ "./src/components/NavBar/NavBar.js":
/*!*****************************************!*\
  !*** ./src/components/NavBar/NavBar.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NavBar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavBar.module.scss */ "./src/components/NavBar/NavBar.module.scss");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _utilities_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/users-service */ "./src/utilities/users-service.js");




function NavBar() {
  const [isScrolled, setIsScrolled] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    async function fetchUser() {
      const fetchedUser = await (0,_utilities_users_service__WEBPACK_IMPORTED_MODULE_3__.getUser)();
      setUser(fetchedUser);
    }
    fetchUser();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleLogout = () => {
    (0,_utilities_users_service__WEBPACK_IMPORTED_MODULE_3__.logOut)();
    setUser(null); // Clear the user state
    navigate('/'); // Redirect to the home page or login page
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    className: "".concat(_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].Nav, " ").concat(isScrolled ? _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].hidden : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].image,
    src: "/img/mr_pierson_logo.png",
    alt: "Logo"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].ul
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].listItemContainer,
    to: "/home"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].navItemTop
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].listItem
  }, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].navItemBottom
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].listItem
  }, "Home"))), user && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].listItemContainer,
    to: "/".concat(user._id)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].navItemTop
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].listItem
  }, "Profile")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].navItemBottom
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].listItem
  }, "Profile"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].listItemContainer,
    to: "/about"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].navItemTop
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].listItem
  }, "About Me")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].navItemBottom
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].listItem
  }, "About Me"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].listItemContainer,
    to: "/contact"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].navItemTop
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].listItem
  }, "Contact")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].navItemBottom
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].listItem
  }, "Contact"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].listItemContainer,
    href: "#newsletter"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].navItemTop
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].listItem
  }, "Newsletter")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].navItemBottom
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].listItem
  }, "Newsletter"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].listItemContainer,
    onClick: handleLogout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].navItemTop
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].listItem
  }, "Logout")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].navItemBottom
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].listItem
  }, "Logout")))));
}

/***/ }),

/***/ "./src/components/NavMobile/NavMobile.js":
/*!***********************************************!*\
  !*** ./src/components/NavMobile/NavMobile.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavMobile.module.scss */ "./src/components/NavMobile/NavMobile.module.scss");
/* harmony import */ var _utilities_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/users-service */ "./src/utilities/users-service.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");



 // Adjust the import path if necessary

function NavMobile() {
  const [isRotated, setIsRotated] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [listShown, setListShown] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    async function fetchUser() {
      const fetchedUser = await (0,_utilities_users_service__WEBPACK_IMPORTED_MODULE_3__.getUser)();
      setUser(fetchedUser);
    }
    fetchUser();
  }, []);
  const handleClick = () => {
    setIsRotated(!isRotated);
    setListShown(!listShown);
  };
  const handleLogout = () => {
    (0,_utilities_users_service__WEBPACK_IMPORTED_MODULE_3__.logOut)();
    setUser(null); // Clear the user state
    navigate('/'); // Redirect to the home page or login page
  };
  return /*#__PURE__*/React.createElement("nav", {
    className: _NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].NavMobile
  }, /*#__PURE__*/React.createElement("button", {
    className: _NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].NavBtn,
    onClick: handleClick
  }, /*#__PURE__*/React.createElement("span", {
    className: "".concat(_NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].NavBtnTop, " ").concat(isRotated ? _NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].rotateTop : _NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].revertTop)
  }, "|"), /*#__PURE__*/React.createElement("span", {
    className: "".concat(_NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].NavBtnMid, " ").concat(isRotated ? _NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].fadeOut : _NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].fadeIn)
  }, "|"), /*#__PURE__*/React.createElement("span", {
    className: "".concat(_NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].NavBtnBottom, " ").concat(isRotated ? _NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].rotateBottom : _NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].revertBottom)
  }, "|")), /*#__PURE__*/React.createElement("div", {
    className: "".concat(_NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].NavContainer, " ").concat(listShown ? _NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].expandContainer : _NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].collapseContainer)
  }, /*#__PURE__*/React.createElement("ul", {
    className: _NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].ul
  }, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    className: _NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].Link,
    to: "/home"
  }, /*#__PURE__*/React.createElement("li", {
    className: _NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].li
  }, "Home")), user && /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    className: _NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].Link,
    to: "/".concat(user._id)
  }, /*#__PURE__*/React.createElement("li", {
    className: _NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].li
  }, "Profile")), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    className: _NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].Link,
    to: "/about"
  }, /*#__PURE__*/React.createElement("li", {
    className: _NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].li
  }, "About Me")), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    className: _NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].Link,
    to: "/contact"
  }, /*#__PURE__*/React.createElement("li", {
    className: _NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].li
  }, "Contact")), /*#__PURE__*/React.createElement("a", {
    className: _NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].Link,
    onClick: handleLogout
  }, /*#__PURE__*/React.createElement("li", {
    className: _NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].li
  }, "Logout")))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavMobile);

/***/ }),

/***/ "./src/components/NewsLetter/NewsLetter.js":
/*!*************************************************!*\
  !*** ./src/components/NewsLetter/NewsLetter.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NewsLetter_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewsLetter.module.scss */ "./src/components/NewsLetter/NewsLetter.module.scss");


function NewsLetter() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "newsletter",
    className: _NewsLetter_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].NewsLetterContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _NewsLetter_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].mainContent
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: _NewsLetter_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].heading
  }, "News ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: _NewsLetter_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].spanText
  }, "Letter")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: _NewsLetter_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].subHeading
  }, "What's happening on the Ranch?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _NewsLetter_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].news
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _NewsLetter_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].upcomingEvents
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: _NewsLetter_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].title
  }, "Upcoming Events"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: _NewsLetter_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].event
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: _NewsLetter_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].date
  }, "August 5th:"), " Meet the Teacher Night"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: _NewsLetter_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].event
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: _NewsLetter_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].date
  }, "August 7th:"), " First Day of School"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: _NewsLetter_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].event
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: _NewsLetter_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].date
  }, "August 30th:"), " First Half Day, dismissal at 12 pm"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: _NewsLetter_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].event
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: _NewsLetter_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].date
  }, "September 2nd:"), " Labor Day (No School)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: _NewsLetter_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].event
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: _NewsLetter_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].date
  }, "September 20th:"), " Student Half Day (Released at Noon)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _NewsLetter_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].reminders
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: _NewsLetter_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].title
  }, "Reminders"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: _NewsLetter_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].welcome
  }, "Welcome Back!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: _NewsLetter_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].header
  }, "Some important things to do to prepare for a successful school year...."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: _NewsLetter_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].reminder
  }, "1. Complete the room parent interest form"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: _NewsLetter_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].reminder
  }, "2. Complete the transportation form "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: _NewsLetter_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].reminder
  }, "3. Purchase and organize student school supplies"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: _NewsLetter_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].reminder
  }, "4. Ensure you are receiving Mr. Pierson\u2019s emails (tpierson@dentonisd.org)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: _NewsLetter_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].headerPara
  }, "Stable Spirit"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: _NewsLetter_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].reminderPara
  }, "Every student at SRE belongs to a stable. Stables are very important at SRE because they provide students with a community outside of their classroom and grade level. Every Friday we dress up in our stable colors and celebrate the spirit of The Ranch! Every Friday we will attend either stable buddies, stable huddles, or Celebrate Sandbrock which provides students time to be with their spirit group!"))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewsLetter);

/***/ }),

/***/ "./src/components/Register/Register.js":
/*!*********************************************!*\
  !*** ./src/components/Register/Register.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.mjs");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Register.module.scss */ "./src/components/Register/Register.module.scss");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");



 // Import your CSS module

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const TEACHER_REGISTER_URL = '/api/users/';
const PARENT_REGISTER_URL = '/api/parents/';
const Register = _ref => {
  let {
    toggleLoginForm,
    setUser,
    setSuccessMsg
  } = _ref;
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useNavigate)();
  const firstNameRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const lastNameRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const emailRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const passwordRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const confirmPasswordRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const roleRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const studentIdRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const studentIdsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(); // Ref for student IDs input
  const errRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const [firstName, setFirstName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [lastName, setLastName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [confirmPassword, setConfirmPassword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [role, setRole] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('parent');
  const [studentId, setStudentId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [studentIds, setStudentIds] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''); // State for student IDs

  // New state fields
  const [studentFirstName, setStudentFirstName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [studentLastName, setStudentLastName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [guardOneFirstName, setGuardOneFirstName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [guardOneLastName, setGuardOneLastName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [guardOneEmail, setGuardOneEmail] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [guardOnePhone, setGuardOnePhone] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [guardTwoFirstName, setGuardTwoFirstName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [guardTwoLastName, setGuardTwoLastName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [guardTwoEmail, setGuardTwoEmail] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [guardTwoPhone, setGuardTwoPhone] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [roomParent, setRoomParent] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [transportation, setTransportation] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('Car');
  const [carTagNumber, setCarTagNumber] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [likes, setLikes] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [dislikes, setDislikes] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [allergies, setAllergies] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [notes, setNotes] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [validFirstName, setValidFirstName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [validLastName, setValidLastName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [validEmail, setValidEmail] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [validPassword, setValidPassword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [validConfirmPassword, setValidConfirmPassword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [validStudentId, setValidStudentId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [validStudentFirstName, setValidStudentFirstName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [validStudentLastName, setValidStudentLastName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [validGuardOneFirstName, setValidGuardOneFirstName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [validGuardOneLastName, setValidGuardOneLastName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [validGuardOneEmail, setValidGuardOneEmail] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [validGuardOnePhone, setValidGuardOnePhone] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [validGuardTwoFirstName, setValidGuardTwoFirstName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [validGuardTwoLastName, setValidGuardTwoLastName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [validGuardTwoEmail, setValidGuardTwoEmail] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [validGuardTwoPhone, setValidGuardTwoPhone] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [validCarTagNumber, setValidCarTagNumber] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [validLikes, setValidLikes] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [validDislikes, setValidDislikes] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [validAllergies, setValidAllergies] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [validNotes, setValidNotes] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [firstNameFocus, setFirstNameFocus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [lastNameFocus, setLastNameFocus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [emailFocus, setEmailFocus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [passwordFocus, setPasswordFocus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [confirmPasswordFocus, setConfirmPasswordFocus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [roleFocus, setRoleFocus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [studentIdFocus, setStudentIdFocus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [studentIdsFocus, setStudentIdsFocus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false); // Focus state for student IDs

  const [studentFirstNameFocus, setStudentFirstNameFocus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [studentLastNameFocus, setStudentLastNameFocus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [guardOneFirstNameFocus, setGuardOneFirstNameFocus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [guardOneLastNameFocus, setGuardOneLastNameFocus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [guardOneEmailFocus, setGuardOneEmailFocus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [guardOnePhoneFocus, setGuardOnePhoneFocus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [guardTwoFirstNameFocus, setGuardTwoFirstNameFocus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [guardTwoLastNameFocus, setGuardTwoLastNameFocus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [guardTwoEmailFocus, setGuardTwoEmailFocus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [guardTwoPhoneFocus, setGuardTwoPhoneFocus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [carTagNumberFocus, setCarTagNumberFocus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [likesFocus, setLikesFocus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [dislikesFocus, setDislikesFocus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [allergiesFocus, setAllergiesFocus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [notesFocus, setNotesFocus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [errMsg, setErrMsg] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [success, setSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    firstNameRef.current.focus();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setValidFirstName(firstName.trim() !== '');
  }, [firstName]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setValidLastName(lastName.trim() !== '');
  }, [lastName]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setValidStudentId(studentId.trim() !== '');
  }, [studentId]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setValidPassword(PWD_REGEX.test(password));
  }, [password]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setValidConfirmPassword(confirmPassword === password);
  }, [confirmPassword, password]);

  // Add validation for new inputs
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setValidStudentFirstName(studentFirstName.trim() !== '');
  }, [studentFirstName]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setValidStudentLastName(studentLastName.trim() !== '');
  }, [studentLastName]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setValidGuardOneFirstName(guardOneFirstName.trim() !== '');
  }, [guardOneFirstName]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setValidGuardOneLastName(guardOneLastName.trim() !== '');
  }, [guardOneLastName]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setValidGuardOneEmail(EMAIL_REGEX.test(guardOneEmail));
  }, [guardOneEmail]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setValidGuardOnePhone(guardOnePhone.trim() !== '');
  }, [guardOnePhone]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setValidGuardTwoFirstName(guardTwoFirstName.trim() !== '');
  }, [guardTwoFirstName]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setValidGuardTwoLastName(guardTwoLastName.trim() !== '');
  }, [guardTwoLastName]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setValidGuardTwoEmail(EMAIL_REGEX.test(guardTwoEmail));
  }, [guardTwoEmail]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setValidGuardTwoPhone(guardTwoPhone.trim() !== '');
  }, [guardTwoPhone]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setValidCarTagNumber(carTagNumber.trim() !== '');
  }, [carTagNumber]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setValidLikes(likes.trim() !== '');
  }, [likes]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setValidDislikes(dislikes.trim() !== '');
  }, [dislikes]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setValidAllergies(allergies.trim() !== '');
  }, [allergies]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setValidNotes(notes.trim() !== '');
  }, [notes]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setErrMsg('');
  }, [firstName, lastName, email, password, confirmPassword, role, studentIds, studentFirstName, studentLastName, guardOneFirstName, guardOneLastName, guardOneEmail, guardOnePhone, guardTwoFirstName, guardTwoLastName, guardTwoEmail, guardTwoPhone, carTagNumber, likes, dislikes, allergies, notes]);
  const handleSubmit = async e => {
    e.preventDefault();

    // Adjust validation based on the role
    const isValid = role === 'teacher' ? validFirstName && validLastName && validEmail && validPassword && validConfirmPassword : validStudentId && validPassword && validConfirmPassword;
    if (!isValid) {
      setErrMsg("Invalid Entry");
      return;
    }

    // Determine the correct URL based on the selected role
    const url = role === 'teacher' ? TEACHER_REGISTER_URL : PARENT_REGISTER_URL;
    const body = role === 'teacher' ? {
      firstName,
      lastName,
      email,
      password,
      role,
      studentIds: studentIds.split(',').map(id => id.trim()) // Process student IDs
    } : {
      studentId,
      password,
      role,
      studentFirstName,
      studentLastName,
      guardOneFirstName,
      guardOneLastName,
      guardOneEmail,
      guardOnePhone,
      guardTwoFirstName,
      guardTwoLastName,
      guardTwoEmail,
      guardTwoPhone,
      roomParent,
      transportation,
      carTagNumber,
      likes,
      dislikes,
      allergies,
      notes
    };
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });
      if (!response.ok) {
        throw new Error('Registration Failed');
      }
      const responseData = await response.json();
      localStorage.setItem('token', responseData.token);
      const userData = {
        firstName: role === 'teacher' ? firstName : '',
        lastName: role === 'teacher' ? lastName : '',
        email: role === 'teacher' ? email : '',
        role
      };
      setUser(userData);

      // Reset the form fields
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setRole('parent');
      setStudentIds('');
      setStudentId('');
      setSuccessMsg('Registration Successful');
      toggleLoginForm();
    } catch (err) {
      setErrMsg(err.message || 'Registration Failed');
      errRef.current.focus();
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].Register
  }, /*#__PURE__*/React.createElement(React.Fragment, null, success ? /*#__PURE__*/React.createElement("section", {
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].section
  }, /*#__PURE__*/React.createElement("h1", null, "Success!"), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("a", {
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].a,
    href: "#",
    onClick: toggleLoginForm
  }, "Sign In"))) : /*#__PURE__*/React.createElement("section", {
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].section
  }, /*#__PURE__*/React.createElement("p", {
    ref: errRef,
    className: errMsg ? _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].errmsg : _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].offscreen,
    "aria-live": "assertive"
  }, errMsg), /*#__PURE__*/React.createElement("h1", null, "Register"), /*#__PURE__*/React.createElement("form", {
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].form,
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement("div", {
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].roleContainer
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "role",
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].label
  }, "Role:", /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faCheck,
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].valid
  })), /*#__PURE__*/React.createElement("select", {
    id: "role",
    ref: roleRef,
    value: role,
    className: "".concat(_Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].select, " ").concat(_Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].input),
    onFocus: () => setRoleFocus(true),
    onBlur: () => setRoleFocus(false),
    onChange: e => setRole(e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: "parent"
  }, "Parent"), /*#__PURE__*/React.createElement("option", {
    value: "teacher"
  }, "Teacher")), /*#__PURE__*/React.createElement("p", {
    id: "roleNote",
    className: roleFocus ? _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].instructions : _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].offscreen
  }, /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faInfoCircle
  }), "Select your role.")), role === 'parent' && /*#__PURE__*/React.createElement("div", {
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].studentIdContainer
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "studentId",
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].label
  }, "Student ID:"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "studentId",
    ref: studentIdRef,
    onChange: e => setStudentId(e.target.value),
    value: studentId,
    "aria-invalid": validStudentId ? "false" : "true",
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].input,
    onFocus: () => setStudentIdFocus(true),
    onBlur: () => setStudentIdFocus(false)
  }), /*#__PURE__*/React.createElement("p", {
    id: "studentIdNote",
    className: studentIdFocus && !validStudentId ? _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].instructions : _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].offscreen
  }, /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faInfoCircle
  }), "Enter student ID.")), /*#__PURE__*/React.createElement("div", {
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].nameContainer
  }, /*#__PURE__*/React.createElement("div", {
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].fName
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "firstName",
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].label
  }, "First Name:", /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faCheck,
    className: validFirstName ? _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].valid : _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].hide
  }), /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faTimes,
    className: validFirstName || !firstName ? _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].hide : _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].invalid
  })), /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "firstName",
    ref: firstNameRef,
    autoComplete: "off",
    onChange: e => setFirstName(e.target.value),
    value: firstName,
    required: true,
    "aria-invalid": validFirstName ? "false" : "true",
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].input,
    onFocus: () => setFirstNameFocus(true),
    onBlur: () => setFirstNameFocus(false),
    disabled: role === 'parent'
  })), /*#__PURE__*/React.createElement("div", {
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].lName
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "lastName",
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].label
  }, "Last Name:", /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faCheck,
    className: validLastName ? _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].valid : _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].hide
  }), /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faTimes,
    className: validLastName || !lastName ? _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].hide : _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].invalid
  })), /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "lastName",
    ref: lastNameRef,
    autoComplete: "off",
    onChange: e => setLastName(e.target.value),
    value: lastName,
    required: true,
    "aria-invalid": validLastName ? "false" : "true",
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].input,
    onFocus: () => setLastNameFocus(true),
    onBlur: () => setLastNameFocus(false),
    disabled: role === 'parent' // Disable if role is 'parent'
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    id: "firstNameNote",
    className: firstNameFocus && !validFirstName ? _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].instructions : _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].offscreen
  }, /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faInfoCircle
  }), "Please enter your first name."), /*#__PURE__*/React.createElement("p", {
    id: "lastNameNote",
    className: lastNameFocus && !validLastName ? _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].instructions : _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].offscreen
  }, /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faInfoCircle
  }), "Please enter your last name.")), role === 'teacher' && /*#__PURE__*/React.createElement("div", {
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].emailContainer
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "email",
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].label
  }, "Email:", /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faCheck,
    className: validEmail ? _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].valid : _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].hide
  }), /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faTimes,
    className: validEmail || !email ? _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].hide : _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].invalid
  })), /*#__PURE__*/React.createElement("input", {
    type: "email",
    id: "email",
    ref: emailRef,
    autoComplete: "off",
    onChange: e => setEmail(e.target.value),
    value: email,
    required: true,
    "aria-invalid": validEmail ? "false" : "true",
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].input,
    onFocus: () => setEmailFocus(true),
    onBlur: () => setEmailFocus(false),
    disabled: role === 'parent' // Disable if role is 'parent'
  }), /*#__PURE__*/React.createElement("p", {
    id: "emailNote",
    className: emailFocus && !validEmail ? _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].instructions : _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].offscreen
  }, /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faInfoCircle
  }), "Please enter a valid email address.")), role === 'teacher' && /*#__PURE__*/React.createElement("div", {
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].studentIdsContainer
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "studentIds",
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].label
  }, "Student IDs:"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "studentIds",
    ref: studentIdsRef,
    onChange: e => setStudentIds(e.target.value),
    value: studentIds,
    "aria-invalid": validStudentId ? "false" : "true",
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].input,
    onFocus: () => setStudentIdsFocus(true),
    onBlur: () => setStudentIdsFocus(false)
  }), /*#__PURE__*/React.createElement("p", {
    id: "studentIdsNote",
    className: studentIdsFocus && !validStudentId ? _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].instructions : _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].offscreen
  }, /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faInfoCircle
  }), "Enter comma-separated student IDs.")), role === 'parent' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].nameContainer
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "studentFirstName",
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].label
  }, "Student First Name:", /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "studentFirstName",
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].input,
    onChange: e => setStudentFirstName(e.target.value),
    onFocus: () => setStudentFirstNameFocus(true),
    onBlur: () => setStudentFirstNameFocus(false),
    value: studentFirstName
  }), studentFirstNameFocus && !validStudentFirstName && /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faInfoCircle
  })), /*#__PURE__*/React.createElement("label", {
    htmlFor: "studentLastName",
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].label
  }, "Student Last Name:", /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "studentLastName",
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].input,
    onChange: e => setStudentLastName(e.target.value),
    onFocus: () => setStudentLastNameFocus(true),
    onBlur: () => setStudentLastNameFocus(false),
    value: studentLastName
  }), studentLastNameFocus && !validStudentLastName && /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faInfoCircle
  }))), /*#__PURE__*/React.createElement("div", {
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].nameContainer
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "guardOneFirstName",
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].label
  }, "Guardian One First Name:", /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "guardOneFirstName",
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].input,
    onChange: e => setGuardOneFirstName(e.target.value),
    onFocus: () => setGuardOneFirstNameFocus(true),
    onBlur: () => setGuardOneFirstNameFocus(false),
    value: guardOneFirstName
  }), guardOneFirstNameFocus && !validGuardOneFirstName && /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faInfoCircle
  })), /*#__PURE__*/React.createElement("label", {
    htmlFor: "guardOneLastName",
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].label
  }, "Guardian One Last Name:", /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "guardOneLastName",
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].input,
    onChange: e => setGuardOneLastName(e.target.value),
    onFocus: () => setGuardOneLastNameFocus(true),
    onBlur: () => setGuardOneLastNameFocus(false),
    value: guardOneLastName
  }), guardOneLastNameFocus && !validGuardOneLastName && /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faInfoCircle
  }))), /*#__PURE__*/React.createElement("div", {
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].nameContainer
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "guardOneEmail",
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].label
  }, "Guardian One Email:", /*#__PURE__*/React.createElement("input", {
    type: "email",
    id: "guardOneEmail",
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].input,
    onChange: e => setGuardOneEmail(e.target.value),
    onFocus: () => setGuardOneEmailFocus(true),
    onBlur: () => setGuardOneEmailFocus(false),
    value: guardOneEmail
  }), guardOneEmailFocus && !validGuardOneEmail && /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faInfoCircle
  })), /*#__PURE__*/React.createElement("label", {
    htmlFor: "guardOnePhone",
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].label
  }, "Guardian One Phone:", /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "guardOnePhone",
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].input,
    onChange: e => setGuardOnePhone(e.target.value),
    onFocus: () => setGuardOnePhoneFocus(true),
    onBlur: () => setGuardOnePhoneFocus(false),
    value: guardOnePhone
  }), guardOnePhoneFocus && !validGuardOnePhone && /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faInfoCircle
  }))), /*#__PURE__*/React.createElement("div", {
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].nameContainer
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "guardTwoFirstName",
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].label
  }, "Guardian Two First Name (optional):", /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "guardTwoFirstName",
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].input,
    onChange: e => setGuardTwoFirstName(e.target.value),
    onFocus: () => setGuardTwoFirstNameFocus(true),
    onBlur: () => setGuardTwoFirstNameFocus(false),
    value: guardTwoFirstName
  }), guardTwoFirstNameFocus && !validGuardTwoFirstName && /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faInfoCircle
  })), /*#__PURE__*/React.createElement("label", {
    htmlFor: "guardTwoLastName",
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].label
  }, "Guardian Two Last Name (optional):", /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "guardTwoLastName",
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].input,
    onChange: e => setGuardTwoLastName(e.target.value),
    onFocus: () => setGuardTwoLastNameFocus(true),
    onBlur: () => setGuardTwoLastNameFocus(false),
    value: guardTwoLastName
  }), guardTwoLastNameFocus && !validGuardTwoLastName && /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faInfoCircle
  }))), /*#__PURE__*/React.createElement("div", {
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].nameContainer
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "guardTwoEmail",
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].label
  }, "Guardian Two Email (optional):", /*#__PURE__*/React.createElement("input", {
    type: "email",
    id: "guardTwoEmail",
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].input,
    onChange: e => setGuardTwoEmail(e.target.value),
    onFocus: () => setGuardTwoEmailFocus(true),
    onBlur: () => setGuardTwoEmailFocus(false),
    value: guardTwoEmail
  }), guardTwoEmailFocus && !validGuardTwoEmail && /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faInfoCircle
  })), /*#__PURE__*/React.createElement("label", {
    htmlFor: "guardTwoPhone",
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].label
  }, "Guardian Two Phone (optional):", /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "guardTwoPhone",
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].input,
    onChange: e => setGuardTwoPhone(e.target.value),
    onFocus: () => setGuardTwoPhoneFocus(true),
    onBlur: () => setGuardTwoPhoneFocus(false),
    value: guardTwoPhone
  }), guardTwoPhoneFocus && !validGuardTwoPhone && /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faInfoCircle
  }))), /*#__PURE__*/React.createElement("div", {
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].nameContainer
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "transportation",
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].label
  }, "Transportation:", /*#__PURE__*/React.createElement("select", {
    id: "transportation",
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].input,
    onChange: e => setTransportation(e.target.value),
    value: transportation
  }, /*#__PURE__*/React.createElement("option", {
    value: "car"
  }, "Car"), /*#__PURE__*/React.createElement("option", {
    value: "bus"
  }, "Bus"), /*#__PURE__*/React.createElement("option", {
    value: "walker home"
  }, "Walker Home"), /*#__PURE__*/React.createElement("option", {
    value: "walker go"
  }, "Walker Go"), /*#__PURE__*/React.createElement("option", {
    value: "right at school"
  }, "Right At School"))), /*#__PURE__*/React.createElement("label", {
    htmlFor: "carTagNumber",
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].label
  }, "Car Tag Number (N/A if Unknown):", /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "carTagNumber",
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].input,
    onChange: e => setCarTagNumber(e.target.value),
    onFocus: () => setCarTagNumberFocus(true),
    onBlur: () => setCarTagNumberFocus(false),
    value: carTagNumber
  }), carTagNumberFocus && !validCarTagNumber && /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faInfoCircle
  }))), /*#__PURE__*/React.createElement("label", {
    htmlFor: "roomParent",
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].label
  }, "Room Parent:", /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    id: "roomParent",
    onChange: () => setRoomParent(!roomParent),
    checked: roomParent
  })), /*#__PURE__*/React.createElement("div", {
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].nameContainer
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "likes",
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].label
  }, "Student Likes (Optional):", /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "likes",
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].input,
    onChange: e => setLikes(e.target.value),
    onFocus: () => setLikesFocus(true),
    onBlur: () => setLikesFocus(false),
    value: likes
  }), likesFocus && !validLikes && /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faInfoCircle
  })), /*#__PURE__*/React.createElement("label", {
    htmlFor: "dislikes",
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].label
  }, "Student Dislikes (Optional):", /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "dislikes",
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].input,
    onChange: e => setDislikes(e.target.value),
    onFocus: () => setDislikesFocus(true),
    onBlur: () => setDislikesFocus(false),
    value: dislikes
  }), dislikesFocus && !validDislikes && /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faInfoCircle
  }))), /*#__PURE__*/React.createElement("div", {
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].nameContainer
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "allergies",
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].label
  }, "Student Allergies (Optional):", /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "allergies",
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].input,
    onChange: e => setAllergies(e.target.value),
    onFocus: () => setAllergiesFocus(true),
    onBlur: () => setAllergiesFocus(false),
    value: allergies
  }), allergiesFocus && !validAllergies && /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faInfoCircle
  })), /*#__PURE__*/React.createElement("label", {
    htmlFor: "notes",
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].label
  }, "Anything else you'd like me to know (Optional):", /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "notes",
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].input,
    onChange: e => setNotes(e.target.value),
    onFocus: () => setNotesFocus(true),
    onBlur: () => setNotesFocus(false),
    value: notes
  }), notesFocus && !validNotes && /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faInfoCircle
  })))), /*#__PURE__*/React.createElement("div", {
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].passwordContainer
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "password",
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].label
  }, "Password:", /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faCheck,
    className: validPassword ? _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].valid : _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].hide
  }), /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faTimes,
    className: validPassword || !password ? _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].hide : _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].invalid
  })), /*#__PURE__*/React.createElement("input", {
    type: "password",
    id: "password",
    ref: passwordRef,
    onChange: e => setPassword(e.target.value),
    value: password,
    required: true,
    "aria-invalid": validPassword ? "false" : "true",
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].input,
    onFocus: () => setPasswordFocus(true),
    onBlur: () => setPasswordFocus(false)
  }), /*#__PURE__*/React.createElement("p", {
    id: "passwordNote",
    className: passwordFocus && !validPassword ? _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].instructions : _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].offscreen
  }, /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faInfoCircle
  }), "Password must be 8-24 characters long and include uppercase, lowercase, a number, and a special character.")), /*#__PURE__*/React.createElement("div", {
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].confirmPasswordContainer
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "confirmPassword",
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].label
  }, "Confirm Password:", /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faCheck,
    className: validConfirmPassword ? _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].valid : _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].hide
  }), /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faTimes,
    className: validConfirmPassword || !confirmPassword ? _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].hide : _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].invalid
  })), /*#__PURE__*/React.createElement("input", {
    type: "password",
    id: "confirmPassword",
    ref: confirmPasswordRef,
    onChange: e => setConfirmPassword(e.target.value),
    value: confirmPassword,
    required: true,
    "aria-invalid": validConfirmPassword ? "false" : "true",
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].input,
    onFocus: () => setConfirmPasswordFocus(true),
    onBlur: () => setConfirmPasswordFocus(false)
  }), /*#__PURE__*/React.createElement("p", {
    id: "confirmPasswordNote",
    className: confirmPasswordFocus && !validConfirmPassword ? _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].instructions : _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].offscreen
  }, /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faInfoCircle
  }), "Passwords must match.")), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].submitButton,
    disabled: role === 'parent' ? !validStudentId || !validPassword || !validConfirmPassword || !validStudentFirstName || !validStudentLastName || !validGuardOneFirstName || !validGuardOneLastName || !validGuardOneEmail || !validGuardOnePhone || !validCarTagNumber : !validFirstName || !validLastName || !validEmail || !validPassword || !validConfirmPassword
  }, "Register")), /*#__PURE__*/React.createElement("p", null, "Already registered?", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].line
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: toggleLoginForm
  }, "Sign In"))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Register);

/***/ }),

/***/ "./src/components/ScienceBanner/ScienceBanner.js":
/*!*******************************************************!*\
  !*** ./src/components/ScienceBanner/ScienceBanner.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ScienceBanner_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScienceBanner.module.scss */ "./src/components/ScienceBanner/ScienceBanner.module.scss");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function ScienceBanner() {
  return /*#__PURE__*/React.createElement("div", {
    className: _ScienceBanner_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].scienceBannerContainer
  }, /*#__PURE__*/React.createElement("h1", {
    className: _ScienceBanner_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].scienceBanner
  }, "Science Workshop"));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScienceBanner);

/***/ }),

/***/ "./src/components/ScienceContainer/ScienceContainer.js":
/*!*************************************************************!*\
  !*** ./src/components/ScienceContainer/ScienceContainer.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ScienceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScienceContainer.module.scss */ "./src/components/ScienceContainer/ScienceContainer.module.scss");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function ScienceContainer() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: _ScienceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].scienceContainerMain
  }, /*#__PURE__*/React.createElement("div", {
    className: _ScienceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].scienceContainerLeft
  }, /*#__PURE__*/React.createElement("div", {
    className: _ScienceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].scienceCard
  }, /*#__PURE__*/React.createElement("h4", {
    className: _ScienceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].scienceTitle
  }, "This weeks TEKS"), /*#__PURE__*/React.createElement("ul", {
    className: _ScienceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].scienceList
  }, /*#__PURE__*/React.createElement("li", {
    className: _ScienceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].scienceListItem
  }, /*#__PURE__*/React.createElement("span", {
    className: _ScienceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].span
  }), " "), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("li", {
    className: _ScienceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].scienceListItem
  }, /*#__PURE__*/React.createElement("span", {
    className: _ScienceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].span
  }), " "))), /*#__PURE__*/React.createElement("div", {
    className: _ScienceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].scienceCard
  }, /*#__PURE__*/React.createElement("h4", {
    className: _ScienceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].scienceTitle
  }, "Anchor Charts"), /*#__PURE__*/React.createElement("ul", {
    className: _ScienceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].scienceList
  }, /*#__PURE__*/React.createElement("li", {
    className: _ScienceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].scienceListItem
  }, /*#__PURE__*/React.createElement("a", {
    target: "_blank",
    href: "https://i.pinimg.com/474x/a4/11/2a/a4112a9d78d823f810345a3ea09bff1b.jpg"
  }, /*#__PURE__*/React.createElement("img", {
    className: _ScienceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].img,
    src: "https://i.pinimg.com/474x/a4/11/2a/a4112a9d78d823f810345a3ea09bff1b.jpg"
  })))))), /*#__PURE__*/React.createElement("div", {
    className: _ScienceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].scienceContainerRight
  }, /*#__PURE__*/React.createElement("div", {
    className: _ScienceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].scienceCard
  }, /*#__PURE__*/React.createElement("h4", {
    className: _ScienceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].scienceTitle
  }, "I can..."), /*#__PURE__*/React.createElement("ul", {
    className: _ScienceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].scienceList
  }, /*#__PURE__*/React.createElement("li", {
    className: _ScienceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].scienceListItem
  }, /*#__PURE__*/React.createElement("span", {
    className: _ScienceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].span
  }, "I can "), "explain and demonstrate how to stay safe and respectful while conducting experiments in the science classroom."))), /*#__PURE__*/React.createElement("div", {
    className: _ScienceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].scienceCard
  }, /*#__PURE__*/React.createElement("h4", {
    className: _ScienceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].scienceTitle
  }, "Extra Resources"), /*#__PURE__*/React.createElement("ul", {
    className: _ScienceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].scienceList
  }, /*#__PURE__*/React.createElement("li", {
    className: _ScienceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].scienceListItem
  }, /*#__PURE__*/React.createElement("a", {
    className: _ScienceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].link,
    href: "https://climatekids.nasa.gov/safe-scientist/"
  }, "NASA's Climate Kids - Be a Safe Scientist")), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("li", {
    className: _ScienceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].scienceListItem
  }, /*#__PURE__*/React.createElement("a", {
    className: _ScienceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].link,
    href: "https://www.brainpop.com/science/scientificinquiry/sciencesafety/"
  }, "BrainPOP - Science Safety")), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("li", {
    className: _ScienceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].scienceListItem
  }, /*#__PURE__*/React.createElement("a", {
    className: _ScienceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].link,
    href: "https://www.scholastic.com/teachers/articles/teaching-content/science-lab-safety-rules/"
  }, "Scholastic - Science Lab Safety Rules")), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("li", {
    className: _ScienceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].scienceListItem
  }, /*#__PURE__*/React.createElement("a", {
    className: _ScienceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].link,
    href: "https://www.sciencebuddies.org/science-fair-projects/science-safety"
  }, "Science Buddies - Science Safety Guide")), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("li", {
    className: _ScienceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].scienceListItem
  }, /*#__PURE__*/React.createElement("a", {
    className: _ScienceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].link,
    href: "https://www.acs.org/content/acs/en/education/resources/k-8/science-safety.html"
  }, "American Chemical Society - Safety in the Elementary Science Classroom"))))), /*#__PURE__*/React.createElement("div", {
    className: _ScienceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].spritesheet
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScienceContainer);

/***/ }),

/***/ "./src/components/SpriteAnimation/SpriteAnimation.js":
/*!***********************************************************!*\
  !*** ./src/components/SpriteAnimation/SpriteAnimation.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SpriteAnimation_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpriteAnimation.module.scss */ "./src/components/SpriteAnimation/SpriteAnimation.module.scss");


function SpriteAnimation() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _SpriteAnimation_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].spritesheet
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SpriteAnimation);

/***/ }),

/***/ "./src/components/SpriteAnimation/SpriteAnimationMed.js":
/*!**************************************************************!*\
  !*** ./src/components/SpriteAnimation/SpriteAnimationMed.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SpriteAnimationMed_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpriteAnimationMed.module.scss */ "./src/components/SpriteAnimation/SpriteAnimationMed.module.scss");


function SpriteAnimationMed() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _SpriteAnimationMed_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].spritesheet
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SpriteAnimationMed);

/***/ }),

/***/ "./src/components/SpriteAnimation/SpriteAnimationSm.js":
/*!*************************************************************!*\
  !*** ./src/components/SpriteAnimation/SpriteAnimationSm.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SpriteAnimationSm_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpriteAnimationSm.module.scss */ "./src/components/SpriteAnimation/SpriteAnimationSm.module.scss");


function SpriteAnimationSm() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _SpriteAnimationSm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].spritesheet
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SpriteAnimationSm);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.module.scss */ "./src/index.module.scss");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");





const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(document.getElementById("app"));
root.render( /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode, null, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.BrowserRouter, null, /*#__PURE__*/React.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], null))));

/***/ }),

/***/ "./src/pages/AboutPage/AboutPage.js":
/*!******************************************!*\
  !*** ./src/pages/AboutPage/AboutPage.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/NavBar/NavBar */ "./src/components/NavBar/NavBar.js");
/* harmony import */ var _components_NavMobile_NavMobile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/NavMobile/NavMobile */ "./src/components/NavMobile/NavMobile.js");
/* harmony import */ var _AboutPage_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AboutPage.module.scss */ "./src/pages/AboutPage/AboutPage.module.scss");





function AboutPage() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_NavMobile_NavMobile__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _AboutPage_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].AboutPage
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _AboutPage_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].textContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: _AboutPage_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].header
  }, "Who I am..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: _AboutPage_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].bio
  }, "Welcome to ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: _AboutPage_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].highlight
  }, "4th Grade!"), " This year I will be teaching math and science. I am beyond thrilled to be a Champion and I cannot wait to work with your child. It is going to be a great year!", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "I grew up in the DFW area along with my four siblings. My family consists of my wife, Jennifer, my son, Dean, and our dog, Ringo. In my spare time I enjoy reading comics, developing web applications, playing instruments, spending time with family and friends, and watching movies at home.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "Prior to beginning my college education, I spent five years as a Marine Corps infantryman stationed in Oahu, Hawaii. I later graduated from the University of North Texas with a Bachelor of Science degree in Interdisciplinary Studies and from Texas A&M University with a Master's degree in Education Administration and Human Development. More recently, I graduated as Valedictorian from General Assembly, where I completed a software engineering course. I have always had a love for learning and hope to pass that passion on to my students.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "I am dedicated to creating a classroom community that allows us to communicate, explore, and grow together.  I strongly believe in the power of relationships, the power of YET, and meeting each individual child where they are.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: _AboutPage_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].image,
    src: "/img/headshot.png"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: _AboutPage_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].qr,
    src: "/img/qr-code.png"
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutPage);

/***/ }),

/***/ "./src/pages/AuthPage/AuthPage.js":
/*!****************************************!*\
  !*** ./src/pages/AuthPage/AuthPage.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AuthPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AuthPage_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuthPage.module.scss */ "./src/pages/AuthPage/AuthPage.module.scss");
/* harmony import */ var _components_Login_Login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Login/Login */ "./src/components/Login/Login.js");
/* harmony import */ var _components_Register_Register__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Register/Register */ "./src/components/Register/Register.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");




function AuthPage(_ref) {
  let {
    setUser
  } = _ref;
  const [showLogin, setShowLogin] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [successMsg, setSuccessMsg] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const toggleLoginForm = () => {
    setShowLogin(!showLogin);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    className: _AuthPage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].SuccessMsg
  }, successMsg), /*#__PURE__*/React.createElement("main", {
    className: _AuthPage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].AuthPage
  }, showLogin ? /*#__PURE__*/React.createElement(_components_Login_Login__WEBPACK_IMPORTED_MODULE_2__["default"], {
    setUser: setUser,
    toggleLoginForm: toggleLoginForm
  }) : /*#__PURE__*/React.createElement(_components_Register_Register__WEBPACK_IMPORTED_MODULE_3__["default"], {
    setSuccessMsg: setSuccessMsg,
    setUser: setUser,
    toggleLoginForm: toggleLoginForm
  })));
}

/***/ }),

/***/ "./src/pages/ContactPage/ContactPage.js":
/*!**********************************************!*\
  !*** ./src/pages/ContactPage/ContactPage.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContactPage)
/* harmony export */ });
/* harmony import */ var _ContactPage_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContactPage.module.scss */ "./src/pages/ContactPage/ContactPage.module.scss");
/* harmony import */ var _components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/NavBar/NavBar */ "./src/components/NavBar/NavBar.js");
/* harmony import */ var _components_NavMobile_NavMobile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/NavMobile/NavMobile */ "./src/components/NavMobile/NavMobile.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");



function ContactPage() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/React.createElement(_components_NavMobile_NavMobile__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/React.createElement("div", {
    className: _ContactPage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].ContactPage
  }, /*#__PURE__*/React.createElement("div", {
    className: _ContactPage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].InfoContainer
  }, /*#__PURE__*/React.createElement("h1", {
    className: _ContactPage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].header
  }, "Contact Me Today!"), /*#__PURE__*/React.createElement("p", {
    className: _ContactPage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].contactInfo
  }, "If you have any questions or would like to get in touch, please send me an email at", /*#__PURE__*/React.createElement("a", {
    className: _ContactPage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].link,
    href: "mailto:tpierson@g.dentonisd.org"
  }, " tpierson@g.dentonisd.org"), "."), /*#__PURE__*/React.createElement("div", {
    className: _ContactPage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].emailInstructions
  }, /*#__PURE__*/React.createElement("p", {
    className: _ContactPage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].contactInfo
  }, "Please include the following information in your email:"), /*#__PURE__*/React.createElement("ul", {
    className: _ContactPage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].contactInfo
  }, /*#__PURE__*/React.createElement("li", {
    className: _ContactPage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].li
  }, "Your first and last name"), /*#__PURE__*/React.createElement("li", {
    className: _ContactPage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].li
  }, "Your child's first and last name"))), /*#__PURE__*/React.createElement("p", {
    className: _ContactPage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].contactInfo
  }, "If you're feeling wild and would like to contribute to the class to make it a more welcoming environment, please visit my ", /*#__PURE__*/React.createElement("a", {
    className: _ContactPage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].link,
    href: "https://www.amazon.com/hz/wishlist/ls/1SEOMBBTU8MM9?ref_=wl_share"
  }, "Amazon Wishlist")))));
}

/***/ }),

/***/ "./src/pages/HomePage/HomePage.js":
/*!****************************************!*\
  !*** ./src/pages/HomePage/HomePage.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomePage.module.scss */ "./src/pages/HomePage/HomePage.module.scss");
/* harmony import */ var _components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/NavBar/NavBar */ "./src/components/NavBar/NavBar.js");
/* harmony import */ var _components_NavMobile_NavMobile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/NavMobile/NavMobile */ "./src/components/NavMobile/NavMobile.js");
/* harmony import */ var _components_IntroContainer_IntroContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/IntroContainer/IntroContainer */ "./src/components/IntroContainer/IntroContainer.js");
/* harmony import */ var _components_FourthBanner_FourthBanner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/FourthBanner/FourthBanner */ "./src/components/FourthBanner/FourthBanner.js");
/* harmony import */ var _components_MathBanner_MathBanner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/MathBanner/MathBanner */ "./src/components/MathBanner/MathBanner.js");
/* harmony import */ var _components_MathContainer_MathContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/MathContainer/MathContainer */ "./src/components/MathContainer/MathContainer.js");
/* harmony import */ var _components_ScienceBanner_ScienceBanner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/ScienceBanner/ScienceBanner */ "./src/components/ScienceBanner/ScienceBanner.js");
/* harmony import */ var _components_ScienceContainer_ScienceContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/ScienceContainer/ScienceContainer */ "./src/components/ScienceContainer/ScienceContainer.js");
/* harmony import */ var _components_NewsLetter_NewsLetter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/NewsLetter/NewsLetter */ "./src/components/NewsLetter/NewsLetter.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");










function HomePage() {
  const projectId = "project-section";
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/React.createElement(_components_NavMobile_NavMobile__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/React.createElement("div", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].HomePage
  }, /*#__PURE__*/React.createElement(_components_IntroContainer_IntroContainer__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/React.createElement(_components_FourthBanner_FourthBanner__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/React.createElement(_components_MathBanner_MathBanner__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/React.createElement(_components_MathContainer_MathContainer__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/React.createElement(_components_ScienceBanner_ScienceBanner__WEBPACK_IMPORTED_MODULE_7__["default"], null), /*#__PURE__*/React.createElement(_components_ScienceContainer_ScienceContainer__WEBPACK_IMPORTED_MODULE_8__["default"], null), /*#__PURE__*/React.createElement(_components_NewsLetter_NewsLetter__WEBPACK_IMPORTED_MODULE_9__["default"], null)));
}

/***/ }),

/***/ "./src/pages/ProfilePage/ProfilePage.js":
/*!**********************************************!*\
  !*** ./src/pages/ProfilePage/ProfilePage.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/NavBar/NavBar */ "./src/components/NavBar/NavBar.js");
/* harmony import */ var _components_NavMobile_NavMobile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/NavMobile/NavMobile */ "./src/components/NavMobile/NavMobile.js");
/* harmony import */ var _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProfilePage.module.scss */ "./src/pages/ProfilePage/ProfilePage.module.scss");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");




function ProfilePage(_ref) {
  let {
    user
  } = _ref;
  const [parents, setParents] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // Store user data in localStorage
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    }

    // Fetch parents if the user is a teacher
    const fetchParents = async () => {
      const storedUser = JSON.parse(localStorage.getItem('user'));
      const currentUser = user || storedUser;
      if (currentUser.role === "teacher") {
        try {
          const response = await fetch('/api/parents');
          const data = await response.json();
          setParents(data);
        } catch (error) {
          console.error('Failed to fetch parents:', error);
        }
      }
    };
    fetchParents();
  }, [user]);

  // Retrieve user data from localStorage if it was cleared (e.g., on page refresh)
  const storedUser = JSON.parse(localStorage.getItem('user'));
  if (!user && !storedUser) {
    return /*#__PURE__*/React.createElement("p", null, "Loading..."); // Show a loading state or redirect to login if needed
  }
  const currentUser = user || storedUser;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/React.createElement(_components_NavMobile_NavMobile__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/React.createElement("div", {
    className: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].profile
  }, currentUser.role === "teacher" ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Welcome, ", currentUser.firstName, " ", currentUser.lastName), /*#__PURE__*/React.createElement("p", null, "Email: ", currentUser.email), /*#__PURE__*/React.createElement("h2", null, "Parents Information"), /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    className: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].header
  }, "Student Name"), /*#__PURE__*/React.createElement("th", {
    className: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].header
  }, "Guardian 1 Name"), /*#__PURE__*/React.createElement("th", {
    className: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].header
  }, "Guardian 1 Email"), /*#__PURE__*/React.createElement("th", {
    className: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].header
  }, "Guardian 1 Phone"), /*#__PURE__*/React.createElement("th", {
    className: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].header
  }, "Guardian 2 Name"), /*#__PURE__*/React.createElement("th", {
    className: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].header
  }, "Guardian 2 Email"), /*#__PURE__*/React.createElement("th", {
    className: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].header
  }, "Guardian 2 Phone"), /*#__PURE__*/React.createElement("th", {
    className: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].header
  }, "Room Parent"), /*#__PURE__*/React.createElement("th", {
    className: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].header
  }, "Transportation"), /*#__PURE__*/React.createElement("th", {
    className: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].header
  }, "Car Tag Number"), /*#__PURE__*/React.createElement("th", {
    className: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].header
  }, "Allergies"), /*#__PURE__*/React.createElement("th", {
    className: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].header
  }, "Notes"))), /*#__PURE__*/React.createElement("tbody", null, parents.map(parent => /*#__PURE__*/React.createElement("tr", {
    key: parent._id
  }, /*#__PURE__*/React.createElement("td", {
    className: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].student
  }, parent.studentFirstName, " ", parent.studentLastName), /*#__PURE__*/React.createElement("td", null, parent.guardOneFirstName, " ", parent.guardOneLastName), /*#__PURE__*/React.createElement("td", null, parent.guardOneEmail), /*#__PURE__*/React.createElement("td", null, parent.guardOnePhone), /*#__PURE__*/React.createElement("td", null, parent.guardTwoFirstName, " ", parent.guardTwoLastName), /*#__PURE__*/React.createElement("td", null, parent.guardTwoEmail || 'N/A'), /*#__PURE__*/React.createElement("td", null, parent.guardTwoPhone || 'N/A'), /*#__PURE__*/React.createElement("td", {
    className: parent.roomParent === true ? _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].roomParent : ''
  }, parent.roomParent === true ? "Yes" : "No"), /*#__PURE__*/React.createElement("td", null, parent.transportation || 'N/A'), /*#__PURE__*/React.createElement("td", null, parent.carTagNumber || 'N/A'), /*#__PURE__*/React.createElement("td", null, parent.allergies || 'N/A'), /*#__PURE__*/React.createElement("td", {
    className: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].notes
  }, parent.notes || 'N/A')))))) : /*#__PURE__*/React.createElement("p", null, currentUser.studentFirstName)));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfilePage);

/***/ }),

/***/ "./src/utilities/send-request.js":
/*!***************************************!*\
  !*** ./src/utilities/send-request.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sendRequest)
/* harmony export */ });
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users-service */ "./src/utilities/users-service.js");

async function sendRequest(url) {
  let method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GET';
  let payload = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  const options = {
    method
  };
  if (payload) {
    options.headers = {
      'Content-Type': 'application/json'
    };
    options.body = JSON.stringify(payload);
  }
  const token = (0,_users_service__WEBPACK_IMPORTED_MODULE_0__.getToken)();
  if (token) {
    // Ensure options.headers is initialized if it doesn't exist
    options.headers = options.headers || {};
    options.headers.Authorization = "Bearer ".concat(token);
  }
  try {
    const res = await fetch(url, options);
    if (res.ok) {
      // Check for a JSON response and return it
      return res.json();
    } else {
      // Get response status and text for error details
      const errorText = await res.text();
      throw new Error("HTTP Error ".concat(res.status, ": ").concat(errorText));
    }
  } catch (error) {
    console.error('Request failed:', error.message);
    throw error; // Re-throw the error after logging
  }
}

/***/ }),

/***/ "./src/utilities/users-api.js":
/*!************************************!*\
  !*** ./src/utilities/users-api.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   findUser: () => (/* binding */ findUser),
/* harmony export */   index: () => (/* binding */ index),
/* harmony export */   login: () => (/* binding */ login),
/* harmony export */   signUp: () => (/* binding */ signUp)
/* harmony export */ });
/* unused harmony export resetPassword */
/* harmony import */ var _send_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./send-request */ "./src/utilities/send-request.js");

const BASE_URL = '/api/users';
function signUp(userData) {
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])(BASE_URL, 'POST', userData);
}
function login(credentials) {
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])("".concat(BASE_URL, "/login"), 'POST', credentials);
}
function resetPassword(emailData) {
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])("".concat(BASE_URL, "/reset-password"), 'POST', emailData);
}
function findUser(userId) {
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])("".concat(BASE_URL, "/").concat(userId));
}
function index() {
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])("".concat(BASE_URL, "/"));
}

// export async function customerSupportRequest(name, email, message, attachment) {
//   return sendRequest(`${BASE_URL}/support`, 'POST', { name, email, message, attachment });
// }

/***/ }),

/***/ "./src/utilities/users-service.js":
/*!****************************************!*\
  !*** ./src/utilities/users-service.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getToken: () => (/* binding */ getToken),
/* harmony export */   getUser: () => (/* binding */ getUser),
/* harmony export */   logOut: () => (/* binding */ logOut)
/* harmony export */ });
/* unused harmony exports signUp, login, getProfileUser, indexUsers */
/* harmony import */ var _users_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users-api */ "./src/utilities/users-api.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

const BASE_URL = '/api/users';
async function signUp(userData) {
  const token = await _users_api__WEBPACK_IMPORTED_MODULE_0__.signUp(userData);
  localStorage.setItem('token', token);
  return getUser();
}
async function login(credentials, rememberMe, navigate) {
  try {
    // Pass credentials and rememberMe option to the API call
    const token = await _users_api__WEBPACK_IMPORTED_MODULE_0__.login(_objectSpread(_objectSpread({}, credentials), {}, {
      rememberMe
    }));
    localStorage.setItem('token', token);
    const user = getUser();
    console.log("User:", user);

    // Redirect to homepage upon successful login
    navigate('/'); // Replace '/' with the path of your homepage

    return user;
  } catch (error) {
    console.error("Login Error:", error);
    throw error;
  }
}
function getToken() {
  const token = localStorage.getItem('token');
  if (!token) return null;
  const payload = JSON.parse(atob(token.split('.')[1]));
  if (payload.exp < Date.now() / 1000) {
    localStorage.removeItem('token');
    return null;
  }
  return token;
}
function getUser() {
  const token = getToken();
  if (!token) return null; // Return null if token is missing
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    const user = _users_api__WEBPACK_IMPORTED_MODULE_0__.findUser(payload._id); // Return user object from token payload
    return user;
  } catch (error) {
    console.error("Error parsing user from token:", error);
    return null; // Return null if there's an error parsing the token
  }
}
async function getProfileUser(userId) {
  try {
    const foundUser = await _users_api__WEBPACK_IMPORTED_MODULE_0__.findUser(userId);
    return foundUser;
  } catch (error) {
    console.error("Error finding users", error);
  }
}
async function indexUsers() {
  console.log('indexing users');
  try {
    const foundUsers = await _users_api__WEBPACK_IMPORTED_MODULE_0__.index();
    return foundUsers;
  } catch (error) {
    console.error("Error finding users", error);
  }
}
function logOut() {
  localStorage.removeItem('token');
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/App.module.scss":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/App.module.scss ***!
  \********************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.IMqMrT2eGOGeFiLbCAGg {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}

h1 {
  font-size: 7vmin;
  color: var(--heading-color);
  text-shadow: 1px 1px 2px black;
}

input {
  width: 25vw;
  height: 3.5rem;
  border-radius: 1rem;
  margin-left: 1rem;
  font-size: 2rem;
  padding: 1rem;
  color: var(--input-color);
}

input:focus {
  outline: none;
  box-shadow: 0 0 1rem var(--btn-color);
}

label {
  font-size: 2.3rem;
  padding: 1rem;
}

button {
  background-color: var(--btn-color);
  border-top-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  border: none;
  width: 50%;
  height: 4rem;
  transition: 0.3s ease;
}
button:hover {
  cursor: pointer;
  background-color: rgba(120, 236, 211, 0.65);
  color: white;
  transition: 0.3s ease;
}

button:hover {
  cursor: pointer;
}

@media (max-width: 500px) {
  .IMqMrT2eGOGeFiLbCAGg {
    overflow-x: hidden;
  }
}`, "",{"version":3,"sources":["webpack://./src/App.module.scss"],"names":[],"mappings":"AAAA;EACI,WAAA;EACA,YAAA;EACA,kBAAA;AACJ;;AAEA;EACI,gBAAA;EACA,2BAAA;EACA,8BAAA;AACJ;;AAEA;EACI,WAAA;EACA,cAAA;EACA,mBAAA;EACA,iBAAA;EACA,eAAA;EACA,aAAA;EACA,yBAAA;AACJ;;AAEA;EACI,aAAA;EACA,qCAAA;AACJ;;AAEA;EACI,iBAAA;EACA,aAAA;AACJ;;AAEA;EACI,kCAAA;EACA,4BAAA;EACA,gCAAA;EACA,YAAA;EACA,UAAA;EACA,YAAA;EACA,qBAAA;AACJ;AAAI;EACI,eAAA;EACA,2CAAA;EACA,YAAA;EACA,qBAAA;AAER;;AAEA;EACI,eAAA;AACJ;;AAEA;EACI;IACI,kBAAA;EACN;AACF","sourcesContent":[".App {\n    width: 100%;\n    height: 100%;\n    overflow-x: hidden;\n}\n\nh1 {\n    font-size: 7vmin;\n    color: var(--heading-color);\n    text-shadow: 1px 1px 2px black;\n}\n\ninput {\n    width: 25vw;\n    height: 3.5rem;\n    border-radius: 1rem;\n    margin-left: 1rem;\n    font-size: 2rem;\n    padding: 1rem;\n    color: var(--input-color);\n}\n\ninput:focus {\n    outline: none;\n    box-shadow: 0 0 1rem var(--btn-color);\n}\n\nlabel {\n    font-size: 2.3rem;\n    padding: 1rem;\n}\n\nbutton {\n    background-color: var(--btn-color);\n    border-top-left-radius: 1rem;\n    border-bottom-right-radius: 1rem;\n    border: none;\n    width: 50%;\n    height: 4rem;\n    transition: .3s ease;\n    &:hover {\n        cursor: pointer;\n        background-color: rgba(120, 236, 211, 0.65);\n        color: white;\n        transition: .3s ease;\n    }\n}\n\nbutton:hover {\n    cursor: pointer;\n}\n\n@media (max-width: 500px) {\n    .App {\n        overflow-x: hidden;\n    }\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"App": `IMqMrT2eGOGeFiLbCAGg`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/FourthBanner/FourthBanner.module.scss":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/FourthBanner/FourthBanner.module.scss ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Small devices (portrait tablets and large phones, 600px and up) */
.i7owkABs_rcVHy60TVUA {
  height: 60vh;
  width: 100%;
  margin: 0rem;
  padding: 3rem 0 10rem;
  display: flex;
  background-color: var(--heading-color);
  justify-content: center;
  align-items: center;
}
.i7owkABs_rcVHy60TVUA .JNH3Vk4HaZs5nR6MOxny {
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
}
.i7owkABs_rcVHy60TVUA .JNH3Vk4HaZs5nR6MOxny .JTdACCP46afaa_2BngBq {
  font-size: 12rem;
  font-weight: 600;
  color: white;
  text-transform: uppercase;
}
.i7owkABs_rcVHy60TVUA .KQO1VkseAfNEa9QbImOE {
  color: grey;
  padding-left: 3rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-size: 4rem;
  transition: 1s ease;
}
.i7owkABs_rcVHy60TVUA .KQO1VkseAfNEa9QbImOE:hover {
  color: var(--bg-color);
  transition: 1s ease;
}

@media (max-width: 800px) {
  .i7owkABs_rcVHy60TVUA {
    height: 40vh;
    padding: 0 0 1rem 0;
    flex-direction: column;
  }
  .i7owkABs_rcVHy60TVUA .JNH3Vk4HaZs5nR6MOxny {
    height: 100%;
  }
  .i7owkABs_rcVHy60TVUA .JNH3Vk4HaZs5nR6MOxny .JTdACCP46afaa_2BngBq {
    font-size: 10rem;
  }
  .i7owkABs_rcVHy60TVUA .KQO1VkseAfNEa9QbImOE {
    font-size: 3rem;
  }
}
@media (max-width: 500px) {
  .i7owkABs_rcVHy60TVUA {
    height: 30vh;
  }
  .i7owkABs_rcVHy60TVUA .JNH3Vk4HaZs5nR6MOxny .JTdACCP46afaa_2BngBq {
    font-size: 8rem;
  }
  .i7owkABs_rcVHy60TVUA .KQO1VkseAfNEa9QbImOE {
    font-size: 2rem;
  }
}`, "",{"version":3,"sources":["webpack://./src/components/FourthBanner/FourthBanner.module.scss"],"names":[],"mappings":"AAAA,oEAAA;AACA;EACI,YAAA;EACA,WAAA;EACA,YAAA;EACA,qBAAA;EACA,aAAA;EACA,sCAAA;EACA,uBAAA;EACA,mBAAA;AACJ;AAAI;EACI,YAAA;EACA,aAAA;EACA,sBAAA;EACA,yBAAA;EACA,uBAAA;AAER;AADQ;EACI,gBAAA;EACA,gBAAA;EACA,YAAA;EACA,yBAAA;AAGZ;AAAI;EACI,WAAA;EACA,kBAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,yBAAA;EACA,eAAA;EACA,mBAAA;AAER;AADQ;EACI,sBAAA;EACA,mBAAA;AAGZ;;AAEA;EACI;IACI,YAAA;IACA,mBAAA;IACA,sBAAA;EACN;EAAM;IACI,YAAA;EAEV;EADU;IACI,gBAAA;EAGd;EAAM;IACI,eAAA;EAEV;AACF;AAEA;EACI;IACI,YAAA;EAAN;EAEU;IACI,eAAA;EAAd;EAGM;IACI,eAAA;EADV;AACF","sourcesContent":["/* Small devices (portrait tablets and large phones, 600px and up) */\n.FourthBanner {\n    height: 60vh;\n    width: 100%;\n    margin: 0rem;\n    padding: 3rem 0 10rem;\n    display: flex;\n    background-color: var(--heading-color);\n    justify-content: center;\n    align-items: center;\n    .contentContainer {\n        height: 60vh;\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-end;\n        align-items: flex-start;\n        .title {\n            font-size: 12rem;\n            font-weight: 600;\n            color: white;\n            text-transform: uppercase;\n        }\n    }\n    .titleDescription {\n        color: grey;\n        padding-left: 3rem;\n        height: 100%;\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-end;\n        font-size: 4rem;\n        transition: 1s ease;\n        &:hover {\n            color: var(--bg-color);\n            transition: 1s ease;\n        }\n    }\n}\n\n@media (max-width: 800px) {\n    .FourthBanner {\n        height: 40vh;\n        padding: 0 0 1rem 0;\n        flex-direction: column;\n        .contentContainer {\n            height: 100%;\n            .title {\n                font-size: 10rem;\n            }\n        }\n        .titleDescription {\n            font-size: 3rem;\n        }\n    }\n}\n\n@media (max-width: 500px) {\n    .FourthBanner {\n        height: 30vh;\n        .contentContainer {\n            .title {\n                font-size: 8rem;\n            }\n        }\n        .titleDescription {\n            font-size: 2rem;\n        }\n    }\n}\n\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"FourthBanner": `i7owkABs_rcVHy60TVUA`,
	"contentContainer": `JNH3Vk4HaZs5nR6MOxny`,
	"title": `JTdACCP46afaa_2BngBq`,
	"titleDescription": `KQO1VkseAfNEa9QbImOE`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/IntroContainer/IntroContainer.module.scss":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/IntroContainer/IntroContainer.module.scss ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.WXIspfxBzGyfPOvOt6Wd {
  height: 100vh;
  width: 100%;
  position: relative;
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
}
.WXIspfxBzGyfPOvOt6Wd .n4NBksae5XNvymP02uRo {
  width: 55%;
}
.WXIspfxBzGyfPOvOt6Wd .n4NBksae5XNvymP02uRo .gSKaLjsbfnd93wd98bJk, .WXIspfxBzGyfPOvOt6Wd .n4NBksae5XNvymP02uRo .kx5nScP14AcQB9rbiQQq {
  margin: 0 0 0 10rem;
}
.WXIspfxBzGyfPOvOt6Wd .n4NBksae5XNvymP02uRo .gSKaLjsbfnd93wd98bJk {
  color: white;
  font-size: 11rem;
}
.WXIspfxBzGyfPOvOt6Wd .n4NBksae5XNvymP02uRo .gSKaLjsbfnd93wd98bJk .OVONZ52MMoJ8r5yLzNJa, .WXIspfxBzGyfPOvOt6Wd .n4NBksae5XNvymP02uRo .gSKaLjsbfnd93wd98bJk .SkHD1m3e3CuLGPPqZYxV {
  font-size: 11rem;
}
.WXIspfxBzGyfPOvOt6Wd .n4NBksae5XNvymP02uRo .gSKaLjsbfnd93wd98bJk .OVONZ52MMoJ8r5yLzNJa {
  font-weight: 100;
  color: var(--heading-color);
}
.WXIspfxBzGyfPOvOt6Wd .n4NBksae5XNvymP02uRo .gSKaLjsbfnd93wd98bJk .SkHD1m3e3CuLGPPqZYxV {
  color: black;
  font-size: 13rem;
}
.WXIspfxBzGyfPOvOt6Wd .n4NBksae5XNvymP02uRo .RVzjtWAadvbxIwf_Vy5a {
  margin: 8rem 1rem;
  padding: 0.5rem;
}
.WXIspfxBzGyfPOvOt6Wd .kx5nScP14AcQB9rbiQQq {
  font-size: 3rem;
  color: grey;
  margin-top: 5rem;
  width: 50vw;
}
.WXIspfxBzGyfPOvOt6Wd .BI0GYOC1YbWy9DGIlJZK {
  background-color: black;
  width: 30vw;
  position: absolute;
  top: 4rem;
  right: 10rem;
  z-index: -1;
  transform: rotate(7deg);
}

.lr2oKtT4bainQOVQRfG5 {
  position: relative;
}
.lr2oKtT4bainQOVQRfG5 ._R8T8mKkc72Vbeqn1GmU {
  display: none;
}
.lr2oKtT4bainQOVQRfG5 .w6CsT__JoJ2HavmmRZqW {
  display: none;
}

/* Medium devices (landscape tablets, 800px and up) */
@media only screen and (max-width: 1220px) {
  .WXIspfxBzGyfPOvOt6Wd {
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .WXIspfxBzGyfPOvOt6Wd .n4NBksae5XNvymP02uRo {
    width: 100%;
    height: 100%;
  }
  .WXIspfxBzGyfPOvOt6Wd .n4NBksae5XNvymP02uRo .gSKaLjsbfnd93wd98bJk, .WXIspfxBzGyfPOvOt6Wd .n4NBksae5XNvymP02uRo .kx5nScP14AcQB9rbiQQq {
    margin: 0 0 0 5rem;
  }
  .WXIspfxBzGyfPOvOt6Wd .n4NBksae5XNvymP02uRo .gSKaLjsbfnd93wd98bJk {
    font-size: 9rem;
  }
  .WXIspfxBzGyfPOvOt6Wd .n4NBksae5XNvymP02uRo .gSKaLjsbfnd93wd98bJk .OVONZ52MMoJ8r5yLzNJa, .WXIspfxBzGyfPOvOt6Wd .n4NBksae5XNvymP02uRo .gSKaLjsbfnd93wd98bJk .SkHD1m3e3CuLGPPqZYxV {
    font-size: 9rem;
  }
  .WXIspfxBzGyfPOvOt6Wd .n4NBksae5XNvymP02uRo .gSKaLjsbfnd93wd98bJk .SkHD1m3e3CuLGPPqZYxV {
    font-size: 9rem;
  }
  .WXIspfxBzGyfPOvOt6Wd .n4NBksae5XNvymP02uRo .RVzjtWAadvbxIwf_Vy5a {
    margin: 2rem 1rem;
  }
  .WXIspfxBzGyfPOvOt6Wd .kx5nScP14AcQB9rbiQQq {
    font-size: 2rem;
    width: 60vw;
  }
  .WXIspfxBzGyfPOvOt6Wd .BI0GYOC1YbWy9DGIlJZK {
    width: 35vw;
    top: 4rem;
    right: 5rem;
  }
  .lr2oKtT4bainQOVQRfG5 {
    width: 100%;
    height: 100%;
  }
  .lr2oKtT4bainQOVQRfG5 .E7mE3HIiQ6hdtDlotDkx {
    display: none;
  }
  .lr2oKtT4bainQOVQRfG5 ._R8T8mKkc72Vbeqn1GmU {
    display: block;
  }
  .lr2oKtT4bainQOVQRfG5 .w6CsT__JoJ2HavmmRZqW {
    display: none;
  }
}
/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (max-width: 800px) {
  .WXIspfxBzGyfPOvOt6Wd {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  .WXIspfxBzGyfPOvOt6Wd .n4NBksae5XNvymP02uRo {
    margin-bottom: -15rem;
  }
  .WXIspfxBzGyfPOvOt6Wd .n4NBksae5XNvymP02uRo .RVzjtWAadvbxIwf_Vy5a {
    margin: 4rem 1rem;
  }
  .WXIspfxBzGyfPOvOt6Wd .n4NBksae5XNvymP02uRo .gSKaLjsbfnd93wd98bJk, .WXIspfxBzGyfPOvOt6Wd .n4NBksae5XNvymP02uRo .kx5nScP14AcQB9rbiQQq {
    margin: 0 0 0 2rem;
  }
  .WXIspfxBzGyfPOvOt6Wd .n4NBksae5XNvymP02uRo .gSKaLjsbfnd93wd98bJk {
    font-size: 8rem;
  }
  .WXIspfxBzGyfPOvOt6Wd .n4NBksae5XNvymP02uRo .gSKaLjsbfnd93wd98bJk .OVONZ52MMoJ8r5yLzNJa, .WXIspfxBzGyfPOvOt6Wd .n4NBksae5XNvymP02uRo .gSKaLjsbfnd93wd98bJk .SkHD1m3e3CuLGPPqZYxV {
    font-size: 8rem;
  }
  .WXIspfxBzGyfPOvOt6Wd .n4NBksae5XNvymP02uRo .gSKaLjsbfnd93wd98bJk .SkHD1m3e3CuLGPPqZYxV {
    font-size: 8rem;
  }
  .WXIspfxBzGyfPOvOt6Wd .n4NBksae5XNvymP02uRo .kx5nScP14AcQB9rbiQQq {
    font-size: 1.5rem;
    width: 70vw;
  }
  .WXIspfxBzGyfPOvOt6Wd .n4NBksae5XNvymP02uRo .BI0GYOC1YbWy9DGIlJZK {
    width: 40vw;
    top: 2rem;
    right: 2rem;
  }
}
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 500px) {
  .WXIspfxBzGyfPOvOt6Wd {
    height: 100vh;
  }
  .WXIspfxBzGyfPOvOt6Wd .n4NBksae5XNvymP02uRo {
    margin-bottom: -25rem;
  }
  .WXIspfxBzGyfPOvOt6Wd .n4NBksae5XNvymP02uRo .RVzjtWAadvbxIwf_Vy5a {
    margin: 2rem 1rem;
  }
  .WXIspfxBzGyfPOvOt6Wd .n4NBksae5XNvymP02uRo .gSKaLjsbfnd93wd98bJk, .WXIspfxBzGyfPOvOt6Wd .n4NBksae5XNvymP02uRo .kx5nScP14AcQB9rbiQQq {
    margin: 0 0 0 1rem;
  }
  .WXIspfxBzGyfPOvOt6Wd .n4NBksae5XNvymP02uRo .gSKaLjsbfnd93wd98bJk {
    font-size: 6rem;
  }
  .WXIspfxBzGyfPOvOt6Wd .n4NBksae5XNvymP02uRo .gSKaLjsbfnd93wd98bJk .OVONZ52MMoJ8r5yLzNJa, .WXIspfxBzGyfPOvOt6Wd .n4NBksae5XNvymP02uRo .gSKaLjsbfnd93wd98bJk .SkHD1m3e3CuLGPPqZYxV {
    font-size: 6rem;
  }
  .WXIspfxBzGyfPOvOt6Wd .n4NBksae5XNvymP02uRo .gSKaLjsbfnd93wd98bJk .SkHD1m3e3CuLGPPqZYxV {
    font-size: 6rem;
  }
  .WXIspfxBzGyfPOvOt6Wd .n4NBksae5XNvymP02uRo .kx5nScP14AcQB9rbiQQq {
    font-size: 1rem;
    width: 80vw;
  }
  .WXIspfxBzGyfPOvOt6Wd .n4NBksae5XNvymP02uRo .BI0GYOC1YbWy9DGIlJZK {
    width: 50vw;
    top: 1rem;
    right: 1rem;
  }
  .lr2oKtT4bainQOVQRfG5 {
    width: 100%;
    height: 100%;
  }
  .lr2oKtT4bainQOVQRfG5 .E7mE3HIiQ6hdtDlotDkx {
    display: none;
  }
  .lr2oKtT4bainQOVQRfG5 ._R8T8mKkc72Vbeqn1GmU {
    display: block;
  }
  .lr2oKtT4bainQOVQRfG5 .w6CsT__JoJ2HavmmRZqW {
    display: none;
  }
}`, "",{"version":3,"sources":["webpack://./src/components/IntroContainer/IntroContainer.module.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,WAAA;EACA,kBAAA;EACA,yBAAA;EACA,aAAA;EACA,8BAAA;AACJ;AAAI;EACI,UAAA;AAER;AADQ;EACI,mBAAA;AAGZ;AADQ;EACI,YAAA;EACA,gBAAA;AAGZ;AAFY;EACI,gBAAA;AAIhB;AAFY;EACI,gBAAA;EACA,2BAAA;AAIhB;AAFY;EACI,YAAA;EACA,gBAAA;AAIhB;AADI;EACI,iBAAA;EACA,eAAA;AAGR;AACI;EACI,eAAA;EACA,WAAA;EACA,gBAAA;EACA,WAAA;AACR;AAEI;EACI,uBAAA;EACA,WAAA;EACA,kBAAA;EACA,SAAA;EACA,YAAA;EACA,WAAA;EACA,uBAAA;AAAR;;AAGA;EACI,kBAAA;AAAJ;AAEI;EACI,aAAA;AAAR;AAEI;EACI,aAAA;AAAR;;AAIA,qDAAA;AACA;EACI;IACI,YAAA;IACA,aAAA;IACA,uBAAA;IACA,mBAAA;EADN;EAEM;IACI,WAAA;IACA,YAAA;EAAV;EACU;IACI,kBAAA;EACd;EACU;IACI,eAAA;EACd;EAAc;IACI,eAAA;EAElB;EAAc;IACI,eAAA;EAElB;EACU;IACI,iBAAA;EACd;EAEM;IACI,eAAA;IACA,WAAA;EAAV;EAEM;IACI,WAAA;IACA,SAAA;IACA,WAAA;EAAV;EAGE;IACI,WAAA;IACA,YAAA;EADN;EAEM;IACI,aAAA;EAAV;EAEM;IACI,cAAA;EAAV;EAEM;IACI,aAAA;EAAV;AACF;AAIA,oEAAA;AACA;EACI;IACI,aAAA;IACA,sBAAA;IACA,aAAA;EAFN;EAGM;IACI,qBAAA;EADV;EAEU;IACI,iBAAA;EAAd;EAEU;IACI,kBAAA;EAAd;EAEU;IACI,eAAA;EAAd;EACc;IACI,eAAA;EAClB;EACc;IACI,eAAA;EAClB;EAEU;IACI,iBAAA;IACA,WAAA;EAAd;EAEU;IACI,WAAA;IACA,SAAA;IACA,WAAA;EAAd;AACF;AAKA,iDAAA;AACA;EACI;IACI,aAAA;EAHN;EAIM;IACI,qBAAA;EAFV;EAGU;IACI,iBAAA;EADd;EAGU;IACI,kBAAA;EADd;EAGU;IACI,eAAA;EADd;EAEc;IACI,eAAA;EAAlB;EAEc;IACI,eAAA;EAAlB;EAGU;IACI,eAAA;IACA,WAAA;EADd;EAGU;IACI,WAAA;IACA,SAAA;IACA,WAAA;EADd;EAKE;IACI,WAAA;IACA,YAAA;EAHN;EAIM;IACI,aAAA;EAFV;EAIM;IACI,cAAA;EAFV;EAIM;IACI,aAAA;EAFV;AACF","sourcesContent":[".IntroContainer {\n    height: 100vh;\n    width: 100%;\n    position: relative;\n    text-transform: uppercase;\n    display: flex;\n    justify-content: space-between;\n    .mainContent {\n        width: 55%;\n        .heading, .subHeading {\n            margin: 0 0 0 10rem;\n        }\n        .heading {\n            color: white;\n            font-size: 11rem;\n            .spanText, .spanPlus {\n                font-size: 11rem;\n            }\n            .spanText {\n                font-weight: 100;\n                color: var(--heading-color);\n            }\n            .spanPlus {\n                color: black;\n                font-size: 13rem;\n            }\n    }\n    .headingSM {\n        margin: 8rem 1rem;\n        padding: .5rem;\n    }\n    }\n    \n    .subHeading {\n        font-size: 3rem;\n        color: grey;\n        margin-top: 5rem;\n        width: 50vw;\n    }\n    \n    .image {\n        background-color: black;\n        width: 30vw;\n        position: absolute;\n        top: 4rem;\n        right: 10rem;\n        z-index: -1;\n        transform: rotate(7deg);\n    }\n}\n.SpriteContainer {\n    position: relative;\n    \n    .SpriteAnimationMed {\n        display: none;\n    }\n    .SpriteAnimationSm {\n        display: none;\n    }  \n}\n\n/* Medium devices (landscape tablets, 800px and up) */\n@media only screen and (max-width: 1220px) {\n    .IntroContainer {\n        height: 70vh;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        .mainContent {\n            width: 100%;\n            height: 100%;\n            .heading, .subHeading {\n                margin: 0 0 0 5rem;\n            }\n            .heading {\n                font-size: 9rem;\n                .spanText, .spanPlus {\n                    font-size: 9rem;\n                }\n                .spanPlus {\n                    font-size: 9rem;\n                }\n            }\n            .headingSM {\n                margin: 2rem 1rem;\n            }\n        }\n        .subHeading {\n            font-size: 2rem;\n            width: 60vw;\n        }\n        .image {\n            width: 35vw;\n            top: 4rem;\n            right: 5rem;\n        }\n    }\n    .SpriteContainer {\n        width: 100%;\n        height: 100%;\n        .SpriteAnimation {\n            display: none;\n        }\n        .SpriteAnimationMed {\n            display: block;\n        }\n        .SpriteAnimationSm {\n            display: none;\n        }\n    }\n}\n\n/* Small devices (portrait tablets and large phones, 600px and up) */\n@media only screen and (max-width: 800px) {\n    .IntroContainer {\n        display: flex;\n        flex-direction: column;\n        height: 100vh;\n        .mainContent {\n            margin-bottom: -15rem;\n            .headingSM {\n                margin: 4rem 1rem;\n            }\n            .heading, .subHeading {\n                margin: 0 0 0 2rem;\n            }\n            .heading {\n                font-size: 8rem;\n                .spanText, .spanPlus {\n                    font-size: 8rem;\n                }\n                .spanPlus {\n                    font-size: 8rem;\n                }\n            }\n            .subHeading {\n                font-size: 1.5rem;\n                width: 70vw;\n            }\n            .image {\n                width: 40vw;\n                top: 2rem;\n                right: 2rem;\n            }\n        }\n    }\n}\n\n/* Extra small devices (phones, 600px and down) */\n@media only screen and (max-width: 500px) {\n    .IntroContainer {\n        height: 100vh;\n        .mainContent {\n            margin-bottom: -25rem;\n            .headingSM {\n                margin: 2rem 1rem;\n            }\n            .heading, .subHeading {\n                margin: 0 0 0 1rem;\n            }\n            .heading {\n                font-size: 6rem;\n                .spanText, .spanPlus {\n                    font-size: 6rem;\n                }\n                .spanPlus {\n                    font-size: 6rem;\n                }\n            }\n            .subHeading {\n                font-size: 1rem;\n                width: 80vw;\n            }\n            .image {\n                width: 50vw;\n                top: 1rem;\n                right: 1rem;\n            }\n        }\n    }\n    .SpriteContainer {\n        width: 100%;\n        height: 100%;\n        .SpriteAnimation {\n            display: none;\n        }\n        .SpriteAnimationMed {\n            display: block;\n        }\n        .SpriteAnimationSm {\n            display: none;\n        }\n    }\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"IntroContainer": `WXIspfxBzGyfPOvOt6Wd`,
	"mainContent": `n4NBksae5XNvymP02uRo`,
	"heading": `gSKaLjsbfnd93wd98bJk`,
	"subHeading": `kx5nScP14AcQB9rbiQQq`,
	"spanText": `OVONZ52MMoJ8r5yLzNJa`,
	"spanPlus": `SkHD1m3e3CuLGPPqZYxV`,
	"headingSM": `RVzjtWAadvbxIwf_Vy5a`,
	"image": `BI0GYOC1YbWy9DGIlJZK`,
	"SpriteContainer": `lr2oKtT4bainQOVQRfG5`,
	"SpriteAnimationMed": `_R8T8mKkc72Vbeqn1GmU`,
	"SpriteAnimationSm": `w6CsT__JoJ2HavmmRZqW`,
	"SpriteAnimation": `E7mE3HIiQ6hdtDlotDkx`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Login/Login.module.scss":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Login/Login.module.scss ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.Cm2NqSQYe8HgmmTb0hKQ {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.ezzqWhyjafzLobjTxKvN {
  width: 100%;
  max-width: 450px;
  min-height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  border-radius: 2rem;
  border: 0.2rem solid var(--text-dark);
  background-color: var(--text-light);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}

.Q7lalbpQ0P96QaVlILom {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.ReMmHGnawzd9hmr1fwVA {
  width: 100%;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-dark);
}

.NPmqIZEoOZvOJwwkCWoP {
  width: 100%;
  padding: 0.75rem;
  font-size: 1.1rem;
  border-radius: 0.5rem;
  border: 0.1rem solid var(--text-dark);
  background-color: #f7f7f7;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

.YhdF101ZgT3DfSqwebrq {
  background-color: #f0f0f0;
  color: #a0a0a0;
  cursor: not-allowed;
}

.UT8Z2N1fiZTOLkSvByyt {
  width: 100%;
  padding: 0.75rem;
  font-size: 1.2rem;
  border: none;
  border-radius: 0.5rem;
  background-color: var(--btn-color);
  color: #fff;
  font-weight: 600;
  text-align: center;
  transition: background-color 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
.UT8Z2N1fiZTOLkSvByyt:hover {
  background-color: var(--btn-color);
  cursor: pointer;
}

.Iis1HDlhi8z1QEliSCTH {
  background-color: lightpink;
  color: firebrick;
  font-weight: bold;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  width: 100%;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.qw2ThsCNur9t1Nr4VQFB {
  text-align: center;
  font-size: 1rem;
  margin-top: 1rem;
  color: var(--text-dark);
}
.qw2ThsCNur9t1Nr4VQFB .M_68A33V2MtFkAHRM_td {
  display: inline-block;
  margin-top: 0.5rem;
}

.aINFe_lpRHBUc8CvPw5B, .aINFe_lpRHBUc8CvPw5B:visited {
  color: navy;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.3s ease;
}
.aINFe_lpRHBUc8CvPw5B:hover, .aINFe_lpRHBUc8CvPw5B:visited:hover {
  color: #00004d;
  text-decoration: underline;
}

.TtMUi1H2qf1QXivbUlCO {
  position: absolute;
  left: -9999px;
}

.bzmmQobqr_mvKKGmdTub {
  display: none;
}

.VYkdqm295yp3kMQAt608 {
  color: limegreen;
  margin-left: 0.25rem;
}

.zs9EUPz_kutjYPnjcr0Q {
  color: red;
  margin-left: 0.25rem;
}

.VhPfie1lquL3ClqLcdBf {
  font-size: 0.9rem;
  border-radius: 0.5rem;
  background: #000;
  color: #fff;
  padding: 0.5rem;
  position: relative;
  bottom: -10px;
  margin-bottom: 1rem;
  text-align: center;
}

.VhPfie1lquL3ClqLcdBf > svg {
  margin-right: 0.25rem;
}`, "",{"version":3,"sources":["webpack://./src/components/Login/Login.module.scss"],"names":[],"mappings":"AAAA;EACI,WAAA;EACA,aAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AACJ;;AAEA;EACI,WAAA;EACA,gBAAA;EACA,iBAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,aAAA;EACA,mBAAA;EACA,qCAAA;EACA,mCAAA;EACA,uCAAA;AACJ;;AAEA;EACI,WAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;AACJ;;AAEA;EACI,WAAA;EACA,iBAAA;EACA,gBAAA;EACA,qBAAA;EACA,uBAAA;AACJ;;AAEA;EACI,WAAA;EACA,gBAAA;EACA,iBAAA;EACA,qBAAA;EACA,qCAAA;EACA,yBAAA;EACA,qBAAA;EACA,yCAAA;AACJ;;AAEA;EACI,yBAAA;EACA,cAAA;EACA,mBAAA;AACJ;;AAEA;EACI,WAAA;EACA,gBAAA;EACA,iBAAA;EACA,YAAA;EACA,qBAAA;EACA,kCAAA;EACA,WAAA;EACA,gBAAA;EACA,kBAAA;EACA,sCAAA;EACA,wCAAA;AACJ;AACI;EACI,kCAAA;EACA,eAAA;AACR;;AAGA;EACI,2BAAA;EACA,gBAAA;EACA,iBAAA;EACA,gBAAA;EACA,mBAAA;EACA,qBAAA;EACA,WAAA;EACA,kBAAA;EACA,wCAAA;AAAJ;;AAGA;EACI,kBAAA;EACA,eAAA;EACA,gBAAA;EACA,uBAAA;AAAJ;AAEI;EACI,qBAAA;EACA,kBAAA;AAAR;;AAIA;EACI,WAAA;EACA,gBAAA;EACA,qBAAA;EACA,2BAAA;AADJ;AAGI;EACI,cAAA;EACA,0BAAA;AADR;;AAKA;EACI,kBAAA;EACA,aAAA;AAFJ;;AAKA;EACI,aAAA;AAFJ;;AAKA;EACI,gBAAA;EACA,oBAAA;AAFJ;;AAKA;EACI,UAAA;EACA,oBAAA;AAFJ;;AAKA;EACI,iBAAA;EACA,qBAAA;EACA,gBAAA;EACA,WAAA;EACA,eAAA;EACA,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,kBAAA;AAFJ;;AAKA;EACI,qBAAA;AAFJ","sourcesContent":[".Login {\n    width: 100%;\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.section {\n    width: 100%;\n    max-width: 450px;\n    min-height: 450px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 2rem;\n    border-radius: 2rem;\n    border: 0.2rem solid var(--text-dark);\n    background-color: var(--text-light);\n    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);\n}\n\n.form {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.label {\n    width: 100%;\n    font-size: 1.2rem;\n    font-weight: 600;\n    margin-bottom: 0.5rem;\n    color: var(--text-dark);\n}\n\n.input {\n    width: 100%;\n    padding: 0.75rem;\n    font-size: 1.1rem;\n    border-radius: 0.5rem;\n    border: 0.1rem solid var(--text-dark);\n    background-color: #f7f7f7;\n    margin-bottom: 1.5rem;\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);\n}\n\n.disabled {\n    background-color: #f0f0f0;\n    color: #a0a0a0;\n    cursor: not-allowed;\n}\n\n.button {\n    width: 100%;\n    padding: 0.75rem;\n    font-size: 1.2rem;\n    border: none;\n    border-radius: 0.5rem;\n    background-color: var(--btn-color);\n    color: #fff;\n    font-weight: 600;\n    text-align: center;\n    transition: background-color 0.3s ease;\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n    \n    &:hover {\n        background-color: var(--btn-color);\n        cursor: pointer;\n    }\n}\n\n.errmsg {\n    background-color: lightpink;\n    color: firebrick;\n    font-weight: bold;\n    padding: 0.75rem;\n    margin-bottom: 1rem;\n    border-radius: 0.5rem;\n    width: 100%;\n    text-align: center;\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n}\n\n.togglePara {\n    text-align: center;\n    font-size: 1rem;\n    margin-top: 1rem;\n    color: var(--text-dark);\n\n    .line {\n        display: inline-block;\n        margin-top: 0.5rem;\n    }\n}\n\n.a, .a:visited {\n    color: navy;\n    font-weight: 600;\n    text-decoration: none;\n    transition: color 0.3s ease;\n    \n    &:hover {\n        color: darken(navy, 10%);\n        text-decoration: underline;\n    }\n}\n\n.offscreen {\n    position: absolute;\n    left: -9999px;\n}\n\n.hide {\n    display: none;\n}\n\n.valid {\n    color: limegreen;\n    margin-left: 0.25rem;\n}\n\n.invalid {\n    color: red;\n    margin-left: 0.25rem;\n}\n\n.instructions {\n    font-size: 0.9rem;\n    border-radius: 0.5rem;\n    background: #000;\n    color: #fff;\n    padding: 0.5rem;\n    position: relative;\n    bottom: -10px;\n    margin-bottom: 1rem;\n    text-align: center;\n}\n\n.instructions > svg {\n    margin-right: 0.25rem;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"Login": `Cm2NqSQYe8HgmmTb0hKQ`,
	"section": `ezzqWhyjafzLobjTxKvN`,
	"form": `Q7lalbpQ0P96QaVlILom`,
	"label": `ReMmHGnawzd9hmr1fwVA`,
	"input": `NPmqIZEoOZvOJwwkCWoP`,
	"disabled": `YhdF101ZgT3DfSqwebrq`,
	"button": `UT8Z2N1fiZTOLkSvByyt`,
	"errmsg": `Iis1HDlhi8z1QEliSCTH`,
	"togglePara": `qw2ThsCNur9t1Nr4VQFB`,
	"line": `M_68A33V2MtFkAHRM_td`,
	"a": `aINFe_lpRHBUc8CvPw5B`,
	"offscreen": `TtMUi1H2qf1QXivbUlCO`,
	"hide": `bzmmQobqr_mvKKGmdTub`,
	"valid": `VYkdqm295yp3kMQAt608`,
	"invalid": `zs9EUPz_kutjYPnjcr0Q`,
	"instructions": `VhPfie1lquL3ClqLcdBf`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/MathBanner/MathBanner.module.scss":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/MathBanner/MathBanner.module.scss ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./public/img/cap-walking-spritesheet.png */ "./public/img/cap-walking-spritesheet.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.C9iTKzBkfQ_XoOfM2AYv {
  background-color: white;
  height: 60vh;
  width: 100%;
  overflow-x: hidden;
  position: relative;
}
.C9iTKzBkfQ_XoOfM2AYv .J71UrRJzJj8OHGdEfkuW {
  position: absolute;
  right: 5rem;
  top: -5rem;
  font-size: 30rem;
}
.C9iTKzBkfQ_XoOfM2AYv .ys8QjMWtAHHOUprjAuNO {
  color: rgba(128, 128, 128, 0.734);
  position: absolute;
  right: 5rem;
  top: 17rem;
  font-size: 10rem;
  line-height: -5rem;
}
.C9iTKzBkfQ_XoOfM2AYv .b6rBmUpI6aqwO63vjPQA {
  width: 25rem;
  height: 27rem;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-repeat: no-repeat;
  background-size: 80rem 80rem;
  animation: mjjynLv_xOeQIi61xPhW 1s steps(1) infinite, WXSnQLZX1ooRkvktGjwc 10s linear infinite;
  position: absolute;
  top: 72%;
  transform: translateY(-50%);
}
@keyframes mjjynLv_xOeQIi61xPhW {
  0% {
    background-position: -5rem -5rem;
  }
  25% {
    background-position: -45rem -5rem;
  }
  50% {
    background-position: -5rem -45rem;
  }
  75% {
    background-position: -45rem -5rem;
  }
  100% {
    background-position: -5rem -5rem;
  }
}
@keyframes WXSnQLZX1ooRkvktGjwc {
  0% {
    left: -20%;
  }
  100% {
    left: 100%;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (max-width: 500px) {
  .C9iTKzBkfQ_XoOfM2AYv {
    height: 35vh;
  }
  .C9iTKzBkfQ_XoOfM2AYv .J71UrRJzJj8OHGdEfkuW {
    right: 2rem;
    top: -2rem;
    font-size: 15rem;
  }
  .C9iTKzBkfQ_XoOfM2AYv .ys8QjMWtAHHOUprjAuNO {
    right: 2rem;
    top: 9rem;
    font-size: 5rem;
  }
  .C9iTKzBkfQ_XoOfM2AYv .b6rBmUpI6aqwO63vjPQA {
    top: 52%;
  }
}`, "",{"version":3,"sources":["webpack://./src/components/MathBanner/MathBanner.module.scss"],"names":[],"mappings":"AAAA;EACI,uBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,kBAAA;AACJ;AAAI;EACI,kBAAA;EACA,WAAA;EACA,UAAA;EACA,gBAAA;AAER;AAAI;EACI,iCAAA;EACA,kBAAA;EACA,WAAA;EACA,UAAA;EACA,gBAAA;EACA,kBAAA;AAER;AAAI;EACI,YAAA;EACA,aAAA;EACA,yDAAA;EACA,4BAAA;EACA,4BAAA;EACA,8FAAA;EACA,kBAAA;EACA,QAAA;EACA,2BAAA;AAER;AACI;EACI;IAAK,gCAAA;EAEX;EADM;IAAM,iCAAA;EAIZ;EAHM;IAAM,iCAAA;EAMZ;EALM;IAAM,iCAAA;EAQZ;EAPM;IAAO,gCAAA;EAUb;AACF;AARI;EACI;IAAK,UAAA;EAWX;EAVM;IAAO,UAAA;EAab;AACF;;AAVA,oEAAA;AACA;EACI;IACI,YAAA;EAaN;EAZM;IACI,WAAA;IACA,UAAA;IACA,gBAAA;EAcV;EAZM;IACI,WAAA;IACA,SAAA;IACA,eAAA;EAcV;EAZM;IACI,QAAA;EAcV;AACF","sourcesContent":[".mathBannerContainer {\n    background-color: white;\n    height: 60vh;\n    width: 100%;\n    overflow-x: hidden;\n    position: relative;\n    .title {\n        position: absolute;\n        right: 5rem;\n        top: -5rem;\n        font-size: 30rem;\n    }\n    .subTitle {\n        color: rgba(128, 128, 128, 0.734);\n        position: absolute;\n        right: 5rem;\n        top: 17rem;\n        font-size: 10rem;\n        line-height: -5rem;\n    }\n    .spritesheet {\n        width: 25rem;\n        height: 27rem;\n        background-image: url('/Users/tylerpierson/software_projects/class-website/public/img/cap-walking-spritesheet.png');\n        background-repeat: no-repeat;\n        background-size: 80rem 80rem;\n        animation: play 1s steps(1) infinite, slide 10s linear infinite;\n        position: absolute;\n        top: 72%;\n        transform: translateY(-50%);\n    }\n     \n    @keyframes play {\n        0% { background-position: -5rem -5rem; }\n        25% { background-position: -45rem -5rem; }\n        50% { background-position: -5rem -45rem; }\n        75% { background-position: -45rem -5rem; }\n        100% { background-position: -5rem -5rem; }\n    }\n\n    @keyframes slide {\n        0% { left: -20%; }\n        100% { left: 100%; }\n    }\n}\n\n/* Small devices (portrait tablets and large phones, 600px and up) */\n@media only screen and (max-width: 500px) {\n    .mathBannerContainer {\n        height: 35vh;\n        .title {\n            right: 2rem;\n            top: -2rem;\n            font-size: 15rem;\n        }\n        .subTitle {\n            right: 2rem;\n            top: 9rem;\n            font-size: 5rem;\n        }\n        .spritesheet {\n            top: 52%;\n        }\n    }\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"mathBannerContainer": `C9iTKzBkfQ_XoOfM2AYv`,
	"title": `J71UrRJzJj8OHGdEfkuW`,
	"subTitle": `ys8QjMWtAHHOUprjAuNO`,
	"spritesheet": `b6rBmUpI6aqwO63vjPQA`,
	"play": `mjjynLv_xOeQIi61xPhW`,
	"slide": `WXSnQLZX1ooRkvktGjwc`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/MathContainer/MathContainer.module.scss":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/MathContainer/MathContainer.module.scss ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.Mj60_QpFSZNphixQDlWN {
  width: 75%;
  margin: 0 auto;
  padding: 5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.Mj60_QpFSZNphixQDlWN .SsJwmzlYv5rOvmxhmcru {
  font-size: 8.5rem;
  font-weight: 600;
  color: var(--btn-color);
}
.Mj60_QpFSZNphixQDlWN .FdvM7WdL1mlZXivXvQP1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
}
.Mj60_QpFSZNphixQDlWN .FdvM7WdL1mlZXivXvQP1 .gKbU8hO2tz3IUJTkr5gH {
  width: 90%;
}
.Mj60_QpFSZNphixQDlWN .FdvM7WdL1mlZXivXvQP1 .gKbU8hO2tz3IUJTkr5gH .e7BVKiMwLGPtyJPfTsne {
  text-align: left;
}
.Mj60_QpFSZNphixQDlWN .PJrojtPFSh5A9FSsfIz2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
}
.Mj60_QpFSZNphixQDlWN .mBIozkOVZk7oXIFS5D2j {
  width: 90%;
  height: 35vh;
  background-color: #303030;
  padding: 1.5rem;
  margin-bottom: 3rem;
  border-radius: 0.5rem;
  transition: 0.4s ease;
}
.Mj60_QpFSZNphixQDlWN .mBIozkOVZk7oXIFS5D2j .oyE_k0Sfle8nXUf4makM {
  margin: 1rem;
  font-size: 2rem;
  color: white;
}
.Mj60_QpFSZNphixQDlWN .mBIozkOVZk7oXIFS5D2j .gJxTIDoM5wFilA2ZKggV {
  padding: auto;
}
.Mj60_QpFSZNphixQDlWN .mBIozkOVZk7oXIFS5D2j .gJxTIDoM5wFilA2ZKggV .dRXFVF7iXYDbEbPRZNkJ {
  font-size: 1.3rem;
  color: white;
  font-weight: bold;
}
.Mj60_QpFSZNphixQDlWN .mBIozkOVZk7oXIFS5D2j .gJxTIDoM5wFilA2ZKggV .aQkCXG61jvhhfIxx78ch {
  list-style-type: none;
  font-size: 1.3rem;
  color: rgb(183, 183, 183);
  margin: 0 2rem;
  line-height: 2rem;
}
.Mj60_QpFSZNphixQDlWN .mBIozkOVZk7oXIFS5D2j .gJxTIDoM5wFilA2ZKggV .i_NDLX4xBusc1REEkBY3 {
  text-decoration: none;
  color: var(--btn-color);
  font-size: 1.3rem;
}
.Mj60_QpFSZNphixQDlWN .mBIozkOVZk7oXIFS5D2j .gJxTIDoM5wFilA2ZKggV .i_NDLX4xBusc1REEkBY3:hover {
  text-decoration: underline;
}
.Mj60_QpFSZNphixQDlWN .mBIozkOVZk7oXIFS5D2j .gJxTIDoM5wFilA2ZKggV .CPwzmOfE8Y7FRdZCNT0A {
  width: 30%;
}
.Mj60_QpFSZNphixQDlWN .mBIozkOVZk7oXIFS5D2j .vX4BjDRMtZqe_NsK1DRw {
  font-size: 1vw;
  margin: 1rem;
  color: darkgrey;
}
.Mj60_QpFSZNphixQDlWN .mBIozkOVZk7oXIFS5D2j:hover .oyE_k0Sfle8nXUf4makM {
  transform: scale(1.05);
  color: var(--heading-color);
  transition: 0.4s ease;
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (max-width: 800px) {
  .Mj60_QpFSZNphixQDlWN {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .Mj60_QpFSZNphixQDlWN .FdvM7WdL1mlZXivXvQP1 {
    width: 100%;
  }
  .Mj60_QpFSZNphixQDlWN .FdvM7WdL1mlZXivXvQP1 .gKbU8hO2tz3IUJTkr5gH {
    width: 90%;
  }
  .Mj60_QpFSZNphixQDlWN .FdvM7WdL1mlZXivXvQP1 .gKbU8hO2tz3IUJTkr5gH .e7BVKiMwLGPtyJPfTsne {
    text-align: left;
  }
  .Mj60_QpFSZNphixQDlWN .PJrojtPFSh5A9FSsfIz2 {
    width: 100%;
  }
}`, "",{"version":3,"sources":["webpack://./src/components/MathContainer/MathContainer.module.scss"],"names":[],"mappings":"AAAA;EACI,UAAA;EACA,cAAA;EACA,eAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;AACJ;AAAI;EACI,iBAAA;EACA,gBAAA;EACA,uBAAA;AAER;AAAI;EACI,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,UAAA;AAER;AADQ;EACI,UAAA;AAGZ;AAFY;EACI,gBAAA;AAIhB;AAAI;EACI,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,UAAA;AAER;AAAI;EACI,UAAA;EACA,YAAA;EACA,yBAAA;EACA,eAAA;EACA,mBAAA;EACA,qBAAA;EACA,qBAAA;AAER;AADQ;EACI,YAAA;EACA,eAAA;EACA,YAAA;AAGZ;AADQ;EACI,aAAA;AAGZ;AAFY;EACI,iBAAA;EACA,YAAA;EACA,iBAAA;AAIhB;AAFY;EACI,qBAAA;EACA,iBAAA;EACA,yBAAA;EACA,cAAA;EACA,iBAAA;AAIhB;AAFY;EACI,qBAAA;EACA,uBAAA;EACA,iBAAA;AAIhB;AAHgB;EACI,0BAAA;AAKpB;AAFY;EACI,UAAA;AAIhB;AADQ;EACI,cAAA;EACA,YAAA;EACA,eAAA;AAGZ;AADQ;EACI,sBAAA;EACA,2BAAA;EACA,qBAAA;AAGZ;;AAEA,oEAAA;AACA;EACI;IACI,aAAA;IACA,sBAAA;IACA,uBAAA;EACN;EAAM;IACI,WAAA;EAEV;EADU;IACI,UAAA;EAGd;EAFc;IACI,gBAAA;EAIlB;EAAM;IACI,WAAA;EAEV;AACF","sourcesContent":[".mathContainerMain {\n    width: 75%;\n    margin: 0 auto;\n    padding: 5rem 0;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    .mathHeader {\n        font-size: 8.5rem;\n        font-weight: 600;\n        color: var(--btn-color);\n    }\n    .mathContainerLeft {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        width: 50%;\n        .headingSMContainer {\n            width: 90%;\n            .headingSM {\n                text-align: left;\n            }\n        }\n    }\n    .mathContainerRight {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        width: 50%;\n    }\n    .mathCard {\n        width: 90%;\n        height: 35vh;\n        background-color: #303030;\n        padding: 1.5rem;\n        margin-bottom: 3rem;\n        border-radius: .5rem;\n        transition: .4s ease;\n        .mathTitle {\n            margin: 1rem;\n            font-size: 2rem;\n            color: white;\n        }\n        .mathList {\n            padding: auto;\n            .span {\n                font-size: 1.3rem;\n                color: white;\n                font-weight: bold;\n            }\n            .mathListItem {\n                list-style-type: none;\n                font-size: 1.3rem;\n                color: rgb(183, 183, 183);\n                margin: 0 2rem;\n                line-height: 2rem;\n            }\n            .link {\n                text-decoration: none;\n                color: var(--btn-color);\n                font-size: 1.3rem;\n                &:hover {\n                    text-decoration: underline;\n                }\n            }\n            .img {\n                width: 30%;\n            }\n        }\n        .mathDescription {\n            font-size: 1vw;\n            margin: 1rem;\n            color: darkgrey;\n        }\n        &:hover .mathTitle {\n            transform: scale(1.05);\n            color: var(--heading-color);\n            transition: .4s ease;\n        }\n    }\n}\n\n/* Small devices (portrait tablets and large phones, 600px and up) */\n@media only screen and (max-width: 800px) {\n    .mathContainerMain {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        .mathContainerLeft {\n            width: 100%;\n            .headingSMContainer {\n                width: 90%;\n                .headingSM {\n                    text-align: left;\n                }\n            }\n        }\n        .mathContainerRight {\n            width: 100%;\n        }\n    }\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"mathContainerMain": `Mj60_QpFSZNphixQDlWN`,
	"mathHeader": `SsJwmzlYv5rOvmxhmcru`,
	"mathContainerLeft": `FdvM7WdL1mlZXivXvQP1`,
	"headingSMContainer": `gKbU8hO2tz3IUJTkr5gH`,
	"headingSM": `e7BVKiMwLGPtyJPfTsne`,
	"mathContainerRight": `PJrojtPFSh5A9FSsfIz2`,
	"mathCard": `mBIozkOVZk7oXIFS5D2j`,
	"mathTitle": `oyE_k0Sfle8nXUf4makM`,
	"mathList": `gJxTIDoM5wFilA2ZKggV`,
	"span": `dRXFVF7iXYDbEbPRZNkJ`,
	"mathListItem": `aQkCXG61jvhhfIxx78ch`,
	"link": `i_NDLX4xBusc1REEkBY3`,
	"img": `CPwzmOfE8Y7FRdZCNT0A`,
	"mathDescription": `vX4BjDRMtZqe_NsK1DRw`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/NavBar/NavBar.module.scss":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/NavBar/NavBar.module.scss ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.SLZXaJInmBusSKJAiC7A {
  width: 100%;
  height: 10vh;
  display: flex;
  position: relative;
  top: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.6);
  overflow: hidden;
  transition: top 0.3s ease;
}
.SLZXaJInmBusSKJAiC7A.pGuXSjiAF9ReSU4SwCSk {
  top: -10vh;
  transition: top 0.3s ease;
}
.SLZXaJInmBusSKJAiC7A .Ycc7rx7800IPJaI2UyOo {
  position: absolute;
  top: -11rem;
  width: 30rem;
}
.SLZXaJInmBusSKJAiC7A .VhefOyE6KqL2INmTvax_ {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.SLZXaJInmBusSKJAiC7A .VhefOyE6KqL2INmTvax_ .d5W5tH4_HJzaNgJisxUZ {
  height: 100%;
  width: 7vw;
  margin-left: 1rem;
  position: relative;
}
.SLZXaJInmBusSKJAiC7A .VhefOyE6KqL2INmTvax_ .d5W5tH4_HJzaNgJisxUZ .Pz11EiSX3_AGfrJf0fNN, .SLZXaJInmBusSKJAiC7A .VhefOyE6KqL2INmTvax_ .d5W5tH4_HJzaNgJisxUZ .m1LCCj_QuSJwZkEwY670 {
  list-style-type: none;
  text-decoration: none;
  color: white;
  position: absolute;
  width: 100%;
  text-align: center;
  transition: transform 0.3s ease;
}
.SLZXaJInmBusSKJAiC7A .VhefOyE6KqL2INmTvax_ .d5W5tH4_HJzaNgJisxUZ .Pz11EiSX3_AGfrJf0fNN {
  top: 50%;
  transform: translateY(-50%);
  transition: 0.5s ease;
}
.SLZXaJInmBusSKJAiC7A .VhefOyE6KqL2INmTvax_ .d5W5tH4_HJzaNgJisxUZ .m1LCCj_QuSJwZkEwY670 {
  top: 50%;
  transform: translateY(50%);
  opacity: 0;
  transition: 0.5s ease;
}
.SLZXaJInmBusSKJAiC7A .VhefOyE6KqL2INmTvax_ .d5W5tH4_HJzaNgJisxUZ:hover {
  cursor: pointer;
}
.SLZXaJInmBusSKJAiC7A .VhefOyE6KqL2INmTvax_ .d5W5tH4_HJzaNgJisxUZ:hover .Pz11EiSX3_AGfrJf0fNN {
  transform: translateY(-150%);
  opacity: 0;
  transition: 0.5s ease;
}
.SLZXaJInmBusSKJAiC7A .VhefOyE6KqL2INmTvax_ .d5W5tH4_HJzaNgJisxUZ:hover .m1LCCj_QuSJwZkEwY670 {
  transform: translateY(-50%);
  opacity: 1;
  transition: 0.5s ease;
  color: var(--btn-color);
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (max-width: 1000px) {
  .SLZXaJInmBusSKJAiC7A {
    display: none;
  }
}`, "",{"version":3,"sources":["webpack://./src/components/NavBar/NavBar.module.scss"],"names":[],"mappings":"AAAA;EACI,WAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,MAAA;EACA,aAAA;EACA,oCAAA;EACA,gBAAA;EACA,yBAAA;AACJ;AACI;EACI,UAAA;EACA,yBAAA;AACR;AAEI;EACI,kBAAA;EACA,WAAA;EACA,YAAA;AAAR;AAGI;EACI,WAAA;EACA,YAAA;EACA,aAAA;EACA,yBAAA;EACA,mBAAA;AADR;AAGQ;EACI,YAAA;EACA,UAAA;EACA,iBAAA;EACA,kBAAA;AADZ;AAGY;EACI,qBAAA;EACA,qBAAA;EACA,YAAA;EACA,kBAAA;EACA,WAAA;EACA,kBAAA;EACA,+BAAA;AADhB;AAIY;EACI,QAAA;EACA,2BAAA;EACA,qBAAA;AAFhB;AAKY;EACI,QAAA;EACA,0BAAA;EACA,UAAA;EACA,qBAAA;AAHhB;AAMY;EACI,eAAA;AAJhB;AAMgB;EACI,4BAAA;EACA,UAAA;EACA,qBAAA;AAJpB;AAOgB;EACI,2BAAA;EACA,UAAA;EACA,qBAAA;EACA,uBAAA;AALpB;;AAYA,oEAAA;AACA;EACI;IACI,aAAA;EATN;AACF","sourcesContent":[".Nav {\n    width: 100%;\n    height: 10vh;\n    display: flex;\n    position: relative;\n    top: 0;\n    z-index: 1000;\n    background-color: rgba(0, 0, 0, .6);\n    overflow: hidden;\n    transition: top 0.3s ease;\n\n    &.hidden {\n        top: -10vh;\n        transition: top 0.3s ease;\n    }\n\n    .image {\n        position: absolute;\n        top: -11rem;\n        width: 30rem;\n    }\n\n    .ul {\n        width: 100%;\n        height: 100%;\n        display: flex;\n        justify-content: flex-end;\n        align-items: center;\n\n        .listItemContainer {\n            height: 100%;\n            width: 7vw;\n            margin-left: 1rem;\n            position: relative;\n\n            .navItemTop, .navItemBottom {\n                list-style-type: none;\n                text-decoration: none;\n                color: white;\n                position: absolute;\n                width: 100%;\n                text-align: center;\n                transition: transform 0.3s ease;\n            }\n\n            .navItemTop {\n                top: 50%;\n                transform: translateY(-50%);\n                transition: .5s ease;\n            }\n\n            .navItemBottom {\n                top: 50%;\n                transform: translateY(50%);\n                opacity: 0;\n                transition: .5s ease;\n            }\n\n            &:hover {\n                cursor: pointer;\n\n                .navItemTop {\n                    transform: translateY(-150%);\n                    opacity: 0;\n                    transition: .5s ease;\n                }\n\n                .navItemBottom {\n                    transform: translateY(-50%);\n                    opacity: 1;\n                    transition: .5s ease;\n                    color: var(--btn-color);\n                }\n            }\n        }\n    }\n}\n\n/* Small devices (portrait tablets and large phones, 600px and up) */\n@media only screen and (max-width: 1000px) {\n    .Nav {\n        display: none;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"Nav": `SLZXaJInmBusSKJAiC7A`,
	"hidden": `pGuXSjiAF9ReSU4SwCSk`,
	"image": `Ycc7rx7800IPJaI2UyOo`,
	"ul": `VhefOyE6KqL2INmTvax_`,
	"listItemContainer": `d5W5tH4_HJzaNgJisxUZ`,
	"navItemTop": `Pz11EiSX3_AGfrJf0fNN`,
	"navItemBottom": `m1LCCj_QuSJwZkEwY670`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/NavMobile/NavMobile.module.scss":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/NavMobile/NavMobile.module.scss ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.lksBUiCZFQPLTfIjYUCV {
  display: none;
}

.m7VesjHTKRTSgCNfxrfL {
  display: none;
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (max-width: 1000px) {
  .lksBUiCZFQPLTfIjYUCV {
    display: block;
    color: white;
    text-align: right;
    padding: 2rem;
  }
  .lksBUiCZFQPLTfIjYUCV .mQtM4whzNm6xQg_5eBGe {
    z-index: 2000;
    width: 5rem;
    height: 5rem;
    border: none;
    border-radius: 100%;
    position: fixed;
    top: 2rem;
    right: 2rem;
  }
  .lksBUiCZFQPLTfIjYUCV .mQtM4whzNm6xQg_5eBGe span {
    display: inline-block;
    font-size: 3rem;
    position: absolute;
    transform-origin: center;
  }
  .lksBUiCZFQPLTfIjYUCV .mQtM4whzNm6xQg_5eBGe .QuSOlzfevnGJDhi4YX_s {
    top: 0.3rem;
    left: 2.4rem;
    transform: rotate(90deg);
  }
  .lksBUiCZFQPLTfIjYUCV .mQtM4whzNm6xQg_5eBGe .vB3kggoOlX1C1rRpsLQ6 {
    animation: vB3kggoOlX1C1rRpsLQ6 5s forwards;
  }
  .lksBUiCZFQPLTfIjYUCV .mQtM4whzNm6xQg_5eBGe .y4DcVFf0ebzeeDOPzmPS {
    animation: y4DcVFf0ebzeeDOPzmPS 5s backwards;
  }
  .lksBUiCZFQPLTfIjYUCV .mQtM4whzNm6xQg_5eBGe .o7qGaQg2UJbI3R_ILi8I {
    top: 0.9rem;
    left: 2.4rem;
    transform: rotate(90deg);
  }
  .lksBUiCZFQPLTfIjYUCV .mQtM4whzNm6xQg_5eBGe .YCnz0eud1qEAAv9Y49wW {
    animation: YCnz0eud1qEAAv9Y49wW 1.5s forwards;
  }
  .lksBUiCZFQPLTfIjYUCV .mQtM4whzNm6xQg_5eBGe .dEYlGC3ncOzj03rbIaYz {
    animation: dEYlGC3ncOzj03rbIaYz 5s backwards;
  }
  .lksBUiCZFQPLTfIjYUCV .mQtM4whzNm6xQg_5eBGe .xPSKr2cPfMg2cmJaBcqF {
    top: 1.3rem;
    left: 1.8rem;
    transform: rotate(-90deg);
  }
  .lksBUiCZFQPLTfIjYUCV .mQtM4whzNm6xQg_5eBGe .c1Fldc9kfZjKz92ggudg {
    animation: c1Fldc9kfZjKz92ggudg 5s forwards;
  }
  .lksBUiCZFQPLTfIjYUCV .mQtM4whzNm6xQg_5eBGe .siNp7y8LcjSI_4BB0YO2 {
    animation: siNp7y8LcjSI_4BB0YO2 5s backwards;
  }
  .m7VesjHTKRTSgCNfxrfL {
    position: fixed;
    display: block;
    top: 2rem;
    right: 2rem;
    width: 5rem;
    height: 5rem;
    border-radius: 100%;
    border: none;
    z-index: 1000;
    background-color: rgba(100, 237, 207, 0.9);
    overflow: hidden;
    transition: width 0.3s, height 0.3s;
  }
  .LAxFiZWZmQlaaqJAMk4J {
    display: none;
  }
  .DvGKNPsuqDyxZDn7CWSQ {
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    border-radius: 0%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .DvGKNPsuqDyxZDn7CWSQ .LAxFiZWZmQlaaqJAMk4J {
    display: block;
    text-decoration: none;
  }
  .DvGKNPsuqDyxZDn7CWSQ .LAxFiZWZmQlaaqJAMk4J .vWBFW9dgoy2HsuBJ62zC {
    text-decoration: none;
    color: black;
  }
  .DvGKNPsuqDyxZDn7CWSQ .LAxFiZWZmQlaaqJAMk4J .c6nVZZUwtb5ZjSC5zOF4 {
    text-decoration: none;
    list-style-type: none;
    font-size: 4rem;
    transition: 0.3s ease;
  }
  .DvGKNPsuqDyxZDn7CWSQ .LAxFiZWZmQlaaqJAMk4J .c6nVZZUwtb5ZjSC5zOF4:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.3);
    transition: 0.3s ease;
    color: white;
  }
  .okLjs1ihh9Oby_1MzKDZ {
    width: 5rem;
    height: 5rem;
  }
}
@keyframes vB3kggoOlX1C1rRpsLQ6 {
  from {
    transform: rotate(90deg);
    top: 0.3rem;
    left: 2.4rem;
    font-size: 3rem;
  }
  to {
    transform: rotate(-50deg);
    top: -0.2rem;
    left: 1.8rem;
    font-size: 4rem;
  }
}
@keyframes y4DcVFf0ebzeeDOPzmPS {
  from {
    transform: rotate(-50deg);
    top: -0.2rem;
    left: 1.8rem;
    font-size: 4rem;
  }
  to {
    transform: rotate(90deg);
    top: 0.3rem;
    left: 2.4rem;
    font-size: 3rem;
  }
}
@keyframes YCnz0eud1qEAAv9Y49wW {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes dEYlGC3ncOzj03rbIaYz {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes c1Fldc9kfZjKz92ggudg {
  from {
    transform: rotate(-90deg);
    top: 1.3rem;
    left: 1.8rem;
    font-size: 3rem;
  }
  to {
    transform: rotate(45deg);
    top: -0.1rem;
    left: 2.2rem;
    font-size: 4rem;
  }
}
@keyframes siNp7y8LcjSI_4BB0YO2 {
  from {
    transform: rotate(45deg);
    top: -0.2rem;
    left: 2.2rem;
    font-size: 4rem;
  }
  to {
    transform: rotate(-90deg);
    top: 1.3rem;
    left: 1.8rem;
    font-size: 3rem;
  }
}`, "",{"version":3,"sources":["webpack://./src/components/NavMobile/NavMobile.module.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;AACJ;;AAEA;EACI,aAAA;AACJ;;AAEA,oEAAA;AACA;EACI;IACI,cAAA;IACA,YAAA;IACA,iBAAA;IACA,aAAA;EACN;EAAM;IACI,aAAA;IACA,WAAA;IACA,YAAA;IACA,YAAA;IACA,mBAAA;IACA,eAAA;IACA,SAAA;IACA,WAAA;EAEV;EAAU;IACI,qBAAA;IACA,eAAA;IACA,kBAAA;IACA,wBAAA;EAEd;EACU;IACI,WAAA;IACA,YAAA;IACA,wBAAA;EACd;EAEU;IACI,2CAAA;EAAd;EAGU;IACI,4CAAA;EADd;EAIU;IACI,WAAA;IACA,YAAA;IACA,wBAAA;EAFd;EAKU;IACI,6CAAA;EAHd;EAMU;IACI,4CAAA;EAJd;EAOU;IACI,WAAA;IACA,YAAA;IACA,yBAAA;EALd;EAQU;IACI,2CAAA;EANd;EASU;IACI,4CAAA;EAPd;EAYE;IACI,eAAA;IACA,cAAA;IACA,SAAA;IACA,WAAA;IACA,WAAA;IACA,YAAA;IACA,mBAAA;IACA,YAAA;IACA,aAAA;IACA,0CAAA;IACA,gBAAA;IACA,mCAAA;EAVN;EAaE;IACI,aAAA;EAXN;EAcE;IACI,WAAA;IACA,YAAA;IACA,MAAA;IACA,QAAA;IACA,iBAAA;IACA,aAAA;IACA,sBAAA;IACA,uBAAA;IACA,mBAAA;EAZN;EAaM;IACI,cAAA;IACA,qBAAA;EAXV;EAYU;IACI,qBAAA;IACA,YAAA;EAVd;EAYU;IACI,qBAAA;IACA,qBAAA;IACA,eAAA;IACA,qBAAA;EAVd;EAWc;IACI,eAAA;IACA,oCAAA;IACA,qBAAA;IACA,YAAA;EATlB;EAeE;IACI,WAAA;IACA,YAAA;EAbN;AACF;AAgBA;EACI;IACI,wBAAA;IACA,WAAA;IACA,YAAA;IACA,eAAA;EAdN;EAiBE;IACI,yBAAA;IACA,YAAA;IACA,YAAA;IACA,eAAA;EAfN;AACF;AAkBA;EACI;IACI,yBAAA;IACA,YAAA;IACA,YAAA;IACA,eAAA;EAhBN;EAmBE;IACI,wBAAA;IACA,WAAA;IACA,YAAA;IACA,eAAA;EAjBN;AACF;AAoBA;EACI;IACI,UAAA;EAlBN;EAqBE;IACI,UAAA;EAnBN;AACF;AAsBA;EACI;IACI,UAAA;EApBN;EAuBE;IACI,UAAA;EArBN;AACF;AAwBA;EACI;IACI,yBAAA;IACA,WAAA;IACA,YAAA;IACA,eAAA;EAtBN;EAyBE;IACI,wBAAA;IACA,YAAA;IACA,YAAA;IACA,eAAA;EAvBN;AACF;AA0BA;EACI;IACI,wBAAA;IACA,YAAA;IACA,YAAA;IACA,eAAA;EAxBN;EA2BE;IACI,yBAAA;IACA,WAAA;IACA,YAAA;IACA,eAAA;EAzBN;AACF","sourcesContent":[".NavMobile {\n    display: none;\n}\n\n.NavContainer {\n    display: none;\n}\n\n/* Small devices (portrait tablets and large phones, 600px and up) */\n@media only screen and (max-width: 1000px) {\n    .NavMobile {\n        display: block;\n        color: white;\n        text-align: right;\n        padding: 2rem;\n        .NavBtn {\n            z-index: 2000;\n            width: 5rem;\n            height: 5rem;\n            border: none;\n            border-radius: 100%;\n            position: fixed;\n            top: 2rem;\n            right: 2rem;\n\n            span {\n                display: inline-block;\n                font-size: 3rem;\n                position: absolute;\n                transform-origin: center;\n            }\n\n            .NavBtnTop {\n                top: .3rem;\n                left: 2.4rem;\n                transform: rotate(90deg);\n            }\n\n            .rotateTop {\n                animation: rotateTop 5s forwards;\n            }\n\n            .revertTop {\n                animation: revertTop 5s backwards;\n            }\n\n            .NavBtnMid {\n                top: .9rem;\n                left: 2.4rem;\n                transform: rotate(90deg);\n            }\n\n            .fadeOut {\n                animation: fadeOut 1.5s forwards;\n            }\n\n            .fadeIn {\n                animation: fadeIn 5s backwards;\n            }\n            \n            .NavBtnBottom {\n                top: 1.3rem;\n                left: 1.8rem;\n                transform: rotate(-90deg);\n            }\n\n            .rotateBottom {\n                animation: rotateBottom 5s forwards;\n            }\n\n            .revertBottom {\n                animation: revertBottom 5s backwards;\n            }\n        }\n    }\n\n    .NavContainer {\n        position: fixed;\n        display: block;\n        top: 2rem;\n        right: 2rem;\n        width: 5rem;\n        height: 5rem;\n        border-radius: 100%;\n        border: none;\n        z-index: 1000;\n        background-color: rgba(100, 237, 207, .9);;\n        overflow: hidden;\n        transition: width 0.3s, height 0.3s; \n    }\n\n    .ul {\n        display: none;\n    }\n\n    .expandContainer {\n        width: 100%;\n        height: 100%;\n        top: 0;\n        right: 0;\n        border-radius: 0%;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        .ul {\n            display: block;\n            text-decoration: none;\n            .Link {\n                text-decoration: none;\n                color: black;\n            }\n            .li {\n                text-decoration: none;\n                list-style-type: none;\n                font-size: 4rem;\n                transition: .3s ease;\n                &:hover {\n                    cursor: pointer;\n                    background-color: rgba(0, 0, 0, .3);\n                    transition: .3s ease;\n                    color: white;\n                }\n            }\n        }\n    }\n\n    .collapseContainer {\n        width: 5rem;\n        height: 5rem;\n    }\n}\n\n@keyframes rotateTop {\n    from {\n        transform: rotate(90deg);\n        top: .3rem;\n        left: 2.4rem;\n        font-size: 3rem;\n    }\n  \n    to {\n        transform: rotate(-50deg);\n        top: -.2rem;\n        left: 1.8rem;\n        font-size: 4rem;\n    }\n}\n\n@keyframes revertTop {\n    from {\n        transform: rotate(-50deg);\n        top: -.2rem;\n        left: 1.8rem;\n        font-size: 4rem;\n    }\n\n    to {\n        transform: rotate(90deg);\n        top: .3rem;\n        left: 2.4rem;\n        font-size: 3rem;\n    }\n}\n\n@keyframes fadeOut {\n    from {\n        opacity: 1;\n    }\n\n    to {\n        opacity: 0;\n    }\n}\n\n@keyframes fadeIn {\n    from {\n        opacity: 0;\n    }\n\n    to {\n        opacity: 1;\n    }\n}\n\n@keyframes rotateBottom {\n    from {\n        transform: rotate(-90deg);\n        top: 1.3rem;\n        left: 1.8rem;\n        font-size: 3rem;\n    }\n  \n    to {\n        transform: rotate(45deg);\n        top: -.1rem;\n        left: 2.2rem;\n        font-size: 4rem;\n    }\n}\n\n@keyframes revertBottom {\n    from {\n        transform: rotate(45deg);\n        top: -.2rem;\n        left: 2.2rem;\n        font-size: 4rem;\n    }\n\n    to {\n        transform: rotate(-90deg);\n        top: 1.3rem;\n        left: 1.8rem;\n        font-size: 3rem;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"NavMobile": `lksBUiCZFQPLTfIjYUCV`,
	"NavContainer": `m7VesjHTKRTSgCNfxrfL`,
	"NavBtn": `mQtM4whzNm6xQg_5eBGe`,
	"NavBtnTop": `QuSOlzfevnGJDhi4YX_s`,
	"rotateTop": `vB3kggoOlX1C1rRpsLQ6`,
	"revertTop": `y4DcVFf0ebzeeDOPzmPS`,
	"NavBtnMid": `o7qGaQg2UJbI3R_ILi8I`,
	"fadeOut": `YCnz0eud1qEAAv9Y49wW`,
	"fadeIn": `dEYlGC3ncOzj03rbIaYz`,
	"NavBtnBottom": `xPSKr2cPfMg2cmJaBcqF`,
	"rotateBottom": `c1Fldc9kfZjKz92ggudg`,
	"revertBottom": `siNp7y8LcjSI_4BB0YO2`,
	"ul": `LAxFiZWZmQlaaqJAMk4J`,
	"expandContainer": `DvGKNPsuqDyxZDn7CWSQ`,
	"Link": `vWBFW9dgoy2HsuBJ62zC`,
	"li": `c6nVZZUwtb5ZjSC5zOF4`,
	"collapseContainer": `okLjs1ihh9Oby_1MzKDZ`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/NewsLetter/NewsLetter.module.scss":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/NewsLetter/NewsLetter.module.scss ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.sjnG7tFoUzZblhB5JSTE {
  height: 60vh;
  width: 100%;
  position: relative;
  text-transform: uppercase;
  background-color: rgba(100, 237, 207, 0.075);
  margin-top: 5rem;
}
.sjnG7tFoUzZblhB5JSTE .nfF08vOKSM2yctoHbkqY .dG2iF17CbUyQp6bhgkVY, .sjnG7tFoUzZblhB5JSTE .nfF08vOKSM2yctoHbkqY .QPtT2wL6WLaqU6Aw_ozQ {
  margin: 0 0 0 10rem;
}
.sjnG7tFoUzZblhB5JSTE .nfF08vOKSM2yctoHbkqY .dG2iF17CbUyQp6bhgkVY {
  color: white;
  font-size: 11rem;
}
.sjnG7tFoUzZblhB5JSTE .nfF08vOKSM2yctoHbkqY .dG2iF17CbUyQp6bhgkVY .VqfdyD8AvH6h_hXJYMhW, .sjnG7tFoUzZblhB5JSTE .nfF08vOKSM2yctoHbkqY .dG2iF17CbUyQp6bhgkVY .VFfg427ZH0HoaShyv2eu {
  font-size: 11rem;
}
.sjnG7tFoUzZblhB5JSTE .nfF08vOKSM2yctoHbkqY .dG2iF17CbUyQp6bhgkVY .VqfdyD8AvH6h_hXJYMhW {
  font-weight: 100;
  color: var(--heading-color);
}
.sjnG7tFoUzZblhB5JSTE .nfF08vOKSM2yctoHbkqY .dG2iF17CbUyQp6bhgkVY .VFfg427ZH0HoaShyv2eu {
  color: black;
  font-size: 13rem;
}
.sjnG7tFoUzZblhB5JSTE .nfF08vOKSM2yctoHbkqY .h7Gxd1Ohl39Qr_s1TjUQ {
  margin: 8rem 1rem;
  padding: 0.5rem;
}
.sjnG7tFoUzZblhB5JSTE .QPtT2wL6WLaqU6Aw_ozQ {
  font-size: 3rem;
  color: grey;
  margin-top: 5rem;
  width: 50vw;
}
.sjnG7tFoUzZblhB5JSTE .Il3u8pW4KpUWlUSGkVpM {
  background-color: black;
  width: 30vw;
  position: absolute;
  top: 4rem;
  right: 10rem;
  z-index: -1;
  transform: rotate(7deg);
}
.sjnG7tFoUzZblhB5JSTE .OLbsfs05fb0CWvcS4vUV {
  display: flex;
  width: 100%;
}
.sjnG7tFoUzZblhB5JSTE .OLbsfs05fb0CWvcS4vUV .ItNxmalBSzvQKQeidGDE {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  min-height: 20rem;
  padding: 2rem;
  margin: 5rem 2rem;
  background-color: white;
  border-radius: 3rem;
}
.sjnG7tFoUzZblhB5JSTE .OLbsfs05fb0CWvcS4vUV .ItNxmalBSzvQKQeidGDE .Sp9JJs_qr75rnwhA8j4E {
  font-size: 3rem;
  color: var(--heading-color);
  margin-bottom: 2rem;
}
.sjnG7tFoUzZblhB5JSTE .OLbsfs05fb0CWvcS4vUV .ItNxmalBSzvQKQeidGDE .mk44oMyYbY5PUxafTGfG {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
}
.sjnG7tFoUzZblhB5JSTE .OLbsfs05fb0CWvcS4vUV .ItNxmalBSzvQKQeidGDE .mk44oMyYbY5PUxafTGfG .wpRQZVZdg36WiB6Vn3Tz {
  font-size: 1.5rem;
  color: grey;
}
.sjnG7tFoUzZblhB5JSTE .OLbsfs05fb0CWvcS4vUV .ItNxmalBSzvQKQeidGDE .mk44oMyYbY5PUxafTGfG .rz4tdH_k3MzjqSCKVBeK {
  font-size: 1.5rem;
  color: var(--heading-color);
}
.sjnG7tFoUzZblhB5JSTE .OLbsfs05fb0CWvcS4vUV .xzLWBRGAM6wcLIikYH2J {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  min-height: 20rem;
  padding: 2rem;
  margin: 5rem 2rem;
  background-color: white;
  border-radius: 3rem;
}
.sjnG7tFoUzZblhB5JSTE .OLbsfs05fb0CWvcS4vUV .xzLWBRGAM6wcLIikYH2J .Sp9JJs_qr75rnwhA8j4E {
  font-size: 3rem;
  color: var(--heading-color);
  margin-bottom: 2rem;
}
.sjnG7tFoUzZblhB5JSTE .OLbsfs05fb0CWvcS4vUV .xzLWBRGAM6wcLIikYH2J .WZZkhuCgpyMbsMJoFx3D {
  font-size: 2rem;
  color: grey;
  margin-bottom: 1rem;
}
.sjnG7tFoUzZblhB5JSTE .OLbsfs05fb0CWvcS4vUV .xzLWBRGAM6wcLIikYH2J .JcQxwYFoUUY2pF4dvd8J {
  font-size: 1.5rem;
  color: var(--heading-color);
  margin-bottom: 1rem;
}
.sjnG7tFoUzZblhB5JSTE .OLbsfs05fb0CWvcS4vUV .xzLWBRGAM6wcLIikYH2J .iQX_LoEJAWE1nLfSu4zx {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  line-height: 2rem;
}
.sjnG7tFoUzZblhB5JSTE .OLbsfs05fb0CWvcS4vUV .xzLWBRGAM6wcLIikYH2J .iQX_LoEJAWE1nLfSu4zx .wpRQZVZdg36WiB6Vn3Tz {
  font-size: 1.5rem;
  color: grey;
}
.sjnG7tFoUzZblhB5JSTE .OLbsfs05fb0CWvcS4vUV .xzLWBRGAM6wcLIikYH2J .iQX_LoEJAWE1nLfSu4zx .Q_QB2RMTCujYwWNxhK0N {
  font-size: 1.5rem;
  color: var(--heading-color);
}
.sjnG7tFoUzZblhB5JSTE .OLbsfs05fb0CWvcS4vUV .xzLWBRGAM6wcLIikYH2J .iAo7Ip527TGfLxyOtNWr {
  font-size: 1.5rem;
  color: var(--heading-color);
  margin-bottom: 1rem;
  margin-top: 4rem;
}
.sjnG7tFoUzZblhB5JSTE .OLbsfs05fb0CWvcS4vUV .xzLWBRGAM6wcLIikYH2J .TRcihwLas29lxQhN1VjS {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  line-height: 2rem;
}
.sjnG7tFoUzZblhB5JSTE .OLbsfs05fb0CWvcS4vUV .xzLWBRGAM6wcLIikYH2J .TRcihwLas29lxQhN1VjS .wpRQZVZdg36WiB6Vn3Tz {
  font-size: 1.5rem;
  color: grey;
}
.sjnG7tFoUzZblhB5JSTE .OLbsfs05fb0CWvcS4vUV .xzLWBRGAM6wcLIikYH2J .TRcihwLas29lxQhN1VjS .Q_QB2RMTCujYwWNxhK0N {
  font-size: 1.5rem;
  color: var(--heading-color);
}

/* Medium devices (landscape tablets, 800px and up) */
@media only screen and (max-width: 1220px) {
  .sjnG7tFoUzZblhB5JSTE {
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .sjnG7tFoUzZblhB5JSTE .nfF08vOKSM2yctoHbkqY {
    width: 100%;
    height: 100%;
  }
  .sjnG7tFoUzZblhB5JSTE .nfF08vOKSM2yctoHbkqY .dG2iF17CbUyQp6bhgkVY, .sjnG7tFoUzZblhB5JSTE .nfF08vOKSM2yctoHbkqY .QPtT2wL6WLaqU6Aw_ozQ {
    margin: 0 0 0 5rem;
  }
  .sjnG7tFoUzZblhB5JSTE .nfF08vOKSM2yctoHbkqY .dG2iF17CbUyQp6bhgkVY {
    font-size: 9rem;
  }
  .sjnG7tFoUzZblhB5JSTE .nfF08vOKSM2yctoHbkqY .dG2iF17CbUyQp6bhgkVY .VqfdyD8AvH6h_hXJYMhW, .sjnG7tFoUzZblhB5JSTE .nfF08vOKSM2yctoHbkqY .dG2iF17CbUyQp6bhgkVY .VFfg427ZH0HoaShyv2eu {
    font-size: 9rem;
  }
  .sjnG7tFoUzZblhB5JSTE .nfF08vOKSM2yctoHbkqY .dG2iF17CbUyQp6bhgkVY .VFfg427ZH0HoaShyv2eu {
    font-size: 9rem;
  }
  .sjnG7tFoUzZblhB5JSTE .nfF08vOKSM2yctoHbkqY .h7Gxd1Ohl39Qr_s1TjUQ {
    margin: 2rem 1rem;
  }
  .sjnG7tFoUzZblhB5JSTE .QPtT2wL6WLaqU6Aw_ozQ {
    font-size: 2rem;
    width: 60vw;
  }
  .sjnG7tFoUzZblhB5JSTE .Il3u8pW4KpUWlUSGkVpM {
    width: 35vw;
    top: 4rem;
    right: 5rem;
  }
}
/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (max-width: 800px) {
  .sjnG7tFoUzZblhB5JSTE {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  .sjnG7tFoUzZblhB5JSTE .nfF08vOKSM2yctoHbkqY {
    margin-bottom: -15rem;
  }
  .sjnG7tFoUzZblhB5JSTE .nfF08vOKSM2yctoHbkqY .dG2iF17CbUyQp6bhgkVY, .sjnG7tFoUzZblhB5JSTE .nfF08vOKSM2yctoHbkqY .QPtT2wL6WLaqU6Aw_ozQ {
    margin: 0;
  }
  .sjnG7tFoUzZblhB5JSTE .nfF08vOKSM2yctoHbkqY .dG2iF17CbUyQp6bhgkVY {
    font-size: 6rem;
  }
  .sjnG7tFoUzZblhB5JSTE .nfF08vOKSM2yctoHbkqY .dG2iF17CbUyQp6bhgkVY .VqfdyD8AvH6h_hXJYMhW, .sjnG7tFoUzZblhB5JSTE .nfF08vOKSM2yctoHbkqY .dG2iF17CbUyQp6bhgkVY .VFfg427ZH0HoaShyv2eu {
    font-size: 6rem;
  }
  .sjnG7tFoUzZblhB5JSTE .nfF08vOKSM2yctoHbkqY .dG2iF17CbUyQp6bhgkVY .VFfg427ZH0HoaShyv2eu {
    font-size: 6rem;
  }
  .sjnG7tFoUzZblhB5JSTE .nfF08vOKSM2yctoHbkqY .QPtT2wL6WLaqU6Aw_ozQ {
    font-size: 1.5rem;
    width: 70vw;
  }
  .sjnG7tFoUzZblhB5JSTE .nfF08vOKSM2yctoHbkqY .Il3u8pW4KpUWlUSGkVpM {
    width: 40vw;
    top: 2rem;
    right: 2rem;
  }
}
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 500px) {
  .sjnG7tFoUzZblhB5JSTE {
    height: 100%;
    padding: 0;
    overflow-x: hidden;
  }
  .sjnG7tFoUzZblhB5JSTE .nfF08vOKSM2yctoHbkqY .h7Gxd1Ohl39Qr_s1TjUQ {
    margin: 2rem 1rem;
  }
  .sjnG7tFoUzZblhB5JSTE .nfF08vOKSM2yctoHbkqY .dG2iF17CbUyQp6bhgkVY, .sjnG7tFoUzZblhB5JSTE .nfF08vOKSM2yctoHbkqY .QPtT2wL6WLaqU6Aw_ozQ {
    margin: 0 0 0 1rem;
  }
  .sjnG7tFoUzZblhB5JSTE .nfF08vOKSM2yctoHbkqY .dG2iF17CbUyQp6bhgkVY {
    font-size: 4rem;
  }
  .sjnG7tFoUzZblhB5JSTE .nfF08vOKSM2yctoHbkqY .dG2iF17CbUyQp6bhgkVY .VqfdyD8AvH6h_hXJYMhW, .sjnG7tFoUzZblhB5JSTE .nfF08vOKSM2yctoHbkqY .dG2iF17CbUyQp6bhgkVY .VFfg427ZH0HoaShyv2eu {
    font-size: 4rem;
  }
  .sjnG7tFoUzZblhB5JSTE .nfF08vOKSM2yctoHbkqY .dG2iF17CbUyQp6bhgkVY .VFfg427ZH0HoaShyv2eu {
    font-size: 4rem;
  }
  .sjnG7tFoUzZblhB5JSTE .nfF08vOKSM2yctoHbkqY .QPtT2wL6WLaqU6Aw_ozQ {
    font-size: 1rem;
    width: 80vw;
  }
  .sjnG7tFoUzZblhB5JSTE .nfF08vOKSM2yctoHbkqY .Il3u8pW4KpUWlUSGkVpM {
    width: 50vw;
    top: 1rem;
    right: 1rem;
  }
  .OLbsfs05fb0CWvcS4vUV {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    width: 100%;
  }
  .OLbsfs05fb0CWvcS4vUV .ItNxmalBSzvQKQeidGDE, .OLbsfs05fb0CWvcS4vUV .xzLWBRGAM6wcLIikYH2J {
    width: 100%;
    margin: 0;
    margin-top: 2rem;
  }
}`, "",{"version":3,"sources":["webpack://./src/components/NewsLetter/NewsLetter.module.scss"],"names":[],"mappings":"AAAA;EACI,YAAA;EACA,WAAA;EACA,kBAAA;EACA,yBAAA;EACA,4CAAA;EACA,gBAAA;AACJ;AACQ;EACI,mBAAA;AACZ;AACQ;EACI,YAAA;EACA,gBAAA;AACZ;AAAY;EACI,gBAAA;AAEhB;AAAY;EACI,gBAAA;EACA,2BAAA;AAEhB;AAAY;EACI,YAAA;EACA,gBAAA;AAEhB;AACI;EACI,iBAAA;EACA,eAAA;AACR;AAGI;EACI,eAAA;EACA,WAAA;EACA,gBAAA;EACA,WAAA;AADR;AAII;EACI,uBAAA;EACA,WAAA;EACA,kBAAA;EACA,SAAA;EACA,YAAA;EACA,WAAA;EACA,uBAAA;AAFR;AAII;EACI,aAAA;EACA,WAAA;AAFR;AAGQ;EACI,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,UAAA;EACA,iBAAA;EACA,aAAA;EACA,iBAAA;EACA,uBAAA;EACA,mBAAA;AADZ;AAEY;EACI,eAAA;EACA,2BAAA;EACA,mBAAA;AAAhB;AAEY;EACI,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,WAAA;EACA,mBAAA;AAAhB;AACgB;EACI,iBAAA;EACA,WAAA;AACpB;AACgB;EACI,iBAAA;EACA,2BAAA;AACpB;AAGQ;EACI,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,UAAA;EACA,iBAAA;EACA,aAAA;EACA,iBAAA;EACA,uBAAA;EACA,mBAAA;AADZ;AAEY;EACI,eAAA;EACA,2BAAA;EACA,mBAAA;AAAhB;AAEY;EACI,eAAA;EACA,WAAA;EACA,mBAAA;AAAhB;AAEY;EACI,iBAAA;EACA,2BAAA;EACA,mBAAA;AAAhB;AAEY;EACI,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,WAAA;EACA,iBAAA;AAAhB;AACgB;EACI,iBAAA;EACA,WAAA;AACpB;AACgB;EACI,iBAAA;EACA,2BAAA;AACpB;AAEY;EACI,iBAAA;EACA,2BAAA;EACA,mBAAA;EACA,gBAAA;AAAhB;AAEY;EACI,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,WAAA;EACA,iBAAA;AAAhB;AACgB;EACI,iBAAA;EACA,WAAA;AACpB;AACgB;EACI,iBAAA;EACA,2BAAA;AACpB;;AAMA,qDAAA;AACA;EACI;IACI,YAAA;IACA,aAAA;IACA,uBAAA;IACA,mBAAA;IACA,sBAAA;EAHN;EAIM;IACI,WAAA;IACA,YAAA;EAFV;EAGU;IACI,kBAAA;EADd;EAGU;IACI,eAAA;EADd;EAEc;IACI,eAAA;EAAlB;EAEc;IACI,eAAA;EAAlB;EAGU;IACI,iBAAA;EADd;EAIM;IACI,eAAA;IACA,WAAA;EAFV;EAIM;IACI,WAAA;IACA,SAAA;IACA,WAAA;EAFV;AACF;AAMA,oEAAA;AACA;EACI;IACI,aAAA;IACA,sBAAA;IACA,aAAA;EAJN;EAKM;IACI,qBAAA;EAHV;EAIU;IACI,SAAA;EAFd;EAIU;IACI,eAAA;EAFd;EAGc;IACI,eAAA;EADlB;EAGc;IACI,eAAA;EADlB;EAIU;IACI,iBAAA;IACA,WAAA;EAFd;EAIU;IACI,WAAA;IACA,SAAA;IACA,WAAA;EAFd;AACF;AAOA,iDAAA;AACA;EACI;IACI,YAAA;IACA,UAAA;IACA,kBAAA;EALN;EAOU;IACI,iBAAA;EALd;EAOU;IACI,kBAAA;EALd;EAOU;IACI,eAAA;EALd;EAMc;IACI,eAAA;EAJlB;EAMc;IACI,eAAA;EAJlB;EAOU;IACI,eAAA;IACA,WAAA;EALd;EAOU;IACI,WAAA;IACA,SAAA;IACA,WAAA;EALd;EASE;IACI,aAAA;IACA,sBAAA;IACA,mBAAA;IACA,UAAA;IACA,WAAA;EAPN;EAQM;IACI,WAAA;IACA,SAAA;IACA,gBAAA;EANV;AACF","sourcesContent":[".NewsLetterContainer {\n    height: 60vh;\n    width: 100%;\n    position: relative;\n    text-transform: uppercase;\n    background-color: rgba(100, 237, 207, 0.075);\n    margin-top: 5rem;\n    .mainContent {\n        .heading, .subHeading {\n            margin: 0 0 0 10rem;\n        }\n        .heading {\n            color: white;\n            font-size: 11rem;\n            .spanText, .spanPlus {\n                font-size: 11rem;\n            }\n            .spanText {\n                font-weight: 100;\n                color: var(--heading-color);\n            }\n            .spanPlus {\n                color: black;\n                font-size: 13rem;\n            }\n    }\n    .headingSM {\n        margin: 8rem 1rem;\n        padding: .5rem;\n    }\n    }\n    \n    .subHeading {\n        font-size: 3rem;\n        color: grey;\n        margin-top: 5rem;\n        width: 50vw;\n    }\n    \n    .image {\n        background-color: black;\n        width: 30vw;\n        position: absolute;\n        top: 4rem;\n        right: 10rem;\n        z-index: -1;\n        transform: rotate(7deg);\n    }\n    .news {\n        display: flex;\n        width: 100%;\n        .upcomingEvents {\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n            align-items: center;\n            width: 60%;\n            min-height: 20rem;\n            padding: 2rem;\n            margin: 5rem 2rem;\n            background-color: white;\n            border-radius: 3rem;\n            .title {\n                font-size: 3rem;\n                color: var(--heading-color);\n                margin-bottom: 2rem;\n            }\n            .event {\n                display: flex;\n                justify-content: space-between;\n                align-items: center;\n                width: 100%;\n                margin-bottom: 1rem;\n                .date {\n                    font-size: 1.5rem;\n                    color: grey;\n                }\n                .eventTitle {\n                    font-size: 1.5rem;\n                    color: var(--heading-color);\n                }\n            }\n        }\n        .reminders {\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n            align-items: center;\n            width: 60%;\n            min-height: 20rem;\n            padding: 2rem;\n            margin: 5rem 2rem;\n            background-color: white;\n            border-radius: 3rem;\n            .title {\n                font-size: 3rem;\n                color: var(--heading-color);\n                margin-bottom: 2rem;\n            }\n            .welcome {\n                font-size: 2rem;\n                color: grey;\n                margin-bottom: 1rem;\n            }\n            .header {\n                font-size: 1.5rem;\n                color: var(--heading-color);\n                margin-bottom: 1rem;\n            }\n            .reminder {\n                display: flex;\n                justify-content: space-between;\n                align-items: center;\n                width: 100%;\n                line-height: 2rem;\n                .date {\n                    font-size: 1.5rem;\n                    color: grey;\n                }\n                .reminderTitle {\n                    font-size: 1.5rem;\n                    color: var(--heading-color);\n                }\n            }\n            .headerPara {\n                font-size: 1.5rem;\n                color: var(--heading-color);\n                margin-bottom: 1rem;\n                margin-top: 4rem;\n            }            \n            .reminderPara {\n                display: flex;\n                justify-content: space-between;\n                align-items: center;\n                width: 100%;\n                line-height: 2rem;\n                .date {\n                    font-size: 1.5rem;\n                    color: grey;\n                }\n                .reminderTitle {\n                    font-size: 1.5rem;\n                    color: var(--heading-color);\n                }\n            }\n        }\n    }\n}\n\n/* Medium devices (landscape tablets, 800px and up) */\n@media only screen and (max-width: 1220px) {\n    .NewsLetterContainer {\n        height: 70vh;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-direction: column;\n        .mainContent {\n            width: 100%;\n            height: 100%;\n            .heading, .subHeading {\n                margin: 0 0 0 5rem;\n            }\n            .heading {\n                font-size: 9rem;\n                .spanText, .spanPlus {\n                    font-size: 9rem;\n                }\n                .spanPlus {\n                    font-size: 9rem;\n                }\n            }\n            .headingSM {\n                margin: 2rem 1rem;\n            }\n        }\n        .subHeading {\n            font-size: 2rem;\n            width: 60vw;\n        }\n        .image {\n            width: 35vw;\n            top: 4rem;\n            right: 5rem;\n        }\n    }\n}\n\n/* Small devices (portrait tablets and large phones, 600px and up) */\n@media only screen and (max-width: 800px) {\n    .NewsLetterContainer {\n        display: flex;\n        flex-direction: column;\n        height: 100vh;\n        .mainContent {\n            margin-bottom: -15rem;\n            .heading, .subHeading {\n                margin: 0;\n            }\n            .heading {\n                font-size: 6rem;\n                .spanText, .spanPlus {\n                    font-size: 6rem;\n                }\n                .spanPlus {\n                    font-size: 6rem;\n                }\n            }\n            .subHeading {\n                font-size: 1.5rem;\n                width: 70vw;\n            }\n            .image {\n                width: 40vw;\n                top: 2rem;\n                right: 2rem;\n            }\n        }\n    }\n}\n\n/* Extra small devices (phones, 600px and down) */\n@media only screen and (max-width: 500px) {\n    .NewsLetterContainer {\n        height: 100%;\n        padding: 0;\n        overflow-x: hidden;\n        .mainContent {\n            .headingSM {\n                margin: 2rem 1rem;\n            }\n            .heading, .subHeading {\n                margin: 0 0 0 1rem;\n            }\n            .heading {\n                font-size: 4rem;\n                .spanText, .spanPlus {\n                    font-size: 4rem;\n                }\n                .spanPlus {\n                    font-size: 4rem;\n                }\n            }\n            .subHeading {\n                font-size: 1rem;\n                width: 80vw;\n            }\n            .image {\n                width: 50vw;\n                top: 1rem;\n                right: 1rem;\n            }\n        }\n    }\n    .news {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        padding: 0;\n        width: 100%;\n        .upcomingEvents, .reminders {\n            width: 100%;\n            margin: 0;\n            margin-top: 2rem;\n        }\n    }\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"NewsLetterContainer": `sjnG7tFoUzZblhB5JSTE`,
	"mainContent": `nfF08vOKSM2yctoHbkqY`,
	"heading": `dG2iF17CbUyQp6bhgkVY`,
	"subHeading": `QPtT2wL6WLaqU6Aw_ozQ`,
	"spanText": `VqfdyD8AvH6h_hXJYMhW`,
	"spanPlus": `VFfg427ZH0HoaShyv2eu`,
	"headingSM": `h7Gxd1Ohl39Qr_s1TjUQ`,
	"image": `Il3u8pW4KpUWlUSGkVpM`,
	"news": `OLbsfs05fb0CWvcS4vUV`,
	"upcomingEvents": `ItNxmalBSzvQKQeidGDE`,
	"title": `Sp9JJs_qr75rnwhA8j4E`,
	"event": `mk44oMyYbY5PUxafTGfG`,
	"date": `wpRQZVZdg36WiB6Vn3Tz`,
	"eventTitle": `rz4tdH_k3MzjqSCKVBeK`,
	"reminders": `xzLWBRGAM6wcLIikYH2J`,
	"welcome": `WZZkhuCgpyMbsMJoFx3D`,
	"header": `JcQxwYFoUUY2pF4dvd8J`,
	"reminder": `iQX_LoEJAWE1nLfSu4zx`,
	"reminderTitle": `Q_QB2RMTCujYwWNxhK0N`,
	"headerPara": `iAo7Ip527TGfLxyOtNWr`,
	"reminderPara": `TRcihwLas29lxQhN1VjS`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Register/Register.module.scss":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Register/Register.module.scss ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.uqfv59jh0aLmknMWXxqu {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(240, 248, 255, 0.44);
}

.Idu7boV5emT3tpI63EsN {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  border-radius: 3rem;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  background-color: aliceblue;
}

.XokUkjbAB13UudNelspL, ._VTjxJAcByR5MCln33Zs, .XgxRt1_ViXHNSccWAUFj, .JXDEaLlvnxZWsWN6uAsv {
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
}
.XokUkjbAB13UudNelspL .RetK5OOXX270zhvIW6V2, .XokUkjbAB13UudNelspL .bAEoNFIygNlfquMD7N_K, .XokUkjbAB13UudNelspL .UH9TUnzqPKVSuaK3Z9AR, .XokUkjbAB13UudNelspL .Fmnt2VkAZ46eJwNyGadb, .XokUkjbAB13UudNelspL .pCXj_WHoS1qTAOSyNREA, .XokUkjbAB13UudNelspL .jK4wqtyVvRQBVsWELqp4, .XokUkjbAB13UudNelspL .zeNiNFBnVfIzNtv8rRvX, ._VTjxJAcByR5MCln33Zs .RetK5OOXX270zhvIW6V2, ._VTjxJAcByR5MCln33Zs .bAEoNFIygNlfquMD7N_K, ._VTjxJAcByR5MCln33Zs .UH9TUnzqPKVSuaK3Z9AR, ._VTjxJAcByR5MCln33Zs .Fmnt2VkAZ46eJwNyGadb, ._VTjxJAcByR5MCln33Zs .pCXj_WHoS1qTAOSyNREA, ._VTjxJAcByR5MCln33Zs .jK4wqtyVvRQBVsWELqp4, ._VTjxJAcByR5MCln33Zs .zeNiNFBnVfIzNtv8rRvX, .XgxRt1_ViXHNSccWAUFj .RetK5OOXX270zhvIW6V2, .XgxRt1_ViXHNSccWAUFj .bAEoNFIygNlfquMD7N_K, .XgxRt1_ViXHNSccWAUFj .UH9TUnzqPKVSuaK3Z9AR, .XgxRt1_ViXHNSccWAUFj .Fmnt2VkAZ46eJwNyGadb, .XgxRt1_ViXHNSccWAUFj .pCXj_WHoS1qTAOSyNREA, .XgxRt1_ViXHNSccWAUFj .jK4wqtyVvRQBVsWELqp4, .XgxRt1_ViXHNSccWAUFj .zeNiNFBnVfIzNtv8rRvX, .JXDEaLlvnxZWsWN6uAsv .RetK5OOXX270zhvIW6V2, .JXDEaLlvnxZWsWN6uAsv .bAEoNFIygNlfquMD7N_K, .JXDEaLlvnxZWsWN6uAsv .UH9TUnzqPKVSuaK3Z9AR, .JXDEaLlvnxZWsWN6uAsv .Fmnt2VkAZ46eJwNyGadb, .JXDEaLlvnxZWsWN6uAsv .pCXj_WHoS1qTAOSyNREA, .JXDEaLlvnxZWsWN6uAsv .jK4wqtyVvRQBVsWELqp4, .JXDEaLlvnxZWsWN6uAsv .zeNiNFBnVfIzNtv8rRvX {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 0.5rem;
}

.AnppXxQ0e4kYTK9oHecP {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex-grow: 1;
  padding-bottom: 1rem;
}

.eVorpnz1Bkyc_o2MqVzs, .eVorpnz1Bkyc_o2MqVzs:visited {
  color: navy;
}

.rMo8qUvx6E5jcjWTHxQm,
.K9R5yzZjO1mUAvrEywog, .Lb_3qXz_D_RV0UGUhFI0, .oCrs0O5iLZO8gTh_7L0p {
  width: 100%;
  font-size: 1rem;
  padding: 0.25rem;
  border-radius: 0.5rem;
  border: 0.1rem solid var(--text-dark);
}

.xHCDL1OAZQMxJs0mIYBj,
.K9R5yzZjO1mUAvrEywog, .Lb_3qXz_D_RV0UGUhFI0 {
  font-size: 1rem;
  margin-top: 1rem;
  margin: 0;
}

.K9R5yzZjO1mUAvrEywog,
.Lb_3qXz_D_RV0UGUhFI0 {
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  margin-top: 1rem;
  margin: 0;
}

.K9R5yzZjO1mUAvrEywog {
  border: none;
  background-color: var(--btn-color);
  color: white;
  transition: 0.3s ease;
  cursor: pointer;
}

.K9R5yzZjO1mUAvrEywog:hover {
  padding: 0.7rem;
  font-size: 1rem;
  transition: 0.3s ease;
}

.Lb_3qXz_D_RV0UGUhFI0 {
  background-color: grey;
  color: darkgrey;
  cursor: not-allowed;
}
.Lb_3qXz_D_RV0UGUhFI0:hover {
  background-color: grey;
  color: darkgrey;
  cursor: not-allowed;
}

.uAohF3j0eT3FN8a_dzcI {
  text-align: center;
}

.oCrs0O5iLZO8gTh_7L0p {
  margin-bottom: 2rem;
}

.oCrs0O5iLZO8gTh_7L0p:focus {
  outline: none;
  box-shadow: 0 0 1rem var(--btn-color);
}

.SIGWuEXn8kcv7IJ_0fUU {
  font-size: 0.75rem;
  border-radius: 0.5rem;
  background: #000;
  color: #fff;
  padding: 0.25rem;
  position: relative;
  bottom: -10px;
}

.SIGWuEXn8kcv7IJ_0fUU > svg {
  margin-right: 0.25rem;
}

.X107B9JCKaXeJJSBfgO4 {
  position: absolute;
  left: -9999px;
}

.A88SY1Hdz_nrnYJa4fh1 {
  display: none;
}

.X7aN1ereRnEeP7e8IUn_ {
  color: limegreen;
  margin-left: 0.25rem;
}

.y_SivBDR7ZEi57d2CZYF {
  color: red;
  margin-left: 0.25rem;
}

.gdSVM8yEV8IG4ZAbo_NT {
  background-color: lightpink;
  color: firebrick;
  font-weight: bold;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
}

.PwGfkZn5LtYOVvDEODfW {
  display: inline-block;
}

@media (max-width: 500px) {
  .Idu7boV5emT3tpI63EsN {
    width: 100%;
  }
}`, "",{"version":3,"sources":["webpack://./src/components/Register/Register.module.scss"],"names":[],"mappings":"AAAA;EACI,WAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,2CAAA;AACJ;;AAEA;EACI,UAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,aAAA;EACA,mBAAA;EACA,uCAAA;EACA,2BAAA;AACJ;;AAEA;EACI,aAAA;EACA,8BAAA;EACA,cAAA;AACJ;AAAI;EACI,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,gBAAA;AAER;;AAEA;EACI,aAAA;EACA,sBAAA;EACA,6BAAA;EACA,YAAA;EACA,oBAAA;AACJ;;AAEA;EACI,WAAA;AACJ;;AAEA;;EAEI,WAAA;EACF,eAAA;EACA,gBAAA;EACA,qBAAA;EACA,qCAAA;AACF;;AAEA;;EAEI,eAAA;EACF,gBAAA;EACA,SAAA;AACF;;AAEA;;EAEE,eAAA;EACA,eAAA;EACA,qBAAA;EACA,gBAAA;EACA,SAAA;AACF;;AAEA;EACE,YAAA;EACA,kCAAA;EACA,YAAA;EACA,qBAAA;EACA,eAAA;AACF;;AAEA;EACE,eAAA;EACA,eAAA;EACA,qBAAA;AACF;;AAEA;EACE,sBAAA;EACA,eAAA;EACA,mBAAA;AACF;AAAE;EACE,sBAAA;EACA,eAAA;EACA,mBAAA;AAEJ;;AAGA;EACI,kBAAA;AAAJ;;AAGA;EACI,mBAAA;AAAJ;;AAGA;EACI,aAAA;EACA,qCAAA;AAAJ;;AAGA;EACI,kBAAA;EACA,qBAAA;EACA,gBAAA;EACA,WAAA;EACA,gBAAA;EACA,kBAAA;EACA,aAAA;AAAJ;;AAGA;EACI,qBAAA;AAAJ;;AAGA;EACI,kBAAA;EACA,aAAA;AAAJ;;AAGA;EACI,aAAA;AAAJ;;AAGA;EACI,gBAAA;EACA,oBAAA;AAAJ;;AAGA;EACI,UAAA;EACA,oBAAA;AAAJ;;AAGA;EACI,2BAAA;EACA,gBAAA;EACA,iBAAA;EACA,eAAA;EACA,qBAAA;AAAJ;;AAGA;EACI,qBAAA;AAAJ;;AAGA;EACI;IACI,WAAA;EAAN;AACF","sourcesContent":[".Register {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(240, 248, 255, 0.44);\n}\n\n.section {\n    width: 50%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 3rem;\n    border-radius: 3rem;\n    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);\n    background-color: aliceblue;\n}\n\n.nameContainer, .emailAndCampusContainer, .passwordContainer, .confirmPasswordContainer {\n    display: flex;\n    justify-content: space-between;\n    margin: 1rem 0;\n    .fName, .lName, .email, .campusNum, .pwd, .confirm, .studentIds {\n        display: flex;\n        flex-direction: column;\n        align-items: flex-start;\n        margin: 0 .5rem;\n    }\n}\n\n.form {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    flex-grow: 1;\n    padding-bottom: 1rem;\n}\n\n.a, .a:visited {\n    color: navy;\n}\n\n.input,\n.button, .disabledButton, .select {\n    width: 100%;\n  font-size: 1rem;\n  padding: 0.25rem;\n  border-radius: 0.5rem;\n  border: 0.1rem solid var(--text-dark);\n}\n\n.label,\n.button, .disabledButton {\n    font-size: 1rem;\n  margin-top: 1rem;\n  margin: 0;\n}\n\n.button,\n.disabledButton {\n  font-size: 1rem;\n  padding: 0.5rem;\n  border-radius: 0.5rem;\n  margin-top: 1rem;\n  margin: 0;\n}\n\n.button {\n  border: none;\n  background-color: var(--btn-color);\n  color: white;\n  transition: 0.3s ease;\n  cursor: pointer;\n}\n\n.button:hover {\n  padding: 0.7rem;\n  font-size: 1rem;\n  transition: 0.3s ease;\n}\n\n.disabledButton {\n  background-color: grey;\n  color: darkgrey;\n  cursor: not-allowed;\n  &:hover {\n    background-color: grey;\n    color: darkgrey;\n    cursor: not-allowed;\n  }\n}\n\n\n.togglePara {\n    text-align: center;\n}\n\n.select {\n    margin-bottom: 2rem;\n}\n\n.select:focus {\n    outline: none;\n    box-shadow: 0 0 1rem var(--btn-color);\n}\n\n.instructions {\n    font-size: 0.75rem;\n    border-radius: 0.5rem;\n    background: #000;\n    color: #fff;\n    padding: 0.25rem;\n    position: relative;\n    bottom: -10px;\n}\n\n.instructions > svg {\n    margin-right: 0.25rem;\n}\n\n.offscreen {\n    position: absolute;\n    left: -9999px;\n}\n\n.hide {\n    display: none;\n}\n\n.valid {\n    color: limegreen;\n    margin-left: 0.25rem;\n}\n\n.invalid {\n    color: red;\n    margin-left: 0.25rem;\n}\n\n.errmsg {\n    background-color: lightpink;\n    color: firebrick;\n    font-weight: bold;\n    padding: 0.5rem;\n    margin-bottom: 0.5rem;\n}\n\n.line {\n    display: inline-block;\n}\n\n@media (max-width: 500px) {\n    .section {\n        width: 100%;\n    }\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"Register": `uqfv59jh0aLmknMWXxqu`,
	"section": `Idu7boV5emT3tpI63EsN`,
	"nameContainer": `XokUkjbAB13UudNelspL`,
	"emailAndCampusContainer": `_VTjxJAcByR5MCln33Zs`,
	"passwordContainer": `XgxRt1_ViXHNSccWAUFj`,
	"confirmPasswordContainer": `JXDEaLlvnxZWsWN6uAsv`,
	"fName": `RetK5OOXX270zhvIW6V2`,
	"lName": `bAEoNFIygNlfquMD7N_K`,
	"email": `UH9TUnzqPKVSuaK3Z9AR`,
	"campusNum": `Fmnt2VkAZ46eJwNyGadb`,
	"pwd": `pCXj_WHoS1qTAOSyNREA`,
	"confirm": `jK4wqtyVvRQBVsWELqp4`,
	"studentIds": `zeNiNFBnVfIzNtv8rRvX`,
	"form": `AnppXxQ0e4kYTK9oHecP`,
	"a": `eVorpnz1Bkyc_o2MqVzs`,
	"input": `rMo8qUvx6E5jcjWTHxQm`,
	"button": `K9R5yzZjO1mUAvrEywog`,
	"disabledButton": `Lb_3qXz_D_RV0UGUhFI0`,
	"select": `oCrs0O5iLZO8gTh_7L0p`,
	"label": `xHCDL1OAZQMxJs0mIYBj`,
	"togglePara": `uAohF3j0eT3FN8a_dzcI`,
	"instructions": `SIGWuEXn8kcv7IJ_0fUU`,
	"offscreen": `X107B9JCKaXeJJSBfgO4`,
	"hide": `A88SY1Hdz_nrnYJa4fh1`,
	"valid": `X7aN1ereRnEeP7e8IUn_`,
	"invalid": `y_SivBDR7ZEi57d2CZYF`,
	"errmsg": `gdSVM8yEV8IG4ZAbo_NT`,
	"line": `PwGfkZn5LtYOVvDEODfW`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/ScienceBanner/ScienceBanner.module.scss":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/ScienceBanner/ScienceBanner.module.scss ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.yYi4HDJrU8gGkqkbVsFm {
  background-color: black;
  width: 100%;
  padding: 5rem 0;
  overflow: hidden; /* Ensure the banner stays within its container */
}
.yYi4HDJrU8gGkqkbVsFm .x2qC7FP8Yq08R1kZzpwC {
  font-size: 20rem;
  font-weight: 800;
  animation: VXaeotNb_y4Y7tKekCmU 10s linear infinite; /* Adjust the duration and timing function as needed */
}

@keyframes VXaeotNb_y4Y7tKekCmU {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
}
/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (max-width: 800px) {
  .yYi4HDJrU8gGkqkbVsFm {
    height: 15vh;
    padding: 0;
  }
  .yYi4HDJrU8gGkqkbVsFm .x2qC7FP8Yq08R1kZzpwC {
    font-size: 14vw;
    margin: auto 0;
    height: 100%;
    width: 110%;
  }
}`, "",{"version":3,"sources":["webpack://./src/components/ScienceBanner/ScienceBanner.module.scss"],"names":[],"mappings":"AAAA;EACI,uBAAA;EACA,WAAA;EACA,eAAA;EACA,gBAAA,EAAA,iDAAA;AACJ;AAAI;EACI,gBAAA;EACA,gBAAA;EACA,mDAAA,EAAA,sDAAA;AAER;;AAEA;EACI;IACI,2BAAA;EACN;EAEE;IACI,4BAAA;EAAN;AACF;AAGA,oEAAA;AACA;EACI;IACI,YAAA;IACA,UAAA;EADN;EAEM;IACI,eAAA;IACA,cAAA;IACA,YAAA;IACA,WAAA;EAAV;AACF","sourcesContent":[".scienceBannerContainer {\n    background-color: black;\n    width: 100%;\n    padding: 5rem 0;\n    overflow: hidden; /* Ensure the banner stays within its container */\n    .scienceBanner {\n        font-size: 20rem;\n        font-weight: 800;\n        animation: slideAcross 10s linear infinite; /* Adjust the duration and timing function as needed */\n    }\n}\n\n@keyframes slideAcross {\n    from {\n        transform: translateX(100%);\n    }\n  \n    to {\n        transform: translateX(-100%);\n    }\n}\n\n/* Small devices (portrait tablets and large phones, 600px and up) */\n@media only screen and (max-width: 800px) {\n    .scienceBannerContainer {\n        height: 15vh;\n        padding: 0;\n        .scienceBanner {\n            font-size: 14vw;\n            margin: auto 0;\n            height: 100%;\n            width: 110%;\n        }\n    }\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"scienceBannerContainer": `yYi4HDJrU8gGkqkbVsFm`,
	"scienceBanner": `x2qC7FP8Yq08R1kZzpwC`,
	"slideAcross": `VXaeotNb_y4Y7tKekCmU`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/ScienceContainer/ScienceContainer.module.scss":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/ScienceContainer/ScienceContainer.module.scss ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./public/img/hulk-sprite.png */ "./public/img/hulk-sprite.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.tKObkiTgSKCKKjhAGKfH {
  width: 75%;
  margin: 0 auto;
  padding: 5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}
.tKObkiTgSKCKKjhAGKfH .h9qrpUvhHCrx1DfHP_dZ {
  font-size: 8.5rem;
  font-weight: 600;
  color: var(--btn-color);
}
.tKObkiTgSKCKKjhAGKfH .HQJnEOmTV6wgKMSUCeBP {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
}
.tKObkiTgSKCKKjhAGKfH .HQJnEOmTV6wgKMSUCeBP .CiIs51RNCDKjoAsR6G2n {
  width: 90%;
}
.tKObkiTgSKCKKjhAGKfH .HQJnEOmTV6wgKMSUCeBP .CiIs51RNCDKjoAsR6G2n .oaOn8fcus5nrMplN4vW7 {
  text-align: left;
}
.tKObkiTgSKCKKjhAGKfH .EAP9c7la0NDmy6u5mXl8 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
}
.tKObkiTgSKCKKjhAGKfH ._xR8cfBG_ULH7Ka9xQlj {
  width: 90%;
  height: 35vh;
  background-color: #303030;
  padding: 1.5rem;
  margin-bottom: 3rem;
  border-radius: 0.5rem;
  transition: 0.4s ease;
}
.tKObkiTgSKCKKjhAGKfH ._xR8cfBG_ULH7Ka9xQlj .LdjfqCXWIurbURbWKVft {
  margin: 1rem;
  font-size: 2rem;
  color: white;
}
.tKObkiTgSKCKKjhAGKfH ._xR8cfBG_ULH7Ka9xQlj .Vj0Fq8qKs9n3QsTyO5ft .lHZErXLeh8SSbePfp5g_ {
  font-size: 1.3rem;
  color: white;
  font-weight: bold;
}
.tKObkiTgSKCKKjhAGKfH ._xR8cfBG_ULH7Ka9xQlj .Vj0Fq8qKs9n3QsTyO5ft .xGzsxtCFdpthEQuQa9rw {
  list-style-type: none;
  font-size: 1.3rem;
  color: rgb(183, 183, 183);
  margin: 0 2rem;
  line-height: 2rem;
}
.tKObkiTgSKCKKjhAGKfH ._xR8cfBG_ULH7Ka9xQlj .Vj0Fq8qKs9n3QsTyO5ft .krMQUA7qMbxxx23loWQM {
  text-decoration: none;
  color: var(--btn-color);
  font-size: 1.3rem;
}
.tKObkiTgSKCKKjhAGKfH ._xR8cfBG_ULH7Ka9xQlj .Vj0Fq8qKs9n3QsTyO5ft .krMQUA7qMbxxx23loWQM:hover {
  text-decoration: underline;
}
.tKObkiTgSKCKKjhAGKfH ._xR8cfBG_ULH7Ka9xQlj .Vj0Fq8qKs9n3QsTyO5ft .dsM7YKeLFQ3Jt2HbGdAy {
  width: 30%;
}
.tKObkiTgSKCKKjhAGKfH ._xR8cfBG_ULH7Ka9xQlj .Jz5Zmq3bIFEah3vygdg4 {
  font-size: 1vw;
  margin: 1rem;
  color: darkgrey;
}
.tKObkiTgSKCKKjhAGKfH ._xR8cfBG_ULH7Ka9xQlj:hover .LdjfqCXWIurbURbWKVft {
  transform: scale(1.05);
  color: var(--heading-color);
  transition: 0.4s ease;
}
.tKObkiTgSKCKKjhAGKfH .XSyHvQcTq4xBaukXvBtq {
  width: 35.2rem;
  height: 35.2rem;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-repeat: no-repeat;
  background-size: 28160px 352px;
  background-position: 0rem 0rem;
  position: absolute;
  bottom: -5rem;
  right: -15rem;
  animation: vY0NuqM1DcCxLWhd0Ewk 15s steps(80) infinite;
}
@keyframes vY0NuqM1DcCxLWhd0Ewk {
  0% {
    background-position: 0rem 0rem;
  }
  100% {
    background-position: -2816rem 0rem;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (max-width: 1000px) {
  .tKObkiTgSKCKKjhAGKfH {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .tKObkiTgSKCKKjhAGKfH .HQJnEOmTV6wgKMSUCeBP {
    width: 100%;
  }
  .tKObkiTgSKCKKjhAGKfH .EAP9c7la0NDmy6u5mXl8 {
    width: 100%;
  }
}`, "",{"version":3,"sources":["webpack://./src/components/ScienceContainer/ScienceContainer.module.scss"],"names":[],"mappings":"AAAA;EACI,UAAA;EACA,cAAA;EACA,eAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,kBAAA;AACJ;AAAI;EACI,iBAAA;EACA,gBAAA;EACA,uBAAA;AAER;AAAI;EACI,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,UAAA;AAER;AADQ;EACI,UAAA;AAGZ;AAFY;EACI,gBAAA;AAIhB;AAAI;EACI,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,UAAA;AAER;AAAI;EACI,UAAA;EACA,YAAA;EACA,yBAAA;EACA,eAAA;EACA,mBAAA;EACA,qBAAA;EACA,qBAAA;AAER;AADQ;EACI,YAAA;EACA,eAAA;EACA,YAAA;AAGZ;AAAY;EACI,iBAAA;EACA,YAAA;EACA,iBAAA;AAEhB;AAAY;EACI,qBAAA;EACA,iBAAA;EACA,yBAAA;EACA,cAAA;EACA,iBAAA;AAEhB;AAAY;EACI,qBAAA;EACA,uBAAA;EACA,iBAAA;AAEhB;AADgB;EACI,0BAAA;AAGpB;AAAY;EACI,UAAA;AAEhB;AACQ;EACI,cAAA;EACA,YAAA;EACA,eAAA;AACZ;AACQ;EACI,sBAAA;EACA,2BAAA;EACA,qBAAA;AACZ;AAEI;EACI,cAAA;EACA,eAAA;EACA,yDAAA;EACA,4BAAA;EACA,8BAAA;EACA,8BAAA;EACA,kBAAA;EACA,aAAA;EACA,aAAA;EACA,sDAAA;AAAR;AAGI;EACI;IAAK,8BAAA;EAAX;EACM;IAAO,kCAAA;EAEb;AACF;;AACA,oEAAA;AACA;EACI;IACI,aAAA;IACA,sBAAA;IACA,uBAAA;EAEN;EADM;IACI,WAAA;EAGV;EADM;IACI,WAAA;EAGV;AACF","sourcesContent":[".scienceContainerMain {\n    width: 75%;\n    margin: 0 auto;\n    padding: 5rem 0;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    position: relative;\n    .scienceHeader {\n        font-size: 8.5rem;\n        font-weight: 600;\n        color: var(--btn-color);\n    }\n    .scienceContainerLeft {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        width: 50%;\n        .headingSMContainer {\n            width: 90%;\n            .headingSM {\n                text-align: left;\n            }\n        }\n    }\n    .scienceContainerRight {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        width: 50%;\n    }\n    .scienceCard {\n        width: 90%;\n        height: 35vh;\n        background-color: #303030;\n        padding: 1.5rem;\n        margin-bottom: 3rem;\n        border-radius: .5rem;\n        transition: .4s ease;\n        .scienceTitle {\n            margin: 1rem;\n            font-size: 2rem;\n            color: white;\n        }\n        .scienceList {\n            .span {\n                font-size: 1.3rem;\n                color: white;\n                font-weight: bold;\n            }\n            .scienceListItem {\n                list-style-type: none;\n                font-size: 1.3rem;\n                color: rgb(183, 183, 183);\n                margin: 0 2rem;\n                line-height: 2rem;\n            }\n            .link {\n                text-decoration: none;\n                color: var(--btn-color);\n                font-size: 1.3rem;\n                &:hover {\n                    text-decoration: underline;\n                }\n            }\n            .img {\n                width: 30%;\n            }\n        }\n        .scienceDescription {\n            font-size: 1vw;\n            margin: 1rem;\n            color: darkgrey;\n        }\n        &:hover .scienceTitle {\n            transform: scale(1.05);\n            color: var(--heading-color);\n            transition: .4s ease;\n        }\n    }\n    .spritesheet {\n        width: 35.2rem;\n        height: 35.2rem;\n        background-image: url('/Users/tylerpierson/software_projects/class-website/public/img/hulk-sprite.png');\n        background-repeat: no-repeat;\n        background-size: 28160px 352px;\n        background-position: 0rem 0rem;\n        position: absolute;\n        bottom: -5rem;\n        right: -15rem;\n        animation: play 15s steps(80) infinite;\n    }\n     \n    @keyframes play {\n        0% { background-position: 0rem 0rem; }\n        100% { background-position: -2816rem 0rem; }\n    }\n}\n\n/* Small devices (portrait tablets and large phones, 600px and up) */\n@media only screen and (max-width: 1000px) {\n    .scienceContainerMain {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        .scienceContainerLeft {\n            width: 100%;\n        }\n        .scienceContainerRight {\n            width: 100%;\n        }\n    }\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"scienceContainerMain": `tKObkiTgSKCKKjhAGKfH`,
	"scienceHeader": `h9qrpUvhHCrx1DfHP_dZ`,
	"scienceContainerLeft": `HQJnEOmTV6wgKMSUCeBP`,
	"headingSMContainer": `CiIs51RNCDKjoAsR6G2n`,
	"headingSM": `oaOn8fcus5nrMplN4vW7`,
	"scienceContainerRight": `EAP9c7la0NDmy6u5mXl8`,
	"scienceCard": `_xR8cfBG_ULH7Ka9xQlj`,
	"scienceTitle": `LdjfqCXWIurbURbWKVft`,
	"scienceList": `Vj0Fq8qKs9n3QsTyO5ft`,
	"span": `lHZErXLeh8SSbePfp5g_`,
	"scienceListItem": `xGzsxtCFdpthEQuQa9rw`,
	"link": `krMQUA7qMbxxx23loWQM`,
	"img": `dsM7YKeLFQ3Jt2HbGdAy`,
	"scienceDescription": `Jz5Zmq3bIFEah3vygdg4`,
	"spritesheet": `XSyHvQcTq4xBaukXvBtq`,
	"play": `vY0NuqM1DcCxLWhd0Ewk`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/SpriteAnimation/SpriteAnimation.module.scss":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/SpriteAnimation/SpriteAnimation.module.scss ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../portfolio/public/img/tyler-spritesheet.png */ "../../portfolio/public/img/tyler-spritesheet.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.BYTea12oqUEziEWvzniO {
  position: absolute;
  z-index: 1;
  right: 0rem;
  width: 65rem;
  height: 80rem;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-repeat: no-repeat;
  animation: uw8ss7Iscm1Hn8eZU0qa 8s steps(1) infinite;
}

@keyframes uw8ss7Iscm1Hn8eZU0qa {
  0% {
    background-position: -15rem 10rem;
  }
  10.75% {
    background-position: -95rem 10rem;
  }
  1.5% {
    background-position: -175rem 10rem;
  }
  2.25% {
    background-position: -255rem 10rem;
  }
  3% {
    background-position: -335rem 10rem;
  }
  3.75% {
    background-position: -415rem 10rem;
  }
  4.5% {
    background-position: -495rem 10rem;
  }
  5.25% {
    background-position: -575rem 10rem;
  }
  6% {
    background-position: -655rem 10rem;
  }
  6.75% {
    background-position: -735rem 10rem;
  }
  7.5% {
    background-position: -815rem 10rem;
  }
  8.25% {
    background-position: -895rem 10rem;
  }
  9.75% {
    background-position: -15rem -70rem;
  }
  10.5% {
    background-position: -95rem -70rem;
  }
  11.25% {
    background-position: -175rem -70rem;
  }
  12% {
    background-position: -255rem -70rem;
  }
  12.75% {
    background-position: -335rem -70rem;
  }
  13.5% {
    background-position: -415rem -70rem;
  }
  14.25% {
    background-position: -495rem -70rem;
  }
  15% {
    background-position: -575rem -70rem;
  }
  15.75% {
    background-position: -655rem -70rem;
  }
  16.5% {
    background-position: -735rem -70rem;
  }
  17.25% {
    background-position: -815rem -70rem;
  }
  18% {
    background-position: -895rem -70rem;
  }
  19.5% {
    background-position: -15rem -150rem;
  }
  20.25% {
    background-position: -95rem -150rem;
  }
  21% {
    background-position: -175rem -150rem;
  }
  21.75% {
    background-position: -255rem -150rem;
  }
  22.5% {
    background-position: -335rem -150rem;
  }
  23.25% {
    background-position: -415rem -150rem;
  }
  24% {
    background-position: -495rem -150rem;
  }
  24.75% {
    background-position: -575rem -150rem;
  }
  25.5% {
    background-position: -655rem -150rem;
  }
  26.25% {
    background-position: -735rem -150rem;
  }
  27% {
    background-position: -815rem -150rem;
  }
  27.75% {
    background-position: -895rem -150rem;
  }
  29.25% {
    background-position: -15rem -230rem;
  }
  30% {
    background-position: -95rem -230rem;
  }
  30.75% {
    background-position: -175rem -230rem;
  }
  31.5% {
    background-position: -255rem -230rem;
  }
  32.25% {
    background-position: -335rem -230rem;
  }
  33% {
    background-position: -415rem -230rem;
  }
  33.75% {
    background-position: -495rem -230rem;
  }
  34.5% {
    background-position: -575rem -230rem;
  }
  35.25% {
    background-position: -655rem -230rem;
  }
  36% {
    background-position: -735rem -230rem;
  }
  36.75% {
    background-position: -815rem -230rem;
  }
  37.5% {
    background-position: -895rem -230rem;
  }
  39% {
    background-position: -15rem -310rem;
  }
  39.75% {
    background-position: -95rem -310rem;
  }
  40.5% {
    background-position: -175rem -310rem;
  }
  41.25% {
    background-position: -255rem -310rem;
  }
  42% {
    background-position: -335rem -310rem;
  }
  42.75% {
    background-position: -415rem -310rem;
  }
  43.5% {
    background-position: -495rem -310rem;
  }
  44.25% {
    background-position: -575rem -310rem;
  }
  45% {
    background-position: -655rem -310rem;
  }
  45.75% {
    background-position: -735rem -310rem;
  }
  46.5% {
    background-position: -815rem -310rem;
  }
  47.25% {
    background-position: -895rem -310rem;
  }
  48.75% {
    background-position: -15rem -390rem;
  }
  49.5% {
    background-position: -95rem -390rem;
  }
  50.25% {
    background-position: -175rem -390rem;
  }
  51% {
    background-position: -255rem -390rem;
  }
  51.75% {
    background-position: -335rem -390rem;
  }
  52.5% {
    background-position: -415rem -390rem;
  }
  53.25% {
    background-position: -495rem -390rem;
  }
  54% {
    background-position: -575rem -390rem;
  }
  54.75% {
    background-position: -655rem -390rem;
  }
  55.5% {
    background-position: -735rem -390rem;
  }
  56.25% {
    background-position: -815rem -390rem;
  }
  57% {
    background-position: -895rem -390rem;
  }
  58.5% {
    background-position: -15rem -470rem;
  }
  59.25% {
    background-position: -95rem -470rem;
  }
  60% {
    background-position: -175rem -470rem;
  }
  60.75% {
    background-position: -255rem -470rem;
  }
  61.5% {
    background-position: -335rem -470rem;
  }
  62.25% {
    background-position: -415rem -470rem;
  }
  63% {
    background-position: -495rem -470rem;
  }
  63.75% {
    background-position: -575rem -470rem;
  }
  64.5% {
    background-position: -655rem -470rem;
  }
  65.25% {
    background-position: -735rem -470rem;
  }
  66% {
    background-position: -815rem -470rem;
  }
  66.75% {
    background-position: -895rem -470rem;
  }
  68.25% {
    background-position: -15rem -550rem;
  }
  69% {
    background-position: -95rem -550rem;
  }
  69.75% {
    background-position: -175rem -550rem;
  }
  70.5% {
    background-position: -255rem -550rem;
  }
  71.25% {
    background-position: -335rem -550rem;
  }
  72% {
    background-position: -415rem -550rem;
  }
  72.75% {
    background-position: -495rem -550rem;
  }
  73.5% {
    background-position: -575rem -550rem;
  }
  74.25% {
    background-position: -655rem -550rem;
  }
  75% {
    background-position: -735rem -550rem;
  }
  75.75% {
    background-position: -815rem -550rem;
  }
  76.5% {
    background-position: -895rem -550rem;
  }
  78% {
    background-position: -15rem -630rem;
  }
  78.75% {
    background-position: -95rem -630rem;
  }
  79.5% {
    background-position: -175rem -630rem;
  }
  80.25% {
    background-position: -255rem -630rem;
  }
  81% {
    background-position: -335rem -630rem;
  }
  81.75% {
    background-position: -415rem -630rem;
  }
  82.5% {
    background-position: -495rem -630rem;
  }
  83.25% {
    background-position: -575rem -630rem;
  }
  84% {
    background-position: -655rem -630rem;
  }
  84.75% {
    background-position: -735rem -630rem;
  }
  85.5% {
    background-position: -815rem -630rem;
  }
  86.25% {
    background-position: -895rem -630rem;
  }
  87.75% {
    background-position: -15rem -710rem;
  }
  88.5% {
    background-position: -95rem -710rem;
  }
  89.25% {
    background-position: -175rem -710rem;
  }
  90% {
    background-position: -255rem -710rem;
  }
  90.75% {
    background-position: -335rem -710rem;
  }
  91.5% {
    background-position: -415rem -710rem;
  }
  92.25% {
    background-position: -495rem -710rem;
  }
  93% {
    background-position: -575rem -710rem;
  }
  93.75% {
    background-position: -655rem -710rem;
  }
  94.5% {
    background-position: -735rem -710rem;
  }
  95.25% {
    background-position: -815rem -710rem;
  }
  96% {
    background-position: -895rem -710rem;
  }
  97.5% {
    background-position: -15rem -790rem;
  }
  98.25% {
    background-position: -95rem -790rem;
  }
  99% {
    background-position: -175rem -790rem;
  }
  99.75% {
    background-position: -255rem -790rem;
  }
  100% {
    background-position: -335rem -790rem;
  }
}`, "",{"version":3,"sources":["webpack://./src/components/SpriteAnimation/SpriteAnimation.module.scss"],"names":[],"mappings":"AAAA;EACG,kBAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,yDAAA;EACA,4BAAA;EACA,oDAAA;AACH;;AAEA;EACG;IAAK,iCAAA;EAEN;EADC;IAAS,iCAAA;EAIV;EAHC;IAAO,kCAAA;EAMR;EALC;IAAQ,kCAAA;EAQT;EAPC;IAAK,kCAAA;EAUN;EATC;IAAQ,kCAAA;EAYT;EAXC;IAAO,kCAAA;EAcR;EAbC;IAAQ,kCAAA;EAgBT;EAfC;IAAK,kCAAA;EAkBN;EAjBC;IAAQ,kCAAA;EAoBT;EAnBC;IAAO,kCAAA;EAsBR;EArBC;IAAQ,kCAAA;EAwBT;EAvBC;IAAQ,kCAAA;EA0BT;EAzBC;IAAQ,kCAAA;EA4BT;EA3BC;IAAS,mCAAA;EA8BV;EA7BC;IAAM,mCAAA;EAgCP;EA/BC;IAAS,mCAAA;EAkCV;EAjCC;IAAQ,mCAAA;EAoCT;EAnCC;IAAS,mCAAA;EAsCV;EArCC;IAAM,mCAAA;EAwCP;EAvCC;IAAS,mCAAA;EA0CV;EAzCC;IAAQ,mCAAA;EA4CT;EA3CC;IAAS,mCAAA;EA8CV;EA7CC;IAAM,mCAAA;EAgDP;EA/CC;IAAQ,mCAAA;EAkDT;EAjDC;IAAS,mCAAA;EAoDV;EAnDC;IAAM,oCAAA;EAsDP;EArDC;IAAS,oCAAA;EAwDV;EAvDC;IAAQ,oCAAA;EA0DT;EAzDC;IAAS,oCAAA;EA4DV;EA3DC;IAAM,oCAAA;EA8DP;EA7DC;IAAS,oCAAA;EAgEV;EA/DC;IAAQ,oCAAA;EAkET;EAjEC;IAAS,oCAAA;EAoEV;EAnEC;IAAM,oCAAA;EAsEP;EArEC;IAAS,oCAAA;EAwEV;EAvEC;IAAS,mCAAA;EA0EV;EAzEC;IAAM,mCAAA;EA4EP;EA3EC;IAAS,oCAAA;EA8EV;EA7EC;IAAQ,oCAAA;EAgFT;EA/EC;IAAS,oCAAA;EAkFV;EAjFC;IAAM,oCAAA;EAoFP;EAnFC;IAAS,oCAAA;EAsFV;EArFC;IAAQ,oCAAA;EAwFT;EAvFC;IAAS,oCAAA;EA0FV;EAzFC;IAAM,oCAAA;EA4FP;EA3FC;IAAS,oCAAA;EA8FV;EA7FC;IAAQ,oCAAA;EAgGT;EA/FC;IAAM,mCAAA;EAkGP;EAjGC;IAAS,mCAAA;EAoGV;EAnGC;IAAQ,oCAAA;EAsGT;EArGC;IAAS,oCAAA;EAwGV;EAvGC;IAAM,oCAAA;EA0GP;EAzGC;IAAS,oCAAA;EA4GV;EA3GC;IAAQ,oCAAA;EA8GT;EA7GC;IAAS,oCAAA;EAgHV;EA/GC;IAAM,oCAAA;EAkHP;EAjHC;IAAS,oCAAA;EAoHV;EAnHC;IAAQ,oCAAA;EAsHT;EArHC;IAAS,oCAAA;EAwHV;EAvHC;IAAS,mCAAA;EA0HV;EAzHC;IAAQ,mCAAA;EA4HT;EA3HC;IAAS,oCAAA;EA8HV;EA7HC;IAAM,oCAAA;EAgIP;EA/HC;IAAS,oCAAA;EAkIV;EAjIC;IAAQ,oCAAA;EAoIT;EAnIC;IAAS,oCAAA;EAsIV;EArIC;IAAM,oCAAA;EAwIP;EAvIC;IAAS,oCAAA;EA0IV;EAzIC;IAAQ,oCAAA;EA4IT;EA3IC;IAAS,oCAAA;EA8IV;EA7IC;IAAM,oCAAA;EAgJP;EA/IC;IAAQ,mCAAA;EAkJT;EAjJC;IAAS,mCAAA;EAoJV;EAnJC;IAAM,oCAAA;EAsJP;EArJC;IAAS,oCAAA;EAwJV;EAvJC;IAAQ,oCAAA;EA0JT;EAzJC;IAAS,oCAAA;EA4JV;EA3JC;IAAM,oCAAA;EA8JP;EA7JC;IAAS,oCAAA;EAgKV;EA/JC;IAAQ,oCAAA;EAkKT;EAjKC;IAAS,oCAAA;EAoKV;EAnKC;IAAM,oCAAA;EAsKP;EArKC;IAAS,oCAAA;EAwKV;EAvKC;IAAS,mCAAA;EA0KV;EAzKC;IAAM,mCAAA;EA4KP;EA3KC;IAAS,oCAAA;EA8KV;EA7KC;IAAQ,oCAAA;EAgLT;EA/KC;IAAS,oCAAA;EAkLV;EAjLC;IAAM,oCAAA;EAoLP;EAnLC;IAAS,oCAAA;EAsLV;EArLC;IAAQ,oCAAA;EAwLT;EAvLC;IAAS,oCAAA;EA0LV;EAzLC;IAAM,oCAAA;EA4LP;EA3LC;IAAS,oCAAA;EA8LV;EA7LC;IAAQ,oCAAA;EAgMT;EA/LC;IAAM,mCAAA;EAkMP;EAjMC;IAAS,mCAAA;EAoMV;EAnMC;IAAQ,oCAAA;EAsMT;EArMC;IAAS,oCAAA;EAwMV;EAvMC;IAAM,oCAAA;EA0MP;EAzMC;IAAS,oCAAA;EA4MV;EA3MC;IAAQ,oCAAA;EA8MT;EA7MC;IAAS,oCAAA;EAgNV;EA/MC;IAAM,oCAAA;EAkNP;EAjNC;IAAS,oCAAA;EAoNV;EAnNC;IAAQ,oCAAA;EAsNT;EArNC;IAAS,oCAAA;EAwNV;EAvNC;IAAS,mCAAA;EA0NV;EAzNC;IAAQ,mCAAA;EA4NT;EA3NC;IAAS,oCAAA;EA8NV;EA7NC;IAAM,oCAAA;EAgOP;EA/NC;IAAS,oCAAA;EAkOV;EAjOC;IAAQ,oCAAA;EAoOT;EAnOC;IAAS,oCAAA;EAsOV;EArOC;IAAM,oCAAA;EAwOP;EAvOC;IAAS,oCAAA;EA0OV;EAzOC;IAAQ,oCAAA;EA4OT;EA3OC;IAAS,oCAAA;EA8OV;EA7OC;IAAM,oCAAA;EAgPP;EA/OC;IAAQ,mCAAA;EAkPT;EAjPC;IAAS,mCAAA;EAoPV;EAnPC;IAAM,oCAAA;EAsPP;EArPC;IAAS,oCAAA;EAwPV;EAvPC;IAAO,oCAAA;EA0PR;AACF","sourcesContent":[".spritesheet {\n   position: absolute; \n   z-index: 1;\n   right: 0rem;\n   width: 65rem;\n   height: 80rem;\n   background-image: url('/Users/tylerpierson/portfolio/public/img/tyler-spritesheet.png');\n   background-repeat: no-repeat;\n   animation: play 8s steps(1) infinite;\n}\n\n@keyframes play {\n   0% { background-position: -15rem 10rem; }\n   10.75% { background-position: -95rem 10rem; }\n   1.5% { background-position: -175rem 10rem; }\n   2.25% { background-position: -255rem 10rem; }\n   3% { background-position: -335rem 10rem; }\n   3.75% { background-position: -415rem 10rem; }\n   4.5% { background-position: -495rem 10rem; }\n   5.25% { background-position: -575rem 10rem; }\n   6% { background-position: -655rem 10rem; }\n   6.75% { background-position: -735rem 10rem; }\n   7.5% { background-position: -815rem 10rem; }\n   8.25% { background-position: -895rem 10rem; }\n   9.75% { background-position: -15rem -70rem; }\n   10.5% { background-position: -95rem -70rem; }\n   11.25% { background-position: -175rem -70rem; }\n   12% { background-position: -255rem -70rem; }\n   12.75% { background-position: -335rem -70rem; }\n   13.5% { background-position: -415rem -70rem; }\n   14.25% { background-position: -495rem -70rem; }\n   15% { background-position: -575rem -70rem; }\n   15.75% { background-position: -655rem -70rem; }\n   16.5% { background-position: -735rem -70rem; }\n   17.25% { background-position: -815rem -70rem; }\n   18% { background-position: -895rem -70rem; }\n   19.5% { background-position: -15rem -150rem; }\n   20.25% { background-position: -95rem -150rem; }\n   21% { background-position: -175rem -150rem; }\n   21.75% { background-position: -255rem -150rem; }\n   22.5% { background-position: -335rem -150rem; }\n   23.25% { background-position: -415rem -150rem; }\n   24% { background-position: -495rem -150rem; }\n   24.75% { background-position: -575rem -150rem; }\n   25.5% { background-position: -655rem -150rem; }\n   26.25% { background-position: -735rem -150rem; }\n   27% { background-position: -815rem -150rem; }\n   27.75% { background-position: -895rem -150rem; }\n   29.25% { background-position: -15rem -230rem; }\n   30% { background-position: -95rem -230rem; }\n   30.75% { background-position: -175rem -230rem; }\n   31.5% { background-position: -255rem -230rem; }\n   32.25% { background-position: -335rem -230rem; }\n   33% { background-position: -415rem -230rem; }\n   33.75% { background-position: -495rem -230rem; }\n   34.5% { background-position: -575rem -230rem; }\n   35.25% { background-position: -655rem -230rem; }\n   36% { background-position: -735rem -230rem; }\n   36.75% { background-position: -815rem -230rem; }\n   37.5% { background-position: -895rem -230rem; }\n   39% { background-position: -15rem -310rem; }\n   39.75% { background-position: -95rem -310rem; }\n   40.5% { background-position: -175rem -310rem; }\n   41.25% { background-position: -255rem -310rem; }\n   42% { background-position: -335rem -310rem; }\n   42.75% { background-position: -415rem -310rem; }\n   43.5% { background-position: -495rem -310rem; }\n   44.25% { background-position: -575rem -310rem; }\n   45% { background-position: -655rem -310rem; }\n   45.75% { background-position: -735rem -310rem; }\n   46.5% { background-position: -815rem -310rem; }\n   47.25% { background-position: -895rem -310rem; }\n   48.75% { background-position: -15rem -390rem; }\n   49.5% { background-position: -95rem -390rem; }\n   50.25% { background-position: -175rem -390rem; }\n   51% { background-position: -255rem -390rem; }\n   51.75% { background-position: -335rem -390rem; }\n   52.5% { background-position: -415rem -390rem; }\n   53.25% { background-position: -495rem -390rem; }\n   54% { background-position: -575rem -390rem; }\n   54.75% { background-position: -655rem -390rem; }\n   55.5% { background-position: -735rem -390rem; }\n   56.25% { background-position: -815rem -390rem; }\n   57% { background-position: -895rem -390rem; }\n   58.5% { background-position: -15rem -470rem; }\n   59.25% { background-position: -95rem -470rem; }\n   60% { background-position: -175rem -470rem; }\n   60.75% { background-position: -255rem -470rem; }\n   61.5% { background-position: -335rem -470rem; }\n   62.25% { background-position: -415rem -470rem; }\n   63% { background-position: -495rem -470rem; }\n   63.75% { background-position: -575rem -470rem; }\n   64.5% { background-position: -655rem -470rem; }\n   65.25% { background-position: -735rem -470rem; }\n   66% { background-position: -815rem -470rem; }\n   66.75% { background-position: -895rem -470rem; }\n   68.25% { background-position: -15rem -550rem; }\n   69% { background-position: -95rem -550rem; }\n   69.75% { background-position: -175rem -550rem; }\n   70.5% { background-position: -255rem -550rem; }\n   71.25% { background-position: -335rem -550rem; }\n   72% { background-position: -415rem -550rem; }\n   72.75% { background-position: -495rem -550rem; }\n   73.5% { background-position: -575rem -550rem; }\n   74.25% { background-position: -655rem -550rem; }\n   75% { background-position: -735rem -550rem; }\n   75.75% { background-position: -815rem -550rem; }\n   76.5% { background-position: -895rem -550rem; }\n   78% { background-position: -15rem -630rem; }\n   78.75% { background-position: -95rem -630rem; }\n   79.5% { background-position: -175rem -630rem; }\n   80.25% { background-position: -255rem -630rem; }\n   81% { background-position: -335rem -630rem; }\n   81.75% { background-position: -415rem -630rem; }\n   82.5% { background-position: -495rem -630rem; }\n   83.25% { background-position: -575rem -630rem; }\n   84% { background-position: -655rem -630rem; }\n   84.75% { background-position: -735rem -630rem; }\n   85.5% { background-position: -815rem -630rem; }\n   86.25% { background-position: -895rem -630rem; }\n   87.75% { background-position: -15rem -710rem; }\n   88.5% { background-position: -95rem -710rem; }\n   89.25% { background-position: -175rem -710rem; }\n   90% { background-position: -255rem -710rem; }\n   90.75% { background-position: -335rem -710rem; }\n   91.5% { background-position: -415rem -710rem; }\n   92.25% { background-position: -495rem -710rem; }\n   93% { background-position: -575rem -710rem; }\n   93.75% { background-position: -655rem -710rem; }\n   94.5% { background-position: -735rem -710rem; }\n   95.25% { background-position: -815rem -710rem; }\n   96% { background-position: -895rem -710rem; }\n   97.5% { background-position: -15rem -790rem; }\n   98.25% { background-position: -95rem -790rem; }\n   99% { background-position: -175rem -790rem; }\n   99.75% { background-position: -255rem -790rem; }\n   100% { background-position: -335rem -790rem; }\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"spritesheet": `BYTea12oqUEziEWvzniO`,
	"play": `uw8ss7Iscm1Hn8eZU0qa`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/SpriteAnimation/SpriteAnimationMed.module.scss":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/SpriteAnimation/SpriteAnimationMed.module.scss ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./public/img/tyler-spritesheet-med.png */ "./public/img/tyler-spritesheet-med.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.l116pAhUGRvidbja3Snr {
  position: absolute;
  z-index: 1;
  top: 10vh;
  right: 0rem;
  width: 48rem;
  height: 48rem;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-repeat: no-repeat;
  animation: DrKRsjH298rmCC_mdiMo 8s steps(1) infinite;
}

@keyframes DrKRsjH298rmCC_mdiMo {
  0% {
    background-position: 0rem 0rem;
  }
  10.75% {
    background-position: -48rem 0rem;
  }
  1.5% {
    background-position: -96rem 0rem;
  }
  2.25% {
    background-position: -144rem 0rem;
  }
  3% {
    background-position: -192rem 0rem;
  }
  3.75% {
    background-position: -240rem 0rem;
  }
  4.5% {
    background-position: -288rem 0rem;
  }
  5.25% {
    background-position: -336rem 0rem;
  }
  6% {
    background-position: -384rem 0rem;
  }
  6.75% {
    background-position: -432rem 0rem;
  }
  7.5% {
    background-position: -480rem 0rem;
  }
  8.25% {
    background-position: -528rem 0rem;
  }
  9.75% {
    background-position: 0rem -48rem;
  }
  10.5% {
    background-position: -48rem -48rem;
  }
  11.25% {
    background-position: -96rem -48rem;
  }
  12% {
    background-position: -144rem -48rem;
  }
  12.75% {
    background-position: -192rem -48rem;
  }
  13.5% {
    background-position: -240rem -48rem;
  }
  14.25% {
    background-position: -288rem -48rem;
  }
  15% {
    background-position: -336rem -48rem;
  }
  15.75% {
    background-position: -384rem -48rem;
  }
  16.5% {
    background-position: -432rem -48rem;
  }
  17.25% {
    background-position: -480rem -48rem;
  }
  18% {
    background-position: -528rem -48rem;
  }
  19.5% {
    background-position: 0rem -96rem;
  }
  20.25% {
    background-position: -48rem -96rem;
  }
  21% {
    background-position: -96rem -96rem;
  }
  21.75% {
    background-position: -144rem -96rem;
  }
  22.5% {
    background-position: -192rem -96rem;
  }
  23.25% {
    background-position: -240rem -96rem;
  }
  24% {
    background-position: -288rem -96rem;
  }
  24.75% {
    background-position: -336rem -96rem;
  }
  25.5% {
    background-position: -384rem -96rem;
  }
  26.25% {
    background-position: -432rem -96rem;
  }
  27% {
    background-position: -480rem -96rem;
  }
  27.75% {
    background-position: -528rem -96rem;
  }
  29.25% {
    background-position: 0rem -144rem;
  }
  30% {
    background-position: -48rem -144rem;
  }
  30.75% {
    background-position: -96rem -144rem;
  }
  31.5% {
    background-position: -144rem -144rem;
  }
  32.25% {
    background-position: -192rem -144rem;
  }
  33% {
    background-position: -240rem -144rem;
  }
  33.75% {
    background-position: -288rem -144rem;
  }
  34.5% {
    background-position: -336rem -144rem;
  }
  35.25% {
    background-position: -384rem -144rem;
  }
  36% {
    background-position: -432rem -144rem;
  }
  36.75% {
    background-position: -480rem -144rem;
  }
  37.5% {
    background-position: -528rem -144rem;
  }
  39% {
    background-position: 0rem -192rem;
  }
  39.75% {
    background-position: -48rem -192rem;
  }
  40.5% {
    background-position: -96rem -192rem;
  }
  41.25% {
    background-position: -144rem -192rem;
  }
  42% {
    background-position: -192rem -192rem;
  }
  42.75% {
    background-position: -240rem -192rem;
  }
  43.5% {
    background-position: -288rem -192rem;
  }
  44.25% {
    background-position: -336rem -192rem;
  }
  45% {
    background-position: -384rem -192rem;
  }
  45.75% {
    background-position: -432rem -192rem;
  }
  46.5% {
    background-position: -480rem -192rem;
  }
  47.25% {
    background-position: -528rem -192rem;
  }
  48.75% {
    background-position: 0rem -240rem;
  }
  49.5% {
    background-position: -48rem -240rem;
  }
  50.25% {
    background-position: -96rem -240rem;
  }
  51% {
    background-position: -144rem -240rem;
  }
  51.75% {
    background-position: -192rem -240rem;
  }
  52.5% {
    background-position: -240rem -240rem;
  }
  53.25% {
    background-position: -288rem -240rem;
  }
  54% {
    background-position: -336rem -240rem;
  }
  55.5% {
    background-position: -384rem -240rem;
  }
  54.75% {
    background-position: -432rem -240rem;
  }
  55.5% {
    background-position: -480rem -240rem;
  }
  56.25% {
    background-position: -528rem -240rem;
  }
  57% {
    background-position: 0rem -288rem;
  }
  57.75% {
    background-position: -48rem -288rem;
  }
  58.5% {
    background-position: -96rem -288rem;
  }
  59.25% {
    background-position: -144rem -288rem;
  }
  60% {
    background-position: -192rem -288rem;
  }
  60.75% {
    background-position: -240rem -288rem;
  }
  61.5% {
    background-position: -288rem -288rem;
  }
  62.25% {
    background-position: -336rem -288rem;
  }
  63% {
    background-position: -384rem -288rem;
  }
  63.75% {
    background-position: -432rem -288rem;
  }
  64.5% {
    background-position: -480rem -288rem;
  }
  65.25% {
    background-position: -528rem -288rem;
  }
  66% {
    background-position: 0rem -336rem;
  }
  66.75% {
    background-position: -48rem -336rem;
  }
  67.5% {
    background-position: -96rem -336rem;
  }
  68.25% {
    background-position: -144rem -336rem;
  }
  69% {
    background-position: -192rem -336rem;
  }
  69.75% {
    background-position: -240rem -336rem;
  }
  70.5% {
    background-position: -288rem -336rem;
  }
  71.25% {
    background-position: -336rem -336rem;
  }
  72% {
    background-position: -384rem -336rem;
  }
  72.75% {
    background-position: -432rem -336rem;
  }
  73.5% {
    background-position: -480rem -336rem;
  }
  74.25% {
    background-position: -528rem -336rem;
  }
  75% {
    background-position: 0rem -384rem;
  }
  75.75% {
    background-position: -48rem -384rem;
  }
  76.5% {
    background-position: -96rem -384rem;
  }
  77.25% {
    background-position: -144rem -384rem;
  }
  78% {
    background-position: -192rem -384rem;
  }
  78.75% {
    background-position: -240rem -384rem;
  }
  79.5% {
    background-position: -288rem -384rem;
  }
  80.25% {
    background-position: -336rem -384rem;
  }
  81% {
    background-position: -384rem -384rem;
  }
  81.75% {
    background-position: -432rem -384rem;
  }
  82.5% {
    background-position: -480rem -384rem;
  }
  83.25% {
    background-position: -528rem -384rem;
  }
  84% {
    background-position: 0rem -432rem;
  }
  84.75% {
    background-position: -48rem -432rem;
  }
  85.5% {
    background-position: -96rem -432rem;
  }
  86.25% {
    background-position: -144rem -432rem;
  }
  87% {
    background-position: -192rem -432rem;
  }
  87.75% {
    background-position: -240rem -432rem;
  }
  88.5% {
    background-position: -288rem -432rem;
  }
  89.25% {
    background-position: -336rem -432rem;
  }
  90% {
    background-position: -384rem -432rem;
  }
  90.75% {
    background-position: -432rem -432rem;
  }
  91.5% {
    background-position: -480rem -432rem;
  }
  92.25% {
    background-position: -528rem -432rem;
  }
  93.75% {
    background-position: 0rem -480rem;
  }
  94.5% {
    background-position: -48rem -480rem;
  }
  95.25% {
    background-position: -96rem -480rem;
  }
  96% {
    background-position: -144rem -480rem;
  }
  96.75% {
    background-position: -192rem -480rem;
  }
  97.5% {
    background-position: -240rem -480rem;
  }
  98.25% {
    background-position: -288rem -480rem;
  }
  99% {
    background-position: -336rem -480rem;
  }
  99.75% {
    background-position: -384rem -480rem;
  }
  100% {
    background-position: -432rem -480rem;
  }
}
@media (max-width: 800px) {
  .l116pAhUGRvidbja3Snr {
    top: 0;
    margin-bottom: 1rem;
  }
}`, "",{"version":3,"sources":["webpack://./src/components/SpriteAnimation/SpriteAnimationMed.module.scss"],"names":[],"mappings":"AAAA;EACI,kBAAA;EACA,UAAA;EACA,SAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,yDAAA;EACA,4BAAA;EACA,oDAAA;AACJ;;AAEC;EACG;IAAK,8BAAA;EAEP;EADE;IAAS,gCAAA;EAIX;EAHE;IAAO,gCAAA;EAMT;EALE;IAAQ,iCAAA;EAQV;EAPE;IAAK,iCAAA;EAUP;EATE;IAAQ,iCAAA;EAYV;EAXE;IAAO,iCAAA;EAcT;EAbE;IAAQ,iCAAA;EAgBV;EAfE;IAAK,iCAAA;EAkBP;EAjBE;IAAQ,iCAAA;EAoBV;EAnBE;IAAO,iCAAA;EAsBT;EArBE;IAAQ,iCAAA;EAwBV;EAvBE;IAAQ,gCAAA;EA0BV;EAzBE;IAAQ,kCAAA;EA4BV;EA3BE;IAAS,kCAAA;EA8BX;EA7BE;IAAM,mCAAA;EAgCR;EA/BE;IAAS,mCAAA;EAkCX;EAjCE;IAAQ,mCAAA;EAoCV;EAnCE;IAAS,mCAAA;EAsCX;EArCE;IAAM,mCAAA;EAwCR;EAvCE;IAAS,mCAAA;EA0CX;EAzCE;IAAQ,mCAAA;EA4CV;EA3CE;IAAS,mCAAA;EA8CX;EA7CE;IAAM,mCAAA;EAgDR;EA/CE;IAAQ,gCAAA;EAkDV;EAjDE;IAAS,kCAAA;EAoDX;EAnDE;IAAM,kCAAA;EAsDR;EArDE;IAAS,mCAAA;EAwDX;EAvDE;IAAQ,mCAAA;EA0DV;EAzDE;IAAS,mCAAA;EA4DX;EA3DE;IAAM,mCAAA;EA8DR;EA7DE;IAAS,mCAAA;EAgEX;EA/DE;IAAQ,mCAAA;EAkEV;EAjEE;IAAS,mCAAA;EAoEX;EAnEE;IAAM,mCAAA;EAsER;EArEE;IAAS,mCAAA;EAwEX;EAvEE;IAAS,iCAAA;EA0EX;EAzEE;IAAM,mCAAA;EA4ER;EA3EE;IAAS,mCAAA;EA8EX;EA7EE;IAAQ,oCAAA;EAgFV;EA/EE;IAAS,oCAAA;EAkFX;EAjFE;IAAM,oCAAA;EAoFR;EAnFE;IAAS,oCAAA;EAsFX;EArFE;IAAQ,oCAAA;EAwFV;EAvFE;IAAS,oCAAA;EA0FX;EAzFE;IAAM,oCAAA;EA4FR;EA3FE;IAAS,oCAAA;EA8FX;EA7FE;IAAQ,oCAAA;EAgGV;EA/FE;IAAM,iCAAA;EAkGR;EAjGE;IAAS,mCAAA;EAoGX;EAnGE;IAAQ,mCAAA;EAsGV;EArGE;IAAS,oCAAA;EAwGX;EAvGE;IAAM,oCAAA;EA0GR;EAzGE;IAAS,oCAAA;EA4GX;EA3GE;IAAQ,oCAAA;EA8GV;EA7GE;IAAS,oCAAA;EAgHX;EA/GE;IAAM,oCAAA;EAkHR;EAjHE;IAAS,oCAAA;EAoHX;EAnHE;IAAQ,oCAAA;EAsHV;EArHE;IAAS,oCAAA;EAwHX;EAvHE;IAAS,iCAAA;EA0HX;EAzHE;IAAQ,mCAAA;EA4HV;EA3HE;IAAS,mCAAA;EA8HX;EA7HE;IAAM,oCAAA;EAgIR;EA/HE;IAAS,oCAAA;EAkIX;EAjIE;IAAQ,oCAAA;EAoIV;EAnIE;IAAS,oCAAA;EAsIX;EArIE;IAAM,oCAAA;EAwIR;EAvIE;IAAQ,oCAAA;EA0IV;EAzIE;IAAS,oCAAA;EA4IX;EA3IE;IAAQ,oCAAA;EA8IV;EA7IE;IAAS,oCAAA;EAgJX;EA/IE;IAAM,iCAAA;EAkJR;EAjJE;IAAS,mCAAA;EAoJX;EAnJE;IAAQ,mCAAA;EAsJV;EArJE;IAAS,oCAAA;EAwJX;EAvJE;IAAM,oCAAA;EA0JR;EAzJE;IAAS,oCAAA;EA4JX;EA3JE;IAAQ,oCAAA;EA8JV;EA7JE;IAAS,oCAAA;EAgKX;EA/JE;IAAM,oCAAA;EAkKR;EAjKE;IAAS,oCAAA;EAoKX;EAnKE;IAAQ,oCAAA;EAsKV;EArKE;IAAS,oCAAA;EAwKX;EAvKE;IAAM,iCAAA;EA0KR;EAzKE;IAAS,mCAAA;EA4KX;EA3KE;IAAQ,mCAAA;EA8KV;EA7KE;IAAS,oCAAA;EAgLX;EA/KE;IAAM,oCAAA;EAkLR;EAjLE;IAAS,oCAAA;EAoLX;EAnLE;IAAQ,oCAAA;EAsLV;EArLE;IAAS,oCAAA;EAwLX;EAvLE;IAAM,oCAAA;EA0LR;EAzLE;IAAS,oCAAA;EA4LX;EA3LE;IAAQ,oCAAA;EA8LV;EA7LE;IAAS,oCAAA;EAgMX;EA/LE;IAAM,iCAAA;EAkMR;EAjME;IAAS,mCAAA;EAoMX;EAnME;IAAQ,mCAAA;EAsMV;EArME;IAAS,oCAAA;EAwMX;EAvME;IAAM,oCAAA;EA0MR;EAzME;IAAS,oCAAA;EA4MX;EA3ME;IAAQ,oCAAA;EA8MV;EA7ME;IAAS,oCAAA;EAgNX;EA/ME;IAAM,oCAAA;EAkNR;EAjNE;IAAS,oCAAA;EAoNX;EAnNE;IAAQ,oCAAA;EAsNV;EArNE;IAAS,oCAAA;EAwNX;EAvNE;IAAM,iCAAA;EA0NR;EAzNE;IAAS,mCAAA;EA4NX;EA3NE;IAAQ,mCAAA;EA8NV;EA7NE;IAAS,oCAAA;EAgOX;EA/NE;IAAM,oCAAA;EAkOR;EAjOE;IAAS,oCAAA;EAoOX;EAnOE;IAAQ,oCAAA;EAsOV;EArOE;IAAS,oCAAA;EAwOX;EAvOE;IAAM,oCAAA;EA0OR;EAzOE;IAAS,oCAAA;EA4OX;EA3OE;IAAQ,oCAAA;EA8OV;EA7OE;IAAS,oCAAA;EAgPX;EA/OE;IAAS,iCAAA;EAkPX;EAjPE;IAAQ,mCAAA;EAoPV;EAnPE;IAAS,mCAAA;EAsPX;EArPE;IAAM,oCAAA;EAwPR;EAvPE;IAAS,oCAAA;EA0PX;EAzPE;IAAQ,oCAAA;EA4PV;EA3PE;IAAS,oCAAA;EA8PX;EA7PE;IAAM,oCAAA;EAgQR;EA/PE;IAAS,oCAAA;EAkQX;EAjQE;IAAO,oCAAA;EAoQT;AACF;AAlQC;EACG;IACI,MAAA;IACA,mBAAA;EAoQN;AACF","sourcesContent":[".spritesheet {\n    position: absolute; \n    z-index: 1;\n    top: 10vh;\n    right: 0rem;\n    width: 48rem;\n    height: 48rem;\n    background-image: url('/Users/tylerpierson/software_projects/class-website/public/img/tyler-spritesheet-med.png');\n    background-repeat: no-repeat;\n    animation: play 8s steps(1) infinite;\n }\n \n @keyframes play {\n    0% { background-position: 0rem 0rem; }\n    10.75% { background-position: -48rem 0rem; }\n    1.5% { background-position: -96rem 0rem; }\n    2.25% { background-position: -144rem 0rem; }\n    3% { background-position: -192rem 0rem; }\n    3.75% { background-position: -240rem 0rem; }\n    4.5% { background-position: -288rem 0rem; }\n    5.25% { background-position: -336rem 0rem; }\n    6% { background-position: -384rem 0rem; }\n    6.75% { background-position: -432rem 0rem; }\n    7.5% { background-position: -480rem 0rem; }\n    8.25% { background-position: -528rem 0rem; }\n    9.75% { background-position: 0rem -48rem; }\n    10.5% { background-position: -48rem -48rem; }\n    11.25% { background-position: -96rem -48rem; }\n    12% { background-position: -144rem -48rem; }\n    12.75% { background-position: -192rem -48rem; }\n    13.5% { background-position: -240rem -48rem; }\n    14.25% { background-position: -288rem -48rem; }\n    15% { background-position: -336rem -48rem; }\n    15.75% { background-position: -384rem -48rem; }\n    16.5% { background-position: -432rem -48rem; }\n    17.25% { background-position: -480rem -48rem; }\n    18% { background-position: -528rem -48rem; }\n    19.5% { background-position: 0rem -96rem; }\n    20.25% { background-position: -48rem -96rem; }\n    21% { background-position: -96rem -96rem; }\n    21.75% { background-position: -144rem -96rem; }\n    22.5% { background-position: -192rem -96rem; }\n    23.25% { background-position: -240rem -96rem; }\n    24% { background-position: -288rem -96rem; }\n    24.75% { background-position: -336rem -96rem; }\n    25.5% { background-position: -384rem -96rem; }\n    26.25% { background-position: -432rem -96rem; }\n    27% { background-position: -480rem -96rem; }\n    27.75% { background-position: -528rem -96rem; }\n    29.25% { background-position: 0rem -144rem; }\n    30% { background-position: -48rem -144rem; }\n    30.75% { background-position: -96rem -144rem; }\n    31.5% { background-position: -144rem -144rem; }\n    32.25% { background-position: -192rem -144rem; }\n    33% { background-position: -240rem -144rem; }\n    33.75% { background-position: -288rem -144rem; }\n    34.5% { background-position: -336rem -144rem; }\n    35.25% { background-position: -384rem -144rem; }\n    36% { background-position: -432rem -144rem; }\n    36.75% { background-position: -480rem -144rem; }\n    37.5% { background-position: -528rem -144rem; }\n    39% { background-position: 0rem -192rem; }\n    39.75% { background-position: -48rem -192rem; }\n    40.5% { background-position: -96rem -192rem; }\n    41.25% { background-position: -144rem -192rem; }\n    42% { background-position: -192rem -192rem; }\n    42.75% { background-position: -240rem -192rem; }\n    43.5% { background-position: -288rem -192rem; }\n    44.25% { background-position: -336rem -192rem; }\n    45% { background-position: -384rem -192rem; }\n    45.75% { background-position: -432rem -192rem; }\n    46.5% { background-position: -480rem -192rem; }\n    47.25% { background-position: -528rem -192rem; }\n    48.75% { background-position: 0rem -240rem; }\n    49.5% { background-position: -48rem -240rem; }\n    50.25% { background-position: -96rem -240rem; }\n    51% { background-position: -144rem -240rem; }\n    51.75% { background-position: -192rem -240rem; }\n    52.5% { background-position: -240rem -240rem; }\n    53.25% { background-position: -288rem -240rem; }\n    54% { background-position: -336rem -240rem; }\n    55.5% { background-position: -384rem -240rem; }\n    54.75% { background-position: -432rem -240rem; }\n    55.5% { background-position: -480rem -240rem; }\n    56.25% { background-position: -528rem -240rem; }\n    57% { background-position: 0rem -288rem; }\n    57.75% { background-position: -48rem -288rem; }\n    58.5% { background-position: -96rem -288rem; }\n    59.25% { background-position: -144rem -288rem; }\n    60% { background-position: -192rem -288rem; }\n    60.75% { background-position: -240rem -288rem; }\n    61.5% { background-position: -288rem -288rem; }\n    62.25% { background-position: -336rem -288rem; }\n    63% { background-position: -384rem -288rem; }\n    63.75% { background-position: -432rem -288rem; }\n    64.5% { background-position: -480rem -288rem; }\n    65.25% { background-position: -528rem -288rem; }\n    66% { background-position: 0rem -336rem; }\n    66.75% { background-position: -48rem -336rem; }\n    67.5% { background-position: -96rem -336rem; }\n    68.25% { background-position: -144rem -336rem; }\n    69% { background-position: -192rem -336rem; }\n    69.75% { background-position: -240rem -336rem; }\n    70.5% { background-position: -288rem -336rem; }\n    71.25% { background-position: -336rem -336rem; }\n    72% { background-position: -384rem -336rem; }\n    72.75% { background-position: -432rem -336rem; }\n    73.5% { background-position: -480rem -336rem; }\n    74.25% { background-position: -528rem -336rem; }\n    75% { background-position: 0rem -384rem; }\n    75.75% { background-position: -48rem -384rem; }\n    76.5% { background-position: -96rem -384rem; }\n    77.25% { background-position: -144rem -384rem; }\n    78% { background-position: -192rem -384rem; }\n    78.75% { background-position: -240rem -384rem; }\n    79.5% { background-position: -288rem -384rem; }\n    80.25% { background-position: -336rem -384rem; }\n    81% { background-position: -384rem -384rem; }\n    81.75% { background-position: -432rem -384rem; }\n    82.5% { background-position: -480rem -384rem; }\n    83.25% { background-position: -528rem -384rem; }\n    84% { background-position: 0rem -432rem; }\n    84.75% { background-position: -48rem -432rem; }\n    85.5% { background-position: -96rem -432rem; }\n    86.25% { background-position: -144rem -432rem; }\n    87% { background-position: -192rem -432rem; }\n    87.75% { background-position: -240rem -432rem; }\n    88.5% { background-position: -288rem -432rem; }\n    89.25% { background-position: -336rem -432rem; }\n    90% { background-position: -384rem -432rem; }\n    90.75% { background-position: -432rem -432rem; }\n    91.5% { background-position: -480rem -432rem; }\n    92.25% { background-position: -528rem -432rem; }\n    93.75% { background-position: 0rem -480rem; }\n    94.5% { background-position: -48rem -480rem; }\n    95.25% { background-position: -96rem -480rem; }\n    96% { background-position: -144rem -480rem; }\n    96.75% { background-position: -192rem -480rem; }\n    97.5% { background-position: -240rem -480rem; }\n    98.25% { background-position: -288rem -480rem; }\n    99% { background-position: -336rem -480rem; }\n    99.75% { background-position: -384rem -480rem; }\n    100% { background-position: -432rem -480rem; }\n }\n\n @media (max-width: 800px) {\n    .spritesheet {\n        top: 0;\n        margin-bottom: 1rem;\n    }\n }"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"spritesheet": `l116pAhUGRvidbja3Snr`,
	"play": `DrKRsjH298rmCC_mdiMo`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/SpriteAnimation/SpriteAnimationSm.module.scss":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/SpriteAnimation/SpriteAnimationSm.module.scss ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./public/img/tyler-spritesheet-sm.png */ "./public/img/tyler-spritesheet-sm.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.WJowwgIyV0h_yR6wpxdL {
  position: absolute;
  z-index: 1;
  transform: translate(100%, 100%);
  width: 9.6rem;
  height: 9.6rem;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-repeat: no-repeat;
  animation: rNgdABCo2UqaV5BSoxXW 8s steps(1) infinite;
}

@keyframes rNgdABCo2UqaV5BSoxXW {
  0% {
    background-position: 0rem 0rem;
  }
  0.75% {
    background-position: -9.6rem 0rem;
  }
  1.5% {
    background-position: -19.2rem 0rem;
  }
  2.25% {
    background-position: -28.8rem 0rem;
  }
  3% {
    background-position: -38.4rem 0rem;
  }
  3.75% {
    background-position: -48rem 0rem;
  }
  4.5% {
    background-position: -57.6rem 0rem;
  }
  5.25% {
    background-position: -67.2rem 0rem;
  }
  6% {
    background-position: -76.8rem 0rem;
  }
  6.75% {
    background-position: -86.4rem 0rem;
  }
  7.5% {
    background-position: -96rem 0rem;
  }
  8.25% {
    background-position: -105.6rem 0rem;
  }
  9.75% {
    background-position: 0rem -9.6rem;
  }
  10.5% {
    background-position: -9.6rem -9.6rem;
  }
  11.25% {
    background-position: -19.2rem -9.6rem;
  }
  12% {
    background-position: -28.8rem -9.6rem;
  }
  12.75% {
    background-position: -38.4rem -9.6rem;
  }
  13.5% {
    background-position: -48rem -9.6rem;
  }
  14.25% {
    background-position: -57.6rem -9.6rem;
  }
  15% {
    background-position: -67.2rem -9.6rem;
  }
  15.75% {
    background-position: -76.8rem -9.6rem;
  }
  16.5% {
    background-position: -86.4rem -9.6rem;
  }
  17.25% {
    background-position: -96rem -9.6rem;
  }
  18% {
    background-position: -105.6rem -9.6rem;
  }
  19.5% {
    background-position: 0rem -19.2rem;
  }
  20.25% {
    background-position: -9.6rem -19.2rem;
  }
  21% {
    background-position: -19.2rem -19.2rem;
  }
  21.75% {
    background-position: -28.8rem -19.2rem;
  }
  22.5% {
    background-position: -38.4rem -19.2rem;
  }
  23.25% {
    background-position: -48rem -19.2rem;
  }
  24% {
    background-position: -57.6rem -19.2rem;
  }
  24.75% {
    background-position: -67.2rem -19.2rem;
  }
  25.5% {
    background-position: -76.8rem -19.2rem;
  }
  26.25% {
    background-position: -86.4rem -19.2rem;
  }
  27% {
    background-position: -96rem -19.2rem;
  }
  27.75% {
    background-position: -105.6rem -19.2rem;
  }
  29.25% {
    background-position: 0rem -28.8rem;
  }
  30% {
    background-position: -9.6rem -28.8rem;
  }
  30.75% {
    background-position: -19.2rem -28.8rem;
  }
  31.5% {
    background-position: -28.8rem -28.8rem;
  }
  32.25% {
    background-position: -38.4rem -28.8rem;
  }
  33% {
    background-position: -48rem -28.8rem;
  }
  33.75% {
    background-position: -57.6rem -28.8rem;
  }
  34.5% {
    background-position: -67.2rem -28.8rem;
  }
  35.25% {
    background-position: -76.8rem -28.8rem;
  }
  36% {
    background-position: -86.4rem -28.8rem;
  }
  36.75% {
    background-position: -96rem -28.8rem;
  }
  37.5% {
    background-position: -105.6rem -28.8rem;
  }
  39% {
    background-position: 0rem -38.4rem;
  }
  39.75% {
    background-position: -9.6rem -38.4rem;
  }
  40.5% {
    background-position: -19.2rem -38.4rem;
  }
  41.25% {
    background-position: -28.8rem -38.4rem;
  }
  42% {
    background-position: -38.4rem -38.4rem;
  }
  42.75% {
    background-position: -48rem -38.4rem;
  }
  43.5% {
    background-position: -57.6rem -38.4rem;
  }
  44.25% {
    background-position: -67.2rem -38.4rem;
  }
  45% {
    background-position: -76.8rem -38.4rem;
  }
  45.75% {
    background-position: -86.4rem -38.4rem;
  }
  46.5% {
    background-position: -96rem -38.4rem;
  }
  47.25% {
    background-position: -105.6rem -38.4rem;
  }
  48% {
    background-position: 0rem -48;
  }
  48.75% {
    background-position: -9.6rem -48rem;
  }
  49.5% {
    background-position: -19.2rem -48rem;
  }
  50.25% {
    background-position: -28.8rem -48rem;
  }
  51% {
    background-position: -38.4rem -48rem;
  }
  51.75% {
    background-position: -48rem -48rem;
  }
  52.5% {
    background-position: -57.6rem -48rem;
  }
  53.25% {
    background-position: -67.2rem -48rem;
  }
  54% {
    background-position: -76.8rem -48rem;
  }
  54.75% {
    background-position: -86.4rem -48rem;
  }
  55.5% {
    background-position: -96rem -48rem;
  }
  56.25% {
    background-position: -105.6rem -48rem;
  }
  57% {
    background-position: 0rem -57.6rem;
  }
  57.75% {
    background-position: -9.6rem -57.6rem;
  }
  58.5% {
    background-position: -19.2rem -57.6rem;
  }
  59.25% {
    background-position: -28.8rem -57.6rem;
  }
  59.75% {
    background-position: -38.4rem -57.6rem;
  }
  60.75% {
    background-position: -48rem -57.6rem;
  }
  61.5% {
    background-position: -57.6rem -57.6rem;
  }
  62.25% {
    background-position: -67.2rem -57.6rem;
  }
  63% {
    background-position: -76.8rem -57.6rem;
  }
  63.75% {
    background-position: -86.4rem -57.6rem;
  }
  64.5% {
    background-position: -96rem -57.6rem;
  }
  65.25% {
    background-position: -105.6rem -57.6rem;
  }
  66% {
    background-position: 0rem -67.2rem;
  }
  66.75% {
    background-position: -9.6rem -67.2rem;
  }
  67.5% {
    background-position: -19.2rem -67.2rem;
  }
  68.25% {
    background-position: -28.8rem -67.2rem;
  }
  69% {
    background-position: -38.4rem -67.2rem;
  }
  69.75% {
    background-position: -48rem -67.2rem;
  }
  70.5% {
    background-position: -57.6rem -67.2rem;
  }
  71.25% {
    background-position: -67.2rem -67.2rem;
  }
  72% {
    background-position: -76.8rem -67.2rem;
  }
  72.75% {
    background-position: -86.4rem -67.2rem;
  }
  73.5% {
    background-position: -96rem -67.2rem;
  }
  74.25% {
    background-position: -105.6rem -67.2rem;
  }
  75% {
    background-position: 0rem -76.8rem;
  }
  75.75% {
    background-position: -9.6rem -76.8rem;
  }
  76.5% {
    background-position: -19.2rem -76.8rem;
  }
  77.25% {
    background-position: -28.8rem -76.8rem;
  }
  78% {
    background-position: -38.4rem -76.8rem;
  }
  78.75% {
    background-position: -48rem -76.8rem;
  }
  79.5% {
    background-position: -57.6rem -76.8rem;
  }
  80.25% {
    background-position: -67.2rem -76.8rem;
  }
  81% {
    background-position: -76.8rem -76.8rem;
  }
  81.75% {
    background-position: -86.4rem -76.8rem;
  }
  82.5% {
    background-position: -96rem -76.8rem;
  }
  83.25% {
    background-position: -105.6rem -76.8rem;
  }
  84% {
    background-position: 0rem -86.4rem;
  }
  84.75% {
    background-position: -9.6rem -86.4rem;
  }
  85.5% {
    background-position: -19.2rem -86.4rem;
  }
  86.25% {
    background-position: -28.8rem -86.4rem;
  }
  87% {
    background-position: -38.4rem -86.4rem;
  }
  87.75% {
    background-position: -48rem -86.4rem;
  }
  88.5% {
    background-position: -57.6rem -86.4rem;
  }
  89.25% {
    background-position: -67.2rem -86.4rem;
  }
  90% {
    background-position: -76.8rem -86.4rem;
  }
  90.75% {
    background-position: -86.4rem -86.4rem;
  }
  91.5% {
    background-position: -96rem -86.4rem;
  }
  92.25% {
    background-position: -105.6rem -86.4rem;
  }
  93% {
    background-position: 0rem -96rem;
  }
  93.75% {
    background-position: -9.6rem -96rem;
  }
  94.5% {
    background-position: -19.2rem -96rem;
  }
  95.25% {
    background-position: -28.8rem -96rem;
  }
  96% {
    background-position: -38.4rem -96rem;
  }
  96.75% {
    background-position: -48rem -96rem;
  }
  97.5% {
    background-position: -57.6rem -96rem;
  }
  98.25% {
    background-position: -67.2rem -96rem;
  }
  99% {
    background-position: -76.8rem -96rem;
  }
  99.75% {
    background-position: -86.4rem -96rem;
  }
  100% {
    background-position: -96rem -96rem;
  }
}
@media (max-width: 800px) {
  .WJowwgIyV0h_yR6wpxdL {
    top: 0;
    margin-bottom: 1rem;
  }
}`, "",{"version":3,"sources":["webpack://./src/components/SpriteAnimation/SpriteAnimationSm.module.scss"],"names":[],"mappings":"AAAA;EACI,kBAAA;EACA,UAAA;EACA,gCAAA;EACA,aAAA;EACA,cAAA;EACA,yDAAA;EACA,4BAAA;EACA,oDAAA;AACJ;;AAEC;EACG;IAAK,8BAAA;EAEP;EADE;IAAQ,iCAAA;EAIV;EAHE;IAAO,kCAAA;EAMT;EALE;IAAQ,kCAAA;EAQV;EAPE;IAAK,kCAAA;EAUP;EATE;IAAQ,gCAAA;EAYV;EAXE;IAAO,kCAAA;EAcT;EAbE;IAAQ,kCAAA;EAgBV;EAfE;IAAK,kCAAA;EAkBP;EAjBE;IAAQ,kCAAA;EAoBV;EAnBE;IAAO,gCAAA;EAsBT;EArBE;IAAQ,mCAAA;EAwBV;EAvBE;IAAQ,iCAAA;EA0BV;EAzBE;IAAQ,oCAAA;EA4BV;EA3BE;IAAS,qCAAA;EA8BX;EA7BE;IAAM,qCAAA;EAgCR;EA/BE;IAAS,qCAAA;EAkCX;EAjCE;IAAQ,mCAAA;EAoCV;EAnCE;IAAS,qCAAA;EAsCX;EArCE;IAAM,qCAAA;EAwCR;EAvCE;IAAS,qCAAA;EA0CX;EAzCE;IAAQ,qCAAA;EA4CV;EA3CE;IAAS,mCAAA;EA8CX;EA7CE;IAAM,sCAAA;EAgDR;EA/CE;IAAQ,kCAAA;EAkDV;EAjDE;IAAS,qCAAA;EAoDX;EAnDE;IAAM,sCAAA;EAsDR;EArDE;IAAS,sCAAA;EAwDX;EAvDE;IAAQ,sCAAA;EA0DV;EAzDE;IAAS,oCAAA;EA4DX;EA3DE;IAAM,sCAAA;EA8DR;EA7DE;IAAS,sCAAA;EAgEX;EA/DE;IAAQ,sCAAA;EAkEV;EAjEE;IAAS,sCAAA;EAoEX;EAnEE;IAAM,oCAAA;EAsER;EArEE;IAAS,uCAAA;EAwEX;EAvEE;IAAS,kCAAA;EA0EX;EAzEE;IAAM,qCAAA;EA4ER;EA3EE;IAAS,sCAAA;EA8EX;EA7EE;IAAQ,sCAAA;EAgFV;EA/EE;IAAS,sCAAA;EAkFX;EAjFE;IAAM,oCAAA;EAoFR;EAnFE;IAAS,sCAAA;EAsFX;EArFE;IAAQ,sCAAA;EAwFV;EAvFE;IAAS,sCAAA;EA0FX;EAzFE;IAAM,sCAAA;EA4FR;EA3FE;IAAS,oCAAA;EA8FX;EA7FE;IAAQ,uCAAA;EAgGV;EA/FE;IAAM,kCAAA;EAkGR;EAjGE;IAAS,qCAAA;EAoGX;EAnGE;IAAQ,sCAAA;EAsGV;EArGE;IAAS,sCAAA;EAwGX;EAvGE;IAAM,sCAAA;EA0GR;EAzGE;IAAS,oCAAA;EA4GX;EA3GE;IAAQ,sCAAA;EA8GV;EA7GE;IAAS,sCAAA;EAgHX;EA/GE;IAAM,sCAAA;EAkHR;EAjHE;IAAS,sCAAA;EAoHX;EAnHE;IAAQ,oCAAA;EAsHV;EArHE;IAAS,uCAAA;EAwHX;EAvHE;IAAM,6BAAA;EA0HR;EAzHE;IAAS,mCAAA;EA4HX;EA3HE;IAAQ,oCAAA;EA8HV;EA7HE;IAAS,oCAAA;EAgIX;EA/HE;IAAM,oCAAA;EAkIR;EAjIE;IAAS,kCAAA;EAoIX;EAnIE;IAAQ,oCAAA;EAsIV;EArIE;IAAS,oCAAA;EAwIX;EAvIE;IAAM,oCAAA;EA0IR;EAzIE;IAAS,oCAAA;EA4IX;EA3IE;IAAQ,kCAAA;EA8IV;EA7IE;IAAS,qCAAA;EAgJX;EA/IE;IAAM,kCAAA;EAkJR;EAjJE;IAAS,qCAAA;EAoJX;EAnJE;IAAQ,sCAAA;EAsJV;EArJE;IAAS,sCAAA;EAwJX;EAvJE;IAAS,sCAAA;EA0JX;EAzJE;IAAS,oCAAA;EA4JX;EA3JE;IAAQ,sCAAA;EA8JV;EA7JE;IAAS,sCAAA;EAgKX;EA/JE;IAAM,sCAAA;EAkKR;EAjKE;IAAS,sCAAA;EAoKX;EAnKE;IAAQ,oCAAA;EAsKV;EArKE;IAAS,uCAAA;EAwKX;EAvKE;IAAM,kCAAA;EA0KR;EAzKE;IAAS,qCAAA;EA4KX;EA3KE;IAAQ,sCAAA;EA8KV;EA7KE;IAAS,sCAAA;EAgLX;EA/KE;IAAM,sCAAA;EAkLR;EAjLE;IAAS,oCAAA;EAoLX;EAnLE;IAAQ,sCAAA;EAsLV;EArLE;IAAS,sCAAA;EAwLX;EAvLE;IAAM,sCAAA;EA0LR;EAzLE;IAAS,sCAAA;EA4LX;EA3LE;IAAQ,oCAAA;EA8LV;EA7LE;IAAS,uCAAA;EAgMX;EA/LE;IAAM,kCAAA;EAkMR;EAjME;IAAS,qCAAA;EAoMX;EAnME;IAAQ,sCAAA;EAsMV;EArME;IAAS,sCAAA;EAwMX;EAvME;IAAM,sCAAA;EA0MR;EAzME;IAAS,oCAAA;EA4MX;EA3ME;IAAQ,sCAAA;EA8MV;EA7ME;IAAS,sCAAA;EAgNX;EA/ME;IAAM,sCAAA;EAkNR;EAjNE;IAAS,sCAAA;EAoNX;EAnNE;IAAQ,oCAAA;EAsNV;EArNE;IAAS,uCAAA;EAwNX;EAvNE;IAAM,kCAAA;EA0NR;EAzNE;IAAS,qCAAA;EA4NX;EA3NE;IAAQ,sCAAA;EA8NV;EA7NE;IAAS,sCAAA;EAgOX;EA/NE;IAAM,sCAAA;EAkOR;EAjOE;IAAS,oCAAA;EAoOX;EAnOE;IAAQ,sCAAA;EAsOV;EArOE;IAAS,sCAAA;EAwOX;EAvOE;IAAM,sCAAA;EA0OR;EAzOE;IAAS,sCAAA;EA4OX;EA3OE;IAAQ,oCAAA;EA8OV;EA7OE;IAAS,uCAAA;EAgPX;EA/OE;IAAM,gCAAA;EAkPR;EAjPE;IAAS,mCAAA;EAoPX;EAnPE;IAAQ,oCAAA;EAsPV;EArPE;IAAS,oCAAA;EAwPX;EAvPE;IAAM,oCAAA;EA0PR;EAzPE;IAAS,kCAAA;EA4PX;EA3PE;IAAQ,oCAAA;EA8PV;EA7PE;IAAS,oCAAA;EAgQX;EA/PE;IAAM,oCAAA;EAkQR;EAjQE;IAAS,oCAAA;EAoQX;EAnQE;IAAO,kCAAA;EAsQT;AACF;AApQC;EACG;IACI,MAAA;IACA,mBAAA;EAsQN;AACF","sourcesContent":[".spritesheet {\n    position: absolute; \n    z-index: 1;\n    transform: translate(100%, 100%);\n    width: 9.6rem;\n    height: 9.6rem;\n    background-image: url('/Users/tylerpierson/software_projects/class-website/public/img/tyler-spritesheet-sm.png');\n    background-repeat: no-repeat;\n    animation: play 8s steps(1) infinite;\n }\n \n @keyframes play {\n    0% { background-position: 0rem 0rem; }\n    0.75% { background-position: -9.6rem 0rem; }\n    1.5% { background-position: -19.2rem 0rem; }\n    2.25% { background-position: -28.8rem 0rem; }\n    3% { background-position: -38.4rem 0rem; }\n    3.75% { background-position: -48rem 0rem; }\n    4.5% { background-position: -57.6rem 0rem; }\n    5.25% { background-position: -67.2rem 0rem; }\n    6% { background-position: -76.8rem 0rem; }\n    6.75% { background-position: -86.4rem 0rem; }\n    7.5% { background-position: -96rem 0rem; }\n    8.25% { background-position: -105.6rem 0rem; }\n    9.75% { background-position: 0rem -9.6rem; }\n    10.5% { background-position: -9.6rem -9.6rem; }\n    11.25% { background-position: -19.2rem -9.6rem; }\n    12% { background-position: -28.8rem -9.6rem; }\n    12.75% { background-position: -38.4rem -9.6rem; }\n    13.5% { background-position: -48rem -9.6rem; }\n    14.25% { background-position: -57.6rem -9.6rem; }\n    15% { background-position: -67.2rem -9.6rem; }\n    15.75% { background-position: -76.8rem -9.6rem; }\n    16.5% { background-position: -86.4rem -9.6rem; }\n    17.25% { background-position: -96rem -9.6rem; }\n    18% { background-position: -105.6rem -9.6rem; }\n    19.5% { background-position: 0rem -19.2rem; }\n    20.25% { background-position: -9.6rem -19.2rem; }\n    21% { background-position: -19.2rem -19.2rem; } \n    21.75% { background-position: -28.8rem -19.2rem; }\n    22.5% { background-position: -38.4rem -19.2rem; }\n    23.25% { background-position: -48rem -19.2rem; }\n    24% { background-position: -57.6rem -19.2rem; }\n    24.75% { background-position: -67.2rem -19.2rem; }\n    25.5% { background-position: -76.8rem -19.2rem; }\n    26.25% { background-position: -86.4rem -19.2rem; }\n    27% { background-position: -96rem -19.2rem; }\n    27.75% { background-position: -105.6rem -19.2rem; }\n    29.25% { background-position: 0rem -28.8rem; }\n    30% { background-position: -9.6rem -28.8rem; }\n    30.75% { background-position: -19.2rem -28.8rem; }\n    31.5% { background-position: -28.8rem -28.8rem; }\n    32.25% { background-position: -38.4rem -28.8rem; }\n    33% { background-position: -48rem -28.8rem; }\n    33.75% { background-position: -57.6rem -28.8rem; }\n    34.5% { background-position: -67.2rem -28.8rem; }\n    35.25% { background-position: -76.8rem -28.8rem; }\n    36% { background-position: -86.4rem -28.8rem; }\n    36.75% { background-position: -96rem -28.8rem; }\n    37.5% { background-position: -105.6rem -28.8rem; }\n    39% { background-position: 0rem -38.4rem; }\n    39.75% { background-position: -9.6rem -38.4rem; }\n    40.5% { background-position: -19.2rem -38.4rem; }\n    41.25% { background-position: -28.8rem -38.4rem; }\n    42% { background-position: -38.4rem -38.4rem; }\n    42.75% { background-position: -48rem -38.4rem; }\n    43.5% { background-position: -57.6rem -38.4rem; }\n    44.25% { background-position: -67.2rem -38.4rem; }\n    45% { background-position: -76.8rem -38.4rem; }\n    45.75% { background-position: -86.4rem -38.4rem; }\n    46.5% { background-position: -96rem -38.4rem; }\n    47.25% { background-position: -105.6rem -38.4rem; }\n    48% { background-position: 0rem -48; }\n    48.75% { background-position: -9.6rem -48rem; }\n    49.5% { background-position: -19.2rem -48rem; }\n    50.25% { background-position: -28.8rem -48rem; }\n    51% { background-position: -38.4rem -48rem; }\n    51.75% { background-position: -48rem -48rem; }\n    52.5% { background-position: -57.6rem -48rem; }\n    53.25% { background-position: -67.2rem -48rem; }\n    54% { background-position: -76.8rem -48rem; }\n    54.75% { background-position: -86.4rem -48rem; }\n    55.5% { background-position: -96rem -48rem; }\n    56.25% { background-position: -105.6rem -48rem; }\n    57% { background-position: 0rem -57.6rem; }\n    57.75% { background-position: -9.6rem -57.6rem; }\n    58.5% { background-position: -19.2rem -57.6rem; }\n    59.25% { background-position: -28.8rem -57.6rem; }\n    59.75% { background-position: -38.4rem -57.6rem; }\n    60.75% { background-position: -48rem -57.6rem; }\n    61.5% { background-position: -57.6rem -57.6rem; }\n    62.25% { background-position: -67.2rem -57.6rem; }\n    63% { background-position: -76.8rem -57.6rem; }\n    63.75% { background-position: -86.4rem -57.6rem; }\n    64.5% { background-position: -96rem -57.6rem; }\n    65.25% { background-position: -105.6rem -57.6rem; }\n    66% { background-position: 0rem -67.2rem; }\n    66.75% { background-position: -9.6rem -67.2rem; }\n    67.5% { background-position: -19.2rem -67.2rem; }\n    68.25% { background-position: -28.8rem -67.2rem; }\n    69% { background-position: -38.4rem -67.2rem; }\n    69.75% { background-position: -48rem -67.2rem; }\n    70.5% { background-position: -57.6rem -67.2rem; }\n    71.25% { background-position: -67.2rem -67.2rem; }\n    72% { background-position: -76.8rem -67.2rem; }\n    72.75% { background-position: -86.4rem -67.2rem; }\n    73.5% { background-position: -96rem -67.2rem; }\n    74.25% { background-position: -105.6rem -67.2rem; }\n    75% { background-position: 0rem -76.8rem; }\n    75.75% { background-position: -9.6rem -76.8rem; }\n    76.5% { background-position: -19.2rem -76.8rem; }\n    77.25% { background-position: -28.8rem -76.8rem; }\n    78% { background-position: -38.4rem -76.8rem; }\n    78.75% { background-position: -48rem -76.8rem; }\n    79.5% { background-position: -57.6rem -76.8rem; }\n    80.25% { background-position: -67.2rem -76.8rem; }\n    81% { background-position: -76.8rem -76.8rem; }\n    81.75% { background-position: -86.4rem -76.8rem; }\n    82.5% { background-position: -96rem -76.8rem; }\n    83.25% { background-position: -105.6rem -76.8rem; }\n    84% { background-position: 0rem -86.4rem; }\n    84.75% { background-position: -9.6rem -86.4rem; }\n    85.5% { background-position: -19.2rem -86.4rem; }\n    86.25% { background-position: -28.8rem -86.4rem; }\n    87% { background-position: -38.4rem -86.4rem; }\n    87.75% { background-position: -48rem -86.4rem; }\n    88.5% { background-position: -57.6rem -86.4rem; }\n    89.25% { background-position: -67.2rem -86.4rem; }\n    90% { background-position: -76.8rem -86.4rem; }\n    90.75% { background-position: -86.4rem -86.4rem; }\n    91.5% { background-position: -96rem -86.4rem; }\n    92.25% { background-position: -105.6rem -86.4rem; }\n    93% { background-position: 0rem -96rem; }\n    93.75% { background-position: -9.6rem -96rem; }\n    94.5% { background-position: -19.2rem -96rem; }\n    95.25% { background-position: -28.8rem -96rem; }\n    96% { background-position: -38.4rem -96rem; }\n    96.75% { background-position: -48rem -96rem; }\n    97.5% { background-position: -57.6rem -96rem; }\n    98.25% { background-position: -67.2rem -96rem; }    \n    99% { background-position: -76.8rem -96rem; }\n    99.75% { background-position: -86.4rem -96rem; }\n    100% { background-position: -96rem -96rem; }\n }\n\n @media (max-width: 800px) {\n    .spritesheet {\n        top: 0;\n        margin-bottom: 1rem;\n    }\n }"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"spritesheet": `WJowwgIyV0h_yR6wpxdL`,
	"play": `rNgdABCo2UqaV5BSoxXW`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/index.module.scss":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/index.module.scss ***!
  \**********************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --heading-color: rgb(100, 237, 207);
  --bg-color: aliceblue;
  --btn-color: rgb(100, 237, 207);
  --btn-animation: rgba(171, 188, 219, 0.3);
  --input-color: rgb(8, 36, 87);
  --nav-border: rgba(171, 188, 219, 0.3);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 10px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 400;
  letter-spacing: 0.2rem;
}

body {
  background-color: var(--bg-color);
}`, "",{"version":3,"sources":["webpack://./src/index.module.scss"],"names":[],"mappings":"AAAA;EACI,mCAAA;EACA,qBAAA;EACA,+BAAA;EACA,yCAAA;EACA,6BAAA;EACA,sCAAA;AACJ;;AAEA;EACI,sBAAA;EACA,SAAA;EACA,UAAA;EACA,eAAA;EACA,mJAAA;EACA,gBAAA;EACA,sBAAA;AACJ;;AAEA;EACI,iCAAA;AACJ","sourcesContent":[":root {\n    --heading-color: rgb(100, 237, 207);\n    --bg-color: aliceblue;\n    --btn-color: rgb(100, 237, 207);\n    --btn-animation: rgba(171, 188, 219, 0.3);\n    --input-color: rgb(8, 36, 87);\n    --nav-border: rgba(171, 188, 219, 0.3);\n}\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    font-size: 10px;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-weight: 400;\n    letter-spacing: .2rem;\n}\n\nbody {\n    background-color: var(--bg-color);\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/AboutPage/AboutPage.module.scss":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/AboutPage/AboutPage.module.scss ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.lkSfnDUQxn7c_fywXKpE {
  position: relative;
  display: flex;
  justify-content: center;
  margin: 12vh 2rem 0;
  height: 88vh;
  width: 100%;
}
.lkSfnDUQxn7c_fywXKpE .w0ja4CsHvALVP85RyPJj {
  width: 50%;
}
.lkSfnDUQxn7c_fywXKpE .w0ja4CsHvALVP85RyPJj .W7Ys6_Es2My6z5Xw1gg9 {
  color: rgb(75, 75, 75);
  background-color: rgba(100, 237, 207, 0.075);
  padding: 5rem;
  border-radius: 1rem;
}
.lkSfnDUQxn7c_fywXKpE .w0ja4CsHvALVP85RyPJj .o7En6rTPDTw_64wL3siB {
  font-weight: bold;
  color: var(--heading-color);
  text-shadow: 0.5px 0.5px 1px black;
}
.lkSfnDUQxn7c_fywXKpE .w0ja4CsHvALVP85RyPJj .W7Ys6_Es2My6z5Xw1gg9, .lkSfnDUQxn7c_fywXKpE .w0ja4CsHvALVP85RyPJj .o7En6rTPDTw_64wL3siB {
  width: 90%;
  line-height: 3rem;
  font-size: 1.3rem;
  margin: 3rem 0;
}
.lkSfnDUQxn7c_fywXKpE .uuoSQC2OKXxAZt1ssg_l {
  transform: rotate(10deg);
}
.lkSfnDUQxn7c_fywXKpE .V_GMJUjg_BzF_Ybt26eQ {
  position: absolute;
  width: 15rem;
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (max-width: 1000px) {
  .lkSfnDUQxn7c_fywXKpE {
    flex-direction: column;
    align-items: center;
    height: 100%;
    overflow: visible;
    padding-bottom: 3rem;
    margin-top: 5vh;
  }
  .lkSfnDUQxn7c_fywXKpE .w0ja4CsHvALVP85RyPJj {
    width: 100%;
    z-index: 1;
  }
  .lkSfnDUQxn7c_fywXKpE .uuoSQC2OKXxAZt1ssg_l {
    position: absolute;
    top: 0;
    right: 0;
    width: 80%;
    opacity: 0.4;
    transform: rotate(0);
    border-bottom-left-radius: 50%;
  }
  .lkSfnDUQxn7c_fywXKpE .V_GMJUjg_BzF_Ybt26eQ {
    margin-top: 3rem;
    bottom: 0;
    right: 3rem;
  }
}`, "",{"version":3,"sources":["webpack://./src/pages/AboutPage/AboutPage.module.scss"],"names":[],"mappings":"AAAA;EACI,kBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;AACJ;AAAI;EACI,UAAA;AAER;AADQ;EACI,sBAAA;EACA,4CAAA;EACA,aAAA;EACA,mBAAA;AAGZ;AADQ;EACI,iBAAA;EACA,2BAAA;EACA,kCAAA;AAGZ;AADQ;EACI,UAAA;EACA,iBAAA;EACA,iBAAA;EACA,cAAA;AAGZ;AAAI;EACI,wBAAA;AAER;AAAI;EACI,kBAAA;EACA,YAAA;AAER;;AAEA,oEAAA;AACA;EACI;IACI,sBAAA;IACA,mBAAA;IACA,YAAA;IACA,iBAAA;IACA,oBAAA;IACA,eAAA;EACN;EAAM;IACI,WAAA;IACA,UAAA;EAEV;EAAM;IACI,kBAAA;IACA,MAAA;IACA,QAAA;IACA,UAAA;IACA,YAAA;IACA,oBAAA;IACA,8BAAA;EAEV;EAAM;IACI,gBAAA;IACA,SAAA;IACA,WAAA;EAEV;AACF","sourcesContent":[".AboutPage {\n    position: relative;\n    display: flex;\n    justify-content: center;\n    margin: 12vh 2rem 0;\n    height: 88vh;\n    width: 100%;\n    .textContainer {\n        width: 50%;\n        .bio {\n            color: rgb(75, 75, 75);\n            background-color: rgba(100, 237, 207, 0.075);\n            padding: 5rem;\n            border-radius: 1rem;\n        }\n        .highlight {\n            font-weight: bold;\n            color: var(--heading-color);\n            text-shadow: .5px .5px 1px black;\n        }\n        .bio, .highlight {\n            width: 90%;\n            line-height: 3rem;\n            font-size: 1.3rem;\n            margin: 3rem 0;\n        }\n    }\n    .image {\n        transform: rotate(10deg);\n    }\n    .qr {\n        position: absolute;\n        width: 15rem;\n    }\n}\n\n/* Small devices (portrait tablets and large phones, 600px and up) */\n@media only screen and (max-width: 1000px) {\n    .AboutPage {\n        flex-direction: column;\n        align-items: center;\n        height: 100%;\n        overflow: visible;\n        padding-bottom: 3rem;\n        margin-top: 5vh;\n        .textContainer {\n            width: 100%;\n            z-index: 1;\n        }\n        .image {\n            position: absolute;\n            top: 0;\n            right: 0;\n            width: 80%;\n            opacity: .4;\n            transform: rotate(0);\n            border-bottom-left-radius: 50%;\n        }\n        .qr {\n            margin-top: 3rem;\n            bottom: 0;\n            right: 3rem;\n        }\n    }\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"AboutPage": `lkSfnDUQxn7c_fywXKpE`,
	"textContainer": `w0ja4CsHvALVP85RyPJj`,
	"bio": `W7Ys6_Es2My6z5Xw1gg9`,
	"highlight": `o7En6rTPDTw_64wL3siB`,
	"image": `uuoSQC2OKXxAZt1ssg_l`,
	"qr": `V_GMJUjg_BzF_Ybt26eQ`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/AuthPage/AuthPage.module.scss":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/AuthPage/AuthPage.module.scss ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/ContactPage/ContactPage.module.scss":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/ContactPage/ContactPage.module.scss ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.YLhl5O0tSVyQw_Ud6GeH {
  height: 88vh;
  width: 100%;
  margin-top: 12vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
.YLhl5O0tSVyQw_Ud6GeH .X1nKQ7nOzCDgUw2lj06M {
  background-color: rgb(45, 51, 50);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 3rem;
  padding: 3rem;
  width: 40%;
  height: 90%;
}
.YLhl5O0tSVyQw_Ud6GeH .X1nKQ7nOzCDgUw2lj06M .kQIC4I2TlLl_ToATaqms {
  font-size: 3.4vw;
}
.YLhl5O0tSVyQw_Ud6GeH .X1nKQ7nOzCDgUw2lj06M .zGz6xLw0RxE09QyxnlPy, .YLhl5O0tSVyQw_Ud6GeH .X1nKQ7nOzCDgUw2lj06M .eCO_YvV9LVbLEOIIFQAh {
  font-size: 1.7rem;
}
.YLhl5O0tSVyQw_Ud6GeH .X1nKQ7nOzCDgUw2lj06M .zGz6xLw0RxE09QyxnlPy .uoWRDnhtQDNJZLDDEeuj {
  margin: 1rem 3rem;
  font-size: 1.5rem;
  color: var(--btn-color);
}
.YLhl5O0tSVyQw_Ud6GeH .X1nKQ7nOzCDgUw2lj06M .eCO_YvV9LVbLEOIIFQAh {
  text-decoration: none;
  color: var(--btn-color);
}
.YLhl5O0tSVyQw_Ud6GeH .X1nKQ7nOzCDgUw2lj06M .eCO_YvV9LVbLEOIIFQAh:hover {
  text-decoration: underline;
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (max-width: 1000px) {
  .YLhl5O0tSVyQw_Ud6GeH {
    margin-top: 5vh;
  }
  .YLhl5O0tSVyQw_Ud6GeH .X1nKQ7nOzCDgUw2lj06M {
    width: 90vw;
  }
}`, "",{"version":3,"sources":["webpack://./src/pages/ContactPage/ContactPage.module.scss"],"names":[],"mappings":"AAAA;EACI,YAAA;EACA,WAAA;EACA,gBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,YAAA;AACJ;AAAI;EACI,iCAAA;EACA,aAAA;EACA,sBAAA;EACA,6BAAA;EACA,mBAAA;EACA,mBAAA;EACA,aAAA;EACA,UAAA;EACA,WAAA;AAER;AADQ;EACI,gBAAA;AAGZ;AADQ;EACI,iBAAA;AAGZ;AAAY;EACI,iBAAA;EACA,iBAAA;EACA,uBAAA;AAEhB;AACQ;EACI,qBAAA;EACA,uBAAA;AACZ;AAAY;EACI,0BAAA;AAEhB;;AAIA,oEAAA;AACA;EACI;IACI,eAAA;EADN;EAEM;IACI,WAAA;EAAV;AACF","sourcesContent":[".ContactPage {\n    height: 88vh;\n    width: 100%;\n    margin-top: 12vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: white;\n    .InfoContainer {\n        background-color: rgb(45, 51, 50);\n        display: flex;\n        flex-direction: column;\n        justify-content: space-evenly;\n        align-items: center;\n        border-radius: 3rem;\n        padding: 3rem;\n        width: 40%;\n        height: 90%;\n        .header {\n            font-size: 3.4vw;\n        }\n        .contactInfo, .link {\n            font-size: 1.7rem;\n        }\n        .contactInfo {\n            .li {\n                margin: 1rem 3rem;\n                font-size: 1.5rem;\n                color: var(--btn-color);\n            }\n        }\n        .link {\n            text-decoration: none;\n            color: var(--btn-color);\n            &:hover {\n                text-decoration: underline;\n            }\n        }\n    }\n}\n\n/* Small devices (portrait tablets and large phones, 600px and up) */\n@media only screen and (max-width: 1000px) {\n    .ContactPage {\n        margin-top: 5vh;\n        .InfoContainer {\n            width: 90vw;\n        }\n    }\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"ContactPage": `YLhl5O0tSVyQw_Ud6GeH`,
	"InfoContainer": `X1nKQ7nOzCDgUw2lj06M`,
	"header": `kQIC4I2TlLl_ToATaqms`,
	"contactInfo": `zGz6xLw0RxE09QyxnlPy`,
	"link": `eCO_YvV9LVbLEOIIFQAh`,
	"li": `uoWRDnhtQDNJZLDDEeuj`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/HomePage/HomePage.module.scss":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/HomePage/HomePage.module.scss ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.luBJirBC3AbIwQNsEypk {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
.luBJirBC3AbIwQNsEypk .h2c6G6zXieb9PEgg9YMz {
  color: white;
  font-size: 1.5rem;
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (max-width: 1000px) {
  .luBJirBC3AbIwQNsEypk {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0;
  }
}`, "",{"version":3,"sources":["webpack://./src/pages/HomePage/HomePage.module.scss"],"names":[],"mappings":"AAAA;EACI,WAAA;EACA,YAAA;EACA,cAAA;AACJ;AAAI;EACI,YAAA;EACA,iBAAA;AAER;;AAEA,oEAAA;AACA;EACI;IACI,aAAA;IACA,sBAAA;IACA,WAAA;IACA,SAAA;EACN;AACF","sourcesContent":[".HomePage {\n    width: 100%;\n    height: 100%;\n    margin: 0 auto;   \n    .headingSM {\n        color: white;\n        font-size: 1.5rem;\n    }\n}\n\n/* Small devices (portrait tablets and large phones, 600px and up) */\n@media only screen and (max-width: 1000px) {\n    .HomePage {\n        display: flex;\n        flex-direction: column;\n        width: 100%;\n        margin: 0;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"HomePage": `luBJirBC3AbIwQNsEypk`,
	"headingSM": `h2c6G6zXieb9PEgg9YMz`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/ProfilePage/ProfilePage.module.scss":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/ProfilePage/ProfilePage.module.scss ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.nN4bYVhltefB38H0Frbd {
  padding: 2rem;
  margin: 0 auto;
  width: 100%;
}
.nN4bYVhltefB38H0Frbd h1, .nN4bYVhltefB38H0Frbd h2 {
  text-align: center;
  margin-bottom: 1rem;
}
.nN4bYVhltefB38H0Frbd table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1.5rem;
  font-size: 1rem;
}
.nN4bYVhltefB38H0Frbd table thead {
  background-color: rgba(0, 0, 0, 0.6);
  color: var(--btn-color);
}
.nN4bYVhltefB38H0Frbd table th, .nN4bYVhltefB38H0Frbd table td {
  padding: 0.75rem;
  text-align: left;
  border: 1px solid #ddd;
}
.nN4bYVhltefB38H0Frbd table th {
  font-weight: bold;
}
.nN4bYVhltefB38H0Frbd table tbody tr:nth-child(even) {
  background-color: #f2f2f2;
}
.nN4bYVhltefB38H0Frbd table tbody tr:nth-child(odd) {
  background-color: #ffffff;
}
@media (max-width: 768px) {
  .nN4bYVhltefB38H0Frbd table thead {
    display: none;
  }
  .nN4bYVhltefB38H0Frbd table tbody, .nN4bYVhltefB38H0Frbd table tr, .nN4bYVhltefB38H0Frbd table td {
    display: block;
    width: 100%;
  }
  .nN4bYVhltefB38H0Frbd table tr {
    margin-bottom: 1rem;
  }
  .nN4bYVhltefB38H0Frbd table td {
    text-align: right;
    padding-left: 50%;
    position: relative;
    background-color: inherit;
  }
  .nN4bYVhltefB38H0Frbd table td::before {
    content: attr(data-label);
    position: absolute;
    left: 0;
    width: 50%;
    padding-left: 0.75rem;
    font-weight: bold;
    text-align: left;
    background-color: #f2f2f2;
  }
}
@media (max-width: 480px) {
  .nN4bYVhltefB38H0Frbd table td {
    padding: 0.5rem;
  }
  .nN4bYVhltefB38H0Frbd table td::before {
    padding-left: 0.5rem;
  }
}
.nN4bYVhltefB38H0Frbd .Q_za23vFGAGU5FpDCMOo {
  font-size: 1.2rem;
}
.nN4bYVhltefB38H0Frbd .pXIaGzwWcLCv5GXQpZdI {
  font-weight: bold;
}
.nN4bYVhltefB38H0Frbd .Uon8taN0miDTrBN9Zk8C {
  color: var(--btn-color);
  font-weight: bold;
  font-size: 1.2rem;
}
.nN4bYVhltefB38H0Frbd p {
  font-size: 1.1rem;
  text-align: center;
  margin-top: 2rem;
}`, "",{"version":3,"sources":["webpack://./src/pages/ProfilePage/ProfilePage.module.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,cAAA;EACA,WAAA;AACJ;AACI;EACE,kBAAA;EACA,mBAAA;AACN;AAEI;EACE,WAAA;EACA,yBAAA;EACA,kBAAA;EACA,eAAA;AAAN;AAEM;EACE,oCAAA;EACA,uBAAA;AAAR;AAGM;EACE,gBAAA;EACA,gBAAA;EACA,sBAAA;AADR;AAIM;EACE,iBAAA;AAFR;AAKM;EACE,yBAAA;AAHR;AAMM;EACE,yBAAA;AAJR;AAOM;EACE;IACE,aAAA;EALR;EAQM;IACE,cAAA;IACA,WAAA;EANR;EASM;IACE,mBAAA;EAPR;EAUM;IACE,iBAAA;IACA,iBAAA;IACA,kBAAA;IACA,yBAAA;EARR;EAUQ;IACE,yBAAA;IACA,kBAAA;IACA,OAAA;IACA,UAAA;IACA,qBAAA;IACA,iBAAA;IACA,gBAAA;IACA,yBAAA;EARV;AACF;AAYM;EACE;IACE,eAAA;EAVR;EAYQ;IACE,oBAAA;EAVV;AACF;AAeI;EACE,iBAAA;AAbN;AAgBI;EACE,iBAAA;AAdN;AAiBI;EACI,uBAAA;EACA,iBAAA;EACA,iBAAA;AAfR;AAkBI;EACE,iBAAA;EACA,kBAAA;EACA,gBAAA;AAhBN","sourcesContent":[".profile {\n    padding: 2rem;\n    margin: 0 auto;\n    width: 100%;\n  \n    h1, h2 {\n      text-align: center;\n      margin-bottom: 1rem;\n    }\n  \n    table {\n      width: 100%;\n      border-collapse: collapse;\n      margin-top: 1.5rem;\n      font-size: 1rem;\n  \n      thead {\n        background-color: rgba(0, 0, 0, 0.6);\n        color: var(--btn-color);\n      }\n  \n      th, td {\n        padding: 0.75rem;\n        text-align: left;\n        border: 1px solid #ddd;\n      }\n  \n      th {\n        font-weight: bold;\n      }\n  \n      tbody tr:nth-child(even) {\n        background-color: #f2f2f2;\n      }\n  \n      tbody tr:nth-child(odd) {\n        background-color: #ffffff;\n      }\n  \n      @media (max-width: 768px) {\n        thead {\n          display: none;\n        }\n  \n        tbody, tr, td {\n          display: block;\n          width: 100%;\n        }\n  \n        tr {\n          margin-bottom: 1rem;\n        }\n  \n        td {\n          text-align: right;\n          padding-left: 50%;\n          position: relative;\n          background-color: inherit;\n  \n          &::before {\n            content: attr(data-label);\n            position: absolute;\n            left: 0;\n            width: 50%;\n            padding-left: 0.75rem;\n            font-weight: bold;\n            text-align: left;\n            background-color: #f2f2f2;\n          }\n        }\n      }\n  \n      @media (max-width: 480px) {\n        td {\n          padding: 0.5rem;\n  \n          &::before {\n            padding-left: 0.5rem;\n          }\n        }\n      }\n    }\n  \n    .header {\n      font-size: 1.2rem;\n    }\n  \n    .student {\n      font-weight: bold;\n    }\n\n    .roomParent {\n        color: var(--btn-color);\n        font-weight: bold;\n        font-size: 1.2rem;\n    }\n  \n    p {\n      font-size: 1.1rem;\n      text-align: center;\n      margin-top: 2rem;\n    }\n  }\n  "],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"profile": `nN4bYVhltefB38H0Frbd`,
	"header": `Q_za23vFGAGU5FpDCMOo`,
	"student": `pXIaGzwWcLCv5GXQpZdI`,
	"roomParent": `Uon8taN0miDTrBN9Zk8C`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/App.module.scss":
/*!*****************************!*\
  !*** ./src/App.module.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_App_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../node_modules/sass-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!./App.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/App.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_App_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_App_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_App_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_App_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/FourthBanner/FourthBanner.module.scss":
/*!**************************************************************!*\
  !*** ./src/components/FourthBanner/FourthBanner.module.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_FourthBanner_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./FourthBanner.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/FourthBanner/FourthBanner.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_FourthBanner_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_FourthBanner_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_FourthBanner_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_FourthBanner_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/IntroContainer/IntroContainer.module.scss":
/*!******************************************************************!*\
  !*** ./src/components/IntroContainer/IntroContainer.module.scss ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_IntroContainer_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./IntroContainer.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/IntroContainer/IntroContainer.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_IntroContainer_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_IntroContainer_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_IntroContainer_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_IntroContainer_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Login/Login.module.scss":
/*!************************************************!*\
  !*** ./src/components/Login/Login.module.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Login_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./Login.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Login/Login.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Login_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Login_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Login_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Login_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/MathBanner/MathBanner.module.scss":
/*!**********************************************************!*\
  !*** ./src/components/MathBanner/MathBanner.module.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_MathBanner_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./MathBanner.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/MathBanner/MathBanner.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_MathBanner_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_MathBanner_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_MathBanner_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_MathBanner_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/MathContainer/MathContainer.module.scss":
/*!****************************************************************!*\
  !*** ./src/components/MathContainer/MathContainer.module.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_MathContainer_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./MathContainer.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/MathContainer/MathContainer.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_MathContainer_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_MathContainer_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_MathContainer_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_MathContainer_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/NavBar/NavBar.module.scss":
/*!**************************************************!*\
  !*** ./src/components/NavBar/NavBar.module.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./NavBar.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/NavBar/NavBar.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/NavMobile/NavMobile.module.scss":
/*!********************************************************!*\
  !*** ./src/components/NavMobile/NavMobile.module.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./NavMobile.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/NavMobile/NavMobile.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/NewsLetter/NewsLetter.module.scss":
/*!**********************************************************!*\
  !*** ./src/components/NewsLetter/NewsLetter.module.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NewsLetter_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./NewsLetter.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/NewsLetter/NewsLetter.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NewsLetter_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NewsLetter_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NewsLetter_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NewsLetter_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Register/Register.module.scss":
/*!******************************************************!*\
  !*** ./src/components/Register/Register.module.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Register_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./Register.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Register/Register.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Register_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Register_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Register_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Register_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/ScienceBanner/ScienceBanner.module.scss":
/*!****************************************************************!*\
  !*** ./src/components/ScienceBanner/ScienceBanner.module.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ScienceBanner_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./ScienceBanner.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/ScienceBanner/ScienceBanner.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ScienceBanner_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ScienceBanner_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ScienceBanner_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ScienceBanner_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/ScienceContainer/ScienceContainer.module.scss":
/*!**********************************************************************!*\
  !*** ./src/components/ScienceContainer/ScienceContainer.module.scss ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ScienceContainer_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./ScienceContainer.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/ScienceContainer/ScienceContainer.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ScienceContainer_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ScienceContainer_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ScienceContainer_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ScienceContainer_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/SpriteAnimation/SpriteAnimation.module.scss":
/*!********************************************************************!*\
  !*** ./src/components/SpriteAnimation/SpriteAnimation.module.scss ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SpriteAnimation_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./SpriteAnimation.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/SpriteAnimation/SpriteAnimation.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SpriteAnimation_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SpriteAnimation_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SpriteAnimation_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SpriteAnimation_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/SpriteAnimation/SpriteAnimationMed.module.scss":
/*!***********************************************************************!*\
  !*** ./src/components/SpriteAnimation/SpriteAnimationMed.module.scss ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SpriteAnimationMed_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./SpriteAnimationMed.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/SpriteAnimation/SpriteAnimationMed.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SpriteAnimationMed_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SpriteAnimationMed_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SpriteAnimationMed_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SpriteAnimationMed_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/SpriteAnimation/SpriteAnimationSm.module.scss":
/*!**********************************************************************!*\
  !*** ./src/components/SpriteAnimation/SpriteAnimationSm.module.scss ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SpriteAnimationSm_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./SpriteAnimationSm.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/SpriteAnimation/SpriteAnimationSm.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SpriteAnimationSm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SpriteAnimationSm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SpriteAnimationSm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SpriteAnimationSm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/index.module.scss":
/*!*******************************!*\
  !*** ./src/index.module.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_index_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../node_modules/sass-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!./index.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/index.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/AboutPage/AboutPage.module.scss":
/*!***************************************************!*\
  !*** ./src/pages/AboutPage/AboutPage.module.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AboutPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./AboutPage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/AboutPage/AboutPage.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AboutPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AboutPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AboutPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AboutPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/AuthPage/AuthPage.module.scss":
/*!*************************************************!*\
  !*** ./src/pages/AuthPage/AuthPage.module.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AuthPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./AuthPage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/AuthPage/AuthPage.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AuthPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AuthPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AuthPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AuthPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/ContactPage/ContactPage.module.scss":
/*!*******************************************************!*\
  !*** ./src/pages/ContactPage/ContactPage.module.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ContactPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./ContactPage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/ContactPage/ContactPage.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ContactPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ContactPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ContactPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ContactPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/HomePage/HomePage.module.scss":
/*!*************************************************!*\
  !*** ./src/pages/HomePage/HomePage.module.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_HomePage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./HomePage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/HomePage/HomePage.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_HomePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_HomePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_HomePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_HomePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/ProfilePage/ProfilePage.module.scss":
/*!*******************************************************!*\
  !*** ./src/pages/ProfilePage/ProfilePage.module.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./ProfilePage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/ProfilePage/ProfilePage.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "../../portfolio/public/img/tyler-spritesheet.png":
/*!********************************************************!*\
  !*** ../../portfolio/public/img/tyler-spritesheet.png ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "baff80dbdc01beba1387.png";

/***/ }),

/***/ "./public/img/cap-walking-spritesheet.png":
/*!************************************************!*\
  !*** ./public/img/cap-walking-spritesheet.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8fccd3022acd7762640b.png";

/***/ }),

/***/ "./public/img/hulk-sprite.png":
/*!************************************!*\
  !*** ./public/img/hulk-sprite.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "68f8113d10e82d8582a5.png";

/***/ }),

/***/ "./public/img/tyler-spritesheet-med.png":
/*!**********************************************!*\
  !*** ./public/img/tyler-spritesheet-med.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b3f712b5144ec7c58965.png";

/***/ }),

/***/ "./public/img/tyler-spritesheet-sm.png":
/*!*********************************************!*\
  !*** ./public/img/tyler-spritesheet-sm.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4031c99fef0abdcd87ad.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"App": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkbig_poppa_code_react_starter_kit"] = self["webpackChunkbig_poppa_code_react_starter_kit"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_fortawesome_react-fontawesome_index_es_js-node_modules_css-loader_dist_r-9aaa99"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=App.2cd2abfd2abdd9b858173161298dc33b.js.map