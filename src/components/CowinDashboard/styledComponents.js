// Style your elements here
import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #161625;
  font-family: 'Roboto';
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export const DashboardContainer = styled(BgContainer)`
  width: 85%;
  background-color: transparent;
  margin: 20px 0px;
  align-items: flex-start;
`

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

export const LogoImage = styled.img`
  height: 50px;
  width: 50px;
  margin-right: 16px;
`

export const PageHeading = styled.h1`
  color: #2cc6c6;
  font-size: 24px;
`
export const Heading = styled.h1`
  color: #cbd5e1;
`
export const ViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 100%;
  min-height: 100vh;
`

export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`

export const FailureViewImage = styled.img`
  width: 50%;
`
export const FailureMessage = styled.h1`
  color: #ffffff;
  padding: 0px;
`
