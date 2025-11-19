import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'

// Map Supabase image keys (women1, women2, etc.) to real imported assets
import women1Img from '../assets/women/women1.avif'
import women2Img from '../assets/women/women2.avif'
import women3Img from '../assets/women/women3.avif'
import women4Img from '../assets/women/women4.avif'
import women4Img from '../assets/women/women4.avif'
import women4Img from '../assets/women/women4.avif'
import women4Img from '../assets/women/women4.avif'
import women4Img from '../assets/women/women4.avif'
import women4Img from '../assets/women/women4.avif'
import women4Img from '../assets/women/women4.avif'
import women4Img from '../assets/women/women4.avif'
import women4Img from '../assets/women/women4.avif'
import women4Img from '../assets/women/women4.avif'
import women4Img from '../assets/women/women4.avif'

const womenImageMap = {
  women1: women1Img,
  women2: women2Img,
  women3: women3Img,
  women4: women4Img,
}

export default function WomenClothing() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchWomenClothing() {
      const { data, error } = await supabase
        .from('clothing')
        .select('*')
        .eq('category', 'women')
        .order('created_at', { ascending: false })

      if (error) {
        console.error(error)
        setError("Failed to load women's clothing.")
      } else {
        setItems(data || [])
      }
      setLoading(false)
    }

    fetchWomenClothing()
  }, [])

  if (loading) {
    return <div className="p-4">Loading women&apos;s collection...</div>
  }

  if (error) {
    return <div className="p-4 text-error">{error}</div>
  }

  if (!items.length) {
    return <div className="p-4">No women&apos;s items found yet. Add some rows to the clothing table in Supabase.</div>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {items.map((item) => {
        const imgSrc = womenImageMap[item.image_url] || null

        return (
          <div key={item.id} className="card bg-base-100 shadow-xl">
            <figure>
              {imgSrc ? (
                <img src={imgSrc} alt={item.name} className="w-full h-64 object-cover" />
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
















