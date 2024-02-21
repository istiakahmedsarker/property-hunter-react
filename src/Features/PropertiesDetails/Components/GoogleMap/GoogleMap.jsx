import React, { useEffect } from 'react';

const GoogleMap = ({ details }) => {
  useEffect(() => {
    const ifameData = document.getElementById('iframeId');
    const lat = details.location.latitude;
    const lon = details.location.longitude;
    ifameData.src = `https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`;
  });
  return (
    <div className="rounded-lg my-4">
      <iframe
        className="rounded-lg "
        id="iframeId"
        height="400px"
        width="100%"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
