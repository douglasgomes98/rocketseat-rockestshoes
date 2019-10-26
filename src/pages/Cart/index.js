import React, { Component } from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';
import { Container, ProductTable, Total } from './styles';

export default class Cart extends Component {
  state = {};

  render() {
    return (
      <Container>
        <ProductTable>
          <thead>
            <tr>
              <th> </th>
              <th>PRODUTO</th>
              <th>QTD</th>
              <th>SUBTOTAL</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
                <img
                  src="https://static.netshoes.com.br/produtos/tenis-vr-caminhada-confortavel-detalhes-couro-masculino/04/E74-0413-304/E74-0413-304_detalhe2.jpg?ims=326x"
                  alt="Tenis"
                />
              </th>
              <th>
                <strong>Tênis muito massa</strong>
                <span>R$129,90</span>
              </th>
              <th>
                <div>
                  <button type="button">
                    <MdRemoveCircleOutline size={20} color="#7159c1" />
                  </button>
                  <input type="number" readOnly value={1} />
                  <button type="button">
                    <MdAddCircleOutline size={20} color="#7159c1" />
                  </button>
                </div>
              </th>
              <th>
                <strong>R$258,80</strong>
              </th>
              <th>
                <button type="button">
                  <MdDelete size={20} color="#7159c1" />
                </button>
              </th>
            </tr>
          </tbody>
        </ProductTable>

        <footer>
          <button type="button">Finalizar Pedido</button>

          <Total>
            <span>Total</span>
            <strong>R$ 1920,20</strong>
          </Total>
        </footer>
      </Container>
    );
  }
}
