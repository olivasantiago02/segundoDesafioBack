const ProductManager = require('./ProductManager');

const productManager = new ProductManager('products.json'); // Cambia 'products.json' por el nombre del archivo que prefieras

// Ejemplo de uso
productManager.addProduct({
    title: 'Producto 1',
    description: 'Descripción del producto 1',
    price: 10.99,
    image: 'product1.jpg',
    code: 'P123',
    stock: 100
});

const products = productManager.getProducts();
console.log(products);

const productById = productManager.getProductById(1);
console.log(productById);

productManager.updateProduct(1, 'price', 12.99);
