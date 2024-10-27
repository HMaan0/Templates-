import React from "react";

const Map = () => {
  return (
    <div className="gap-2 p-10 flex items-center">
      <h2 className="text-2xl font-semibold mb-4">Our Location :</h2>
      <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d160473.86460640078!2d-114.37693081328125!3d51.06408939999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716f9268a69e81%3A0xb1db5e68bd61e28!2sSouthern%20Alberta%20Institute%20of%20Technology!5e0!3m2!1sen!2sca!4v1729879863458!5m2!1sen!2sca"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
