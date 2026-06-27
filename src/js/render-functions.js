const gallery = document.querySelector('.gallery');

export function createGallery(images) {
  return images.map((el) => {
    return `<li class="gallery-item">
  <a class="gallery-link" href="${el.largeImageURL}">
    <img 
      class="gallery-image" 
      src="${el.webformatURL}" 
      alt="${el.tags}" 
      title="${el.tags}" 
      loading="lazy"
    />
  </a>
  
  <ul class="stats-list">
    <li class="stats-item">
      <span class="stats-label">Likes</span>
      <span class="stats-value">${el.likes}</span>
    </li>
    <li class="stats-item">
      <span class="stats-label">Views</span>
      <span class="stats-value">${el.views}</span>
    </li>
    <li class="stats-item">
      <span class="stats-label">Comments</span>
      <span class="stats-value">${el.comments}</span>
    </li>
    <li class="stats-item">
      <span class="stats-label">Downloads</span>
      <span class="stats-value">${el.downloads}</span>
    </li>
  </ul>
</li>`;
  }).join("");
}

export function clearGallery(){
gallery.innerHTML = '';
}

export function showLoader(){
gallery.innerHTML = '<div class="loader"></div>';
}

export function hideLoader(){
gallery.innerHTML = '';
}