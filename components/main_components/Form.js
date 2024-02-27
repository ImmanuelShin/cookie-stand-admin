function Form({ onSubmit }) {
  return (
    <div className="bg-white p-8 border border-gray-300 rounded-md shadow-md w-full max-w-md">
      <h2 className="text-xl mb-4">Create Cookie Stand</h2>

      <form onSubmit={onSubmit}>
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
          className="bg-green-500 text-white py-2 px-4 rounded-md w-full"
        >
          Create
        </button>
      </form>
    </div>
  );
}

export default Form;