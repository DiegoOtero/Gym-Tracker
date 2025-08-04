import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import Dashboard from './components/Dashboard'
import ScheduleTable from './components/ScheduleTable'
import WorkoutCalendar from './components/WorkoutCalendar'
import RoutineList from './components/RoutineList'
import SupplementsSchedule from './components/SupplementsSchedule'
import WeightTracker from './components/WeightTracker'
import ShoppingList from './components/ShoppingList'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="p-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/schedule" element={<ScheduleTable />} />
          <Route path="/calendar" element={<WorkoutCalendar />} />
          <Route path="/routine" element={<RoutineList />} />
          <Route path="/supplements" element={<SupplementsSchedule />} />
          <Route path="/tracker" element={<WeightTracker />} />
          <Route path="/shopping" element={<ShoppingList />} />
        </Routes>
      </main>
    </div>
  )
}
