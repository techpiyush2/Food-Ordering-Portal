import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';

const Cart = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.cart);
    const handleRemove = (productId) => {
        dispatch(remove(productId));
    };

    return (
        <div>
            <h3>You have ordered:</h3>
            <div className="cartWrapper">
                {products.map((product) => (
                    <div key={product._id} className="cartCard">
                        <img src={product.image} alt="" />
                        <h5>{product.name}</h5>
                        <p>{product.description}</p>
                        <h5> Price :{product.price}</h5>
                        <button
                            className="btn"
                            onClick={() => handleRemove(product.id)}
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>
           <div style={{margin : 'auto', textAlign : 'center'}}>
           <button className='btn'>Place Order</button>
           </div>
        </div>
    );
};

export default Cart;
