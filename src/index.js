const content = document.querySelector("#content");

function buildNav() {
    const nav = document.createElement("nav");

    const navTitle = document.createElement("h2");
    navTitle.innerText = "Eric's YumYum Buns";
    
    const navList = document.createElement("ul");
    const homeButton = document.createElement("li");
    homeButton.innerText = "HOME";
    homeButton.className = "nav-link";
    const menuButton = document.createElement("li");
    menuButton.innerText = "MENU";
    menuButton.className = "nav-link";
    const contactButton = document.createElement("li");
    contactButton.innerText = "CONTACT";
    contactButton.className = "nav-link";

    navList.appendChild(homeButton);
    navList.appendChild(menuButton);
    navList.appendChild(contactButton);

    nav.appendChild(navTitle);
    nav.appendChild(navList);

    content.appendChild(nav);
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

function buildFooter() {
    const footer = document.createElement("footer");

    const footerText = document.createElement("p");
    footerText.innerText = "Made by ";
    const githubLink = document.createElement("a");
    githubLink.innerText = "Rafael P.";
    githubLink.href = "https://github.com/crispynoodlesoup"; 
    githubLink.target = "_blank";
    footerText.appendChild(githubLink);
    footer.appendChild(footerText);

    content.appendChild(footer);
}

buildNav();
buildHomeMain();
buildFooter();
document.querySelector(".nav-link").classList.add("selected-nav-page");

window.onscroll = function() { handleNav() };

function handleNav() {
  if (document.documentElement.scrollTop > 10) {
    document.querySelector("nav").className = "scrolled";
  } else {
    document.querySelector("nav").className = "";
  }
}
