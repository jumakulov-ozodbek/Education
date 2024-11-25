document.getElementById("ratings-toggle").addEventListener("click", function () {
    const ratingsSection = document.getElementById("ratings-section");
    const ratingsIcon = document.getElementById("ratings-icon");

    const currentMaxHeight = ratingsSection.style.maxHeight;

    if (currentMaxHeight === "0px" || currentMaxHeight === "") {
        ratingsSection.style.maxHeight = "1000px";
        ratingsIcon.style.transform = "rotate(180deg)";
    } else {
        ratingsSection.style.maxHeight = "0px";
        ratingsIcon.style.transform = "rotate(0deg)";
    }
});
document.getElementById("durations-toggle").addEventListener("click", function () {
    const durationsSection = document.getElementById("durations-section");
    const durationsIcon = document.getElementById("durations-icon");

    const currentMaxHeight = durationsSection.style.maxHeight;

    if (currentMaxHeight === "0px" || currentMaxHeight === "") {
        durationsSection.style.maxHeight = "500px";
        durationsIcon.style.transform = "rotate(180deg)";
    } else {
        durationsSection.style.maxHeight = "0px";
        durationsIcon.style.transform = "rotate(0deg)";
    }
}); 
document.getElementById("Categories-toggle").addEventListener("click", function() {
    const categoriesSection = document.getElementById("Categories-section");
    const categoriesIcon = document.getElementById("Categories-icon");
  
    // Toggle max-height for sliding effect
    const currentMaxHeight = categoriesSection.style.maxHeight;
  
    if (currentMaxHeight === "0px" || currentMaxHeight === "") {
      categoriesSection.style.maxHeight = "500px"; // Set a max height when expanded
      categoriesIcon.style.transform = "rotate(180deg)"; // Rotate icon when expanded
    } else {
      categoriesSection.style.maxHeight = "0px"; // Collapse the section
      categoriesIcon.style.transform = "rotate(0deg)"; // Reset icon rotation
    }
  });
  // JavaScript to toggle the visibility of the Level section and icon rotation
document.getElementById("Level-toggle").addEventListener("click", function() {
    const levelSection = document.getElementById("Level-section");
    const levelIcon = document.getElementById("Level-icon");
  
    // Toggle max-height for sliding effect
    const currentMaxHeight = levelSection.style.maxHeight;
  
    if (currentMaxHeight === "0px" || currentMaxHeight === "") {
      levelSection.style.maxHeight = "500px"; // Set a max height when expanded
      levelIcon.style.transform = "rotate(180deg)"; // Rotate icon when expanded
    } else {
      levelSection.style.maxHeight = "0px"; // Collapse the section
      levelIcon.style.transform = "rotate(0deg)"; // Reset icon rotation
    }
  });
// JavaScript to toggle the visibility of the Language section and icon rotation
document.getElementById("Language-toggle").addEventListener("click", function() {
    const languageSection = document.getElementById("Language-section");
    const languageIcon = document.getElementById("Language-icon");
  
    // Toggle max-height for sliding effect
    const currentMaxHeight = languageSection.style.maxHeight;
  
    if (currentMaxHeight === "0px" || currentMaxHeight === "") {
      languageSection.style.maxHeight = "500px"; // Set a max height when expanded
      languageIcon.style.transform = "rotate(180deg)"; // Rotate icon when expanded
    } else {
      languageSection.style.maxHeight = "0px"; // Collapse the section
      languageIcon.style.transform = "rotate(0deg)"; // Reset icon rotation
    }
  });
  const priceToggle = document.getElementById("Price-toggle");
  const priceSection = document.getElementById("Price-section");
  const priceIcon = document.getElementById("Price-icon");

  priceToggle.addEventListener("click", () => {
    // Toggle max-height to show or hide the section
    priceSection.classList.toggle("max-h-0");
    priceSection.classList.toggle("max-h-screen");  // Optional: max-h-screen for the open state

    // Rotate the icon when the section is opened or closed
    priceIcon.classList.toggle("rotate-180");
  });
  const featuresToggle = document.getElementById("Features-toggle");
  const featuresSection = document.getElementById("Features-section");
  const featuresIcon = document.getElementById("Features-icon");

  featuresToggle.addEventListener("click", () => {
    // Toggle max-height to show or hide the section
    featuresSection.classList.toggle("max-h-0");
    featuresSection.classList.toggle("max-h-screen");  // Optional: max-h-screen for the open state

    // Rotate the icon when the section is opened or closed
    featuresIcon.classList.toggle("rotate-180");
  });    