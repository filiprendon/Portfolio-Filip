const backTT = document.createElement('button');
createBtn();

// Crear botón back to top
function createBtn() {
    backTT.innerHTML = '&#xF148';
    backTT.style.position = 'fixed';
    backTT.style.bottom = '30px';
    backTT.style.right = '30px';
    backTT.style.borderRadius = '25px';
    backTT.style.width = '50px';
    backTT.style.height = '50px';
    backTT.style.backgroundColor = '#ffd16f';
    backTT.style.color = 'white';
    backTT.style.border = 'none';
    backTT.style.cursor = 'pointer';
    backTT.id = "back-to-top";
    backTT.addEventListener('click', scrollToTop);
    document.body.appendChild(backTT);
}

function backToTop() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        backTT.style.display = 'block';
    } else {
        backTT.style.display = 'none';
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

window.addEventListener('scroll', backToTop);
