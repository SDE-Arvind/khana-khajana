import { Button, Card, Container, InputLabel } from '@mui/material';
import { MENU_ITEM_TYPE_KEY, MENU_URL, RESTAURANT_TYPE_KEY } from '../utils/constants';

import React from 'react'
import { addItem } from '../slice/cartSlice';
import { css } from '@emotion/css';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import useResMenuData from '../hooks/useMenuData';

export default function RestaurantDetails() {

    const dispatch = useDispatch();


    const restaurantDetail = css`
    MenuItem
    
    `

    const { id } = useParams();
    const [restaurant, menuItems] = useResMenuData(
        MENU_URL,
        id,
        RESTAURANT_TYPE_KEY,
        MENU_ITEM_TYPE_KEY
    );

    const MenuItem = ({ item }) => {

        const handleAddToCart = () => {
            dispatch(addItem(item));
        };

        return (<Card sx={{ justifyContent: 'space-between', marginBottom: 1, padding: 2, display: 'flex' }}>
            <div style={{ width: '80%' }}>
                <InputLabel sx={{ fontSize: 20 }}>{item?.name}</InputLabel>
                <InputLabel sx={{ fontSize: 15 }}>{item?.description}</InputLabel>

                <InputLabel sx={{ fontSize: 20 }}> {item?.defaultPrice || item?.price > 0
                    ? new Intl.NumberFormat("en-IN", {
                        style: "currency",
                        currency: "INR",
                    }).format((item?.defaultPrice || item?.price) / 100)
                    : ""}</InputLabel>
            </div>
            <Button variant="contained" onClick={handleAddToCart}>Add</Button>

        </Card >)
    }
    return (
        <Container>
            <Card sx={{ marginBottom: 2, padding: 4 }}>
                <InputLabel sx={{ fontSize: 30, textAlign: 'center', }}>{restaurant?.name}</InputLabel>
                <InputLabel sx={{ fontSize: 20, textAlign: 'center', }}>{restaurant?.city}</InputLabel>
            </Card>
            {menuItems.map((item) => {
                return <MenuItem item={item} />
            })}
        </Container >
    )
}
