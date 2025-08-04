import plan from '../data/plan.json'

export default function ShoppingList() {
  return (
    <ul className="list-disc pl-5">
      {plan.shoppingList.map((item, idx) => (
        <li key={idx}>{item.product} - {item.quantity}</li>
      ))}
    </ul>
  )
}
