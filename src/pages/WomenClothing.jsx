//srs/pages/assets/womens
// import women1 from '../assets/womens/women1.avif'
// import women2 from '../assets/womens/women2.avif'
// import women3 from '../assets/womens/women3.avif'
// import women4 from '../assets/womens/women4.avif'
// import women5 from '../assets/womens/women5.avif'
// import women6 from '../assets/womens/women6.avif'
// import women7 from '../assets/womens/women7.avif'
// import women8 from '../assets/womens/women8.avif'
// import women9 from '../assets/womens/women9.avif'
// import women10 from '../assets/womens/women10.avif'
// import women11 from '../assets/womens/women11.avif'
// import women12 from '../assets/womens/women12.avif'
// import women13 from '../assets/womens/women13.avif'
// import women14 from '../assets/womens/women14.avif'
// import women15 from '../assets/womens/women15.avif'

import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'



// Manually adding datasets for women clothing, updated to 15 cards
const womenItems = [
  { id: 1, name: 'Mini T-Shirt | Long Sleeve', price: 24.99, image: women1 },
  { id: 2, name: 'Soft Ribbed T-Shirt | Long Sleeve', price: 24.99, image: women2 },
  { id: 3, name: 'Soft Velour Mini T-shirt', price: 14.99, image: women3 },
  { id: 4, name: 'Barrel Jeans | Short', price: 35.5, image: women4 },
  { id: 5, name: 'Barrel Jeans | Short', price: 49.99, image: women5 },
  { id: 6, name: 'Wide Smart Pants', price: 49.99, image: women6 },
  { id: 7, name: 'AIRism Soft Jacket', price: 35.5, image: women7 },
  { id: 8, name: 'Cotton Stand Collar Shirt Jacket', price: 49.99, image: women8 },
  { id: 9, name: 'Poncho Navy', price: 59.99, image: women9 },
  { id: 10, name: 'Poncho Biege', price: 59.99, image: women10 },
  { id: 11, name: 'Corduroy Long Shirt Jacket', price: 19.99, image: women11 },
  { id: 12, name: 'Corduroy Long Shirt Jacket', price: 19.99, image: women12 },
  { id: 13, name: 'Smart Ankle Pants | Checked', price: 39.99, image: women13 },
  { id: 14, name: 'Smart Ankle Pants | Tall', price: 49.99, image: women14 },
  { id: 15, name: 'Ultra Stretch Leggings', price: 39.99, image: women15 },
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


























