const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbrZugMqxgwTelaWVYADQjxKBJG8LvcUELdw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbJoPVToray3IvUuKhLRhvZQ0L_DtmDfmiCw&s",
    "https://www.greenteach.es/wp-content/uploads/2017/10/Bioo-Portada.jpg",
]; // Lista de imágenes
let currentImage = 0;

function morphShapes() {
    const shape = document.getElementById("circle");
    const photo = document.getElementById("photo");

    // Cambia la imagen de fondo
    photo.src = images[currentImage];
    photo.style.display = "block"; // Mostrar la imagen

    gsap
        .timeline({
            onComplete: function() {
                // Cambiar a la siguiente imagen
                currentImage = (currentImage + 1) % images.length;
                photo.style.display = "none"; // Ocultar la imagen antes del siguiente morph
                morphShapes(); // Llamar a la función de nuevo
            },
        })
        .to(shape, {
            duration: 1, // Cambiado a 1 segundo
            attr: { d: "M0,0 L100,0 L100,100 L0,100 Z" },
            ease: "power1.inOut",
        }) // Cubo
        .to(shape, {
            duration: 1, // Cambiado a 1 segundo
            attr: {
                d: "M50,10 C78.8,10 100,31.2 100,50 C100,68.8 78.8,90 50,90 C31.2,90 10,68.8 10,50 C10,31.2 31.2,10 50,10 Z",
            },
            ease: "power1.inOut",
        }) // Esfera
        .to(shape, {
            duration: 1, // Cambiado a 1 segundo
            attr: { d: "M0,0 L100,0 L100,100 L0,100 Z" },
            ease: "power1.inOut",
        }); // Rectángulo
}

// Inicia el proceso
morphShapes();

function morphShapes() {
    console.log("morphShapes se está ejecutando");
}
import express from "express";
import cors from "cors";
const app = express();

app.use(cors()); // Habilita CORS para todas las rutas

app.get("/api/data", (req, res) => {
    res.json({ message: "Esto es un ejemplo de respuesta JSON" });
});

app.listen(3000, () => {
    console.log("Servidor escuchando en el puerto 3000");
});

module.exports = {
    devServer: {
        proxy: {
            '^/api': {
                target: 'http://localhost: 4000',
                ws: true,
                changeOrigin: true
            }
        }
    }
}
De manera que las llamadas que comienzan por api, son redirigidas a localhost: 4000

Independiente de la librería / framework

Otro modo sería crearnos nuestro servidor proxy en el cual inyectar las cabeceras.Existen numerosas soluciones, a modo de ejemplo añadimos cors anywhere o local cors proxy.

A continuación un ejemplo funcional sacado de la propia documentación de cors anywhere:

    // Listen on a specific host via the HOST environment variable
    var host = process.env.HOST || '0.0.0.0';
// Listen on a specific port via the PORT environment variable
var port = process.env.PORT || 8080;

var cors_proxy = require('cors-anywhere');
cors_proxy.createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, function() {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});