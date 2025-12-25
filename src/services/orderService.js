import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase/config'

export async function createOrder(orderData) {
    try {
        const order = {
            buyer: {
                nombre: orderData.nombre,
                apellido: orderData.apellido,
                email: orderData.email,
                telefono: orderData.telefono,
                direccion: orderData.direccion,
                ciudad: orderData.ciudad,
                codigoPostal: orderData.codigoPostal
            },
            items: orderData.items.map(item => ({
                id: item.id,
                name: item.name,
                price: item.price,
                quantity: item.quantity,
                subtotal: item.price * item.quantity
            })),
            total: orderData.total,
            paymentMethod: orderData.paymentMethod,
            date: serverTimestamp(),
            status: 'pending'
        }

        const docRef = await addDoc(collection(db, 'orders'), order)
        
        console.log('Orden creada con ID:', docRef.id)
        
        return {
            success: true,
            orderId: docRef.id
        }
    } catch (error) {
        console.error('Error al crear la orden:', error)
        return {
            success: false,
            error: error.message
        }
    }
}