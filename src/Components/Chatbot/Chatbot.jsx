import ChatBot from 'react-simple-chatbot';
import { Link } from 'react-router-dom';

const Chatbot = () => {
  return (
    <ChatBot
      steps={[
        {
          id: '0',
          message: 'Welcome to our property services!',

          trigger: '1',
        },
        {
          id: '1',
          message: 'How can I assist you today?',

          trigger: '2',
        },
        {
          id: '2',
          options: [
            { value: 'buy', label: 'Buy Property', trigger: '3' },
            { value: 'sell', label: 'Sell Property', trigger: '13' },
            { value: 'rent', label: 'Rent Property', trigger: '20' },
          ],
        },
        {
          id: '3',
          message:
            "That's wonderful! What type of property are you interested in?",
          trigger: '4',
        },
        {
          id: '20',
          message:
            "That's wonderful! What type of property are you interested for rent?",
          trigger: '4',
        },
        {
          id: '13',
          message: 'Sell your property with us is simple.  ',
          trigger: '14',
        },
        {
          id: '14',
          message:
            'You can provide details about your property, upload photos, and set your desired price.',
          trigger: '',
        },

        {
          id: '4',
          options: [
            { value: 'house', label: 'House', trigger: '5' },
            { value: 'apartment', label: 'Apartment', trigger: '6' },
            { value: 'office', label: 'Office', trigger: '7' },
            { value: 'villa', label: 'Villa', trigger: '8' },
          ],
        },
        {
          id: '5',
          message: 'Explore our listings and find your dream home today!',
          trigger: '9',
        },
        {
          id: '6',
          message: 'Explore our listings and find your dream apartment today!',
          trigger: '9',
        },
        {
          id: '7',
          message: 'Explore our listings and find your dream office today!',
          trigger: '9',
        },
        {
          id: '8',
          message: 'Explore our listings and find your dream office today!',

          trigger: '9',
        },
        {
          id: '9',
          message: 'Want to check?',
          trigger: '10',
        },
        {
          id: '10',
          options: [
            { value: 'yes', label: 'Yes', trigger: '11' },
            { value: 'no', label: 'No', trigger: '12' },
          ],
        },
        {
          id: '11',
          component: (
            <Link className="text-blue-500 underline" to="/properties">
              Check here
            </Link>
          ),
        },
        {
          id: '12',
          message: 'Thanks for coming',
          ends: true,
        },
      ]}
      floating={true}
    />
  );
};

export default Chatbot;
