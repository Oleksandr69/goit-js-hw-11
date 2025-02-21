import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fotoMaker } from './js/render-functions';
import { getAllFoto } from './js/pixabay-api';
import { messageAllert } from './js/render-functions';
import { galleryClear } from './js/render-functions';

const formSearchFotos = document.querySelector('.feedback-form');
const loadMessage = document.querySelector('.message');

formSearchFotos.addEventListener('submit', fotosSearch);

function fotosSearch(evt) {
  evt.preventDefault();
  galleryClear();
  const searchValue = evt.target.searchImages.value.trim();

  if (!searchValue) {
    messageAllert('Enter a search term!');
  } else {
    loadMessage.innerHTML = '<span class="loader"></span>';
    getAllFoto(searchValue)
      .then(res => {
        if (res.hits.length !== 0) {
          fotoMaker(res.hits);
        } else {
          messageAllert(
            'Sorry, there are no images matching your search query. Please try again!'
          );
        }
        loadMessage.innerHTML = '';
      })
      .catch(error => {
        formSearchFotos.reset();
        galleryClear();
        loadMessage.innerHTML = '';
        messageAllert(`Sorry, ${error}!`);
      });
  }
  formSearchFotos.reset();
}
