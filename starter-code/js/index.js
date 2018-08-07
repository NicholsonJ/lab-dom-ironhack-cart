function deleteItem(e) {}

var calcTotal = 0;
function getPriceByProduct(itemCost) {
  //select unit price
  var itemCost = document.querySelector('.unit-price');
  console.log(itemCost);

  //select input amount
  var inputAmt = Array.from(document.querySelectorAll('input'));
  console.log(inputAmt);

  var cartItems = Array.from(document.querySelectorAll('.cart-items'));
  //select created new Total
  var itemTotal = Array.from(document.querySelectorAll('.itemTotal'));
  console.log(itemTotal);

  for (var i = 0; i < cartItems.length; i++) {
    itemTotal[i].innerHTML = itemCost[i].innerHTML * inputAmt[i].value;
    calcTotal += itemTotal[i].innerHTML;
    total;
    return calcTotal;
  }
}

var itemTotal = document.getElementsByClassName('itemTotal');
console.log(itemTotal);

function updatePriceByProduct(productPrice, index) {}

function getTotalPrice() {}

function createQuantityInput() {}

function createDeleteButton() {}

function createQuantityNode() {}

function createItemNode(dataType, itemData) {}

function createNewItemRow(itemName, itemUnitPrice) {}

function createNewItem() {}

window.onload = function() {
var calculatePriceButton = document.getElementById('calc-prices-button');
var createItemButton = document.getElementById('new-item-create');
var deleteButtons = document.querySelectorAll('btn-delete');
calculatePriceButton.onclick = getPriceByProduct();

var qtyInput = document.querySelector(".qty-input");

qtyInput.addEventListener('change', )


//calculatePriceButton.onclick = getTotalPrice;
//createItemButton.onclick = createNewItem;

for (var i = 0; i < deleteButtons.length; i++) {
  deleteButtons[i].onclick = deleteItem;
}
