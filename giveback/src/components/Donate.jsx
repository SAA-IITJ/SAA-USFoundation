import React from 'react';
import { Link } from 'react-router-dom';

const BookATable = () => {
  return (
    <section id="book-a-table" className="py-5">
      <div className="container mx-auto">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-5xl font-medium font-suse">
            Make a <span className="text-primary">Gift</span>
          </h2>
          <p className="text-gray-600">We express our gratitude for your generosity.</p>
        </div>
        {/* Donation Options */}
        <div className="flex justify-center items-center">
          <div className="flex justify-center border p-4 gap-12 w-fit rounded-lg">
            {/* India */}
            <div className="text-center w-80 shadow-custom h-96 flex flex-col justify-center items-center p-12 gap-6">
              <img src={`${process.env.PUBLIC_URL}/assets/india.png`} alt="India Flag" className="mx-auto" />
              <div className="mt-6">
                <Link
                  to="in/Annual-Gift-Programme"
                  className="flex px-24 py-2 w-full text-white bg-primary rounded hover:bg-primary-dark"
                >
                  India
                </Link>
              </div>
            </div>
          {/* USA */}
          <div className="text-center w-80 shadow-custom h-96 flex flex-col justify-center items-center p-12 gap-6">
              <img src={`${process.env.PUBLIC_URL}/assets/usan.png`} alt="India Flag" className="mx-auto" />
              <div className="mt-6">
                <Link
                  to="in/Annual-Gift-Programme"
                  className="flex px-24 py-2 w-full text-white bg-primary rounded hover:bg-primary-dark"
                >
                  USA
                </Link>
              </div>
            </div>


            

            {/* Other Countries */}
            <div className="text-center w-80 shadow-custom h-96 flex flex-col justify-center items-center p-12 gap-6">
              <img src={`${process.env.PUBLIC_URL}/assets/globe.jpg`} alt="Rest of World Flag" className="mx-auto" />
              <div className="mt-6">
                <Link
                  to="oc/Annual-Gift-Programme"
                  className="flex px-[3.4rem] py-2 w-full text-white bg-primary rounded hover:bg-primary-dark"
                >
                  Other Countries
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookATable;