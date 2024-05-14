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
/////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function () {
    const iconLeft = document.getElementById('icon-left');
    const iconRight = document.getElementById('icon-right');
    const cardContainer = document.getElementById('team-row'); 
    if (iconLeft && iconRight && cardContainer) {
    iconLeft.classList.add('disabled');

    iconRight.addEventListener('click', function () {
        const newCard = document.createElement('div');
        newCard.className = 'col-12 col-md-6 col-lg-4 mb-4';
        newCard.innerHTML = '<div class="card info" style="width:22rem;"><img src="Menna.jpeg" class="card-img-top " alt="..."> <div class="overlay"><div class="text">Menna Allah Ashraf<br> Full-Stack Developer</div></div></div>';

        const firstCard = cardContainer.children[0];
        cardContainer.removeChild(firstCard);
        cardContainer.appendChild(newCard);

        iconRight.classList.add('disabled');
        iconLeft.classList.remove('disabled');
    });

    iconLeft.addEventListener('click', function () {
        const lastCard = cardContainer.children[cardContainer.children.length - 1];
        cardContainer.removeChild(lastCard);
    
        const newCard = document.createElement('div');
        newCard.className = 'col-12 col-md-6 col-lg-4 mb-4';
        newCard.innerHTML = '<div class="card info" style="width: 22rem;"><img src="salma.jpeg" class="card-img-top" alt="..."><div class="overlay"><div class="text">Salma Ahmed <br> Full-Stack Developer</div></div></div>';

        cardContainer.insertBefore(newCard, cardContainer.firstChild);
    
        iconRight.classList.remove('disabled');
        iconLeft.classList.add('disabled');
    });
}
else {
    console.error('One or more elements not found.');
}
});

//KHLOUD 

document.addEventListener("DOMContentLoaded", function () {
    
    function centerContent() {
        var content = document.querySelector('.carousel-content');
        content.style.position = 'absolute';
        content.style.top = '50%';
        content.style.right = '0';
        content.style.transform = 'translateY(-50%)';
        content.style.textAlign = 'right';
        content.style.padding = '20px';
        content.style.color = 'white';
    }

    
    centerContent();

    
    window.addEventListener('resize', function () {
        
        centerContent();
    });
});


// experts section

document.querySelectorAll('.box').forEach(function(box) {
      box.addEventListener('mouseenter', function() {
        box.style.backgroundColor = '#FFA500';
        box.style.color = 'black';
        box.querySelector('i').style.color = 'black';
        box.querySelector('button').style.backgroundColor = '#FFA500';
        box.querySelector('button').style.color = 'black';
      });

      box.addEventListener('mouseleave', function() {
        box.style.backgroundColor = '#f0f0f0';
        box.style.color = '#242424';
        box.querySelector('i').style.color = '#242424';
        box.querySelector('button').style.backgroundColor = '#f0f0f0';
        box.querySelector('button').style.color = '#55565b';
      });
    });



                     // Reham
function showArrow() {
 var arrow = document.querySelector('.Arrow');
    if (arrow) {
                 arrow.style.display = 'inline'; 
            }
    }
 function hideArrow() {
     var arrow = document.querySelector('.Arrow');
        if (arrow) {
            arrow.style.display = 'none';
                }
                }
                window.onload = function () {
                    window.onscroll = function () {
                        
                        if (document.documentElement.scrollTop >= 200) {
                            
                            counter1();
                            counter2();
                            counter3();
                            counter4();
                            window.onscroll = null;
                        }
                    };
                };
            
            var data1 = document.getElementById('counter1');
            
            function counter1() {
                var i = 1;
                var intervalId = setInterval(function () {
                    data1.textContent = i;
                    i++;
                    if (i > 505) {
                        clearInterval(intervalId);
                    }
                }, 4); 
            }
            
            var data2 = document.getElementById('counter2');
            
            function counter2() {
                var i = 1;
                var intervalId = setInterval(function () {
                    data2.textContent = i;
                    i++;
                    if (i > 220) {
                        clearInterval(intervalId);
                    }
                }, 4); 
            }
            
            var data3 = document.getElementById('counter3');
            
            function counter3() {
                var i = 1;
                var intervalId = setInterval(function () {
                    data3.textContent = i;
                    i++;
                    if (i > 720) {
                        clearInterval(intervalId);
                    }
                }, 4);
            }
            
            var data4 = document.getElementById('counter4');
            
            function counter4() {
                var i = 1;
                var intervalId = setInterval(function () {
                    data4.textContent = i;
                    i++;
                    if (i > 707) {
                        clearInterval(intervalId);
                    }
                }, 4); 
            }
               





 // footer
 const imageArray = [
    'adobe1.png',
    'jquery.png',
    'logo.png',
    'adobe1.png',
    'jquery.png',
    'adobe2.png',
    'front.png',
    'jquery1.png',
    
  ];

  const randomImages = $('.random-image');
  let currentIndex = 0;

  function displayRandomImage() {
    const imageUrl = imageArray[currentIndex];

    randomImages.each(function(index) {
      const nextIndex = (currentIndex + index) % imageArray.length;
      $(this).attr('src', imageArray[nextIndex]);
    });

    randomImages.last().attr('src', imageUrl);

    currentIndex = (currentIndex + 1) % imageArray.length;

    setTimeout(displayRandomImage, 2000); 
  }

  
  window.onload = displayRandomImage;
