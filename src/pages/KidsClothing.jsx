
// import { useEffect, useState } from 'react'
// import { supabase } from '../lib/supabaseClient'

// export default function KidsClothing() {
//   const [items, setItems] = useState([])
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState(null)

//   useEffect(() => {
//     async function fetchKidsClothing() {
//       const { data, error } = await supabase
//         .from('clothing')
//         .select('*')
//         .eq('category', 'kids')
//         .order('created_at', { ascending: false })

//       if (error) {
//         console.error(error)
//         setError('Failed to load kids clothing.')
//       } else {
//         setItems(data || [])
//       }
//       setLoading(false)
//     }

//     fetchKidsClothing()
//   }, [])

//   if (loading) {
//     return <div className="p-4">Loading kids&apos; collection...</div>
//   }

//   if (error) {
//     return <div className="p-4 text-error">{error}</div>
//   }

//   if (!items.length) {
//     return <div className="p-4">No kids&apos; items found yet. Add some rows to the clothing table in Supabase.</div>
//   }

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
//       {items.map((item) => (
//         <div key={item.id} className="card bg-base-100 shadow-xl">
//           <figure>
//             {item.image_url ? (
//               <img src={item.image_url} alt={item.name} className="w-full h-64 object-cover" />
//             ) : (
//               <div className="w-full h-64 bg-base-200 flex items-center justify-center text-sm text-base-content/60">
//                 No image
//               </div>
//             )}
//           </figure>
//           <div className="card-body">
//             <h2 className="card-title">{item.name}</h2>
//             <p className="text-sm text-base-content/70">Size: {item.size || 'One size'}</p>
//             <p className="font-semibold mt-1">${item.price}</p>
//             <button className="btn btn-primary btn-sm mt-2">Add to Cart</button>
//           </div>
//         </div>
//       ))}
//     </div>
//   )
// }




















