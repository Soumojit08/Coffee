document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card"); // Select all card elements

  function gsapCode() {
    gsap.to("#header", {
      opacity: 1,
      duration: 1,
    });
    gsap.to(".box", {
      opacity: 1,
      duration: 1,
      delay: 1,
    });
    gsap.to(".card", {
      opacity: 1,
      delay: 2,
      stagger: 0.2,
    });
  }
  gsapCode();

  fetch(
    "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      // Populate card information
      data.forEach((item, index) => {
        if (cards[index]) {
          const imgDiv = cards[index].querySelector(".img");
          const nameElement = cards[index].querySelector(".name");
          const priceElement = cards[index].querySelector(".price");
          const ratingElement = cards[index].querySelector(".ratting");

          // Set the image background or use an <img> tag if preferred
          imgDiv.style.backgroundImage = `url(${item.image})`; // Assuming the item has an 'image' property
          imgDiv.style.backgroundSize = "cover"; // Make the image cover the div
          imgDiv.style.height = "150px"; // Set a height for the image

          nameElement.innerText = item.name; // Set the coffee name
          priceElement.innerText = `${item.price}`; // Set the coffee price
          const ratting = document.createElement("div");
          ratting.innerText = `Rating: ${item.rating}`;
          ratingElement.appendChild(ratting);
        }
      });
    })
    .catch((error) => {
      console.log(error);
    });
});
