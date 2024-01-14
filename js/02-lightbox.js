import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

  function createGallery() {
    galleryItems.forEach((item) => {
      const listItem = document.createElement('li');
      listItem.classList.add('gallery__item');

      const link = document.createElement('a');
      link.classList.add('gallery__link');
      link.href = item.original;

      const image = document.createElement('img');
      image.classList.add('gallery__image');
      image.src = item.preview;
      image.alt = item.description;
      image.setAttribute('data-source', item.original);

      link.appendChild(image);
      listItem.appendChild(link);
      galleryContainer.appendChild(listItem);
    });
  }

 galleryContainer.addEventListener('click', function (event) {
  event.preventDefault();

  if (event.target.nodeName === 'IMG') {
    const originalImageUrl = event.target.getAttribute('data-source');

    event.target.closest('.gallery__link').addEventListener('click', function (e) {
      e.preventDefault();
    });

 
    const lightbox = new SimpleLightbox('.gallery__item img', {
  captionsData: 'alt',
  captionsPosition: 'bottom',
  captionDelay: 250,
 });
      
    lightbox.open({
      items: [
        {
          src: originalImageUrl,
          alt: event.target.alt,
        },
      ],
    });
  }
});



function destroyGallery() {
    if (lightbox) {
       lightbox.close();
    };
};

document.addEventListener('keydown', function (event) {
    if (lightbox && lightbox.visible()) {
    if (event.key === 'ArrowLeft') {
        lightbox.prev();
    } else if (event.key === 'ArrowRight') {
        lightbox.next();
    } else if (event.key === 'Escape') {
         lightbox.close();
    }
    }
});
         
createGallery();

console.log(galleryItems);




