import{S as c,a as n}from"./assets/vendor-B0AnMhks.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const l of e)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const l={};return e.integrity&&(l.integrity=e.integrity),e.referrerPolicy&&(l.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?l.credentials="include":e.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(e){if(e.ep)return;e.ep=!0;const l=a(e);fetch(e.href,l)}})();document.querySelector(".gallery");function u(r){const t=document.querySelector(".gallery");t.textContent="",console.log(r);const a=r.map(o=>`<li class="gallery-item">
	            <a class="gallery-link" href="${o.largeImageURL}">
		            <img 
			          class="gallery-image" 
			          src="${o.webformatURL}" 
			          alt="${o.tags}" 
			        />
	            
              <div class="gallery-dl">
                <div>
                  <p class="gallery-info">Likes</p>
                  <p class="gallery-value">${o.likes}</p>
                </div>
                <div>
                  <p class="gallery-info">Views</p>
                  <p class="gallery-value">${o.views}</p>
                </div>
                <div>
                  <p class="gallery-info">Comments</p>
                  <p class="gallery-value">${o.comments}</p>
                </div>
                <div>
                  <p class="gallery-info">Downloads</p>
                  <p class="gallery-value">${o.downloads}</p>
                </div>
              </div>
              </a>
          
        </li>`).join(" ");t.insertAdjacentHTML("beforeend",a),new c(".gallery-link",{captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom"})}const d=n.create({});function p(r){return d.get(`https://pixabay.com/api/?key=48882372-89a0cb49e548afa674928e493&q=${r}&image_type=photo`).then(t=>t.data).catch(t=>console.log(t))}const i=document.querySelector(".feedback-form");i.addEventListener("submit",g);function g(r){r.preventDefault(),console.log(r.target.searchImages.value);const t=r.target.searchImages.value;p(t).then(a=>{console.log(a.hits[0]),u(a.hits)}).catch(a=>console.log("bingo")),i.reset()}
//# sourceMappingURL=index.js.map
