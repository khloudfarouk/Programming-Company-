window.onscroll = function () {
    onScroll();
};

function onScroll() {
    var navBar = document.getElementById("Nav");
    if (window.scrollY > 100) {
        navBar.style.backgroundColor = "white";
    } else {
        navBar.style.backgroundColor = ""; 
    }
}
document.getElementById('menuIcon').addEventListener('click', function (event) {
    var navLinks = document.querySelector('.navLinks');
    var logo = document.getElementById('logo');

    navLinks.classList.toggle('show');
    logo.classList.toggle('hide');
    menuIcon.classList.toggle('hide');

    event.stopPropagation();
});

document.addEventListener('click', function () {
    var navLinks = document.querySelector('.navLinks');
    var logo = document.getElementById('logo');

    if (navLinks.classList.contains('show')) {
        navLinks.classList.remove('show');
        logo.classList.remove('hide');
        menuIcon.classList.remove('hide');
    }
});


function toggleSearchBar(event) {
    var searchBar = document.getElementById('searchBar');
    searchBar.style.display = (searchBar.style.display === 'none' || searchBar.style.display === '') ? 'block' : 'none';

    event.stopPropagation();
}

function closeSearchBar() {
    var searchBar = document.getElementById('searchBar');
    searchBar.style.display = 'none';
}

var searchIcon = document.getElementById('searchIcon');
var searchBar = document.getElementById('searchBar');

searchIcon.addEventListener('click', toggleSearchBar);

searchBar.addEventListener('click', function (event) {
    event.stopPropagation();
});

document.addEventListener('click', closeSearchBar);


////////////////////////////////
function validateForm() {
    var emailPattern = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/;
    var phonePattern = /^(011|012|010|015)\d{8}/;

    var emailInput = document.getElementById('email');
    var phoneInput = document.getElementById('num');

    var emailError = document.getElementById('emailError');
    var phoneError = document.getElementById('phoneError');

    emailError.innerHTML = '';
    phoneError.innerHTML = '';

    if (!emailPattern.test(emailInput.value)) {
        emailError.innerHTML = 'Please enter a valid email address.';
        return false;
    }

    if (!phonePattern.test(phoneInput.value)) {
        phoneError.innerHTML = 'Please enter a valid phone number (e.g., 01112345678).';
        return false;
    }

    return true;
}
///////////////////////////////

    