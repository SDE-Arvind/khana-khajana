import { Button, Card, Container, InputLabel } from '@mui/material'
import { clearCart, removeItem } from '../slice/cartSlice';
import { useDispatch, useSelector } from 'react-redux'

import React from 'react'

export default function Cart() {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items)


    const CardItem = ({ item }) => {
        const deleteItem = () => {
            dispatch(removeItem(item?.id))
        }
        return (
            <Card sx={{ padding: 1, margin: 1, display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ width: '70%', display: 'flex', flexDirection: 'column' }}>
                    <InputLabel sx={{ fontSize: 20 }}>{item?.name}</InputLabel>
                    <InputLabel sx={{ fontSize: 15 }}>{item?.description}</InputLabel>
                </div>
                <Button variant='outlined' onClick={deleteItem}>delete</Button>
            </Card>
        )
    }
    return (
        <Container>
            <Button disabled={cartItems.length === 0} variant='contained' onClick={() => { dispatch(clearCart()) }}> CLEAR CART</Button>
            {cartItems.map((item) => { return <CardItem key={item?.id} item={item} /> })}</Container>
    )
}
