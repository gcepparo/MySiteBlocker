//document.body.style.border = "5px solid red";

// const hidePage = `body > :not(.beastify-image) {
//     display: none;
//   }`;



  let url = browser.runtime.getURL("icons/bruh.jpg");
  let beastImage = document.createElement("img");
  beastImage.setAttribute("src", url);
  beastImage.style.height = "100vh";
  beastImage.className = "beastify-image";
  document.body.appendChild(beastImage);