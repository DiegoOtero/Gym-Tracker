import plan from '../data/plan.json'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Actual', kg: plan.user.weight },
  { name: 'Meta', kg: plan.user.goalWeight }
]

export default function WeightTracker() {
  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="kg" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
