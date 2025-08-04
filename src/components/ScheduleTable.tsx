import plan from '../data/plan.json'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

export default function ScheduleTable() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {plan.weeklySchedule.map((item, idx) => (
        <Card key={idx} className="rounded-2xl shadow p-2">
          <CardHeader>
            <strong>{item.day} - {item.time}</strong>
          </CardHeader>
          <CardContent>{item.activity}: {item.detail}</CardContent>
        </Card>
      ))}
    </div>
  )
}
