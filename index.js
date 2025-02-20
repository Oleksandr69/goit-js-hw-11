import{S as u,i as d,a as m}from"./assets/vendor-NgjAvfGz.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(e){if(e.ep)return;e.ep=!0;const a=t(e);fetch(e.href,a)}})();const p=document.querySelector(".gallery");function n(){const r=document.querySelector(".gallery");r.innerHTML=""}function f(r){n();const s=r.map(o=>`<li class="gallery-item">
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
        </li>`).join(" ");p.insertAdjacentHTML("beforeend",s),new u(".gallery-link",{captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom"}).refresh()}function i(r){d.show({position:"topRight",title:"error",titleColor:"white",message:r,messageSize:"24px",messageLineHeight:"24px",messageColor:"white",backgroundColor:" #ef4040",theme:"dark"})}const y=m.create({});function h(r){const s=new URLSearchParams({key:"48882372-89a0cb49e548afa674928e493",q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"});return y.get(`https://pixabay.com/api/?${s}`).then(t=>t.data).catch(t=>console.log(t))}const c=document.querySelector(".feedback-form"),g=document.querySelector(".message");c.addEventListener("submit",v);function v(r){r.preventDefault(),n();const s=r.target.searchImages.value.trim();s?(g.innerHTML='<span class="loader"></span>',h(s).then(t=>{t.hits.length!==0?f(t.hits):i("Sorry, there are no images matching your search query. Please try again!"),g.innerHTML=""}).catch(t=>{c.reset(),n(),i(`Sorry, ${t}!`)})):i("Enter a search term!"),c.reset()}
//# sourceMappingURL=index.js.map
