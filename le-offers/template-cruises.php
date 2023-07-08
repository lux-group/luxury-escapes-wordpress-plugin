<div class="le-offers-wrapper">
  <?php if(count($offers) > 0): ?>
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
  <?php else: ?>
    <p>No available offers</p>
  <?php endif; ?>
</div>
