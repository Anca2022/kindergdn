let openMenu= document.getElementsByClassName("pages")[0];
let extraMenu = document.getElementsByClassName("extra-menu")[0];

openMenu.addEventListener("mouseover", () => {
   extraMenu.classList.add("display-extra-menu");
});

openMenu.addEventListener("mouseout", () => {
    extraMenu.classList.remove("display-extra-menu");
 });
 

