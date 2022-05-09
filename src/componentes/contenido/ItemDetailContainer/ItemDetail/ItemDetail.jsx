import React from 'react'
import spinner from '../../../contenido/ItemListContainer/ItemList/itemList.css'
import estilos from './itemDetail.scss'
const ItemDetail = ({item}) => {

    let alto={
        height:'700px'
    }
    let text={
        fontSize:'small'
    }


  return (
    <div className='d-flex w-100'>   
         {item.length === 1 ? (
            item.map((detail, index)=>(
                <div key={index} style={alto} className='d-flex w-100 justify-content-center '>
                    <section className="product bg-warning">
	                    <div className="product__photo">
	                    	<div className="photo-container">
	                    		<div className="photo-main">
	                    			{/* <div className="controls">
	                    				<i className="material-icons">share</i>
	                    				<i className="material-icons">favorite_border</i>
	                    			</div> */}
	                    			<img src={detail.img} alt="green apple slice"/>
	                    		</div>
	                    		{/* <div className="photo-album">
	                    			<ul>
	                    				<li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png" alt="green apple"/></li>
	                    				<li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537303532/codepen/delicious-apples/half-apple.png" alt="half apple"/></li>
	                    				<li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537303160/codepen/delicious-apples/green-apple-flipped.png" alt="green apple"/></li>
	                    				<li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537303708/codepen/delicious-apples/apple-top.png" alt="apple top"/></li>
	                    			</ul>
	                    		</div> */}
	                    	</div>
	                    </div>
	                    <div className="p-4 product__info">
	                    	<div className="title">
	                    		<h1>{detail.nombre}</h1>
	                    		{/* <span>COD: 45999</span> */}
	                    	</div>
	                    	<div className="price">
	                    		$ <span>{detail.precio}</span>
	                    	</div>
	                    	{/* <div className="variant">
	                    		<h3>SELECT A COLOR</h3>
	                    		<ul>
	                    			<li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png" alt="green apple"></li>
	                    			<li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302752/codepen/delicious-apples/yellow-apple.png" alt="yellow apple"></li>
	                    			<li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302427/codepen/delicious-apples/orange-apple.png" alt="orange apple"></li>
	                    			<li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302285/codepen/delicious-apples/red-apple.png" alt="red apple"></li>
	                    		</ul>
	                    	</div> */}
	                    	<div className="description p-2">
	                    		<h3>DESCRIPCION</h3>
                                <p className="text-sm-left text-break" style={text}>{detail.descripcion}.</p>
	                    		<ul>
                                    <li className='text-uppercase'><span className='font-weight-bold'>Marca:</span> {detail.marca}.</li>
                                    <li className='text-uppercase'><span className='font-weight-bold'>Genero:</span> {detail.genero}.</li>
                                    <li className='text-uppercase'><span className='font-weight-bold'>Stock:</span> {detail.stock} unidades.</li>
                                </ul>
	                    	</div>
	                    	<button className="buy--btn">AÑADIR AL CARRITO</button>
	                    </div>
                    </section>
                </div>
            ))
        )
        :
        (
            <div className='d-flex justify-content-center align-items-center w-100 p-3' style={alto}>
                <div className="lds-hourglass"></div>
            </div>
        )}
    </div>
  )
}


export default ItemDetail