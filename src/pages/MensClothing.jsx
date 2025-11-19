// //srs/pages/assets/mens, importing images from assets folder
// import men1 from '../assets/mens/men1.avif'
// import men2 from '../assets/mens/men2.avif'
// import men3 from '../assets/mens/men3.avif'
// import men4 from '../assets/mens/men4.avif'
// import men5 from '../assets/mens/men5.avif'
// import men6 from '../assets/mens/men6.avif'
// import men7 from '../assets/mens/men7.avif'
// import men8 from '../assets/mens/men8.avif'
// import men9 from '../assets/mens/men9.avif'
// import men10 from '../assets/mens/men10.avif'
// import men11 from '../assets/mens/men11.avif'
// import men12 from '../assets/mens/men12.avif'
// import men13 from '../assets/mens/men13.avif'
// import men14 from '../assets/mens/men14.avif'
// import men15 from '../assets/mens/men15.avif'



// // Manually adding datasets for men clothing, updated to 15 cards
// const mensItems = [
//   {
//     id: 1,
//     name: 'Denim Jacket',
//     price: 49.99,
//     image: men1,
//   },
//   {
//     id: 2,
//     name: 'Casual Hoodie',
//     price: 39.99,
//     image: men2,
//   },
//   {
//     id: 3,
//     name: 'Jacket',
//     price: 59.99,
//     image: men3,
//   },
//   {
//     id: 4,
//     name: 'Slim Fit Jeans',
//     price: 59.99,
//     image: men4,
//   },
//   {
//     id: 5,
//     name: 'Slim Fit Jeans',
//     price: 59.99,
//     image: men5,
//   },
//   {
//     id: 6,
//     name: 'Slim Fit Jeans',
//     price: 59.99,
//     image: men6,
//   },
//     {
//     id: 7,
//     name: 'oversized utility shirt',
//     price: 59.99,
//     image: men7,
//   },
//     {
//     id: 8,
//     name: 'Button down shirt',
//     price: 59.99,
//     image: men8,
//   },
//     {
//     id: 9,
//     name: 'Corduroy Jacket',
//     price: 59.99,
//     image: men9,
//   },
//     {
//     id: 10,
//     name: 'Corduroy Jacket',
//     price: 59.99,
//     image: men10,
//   },
//     {
//     id: 11,
//     name: 'Zip Up Denmin Jacket',
//     price: 59.99,
//     image: men11,
//   },
//     {
//     id: 12,
//     name: 'Bluson Zip up',
//     price: 59.99,
//     image: men12,
//   },
//     {
//     id: 13,
//     name: 'Jersey Blazer',
//     price: 59.99,
//     image: men13,
//   },
//     {
//     id: 14,
//     name: 'Smart Ankle Pants',
//     price: 59.99,
//     image: men14,
//   },
//     {
//     id: 15,
//     name: 'Smart Ankle Pants',
//     price: 59.99,
//     image: men15,
//   },
  
// ]




// export default function MensClothing() {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
//       {mensItems.map((item) => (
//         <div key={item.id} className="card bg-base-100 shadow-xl">
//           <figure>
//             <img src={item.image} alt={item.name} />
//           </figure>
//           <div className="card-body">
//             <h2 className="card-title">{item.name}</h2>
//             <p>${item.price}</p>
//             <button className="btn btn-primary btn-sm">Add to Cart</button>
//           </div>
//         </div>
//       ))}
//     </div>
//   )
// }



import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'

export default function MensClothing() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchMensClothing() {
      const { data, error } = await supabase
        .from('clothing')
        .select('*')
        .eq('category', 'men')
        .order('created_at', { ascending: false })

      if (error) {
        console.error(error)
        setError('Failed to load mens clothing.')
      } else {
        setItems(data || [])
      }
      setLoading(false)
    }

    fetchMensClothing()
  }, [])

  if (loading) {
    return <div className="p-4">Loading men&apos;s collection...</div>
  }

  if (error) {
    return <div className="p-4 text-error">{error}</div>
  }

  if (!items.length) {
    return <div className="p-4">No men&apos;s items found yet. Add some rows to the clothing table in Supabase.</div>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {items.map((item) => (
        <div key={item.id} className="card bg-base-100 shadow-xl">
          <figure>
            {item.image_url ? (
              <img src={item.image_url} alt={item.name} className="w-full h-64 object-cover" />
            ) : (
              <div className="w-full h-64 bg-base-200 flex items-center justify-center text-sm text-base-content/60">
                No image
              </div>
            )}
          </figure>
          <div className="card-body">
            <h2 className="card-title">{item.name}</h2>
            <p className="text-sm text-base-content/70">Size: {item.size || 'One size'}</p>
            <p className="font-semibold mt-1">${item.price}</p>
            <button className="btn btn-primary btn-sm mt-2">Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  )
}





