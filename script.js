// Créer un événement au scroll ✅

// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut ✅

// Faire apparaitre l'image de la partie improvise ✅

// Faire apparaitre la popup quand on est en bas du site ✅

// Bonus : quand on clicke sur la popup elle disparait pour toujours ✅

window.addEventListener("scroll", function () {

    let pastPos = 0;
    let midPos = 300;
    let endPos = 700;
    let opened = true;
    const scrollbar = window.scrollY;

    if (scrollbar > pastPos) {
        document.querySelector('#navbar').style.height = '64px';
    } else {
        document.querySelector('#navbar').style.top = 0;
    };

    const imgImprovise = document.querySelector('#imgImprovise');

    if (scrollbar > midPos) {
        imgImprovise.style.opacity = 1;
        imgImprovise.style.transform = 'translateX(0)';
    };

    const popup = document.querySelector('#popup');

    if (scrollbar > endPos) {
        popup.style.opacity = 1;
        popup.style.transform = 'translateX(0)';
    };

    const closeBtn = document.querySelector('#closeBtn');

    closeBtn.addEventListener('click', function() {
        popup.style.display = 'none';
        opened = false;
    });
});
