const orderIdDisplay = document.getElementById('orderId');
const search = new URLSearchParams(window.location.search);
const orderId = search.get("orderId");
orderIdDisplay.innerHTML = orderId;