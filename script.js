document.querySelector('.menu-icon').addEventListener('click', function() {
    const menu = document.querySelector('header ul');
    menu.classList.toggle('show');

    // Toggle the icon between the hamburger and X
    const icon = document.querySelector('.menu-icon');
    if (menu.classList.contains('show')) {
        icon.innerHTML = '&#10006;'; // X symbol
    } else {
        icon.innerHTML = '&#9776;'; // Hamburger symbol
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const mainContent = document.querySelector('main');

    // Ensure that the 'active' class is applied to the main element
    // This is important to prevent flickering during the transition
    mainContent.classList.add('active');

    // Use setTimeout to delay the transition and reveal the content smoothly
    setTimeout(() => {
        mainContent.style.opacity = 1;
    }, 100);
});
