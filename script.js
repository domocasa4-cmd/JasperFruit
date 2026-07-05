// JasperFruit - Script principal

document.addEventListener('DOMContentLoaded', function() {
    console.log('JasperFruit cargado correctamente');
    
    // Inicializar la aplicación
    initApp();
});

/**
 * Inicializa la aplicación
 */
function initApp() {
    // Aquí puedes agregar código de inicialización
    console.log('Aplicación inicializada');
}

/**
 * Función de ejemplo para manejar eventos
 */
function handleEvent(event) {
    console.log('Evento manejado:', event);
}

// Exportar funciones si es necesario
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initApp,
        handleEvent
    };
}
