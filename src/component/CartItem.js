import { Card, InputLabel } from '@mui/material';

import { ITEM_IMG_CDN_URL } from '../utils/constants';
import React from 'react'
import deleteImage from '../Images/delete.png'
import { removeItem } from '../slice/cartSlice';
import { useDispatch } from 'react-redux';

export default function CartItem({ item }) {
    const dispatch = useDispatch();

    const deleteItem = () => {
        dispatch(removeItem(item?.id))
    }

    return (
        <Card sx={{ padding: 1, margin: 1, display: 'flex', justifyContent: 'space-between' }}>

            <div style={{ width: '70%', display: 'flex', flexDirection: 'row' }}>
                {item?.imageId && (
                    <img
                        className="cart-item-img"
                        src={ITEM_IMG_CDN_URL + item?.imageId}
                        alt={item?.name}
                    />
                )}
                <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 5 }}>

                    <InputLabel sx={{ fontSize: 20, }}>{item?.name}</InputLabel>
                    <InputLabel sx={{ fontSize: 15 }}> {item?.price > 0
                        ? new Intl.NumberFormat("en-IN", {
                            style: "currency",
                            currency: "INR",
                        }).format(item?.price / 100)
                        : " "}
                    </InputLabel>

                </div>
            </div>
            <img alt={'delete'} onClick={deleteItem} height={30} src={deleteImage} />
        </Card >

    )
}
