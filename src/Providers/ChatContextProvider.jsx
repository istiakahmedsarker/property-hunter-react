// Import necessary modules and components from React
import { createContext, useContext, useReducer } from "react";
import { AuthContext } from "./AuthContext";

// Create a new context for managing chat-related state
export const ChatContext = createContext();

// Define a component that provides the ChatContext to its children
export const ChatContextProvider = ({ children }) => {
    // Access the currentUser from the AuthContext using useContext
    const { currentUser } = useContext(AuthContext);

// Define the initial state for the chat-related context
    const INITIAL_STATE = {
        chatId: "null", // Initial chat ID
        user: {}, // Initial user data
    };

    // Define a reducer function to handle state changes based on dispatched actions
    const chatReducer = (state, action) => {
        switch (action.type) {
            case "CHANGE_USER":
                return {
                    user: action.payload, // Update user data
                    chatId:
                        currentUser.uid > action.payload.uid
                            ? currentUser.uid + action.payload.uid
                            : action.payload.uid + currentUser.uid, // Generate a unique chat ID based on user IDs
                };

            default:
                return state; // Return the current state if no matching action type is found
        }
    };

    // Use the useReducer hook to manage state using the chatReducer and INITIAL_STATE
    const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);

    // Provide the ChatContext and the state along with the dispatch function to its children
    return (
        <ChatContext.Provider value={{ data: state, dispatch }}>
            {children}
        </ChatContext.Provider>
    );
};
