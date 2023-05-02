import React from 'react'
import { PBorderedText, PDiv, PHrLines, PImg, PImgDiv, PNonBorderedText, PTextDiv, PWrapper } from './PortfolioStyles'
import PortfolioImages from './PortfolioImages'

const Portfolio = () => {
  return (
    <PWrapper>
      <PDiv>
            <PHrLines>Portfolio</PHrLines>
            <PTextDiv>
                <PNonBorderedText>Awesome</PNonBorderedText>
                <PBorderedText>Portfolio</PBorderedText>
            </PTextDiv>
            <PortfolioImages/>
            <PImgDiv>
              <PImg src='/img/partners.png' alt="Hinlo Services" />
            </PImgDiv>
      </PDiv>
    </PWrapper>
  )
}

export default Portfolio