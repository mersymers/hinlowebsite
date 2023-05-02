import React from 'react'
import { PageBorderedText, PageDesDiv, PageDesText, PageNonBorderedText, PageRow, PageTextDiv, PageTitleDiv, PageWrapper } from './ServicePageStyles'

const ServicesPage = () => {
  return (
    <PageWrapper>
      <PageRow >
        <PageTextDiv>
          <PageNonBorderedText>Our</PageNonBorderedText>
          <PageBorderedText>Services</PageBorderedText>
        </PageTextDiv>

        <PageTitleDiv>
          <PageNonBorderedText fontSize='2.5rem'>
            House/Residential Cleaning
          </PageNonBorderedText>
        </PageTitleDiv>
        <PageDesDiv>
          <PageDesText>
            If you want a cleaner home more often without the work, Hinlo Services is the right service to contact! We’ll get your home cleaner and healthier than ever at rates that might be more cost-effective than you imagined. That means your home can have less dirt, germs,
            and grime more often at a price that makes housekeeping services a wise investment. The return on your investment includes a clean and tidy home without all the work, a healthier environment for your family, and more free time to enjoy the things you love.
          </PageDesText>
        </PageDesDiv>
        <PageTitleDiv>
          <PageNonBorderedText fontSize='2.5rem'>
            Office Cleaning
          </PageNonBorderedText>
        </PageTitleDiv>
        <PageDesDiv>
          <PageDesText>
            Hinlo Services understands the importance of finding office cleaning services you can count on to disinfect and clean your business/area. We are more than just the experts in home cleaning; we are experts in providing the healthy, commercial-level deep clean your business — and your customers — deserve.
            As a small business owner, getting the best return possible on your investments in human resources, marketing, and sales is critical to your success. Whether you're a retail store, service provider, or other small company, keeping your facility/office clean and maintained is good for business—and the bottom line.
          </PageDesText>
        </PageDesDiv>
        <PageTitleDiv>
          <PageNonBorderedText fontSize='2.5rem'>
            Event Cleaning
          </PageNonBorderedText>
        </PageTitleDiv>
        <PageDesDiv>
          <PageDesText>
          When you’re hosting out-of-town guests, throwing a party in your home, or you've simply fallen behind on housekeeping. And your house needs a one-time cleaning service, Hinlo Services has your back. 
          Whether we clean your place or house in an event or on a regular schedule, we get your home sparkling clean every time. 
          </PageDesText>
        </PageDesDiv>
        <PageTitleDiv>
          <PageNonBorderedText fontSize='2.5rem'>
            Sanitation Services
          </PageNonBorderedText>
        </PageTitleDiv>
        <PageDesDiv>
          <PageDesText>
          Sometimes you need your house cleaned from top to bottom; other times, you just need a specific area maintained. Hinlo Services has you covered with some of the most exclusive sanitation services available. Our unique cleaning services can tackle your extra cleaning needs and minimize bacteria and viruses that contribute to illness. 
          Hinlo Services uses cleaning and disinfecting products that meet our strict standards for effectiveness, safety, and environmental responsibility. 
          </PageDesText>
        </PageDesDiv>
      </PageRow>
    </PageWrapper>
  )
}

export default ServicesPage