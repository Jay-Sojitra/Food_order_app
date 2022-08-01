import React from 'react';
import { Link } from 'react-router-dom';
import './Orders.css';
import { useCart } from '../context/Context';
import { useEffect } from 'react';
import { useState } from 'react';


function Orders() {

    const {
        state: { cart },
        dispatch,
    } = useCart();

    const [total, setTotal] = useState();

    useEffect(() => {
        setTotal(
            cart.reduce((acc, curr) => acc + Number(curr.price) * parseInt(curr.qty), 0)
        );
    }, [cart]);


    return (
        <>

            <div className={'_nav-menu active'}>
                <div className='_nav-menu-items'>
                    <div className='_navbar-toggle'>
                    </div>
                    <div className='_nav-text'>


                        <h2><b>My Orders</b></h2>

                    </div>
                    {
                        cart.length > 0 ?
                            <div>
                                <div className="center-col">
                                    <div className="container">

                                        <ul>
                                            {
                                                cart?.map((item, index) => {
                                                    return (

                                                        <div className="mt-3">
                                                            <div className='d-flex justify-content-center align-items-center flex-column '>
                                                                <div className='d-flex justify-content-around align-items-center flex-row items second_div'>

                                                                    <div className='img'>
                                                                        <img src={item.photo} className="card_img" alt="..." />
                                                                    </div>
                                                                    <div className='d-flex justify-content-center align-items-start flex-column text-left'>
                                                                        <div>{item.title}</div>
                                                                        <div className='font-weight-lighter quantity'>{item.quantity}g</div>
                                                                    </div>
                                                                    <div className='d-flex justify-content-between align-items-center'>
                                                                        <button className='btn btn-light'
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
                                                                        <button className='btn btn-light ml-3'
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

                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>


                                </div>
                                <div className="d-flex justify-content-around align-items-center mt-3">
                                    <div className="mr-5">Total </div>
                                    <div className="mr-2"><b>{total}</b>$</div>
                                </div>
                                <div className='checkout_btn d-flex justify-content-center align-items-center'>
                                    <Link to='/cart' className='ch_btn d-flex justify-content-center align-items-center'>
                                        <button className='btn btn-success _button '>Checkout</button>
                                    </Link>
                                </div>
                            </div>
                            :


                            <div className='d-flex justify-content-center align-items-center'>
                                <h3 className='d-flex justify-content-center align-items-center mt-5'>Empty Cart</h3>
                            </div>
                    }



                </div>
            </div>

        </>
    );
}

export default Orders;
