import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/Context';
import { useEffect } from 'react';
import { useState } from 'react';
import './CheckOut.css';


function Checkout() {

    const {
        state: { cart },
        dispatch,
    } = useCart();


    const [total, setTotal] = useState();

    useEffect(() => {
        setTotal(
            cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
        );
    }, [cart]);


    return (
        <>


            <div className="d-flex justify-content-center align-items-center flex-column " >
                <div className="d-flex justify-content-center align-items-center flex-column   _container">
                    <h2>Your Orders</h2>
                    {
                        cart.length > 0 ?
                            <>
                                <div className="d-flex justify-content-center align-items-center flex-column ">
                                    <ul>
                                        {
                                            cart?.map((item, index) => {
                                                return (
                                                    <>
                                                        <div className="mt-3">
                                                            <div className='d-flex justify-content-center align-items-center flex-column '>
                                                                <div className='d-flex justify-content-around align-items-center flex-row items _main-div'>

                                                                    <div className='cart_img'>
                                                                        <img src={item.photo} className="card_img" alt="..." />
                                                                    </div>
                                                                    <div className='d-flex justify-content-center align-items-start flex-column text-left'>
                                                                        <div className='cart_title'>{item.title}</div>
                                                                        <div className='font-weight-lighter cart_quantity'>{item.quantity}g</div>
                                                                    </div>
                                                                    <div className='d-flex justify-content-between align-items-center'>
                                                                        <button className='btn btn-success px-3'
                                                                            value={item.qty}
                                                                            onClick={(e) =>
                                                                                dispatch({
                                                                                    type: "INCREMENT_QTY",
                                                                                    payload: {
                                                                                        id: item.id,
                                                                                        qty: e.target.value,
                                                                                    },
                                                                                })
                                                                            }
                                                                        >+</button>
                                                                        <span>{item.qty}</span>
                                                                        <button className='btn btn-success px-3 ml-3'
                                                                            value={item.qty}
                                                                            onClick={(e) =>
                                                                                dispatch({
                                                                                    type: "DECREMENT_QTY",
                                                                                    payload: {
                                                                                        id: item.id,
                                                                                        qty: e.target.value,
                                                                                    },
                                                                                })
                                                                            }> - </button>
                                                                    </div>

                                                                    <div><b>${item.price}</b></div>
                                                                    <span
                                                                        className='cancle'
                                                                        onClick={() =>
                                                                            dispatch({
                                                                                type: "REMOVE_FROM_CART",
                                                                                payload: item,
                                                                            })
                                                                        }>x</span>

                                                                </div>


                                                            </div>
                                                        </div>
                                                        <hr />
                                                    </>

                                                )
                                            })
                                        }
                                    </ul>
                                </div>


                                <div className="d-flex justify-content-around align-items-center cart_total">
                                    <div ><b className="total">Total</b> </div>
                                    <div><b className="total">{total}$</b></div>
                                </div>
                            </> :
                            <h4 className="mt-3">Empty List</h4>
                    }


                </div>
                <div className="mt-5">
                    <Link to='/'>
                        <button type="button" class="btn btn-info">Go To Home</button>
                    </Link>
                </div>

            </div>



        </>
    );
}

export default Checkout;
