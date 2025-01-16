const searchBox = document.getElementById("search-box");
const petalsContainer = document.getElementById("petals-container");

searchBox.addEventListener("input", function() {
  if (searchBox.value.toLowerCase() === "gratitude") {
    createFallingPetals();
  }
});

function createFallingPetals() {
  for (let i = 0; i < 10; i++) {  // Create 10 petals at a time
    const petal = document.createElement("div");
    petal.classList.add("petal");
    
    // Randomize the horizontal position and size of the petal
    const randomPosition = Math.random() * 100; // Random percentage from 0 to 100
    const randomSize = Math.random() * (40 - 20) + 20; // Random size between 20px and 40px
    const randomDelay = Math.random() * 2; // Random animation delay between 0s and 2s

    petal.style.left = `${randomPosition}%`;
    petal.style.width = `${randomSize}px`;
    petal.style.height = `${randomSize}px`;
    petal.style.animationDelay = `${randomDelay}s`;

    // Append the petal to the container
    petalsContainer.appendChild(petal);
    
    // Remove the petal after the animation ends
    setTimeout(() => {
      petalsContainer.removeChild(petal);
    }, 5000); // 5 seconds to match the animation duration
  }
}
