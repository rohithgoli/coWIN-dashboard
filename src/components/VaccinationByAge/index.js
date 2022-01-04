import {ResponsiveContainer, PieChart, Pie, Cell, Legend} from 'recharts'
import {ChartBgContainer, ChartTitle} from './styledComponents'

// Write your code here
const VaccinationByAge = props => {
  const {vaccinationByAgeData} = props

  const renderByAgePieChart = () => (
    <>
      <ChartTitle>Vaccination by age</ChartTitle>

      <ResponsiveContainer width={1000} height={500}>
        <PieChart>
          <Pie
            cx="50%"
            cy="50%"
            data={vaccinationByAgeData}
            startAngle={0}
            endAngle={360}
            innerRadius="40%"
            outerRadius="70%"
            dataKey="count"
          >
            <Cell name="18-44" fill="#2d87bb" />
            <Cell name="44-60" fill="#a3df9f" />
            <Cell name="Above 60" fill="#64c2a6" />
          </Pie>
          <Legend
            iconType="circle"
            layout="horizontal"
            horizontalAlign="middle"
            align="center"
          />
        </PieChart>
      </ResponsiveContainer>
    </>
  )

  return <ChartBgContainer>{renderByAgePieChart()}</ChartBgContainer>
}

export default VaccinationByAge
