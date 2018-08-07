function getPrice() {
  var basePrice = document.querySelector('.price-content');
  var priceString = basePrice.innerHTML;
  var intPrice = parseInt(priceString.split(' €')[0]);

  return intPrice;
}

function setTotal(amount) {
  var basePrice = getPrice();

  var totalPrice = basePrice * amount;

  if (isNaN(totalPrice)) totalPrice = 0.0;

  var total = document.querySelector('.total-content');
  total.innerHTML = totalPrice.toFixed(2) + ' €';
}

window.onload = function() {
  var deleteButton = document.querySelector('.btn-delete');
  var qtyInput = document.querySelector('.qty-input');

  qtyInput.addEventListener('keyup', function(evt) {
    var amount = parseInt(evt.target.value);

    setTotal(amount);
  });

  deleteButton.addEventListener('click', function(evt) {
    qtyInput.value = '0';

    setTotal(0);
  });
};
