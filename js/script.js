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
document.getElementById("Categories-toggle").addEventListener("click", function () {
  const categoriesSection = document.getElementById("Categories-section");
  const categoriesIcon = document.getElementById("Categories-icon");


  const currentMaxHeight = categoriesSection.style.maxHeight;

  if (currentMaxHeight === "0px" || currentMaxHeight === "") {
    categoriesSection.style.maxHeight = "500px";
    categoriesIcon.style.transform = "rotate(180deg)";
  } else {
    categoriesSection.style.maxHeight = "0px";
    categoriesIcon.style.transform = "rotate(0deg)";
  }
});

document.getElementById("Level-toggle").addEventListener("click", function () {
  const levelSection = document.getElementById("Level-section");
  const levelIcon = document.getElementById("Level-icon");


  const currentMaxHeight = levelSection.style.maxHeight;

  if (currentMaxHeight === "0px" || currentMaxHeight === "") {
    levelSection.style.maxHeight = "500px";
    levelIcon.style.transform = "rotate(180deg)";
  } else {
    levelSection.style.maxHeight = "0px";
    levelIcon.style.transform = "rotate(0deg)";
  }
});
document.getElementById("Language-toggle").addEventListener("click", function () {
  const languageSection = document.getElementById("Language-section");
  const languageIcon = document.getElementById("Language-icon");


  const currentMaxHeight = languageSection.style.maxHeight;

  if (currentMaxHeight === "0px" || currentMaxHeight === "") {
    languageSection.style.maxHeight = "500px";
    languageIcon.style.transform = "rotate(180deg)";
  } else {
    languageSection.style.maxHeight = "0px";
    languageIcon.style.transform = "rotate(0deg)";
  }
});
const priceToggle = document.getElementById("Price-toggle");
const priceSection = document.getElementById("Price-section");
const priceIcon = document.getElementById("Price-icon");

priceToggle.addEventListener("click", () => {

  priceSection.classList.toggle("max-h-0");
  priceSection.classList.toggle("max-h-screen");


  priceIcon.classList.toggle("rotate-180");
});
const featuresToggle = document.getElementById("Features-toggle");
const featuresSection = document.getElementById("Features-section");
const featuresIcon = document.getElementById("Features-icon");

featuresToggle.addEventListener("click", () => {

  featuresSection.classList.toggle("max-h-0");
  featuresSection.classList.toggle("max-h-screen");

  featuresIcon.classList.toggle("rotate-180");
});
const cards = document.querySelectorAll('.w-3/4.md\\:w-2\\/3.lg\\:w-1\\/2');

cards.forEach(card => {
  const overlay = card.querySelector('.absolute');

  card.addEventListener('mouseover', () => {
    overlay.classList.remove('bg-opacity-0');
    overlay.classList.add('bg-opacity-50');
  });

  card.addEventListener('mouseout', () => {
    overlay.classList.remove('bg-opacity-50');
    overlay.classList.add('bg-opacity-0');
  });
});    

  new Glide('.glide', {
    type: 'carousel',
    perView: 3, 
    gap: 30, 
    autoplay: 3000, 
  }).mount();

// Dropdown menyu ochilish/yopilish funksiyasi
document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.getElementById('menu-button');
  const dropdownMenu = menuButton.nextElementSibling;

  // Menyuni ochish/yopish
  menuButton.addEventListener('click', () => {
    const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', !isExpanded);
    dropdownMenu.classList.toggle('hidden');
  });

  // Menyudan tashqarida bosilganda menyuni yopish
  document.addEventListener('click', (event) => {
    if (!menuButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
      menuButton.setAttribute('aria-expanded', 'false');
      dropdownMenu.classList.add('hidden');
    }
  });
});









const accordionButtons = document.querySelectorAll('.accordion-button');

accordionButtons.forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;

        if (content) {
            content.classList.toggle('hidden');
            content.classList.toggle('block');
        }

        button.classList.toggle('bg-red-500');
    });
});

