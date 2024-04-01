const backtt = document.getElementById('backtt');
let clicked = false;

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
        let mainContainer = document.getElementById('main');
        let diffContainer = document.getElementsByClassName('diff-container');
        let contentTitle = document.getElementsByClassName('content-title');

        // Se obtiene la posición del h1 del main
        var mainContainerPosition = mainContainer.getBoundingClientRect().top;

        // Verificar si están en la misma posición vertical
        for (var i = 0; i < diffContainer.length; i++) {
            var diffContainerPosition = diffContainer[i].getBoundingClientRect().top;

            // Si el h1 de otro contenedor está cerca de la posición del h1 principal, cambio su color gradualmente
            if (diffContainerPosition <= mainContainerPosition) {
                if (diffContainer[i].classList.contains('pr')) {
                    diffContainer[i].style.transition = "color 0s ease";
                    // diffContainer[i].classList.add('fade-in');
                    diffContainer[i].style.color = "#d3d3d3";

                    // para hacer el efecto de movimineto del contenidoS
                    // for (var j = 0; j < contentTitle.length; j++) {
                    //     contentTitle[j].style.transform = 'translateX(15px)';
                    // }
                }
                else if (diffContainer[i].classList.contains('im')) {
                    diffContainer[i].style.transition = "color 0s ease";
                    diffContainer[i].style.color = "#464646";
                }



            } else {
                diffContainer[i].style.color = "transparent";
            }
        }
    });
});


// Enseñar la descripción del proyecto o de mi funcion en el al hacer hover
let descProyectos = document.getElementsByClassName('descProyecto');

for (let i = 0; i < descProyectos.length; i++) {
    descProyectos[i].addEventListener('mouseover', showDescription);
    descProyectos[i].addEventListener('mouseout', showDescription);
}

function showDescription(event) {
    event.target.click();
}

// pausa la animación al hacer hover...
const gallery = document.querySelector('.fam-gallery');
let animationPaused = false;

gallery.addEventListener('mouseenter', function() {
    if (!animationPaused) {
        this.style.animationPlayState = 'paused';
        animationPaused = true;
    }
});

gallery.addEventListener('mouseleave', function() {
    if (animationPaused) {
        this.style.animationPlayState = 'running';
        animationPaused = false;
    }
});

// function checkCollapsed(projectUrl) {
//     let isCollapsed = document.querySelector('[aria-expanded]');
//     let proje = document.querySelector('.p1');
//     if (isCollapsed && proje) {
//         if(proje.click()){
//             window.location.href = projectUrl;
//         }
        
//     }

// }

// function  hideDescription(event) {
//     event.target.click()
// }