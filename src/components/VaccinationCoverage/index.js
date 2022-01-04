// Write your code here
import {
  BarChart,
  Bar,
  XAxis,
  Legend,
  ResponsiveContainer,
  YAxis,
} from 'recharts'
import {ChartBgContainer, ChartTitle} from './styledComponents'

const VaccinationCoverage = props => {
  const {last7DaysVaccinationData} = props

  const DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  const renderBarChart = () => (
    <>
      <ChartTitle>Vaccination Coverage</ChartTitle>
      <ResponsiveContainer width={1000} height={500}>
        <BarChart data={last7DaysVaccinationData} margin={{top: 5}}>
          <XAxis
            dataKey="vaccine_date"
            tick={{stroke: 'gray', strokeWidth: 1}}
          />
          <YAxis tickFormatter={DataFormatter} />
          <Legend
            wrapperStyle={{
              padding: 30,
            }}
          />
          <Bar
            dataKey="dose_1"
            name="Dose 1"
            fill="#5a8dee"
            barSize="20%"
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="dose_2"
            name="Dose 2"
            fill="#f54394"
            barSize="20%"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  )

  return <ChartBgContainer>{renderBarChart()}</ChartBgContainer>
}

export default VaccinationCoverage
