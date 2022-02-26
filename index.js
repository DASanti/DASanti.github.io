/*const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

burger.addEventListener('click', () => {
  if (menu.classList.contains('hidden')){
    menu.classList.remove('hidden');
  } else{
    menu.classList.add('hidden');
  }
})

document.addEventListener(
  "click",
  function(event) {
    var window1 = document.getElementById("window1");
    // If user either clicks X button OR clicks outside the modal window, then close modal by calling closeModal()
    if (!event.target.closest(window1)) {
      document.getElementById("modal1").style.display="none"
    }
  },
  false
)*/

function function_open1(){ document.getElementById("modal1").style.display="block"; }
function function_close1(){ document.getElementById("modal1").style.display="none"; }

function function_open2(){ document.getElementById("modal2").style.display="block"; }
function function_close2(){ document.getElementById("modal2").style.display="none"; }

function function_open3(){ document.getElementById("modal3").style.display="block"; }
function function_close3(){ document.getElementById("modal3").style.display="none"; }

function function_open4(){ document.getElementById("modal4").style.display="block"; }
function function_close4(){ document.getElementById("modal4").style.display="none"; }

function function_open5(){ document.getElementById("modal5").style.display="block"; }
function function_close5(){ document.getElementById("modal5").style.display="none"; }

function function_open6(){ document.getElementById("modal6").style.display="block"; }
function function_close6(){ document.getElementById("modal6").style.display="none"; }

function function_expand1(imgs) {
  var expandImg = document.getElementById("expandedImg1");
  var imgText = document.getElementById("imgtext1");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  if (menu.classList.contains('visible')){
    expandImg.classList.remove('visible');
  } else{
    expandImg.classList.add('visible');
  }
}

function function_expand2(imgs) {
  var expandImg = document.getElementById("expandedImg2");
  var imgText = document.getElementById("imgtext2");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  if (menu.classList.contains('visible')){
    expandImg.classList.remove('visible');
  } else{
    expandImg.classList.add('visible');
  }
}

function function_expand3(imgs) {
  var expandImg = document.getElementById("expandedImg3");
  var imgText = document.getElementById("imgtext3");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  if (menu.classList.contains('visible')){
    expandImg.classList.remove('visible');
  } else{
    expandImg.classList.add('visible');
  }
}

function function_expand4(imgs) {
  var expandImg = document.getElementById("expandedImg4");
  var imgText = document.getElementById("imgtext4");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  if (menu.classList.contains('visible')){
    expandImg.classList.remove('visible');
  } else{
    expandImg.classList.add('visible');
  }
}

function function_expand5(imgs) {
  var expandImg = document.getElementById("expandedImg5");
  var imgText = document.getElementById("imgtext5");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  if (menu.classList.contains('visible')){
    expandImg.classList.remove('visible');
  } else{
    expandImg.classList.add('visible');
  }
}

function function_expand6(imgs) {
  var expandImg = document.getElementById("expandedImg6");
  var imgText = document.getElementById("imgtext6");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  if (menu.classList.contains('visible')){
    expandImg.classList.remove('visible');
  } else{
    expandImg.classList.add('visible');
  }
}

const sections = document.querySelectorAll('section');
/* const navLi = document.querySelectorAll('nav .container ul li') */
const navLi = document.querySelectorAll('nav .container ul li a');

window.addEventListener('scroll', ()=> {
  document.getElementById("initial_nav").classList.remove('activated');

  sections.forEach( section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if(scrollY >= (sectionTop-sectionHeight / 3)){
      current = section.getAttribute('id');
    }
  })

  /*navLi.forEach( li => {
    li.classList.remove('activated');
    if(li.classList.contains(current)){
      li.classList.add('activated')
    }
  })

})*/

  navLi.forEach(li => {
		li.classList.remove('activated');
		const href = li.getAttribute('href').substring(1);
		if (href === current) {
			li.classList.add('activated')
		}
	})

})