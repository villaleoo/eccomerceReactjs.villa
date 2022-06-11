import React, { useContext } from 'react'
import './checkout.scss'
import { useState } from 'react';
import { GlobalContext } from '../../../../../context/GlobalStateContext';
import { useFirebase } from '../../../../../hooks/useFirebase';
import { CartEmpty } from '../cartEmpty/CartEmpty';
import Swal from 'sweetalert2'


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
        <p className="text-danger my-2">{error.nombre}</p>
      )}
      </div>
    );
  };

export const Checkout = () => {
    let styleCartEmpty ={
        marginTop: '120px',
        heigth: 'calc (100vh-240px)'
    }

    const {cart,totalPrice,clear,verificationFormCompleted} = useContext(GlobalContext)
    const {fetchGenerateTicket}= useFirebase()

    const [form, setForm] = useState({
        buyer: {
            nombre:'',
            apellido:'',
            telefono:'',
            mail:''},
        buyTotal:totalPrice(),
        items:cart,
        }
    );

    const [error, setError]=useState({})
    const { buyer: {nombre, apellido, telefono, mail}}= form;

    
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        if (verificationFormCompleted([nombre, apellido,telefono, mail] )){
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Campos obligatorios incompletos.',
                showConfirmButton: false,
                timer: 1700
              })
        }else{
            fetchGenerateTicket({dataBuyer:form});
            clear()
        }
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
        const {name, value}= e.target; 
        console.log(name);
        if(value === ''){
            setError({...error, [name]:"Este campo es obligatorio!"});
            return;
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
                                <div className='buying'>
                                    <h3>DATOS DEL COMPRADOR</h3>
                                </div>  
                                <form onSubmit={handleSubmit} className='formContainer py-5 my-4'>
                                    {Object.keys(form.buyer).map((key,index)=>
                                        <Input
                                        key={index}
                                        className='mb-3 w-75'
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
                <div style={styleCartEmpty}>
                    <CartEmpty/>
                </div>
            
        }
      </>
    )
}
    