# TecnoStore - E-commerce React + Firebase

Proyecto Final de tienda online desarrollado con React, React Router y Firebase para el curso de React JS en Coderhouse.

##  Descripción

TecnoStore es una Single Page Application (SPA) de e-commerce especializada en productos tecnológicos. Permite a los usuarios navegar por un catálogo de productos, filtrar por categorías, agregar productos al carrito y realizar compras completas con guardado de órdenes en Firebase.

##  Características Principales

* ✅ Catálogo completo de productos desde Firebase
* ✅ Filtrado de productos por categorías (Audio, Periféricos, Pantallas)
* ✅ Vista detallada de cada producto con stock en tiempo real
* ✅ Carrito de compras con gestión de cantidades
* ✅ Sistema de checkout con validación de datos
* ✅ Múltiples métodos de pago (Efectivo, Crédito, Débito, Transferencia)
* ✅ Guardado de órdenes de compra en Firebase
* ✅ Confirmación de compra con número de orden
* ✅ Diseño responsivo con Bootstrap 5
* ✅ Navegación dinámica con React Router (SPA)

##  Tecnologías Utilizadas

- **React 18** - Biblioteca para construir la interfaz de usuario
- **React Router DOM 7** - Manejo de rutas y navegación
- **Firebase/Firestore** - Base de datos en la nube
- **Bootstrap 5** - Framework CSS para estilos responsivos
- **React Icons** - Librería de iconos
- **Vite 7** - Herramienta de desarrollo y build

##  Estructura del Proyecto

```
ProyectoFinal+Sabbionari/
├── src/
│   ├── components/              # Componentes de presentación
│   │   ├── NavBar.jsx          # Barra de navegación
│   │   ├── CartWidget.jsx      # Widget del carrito (header)
│   │   ├── Item.jsx            # Tarjeta individual de producto
│   │   ├── ItemList.jsx        # Lista/grilla de productos
│   │   ├── ItemDetail.jsx      # Vista detallada del producto
│   │   ├── ItemCount.jsx       # Contador de unidades
│   │   ├── Cart.jsx            # Vista del carrito de compras
│   │   ├── Checkout.jsx        # Formulario de checkout
│   │   └── NotFound.jsx        # Página 404
│   │
│   ├── containers/             # Componentes contenedores
│   │   ├── ItemListContainer.jsx    # Contenedor del listado
│   │   └── ItemDetailContainer.jsx  # Contenedor del detalle
│   │
│   ├── context/                # Context API
│   │   └── CartContext.jsx     # Estado global del carrito
│   │
│   ├── services/               # Servicios de Firebase
│   │   ├── productService.js   # Consultas de productos
│   │   └── orderService.js     # Creación de órdenes
│   │
│   ├── firebase/               # Configuración Firebase
│   │   ├── config.js           # Credenciales y setup
│   │   └── uploadProducts.js   # Script para subir productos
│   │
│   ├── App.jsx                 # Componente principal
│   ├── main.jsx                # Punto de entrada
│   ├── App.css                 # Estilos personalizados
│   └── index.css               # Estilos globales
│
├── package.json
├── vite.config.js
└── README.md
```

##  Instalación y Uso

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn
- Cuenta de Firebase

