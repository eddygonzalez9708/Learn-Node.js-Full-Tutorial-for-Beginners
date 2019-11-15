function getH1() {
  console.log("Testing client side");
  const h1 = document.getElementsByTagName("h1")[0];
  h1.style.fontStyle = "italic";
}

getH1();