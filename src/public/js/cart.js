const socketClient = io();

socketClient.on('enviodecarts', (obj) => {
    cartId = obj._id;
});

socketClient.on('enviodeproducts', (obj) => {
    updateProductList(obj);
});

    function updateProductList(products) {

        let div = document.getElementById('contenedor');

        div.innerHTML = products.map(product => {
            return `<div class="card" style="width: 18rem;">
            <img src="${product.image}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text">${product.price}</p>
            <a href="#" class="btn btn-primary" onclick="addToCart('${product._id}')">Agregar al carrito</a>
            </div>
        </div>`
        })

    }

    function addToCart(productId) {

        socketClient.emit('addCart', {
            _id: cartId,
            products: [{ _id: productId }],
        });

    }

    function addToCart(productId) {

        socketClient.emit('addCart', {
            _id: cartId,
            products: [{ _id: productId }],
        });

    }