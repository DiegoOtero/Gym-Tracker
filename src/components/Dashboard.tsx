import plan from '../data/plan.json'

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Bienvenido, {plan.user.name}</h1>
      <p>Altura: {plan.user.height} cm - Peso: {plan.user.weight} kg</p>
    </div>
  )
}
