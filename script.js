// JavaScript para las transiciones de fotos
document.addEventListener('scroll', function() {
    const photos = document.querySelectorAll('.photo');
    const windowHeight = window.innerHeight;

    photos.forEach(photo => {
        const rect = photo.getBoundingClientRect();
        if (rect.top < windowHeight) {
            photo.classList.add('visible');
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const biocapsSection = document.querySelector(".biocaps");

    window.addEventListener("scroll", function() {
        const sectionTop = biocapsSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            biocapsSection.classList.add("visible");
        }
    });
});

async function changeWords(params) {
    const words = ["tecnología", "procesos", "energía"];
    let index = 0;
    const changingWordElement = document.getElementById("changing-word");

    function changeWord() {
        // Desvanece la palabra actual
        changingWordElement.style.opacity = 0;

        setTimeout(() => {
            // Cambia la palabra después de que se desvanezca
            changingWordElement.textContent = words[index];
            index = (index + 1) % words.length;

            // Aparece la nueva palabra
            changingWordElement.style.opacity = 1;
        }, 1000); // 1 segundo para que se desvanezca completamente
    }

    // Cambia la palabra cada 3 segundos, permitiendo que se disuelva y aparezca
    setInterval(changeWord, 3000); // Cambiar palabra cada 3 segundos
}

// Invocar la función
changeWords();