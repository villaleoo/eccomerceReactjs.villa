import React, { useContext, useEffect, useState } from 'react'
import { ItemCount } from './itemCount/ItemCount'
import './itemDetail.scss'
import { Link, useParams } from 'react-router-dom'
import { GlobalContext } from '../../../../context/GlobalStateContext'


const ItemDetail = ({item}) => {
	const params = useParams()
	const {isInCart}= useContext(GlobalContext)
	
	console.log(item);
    let alto={
        height:'700px'
    }
    let text={
        fontSize:'small'
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
	            			{/* <img src={item.img} alt="green apple slice"/> */}
							<p className='text-center h-100 d-flex flex-column justify-content-center align-items-center'>a esto lo voy a reemplazar por un carrousel con imagenes y voy a modificar todo el itemDetail</p>
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
	            		<h1>{item.name}</h1>
	            		{/* <span>COD: 45999</span> */}
	            	</div>
	            	<div className="price">
	            		$ <span>{item.price}</span>
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
                        <p className="text-sm-left text-break" style={text}>{item.description}.</p>
	            		<ul>
                            <li className='text-uppercase'><span className='font-weight-bold'>Marca:</span> {item.mark}.</li>
                            <li className='text-uppercase'><span className='font-weight-bold'>Stock:</span> {item.stock} unidades.</li>
                        </ul>
	            	</div>
					{
						isInCart(item.id)  ?  (
							<div className='d-flex flex-column align-items-center'>
								<p className=''>En tu carrito ✔</p>
								<Link to='/cart' className='btn btn-success'>Terminar compra</Link>
							</div>
							)
							:
							(
							<div className='w-100'>
								<ItemCount
								stock={item.stock}
								item={item}
								// onAdd={onAdd}
								/>
							</div>
						)
					}
	            </div>
            </section>
        </div>
    </div>
  )
}


export default ItemDetail