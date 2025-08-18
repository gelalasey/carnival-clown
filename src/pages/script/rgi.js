// define your images here
var images = [
  "/gl-pixels/stamp/kyuuu.png",
  "/gl-pixels/stamp/dDuSHn4.gif",
  "/gl-pixels/stamp/pomcook.gif",
  "/gl-pixels/stamp/goodieblink.png",
  "/gl-pixels/stamp/optimize7.png",
  "/gl-pixels/stamp/garfpenis.png",
  "/gl-pixels/stamp/rainbow5.png",
  "/gl-pixels/stamp/ps1.png",
  "/gl-pixels/stamp/zn2.gif",
  "/gl-pixels/stamp/d76.png",
  "/gl-pixels/stamp/b39.png",
  "/gl-pixels/stamp/d18.gif",
  "/gl-pixels/stamp/b32.png",
  "/gl-pixels/stamp/a56.png",
  "/gl-pixels/stamp/5.gif",
  "/gl-pixels/stamp/magicgirl.gif",
  "/gl-pixels/stamp/castle.webp",
  "/gl-pixels/stamp/rbow.gif",
  "/gl-pixels/stamp/dheartrab.png",
  "/gl-pixels/stamp/bunman.gif",
  "/gl-pixels/stamp/alpacassos.png",
  "/gl-pixels/stamp/707.gif",
  "/gl-pixels/stamp/youredoinggreat.png",
  "/gl-pixels/stamp/clownaround.webp",
  "/gl-pixels/stamp/PantoneStardust.gif",
  "/gl-pixels/stamp/pinkstar.gif",
  "/gl-pixels/stamp/changegender.gif",
  "/gl-pixels/stamp/worms.png",
  "/gl-pixels/stamp/gayclown.gif",
  "/gl-pixels/stamp/clownlicense.png",
  "/gl-pixels/stamp/beretclown.gif",
  "/gl-pixels/stamp/catneko.png",
  "/gl-pixels/stamp/24hrcinderella.gif",
  "/gl-pixels/stamp/bestviewedmona.gif",
  "/gl-pixels/stamp/rainbow_stamp.png",
  "/gl-pixels/stamp/madoka.gif",
  "/gl-pixels/stamp/kotori.gif",
  "/gl-pixels/stamp/museselfie.png",
  "/gl-pixels/stamp/diachan.png",
  "/gl-pixels/stamp/honoka.gif",
  "/gl-pixels/stamp/umidah.gif",
  "/gl-pixels/stamp/llsif.png",
  "/gl-pixels/stamp/gayclown.jpg",
  "/gl-pixels/stamp/storeclown.png",
  "/gl-pixels/stamp/rbowcake.png",
  "/gl-pixels/stamp/charms.png",
  "/gl-pixels/stamp/a4japl.png",
  "/gl-pixels/stamp/d8o7zr.png",
  "/gl-pixels/stamp/webkinz.png",
  "/gl-pixels/stamp/sq6i0uQ.gif",
  "/gl-pixels/stamp/dracular.png",
  "/gl-pixels/stamp/furbgang.png",
  "/gl-pixels/stamp/homoapprove.webp",
  "/gl-pixels/stamp/pomice.png"
  
];

// this chooses a random number from all available image indices
var randomImage = images[Math.floor(Math.random() * images.length)];
console.log(randomImage);
// make the URL into a proper image tag
var image = "<img src='" + randomImage + "'>";
// append to the div
document.getElementById("img-load").innerHTML = image;

