import "./css/style.css";
import "./css/customStyles.css";
console.log(process.env.WEATHER_KEY);

const label = document.querySelector('.form-input-label');
const search = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

search.addEventListener('input', (event) => {
  label.classList.add('label-over-input')
  if (search.value.length>0){

    label.classList.add('label-over-input')
    label.classList.remove('label-inside-input')
  }else{
    label.classList.add('label-inside-input')
    label.classList.remove('label-over-input')
  }
});


searchButton.addEventListener('click',(e)=>{
  e.preventDefault();
  console.dir(search.value);
  document.getElementsByTagName("form")[0].reset();
  label.classList.add('label-inside-input')
  label.classList.remove('label-over-input')
})

