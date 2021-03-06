import React, { memo, useState, useEffect, useCallback } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';

import { addToCartRequest } from '~/store/modules/cart/actions';

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
    const amount = useSelector(state =>
        state.cart.reduce((amount, product) => {
            amount[product.id] = product.amount;
            return amount;
        }, {})
    );
    const dispatch = useDispatch();

    const [products, setProducts] = useState([]);

    const loadDataFromAPI = useCallback(async () => {
        const productsFromAPI = await api.get('products');

        setProducts(productsFromAPI.data);
    }, []);

    useEffect(() => {
        loadDataFromAPI();
    }, [loadDataFromAPI]);

    const handleAddProduct = ({ id }) => dispatch(addToCartRequest(id));

    const renderProductItem = (product: Product) => {
        const { id, title, price, image } = product;
        return (
            <li key={id.toString()}>
                <img src={image} alt={title} />

                <strong>{title}</strong>
                <span>{moneyFormatter.format(price)}</span>
                <button type="submit" onClick={() => handleAddProduct(product)}>
                    <div>
                        <MdAddShoppingCart size={16} color="#fff" />{' '}
                        {amount[id] || 0}
                    </div>
                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
        );
    };

    return (
        <ProductList>
            {products.map(product => renderProductItem(product))}
        </ProductList>
    );
};

export default memo(Home);
