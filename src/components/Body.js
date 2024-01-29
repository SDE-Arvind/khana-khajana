import { Container } from '@mui/material';
import React from 'react';
import RestoItem from './RestoItem';

const container = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'pink',
    justifyContent: 'center'
}

const Body = () => {
    return <Container sx={container} fixed >
        {Array(100).fill(null).map((_, index) => (
            <RestoItem key={index} />
        ))}
    </Container>;
};

export default Body;