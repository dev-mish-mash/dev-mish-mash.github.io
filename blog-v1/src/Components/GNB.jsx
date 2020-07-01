import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderDiv = styled.div`
    display: flex;
    width: auto;
    align-items: center;
    justify-content: center;
`;

const HeaderLi = styled.li`
    display: inline;
    margin : 1rem;
`;

const GNB = () => {
    return (
        <HeaderDiv>
            <Link to='/'>
                <h1>dev-mish-mash</h1>
            </Link>
            <ul>
                <HeaderLi>
                    <Link to='/WebDev'>WebDev</Link>
                </HeaderLi>
                <HeaderLi>
                    <Link to='Publications'>Publications</Link>
                </HeaderLi>
                <HeaderLi>
                    <Link to='AboutMe'>AboutMe</Link>
                </HeaderLi>
            </ul>
        </HeaderDiv>
    )
}


export default GNB;