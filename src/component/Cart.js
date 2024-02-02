import { useDispatch, useSelector } from 'react-redux'

import { Button } from '@mui/material'
import CartItem from './CartItem';
import React from 'react'
import { clearCart } from '../slice/cartSlice';

const Cart = () => {
    const dispatch = useDispatch();

    const cartItems = useSelector((state) => state.cart.items)

    return (
        <div className="body-container" style={{ padding: 100 }}>
            <Button disabled={cartItems.length === 0} variant='contained' onClick={() => { dispatch(clearCart()) }}> CLEAR CART</Button>
            {cartItems.map((item) => { return <CartItem key={item?.id} item={item} /> })}
        </div>
    )
}
export default Cart