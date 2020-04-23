import React from 'react';

export default function Layout({ children }) {
  return (
    <div className="text-gray-900 bg-gray-100 leading-normal">
      <div className="p-4 max-w-5xl mx-auto">
        <img
          className="mx-auto my-8 max-w-full sm:max-w-sm"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/45561/undraw_Ordinary_day_3gk3.svg"
          alt="A drawing of two houses in a neighborhood"
        />
        <h1 className="text-2xl md:text-4xl lg:text-5xl text-center my-4 font-black">
          <span className="concert-underline">Concert Breakfast Studio</span>
        </h1>
        {children}
      </div>
    </div>
  );
}
