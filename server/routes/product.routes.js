const ProductController = require('../controllers/product.controllers');

module.exports = (app) => {
    app.post('/api/product', ProductController.createProduct);
}