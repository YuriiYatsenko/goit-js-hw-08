// Імпорт SimpleLightbox та його CSS
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Додавання елементів галереї до HTML-сторінки
import { galleryItems } from './gallery-items';

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

// Використання методу map для створення HTML-коду для кожного елемента галереї
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

// Ініціалізація SimpleLightbox з елементами галереї
const lightbox = new SimpleLightbox('.gallery a', {
captionsData: "alt", // Використовувати атрибут "alt" як текст підпису до зображення
captionDelay: 250, // Затримка перед відображенням підпису (в мілісекундах)
});
