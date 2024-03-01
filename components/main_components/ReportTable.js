import React from 'react';
import { hours } from '@/data'

export default function ReportTable({ stands, deleteStand }) {
  return (
    <table className="my-8 bg-emerald-300">
      <thead className="bg-emerald-500">
        <tr>
          <th className="border border-emerald-500">Location</th>
          {hours.map((hour) => (
            <th key={hour} className="border border-emerald-600">
              {hour}
            </th>
          ))}
          <th className="border border-emerald-500">Totals</th>
        </tr>
      </thead>
      <tbody>
        {stands.map((stand, index) => (
          <ReportRow key={stand.id} info={stand} deleteStand={deleteStand} index={index} />
        ))}
      </tbody>
      <FooterRow cookieStands={stands} hourlySales={[48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]} />
    </table>
  );
}

function ReportRow({ info, deleteStand, index }) {
  function clickHandler() {
      deleteStand(info.id);
  }

  // if (info.hourly_sales.length == 0) {
  //     // bunk data
  //     info.hourly_sales = [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36];
  // }
  info.hourly_sales = [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36];

  const isEvenRow = index % 2 === 0;

  return (
    <tr className={isEvenRow ? 'bg-emerald-200' : 'bg-emerald-300'}>
      <td>
        {info.location} <button onClick={clickHandler} className="delete-btn">
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
      </td>
      {info.hourly_sales.map((slot, index) => (
        <td key={index} className="border border-emerald-600">{slot}</td>
      ))}
      <td>{info.hourly_sales.reduce((num, sum) => num + sum, 0)}</td>
    </tr>
  );
}

function FooterRow({ cookieStands, hourlySales }) {
  const cellValues = ['Totals'];

  let megaTotal = 0;
  for (let i in hourlySales) {
    let hourlyTotal = 0;

    for (let cookieStand of cookieStands) {
      hourlyTotal += cookieStand.hourly_sales[i];
    }

    cellValues.push(hourlyTotal);
    megaTotal += hourlyTotal;
  }

  cellValues.push(megaTotal);

  return (
    <tfoot className="bg-emerald-500">
      <tr>
        {cellValues.map((value, index) => {
          let className = "border border-emerald-600";

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
