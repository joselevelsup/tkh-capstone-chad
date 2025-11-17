import aboutImage from '../assets/about/about-hero.png'

export default function About() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-base-100 text-base-content px-4 md:px-10 lg:px-24 py-10">
      {/* Top section: image + story */}
      <section className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="tracking-[0.3em] uppercase text-xs text-base-content/60 mb-2">About Us</p>
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-8 bg-base-content/30" />
            <h1 className="text-2xl md:text-3xl font-semibold">Clothify</h1>
            <span className="h-px w-8 bg-base-content/30" />
          </div>
        </div>

        <div className="grid gap-8 items-start md:grid-cols-2">

          {/* Image */}
          <div className="rounded-xl overflow-hidden shadow-md bg-base-200 w-full max-w-[450px] mx-auto md:mx-0">
            <img
              src={aboutImage}
              alt="Folded clothes and accessories"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Story text */}
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              Clothify was born from a simple idea: online shopping should feel inspiring, not
              overwhelming. After spending countless hours browsing eCommerce sites for clothes,
              Chad realized he wanted a place that reflected his own style—curated, easy to navigate,
              and focused on pieces people actually want to wear.
            </p>
            <p>
              What started as a side project quickly turned into the foundation of an aspiring
              startup. Clothify combines Chad&apos;s love for fashion and his interest in technology,
              with the goal of building a modern clothing brand that lives primarily online. From
              everyday basics to standout outfits, the vision is to bring a boutique feel to the
              digital shopping experience.
            </p>

            <div className="mt-4">
              <h2 className="font-semibold mb-2">Our Mission</h2>
              <p>
                Our mission at Clothify is to empower shoppers with choice, convenience, and
                confidence. We&apos;re dedicated to creating a seamless online experience—from browsing
                and discovery to checkout—while highlighting styles that feel personal, intentional,
                and accessible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us section */}
      <section className="max-w-6xl mx-auto mt-16 border-t border-base-300 pt-10">
        <p className="uppercase tracking-[0.25em] text-xs text-base-content/60 mb-4">
          Why Choose Us
        </p>

        <div className="grid md:grid-cols-3 gap-6 text-sm md:text-base">
          <div className="border border-base-300 rounded-lg px-6 py-6 bg-base-100">
            <h3 className="font-semibold mb-2">Quality Assurance</h3>
            <p className="text-base-content/80">
              Every item featured on Clothify is carefully reviewed so it meets our standards for
              fit, fabric, and overall feel. We focus on pieces that look good and hold up in
              everyday life.
            </p>
          </div>

          <div className="border border-base-300 rounded-lg px-6 py-6 bg-base-100">
            <h3 className="font-semibold mb-2">Convenience</h3>
            <p className="text-base-content/80">
              With a clean interface and simple navigation, shopping on Clothify is designed to be
              quick and stress-free—whether you&apos;re browsing on a laptop or your phone.
            </p>
          </div>

          <div className="border border-base-300 rounded-lg px-6 py-6 bg-base-100">
            <h3 className="font-semibold mb-2">Customer Experience</h3>
            <p className="text-base-content/80">
              As Clothify grows, the goal is to build a brand that listens. Feedback from early
              shoppers will help shape everything—from product selection to future features.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}






