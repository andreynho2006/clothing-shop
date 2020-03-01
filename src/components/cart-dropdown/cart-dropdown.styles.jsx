import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CartDropdownComponent = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 80px;
  right: 70px;
  z-index: 5;
`;

export const CartItemsComponent = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const CartItemsEmptyMessage = styled.span`
  font-size: 18px;
  margin: 15px auto;
`;

export const CartItemsButton = styled(CustomButton)`
  margin: auto;
`;
