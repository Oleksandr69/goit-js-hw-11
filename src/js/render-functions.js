import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

export function fotoMaker(imageArr) {
  const gallery = document.querySelector('.gallery');
  gallery.textContent = '';
  console.log(imageArr);
  const listImages = imageArr
    .map(
      foto =>
        `<li class="gallery-item">
	            <a class="gallery-link" href="${foto.largeImageURL}">
		            <img 
			          class="gallery-image" 
			          src="${foto.webformatURL}" 
			          alt="${foto.tags}" 
			        />
	            
              <div class="gallery-dl">
                <div>
                  <p class="gallery-info">Likes</p>
                  <p class="gallery-value">${foto.likes}</p>
                </div>
                <div>
                  <p class="gallery-info">Views</p>
                  <p class="gallery-value">${foto.views}</p>
                </div>
                <div>
                  <p class="gallery-info">Comments</p>
                  <p class="gallery-value">${foto.comments}</p>
                </div>
                <div>
                  <p class="gallery-info">Downloads</p>
                  <p class="gallery-value">${foto.downloads}</p>
                </div>
              </div>
              </a>
          
        </li>`
    )
    .join(' ');
  // console.log(listImages);
  gallery.insertAdjacentHTML('beforeend', listImages);
  const galleryBox = new SimpleLightbox('.gallery-link', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom',
    /* options */
  });
}
