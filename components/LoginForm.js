export default function LoginForm({ onLogin }) {

  async function handleSubmit(event) {
      event.preventDefault();
      onLogin(event.target.username.value, event.target.password.value);
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="bg-emerald-100 p-8 rounded-lg shadow-md flex flex-col border border-emerald-500">
        <fieldset autoComplete='off'>
          <legend className="text-xl font-bold mb-4">Log In</legend>
          <div className="mb-4">
            <label htmlFor="username" className="text-sm">Username</label>
            <input
              name="username"
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="text-sm">Password</label>
            <input
              type="password"
              name="password"
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          <button
            className="bg-emerald-700 text-white rounded-md p-2 hover:bg-emerald-800 transition"
          >
            Log In
          </button>
        </fieldset>
      </form>
    </div>
  );
}
