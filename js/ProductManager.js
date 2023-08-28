const fs = require('fs');

class ProductManager {
    constructor(path) {
        this.path = path;
    }

    loadProducts() {
        try {
            const data = fs.readFileSync(this.path, 'utf8');
            return JSON.parse(data);
        } catch (error) {
            return [];
        }
    }

    saveProducts(products) {
        fs.writeFileSync(this.path, JSON.stringify(products, null, 4), 'utf8');
    }

    addProduct(product) {
        const products = this.loadProducts();
        const lastId = products.length > 0 ? products[products.length - 1].id : 0;
        product.id = lastId + 1;
        products.push(product);
        this.saveProducts(products);
    }

    getProducts() {
        return this.loadProducts();
    }

    getProductById(id) {
        const products = this.loadProducts();
        return products.find(product => product.id === id);
    }

    updateProduct(id, fieldToUpdate, newValue) {
        const products = this.loadProducts();
        const product = products.find(product => product.id === id);
        if (product) {
            product[fieldToUpdate] = newValue;
            this.saveProducts(products);
        }
    }
}

module.exports = ProductManager;
