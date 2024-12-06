
// Carregar navbar
fetch('/components/navbar.html')
.then(response => response.text())
.then(data => {
    document.getElementById('navbar-container').innerHTML = data;
});

// Carregar footer
fetch('/components/footer.html')
.then(response => response.text())
.then(data => {
    document.getElementById('footer-container').innerHTML = data;
});


// Funció per establir una cookie amb nom, valor i durada en dies
function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000); // Calcula l'expiració
    const expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/"; // Guarda la cookie
}

// Funció per comprovar si una cookie existeix
function getCookie(name) {
    const nameEq = name + "=";
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let c = cookies[i].trim();
        if (c.indexOf(nameEq) === 0) {
            return c.substring(nameEq.length, c.length); // Retorna el valor de la cookie
        }
    }
    return null; // Si no existeix, retorna null
}

// Comprova si ja existeix la cookie "cookieConsent"
if (getCookie("cookieConsent") === "accepted" || getCookie("cookieConsent") === "rejected") {
    // Si la cookie és "accepted", amaga el banner
    document.getElementById("cookie-banner").style.display = "none";
} else {
    // Si no existeix, mostra el banner
    document.getElementById("cookie-banner").style.display = "block";
}

// Gestió del botó d'acceptar
document.getElementById("acceptar").onclick = function() {
    setCookie("cookieConsent", "accepted", 30); // Guarda la cookie durant 30 dies
    document.getElementById("cookie-banner").style.display = "none"; // Amaga el banner
};

// Gestió del botó de rebutjar
document.getElementById("rebutjar").onclick = function() {
    setCookie("cookieConsent", "rejected", 30); // Opcionalment guarda "rejected"
    document.getElementById("cookie-banner").style.display = "none"; // Amaga el banner
};

// Gestió del botó de tancar
document.getElementById("tancar").onclick = function() {
    document.getElementById("cookie-banner").style.display = "none"; // Només amaga el banner
};

$(document).ready(function () {

  // toggle mobile menu
  $('[data-toggle="toggle-nav"]').on('click', function () {
      $(this).closest('nav').find($(this).attr('data-target')).toggleClass('hidden');
      return false;
  });

  // feather icons
  feather.replace();

  // smooth scroll
  var scroll = new SmoothScroll('a[href*="#"]');

  // tiny slider
  $('#slider-1').slick({
      infinite: true,
      prevArrow: $('.prev'),
      nextArrow: $('.next'),
  });

  $('#slider-2').slick({
      dots: true,
      arrows: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      centerMode: true,
      customPaging: function (slider, i) {
          return '<div class="bg-white br-round w-1 h-1 opacity-50 mt-5" id=' + i + '> </div>'
      },
      responsive: [{
          breakpoint: 768,
          settings: {
              slidesToShow: 1
          }
      }, ]
  });
  
});








