 // Імпорти
import { createGallery , clearGallery , showLoader , hideLoader} from "./js/render-functions";
import { getImagesByQuery } from "./js/pixabay-api";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// QuerySelectorи
const searchForm = document.querySelector('.form');
const gallery = document.querySelector('.gallery');

//Обробники подій
searchForm.addEventListener('submit' , handleSearch);

const lightbox = new SimpleLightbox('.gallery-item a', {
  captionsData: 'title', 
  captionDelay: 250,     
});


function handleSearch(e){
    e.preventDefault();

const borys = new FormData(searchForm);
const query = borys.get('search-text');



clearGallery();
showLoader();

getImagesByQuery(query)
.then(response => {
    hideLoader();
    const recievedData = response.data.hits;


    if(recievedData.length == 0){
        iziToast.show({
    color: 'red',
    message: 'Sorry, there are no images matching your search query. Please try again!',
    position: 'topRight'
});
return;
  }
const markup = createGallery(recievedData);
gallery.insertAdjacentHTML('afterbegin', markup);
lightbox.refresh();
}
)
.catch(err => {
    console.log(err);
})
}

