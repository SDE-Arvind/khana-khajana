import { Container } from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react';
import RestoItem from './RestoItem';
import { URL } from '../utils/constants';
import useResData from '../hooks/useResData';

const container = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'pink',
    justifyContent: 'center'
}



const Body = () => {

    const [allrestaurnats] = useResData(URL)

    return <Container sx={container} fixed >
        {allrestaurnats.map((item, index) => (
            <Link
                to={"/restaurant/" + item?.info?.id}
            >
                <RestoItem key={item?.info?.id} item={item?.info} />
            </Link>
        ))}
    </Container>;
};

export default Body;