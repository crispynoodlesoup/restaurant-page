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

eval("const content = document.querySelector(\"#content\");\n\nfunction clearContent() {\n  const children = [...content.children];\n  children.forEach((child) => content.removeChild(child));\n}\n\nfunction buildNav() {\n    const nav = document.createElement(\"nav\");\n\n    const navTitle = document.createElement(\"h2\");\n    navTitle.innerText = \"Eric's YumYum Buns\";\n    \n    const navList = document.createElement(\"ul\");\n    const homeButton = document.createElement(\"li\");\n    homeButton.innerText = \"HOME\";\n    homeButton.className = \"nav-link\";\n    homeButton.addEventListener(\"click\", buildHome);\n    \n    const menuButton = document.createElement(\"li\");\n    menuButton.innerText = \"MENU\";\n    menuButton.className = \"nav-link\";\n    menuButton.addEventListener(\"click\", buildMenu);\n    \n    const contactButton = document.createElement(\"li\");\n    contactButton.innerText = \"CONTACT\";\n    contactButton.className = \"nav-link\";\n    contactButton.addEventListener(\"click\", buildContact);\n\n    navList.appendChild(homeButton);\n    navList.appendChild(menuButton);\n    navList.appendChild(contactButton);\n\n    nav.appendChild(navTitle);\n    nav.appendChild(navList);\n\n    content.appendChild(nav);\n}\n\nfunction buildFooter() {\n    const footer = document.createElement(\"footer\");\n\n    const footerText = document.createElement(\"p\");\n    footerText.innerText = \"Website by \";\n    const githubLink = document.createElement(\"a\");\n    githubLink.innerText = \"Rafael P.\";\n    githubLink.href = \"https://github.com/crispynoodlesoup\"; \n    githubLink.target = \"_blank\";\n    footerText.appendChild(githubLink);\n    footer.appendChild(footerText);\n\n    const iconsText = document.createElement(\"a\");\n    iconsText.innerText = \"Cute icons created by narak0rn - Flaticon\";\n    iconsText.classList.add(\"icon-text\");\n    iconsText.href = \"https://www.flaticon.com/free-icons/cute\"; \n    iconsText.title = \"cute icons\";\n    footer.appendChild(iconsText);\n\n    content.appendChild(footer);\n}\n\nfunction buildHomeMain() {\n    const main = document.createElement(\"main\");\n    \n    const welcome = document.createElement(\"div\");\n    welcome.className = \"welcome\";\n\n    const welcomeImg = document.createElement(\"img\");\n    welcomeImg.src = \"./cute_bread.png\";\n    welcome.appendChild(welcomeImg);\n    \n    const welcomeTitle = document.createElement(\"h1\");\n    welcomeTitle.innerText = \"Welcome To Bun Heaven!\";\n    welcome.appendChild(welcomeTitle);\n    \n    const welcomeText = document.createElement(\"p\");\n    welcomeText.innerText = \"We have bread galore! bread rolls, bread sticks, bread bowls, bread bites, get them all here!\";\n    welcome.appendChild(welcomeText);\n    \n    const discretion = document.createElement(\"p\");\n    discretion.innerText = \"*Eric is not responsible for those who die of the overwhelming joy that comes with eating his bread\";\n    discretion.className = \"discretion\";\n    welcome.appendChild(discretion);\n\n    main.appendChild(welcome);\n\n    content.appendChild(main);\n}\n\nfunction buildHome() {\n  clearContent();\n  buildNav();\n  buildHomeMain();\n  buildFooter();\n  document.querySelector(\".nav-link\").classList.add(\"selected-nav-page\");\n}\n\nfunction buildMenuMain() {\n  const main = document.createElement(\"main\");\n\n  const menu = document.createElement(\"div\");\n  menu.className = \"menu\";\n\n  const menuTitle = document.createElement(\"h1\");\n  menuTitle.className = \"menu-title\";\n  menuTitle.innerText = \"Menu\";\n  menu.appendChild(menuTitle);\n\n  const menuText = document.createElement(\"p\");\n  menuText.className = \"menu-text\";\n  menuText.innerText = \"From the finest selection of buns\";\n  menu.appendChild(menuText);\n\n  const menuItem1 = document.createElement(\"div\");\n  menuItem1.className = \"menu-item\";\n  const donut = document.createElement(\"img\");\n  donut.className = \"menu-item-img\";\n  donut.src = \"./donut.png\";\n  const donutText = document.createElement(\"h3\");\n  donutText.innerText = \"Donuts! ($0.50)\";\n  donutText.className = \"menu-item-text\";\n  menuItem1.appendChild(donut);\n  menuItem1.appendChild(donutText);\n  menu.appendChild(menuItem1);\n\n  const menuItem3 = document.createElement(\"div\");\n  menuItem3.className = \"menu-item\";\n  const cakes = document.createElement(\"img\");\n  cakes.className = \"menu-item-img\";\n  cakes.src = \"./pancakes.png\";\n  const cakesText = document.createElement(\"h3\");\n  cakesText.innerText = \"Hot cakes! ($2)\";\n  cakesText.className = \"menu-item-text\";\n  menuItem3.appendChild(cakes);\n  menuItem3.appendChild(cakesText);\n  menu.appendChild(menuItem3);\n\n  const menuItem2 = document.createElement(\"div\");\n  menuItem2.className = \"menu-item\";\n  const croissant = document.createElement(\"img\");\n  croissant.className = \"menu-item-img\";\n  croissant.src = \"./croissant.png\";\n  const croissantText = document.createElement(\"h3\");\n  croissantText.innerText = \"Croissant! ($240)\";\n  croissantText.className = \"menu-item-text\";\n  menuItem2.appendChild(croissant);\n  menuItem2.appendChild(croissantText);\n  menu.appendChild(menuItem2);\n\n  main.appendChild(menu);\n\n  content.appendChild(main);\n}\n\nfunction buildMenu() {\n  clearContent();\n  buildNav();\n  buildMenuMain();\n  buildFooter();\n  document.querySelector(\".nav-link:nth-child(2)\").classList.add(\"selected-nav-page\");\n}\n\nfunction buildContactMain() {\n  const main = document.createElement(\"main\");\n  content.appendChild(main);\n}\n\nfunction buildContact() {\n  clearContent();\n  buildNav();\n  buildContactMain();\n  buildFooter();\n  document.querySelector(\".nav-link:nth-child(3)\").classList.add(\"selected-nav-page\");\n}\n\nbuildHome(); // initialize with home screen\n\nwindow.onscroll = function() { handleNav() };\n\nfunction handleNav() {\n  if (document.documentElement.scrollTop > 10) {\n    document.querySelector(\"nav\").className = \"scrolled\";\n  } else {\n    document.querySelector(\"nav\").className = \"\";\n  }\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

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