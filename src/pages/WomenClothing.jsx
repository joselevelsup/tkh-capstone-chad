//import { faker } from '@faker-js/faker'

import women1 from '../assets/womens/women1.avif'
import women2 from '../assets/womens/women2.avif'
import women3 from '../assets/womens/women3.avif'
import women4 from '../assets/womens/women4.avif'
import women5 from '../assets/womens/women5.avif'
import women6 from '../assets/womens/women6.avif'





const womenItems = [
  { id: 1, name: 'Floral Dress', price: 45.99, image: women1 },
  { id: 2, name: 'Blouse & Skirt Set', price: 55.0, image: women2 },
  { id: 3, name: 'Casual Shirt', price: 35.5, image: women3 },
  { id: 4, name: 'Casual Shirt', price: 35.5, image: women4 },
  { id: 5, name: 'Casual Shirt', price: 35.5, image: women5 },
  { id: 6, name: 'Casual Shirt', price: 35.5, image: women6 },
]









export default function WomenClothing() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {womenItems.map((item) => (
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





