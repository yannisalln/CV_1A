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

const btnElem = document.querySelectorAll('.btn-info');

btnElem.forEach(button => {
    button.addEventListener('click', function() {
        const infoBtn = button.closest('li').nextElementSibling;
        if (!infoBtn) return;

        infoBtn.classList.toggle('d-none');
        button.textContent = infoBtn.classList.contains('d-none') ? '+' : '-';
    });
});