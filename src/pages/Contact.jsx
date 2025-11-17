export default function Contact() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-base-100 text-base-content px-4 md:px-10 lg:px-24 py-10">
      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">
        Help Center
      </h1>

      {/* Search bar */}
      <div className="max-w-2xl mx-auto mb-10">
        <label className="input input-bordered flex items-center gap-2 shadow-sm">
          <input
            type="text"
            className="grow"
            placeholder="Search &quot;returns&quot; or &quot;sizing&quot;"
          />
          <span className="material-symbols-outlined text-base-content/70">search</span>
        </label>
      </div>

      {/* Quick actions */}
      <section className="max-w-4xl mx-auto mb-12">
        <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="card bg-base-200 border border-base-300 shadow-sm">
            <div className="card-body py-5">
              <h3 className="font-semibold text-sm mb-1">Track an Order</h3>
              <p className="text-xs text-base-content/70">
                You&apos;ll be able to look up your recent Clothify purchases.
              </p>
            </div>
          </div>
          <div className="card bg-base-200 border border-base-300 shadow-sm">
            <div className="card-body py-5">
              <h3 className="font-semibold text-sm mb-1">Start a Return</h3>
              <p className="text-xs text-base-content/70">
                Learn how returns and exchanges work for your orders.
              </p>
            </div>
          </div>
          <div className="card bg-base-200 border border-base-300 shadow-sm">
            <div className="card-body py-5">
              <h3 className="font-semibold text-sm mb-1">Contact Us</h3>
              <p className="text-xs text-base-content/70">
                Email us anytime at support@clothify.com.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Help topics grid */}
      <section className="max-w-5xl mx-auto">
        <h2 className="text-lg font-semibold mb-4">How can we help?</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            'U.S. Shipping',
            'Returns & Exchanges',
            'Size Guide & Fit',
            'Gift Orders & Gifting',
            'Sales & Promotions',
            'Account & Emails',
            'International Shipping',
            'Payment & Billing',
            'Other FAQs',
          ].map((title) => (
            <div
              key={title}
              className="card bg-base-200 border border-base-300 shadow-sm cursor-default hover:bg-base-300 transition-colors"
            >
              <div className="card-body items-start py-6">
                <div className="w-10 h-10 rounded-full bg-base-100 border border-base-300 mb-3" />
                <h3 className="font-semibold text-sm">{title}</h3>
                <p className="text-xs text-base-content/70">Coming soon.</p>
              </div>
            </div>
          ))}
        </div>

        {/* Direct contact info at bottom */}
        <div className="mt-10 text-center text-sm text-base-content/80">
          <p>
            Still need help? Email us at{' '}
            <a href="mailto:support@clothify.com" className="link">
              support@clothify.com
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  )
}
