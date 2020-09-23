import React from 'react';


export default function Carousel(props) {
  return (
<div id="carouselExampleControls" class="carousel slide" data-ride="carousel" data-interval="5000">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://contents.sixshop.com/thumbnails/uploadedFiles/70108/default/image_1594862664466_2500.jpg" alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://contents.sixshop.com/thumbnails/uploadedFiles/70108/default/image_1594862639257_2500.jpg" alt="Second slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
  );
}
