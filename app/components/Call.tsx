import Image from "next/image";
import React from "react";

const Call = () => {
  return (
    <div id="contact" className="flex flex-col md:flex-row gap-0 md gap-8">
      <div className="w-full md:w-1/2">
        <Image
          src="/images/contactme.jpg"
          alt="Contact Me"
          width={1200}
          height={400}
          className="object-cover w-full h-64 md:h-96"
        />
      </div>
      <div>
        <h1 className="text-center text-gray-800 text-3xl font-semibold">Contact Me</h1>
        <div className="text-gray-900 py-12 px-6">
          <h1>Phone: +2348073304773</h1>
          <h1>Email: yemisisamuel17@gmail.com</h1>
        </div>
      </div>
    </div>
  );
};

export default Call;
