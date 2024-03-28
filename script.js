const backtt = document.getElementById('backtt');
createBtn();
// Borra la url
// window.history.replaceState('','','/');

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
    // Pongo display none para ocultarlo al recargar página
    backtt.style.display = 'none';
    backtt.addEventListener('click', scrollToTop);
    document.body.appendChild(backtt);
}

function backToTop() {

    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        backtt.style.display = 'block';
    } else {
        backtt.style.display = 'none';
    }
    // Comprobar que el contenedor esté arriba
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

// Cambiar colores h1 a medida k el usuario haga scroll
document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('scroll', function () {
        let mainContainer = document.getElementById('main').getElementsByTagName('h1')[0];
        let diffConteiner = document.getElementsByClassName('diff-container');

        // Se obtiene la posición del h1 del main
        var mainContainerPosition = mainContainer.getBoundingClientRect().top;

        // Verificar si están en la misma posición vertical
        for (var i = 0; i < diffConteiner.length; i++) {
            var diffContainerPosition = diffConteiner[i].getBoundingClientRect().top;

            // Si el h1 de otro contenedor está cerca de la posición del h1 principal, cambio su color gradualmente
            if (diffContainerPosition <= mainContainerPosition) {
                if (diffConteiner[i].classList.contains('pr')) {
                    diffConteiner[i].style.transition = "color 0s ease";
                    diffConteiner[i].style.color = "#d3d3d3";
                }
                else if (diffConteiner[i].classList.contains('im')) {
                    diffConteiner[i].style.transition = "color 0s ease";
                    diffConteiner[i].style.color = "#464646";
                }

            } else {
                diffConteiner[i].style.color = "transparent";
            }
        }
    });
});
