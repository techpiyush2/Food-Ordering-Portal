import React from 'react';
import Products from '../components/Products';

const Home = () => {
    return (
        <div>
            <h2 className="heading">Tasty Pizzas</h2>
            <section style={
                {
                    display : 'flex',
                    alignItems : 'center',
                    justifyContent : 'center'
                }
            }>
                <Products />
            </section>
        </div>
    );
};

export default Home;
