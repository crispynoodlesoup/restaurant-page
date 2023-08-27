/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const content = document.querySelector(\"#content\");\n\nfunction buildContent() {\n    const nav = document.createElement(\"nav\");\n\n    const navTitle = document.createElement(\"h2\");\n    navTitle.innerText = \"Eric's YumYum Buns\";\n    \n    const navList = document.createElement(\"ul\");\n    const homeButton = document.createElement(\"li\");\n    homeButton.innerText = \"HOME\";\n    homeButton.className = \"nav-link\";\n    const menuButton = document.createElement(\"li\");\n    menuButton.innerText = \"MENU\";\n    menuButton.className = \"nav-link\";\n    const contactButton = document.createElement(\"li\");\n    contactButton.innerText = \"CONTACT\";\n    contactButton.className = \"nav-link\";\n\n    navList.appendChild(homeButton);\n    navList.appendChild(menuButton);\n    navList.appendChild(contactButton);\n\n    nav.appendChild(navTitle);\n    nav.appendChild(navList);\n\n    content.appendChild(nav);\n\n    const main = document.createElement(\"main\");\n    \n    const welcome = document.createElement(\"div\");\n    welcome.className = \"welcome\";\n\n    const welcomeImg = document.createElement(\"img\");\n    welcomeImg.src = \"../src/cute_bread.png\";\n    welcome.appendChild(welcomeImg);\n    \n    const welcomeTitle = document.createElement(\"h1\");\n    welcomeTitle.innerText = \"Welcome To Bun Heaven!\";\n    welcome.appendChild(welcomeTitle);\n    \n    const welcomeText = document.createElement(\"p\");\n    welcomeText.innerText = \"We have bread galore! bread rolls, bread sticks, bread bowls, bread bites, get them all here!\";\n    welcome.appendChild(welcomeText);\n\n    main.appendChild(welcome);\n\n    content.appendChild(main);\n\n    const footer = document.createElement(\"footer\");\n\n    const footerText = document.createElement(\"p\");\n    footerText.innerText = \"Made by \";\n    const githubLink = document.createElement(\"a\");\n    githubLink.innerText = \"Rafael P.\";\n    githubLink.href = \"https://github.com/crispynoodlesoup\"; \n    githubLink.target = \"_blank\";\n    footerText.appendChild(githubLink);\n    footer.appendChild(footerText);\n\n    content.appendChild(footer);\n}\n\nbuildContent();\n\nwindow.onscroll = function() { handleNav() };\n\nfunction handleNav() {\n  if (document.documentElement.scrollTop > 10) {\n    document.querySelector(\"nav\").className = \"scrolled\";\n  } else {\n    document.querySelector(\"nav\").className = \"\";\n  }\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;