const introductions = [
    "You can rely on store manager to help with the smooth flow of your store operations",
    "It guarantees a good track record of your sales and staff",
    "This is a web application that helps you manage sales and product inventory records"
];

const loadIntroTexts = () => {
  introductions.forEach((intro, index, introArr) => {
    let appIntro = document.querySelector('.app-intro');
    appIntro.style.direction = "ltr";
    appIntro.style.fontSize = "large";
    appIntro.style.fontStyle = "oblique";
    appIntro.style.fontFamily = "sans-serif";
    appIntro.style.marginRight = "30px";
    appIntro.style.textAlign = "center";
    appIntro.innerHTML = introArr[index++ % introArr.length];
    setInterval(() => {
      appIntro.innerHTML = introArr[index++ % introArr.length];
    }, 8000);
  });
}
window.onload = loadIntroTexts();