<div class="le-offers-carousel">
  <!-- <p>Place ID from search: <?= $placeId ?></p>
  <p>Region from search: <?= $region ?></p>
  <p>Brand from search: <?= $brand ?></p> !-->

   <?php foreach($offers as $offer): ?>
     <div class="offer">
       <h5><?= $offer->name ?></h5>
       <hr>
       <p><?= $offer->copy->description ?></p>

       <div id="image-carousel-<?= $offer->id ?>" class="carousel slide" data-ride="carousel">
         <div class="carousel-inner">
           <?php foreach($offer->imageList as $index=>$image): ?>
             <div class="carousel-item <?= $index === 0 ? 'active' : '' ?>">
               <img src="<?= $image ?>" alt="Offer Image <?= $index ?>">
             </div>
           <?php endforeach; ?>
         </div>

         <a class="carousel-control-prev" href="#image-carousel-<?= $offer->id ?>" role="button" data-slide="prev">
           <span class="carousel-control-prev-icon" aria-hidden="true"></span>
           <span class="sr-only">Previous</span>
         </a>
         <a class="carousel-control-next" href="#image-carousel-<?= $offer->id ?>" role="button" data-slide="next">
           <span class="carousel-control-next-icon" aria-hidden="true"></span>
           <span class="sr-only">Next</span>
         </a>
       </div>
       <br />
     </div>
   <?php endforeach; ?>
</div>

