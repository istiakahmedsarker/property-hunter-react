import React from 'react';
import QRCode from 'react-qr-code';
const QRcode = () => {
  return (
    <div className="flex justify-end">
      <QRCode
        size={256}
        style={{ height: 'auto', maxWidth: '30%', width: '30%' }}
        value="Office Address: Humayun Road, Mohammadpur, Dhaka 1207, Phone: 314-555-0123, Email: hellosupport@gmail.com"
        viewBox={`0 0 256 256`}
      />
    </div>
  );
};

export default QRcode;
