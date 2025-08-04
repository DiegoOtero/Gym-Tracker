import plan from '../data/plan.json'

export default function RoutineList() {
  const routines = Object.keys(plan.routines)
  return (
    <ul className="list-disc pl-5">
      {routines.map(r => (
        <li key={r}>{r}</li>
      ))}
    </ul>
  )
}
