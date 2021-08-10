mybutton = document.getElementById("myBtn");
mybutton2 = document.getElementById("myBtn2");
var myImage = document.getElementById("l4Img");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
  if (document.documentElement.scrollTop > 700) {
    mybutton2.style.display = "block";
  } else {
    mybutton2.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

myImage.onclick = function(){
  let myImgSrc = myImage.getAttribute('src');

  if(myImgSrc === 'image/HiizumiMaika1.jpg'){
    myImage.setAttribute ('src','image/HiizumiMaika2.jpg');
  }
  else if(myImgSrc === 'image/HiizumiMaika2.jpg'){
    myImage.setAttribute ('src','image/HiizumiMaika3.jpg');
  }
  else if(myImgSrc === 'image/HiizumiMaika3.jpg'){
    myImage.setAttribute ('src','image/HiizumiMaika1.jpg');
  }
};