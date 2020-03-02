import React, { memo, useState, useEffect } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import shoeImg from '~/assets/images/shoe.jpg';

import { ProductList } from './styles';

const Home = () => {
    return (
        <ProductList>
            <li>
                <img src={shoeImg} alt="Shoe" />

                <strong>Tênis</strong>
                <span>R$</span>
                <button type="submit">
                    <div>
                        <MdAddShoppingCart size={16} color="#fff" />
                    </div>
                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
        </ProductList>
    );
};

export default memo(Home);
