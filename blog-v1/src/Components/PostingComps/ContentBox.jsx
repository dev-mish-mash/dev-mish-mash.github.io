import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const WrapperDiv = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 5px 2px 2px 5px gray;
    border : 1px  gray;
    border-radius: 10px 10px 0px 0px;
    padding: 2px;
`;

const ThumbnailImg = styled.img`
    width : 10rem;
    height: 10rem;
    border-radius: 1rem;
`;

const ThumbnailDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 10rem;
    height : auto;
`;

const ContentBox = ({ imgSrc, contentName, uploadDate, history }) => {

    const handleClick = (e) => {
        history.push('/' + contentName);
        e.stopPropagation();
    };

    return (
        <WrapperDiv onClick={handleClick}>
            <ThumbnailImg src={imgSrc} loading='lazy' />
            <ThumbnailDiv>
                <h3 style={{ textAlign: "center" }}>{contentName}</h3>
                <h6 style={{ textAlign: "center" }}>{uploadDate}</h6>
            </ThumbnailDiv>
        </WrapperDiv >
    )
}

export default withRouter(ContentBox);