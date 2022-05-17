import React, { useContext, useEffect, useState } from 'react'
import { ItemCount } from './itemCount/ItemCount'
import './itemDetail.scss'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../../../context/GlobalStateContext'
import { Item } from '../../ItemListContainer/ItemList/Items/Item'




const ItemDetail = ({item}) => {
	
	const {cart, addToCart} = useContext(GlobalContext)

	const {quantityToCart, setQuantityToCart}=useState(1)
	
    let alto={
        height:'700px'
    }
    let text={
        fontSize:'small'
    }

	


	
	function onAdd (quantityToCart){
		console.log(quantityToCart);

		const counterAdd = document.getElementById("sumar")
		const stockLimited= document.getElementById("noStock")

		if(quantityToCart == item.stock){
			stockLimited.innerHTML=`No hay mas unidades en stock!`
			counterAdd.className='d-none'
		}else{
			stockLimited.innerHTML=''
			counterAdd.className='d-inline'
		}
			
	}

	
  return (
    <div className='d-flex w-100'>   
        <div style={alto} className='d-flex w-100 justify-content-center '>
            <section className="product bg-warning">
	            <div className="product__photo">
	            	<div className="photo-container">
	            		<div className="photo-main">
	            			{/* <div className="controls">
	            				<i className="material-icons">share</i>
	            				<i className="material-icons">favorite_border</i>
	            			</div> */}
	            			<img src={item.img} alt="green apple slice"/>
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
	            		<h1>{item.nombre}</h1>
	            		{/* <span>COD: 45999</span> */}
	            	</div>
	            	<div className="price">
	            		$ <span>{item.precio}</span>
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
                        <p className="text-sm-left text-break" style={text}>{item.descripcion}.</p>
	            		<ul>
                            <li className='text-uppercase'><span className='font-weight-bold'>Marca:</span> {item.marca}.</li>
                            <li className='text-uppercase'><span className='font-weight-bold'>Genero:</span> {item.genero}.</li>
                            <li className='text-uppercase'><span className='font-weight-bold'>Stock:</span> {item.stock} unidades.</li>
                        </ul>
	            	</div>
					<ItemCount
					onAdd={onAdd}
					stock={item.stock}
					/>
					<button onClick={addToCart} className="buy--btn">AÑADIR AL CARRITO</button>
	            </div>
            </section>
        </div>
    </div>
  )
}


export default ItemDetail