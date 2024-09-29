window.onload = function () {
    const logoContainer = document.getElementById("logoContainer");
    const logo = document.getElementById("logo");
  
    // Move to center and rotate clockwise
    logoContainer.style.transform =
      "translate(calc(50vw - 37.5px), calc(50vh - 37.5px)) rotate(360deg)";
  
    // Hide logo and background after 2 seconds
    setTimeout(() => {
      logoContainer.classList.add("hidden");
    }, 1000);
  
    // Show white background and logo after additional 2 seconds
    setTimeout(() => {
      logoContainer.classList.remove("hidden");
      logo.style.opacity = "0";
    }, 3000);
  
    // Show logo in 1 second
    setTimeout(() => {
      logo.style.opacity = "1";
    }, 4000);
  
    // Move back to initial position and rotate counterclockwise
    setTimeout(() => {
      logoContainer.style.transform = "translate(0, 0) rotate(0deg)";
    }, 5000);
  
    const leftDiv = document.getElementById("leftDiv");
    const rightDiv = document.getElementById("rightDiv");
  
    // Step 1: Collapse right div and hide left div
    rightDiv.classList.add("hidden");
    leftDiv.classList.add("slide-bottom");
  
    // Step 2: After 1 second, make the left div fullscreen
    setTimeout(() => {
      rightDiv.classList.add("fullscreen");
    }, 2000);
  
    // Step 3: After another second, slide back the left div and show the right div
    setTimeout(() => {
      rightDiv.classList.add("halfscreen");
      leftDiv.classList.add("slide-back");
    }, 5000);
  
    // Step 5: Reset left div position after sliding back
    setTimeout(() => {
      leftDiv.classList.remove("slide-back");
      leftDiv.style.transform = "translateY(0)";
    }, 7000);
  };
  