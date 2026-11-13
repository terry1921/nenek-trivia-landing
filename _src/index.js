import * as basicLightbox from 'basiclightbox';
import './index.scss';

document.querySelectorAll('.app__screenshots-list .lightbox').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    const sourceImage = link.querySelector('img');
    const preview = document.createElement('img');
    preview.src = link.href;
    preview.alt = sourceImage ? sourceImage.alt : '';

    basicLightbox.create(preview, { closable: true }).show();
  });
});
