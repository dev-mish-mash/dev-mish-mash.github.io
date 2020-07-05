import React from 'react';
import styled from 'styled-components';
import ContentBox from '../PostingComps/ContentBox';
import testImg from '../../img/testImg.png';

class DevContents {
    static items = [
        {
            imgSrc: testImg,
            contentName: 'test',
            uploadDate: '2020.07.04'
        }
    ]
}

const ContainerDiv = styled.div`
    width: 1000px;
    margin: 5rem auto;
    display: flex;
    justify-content: space-between;
    align-items: top;
`;

const WebDev = () => {
    return (
        <ContainerDiv>
            {DevContents.items.map((itemProps, index) => {
                return <ContentBox { ...itemProps } key={index} />
            })}
        </ContainerDiv>
    )
}

export default WebDev;
