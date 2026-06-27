import{a as c,S as u,i as p}from"./assets/vendor-D1mpe0f-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const i=document.querySelector(".gallery");function m(a){return a.map(t=>`<li class="gallery-item">
  <a class="gallery-link" href="${t.largeImageURL}">
    <img 
      class="gallery-image" 
      src="${t.webformatURL}" 
      alt="${t.tags}" 
      title="${t.tags}" 
      loading="lazy"
    />
  </a>
  
  <ul class="stats-list">
    <li class="stats-item">
      <span class="stats-label">Likes</span>
      <span class="stats-value">${t.likes}</span>
    </li>
    <li class="stats-item">
      <span class="stats-label">Views</span>
      <span class="stats-value">${t.views}</span>
    </li>
    <li class="stats-item">
      <span class="stats-label">Comments</span>
      <span class="stats-value">${t.comments}</span>
    </li>
    <li class="stats-item">
      <span class="stats-label">Downloads</span>
      <span class="stats-value">${t.downloads}</span>
    </li>
  </ul>
</li>`).join("")}function d(){i.innerHTML=""}function f(){i.innerHTML='<div class="loader"></div>'}function g(){i.innerHTML=""}function y(a){return f(),c.get(`https://pixabay.com/api/?key=56434957-1ee9963b6aa14410bfffd2ce8&q=${a}&image_type=photo&orientation=horizontal&safesearch=true`)}const l=document.querySelector(".form"),h=document.querySelector(".gallery");l.addEventListener("submit",L);const b=new u(".gallery-item a",{captionsData:"title",captionDelay:250});function L(a){a.preventDefault(),d();const o=new FormData(l).get("search-text");y(o).then(r=>{g();const e=r.data.hits;e.length==0&&p.show({color:"red",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});const s=m(e);h.insertAdjacentHTML("afterbegin",s),b.refresh()}).catch(r=>{console.log(r)})}
//# sourceMappingURL=index.js.map
