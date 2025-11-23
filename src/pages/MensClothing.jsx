
import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import { useCart } from '../context/CartContext'


// Map Supabase image keys (men1, men2, etc.) to real imported assets
import men1Img from '../assets/mens/men1.avif'
import men2Img from '../assets/mens/men2.avif'
import men3Img from '../assets/mens/men3.avif'
import men4Img from '../assets/mens/men4.avif'
import men5Img from '../assets/mens/men5.avif'
import men6Img from '../assets/mens/men6.avif'
import men7Img from '../assets/mens/men7.avif'
import men8Img from '../assets/mens/men8.avif'
import men9Img from '../assets/mens/men9.avif'
import men10Img from '../assets/mens/men10.avif'
import men11Img from '../assets/mens/men11.avif'
import men12Img from '../assets/mens/men12.avif'
import men13Img from '../assets/mens/men13.avif'
import men14Img from '../assets/mens/men14.avif'
import men15Img from '../assets/mens/men15.avif'

const mensImageMap = {
  men1: men1Img,
  men2: men2Img,
  men3: men3Img,
  men4: men4Img,
  men5: men5Img,
  men6: men6Img,
  men7: men7Img,
  men8: men8Img,
  men9: men9Img,
  men10: men10Img,
  men11: men11Img,
  men12: men12Img,
  men13: men13Img,
  men14: men14Img,
  men15: men15Img,
}



export default function MensClothing() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  // src/pages/MensClothing.jsx
const { addToCart } = useCart()

const handleAddToCart = (item) => {
  addToCart({
    id: item.id,
    name: item.name,
    price: Number(item.price),
    size: item.size,
    category: item.category,
    imageKey: item.image_url,
  })
}

// inside the map:
<button
  className="btn btn-primary btn-sm mt-2"
  onClick={() => handleAddToCart(item)}
>
  Add to Cart
</button>


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
      {items.map((item) => {
        const imgSrc = mensImageMap[item.image_url] || null

        return (
          <div key={item.id} className="card bg-base-100 shadow-xl">
            <figure className="bg-base-200">
  {imgSrc ? (
    <img
      src={imgSrc}
      alt={item.name}
      className="w-full h-auto max-h-80 object-contain mx-auto"
    />
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
        )
      })}
    </div>
  )
}





