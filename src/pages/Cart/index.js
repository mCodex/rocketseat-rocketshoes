import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    MdRemoveCircleOutline,
    MdAddCircleOutline,
    MdDelete,
} from 'react-icons/md';

import {
    removeFromCart,
    updateAmountRequest,
} from '~/store/modules/cart/actions';

import moneyFormatter from '~/lib/moneyFormatter';

import { Container, Total, ProductTable } from './styles';

const Cart = () => {
    const cart = useSelector(state =>
        state.cart.map(product => ({
            ...product,
            subtotal: product.price * product.amount,
        }))
    );

    const total = useSelector(state =>
        state.cart.reduce(
            (total, product) => (total += product.price * product.amount),
            0
        )
    );

    const dispatch = useDispatch();

    const increment = product =>
        dispatch(updateAmountRequest(product.id, product.amount + 1));

    const decrement = product =>
        dispatch(updateAmountRequest(product.id, product.amount - 1));

    const handleRemoveItem = id => dispatch(removeFromCart(id));

    const renderProductRow = product => {
        const {
            id,
            title,
            // price,
            image,
            amount,
            subtotal,
            priceFormatted,
        } = product;

        return (
            <tr key={id.toString()}>
                <td>
                    <img src={image} alt={title} />
                </td>
                <td>
                    <strong>{title}</strong>
                    <span>{priceFormatted}</span>
                </td>
                <td>
                    <div>
                        <button
                            type="button"
                            onClick={() => decrement(product)}
                        >
                            <MdRemoveCircleOutline size={20} color="#7151c9" />
                        </button>
                        <input type="number" readOnly value={amount} />
                        <button
                            type="button"
                            onClick={() => increment(product)}
                        >
                            <MdAddCircleOutline size={20} color="#7151c9" />
                        </button>
                    </div>
                </td>
                <td>
                    <strong>{moneyFormatter.format(subtotal)}</strong>
                </td>
                <td>
                    <button type="button" onClick={() => handleRemoveItem(id)}>
                        <MdDelete size={20} color="#7151c9" />
                    </button>
                </td>
            </tr>
        );
    };

    return (
        <Container>
            <ProductTable>
                <thead>
                    <tr>
                        <th />
                        <th>PRODUTO</th>
                        <th>QTD</th>
                        <th>SUBTOTAL</th>
                        <th />
                    </tr>
                </thead>

                <tbody>{cart.map(product => renderProductRow(product))}</tbody>
            </ProductTable>

            <footer>
                <button type="submit">Finalizar Pedido</button>
                <Total>
                    <span>TOTAL</span>
                    <strong>{moneyFormatter.format(total)}</strong>
                </Total>
            </footer>
        </Container>
    );
};

export default memo(Cart);
