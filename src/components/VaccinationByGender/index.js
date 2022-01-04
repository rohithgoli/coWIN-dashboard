// Write your code here
import {ResponsiveContainer, PieChart, Pie, Legend, Cell} from 'recharts'
import {ChartBgContainer, ChartTitle} from './styledComponents'

const VaccinationByGender = props => {
  const {vaccinationByGenderData} = props

  const renderVaccinationByGenderPieChart = () => (
    <>
      <ChartTitle>Vaccination by gender</ChartTitle>
      <ResponsiveContainer width={1000} height={500}>
        <PieChart>
          <Pie
            cx="50%"
            cy="50%"
            data={vaccinationByGenderData}
            startAngle={180}
            endAngle={0}
            innerRadius="40%"
            outerRadius="70%"
            dataKey="count"
          >
            <Cell name="Male" fill="#f54394" />
            <Cell name="Female" fill="#5a8dee" />
            <Cell name="Others" fill="#2cc6c6" />
          </Pie>
          <Legend
            iconType="circle"
            layout="horizontal"
            align="center"
            horizontalAlign="middle"
          />
        </PieChart>
      </ResponsiveContainer>
    </>
  )

  return (
    <ChartBgContainer>{renderVaccinationByGenderPieChart()}</ChartBgContainer>
  )
}

export default VaccinationByGender
