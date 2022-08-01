import React from 'react'
import { useCart } from '../context/Context';
import './Cards.css';


const Cards = () => {
    const {
        state: { cart },
        dispatch,
    } = useCart();

    console.log('cart', cart);
    const {
        state: { products }
    } = useCart();


    return (
        <div className='d-flex justify-content-center align-items-center'>
            <div className='card_container d-flex justify-content-between align-items-center flex-wrap mt-5'>
                {
                    products.map((item, i) => {
                        return (
                            <div>
                                <div className="bs1 card" style={{ width: '14rem' }}>
                                    <img src={item.photo} className="card-img-top _card_img" alt="..." />
                                    <div className={`card-body ${item.c_name}`}>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <h5 className="card-title">{item.title}</h5>
                                            <p className="card-text mb-2 p1">{item.quantity}g</p>
                                        </div>

                                        <p className="card-text"><b>${item.price}</b></p>
                                        {cart.some((p) => p.id === item.id) ? (
                                            <button
                                                type="button" class="btn btn-light"
                                                variant="danger"
                                                onClick={() =>
                                                    dispatch({
                                                        type: "REMOVE_FROM_CART",
                                                        payload: item,
                                                    })
                                                }
                                            >
                                                Remove from Cart
                                            </button>
                                        ) : (
                                            <button
                                                type="button" class="btn btn-light"
                                                onClick={() =>
                                                    dispatch({
                                                        type: "ADD_TO_CART",
                                                        payload: item,
                                                    })
                                                }
                                            >
                                                Add to Cart
                                            </button>
                                        )}
                                        

                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )

}

export default Cards
