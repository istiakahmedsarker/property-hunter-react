import React from 'react';
import { PopupButton } from 'react-calendly';

const Schedule = () => {
  return (
    <div className="App">
      <PopupButton
        url="https://calendly.com/ruma-afrin543"
        rootElement={document.getElementById('root')}
        text="Click Here"
        className="text-blue-700 font-semibold"
      />{' '}
      to book your Schedule!
    </div>
  );
};

export default Schedule;
