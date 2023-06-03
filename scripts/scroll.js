var count = [];
let page = 0;
var pos = 0;
var ref = document.querySelectorAll('.nav a');
var cur = document.querySelectorAll('.nav a div');
var stars1 = document.querySelector('.stars1');
var stars2 = document.querySelector('.stars2');
var pc = document.querySelectorAll('.projectCollection');
ref.forEach(s =>{
  s.addEventListener('click', event =>{
    let g = Array.from(ref);
    page = g.indexOf(s);
    cur.forEach(c => c.classList.remove('current'));
    cur[page].classList.add('current');
  });
});
var ono = 1;
pc.forEach(pc =>{
  pc.addEventListener('mouseover', event=>{
    ono = 0;
  });
  pc.addEventListener('mouseleave', event=>{
    ono = 1;
  });
});

document.addEventListener('wheel', event =>{
  // faux scroll
  ono == 1 ? count.push(Math.floor(event.deltaY)) : null;
  if(count.length >= 5){
    let check = 0;
    count.forEach(c =>{ check += c; });
    count = [];
    if(check > 0 && page < 3){
      page++;
    }
    else if(check < 0 && page > 0){
      page--;
    }
    switch(page){
      case 0: document.querySelector('a[href="#home"]').click(); break;
      case 1: document.querySelector('a[href="#cppPlanet"]').click(); break;
      case 2: document.querySelector('a[href="#webdevPlanet"]').click(); break;
      case 3: document.querySelector('a[href="#gamedevPlanet"]').click(); break;
    }
  }
});
document.addEventListener('scroll', event =>{
  stars1.style.backgroundPosition = `0px ${-window.scrollY * 2}px`;
  stars2.style.backgroundPosition = `0px ${-window.scrollY / 2}px`;
});