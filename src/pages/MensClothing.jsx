import { faker } from '@faker-js/faker'

export default function MensClothing() {
  const items = Array.from({ length: 6 }).map(() => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.urlLoremFlickr({ category: 'clothes' }),
  }))

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {items.map((item) => (
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

