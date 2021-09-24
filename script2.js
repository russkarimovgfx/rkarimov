const menuIcon = document.querySelector('.ham-menu');
const navbar = document.querySelector('.navbar');



menuIcon.addEventListener('click', () => {
 navbar.classList.toggle('change')
})


//NAVBAR FOOTER
const navBarTwo = document.querySelector('navbar-two');
const links = document.querySelectorAll('.navbarlink');

links.forEach((link) => {
 link.addEventListener('click', () => {
  links.forEach((link) => {
   link.className = "navbarlink";
  })
  link.classList.add('change');

  link.previousElementSibling.classList.add
   ("prevElChange");
  link.nextElementSibling.classList.add
   ("nextElChange");
 });
});