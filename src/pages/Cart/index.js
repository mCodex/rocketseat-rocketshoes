import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
    MdRemoveCircleOutline,
    MdAddCircleOutline,
    MdDelete,
} from 'react-icons/md';

import { Container, Total, ProductTable } from './styles';

const Cart = () => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const renderProductRow = product => {
        const { id, title, price, image, amount } = product;

        return (
            <tr key={id.toString()}>
                <td>
                    <img src={image} alt={title} />
                </td>
                <td>
                    <strong>{title}</strong>
                    <span>{price}</span>
                </td>
                <td>
                    <div>
                        <button type="button">
                            <MdRemoveCircleOutline size={20} color="#7151c9" />
                        </button>
                        <input type="number" readOnly value={amount} />
                        <button type="button">
                            <MdAddCircleOutline size={20} color="#7151c9" />
                        </button>
                    </div>
                </td>
                <td>
                    <strong>{price}</strong>
                </td>
                <td>
                    <MdDelete size={20} color="#7151c9" />
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
                    <strong>R$</strong>
                </Total>
            </footer>
        </Container>
    );
};

export default memo(Cart);
