import { collection, getDocs, doc, getDoc, query, where } from 'firebase/firestore';
import { db } from '../firebase/config';

export async function fetchProducts(categoryId = null) {
    try {
        const productsCollection = collection(db, 'products');
        let productsQuery;

        if (categoryId) {
            productsQuery = query(productsCollection, where('category', '==', categoryId));
        } else {
            productsQuery = productsCollection;
        }

        const querySnapshot = await getDocs(productsQuery);
        const products = [];

        querySnapshot.forEach((doc) => {
            products.push({
                id: doc.id,
                ...doc.data()
            });
        });

        return products;
    } catch (error) {
        console.error('Error al obtener productos:', error);
        throw error;
    }
}
export async function fetchProductById(id) {
    try {
        const productDoc = doc(db, 'products', id);
        const productSnapshot = await getDoc(productDoc);

        if (productSnapshot.exists()) {
            return {
                id: productSnapshot.id,
                ...productSnapshot.data()
            };
        } else {
            throw new Error('Producto no encontrado');
        }
    } catch (error) {
        console.error('Error al obtener el producto:', error);
        throw error;
    }
}