document.addEventListener("DOMContentLoaded", function() {
    // Range slider
    const fromSlider = document.getElementById('fromSlider');
    const toSlider = document.getElementById('toSlider');
    const fromValue = document.getElementById('fromValue');
    const toValue = document.getElementById('toValue');

    function updateValues() {
        fromValue.textContent = `$${fromSlider.value}`;
        toValue.textContent = `$${toSlider.value}`;
    }

    updateValues();
    fromSlider.addEventListener('input', updateValues);
    toSlider.addEventListener('input', updateValues);

    // Review slider using Slick
$(document).ready(function () {
    $('.reviews').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        speed: 500,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 780,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '4px',
                    infinite: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '2px',
                    infinite: true
                }
            }
        ]
    });
    $('#prev, #prev1').on('click', function() {
        $('.reviews').slick('slickPrev');
      });
    
      $('#next, #next1').on('click', function() {
        $('.reviews').slick('slickNext');
      });
});


     const chevron = document.querySelector('.toggle-chevron');
     const collapseContent = document.getElementById('filterContent');

     collapseContent.addEventListener('show.bs.collapse', function () {
         chevron.classList.add('rotate');
     });

     collapseContent.addEventListener('hide.bs.collapse', function () {
         chevron.classList.remove('rotate');
     });

    const products = document.querySelectorAll('.product-box .col-md-4');
    
    const initialProductsToShow = 10;
    products.forEach((product, index) => {
        if (index >= initialProductsToShow) {
            product.style.display = 'none';
        }
    });
    
    const loadMoreBtn = document.getElementById('loadMore');
    loadMoreBtn.addEventListener('click', function() {
        products.forEach((product) => {
            product.style.display = 'block';
        });
        loadMoreBtn.style.display = 'none';
    });
    
    
    function checkScreenSize() {
        if (window.innerWidth > 480) {

            products.forEach((product) => {
                product.style.display = 'block';
            });
            loadMoreBtn.style.display = 'none';
        } else {

            products.forEach((product, index) => {
                if (index >= initialProductsToShow) {
                    product.style.display = 'none';
                }
            });
            loadMoreBtn.style.display = 'block';
        }
    }


    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
});
