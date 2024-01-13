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

  createGallery();

  galleryContainer.addEventListener('click', function (event) {
    event.preventDefault();

    if (event.target.nodeName === 'IMG') {
      const originalImageUrl = event.target.getAttribute('data-source');

      event.target.closest('.gallery__link').addEventListener('click', function (e) {
        e.preventDefault();
      });

      const lightbox = basicLightbox.create(`
        <img src="${originalImageUrl}" width="800" height="600">
      `);

      lightbox.show();
    }
  });

    


console.log(galleryItems);




