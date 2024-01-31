var adImage = document.getElementById("adImage");
var assetsadspath = "assets/ads/";
var ads = [
  "ad1.png";
  "ad2.png";
];

adImage.src = ads[Math.floor(Math.random() * ads.length)];
