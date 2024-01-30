import React from 'react'
import { useParams } from 'react-router-dom'

export default function RestaurantDetails() {
    const { id } = useParams();
    return (
        <div>RestaurantDetails: {id}</div>
    )
}
