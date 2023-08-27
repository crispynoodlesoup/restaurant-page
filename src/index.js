const content = document.querySelector("#content");

function clearContent() {
  const children = [...content.children];
  children.forEach((child) => content.removeChild(child));
}

function buildNav() {
    const nav = document.createElement("nav");

    const navTitle = document.createElement("h2");
    navTitle.innerText = "Eric's YumYum Buns";
    
    const navList = document.createElement("ul");
    const homeButton = document.createElement("li");
    homeButton.innerText = "HOME";
    homeButton.className = "nav-link";
    homeButton.addEventListener("click", buildHome);
    
    const menuButton = document.createElement("li");
    menuButton.innerText = "MENU";
    menuButton.className = "nav-link";
    menuButton.addEventListener("click", buildMenu);
    
    const contactButton = document.createElement("li");
    contactButton.innerText = "CONTACT";
    contactButton.className = "nav-link";
    contactButton.addEventListener("click", buildContact);

    navList.appendChild(homeButton);
    navList.appendChild(menuButton);
    navList.appendChild(contactButton);

    nav.appendChild(navTitle);
    nav.appendChild(navList);

    content.appendChild(nav);
}

function buildFooter() {
    const footer = document.createElement("footer");

    const footerText = document.createElement("p");
    footerText.innerText = "Website by ";
    const githubLink = document.createElement("a");
    githubLink.innerText = "Rafael P.";
    githubLink.href = "https://github.com/crispynoodlesoup"; 
    githubLink.target = "_blank";
    footerText.appendChild(githubLink);
    footer.appendChild(footerText);

    const iconsText = document.createElement("a");
    iconsText.innerText = "Cute icons created by narak0rn - Flaticon";
    iconsText.classList.add("icon-text");
    iconsText.href = "https://www.flaticon.com/free-icons/cute"; 
    iconsText.title = "cute icons";
    footer.appendChild(iconsText);

    content.appendChild(footer);
}

function buildHomeMain() {
    const main = document.createElement("main");
    
    const welcome = document.createElement("div");
    welcome.className = "welcome";

    const welcomeImg = document.createElement("img");
    welcomeImg.src = "./cute_bread.png";
    welcome.appendChild(welcomeImg);
    
    const welcomeTitle = document.createElement("h1");
    welcomeTitle.innerText = "Welcome To Bun Heaven!";
    welcome.appendChild(welcomeTitle);
    
    const welcomeText = document.createElement("p");
    welcomeText.innerText = "We have bread galore! bread rolls, bread sticks, bread bowls, bread bites, get them all here!";
    welcome.appendChild(welcomeText);
    
    const discretion = document.createElement("p");
    discretion.innerText = "*Eric is not responsible for those who die of the overwhelming joy that comes with eating his bread";
    discretion.className = "discretion";
    welcome.appendChild(discretion);

    main.appendChild(welcome);

    content.appendChild(main);
}

function buildHome() {
  clearContent();
  buildNav();
  buildHomeMain();
  buildFooter();
  document.querySelector(".nav-link").classList.add("selected-nav-page");
}

function buildMenuMain() {
  const main = document.createElement("main");

  const menu = document.createElement("div");
  menu.className = "menu";

  const menuTitle = document.createElement("h1");
  menuTitle.className = "menu-title";
  menuTitle.innerText = "Menu";
  menu.appendChild(menuTitle);

  const menuText = document.createElement("p");
  menuText.className = "menu-text";
  menuText.innerText = "From the finest selection of buns";
  menu.appendChild(menuText);

  const menuItem1 = document.createElement("div");
  menuItem1.className = "menu-item";
  const donut = document.createElement("img");
  donut.className = "menu-item-img";
  donut.src = "./donut.png";
  const donutText = document.createElement("h3");
  donutText.innerText = "Donuts! ($0.50)";
  donutText.className = "menu-item-text";
  menuItem1.appendChild(donut);
  menuItem1.appendChild(donutText);
  menu.appendChild(menuItem1);

  const menuItem3 = document.createElement("div");
  menuItem3.className = "menu-item";
  const cakes = document.createElement("img");
  cakes.className = "menu-item-img";
  cakes.src = "./pancakes.png";
  const cakesText = document.createElement("h3");
  cakesText.innerText = "Hot cakes! ($2)";
  cakesText.className = "menu-item-text";
  menuItem3.appendChild(cakes);
  menuItem3.appendChild(cakesText);
  menu.appendChild(menuItem3);

  const menuItem2 = document.createElement("div");
  menuItem2.className = "menu-item";
  const croissant = document.createElement("img");
  croissant.className = "menu-item-img";
  croissant.src = "./croissant.png";
  const croissantText = document.createElement("h3");
  croissantText.innerText = "Croissant! ($240)";
  croissantText.className = "menu-item-text";
  menuItem2.appendChild(croissant);
  menuItem2.appendChild(croissantText);
  menu.appendChild(menuItem2);

  main.appendChild(menu);

  content.appendChild(main);
}

function buildMenu() {
  clearContent();
  buildNav();
  buildMenuMain();
  buildFooter();
  document.querySelector(".nav-link:nth-child(2)").classList.add("selected-nav-page");
}

function buildContactMain() {
  const main = document.createElement("main");
  content.appendChild(main);
}

function buildContact() {
  clearContent();
  buildNav();
  buildContactMain();
  buildFooter();
  document.querySelector(".nav-link:nth-child(3)").classList.add("selected-nav-page");
}

buildHome(); // initialize with home screen

window.onscroll = function() { handleNav() };

function handleNav() {
  if (document.documentElement.scrollTop > 10) {
    document.querySelector("nav").className = "scrolled";
  } else {
    document.querySelector("nav").className = "";
  }
}
