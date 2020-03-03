import React, { memo } from 'react';

import {
    MdRemoveCircleOutline,
    MdAddCircleOutline,
    MdDelete,
} from 'react-icons/md';
import shoeImg from '~/assets/images/shoe.jpg';

import { Container, Total, ProductTable } from './styles';

const Cart = () => {
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

                <tbody>
                    <tr>
                        <td>
                            <img src={shoeImg} alt="Tenis" />
                        </td>
                        <td>
                            <strong>Tênis</strong>
                            <span>R$</span>
                        </td>
                        <td>
                            <div>
                                <button type="button">
                                    <MdRemoveCircleOutline
                                        size={20}
                                        color="#7151c9"
                                    />
                                </button>
                                <input type="number" readOnly value={1} />
                                <button type="button">
                                    <MdAddCircleOutline
                                        size={20}
                                        color="#7151c9"
                                    />
                                </button>
                            </div>
                        </td>
                        <td>
                            <strong>R$</strong>
                        </td>
                        <td>
                            <MdDelete size={20} color="#7151c9" />
                        </td>
                    </tr>
                </tbody>
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
