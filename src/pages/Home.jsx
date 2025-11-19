// src/pages/Home.jsx
import { Link } from 'react-router-dom'
import menHero from '../assets/home/men-hero.png'
import womenHero from '../assets/home/women-hero.png'
import kidsHero from '../assets/home/kids-hero.png'


// Hero-style homepage with Men vs Women split and Kids section at the bottom
export default function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-base-100 text-base-content">
      {/* Top split hero: Men vs Women */}
      <section className="grid md:grid-cols-2 h-[70vh]">
        {/* Men's side */}
        <div className="relative overflow-hidden">
          <img
            src={menHero}
            alt="Men's collection"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10" />

          <div className="relative h-full flex flex-col justify-center px-8 md:px-16 text-white">
            <p className="uppercase tracking-[0.2em] text-sm mb-2">
              New Season Essentials
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
              Men&apos;s Collection
            </h1>
            <p className="mb-6 max-w-md text-sm md:text-base opacity-90">
              Clean fits, everyday layers, and statement pieces for the modern wardrobe.
            </p>
            <Link
              to="/men"
              className="btn btn-outline btn-sm md:btn-md bg-white/90 text-black border-none"
            >
              Shop Men
            </Link>
          </div>
        </div>


        {/* Women's side */}
        <div className="relative overflow-hidden">
          <img
            src={womenHero}
            alt="Women's collection"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10" />

          <div className="relative h-full flex flex-col justify-center px-8 md:px-16 text-white">
            <p className="uppercase tracking-[0.2em] text-sm mb-2">
              Latest Trends
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-3">
              Women&apos;s Collection
            </h2>
            <p className="mb-6 max-w-md text-sm md:text-base opacity-90">
              Tailored pieces and on-trend styles for every occasion.
            </p>
            <Link
              to="/women"
              className="btn btn-outline btn-sm md:btn-md bg-white/90 text-black border-none"
            >
              Shop Women
            </Link>
          </div>
        </div>
      </section>


      {/* Kids section at the bottom */}
      <section className="py-12 md:py-16 px-4 md:px-12 lg:px-20 bg-base-100">
        <div className="grid md:grid-cols-[2fr,3fr] gap-8 items-center">
          <div className="space-y-4">
            <p className="uppercase tracking-[0.25em] text-xs text-base-content/70">
              For the little ones
            </p>
            <h3 className="text-3xl md:text-4xl font-bold">Kids&apos; Collection</h3>
            <p className="text-base-content/80 max-w-md">
              Comfy, playful, and durable looks designed for everyday adventures.
            </p>
            <Link to="/kids" className="btn btn-primary btn-sm md:btn-md">
              Shop Kids
            </Link>
          </div>

          <div className="relative h-52 md:h-64 lg:h-72 rounded-2xl overflow-hidden shadow-xl">
            <img
              src={kidsHero}
              alt="Kids collection"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-primary/20 to-transparent" />
          </div>
        </div>
      </section>
    </div>
  )
}













