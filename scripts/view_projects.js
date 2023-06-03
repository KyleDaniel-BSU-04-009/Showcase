var viewButtons = document.querySelectorAll('span.viewButton');
var backButtons = document.querySelectorAll('span.backButton');
var planetDesc = document.querySelectorAll('.descWrapper .planetDesc');
var projectWrapper = document.querySelectorAll('.descWrapper .projectWrapper');
viewButtons.forEach(b =>{
  b.addEventListener('click', event =>{
    let buttonsArr = Array.from(viewButtons);
    let index = buttonsArr.indexOf(b);
    planetDesc[index].style.animation = 'viewIn ease 0.75s';
    planetDesc[index].style.animationFillMode = 'forwards';
    projectWrapper[index].style.animation = 'viewIn ease 0.75s';
    projectWrapper[index].style.animationFillMode = 'forwards';
  });
});
backButtons.forEach(b =>{
  b.addEventListener('click', event =>{
    let buttonsArr = Array.from(backButtons);
    let index = buttonsArr.indexOf(b);
    planetDesc[index].style.animation = 'viewOut ease 0.75s';
    planetDesc[index].style.animationFillMode = 'forwards';
    projectWrapper[index].style.animation = 'viewOut ease 0.75s';
    projectWrapper[index].style.animationFillMode = 'forwards';
  });
});