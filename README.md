-TecnoStore - E-commerce React
Proyecto de tienda online desarrollado con React y React Router para la gestión de productos tecnológicos.
-Descripción
TecnoStore es una aplicación web de e-commerce que permite a los usuarios navegar por un catálogo de productos tecnológicos, filtrar por categorías y ver detalles de cada producto. El proyecto implementa navegación dinámica mediante React Router y simula llamadas asíncronas a una base de datos.
-Características

* Página principal con catálogo completo de productos
* Filtrado de productos por categorías (Audio, Periféricos, Pantallas)
* Diseño responsivo con Bootstrap
* Vista detallada de cada producto
* Contador de unidades para agregar al carrito
* Navegación dinámica con React Router
* Simulación de llamadas asíncronas con Promises

- Tecnologías Utilizadas

-React 18.x - Biblioteca para construir la interfaz
-React Router DOM 6.x - Manejo de rutas y navegación
-Bootstrap 5.x - Framework CSS para estilos
-React Icons - Iconos para la interfaz
-Vite - Herramienta de desarrollo y build

- Estructura del Proyecto
my-react-app/
├── src/
│   ├── components/
│   │   ├── CartWidget.jsx      # Widget del carrito (header)
│   │   ├── Item.jsx             # Tarjeta individual de producto
│   │   ├── ItemCount.jsx        # Contador de unidades
│   │   ├── ItemDetail.jsx       # Vista detallada del producto
│   │   ├── ItemList.jsx         # Lista/grilla de productos
│   │   └── NavBar.jsx           # Barra de navegación
│   │   └── NotFound.jsx         # Pagina de falla 
│   ├── containers/
│   │   ├── ItemDetailContainer.jsx  # Contenedor del detalle
│   │   └── ItemListContainer.jsx    # Contenedor del listado
│   ├── data/
│   │   └── products.js          # Base de datos simulada
│   ├── index.css                # Estilos principales  
│   ├── App.jsx                  # Componente principal
│   ├── App.css                  # Estilos personalizados
│   └── main.jsx                 # Punto de entrada
├── package.json
└── README.md

🚀 Instalación y Uso
Prerrequisitos

Node.js (versión 14 o superior)
npm o yarn

Pasos de Instalación (TODO EN LA TERMINAL)

Clonar el repositorio
git clone [URL_DEL_REPOSITORIO]
cd my-react-app
npm install
npm install bootstrap
npm install react-icons
npm run dev
http://localhost:5173 -> ABRIR EN EL NAVEGADOR

🎯 Funcionalidades Implementadas
Navegación por Rutas

/ - Catálogo completo de productos
/category/:categoryId - Productos filtrados por categoría
/item/:productId - Vista detallada de un producto específico
* - Página 404 para rutas no encontradas

Componentes Principales
1. NavBar
Barra de navegación superior con:

Logo de la tienda
Enlaces a categorías (Todos, Audio, Periféricos, Pantallas)
Widget del carrito de compras
Diseño responsivo con menú hamburguesa en móviles

2. ItemListContainer
Contenedor que maneja:

Carga asíncrona de productos
Filtrado por categoría usando useParams
Estados de carga y error
Actualización automática al cambiar de categoría

3. ItemDetailContainer
Contenedor que muestra:

Detalles completos del producto
Imagen grande
Precio y stock disponible
Contador para seleccionar cantidad
Botón "Agregar al carrito"

4. ItemCount
Componente contador que permite:

Incrementar/decrementar cantidad
Validación de stock máximo
Prevención de valores menores a 1
Botón para confirmar agregado al carrito

📦 Datos de Productos
Los productos se encuentran en src/data/products.js y contienen:

ID único
Título
Precio
Categoría
Descripción
Stock disponible
URL de imagen

Las funciones de fetch simulan un delay de 600ms para emular una llamada real a una API.


Bootstrap 5 para la estructura y componentes base
CSS personalizado para efectos hover y animaciones
Diseño mobile-first totalmente responsivo
Cards con sombras y efectos de elevación
Badges para mostrar stock y estado


👨‍💻 Autor
Sabbionari Matias Nicolas.

Este proyecto fue desarrollado como trabajo práctico para [React js / Coderhouse].


Imágenes de productos de Pinterest
Iconos de React Icons
Framework Bootstrap


Nota: Este es un proyecto educativo. Los productos y precios son ficticios.



