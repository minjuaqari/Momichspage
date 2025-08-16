const linea = document.querySelectorAll('.animacion');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {        // Si la línea está en pantalla
      entry.target.classList.add('linea-visible');
      observer.unobserve(entry.target);       // Dejar de observar para que no se repita
    }
  });
});
linea.forEach(linea => observer.observe(linea));


const texto = document.querySelectorAll('.texto-animado');


const observertexto = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('texto-visible');
      observertexto.unobserve(entry.target); // Solo una vez
    }
  });
 },{
   threshold: 0,
   rootMargin: "-150px 0px 0px 0px"
});

texto.forEach(texto => observertexto.observe(texto));





const texto2 = document.querySelectorAll('.textubi');


const observertexto2 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('textubi2');
      observertexto2.unobserve(entry.target); // Solo una vez
    }
  });
 },{
 threshold: 1,
 rootMargin: "0px 0px -240px 0px"
});

texto2.forEach(texto2 => observertexto2.observe(texto2));    