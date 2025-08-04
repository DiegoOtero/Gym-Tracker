import { render, screen } from '@testing-library/react'
import ScheduleTable from '../ScheduleTable'
import plan from '../../data/plan.json'

test('renders all schedule items', () => {
  render(<ScheduleTable />)
  plan.weeklySchedule.forEach(item => {
    const headerText = `${item.day} - ${item.time}`
    expect(screen.getByText(headerText)).toBeInTheDocument()
    expect(screen.getByText(new RegExp(item.activity))).toBeInTheDocument()
  })
})
