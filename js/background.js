const IMAGE_MAX = 3;

const images = [];
for (let i = 1; i <= IMAGE_MAX; i++) {
    images.push(`${i}.jpg`);
}

const chosenImage = images[Math.floor(Math.random() * IMAGE_MAX)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
