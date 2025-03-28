function toggleSearch() {
  let searchContainer = document.querySelector(".search-container");
  searchContainer.classList.toggle("active");
}

// Close search when clicking outside
function toggleSearch() {
  let searchPopup = document.getElementById("searchPopup");

  // Toggle class for animation
  if (!searchPopup.classList.contains("active")) {
      searchPopup.classList.add("active");
  } else {
      searchPopup.classList.remove("active");
  }
}

// Hide pop-up when clicking outside
document.addEventListener("click", function (event) {
  let searchPopup = document.getElementById("searchPopup");
  let searchIcon = document.querySelector(".search-icon");

  if (event.target !== searchPopup && event.target !== searchIcon && !searchPopup.contains(event.target)) {
      searchPopup.classList.remove("active");
  }
});


///Expand---card////

function expandCard(clickedCard) {
  document.querySelectorAll(".card").forEach((card) => {
    card.classList.remove("active");
  });
  clickedCard.classList.add("active");
}

///////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide("#slider", {
    type: "fade", // Loop mode enabled
    rewind: true,
    pagination: false,
    arrows: false,
    speed: 1000,
  });

  splide.mount();

  // Forward button
  document.getElementById("nextBtn").addEventListener("click", function () {
    splide.go("+1"); // Next slide
  });

  // Reverse button
  document.getElementById("prevBtn").addEventListener("click", function () {
    splide.go("-1"); // Previous slide
  });
});

/////////////////////////////////////////////////



document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const closeIcon = document.querySelector(".close-icon");
  const mobileNav = document.querySelector(".mobile-nav");
  const body = document.body
  menuIcon.addEventListener("click", function () {
      mobileNav.classList.add("active");
      menuIcon.style.display = "none";
      closeIcon.style.display = "block";
      body.classList.add("no-scroll")
  });
  closeIcon.addEventListener("click", function () {
      mobileNav.classList.remove("active");
      closeIcon.style.display = "none";
      menuIcon.style.display = "block";
      body.classList.remove("no-scroll")
  });
});



// @media screen and (max-width: 480px) {
//   .fr-one-text h2 {
//     font-size: 27px;
//   }
//   .fi-img-one img {
//     width: 100%;
//     height: 100%;
//     min-height: 0px;
//     object-fit: cover;
//   }
//   .fr-two-text p {
//     font-size: 16px;
//   }

//   .fr-logo {
//     display: grid;
//     grid-template-columns: 1fr 1fr 1fr;
//   }

//   .fr-lg-one img {
//     width: 100%;
//     height: 100%;
//   }
//   .th-in-content {
//     /* width: 50%; */
//     display: flex;
//     flex-direction: column;
//     gap: 60px;
//     margin-left: auto;
//     box-sizing: border-box;
//     /* padding: 50px 0 50px 32px; */
//   }
// }