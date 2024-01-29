import { Button, Card, CardMedia, InputLabel } from '@mui/material'

import React from 'react'
import { css } from '@emotion/css'

export default function RestoItem() {

    const customButtonStyle = css`
    background-color: blue;
    color: white;
    font-size: 30px;
  `;
    return (
        <Card variant="outlined" sx={{ p: 2, m: 1, width: 330 }}>
            <CardMedia
                component="img"
                height="200"
                width='100'
                image="https://content.jdmagicbox.com/comp/kullu/d1/9999p1901.1901.180915023523.b6d1/catalogue/meerut-khana-khazana-mall-road-manali-restaurants-72112kmy3y.jpg?clr="
                alt="Paella dish"
            />
            <InputLabel className={customButtonStyle}>Restaurant Name</InputLabel>
            <InputLabel sx={{ fontSize: 20 }} >Restaurant description xdsfd fsdf sd sdf sdfds fdsfdsfdsfsd fds fds fdsfsdfds sd fds fdsf sdfsdsdfs sdff</InputLabel>
            <Button sx={{ fontSize: 20 }} className={customButtonStyle}>View Detail</Button>
        </Card>
    )
}
