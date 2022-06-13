		///NAVEGACION ENTRE COMPONENTES///
SRC
(COMPONENTES)

>CONTENIDO

Incluye 2 carpetas "ItemDetailContainer" e "ItemListContainer" y un componente Layout(vista que se mantiene en todo el sitio header-content-footer).
 
ItemDetailContainer e ItemListContainer funcionan como contenedor de las vistas de los productos dependiendo de si estamos observando en nuestro Layout una lista de productos o un producto en particular.

>ItemListContainer: es el index del sitio y contiene a ItemList que es quien contiene dentro de si a los Items que conforman las cards de c/u de los productos, ademas contiene a Sidebar (barra lateral de filtros),ItemError que es el componente por defecto cuando se accede a una ruta inexistente y al Spinner del sitio.
>ItemDetailContainer: funciona como contenedor de la descripcion/detalles de un producto en particular, dentro de si contiene a ItemDetail que es quien muestra esos detalles "ayudado" por un Carousel y un ItemCount que son hijos y estan dentro de ItemDetail.

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

>FOOTER

Incluye un solo componente que es el footer de todo el sitio.

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

>HEADER

incluye 4 carpetas y 1 componente NavBar.

>Cart: funciona como contenedor de nuestra vista del carrito, muestra los items que se van añadiendo al carrito.Contiene CartEmpty componente que se muestra cuando el carrito esta vacio y Checkout componente que se muestra cuando se procede a finalizar la compra y permite que el usuario ingrese sus datos para emitir la orden de compra.
>CartWidget: componente de imagen del carrito en la barra de navegacion.
>LogoSite: componente de imagen del logo del sitio en la barra de navegacion.
>SearchBar: componente de la barra de busqueda de productos en la barra de navegacion.

NavBar:Abarca toda la barra de navegacion con sus hijos CartWidget (direcciona a Cart), LogoSite, SearchBar.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

SRC
>CONTEXT

Contiene el componente GlobalStateContext, que provee las funciones para el funcionamiento del carrito (agregar,borrar,verificar,etc.)y tambien una funcion para verificar que los campos del formulario de compra (Checkout) estén llenos.

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

SRC
>HOOKS

Contiene el componente useFirebase que provee promesas asincronicas de comunicacion con la base de datos (traer la lista de todos los productos,un producto en particular y la generación de orden de compra en la base de datos) para consumir por cualquier componente del sitio.

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
SRC
>ROUTES

Contiene el componente Rutas, donde se importan los componentes-contenedores y le permite al sitio moverse atraves de Links, modificando la url con el uso de path's.
Rutas, se importa en el archivo App.js asociado al HTML de la carpeta PUBLIC y asi quedan importados todos los componentes en nuestro sitio.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

SRC
>SERVICE

Contiene el archivo Js donde se configura nuestra base de datos de firebase.

********************************************************************************************************************************************************************************************************************************************************************************************************************************************
			///FUNCIONAMIENTO DE LOS COMPONENTES PRINCIPALES

ItemListContainer: trae a todos los productos de la base de datos por promesa(array) y los filtra en caso de que se aplique filtro.
	-ItemList: una vez que ItemListContainer resuelve la promesa de peticion con la db, recibe por props el array de productos y crea un Item por cada uno de ellos pasandoselos a Item por props.
		-Item: es una card de producto envuelta en un Link configurado para enviarlo al ItemDetailContainer en caso de que se desee acceder a un producto.


ItemDetailContainer: trae un producto(objeto) en particular a traves de una promesa y se lo pasa a ItemDetail por props para que muestre sus caracteristicas.
	-ItemDetail: recibe el producto del ItemDetailContainer y lo muestra creando un template con las propiedades del objeto. La vista de ItemDetail se modifica si el producto ya se encuentra en el carrito de compras.
		-ItemCount: almacena la cantidad del producto que modifica el usuario y se lo pasa al GlobalStateContext quien es el encargado de las funcionalidades del carrito.


Cart: consume un estado(array) del GlobalStateContext que es el encargado de almacenar los productos que se añaden al carrito y hace una vista al usuario por c/u de los productos añadidos (cada producto añadido es un objeto en ese estado).Ademas consume otras funciones que le permite borrar, editar y vaciar el array del carrito.
	-Checkout: tiene un estado propio que se utiliza para almacenar los datos del usuario-comprador, ademas almacena el total de la compra y los productos seleccionados.	
 		   Consume de useFirebase la funcion para escribir en la base de datos, en la cual escribe en una coleccion los datos del usuario,total y productos.
		   Contiene logica que es para detectar lo que escribe el usuario en los inputs. En su layout, muestra los items que se compran, el total y un form para completar con los datos del usuario.


NavBar y Sidebar: permiten navegar mediante Links utilizados de la libreria react-router-dom a los productos o  grupos de productos determinados.


GlobalStateContext: actua como proveedor de estados y funciones para el funcionamiento correcto del carrito de compras y tambien una funcion que permite verificar que el usuario complete todos los datos del form del Checkout.


useFirebase: es un hook que se comunica con la base de datos (firestore Database) y le permite acceder a datos escritos en esa base de datos (productos cargados en ella) y tambien escribir en la base de datos (en este proyecto se escriben ordenes de compra con los datos del usuario + total de compra + productos).