### Pasos de Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/tuusuario/ProyectoFinal+Sabbionari.git
cd ProyectoFinal+Sabbionari
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar Firebase**
   - Crear un proyecto en [Firebase Console](https://console.firebase.google.com/)
   - Crear una base de datos Firestore
   - Copiar las credenciales en `src/firebase/config.js`

4. **(Opcional) Cargar productos iniciales**
```bash
node src/firebase/uploadProducts.js
```

5. **Iniciar servidor de desarrollo**
```bash
npm run dev
```

6. **Abrir en el navegador**
```
http://localhost:5173
```

## Funcionalidades Implementadas

### Navegación por Rutas
- `/` - Catálogo completo de productos
- `/category/:categoryId` - Productos filtrados por categoría
- `/item/:productId` - Vista detallada de un producto
- `/cart` - Carrito de compras
- `/checkout` - Proceso de finalización de compra
- `*` - Página 404 para rutas no encontradas

### Componentes Principales

#### 1. NavBar
- Logo de la tienda con link al inicio
- Enlaces a categorías (Todos, Audio, Periféricos, Pantallas)
- CartWidget con contador de productos
- Diseño responsivo con menú hamburguesa

#### 2. ItemListContainer
- Carga de productos desde Firebase
- Filtrado por categoría usando `useParams`
- Estados de carga con spinner
- Manejo de errores
- Actualización automática al cambiar categoría

#### 3. ItemDetailContainer
- Detalles completos del producto
- Imagen, precio y stock en tiempo real
- ItemCount para seleccionar cantidad
- Validación de stock disponible
- Opciones post-agregado: "Ir al carrito" o "Seguir comprando"

#### 4. Cart (Carrito de Compras)
- Lista de productos agregados con imagen
- Control de cantidades (aumentar/disminuir/eliminar)
- Cálculo de subtotales y total
- Botones: "Finalizar compra", "Seguir comprando", "Vaciar carrito"

#### 5. Checkout (Finalización de Compra)
**Paso 1: Datos Personales**
- Formulario con validación de campos
- Campos: Nombre, Apellido, Email, Teléfono, Dirección, Ciudad, Código Postal

**Paso 2: Método de Pago**
- Selección visual de método de pago
- Opciones: Efectivo, Tarjeta de Crédito, Débito, Transferencia

**Confirmación**
- Guardado de orden en Firebase
- Muestra del número de orden generado
- Redirección automática al inicio

#### 6. CartContext (Estado Global)
Funciones disponibles:
- `addToCart(product, quantity)` - Agregar producto
- `removeFromCart(productId)` - Eliminar producto
- `updateQuantity(productId, quantity)` - Actualizar cantidad
- `clearCart()` - Vaciar carrito
- `getCartTotal()` - Obtener total
- `getCartCount()` - Obtener cantidad de items

##  Firebase - Estructura de Datos

### Colección: `products`
```javascript
{
  id: "1",
  title: "Auriculares Gamer",
  price: 65000,
  category: "audio",
  description: "Auriculares con micrófono y luz RGB",
  stock: 10,
  image: "https://url-imagen.com/imagen.jpg"
}
```

### Colección: `orders`
```javascript
{
  buyer: {
    nombre: "Juan",
    apellido: "Pérez",
    email: "juan@email.com",
    telefono: "123456789",
    direccion: "Calle 123",
    ciudad: "Buenos Aires",
    codigoPostal: "1234"
  },
  items: [
    {
      id: "1",
      name: "Auriculares Gamer",
      price: 65000,
      quantity: 2,
      subtotal: 130000
    }
  ],
  total: 130000,
  paymentMethod: "credito",
  date: Timestamp,
  status: "pending"
}
```

##  Estilos y Diseño

- Bootstrap 5 para estructura y componentes base
- CSS personalizado para efectos hover y animaciones
- Diseño mobile-first totalmente responsivo
- Cards con sombras y efectos de elevación
- Badges para stock y categorías
- Spinners de carga animados
- Paleta de colores profesional

##  Dependencias Principales

```json
{
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "react-router-dom": "^7.9.6",
  "firebase": "^12.7.0",
  "bootstrap": "^5.3.8",
  "react-bootstrap": "^2.10.10",
  "react-icons": "^5.5.0"
}
```

##  Deploy

Para hacer build de producción:
```bash
npm run build
```

El proyecto puede ser desplegado en:
- **Netlify**
- **Firebase Hosting**

##  Autor

**Sabbionari Matías Nicolás**

Proyecto Final - Curso de React JS  
Coderhouse - 2025

##  Licencia

Este proyecto fue desarrollado con fines educativos para el curso de React JS de Coderhouse.

##  Créditos

- Imágenes de productos de Pinterest
- Iconos de React Icons
- Framework Bootstrap
- Base de datos Firebase
- Coderhouse por la formación

---

**Nota:** Este es un proyecto educativo. Los productos, precios y datos de compra son ficticios y no se procesan pagos reales.