import React from 'react'
import { css } from '@emotion/css'

export default function Help() {
    const container = css`
    display:flex;
    justify-content: center;
    font-size:40px
    `

    return (
        <div className={container}>This is Help section</div>
    )
}
