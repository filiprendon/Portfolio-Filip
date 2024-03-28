const backtt = document.getElementById('backtt');
createBtn();

function createBtn() {
    // backtt.innerHTML = '&#xF148';
    backtt.style.position = 'fixed';
    backtt.style.bottom = '30px';
    backtt.style.right = '30px';
    backtt.style.borderRadius = '25px';
    backtt.style.width = '50px';
    backtt.style.height = '50px';
    backtt.style.backgroundColor = '#ffd16f';
    backtt.style.color = 'black';
    backtt.style.border = 'none';
    backtt.style.cursor = 'pointer';
    backtt.id = "back-to-top";
    backtt.addEventListener('click', scrollToTop);
    document.body.appendChild(backtt);
}

function backToTop() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        backtt.style.display = 'block';
    } else {
        backtt.style.display = 'none';
    }
    // Comprobar k el contenedor esté arriba
    const containers = document.querySelectorAll('.container-fluid');
    containers.forEach(container => {
        const rect = container.getBoundingClientRect();
        if (rect.top === 0) {
            container.classList.add('at-top');
        } else {
            container.classList.remove('at-top');
        }
    });
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

window.addEventListener('scroll', backToTop);