import { Button } from '@mui/material'
import React from 'react'
import { css } from "@emotion/css"

const MenuItem = ({ children }) => {
    const listItem = css`
    margin-right: 20px;
`
    return (
        <Button className={listItem}>{children}</Button>
    )
}

export default MenuItem;