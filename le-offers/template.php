<div class="le-offers-carousel">
  <p>Place ID from search: <?= implode(', ', $placeIds) ?></p>
  <p>Holiday from search: <?= implode(', ', $holidays) ?></p>
  <p>Campaign from search: <?= implode(', ', $campaigns) ?></p>

  <?php foreach($offers as $offer): ?>
    <div class="offer">
      <h5><?= $offer->name ?></h5>
      <ul>
        <li>Type: <?= $offer->id ?></li>
      </ul>
    </div>
  <?php endforeach; ?>
</div>


