export const products = [
    { id: '1', title: 'Auriculares Gamer', price: 59.99, category: 'audio', description: 'Auriculares con micrófono y luz RGB', stock: 10, image: 'https://i.pinimg.com/1200x/ec/17/27/ec1727250b39eabc8b540bd2395ab982.jpg' },
    { id: '2', title: 'Mouse Óptico', price: 29.99, category: 'perifericos', description: 'Mouse ergonómico con sensor 5000 DPI', stock: 15, image: 'https://i.pinimg.com/1200x/c2/20/de/c220de77b7ac5262003c77eb43ccee02.jpg' },
    { id: '3', title: 'Teclado Mecánico', price: 89.9, category: 'perifericos', description: 'Teclado mecánico rojo, switches lineales', stock: 5, image: 'https://i.pinimg.com/1200x/4c/ca/4e/4cca4ebaef041dbcae68fcdd21bfa119.jpg' },
    { id: '4', title: 'Parlantes Bluetooth', price: 39.5, category: 'audio', description: 'Parlantes compactos con gran potencia', stock: 8, image: 'https://i.pinimg.com/736x/74/f1/3b/74f13b8705ddf22f9dee9848004491d4.jpg' },
    { id: '5', title: 'Monitor 24"', price: 149.0, category: 'pantallas', description: 'Monitor 24" 1080p 75Hz', stock: 6, image: 'https://i.pinimg.com/1200x/23/7a/d8/237ad87808b63089b44157ce87515ab8.jpg' },
    { id: '6', title: 'Webcam HD', price: 49.99, category: 'perifericos', description: 'Webcam con resolución HD y micrófono integrado', stock: 12, image: 'https://i.pinimg.com/1200x/99/a6/5c/99a65cdcf5f9bdd359aea78af69bed03.jpg'},
    
    
];


export function fetchProducts(categoryId = null) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (!categoryId) resolve(products);
            else resolve(products.filter(p => p.category === categoryId));
        }, 600);
    });
}


export function fetchProductById(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const p = products.find(x => x.id === id);
            if (p) resolve(p);
            else reject(new Error('Producto no encontrado'));
        }, 600);
    });
}