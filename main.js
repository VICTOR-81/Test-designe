
// управление drop menu

$ (function () {

  $('.dots').click(() => {
    $('.menu__drop-list').slideToggle();
  });

});



// логика сортировки меню

const logIn = document.querySelector('.login');
const signUp = document.querySelector('.signup');
let menuLink = document.querySelectorAll('.menu__list a');

let arrLink = [];

for( i=0; i < menuLink.length; i++ ) {
  menuLink[i].textContent;
  arrLink.push(menuLink[i].textContent);
}

let copyArrLink = arrLink.slice();

logIn.addEventListener('click', () => {
  
  let newArrLink = arrLink.sort();

  for( i=0; i < newArrLink.length; i++ ) {
   
    menuLink[i].textContent = newArrLink[i];

  }
  
});

signUp.addEventListener('click', () => {

  for( i=0; i < copyArrLink.length; i++ ) {
    
    menuLink[i].textContent = copyArrLink[i];

  }

});

