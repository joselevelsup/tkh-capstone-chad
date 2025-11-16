//import { faker } from '@faker-js/faker'
import men1 from '../assets/mens/men1.avif'
import men2 from '../assets/mens/men2.avif'
import men3 from '../assets/mens/men3.avif'
import men4 from '../assets/mens/men4.avif'
import men5 from '../assets/mens/men5.avif'
import men6 from '../assets/mens/men6.avif'


const mensItems = [
  {
    id: 1,
    name: 'Denim Jacket',
    price: 49.99,
    image: men1,
  },
  {
    id: 2,
    name: 'Casual Hoodie',
    price: 39.99,
    image: men2,
  },
  {
    id: 3,
    name: 'Slim Fit Jeans',
    price: 59.99,
    image: men3,
  },
  {
    id: 4,
    name: 'Slim Fit Jeans',
    price: 59.99,
    image: men4,
  },
  {
    id: 5,
    name: 'Slim Fit Jeans',
    price: 59.99,
    image: men5,
  },
  {
    id: 6,
    name: 'Slim Fit Jeans',
    price: 59.99,
    image: men6,
  },
]








export default function MensClothing() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {mensItems.map((item) => (
        <div key={item.id} className="card bg-base-100 shadow-xl">
          <figure>
            <img src={item.image} alt={item.name} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{item.name}</h2>
            <p>${item.price}</p>
            <button className="btn btn-primary btn-sm">Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  )
}
