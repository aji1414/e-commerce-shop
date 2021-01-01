import styled from "styled-components";
import CustomButton from "../CustomButton/CustomButton.component";

export const CartDropdownContainer = styled.div`
position: absolute;
width: 240px;
height: 440px;
display: flex;
flex-direction: column;
padding: 20px;
border: 1px solid black;
background-color: white;
top: 90px;
right: 40px;
z-index: 5;
`;

export const CartTotal = styled.span`
    margin-bottom:20px;
    font-weight: 800;
    font-size: 1.3em;
`;

export const EmptyMessageContainer = styled.span`
font-size: 18px;
margin: 50px auto;
`;

export const CartItemsContainer = styled.div`
height: 240px;
display: flex;
flex-direction: column;
overflow: scroll;
`;

export const ClearButtonContainer = styled(CustomButton)`
margin-top: 10px;
background:red;
`;