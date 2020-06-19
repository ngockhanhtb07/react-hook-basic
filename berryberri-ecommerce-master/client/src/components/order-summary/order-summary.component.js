import React from 'react';

import { MediumBlockContainer,
         ImageContainer,
         OrderContainer,
         Badge
    } from './order-summary.styles';

import { RupiahFormat } from '../../utils/utils';

const OrderSummary = ({item : {imageUrl, price, quantity, name}}) => (
    <OrderContainer>
        <MediumBlockContainer>
            <ImageContainer>
                <img src={imageUrl} width='100%' height='100%' alt="logo-lalala"/>
                <Badge>
                    {quantity}
                </Badge>
            </ImageContainer>
        
        </MediumBlockContainer>
        <MediumBlockContainer>
            <span> {name}</span>
        </MediumBlockContainer>
        <MediumBlockContainer>
            <span> {RupiahFormat(price)} x {quantity}</span>
        </MediumBlockContainer>
        <MediumBlockContainer>
            <span>{RupiahFormat(price*quantity)}</span>
        </MediumBlockContainer>
    </OrderContainer>
);

export default OrderSummary;