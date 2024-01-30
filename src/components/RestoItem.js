import { Button, Card, CardMedia, InputLabel } from '@mui/material'

import { IMG_CDN_URL } from '../utils/constants';
import React from 'react'
import { css } from '@emotion/css'

export default function RestoItem({ item }) {

    const customButtonStyle = css`
    color: white;
  `;
    console.log("ITEM ", item)
    return (
        <Card variant="outlined" sx={{ p: 2, m: 1, width: 330 }}>

            <CardMedia
                component="img"
                height="200"
                width='100'
                image={IMG_CDN_URL + item?.cloudinaryImageId}
                alt="Paella dish"
            />
            <InputLabel className={customButtonStyle}>{item?.name}</InputLabel>
            <InputLabel >{item?.locality}</InputLabel>
            {/* <Button sx={{ fontSize: 12 }}>View Detail</Button> */}
        </Card>
    )
}
