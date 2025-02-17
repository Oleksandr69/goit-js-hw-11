import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fotoMaker } from './js/render-functions';
import { getAllFoto } from './js/pixabay-api';

// Your API key: 48882372-89a0cb49e548afa674928e493
// https://pixabay.com/api/?key=48882372-89a0cb49e548afa674928e493&q=yellow+flowers&image_type=photo

const formSearchFotos = document.querySelector('.feedback-form');

formSearchFotos.addEventListener('submit', fotosSearch);

function fotosSearch(evt) {
  evt.preventDefault();
  console.log(evt.target.searchImages.value);
  const searchValue = evt.target.searchImages.value;

  getAllFoto(searchValue)
    .then(res => {
      console.log(res.hits[0]);
      fotoMaker(res.hits);
    })
    .catch(error => console.log('bingo'));

  formSearchFotos.reset();
}

// ++++++++++++++++++++++++++++++++++++++

function messageAllert(objectSnack) {
  const iconUrl = objectSnack.status ? pathSuccessIcon : pathErrorIcon;
  const titleSnack = objectSnack.status ? 'OK' : 'Error';
  const messageSnack = objectSnack.status
    ? `Fulfilled promise in ${objectSnack.delay}ms`
    : `Rejected promise in ${objectSnack.delay}ms`;
  const backgroundSnack = objectSnack.status ? ' #59a10d' : ' #ef4040';
  iziToast.show({
    position: 'topRight',
    title: titleSnack,
    titleColor: 'white',
    message: messageSnack,
    messageSize: '16px',
    messageLineHeight: '24px',
    messageColor: 'white',
    iconUrl: iconUrl,
    backgroundColor: backgroundSnack,
    theme: 'dark',
  });
}
