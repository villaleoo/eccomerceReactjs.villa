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
          className={inputClassName} //{`form-control ${error.nombre && "is-invalid"}`}
          placeholder={placeholder}
        />
        {error.nombre && (
          <h6 className="text-danger my-2 text-uppercase">{error.nombre}</h6>
        )}
      </div>
    );
  };


export const Checkout = () => {
    const {cart,totalPrice} = useContext(GlobalContext)
    const {fetchGenerateTicket}= useFirebase()

    const [form, setForm] = useState({
        buyer: {
            name:'',
            surname:'',
            telephone:'',
            mail:'',
        },
        buyTotal:totalPrice(),
        items:cart
        }
    );

    const [error, setError]=useState({})
    

    const handleSubmit = (e)=>{
        console.log(form);
        fetchGenerateTicket({dataBuyer:form});
        
    }

    const handleChange= (e)=>{
        const{name,value} = e.target;
        setForm({
            ...form,         //me hace una copia de form, cambiando el buyer(linea 24)
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
                <div className='d-flex  justify-content-center container'>
                    <div className='window'>
                        <div className='order-info '>
                            <div className='order-info-content py-4 w-100 overflow-auto'>
                                <ul>
                                    {cart.map((item,index)=>
                                    <div className='d-flex justify-content-between my-3 bg-success' key={index}>
                                        <li>{item.name} <span className='text-danger'>x {item.quantity}</span></li>
                                        <li>${item.price}</li>
                                    </div>
                                    )}

                                </ul>
                            </div>
                        </div>
                        <div className='credit-info'>
                            <div className='credit-info-content'>
                                <h2>DATOS DEL COMPRADOR</h2>
                                <form onSubmit={handleSubmit} className='py-5 my-4'>
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
                                    <button type='submit' className='pay-btn'>Comprar💸</button>
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
    