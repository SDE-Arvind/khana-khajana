import React, { useEffect, useState } from 'react'
import { addItem, removeItem } from '../slice/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

import { ITEM_IMG_CDN_URL } from '../utils/constants';

export default function MenuItem({ item }) {
    const dispatch = useDispatch();
    const itemsInCart = useSelector((state) => state.cart.items)
    const [currentItem, setCurrentItem] = useState(item)

    useEffect(() => {
        const itemInCart = itemsInCart.find((_item) => _item.id === item?.id)
        setCurrentItem(itemInCart || item)
    }, [itemsInCart, item])

    const handleAddToCart = () => {
        dispatch(addItem({ ...item }));
    };
    const handleRemoveFromCart = () => {
        dispatch(removeItem(item?.id));
    };

    return (
        <div className="menu-item" key={item?.id}>
            <div className="menu-item-details">
                <h3 className="item-title">{item?.name}</h3>
                <p className="item-cost">
                    {item?.price > 0
                        ? new Intl.NumberFormat("en-IN", {
                            style: "currency",
                            currency: "INR",
                        }).format(item?.price / 100)
                        : " "}
                </p>
                <p className="item-desc">{item?.description}</p>
            </div>
            <div className="menu-img-wrapper">
                {item?.imageId && (
                    <img
                        className="menu-item-img"
                        src={ITEM_IMG_CDN_URL + item?.imageId}
                        alt={item?.name}
                    />
                )}
                {
                    currentItem?.quantity > 0 ?
                        <div>
                            <button className="symbol-btn" onClick={handleRemoveFromCart}> - </button>
                            {"  " + currentItem.quantity + "  "}
                            <button className="symbol-btn" onClick={handleAddToCart}>+</button>
                        </div>
                        : <button className="add-btn" onClick={handleAddToCart}> ADD +</button>
                }
            </div>
        </div>
    )
}
