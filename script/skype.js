import {features} from '../data/features.js';
let contents = document.querySelector('.skype-features');
let container = '';
features.forEach((item)=>{
  container += `
  <div class="col-xl-3 col-lg-4 col-md-6 col-sm-7 col-9 my-3 css-card">
    <div class="card h-100">
      <img src="images/${item.image}" class="card-img-top" alt="...">
      <div class="card-body p-5">
        <h5 class="card-title">${item.title}</h5>
        <p class="card-text py-3">${item.description}</p>
        <a href="#" class="link card-link justify-content-end">Learn more</a>
      </div>
  </div>
  </div>
  `;
});
contents.innerHTML = container ;
