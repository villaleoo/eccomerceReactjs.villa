import React, { useContext } from 'react'
import { ItemCount } from './itemCount/ItemCount'
import './itemDetail.scss'
import { Link, useParams } from 'react-router-dom'
import { GlobalContext } from '../../../../context/GlobalStateContext'
import { Carousel } from './carousel/Carousel'


const ItemDetail = ({item}) => {
	// const params = useParams()
	const {isInCart}= useContext(GlobalContext)

	let {img} = item
	
	

  return (
    <div className='containerItemDetail'>   
        <div className='containerDetail'>
            <div className="containerDetailFather">
	            <div className="productContainer">
	            	<div className="mediaProductContainer">
						<Carousel 
						productImgs={img}
						/>
	            	</div>
					<div className='detailProductContainer'>
						<div className="productName">
	            			<h1>{item.name}</h1>
						</div>
	            		<div className="productPrice">
	            			 <span>${item.price}</span>
	            		</div>
						<div className='productDetails'>
							<h3>Detalles del producto</h3>
	            			<ul>
								<li><span className='text-uppercase'>Categoria:</span> Deporte.</li>
                        	    <li><span className='text-uppercase'>Marca:</span> {item.mark}.</li>
                        	    <li><span className='text-uppercase'>Stock:</span> {item.stock} unidades.</li>
                        	</ul>
						</div>
						<div className='productCart'>
							{
								isInCart(item.id)  ?  (
									<div className='d-flex flex-column align-items-center finishBuying'>
										<p>En tu carrito <span>✔</span></p>
										<Link to='/cart' className='btn btn-success w-50'>Terminar compra</Link>
									</div>
									)
									:
									(
									<div className='w-100'>
										<ItemCount
										stock={item.stock}
										item={item}
										/>
									</div>
								)
							}
						</div>
					</div>
	            </div>
	            <div className="descriptionProduct">
	            	<h3>Descripción del producto</h3>
                    <p>{item.description}.</p>
	            </div>
            </div>
        </div>
    </div>
  )
}


export default ItemDetail