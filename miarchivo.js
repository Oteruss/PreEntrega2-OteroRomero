// Precios
const servicePrices = {
    logo: 100,
    web: 300,
    flyer: 50
};

function simulateProcess() {
    const serviceType = document.getElementById('serviceType').value;

    const numRevisions = parseInt(prompt("Ingrese la cantidad de revisiones (entre 1 y 10):"));

    if (isNaN(numRevisions) || numRevisions < 1 || numRevisions > 10) {
        alert('El número de revisiones debe estar entre 1 y 10.');
        return;
    }

    let basePrice = servicePrices[serviceType];
    let totalPrice = basePrice + numRevisions * 10;

    // Descuento 
    let discountMessage = "";
    if (numRevisions > 5) {
        totalPrice *= 0.9; 
        discountMessage = "¡Se ha aplicado un descuento del 10% por más de 5 servicios!";
    } else {
        discountMessage = "No se ha aplicado ningún descuento.";
    }

    alert(`El precio total es: $${totalPrice.toFixed(2)}`);
    alert(discountMessage);

    console.log(`Tipo de servicio: ${serviceType}`);
    console.log(`Número de revisiones: ${numRevisions}`);
    console.log(`Precio total: $${totalPrice.toFixed(2)}`);
    console.log(discountMessage);
}

const services = [
    { type: 'logo', price: 100 },
    { type: 'web', price: 300 },
    { type: 'flyer', price: 50 }
];

function findService(serviceType) {
    return services.find(service => service.type === serviceType);
}

const selectedService = findService('logo');
if (selectedService) {
    console.log(`Servicio seleccionado: ${selectedService.type}, Precio: $${selectedService.price}`);
}

const servicePricesArray = services.map(service => service.price);
console.log('Array de precios de servicios:', servicePricesArray);

const expensiveServices = services.filter(service => service.price > 100);
console.log('Servicios con precios mayores a $100:', expensiveServices);
