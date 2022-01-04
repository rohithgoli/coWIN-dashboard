// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'

import {
  BgContainer,
  DashboardContainer,
  LogoContainer,
  LogoImage,
  PageHeading,
  Heading,
  ViewContainer,
  FailureViewContainer,
  FailureViewImage,
  FailureMessage,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  loading: 'IN_PROGRESS',
  failure: 'FAILURE',
}

class CowinDashboard extends Component {
  state = {apiStatus: apiStatusConstants.initial, vaccinationData: ''}

  componentDidMount() {
    this.getCovidVaccinationData()
  }

  getCovidVaccinationData = async () => {
    this.setState({apiStatus: apiStatusConstants.loading})
    const url = 'https://apis.ccbp.in/covid-vaccination-data'
    const response = await fetch(url)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const updatedData = {
        last7DaysVaccinationData: fetchedData.last_7_days_vaccination,
        vaccinationByAgeData: fetchedData.vaccination_by_age,
        vaccinationByGenderData: fetchedData.vaccination_by_gender,
      }
      return this.setState({
        apiStatus: apiStatusConstants.success,
        vaccinationData: updatedData,
      })
    }
    return this.setState({apiStatus: apiStatusConstants.failure})
  }

  renderLoadingView = () => (
    <ViewContainer>
      <div data-testid="loader">
        <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
      </div>
    </ViewContainer>
  )

  renderFailureView = () => (
    <FailureViewContainer>
      <FailureViewImage
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
      />
      <FailureMessage>Something went wrong</FailureMessage>
    </FailureViewContainer>
  )

  renderSuccessView = () => {
    const {vaccinationData} = this.state
    const {
      last7DaysVaccinationData,
      vaccinationByAgeData,
      vaccinationByGenderData,
    } = vaccinationData
    return (
      <FailureViewContainer>
        <VaccinationCoverage
          last7DaysVaccinationData={last7DaysVaccinationData}
        />
        <VaccinationByGender
          vaccinationByGenderData={vaccinationByGenderData}
        />
        <VaccinationByAge vaccinationByAgeData={vaccinationByAgeData} />
      </FailureViewContainer>
    )
  }

  renderView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.loading:
        return this.renderLoadingView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.success:
        return this.renderSuccessView()
      default:
        return null
    }
  }

  render() {
    return (
      <BgContainer>
        <DashboardContainer>
          <LogoContainer>
            <LogoImage
              src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
              alt="website logo"
            />
            <PageHeading>Co-WIN</PageHeading>
          </LogoContainer>
          <Heading>CoWIN Vaccination in India</Heading>
          {this.renderView()}
        </DashboardContainer>
      </BgContainer>
    )
  }
}

export default CowinDashboard
