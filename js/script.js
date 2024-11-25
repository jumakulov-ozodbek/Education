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