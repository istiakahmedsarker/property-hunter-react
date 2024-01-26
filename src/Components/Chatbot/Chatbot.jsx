import ChatBot from 'react-simple-chatbot';

const Chatbot = () => {
  return (
    <ChatBot
      steps={[
        {
          id: '1',
          message: 'Welcome! Are you looking to buy, sell, or rent a property?',

          trigger: '2',
        },
        {
          id: '2',
          user: true,
          trigger: '3',
        },
        {
          id: '3',
          message: 'Great! Are you looking to buy, sell, or rent a property?',
          trigger: '4',
        },
        {
          id: '4',
          options: [
            { value: 'buy', label: 'Buy', trigger: '5' },
            { value: 'sell', label: 'Sell', trigger: '6' },
            { value: 'rent', label: 'Rent', trigger: '7' },
          ],
        },
        {
          id: '5',
          message:
            "That's wonderful! What type of property are you interested in?",
          trigger: '8',
        },
        {
          id: '6',
          message: 'Planning to sell? Great! Tell me more about your property.',
          trigger: '8',
        },
        {
          id: '7',
          message:
            'Looking to rent? Sure! What type of property are you looking for?',
          trigger: '8',
        },
        {
          id: '8',
          user: true,
          trigger: '9',
        },
        {
          id: '9',
          message: 'Thanks for sharing your preferences!',
          trigger: '10',
        },
        {
          id: '10',
          message: 'Let me find some options for you...',
          trigger: '11',
        },
        {
          id: '11',
          message: 'Here are some properties that match your criteria...',
          trigger: '12',
        },
        {
          id: '12',
          component: (
            <div>
              <p>Property 1: [Property details]</p>
              <p>Property 2: [Property details]</p>
              <p>Property 3: [Property details]</p>
              <p>Would you like more information on any of these properties?</p>
            </div>
          ),
          trigger: '13',
        },
        {
          id: '13',
          options: [
            { value: 'yes', label: 'Yes', trigger: '14' },
            { value: 'no', label: 'No', trigger: '15' },
          ],
        },
        {
          id: '14',
          message:
            'Please specify which property you would like more information about.',
          trigger: '16',
        },
        {
          id: '15',
          message: 'Feel free to ask if you need further assistance.',
          end: true,
        },
        {
          id: '16',
          user: true,
          trigger: '17',
        },
        {
          id: '17',
          message: 'Here are the details of the property...',
          end: true,
        },
      ]}
      floating={true}
    />
  );
};

export default Chatbot;
