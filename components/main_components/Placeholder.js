function Placeholder({ cookieStand }) {
  return (
    <div className="bg-white p-8 border border-gray-300 rounded-md shadow-md">
      <h2 className="text-xl mb-4">Cookie Stand Information</h2>

      <p>
        <strong>Location:</strong> {cookieStand.location}
      </p>
      <p>
        <strong>Min Customers per Hour:</strong> {cookieStand.minCustomers}
      </p>
      <p>
        <strong>Max Customers per Hour:</strong> {cookieStand.maxCustomers}
      </p>
      <p>
        <strong>Average Cookies per Sale:</strong> {cookieStand.avgCookies}
      </p>
    </div>
  );
}

export default Placeholder;