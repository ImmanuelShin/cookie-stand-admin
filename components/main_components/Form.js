import { useAuth } from '@/contexts/auth';
import useResource from '@/hooks/useResource';

function Form({ onSubmit }) {
  const { user } = useAuth();
  const { createResource } = useResource();
  function handleSubmit(event) {
    event.preventDefault();
    const newCookieStand = {
      location: event.target.location.value,
      minCustomers: parseInt(event.target.minCustomers.value),
      maxCustomers: parseInt(event.target.maxCustomers.value),
      avgCookies: parseInt(event.target.avgCookies.value),
      owner: user.id,
    };
    createResource(newCookieStand);
  }
  return (
    <div className="bg-white p-8 border border-gray-300 rounded-md shadow-md w-full max-w-md">
      <h2 className="text-xl mb-4">Create Cookie Stand</h2>

      <form onSubmit={handleSubmit}>
        <label className="block mb-2" htmlFor="location">
          Location:
          <input
            type="text"
            id="location"
            name="location"
            className="w-full border border-gray-300 p-2 rounded-md"
            required
          />
        </label>

        <label className="block mb-2" htmlFor="minCustomers">
          Minimum Customers per Hour:
          <input
            type="number"
            id="minCustomers"
            name="minCustomers"
            className="w-full border border-gray-300 p-2 rounded-md"
            required
          />
        </label>

        <label className="block mb-2" htmlFor="maxCustomers">
          Maximum Customers per Hour:
          <input
            type="number"
            id="maxCustomers"
            name="maxCustomers"
            className="w-full border border-gray-300 p-2 rounded-md"
            required
          />
        </label>

        <label className="block mb-2" htmlFor="avgCookies">
          Average Cookies per Sale:
          <input
            type="number"
            id="avgCookies"
            name="avgCookies"
            className="w-full border border-gray-300 p-2 rounded-md"
            required
          />
        </label>

        <button
          type="submit"
          className="bg-green-500 text-white py-2 px-4 rounded-md w-full transition-transform transform hover:scale-105 focus:outline-none"
        >
          Create
        </button>
      </form>
    </div>
  );
}

export default Form;