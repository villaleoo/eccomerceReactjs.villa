import React, { useContext } from 'react'
import './checkout.scss'
import { useState } from 'react';
import { GlobalContext } from '../../../../../context/GlobalStateContext';
import { useFirebase } from '../../../../../hooks/useFirebase';


const Input = ({
    className,
    type,
    name,
    value,
    inputClassName,
    onChange,
    onBlur,
    placeholder,
    error,
  }) => {
    return (
      <div className={className}>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={(e) => onBlur(e)}
          className={inputClassName} 
          placeholder={placeholder}
        />
        {error.nombre && (
          <h6 className="text-danger my-2 text-uppercase">{error.nombre}</h6>
        )}
      </div>
    );
  };


export const Checkout = () => {

    const {cart,totalPrice,clear} = useContext(GlobalContext)
    const {fetchGenerateTicket}= useFirebase()

    const [form, setForm] = useState({
        buyer: {
            Nombre:'',
            Apellido:'',
            Telefono:'',
            Mail:'',
        },
        buyTotal:totalPrice(),
        items:cart
        }
    );

    const [error, setError]=useState({})
    

    const handleSubmit = ()=>{
        fetchGenerateTicket({dataBuyer:form});
        clear()
        
    }
    

    const handleChange= (e)=>{
        const{name,value} = e.target;
        setForm({
            ...form,         //me hace una copia de form, cambiando el buyer
            buyer: {        
                ...form.buyer, 
                [name]:value,
            },
        })
    }

    const handleBlur= (e) =>{
        const {nameKey, valueOfKey}= e.target;
        if(valueOfKey === ''){
            setError({...error, [nameKey]:"Este campo es obligatorio"});
            return
        }
        setError({})
    }
    
    
    return (
        <>  
            {cart.length>0 ? 
                <div className='checkoutContainer'>
                    <div className='window'>
                        <div className='order-info'>
                            <h4 >Tus productos:</h4>
                            <div className='order-info-content py-4 overflow-auto'>
                                <ul className='p-0'>
                                    {cart.map((item,index)=>
                                    <div className='m-3 itemsBuy' key={index}>
                                        <div className='itemQuantity'>
                                            <li>
                                                <span className='text-danger'>x{item.quantity}</span>
                                            </li>
                                        </div>
                                        <div className='itemName'>
                                            <li>- {item.name} </li>
                                        </div>
                                        <div className='itemPrice'>
                                            <li>${item.price}</li>
                                        </div>
                                    </div>
                                    )}
                                </ul>
                            </div>
                            <div className='totalBuy pt-5'>
                                <h5>Total: ${totalPrice()}</h5>
                            </div>
                        </div>
                        <div className='credit-info'>
                            <div className='credit-info-content'>
                                <h2>DATOS DEL COMPRADOR</h2>
                                <form className='py-5 my-4'>
                                    {Object.keys(form.buyer).map((key,index)=>
                                        <Input
                                        key={index}
                                        className='mb-3'
                                        type='text'
                                        name={`${key}`}
                                        value={key.value}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        inputClassName={`form-control ${error[key] && "is-invalid"}`}
                                        placeholder={`${key}`}
                                        error={error}
                                        />
                                    )}
                                    <button type='button' onClick={handleSubmit} className='pay-btn'>Comprar💸</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            :
            <h3>carrito vacio</h3>
        }
      </>
    )
}
    