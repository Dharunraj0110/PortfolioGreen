// // // this is for to show which page is avtive

// // const navLinks = document.querySelectorAll('header nav a');
// // const logoLink = document.querySelector('.logo');
// // const sections = document.querySelectorAll('section');
// // const menuIcon = document.querySelector('#menu-icon');
// // const navbar = document.querySelector('header nav');

// // menuIcon.addEventListener('click', () => { 
// //      menuIcon.classList.toggle('bx-x');
// //      navbar.classList.toggle('active');
// // });

// // const activePage = () => {

// //     const header = document.querySelector('header');
// //     const barsBox = document.querySelector('.bars-box');

// //     header.classList.remove('active');
// //     setTimeout( () => {
// //         header.classList.add('active');
// //     },1100 );

// //     navLinks.forEach(link => { 
// //         link.classList.remove('active');
// //     });

// //     barsBox.classList.remove('active');
// //     setTimeout( () => {
// //         barsBox.classList.add('active');
// //     },1100 );

// //     sections.forEach(section => { 
// //         section.classList.remove('active');
// //     });

// //     menuIcon.classList.remove('bx-x');
// //      navbar.classList.remove('active');

// // }

// // navLinks.forEach((link, idx) => {
// //     link.addEventListener('click', () => { 
// //         if (!link.classList.contains('active')) {
// //             activePage();

// //             link.classList.add('active');

// //             setTimeout ( () => {
// //               sections[idx].classList.add('active');
// //             },1100);
// //         }
// //     });
// // });


// // logoLink.addEventListener('click', () => { 
// //     if (!navLinks[0].classList.contains('active')) {
// //         activePage();

// //         navLinks[0].classList.add('active');

// //         setTimeout ( () => {
// //             sections[0].classList.add('active');
// //           },1100);
// //     }
// // });


// // const resumeBtns = document.querySelectorAll('.resume-btn'); 

// // resumeBtns.forEach((btn, idx) => { 
// //     btn.addEventListener('click', () => {

// //         const resumeDetails = document.querySelectorAll('.resume-details');

// //         resumeBtns.forEach(btn => {
// //             btn.classList.remove('active');
// //         });
// //         btn.classList.add('active');

// //         resumeDetails.forEach(details => {
// //             details.classList.remove('active');
// //         });

// //        resumeDetails[idx].classList.add('active');  

// //     });
// // });


// // const arrowRight = document.querySelector('.portfolio-box .navigaton .arrow-right');
// // const arrowLeft = document.querySelector('.portfolio-box .navigaton .arrow-left');

// // let index = 0;

// // const activePortfolio = () => {
// //     const imgslide = document.querySelector('.portfolio-corousel .img-slide');

// //     const portfolioDetails = document.querySelectorAll('.portfolio-detail');

// //     imgslide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

// //     portfolioDetails.forEach(detail => { 
// //         detail.classList.remove('active');
// //     });
// //     portfolioDetails[index].classList.add('active');
// // }
// //     arrowRight.addEventListener('click', () => { 
// //         if(index < 4){
// //             index++;
// //             arrowLeft.classList.remove('disabled');
// //         }
// //         else{
// //             index = 5;
// //             arrowRight.classList.add('disabled');
// //         }
    
// //     activePortfolio();

// //     });

// //     arrowLeft.addEventListener('click', () => { 
// //         if(index > 1) {
// //             index--;
// //             arrowRight.classList.remove('disabled');
// //         }
// //         else{
// //             index = 0;
// //             arrowLeft.classList.add('disabled');
// //         }
    
// //     activePortfolio();

// //     });






const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo');
const sections = document.querySelectorAll('section');
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('header nav');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

const activePage = () => {
    const header = document.querySelector('header');
    const barsBox = document.querySelector('.bars-box');

    header.classList.remove('active');
    setTimeout(() => {
        header.classList.add('active');
    }, 1100);

    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    barsBox.classList.remove('active');
    setTimeout(() => {
        barsBox.classList.add('active');
    }, 1100);

    sections.forEach(section => {
        section.classList.remove('active');
    });

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

navLinks.forEach((link, idx) => {
    link.addEventListener('click', () => {
        if (!link.classList.contains('active')) {
            activePage();

            link.classList.add('active');

            setTimeout(() => {
                sections[idx].classList.add('active');
            }, 1100);
        }
    });
});

logoLink.addEventListener('click', () => {
    if (!navLinks[0].classList.contains('active')) {
        activePage();

        navLinks[0].classList.add('active');

        setTimeout(() => {
            sections[0].classList.add('active');
        }, 1100);
    }
});

// Resume Buttons and Details Toggle
const resumeBtns = document.querySelectorAll('.resume-btn');
const resumeDetails = document.querySelectorAll('.resume-details');

if (resumeBtns.length && resumeDetails.length) {
    resumeBtns.forEach((btn, idx) => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            resumeBtns.forEach(btn => btn.classList.remove('active'));
            btn.classList.add('active');

            // Remove active class from all details and show the selected one
            resumeDetails.forEach(details => {
                details.classList.remove('active');
                details.style.display = 'none'; // Explicitly hide all details
            });

            if (resumeDetails[idx]) {
                resumeDetails[idx].classList.add('active');
                resumeDetails[idx].style.display = 'block'; // Show the selected detail
            }
        });
    });
} else {
    console.error("Resume buttons or details not found!");
}

// Portfolio Carousel
const arrowRight = document.querySelector('.portfolio-box .navigaton .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigaton .arrow-left');

let index = 0;

const activePortfolio = () => {
    const imgSlide = document.querySelector('.portfolio-corousel .img-slide');
    const portfolioDetails = document.querySelectorAll('.portfolio-detail');

    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

    portfolioDetails.forEach(detail => {
        detail.classList.remove('active');
    });
    if (portfolioDetails[index]) {
        portfolioDetails[index].classList.add('active');
    }
};

arrowRight.addEventListener('click', () => {
    if (index < 4) {
        index++;
        arrowLeft.classList.remove('disabled');
    } else {
        index = 5;
        arrowRight.classList.add('disabled');
    }

    activePortfolio();
});

arrowLeft.addEventListener('click', () => {
    if (index > 0) {
        index--;
        arrowRight.classList.remove('disabled');
    } else {
        index = 0;
        arrowLeft.classList.add('disabled');
    }

    activePortfolio();
});

