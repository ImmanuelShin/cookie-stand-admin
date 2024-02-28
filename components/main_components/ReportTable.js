import React from 'react';

export default function ReportTable(props) {

  const headers = ['Location', ...props.hours, 'Totals'];
  if (props.cookieStands.length === 0) {
    return <h2>No Cookie Stands Available</h2>;
  }

  const handleDelete = (id) => {
    const updatedCookieStands = props.cookieStands.filter((stand) => stand.id !== id);
    props.setCookieStands(updatedCookieStands);
  };
  return (
    <table className="w-2/3 mx-auto my-8 bg-green-300 rounded-lg">
            <HeaderRow headerValues={headers} />

            <tbody>
                {props.cookieStands.map(cookieStand => {
                    return <ReportRow key={cookieStand.id} cookieStand={cookieStand} onDelete={handleDelete} />;
                })}
            </tbody>

            <FooterRow cookieStands={props.cookieStands} />

        </table>

  );
}

function HeaderRow({ headerValues }) {
  return (
    <thead className="bg-green-500">
        <tr>
            {headerValues.map((header, index) => {
                let className = "";
                if (index === 0) {
                    className = "rounded-tl";
                } else if (index === headerValues.length - 1) {
                    className = "rounded-tr";
                }
                return <th className={className} key={header}>{header}</th>;
            })}
        </tr>
    </thead>
  )
}

function ReportRow({ cookieStand, onDelete }) {
    const total = cookieStand.hourly_sales.reduce((sum, value) => sum + value);

    const values = [cookieStand.location, ...cookieStand.hourly_sales, total];
    return (
      <tr className="odd:bg-green-400">
        {values.map((value, i) => (
          <td className="pl-4 border border-green-900" key={i}>
            {i === values.length - 1 ? (
              <span>
                {value}{' '}
                <button onClick={() => onDelete(cookieStand.id)} className="delete-btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-red-500 cursor-pointer"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </button>
              </span>
            ) : (
              <span>{value}</span>
            )}
          </td>
        ))}
      </tr>
    );
}

function FooterRow({ cookieStands }) {
    const cellValues = ['Totals'];

    let megaTotal = 0;
    for (let i in cookieStands[0].hourly_sales) {

        let hourlyTotal = 0;

        for (let cookieStand of cookieStands) {
            hourlyTotal += cookieStand.hourly_sales[i];
        }

        cellValues.push(hourlyTotal);

        megaTotal += hourlyTotal;
    }
    cellValues.push(megaTotal);
    return (
        <tfoot className="bg-green-500">
            <tr>
                {cellValues.map((value, index) => {
                    let className = "border border-green-900";

                    if (index === 0) {
                        className += " rounded-bl";
                    } else if (index === cellValues.length - 1) {
                        className += " rounded-br";
                    }

                    return <th className={className} key={index}>{value}</th>;
                })}
            </tr>
        </tfoot>
    );
}