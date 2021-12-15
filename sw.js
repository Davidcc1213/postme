// self = this;

// eventos para instalar la app
self.addEventListener('install', (event) => {
    // Agregar al cache nuestros archivos
    console.info('[SW]: Adicionando nuestros archivos al cache ...');
    const wu = new Promise((resolve, reject) => {
        try {
            setTimeout( () => {
                const adicionandoMisArchivos = '';
                const adicionandoVariablesDinamicas = '';
                console.warn('[SW]: Se isntalo correctamente ...');
                resolve();
            }, 1000); // 1 second        
            self.skipWaiting();
        } catch (error) {
            reject(error.message);
        }
    });    
    event.waitUntil(wu);
});
self.addEventListener('activate', async (event) => {
    // Eliminar toso los caches anteriores
    console.info('[SW]: archivos exitosamente guardados ...');
});
self.addEventListener('fetch', (event) => {
    console.info('[SW]: Instalando ...');
    //event.respondWith(null);
}); 

self.addEventListener('sync', async (event) => {
    console.log('-----------------------------------');
    console.log(event);
    console.log('-----------------------------------');
});

self.addEventListener('push', (event) => {
    console.error(event);
});