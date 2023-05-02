import React from 'react'
import styled from 'styled-components';

const ScrollWrapper = styled.div`
margin-top: 5rem;
box-sizing: border-box;
`

const ScrollColumn = styled.div`
float: left;
width: 33.3%;
margin-bottom: 16px;
padding: 0 8px;
box-sizing: border-box;

@media screen and (max-width: 650px) {
    width: 100%;
    display: block;
  }
`

const ScrollRow = styled.div`
display: flex;
flex-wrap: wrap;
`

const ScrollHeader = styled.h2`
font-size: 2.5rem;
margin-bottom: 2rem;
line-height: 1;
`
const ScrollImgDiv = styled.div`

`
const ScrollImg = styled.img`
width:100%;
`

const HeroLiveAuction = () => {
    return (
        <ScrollWrapper>
            <ScrollHeader>Live Auction</ScrollHeader>
            <ScrollRow>
                <ScrollColumn>
                    <ScrollImgDiv>
                        <ScrollImg src='/img/icon1.png' alt="PrivateAlert"></ScrollImg>
                    </ScrollImgDiv>
                    <ScrollImgDiv>
                        <ScrollImg src='/img/privatealert.png' alt="PrivateAlert"></ScrollImg>
                    </ScrollImgDiv>
                </ScrollColumn>
                <ScrollColumn>
                    <ScrollImgDiv>
                        <ScrollImg src='/img/icon2.png' alt="KnotContent"></ScrollImg>
                    </ScrollImgDiv>
                    <ScrollImgDiv>
                        <ScrollImg src='/img/knotcontent.png' alt="KnotContent"></ScrollImg>
                    </ScrollImgDiv>
                </ScrollColumn>
                <ScrollColumn>
                    <ScrollImgDiv>
                        <ScrollImg src='/img/icon3.png' alt="KnitInnocent"></ScrollImg>
                    </ScrollImgDiv>
                    <ScrollImgDiv>
                        <ScrollImg src='/img/knitinnocent.png' alt="KnitInnocent"></ScrollImg>
                    </ScrollImgDiv>
                </ScrollColumn>
            </ScrollRow>

        </ScrollWrapper>
    )
}

export default HeroLiveAuction