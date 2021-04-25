// let slideIndex = 1;
// showDivs();

// function showDivs(n) {
//   let x = document.querySelectorAll(".slides");
//   for (let i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > x.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = x.length;
//   }
//   x[slideIndex - 1].style.display = "block";
//   setTimeout(showDivs, 5000)
// }

// function plusDivs(n) {
//   showDivs((slideIndex += n));
// }

let slideIndex = 1;

function plusDivs(n) {
  clearInterval(myTimer);
  if (n < 0) {
    showDivs((slideIndex -= 1));
  } else {
    showDivs((slideIndex += 1));
  }
  if (n === -1) {
    myTimer = setInterval(() => plusDivs(n + 2), 2000);
  } else {
    myTimer = setInterval(() => plusDivs(n + 1), 2000);
  }
}

function showDivs(n) {
  let slides = document.querySelectorAll(".slides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // for (let i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  // }
  slides[slideIndex - 1].style.display = "block";
  // dots[slideIndex-1].className += " active";
}

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".links");
  const navLinks = document.querySelectorAll(".links li");

  burger.addEventListener("click", () => {
    // TOGGLE NAV
    nav.classList.toggle("nav-active");

    // ANIMATE LINKS
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 5 + 0.3
        }s`;
      }
    });

    // BURGER ANIMATION
    burger.classList.toggle('toggle');
  });
};

const dropSlide = () => {
  const dropBtn = document.querySelector(".dropbtn");
  const dropContent = document.querySelector(".dropdown-content")
  console.log(dropBtn, dropContent)
  dropBtn.addEventListener("click", () => {
    dropContent.classList.toggle("dropdown-active")
  })
}

const app = () => {
 navSlide();
 dropSlide();
}


window.addEventListener("load", () => {
  showDivs(slideIndex);
  myTimer = setInterval(() => {
    plusDivs(1);
  }, 2000);
});

app();