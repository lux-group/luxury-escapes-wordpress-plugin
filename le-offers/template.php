<div class="le-offers-carousel">
  <p>Place ID from search: <?= implode(', ', $placeIds) ?></p>
  <p>Holiday from search: <?= implode(', ', $holidays) ?></p>

  <?php foreach($offers as $offer): ?>
    <div class="offer">
      <h5><?= $offer->name ?></h5>
      <ul>
        <li>Type: <?= $offer->type ?></li>
        <li>Slug: <?= $offer->slug ?></li>
        <li>Property: <?= $offer->property->address ?></li>
        <li>Rating: <?= $offer->property->rating ?></li>
      </ul>
    </div>
  <?php endforeach; ?>
</div>
