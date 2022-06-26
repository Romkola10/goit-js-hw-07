import { galleryItems } from "./gallery-items.js";

// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const gallery = newGallery(galleryItems);

galleryContainer.insertAdjacentHTML("afterbegin", gallery);
galleryContainer.addEventListener("click", clickOnGallery);

function newGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}" onclick = "event.preventDefault()">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

function clickOnGallery(event) {
    event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  } else {
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" alt="${event.target.dataset.alt}">`,
        { onShow: () => { window.addEventListener('keydown', onEscPress) } });
        function onEscPress(event) {
        if (event.code === 'Escape') {
            instance.close();
            window.removeEventListener('keydown', onEscPress);
        }
}
    instance.show();
  }
  console.log(event.target);
}








