import { supabase } from '../lib/supabaseClient'

export default function Login() {
  async function handleLogin(e) {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value

    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      alert(error.message)
    } else {
      alert('Logged in!')
    }
  }

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form onSubmit={handleLogin} className="flex flex-col gap-3">
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="input input-bordered"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="input input-bordered"
        />
        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  )
}