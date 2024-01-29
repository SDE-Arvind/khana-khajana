import { Switch, TextField } from '@mui/material';

import MenuItem from './MenuItem';
import companyLogo from '../icons/logo.jpeg';
import { css } from "@emotion/css"
import { useState } from 'react';

const container = css`
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px 10px 10px 10px;
border: 1px solid #ccc
`

const listView = css`
display: flex;
list-style: none;
flex-direction:row;
margin-right:30px;
`

export const Header = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(true)
    const toggleTheme = () => {
        setIsDarkTheme(prev => !prev)
    }
    const menuItems = ["Home", "About", "Help", "Contact"];
    return (
        <div className={container}>
            <img height={50} width={50} alt="logo" src={companyLogo} />

            <TextField id="outlined-basic" label="Search" variant="outlined" />

            <div style={{ display: 'flex', alignItems: 'center' }}>
                <ul className={listView}>
                    {
                        menuItems.map(item => {
                            return <MenuItem>{item}</MenuItem>
                        })
                    }

                </ul>

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