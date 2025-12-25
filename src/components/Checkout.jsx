import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { createOrder } from '../services/orderService'
import { FaCreditCard, FaMoneyBillWave, FaExchangeAlt, FaCheckCircle } from 'react-icons/fa'

export default function Checkout() {
    const { cart, getCartTotal, clearCart } = useCart()
    const navigate = useNavigate()
    const [step, setStep] = useState(1)
    const [orderComplete, setOrderComplete] = useState(false)
    const [orderId, setOrderId] = useState(null)
    const [isProcessing, setIsProcessing] = useState(false)
    
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        direccion: '',
        ciudad: '',
        codigoPostal: '',
        paymentMethod: ''
    })

    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        if (errors[e.target.name]) {
            setErrors({
                ...errors,
                [e.target.name]: ''
            })
        }
    }

    const validateStep1 = () => {
        const newErrors = {}
        if (!formData.nombre.trim()) newErrors.nombre = 'El nombre es requerido'
        if (!formData.apellido.trim()) newErrors.apellido = 'El apellido es requerido'
        if (!formData.email.trim()) {
            newErrors.email = 'El email es requerido'
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email inválido'
        }
        if (!formData.telefono.trim()) newErrors.telefono = 'El teléfono es requerido'
        if (!formData.direccion.trim()) newErrors.direccion = 'La dirección es requerida'
        if (!formData.ciudad.trim()) newErrors.ciudad = 'La ciudad es requerida'
        if (!formData.codigoPostal.trim()) newErrors.codigoPostal = 'El código postal es requerido'

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const validateStep2 = () => {
        if (!formData.paymentMethod) {
            setErrors({ paymentMethod: 'Debes seleccionar un método de pago' })
            return false
        }
        return true
    }

    const handleNextStep = () => {
        if (step === 1 && validateStep1()) {
            setStep(2)
        }
    }

    const handleFinalizePurchase = async () => {
        if (!validateStep2()) return

        setIsProcessing(true)

        const orderData = {
            ...formData,
            items: cart,
            total: getCartTotal()
        }

        const result = await createOrder(orderData)

        if (result.success) {
            setOrderId(result.orderId)
            setOrderComplete(true)
            setTimeout(() => {
                clearCart()
                navigate('/')
            }, 5000)
        } else {
            setErrors({ general: 'Error al procesar la orden. Intenta nuevamente.' })
        }

        setIsProcessing(false)
    }

    if (cart.length === 0 && !orderComplete) {
        return (
            <div className="container mt-5 text-center">
                <h2>No hay productos en el carrito</h2>
                <button className="btn btn-primary mt-3" onClick={() => navigate('/')}>
                    Volver al catálogo
                </button>
            </div>
        )
    }

    if (orderComplete) {
        return (
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6 text-center">
                        <div className="card shadow">
                            <div className="card-body p-5">
                                <FaCheckCircle className="text-success mb-3" size={80} />
                                <h2 className="text-success mb-3">¡Compra realizada con éxito!</h2>
                                <p className="text-muted mb-2">
                                    Tu número de orden es:
                                </p>
                                <p className="fs-5 fw-bold text-primary mb-3">
                                    #{orderId}
                                </p>
                                <p className="text-muted">
                                    Hemos enviado un email de confirmación a {formData.email}
                                </p>
                                <p className="text-muted">
                                    Serás redirigido al inicio en unos segundos...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const paymentMethods = [
        { id: 'efectivo', label: 'Efectivo', icon: <FaMoneyBillWave size={30} /> },
        { id: 'credito', label: 'Tarjeta de Crédito', icon: <FaCreditCard size={30} /> },
        { id: 'debito', label: 'Tarjeta de Débito', icon: <FaCreditCard size={30} /> },
        { id: 'transferencia', label: 'Transferencia', icon: <FaExchangeAlt size={30} /> }
    ]

    return (
        <div className="container mt-4 mb-5">
            <h2 className="mb-4">Finalizar Compra</h2>
            
            <div className="row">
                <div className="col-lg-8">
                    <div className="mb-4">
                        <div className="d-flex justify-content-between">
                            <div className={`text-center flex-fill ${step >= 1 ? 'text-primary fw-bold' : 'text-muted'}`}>
                                <div className={`rounded-circle d-inline-flex align-items-center justify-content-center mb-2 ${step >= 1 ? 'bg-primary text-white' : 'bg-light'}`} style={{width: '40px', height: '40px'}}>
                                    1
                                </div>
                                <div>Datos personales</div>
                            </div>
                            <div className={`text-center flex-fill ${step >= 2 ? 'text-primary fw-bold' : 'text-muted'}`}>
                                <div className={`rounded-circle d-inline-flex align-items-center justify-content-center mb-2 ${step >= 2 ? 'bg-primary text-white' : 'bg-light'}`} style={{width: '40px', height: '40px'}}>
                                    2
                                </div>
                                <div>Método de pago</div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-body">
                            {step === 1 && (
                                <>
                                    <h4 className="mb-4">Datos de Contacto y Envío</h4>
                                    <form>
                                        <div className="row">
                                            <div className="col-md-6 mb-3">
                                                <label className="form-label">Nombre *</label>
                                                <input
                                                    type="text"
                                                    className={`form-control ${errors.nombre ? 'is-invalid' : ''}`}
                                                    name="nombre"
                                                    value={formData.nombre}
                                                    onChange={handleChange}
                                                />
                                                {errors.nombre && <div className="invalid-feedback">{errors.nombre}</div>}
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label className="form-label">Apellido *</label>
                                                <input
                                                    type="text"
                                                    className={`form-control ${errors.apellido ? 'is-invalid' : ''}`}
                                                    name="apellido"
                                                    value={formData.apellido}
                                                    onChange={handleChange}
                                                />
                                                {errors.apellido && <div className="invalid-feedback">{errors.apellido}</div>}
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 mb-3">
                                                <label className="form-label">Email *</label>
                                                <input
                                                    type="email"
                                                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                />
                                                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label className="form-label">Teléfono *</label>
                                                <input
                                                    type="tel"
                                                    className={`form-control ${errors.telefono ? 'is-invalid' : ''}`}
                                                    name="telefono"
                                                    value={formData.telefono}
                                                    onChange={handleChange}
                                                />
                                                {errors.telefono && <div className="invalid-feedback">{errors.telefono}</div>}
                                            </div>
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label">Dirección *</label>
                                            <input
                                                type="text"
                                                className={`form-control ${errors.direccion ? 'is-invalid' : ''}`}
                                                name="direccion"
                                                value={formData.direccion}
                                                onChange={handleChange}
                                            />
                                            {errors.direccion && <div className="invalid-feedback">{errors.direccion}</div>}
                                        </div>

                                        <div className="row">
                                            <div className="col-md-8 mb-3">
                                                <label className="form-label">Ciudad *</label>
                                                <input
                                                    type="text"
                                                    className={`form-control ${errors.ciudad ? 'is-invalid' : ''}`}
                                                    name="ciudad"
                                                    value={formData.ciudad}
                                                    onChange={handleChange}
                                                />
                                                {errors.ciudad && <div className="invalid-feedback">{errors.ciudad}</div>}
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <label className="form-label">Código Postal *</label>
                                                <input
                                                    type="text"
                                                    className={`form-control ${errors.codigoPostal ? 'is-invalid' : ''}`}
                                                    name="codigoPostal"
                                                    value={formData.codigoPostal}
                                                    onChange={handleChange}
                                                />
                                                {errors.codigoPostal && <div className="invalid-feedback">{errors.codigoPostal}</div>}
                                            </div>
                                        </div>

                                        <div className="d-flex justify-content-between mt-4">
                                            <button 
                                                type="button"
                                                className="btn btn-outline-secondary"
                                                onClick={() => navigate('/cart')}
                                            >
                                                Volver al carrito
                                            </button>
                                            <button 
                                                type="button"
                                                className="btn btn-primary"
                                                onClick={handleNextStep}
                                            >
                                                Continuar
                                            </button>
                                        </div>
                                    </form>
                                </>
                            )}

                            {step === 2 && (
                                <>
                                    <h4 className="mb-4">Selecciona tu método de pago</h4>
                                    
                                    <div className="row">
                                        {paymentMethods.map(method => (
                                            <div key={method.id} className="col-md-6 mb-3">
                                                <div 
                                                    className={`card h-100 cursor-pointer ${formData.paymentMethod === method.id ? 'border-primary border-2' : ''}`}
                                                    style={{ cursor: 'pointer' }}
                                                    onClick={() => {
                                                        setFormData({ ...formData, paymentMethod: method.id })
                                                        setErrors({ ...errors, paymentMethod: '' })
                                                    }}
                                                >
                                                    <div className="card-body text-center">
                                                        <div className="mb-3 text-primary">
                                                            {method.icon}
                                                        </div>
                                                        <h5>{method.label}</h5>
                                                        {formData.paymentMethod === method.id && (
                                                            <FaCheckCircle className="text-primary mt-2" size={20} />
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    
                                    {errors.paymentMethod && (
                                        <div className="alert alert-danger mt-3">
                                            {errors.paymentMethod}
                                        </div>
                                    )}

                                    {errors.general && (
                                        <div className="alert alert-danger mt-3">
                                            {errors.general}
                                        </div>
                                    )}

                                    <div className="d-flex justify-content-between mt-4">
                                        <button 
                                            type="button"
                                            className="btn btn-outline-secondary"
                                            onClick={() => setStep(1)}
                                            disabled={isProcessing}
                                        >
                                            Volver
                                        </button>
                                        <button 
                                            type="button"
                                            className="btn btn-success"
                                            onClick={handleFinalizePurchase}
                                            disabled={isProcessing}
                                        >
                                            {isProcessing ? 'Procesando...' : 'Finalizar compra'}
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="card sticky-top" style={{ top: '20px' }}>
                        <div className="card-body">
                            <h5 className="card-title mb-3">Resumen del pedido</h5>
                            <hr />
                            
                            <div className="mb-3" style={{ maxHeight: '200px', overflowY: 'auto' }}>
                                {cart.map(item => (
                                    <div key={item.id} className="d-flex justify-content-between mb-2">
                                        <small>{item.name} x{item.quantity}</small>
                                        <small className="fw-bold">${(item.price * item.quantity).toLocaleString()}</small>
                                    </div>
                                ))}
                            </div>
                            
                            <hr />
                            <div className="d-flex justify-content-between mb-2">
                                <span>Subtotal:</span>
                                <span>${getCartTotal().toLocaleString()}</span>
                            </div>
                            <div className="d-flex justify-content-between mb-3">
                                <span>Envío:</span>
                                <span className="text-success">Gratis</span>
                            </div>
                            <hr />
                            <div className="d-flex justify-content-between">
                                <strong>Total:</strong>
                                <strong className="text-primary fs-4">${getCartTotal().toLocaleString()}</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}