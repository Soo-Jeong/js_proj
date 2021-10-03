const images = ["img.jpeg", "1.png","2.jpeg","3.jpeg"];

const choosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");



bgImage.src=`img/${choosenImage}`
bgImage.alt='background images';
bgImage.classList.add('bgImg');

document.body.appendChild(bgImage);
document.querySelector("body").style.backgroundImage = choosenImage;


document.querySelector("body").style.backgroundImage=choosenImage;



//document.querySelector("body").style.backgroundImage = images[1];
