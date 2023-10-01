let openMenu= document.getElementsByClassName("pages")[0];
let extraMenu = document.getElementsByClassName("extra-menu")[0];
console.log(extraMenu);
console.log(openMenu);

openMenu.addEventListener("mouseover", () => {
   console.log('hello');
   extraMenu.classList.add("display-extra-menu");
});

openMenu.addEventListener("mouseout", () => {
    console.log('bye');
    extraMenu.classList.remove("display-extra-menu");
 });
 

