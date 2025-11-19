// // src/pages/KidsClothing
// import kid1 from '../assets/kids/kid1.avif'
// import kid2 from '../assets/kids/kid2.avif'
// import kid3 from '../assets/kids/kid3.avif'
// import kid4 from '../assets/kids/kid4.avif'
// import kid5 from '../assets/kids/kid5.avif'
// import kid6 from '../assets/kids/kid6.avif'
// import kid7 from '../assets/kids/kid7.avif'
// import kid8 from '../assets/kids/kid8.avif'
// import kid9 from '../assets/kids/kid9.avif'
// import kid10 from '../assets/kids/kid10.avif'
// import kid11 from '../assets/kids/kid11.avif'
// import kid12 from '../assets/kids/kid12.avif'
// import kid13 from '../assets/kids/kid13.avif'
// import kid14 from '../assets/kids/kid14.avif'
// import kid15 from '../assets/kids/kid15.avif'

// import { useEffect, useState } from 'react'
// import { supabase } from '../lib/supabaseClient'


// // Manually adding datasets for Kids clothing, updated to 15 cards
// const kidsItems = [
//   { id: 1, name: 'PUFFTECH Washable Vest', price: 39.99, image: kid1 },
//   { id: 2, name: 'PUFFTECH Washable Parka', price: 49.99, image: kid2 },
//   { id: 3, name: 'Pocketable UV Protection Parka', price: 19.99, image: kid3 },
//   { id: 4, name: 'DRY Sweat Barrel Pants', price: 24.99, image: kid4 },
//   { id: 5, name: 'Warm Lined Pants', price: 29.99, image: kid5 },
//   { id: 6, name: 'Flannel Checked Shirt', price: 14.99, image: kid6 },
//   { id: 7, name: 'Souffle Yarn Cardigan', price: 29.99, image: kid7 },
//   { id: 8, name: 'Souffle Yarn Sweater', price: 24.99, image: kid8 },
//   { id: 9, name: 'Souffle Yarn Sweater', price: 24.99, image: kid9 },
//   { id: 10, name: 'Easy Stretch Denmin', price: 24.99, image: kid10 },
//   { id: 11, name: 'Wide Straight Jeans', price: 24.99, image: kid11 },
//   { id: 12, name: 'Pile Lined Sweatpants', price: 29.99, image: kid12 },
//   { id: 13, name: 'Red Christmas Sweater', price: 19.99, image: kid13 },
//   { id: 14, name: 'Dry Sweat Pants', price: 24.99, image: kid14 },
//   { id: 15, name: 'Stretch Easy Pants', price: 24.99, image: kid15 },
// ]

// export default function KidsClothing() {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
//       {kidsItems.map((item) => (
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

export default function KidsClothing() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchKidsClothing() {
      const { data, error } = await supabase
        .from('clothing')
        .select('*')
        .eq('category', 'kids')
        .order('created_at', { ascending: false })

      if (error) {
        console.error(error)
        setError('Failed to load kids clothing.')
      } else {
        setItems(data || [])
      }
      setLoading(false)
    }

    fetchKidsClothing()
  }, [])

  if (loading) {
    return <div className="p-4">Loading kids&apos; collection...</div>
  }

  if (error) {
    return <div className="p-4 text-error">{error}</div>
  }

  if (!items.length) {
    return <div className="p-4">No kids&apos; items found yet. Add some rows to the clothing table in Supabase.</div>
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




















