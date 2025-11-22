
import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'

// Map Supabase image keys (kids1, kids2, etc.) to real imported assets
import kids1Img from '../assets/kids/kids1.avif'
import kids2Img from '../assets/kids/kids2.avif'
import kids3Img from '../assets/kids/kids3.avif'
import kids4Img from '../assets/kids/kids4.avif'
import kids5Img from '../assets/kids/kids5.avif'
import kids6Img from '../assets/kids/kids6.avif'
import kids7Img from '../assets/kids/kids7.avif'
import kids8Img from '../assets/kids/kids8.avif'
import kids9Img from '../assets/kids/kids9.avif'
import kids10Img from '../assets/kids/kids10.avif'
import kids11Img from '../assets/kids/kids11.avif'
import kids12Img from '../assets/kids/kids12.avif'
import kids13Img from '../assets/kids/kids13.avif'
import kids14Img from '../assets/kids/kids14.avif'
import kids15Img from '../assets/kids/kids15.avif'



const kidsImageMap = {
  kids1: kids1Img,
  kids2: kids2Img,
  kids3: kids3Img,
  kids4: kids4Img,
  kids5: kids5Img,
  kids6: kids6Img,
  kids7: kids7Img,
  kids8: kids8Img,
  kids9: kids9Img,
  kids10: kids10Img,
  kids11: kids11Img,
  kids12: kids12Img,
  kids13: kids13Img,
  kids14: kids14Img,
  kids15: kids15Img,

}



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
      {items.map((item) => {
        const imgSrc = kidsImageMap[item.image_url] || null

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













