import React from 'react';

const GoogleMap = () => {
  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3133.099975906071!2d20.424001075810895!3d39.28580577164505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135c7caad9ea07d7%3A0xb04611d7fa3a492e!2sLibert%C3%A9%20Maisonettes!5e0!3m2!1sen!2sgr!4v1719411200000!5m2!1sen!2sgr";

  return (
    <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
      <iframe
        src={mapSrc}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Liberte Maisonettes Location in Kiperi, Parga, Greece"
      />
    </div>
  );
};

export default GoogleMap;
