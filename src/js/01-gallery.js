import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items';

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

gallery.innerHTML = galleryItems.map(({preview, original, description}) => `

  <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
      />
    </a>
  </li>
`).join('');

const lightbox = new SimpleLightbox('.gallery a', {
captionsData: "alt",
captionDelay: 250,
});
