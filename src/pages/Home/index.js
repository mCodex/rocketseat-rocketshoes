import React, { memo, useState, useEffect, useCallback } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import moneyFormatter from '~/lib/moneyFormatter';

import api from '~/services/api';

import { ProductList } from './styles';

type Product = {
    id: Number,
    title: String,
    price: Number,
    image: String,
};

const Home = () => {
    const [products, setProducts] = useState([]);

    const loadDataFromAPI = useCallback(async () => {
        const productsFromAPI = await api.get('products');

        const data = productsFromAPI.data.map(product => ({
            ...product,
            price: moneyFormatter.format(product.price),
        }));

        setProducts(data);
    }, []);

    useEffect(() => {
        loadDataFromAPI();
    }, [loadDataFromAPI]);

    const renderProductItem = ({ id, title, price, image }: Product) => (
        <li key={id.toString()}>
            <img src={image} alt="Shoe" />

            <strong>{title}</strong>
            <span>{price}</span>
            <button type="submit">
                <div>
                    <MdAddShoppingCart size={16} color="#fff" />
                </div>
                <span>ADICIONAR AO CARRINHO</span>
            </button>
        </li>
    );

    return (
        <ProductList>
            {products.map(product => renderProductItem(product))}
        </ProductList>
    );
};

export default memo(Home);
