import { createGallery , clearGallery , showLoader , hideLoader} from "./js/render-functions";
import { getImagesByQuery } from "./js/pixabay-api";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const searchForm = document.querySelector('.form');
searchForm.addEventListener('submit' , handleSearch);

function handleSearch(e){
e.preventDefualt();

getImagesByQuery('pussy').then(res => {
    console.log(res);
}
)

}
