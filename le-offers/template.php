<div class="le-offers-carousel">
  <p>Place ID from search departure: <?=  $departure ?></p>
  <p>Place ID from search arrival: <?= isset($arrival) ? $arrival : '' ?></p>
  <p>Campaign from search: <?= isset($campaigns) && is_array($campaigns) ? implode(', ', $campaigns) : '' ?></p>

  <?php foreach($offers as $offer): ?>
    <div class="offer">
      <h5><?= $offer->name ?></h5>
      <ul>
        <li>Id: <?= $offer->id ?></li>
        <li>Cruise Line: <?= $offer->cruiseLine->name ?></li>
        <li>Destination Description: <?= $offer->destinationDescription ?></li>
        <li>Ship Name: <?= $offer->ship->name ?></li>
      </ul>
    </div>
  <?php endforeach; ?>
</div>
