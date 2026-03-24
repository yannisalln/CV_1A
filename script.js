// fondu du début

const options = {
    root: null,       
    threshold: 0.1,    
    rootMargin: "0px" 
};

const observateur = new IntersectionObserver(function(entries, observer) {
    
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
    
}, options);

document.querySelectorAll('.section, header').forEach(section => {
    observateur.observe(section);
});

// bouton d'info

const btnMines = document.getElementsByClassName('btn-info');
const infoMines = document.getElementsByClassName('details-cache');

btnMines.addEventListener('click', function() {

    infoMines.classList.toggle('d-none');

    if (infoMines.classList.contains('d-none')) {
        btnMines.textContent = "+";
    } else {
        btnMines.textContent = "-";
    }
});