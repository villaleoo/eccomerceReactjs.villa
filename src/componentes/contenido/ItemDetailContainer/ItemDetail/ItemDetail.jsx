import React, { useContext } from 'react'
import { ItemCount } from './itemCount/ItemCount'
import './itemDetail.scss'
import { Link, useParams } from 'react-router-dom'
import { GlobalContext } from '../../../../context/GlobalStateContext'


const ItemDetail = ({item}) => {
	// const params = useParams()
	const {isInCart}= useContext(GlobalContext)

	let {img} = item
	console.log(img);
	console.log(item);
	
	
	let stylo2={
        with:'400',
		heigth:'400px'
    }
   
    let text={
        fontSize:'small'
    }

  return (
    <div className='containerItemDetail'>   
        <div className='containerDetail'>
            <div className="containerDetailFather">
	            <div className="productContainer">
	            	<div className="mediaProductContainer">
						<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  							<ol className="carousel-indicators">
								  {
									  img.map((index)=>
										  <li key={index} data-target="#carouselExampleIndicators" ></li>
									  )
								  }
  							  {/* <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
  							  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
  							  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li> */}
  							</ol>
  							<div className="carousel-inner">
								  {
									  item.img.map((img,index)=>
										<div key={index} className='carousel-item'>
											<img src={img} style={stylo2} alt='asd'/>
										</div>
									  )
								  }
  							  {/* <div className="carousel-item active">
  							    <img src="..." className="d-block w-100" alt="..."/>
  							  </div>
  							  <div className="carousel-item">
  							    <img src="..." className="d-block w-100" alt="..."/>
  							  </div>
  							  <div className="carousel-item">
  							    <img src="..." className="d-block w-100" alt="..."/>
  							  </div> */}
  							</div>
							<button class="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
    							<span class="carousel-control-prev-icon" aria-hidden="true"></span>
    							<span class="sr-only">Previous</span>
  							</button>
  							<button class="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
  								<span class="carousel-control-next-icon" aria-hidden="true"></span>
  								<span class="sr-only">Next</span>
  							</button>
						</div>
	            	</div>
					<div className='detailProductContainer'>

					</div>
	            </div>
	            <div className="p-4 ">
	            	<div className="">
	            		<h1>{item.name}</h1>
						
	            		
	            	</div>
	            	<div className="">
	            		$ <span>{item.price}</span>
	            	</div>
	            	<div className=" p-2">
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
								/>
							</div>
						)
					}
	            </div>
            </div>
        </div>
    </div>
  )
}


export default ItemDetail