// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");
const markup = markupImg(galleryItems);



function markupImg(galleryItems) {
    return galleryItems.map(({ preview,original, description }) => {
        return `
       <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>
        `;
    }).join('');
};
gallery.insertAdjacentHTML('beforeend', markup);

 

    let lightbox = new SimpleLightbox('.gallery a', {
        captions: 'true',
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: 250
    });

