let columnas = document.querySelectorAll('.softwares .col');
let descripciones = document.querySelectorAll('.descripcion');

columnas.forEach(col => {
    col.addEventListener('mouseenter', () => {
        // OCULTA TODAS LAS DESCRIPCIONJES
        descripciones.forEach(desc => desc.style.display = 'none');
        // MUESTRA LA DESCRICPION CORRESPONDIENTE
        let descripcionId = col.getAttribute('data-descripcion');
        document.getElementById(descripcionId).style.display = 'block';
    });

    col.addEventListener('mouseleave', () => {
        // SACA LA DESCRIPCION AL SACAR EL MOUSE
        let descripcionId = col.getAttribute('data-descripcion');
        document.getElementById(descripcionId).style.display = 'none';
    });
});



//PARA QUE CAMBIEN DE COLOR LOS H1 Y H3
const colores = ['#FF0000', '#00FF00', '#FF00FF']; 
        let indice = 0;

        const interpolarColor = (color1, color2, factor) => {
            const result = color1.slice(1).match(/.{1,2}/g).map((c, i) => {
                return Math.round(parseInt(c, 16) + factor * (parseInt(color2.slice(1).match(/.{1,2}/g)[i], 16) - parseInt(c, 16))).toString(16).padStart(2, '0');
            });
            return `#${result.join('')}`;
        };

        const cambiarColor = () => {
            const elementos = document.querySelectorAll('h1, h3');
            const colorInicio = colores[indice];
            const colorFin = colores[(indice + 1) % colores.length];
            let paso = 0;
            const totalPasos = 100;

            const intervalo = setInterval(() => {
                const factor = paso / totalPasos;
                const colorActual = interpolarColor(colorInicio, colorFin, factor);
                elementos.forEach(elemento => {
                    elemento.style.color = colorActual;
                });

                paso++;
                if (paso > totalPasos) {
                    clearInterval(intervalo);
                    indice = (indice + 1) % colores.length;
                    cambiarColor();
                }
            }, 20); 
        };

        cambiarColor();