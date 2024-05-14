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
