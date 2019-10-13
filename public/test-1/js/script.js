// map google
function initMap() {
  var dyrkowo = { lat: 52.3494724, lng: 18.0348195 };
  var map = new google.maps.Map(document.getElementById('map'), {
    center: dyrkowo,
    zoom: 15,
    mapTypeControl: false
  });
  var icon = {
    url: '/img/marker.svg', // url
    scaledSize: new google.maps.Size(120, 120)
};
  var marker = new google.maps.Marker({
    position: dyrkowo,
    icon: icon,
    map: map
  });
}

//hamburger animation
const hamburger = document.getElementById("nav-icon3");
const menuList = document.getElementById("menu-list");

hamburger.addEventListener("click", function() {
  hamburger.classList.toggle("open");
  menuList.classList.toggle("is-active");
});

//smooth scroll
zenscroll.setup(null, 100);
// mailer
const nameInput = document.querySelector('#fname');
const emailInput = document.querySelector('#email');
const msgText = document.querySelector('#message');

document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();
  const url = "https://dyrkowo.pl/mailer.php?name=".concat(nameInput.value, "&email=").concat(emailInput.value, "&msg=").concat(msgText.value);
  nameInput.value = '';
  emailInput.value = '';
  msgText.value = '';
  fetch(url).then(function (res) {
    return res
  })
});

// mail popup 
const successWrapper = document.querySelector('.success-message-wrapper');
document.addEventListener("submit", function (e) {
  e.preventDefault();
  successWrapper.classList.add('active');
});
successWrapper.addEventListener("click", function () {
  successWrapper.classList.remove("active");
});