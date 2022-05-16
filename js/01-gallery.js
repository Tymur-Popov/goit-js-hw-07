import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const galleryEl = galleryItems
  .map((item) => {
    return `<div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
            <img class ="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}">
            </img>
        </a>
    </div>`;
  })
  .join("");
gallery.insertAdjacentHTML("beforeend", galleryEl);

gallery.addEventListener("click", onImageClick);

function onImageClick(evt) {
  evt.preventDefault();

  if (evt.target.className !== "gallery__image") {
    return;
  }

  const sourceLink = evt.target.dataset.source;
  const instance = basicLightbox.create(
    `<img src="${sourceLink}" width="800" height="600">`,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", closeModal);
      },
      onClose: (instance) => {
        window.removeEventListener("keydown", closeModal);
      },
    }
  );
  instance.show();
}

function closeModal(event) {
  if (event.key === "Escape") {
    instance.close();
  }
}
