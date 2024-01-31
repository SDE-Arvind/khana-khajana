import { Switch, TextField } from '@mui/material';

import { Link } from 'react-router-dom';
import MenuItem from './MenuItem';
import companyLogo from '../icons/logo.jpeg';
import { css } from "@emotion/css"
import { useSelector } from 'react-redux';
import { useState } from 'react';

const container = css`
position: fixed;
top: 0;
width: 100%;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px 10px 10px 10px;
`

const listView = css`
display: flex;
list-style: none;
flex-direction:row;
margin-right:30px;
`

export const Header = () => {
    const cartItems = useSelector((state) => state.cart.items)
    const [isDarkTheme, setIsDarkTheme] = useState(true)
    const toggleTheme = () => {
        setIsDarkTheme(prev => !prev)
    }
    const menuItems = [{ title: "Home", to: "/" }, { title: "About", to: "/about" }, { title: "Help", to: "/help" }, { title: "Contact", to: "/contact" }];
    return (
        <div className={container}>
            <Link to="/">
                <img height={50} width={50} alt="logo" src={companyLogo} />
            </Link>
            <TextField id="outlined-basic" label="Search" variant="outlined" />

            <div style={{ display: 'flex', alignItems: 'center' }}>
                <ul className={listView}>
                    {
                        menuItems.map(item => {
                            return <Link key={item?.id} to={item.to}> <MenuItem >{item.title}</MenuItem></Link>
                        })
                    }

                </ul>
                <Link to={'/cart'}> <MenuItem>Cart ({cartItems?.length})</MenuItem></Link>
                dark
                <Switch
                    value="off"
                    checked={isDarkTheme}
                    onChange={toggleTheme}
                    inputProps={{ "aria-label": '' }}

                />light
            </div>
        </div >
    )
}