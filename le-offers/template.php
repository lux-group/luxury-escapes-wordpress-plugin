<div class="le-offers-carousel">
  <?php if(count($offers) > 0): ?>
    <?php foreach($offers as $offer): ?>
      <div class="offer">
        <h5><?= $offer->name ?></h5>
        <ul>
          <li>Type: <?= $offer->type ?></li>
          <li>Slug: <?= $offer->slug ?></li>
          <li>Property: <?= is_object($offer->property->address) ? $offer->property->address->city : $offer->property->address ?></li>
          <li>Rating: <?= is_object($offer->property) && property_exists($offer->property, 'rating') ? $offer->property->rating : 'N/A' ?></li>
        </ul>
      </div>
    <?php endforeach; ?>
  <?php else: ?>
    <p>No available offers</p>
  <?php endif; ?>
</div>

