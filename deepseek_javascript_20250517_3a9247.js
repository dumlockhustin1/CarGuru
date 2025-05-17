// DOM Elements
const chatMessages = document.getElementById('chatMessages');
const userInput = document.getElementById('userInput');
const sendMessageBtn = document.getElementById('sendMessageBtn');

// Conversation state
let conversationState = {
    step: 1,
    budget: '',
    carType: '',
    fuelType: '',
    mustHaveFeatures: [],
    drivingHabits: '',
    passengerCount: ''
};

// Sample car database (same as before)
const carDatabase = [...]; // Use the same car database from previous examples

// Initialize chat
document.addEventListener('DOMContentLoaded', () => {
    // Send message on button click
    sendMessageBtn.addEventListener('click', sendMessage);
    
    // Send message on Enter key
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
});

function sendMessage() {
    const message = userInput.value.trim();
    if (message === '') return;
    
    addMessage(message, 'user');
    userInput.value = '';
    processUserInput(message);
}

function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add(`${sender}-message`);
    
    const messageText = document.createElement('p');
    messageText.textContent = text;
    
    messageDiv.appendChild(messageText);
    chatMessages.appendChild(messageDiv);
    
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function processUserInput(input) {
    switch (conversationState.step) {
        case 1: // Budget
            conversationState.budget = input;
            addMessage(`Great! What type of vehicle are you looking for? (Sedan, SUV, Truck, etc.)`, 'bot');
            conversationState.step = 2;
            break;
            
        case 2: // Car type
            conversationState.carType = input;
            addMessage(`Do you prefer Gas, Hybrid, Electric, or no preference?`, 'bot');
            conversationState.step = 3;
            break;
            
        case 3: // Fuel type
            conversationState.fuelType = input;
            addMessage(`Any must-have features? (Separate with commas if multiple)`, 'bot');
            conversationState.step = 4;
            break;
            
        case 4: // Features
            conversationState.mustHaveFeatures = input.split(',').map(item => item.trim());
            addMessage(`What are your primary driving habits? (City, Highway, Off-road, etc.)`, 'bot');
            conversationState.step = 5;
            break;
            
        case 5: // Driving habits
            conversationState.drivingHabits = input;
            addMessage(`How many passengers do you typically need to accommodate?`, 'bot');
            conversationState.step = 6;
            break;
            
        case 6: // Passenger count
            if (!input || isNaN(input)) {
                addMessage('Please enter a valid number of passengers', 'bot');
                return;
            }
            conversationState.passengerCount = input;
            addMessage(`Thanks! Finding your perfect vehicles...`, 'bot');
            
            setTimeout(() => {
                showRecommendations();
            }, 1500);
            break;
            
        default:
            addMessage(`I'm not sure how to respond to that. Let me know if you'd like to start over.`, 'bot');
    }
}

function showRecommendations() {
    // Filter and display cars (same implementation as before)
    // ...
}