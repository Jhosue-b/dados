function lanzarDado() {
    const dado = document.querySelector('.dado');

    // Generar un número aleatorio entre 1 y 6
    const numeroAleatorio = Math.floor(Math.random() * 6) + 1;

    // Definir las rotaciones específicas para cada cara
    const rotaciones = [
        { x: 0, y: 0 }, // Cara 1
        { x: 0, y: 90 }, // Cara 2
        { x: 0, y: 180 }, // Cara 3
        { x: 0, y: -90 }, // Cara 4
        { x: 90, y: 0 }, // Cara 5
        { x: -90, y: 0 } // Cara 6
    ];

    // Obtener las rotaciones específicas para la cara aleatoria
    const rotacion = rotaciones[numeroAleatorio - 1];

    // Aplicar la rotación al dado
    dado.style.transform = `rotateX(${rotacion.x}deg) rotateY(${rotacion.y}deg)`;
}
