# Simple Counter App

A simple React web application that includes a counter and buttons that increment the counter by different values. The app implements features like button disablement based on time intervals and automatic counter decay after idle time.

## Features

- **Counter**: The counter starts from 0 and increments by values defined by the buttons.
- **Buttons**: Three buttons with values 1, 2, and 3 that increase the counter by the corresponding value.
- **Button Disablement**: After a button is clicked, it is disabled for a duration of `0.5 * increment value` (e.g., for value 1, it will be disabled for 0.5s).
- **Idle Timeout**: If no button is clicked for 10 seconds, the counter starts decreasing by 1 every second until it reaches 0.
- **Decaying Timer Reset**: Clicking a button resets the idle timeout and stops the decay process.

## Project Setup

To run this project locally, follow the steps below.

### Prerequisites

Make sure you have **Node.js** and **npm** installed. You can check by running the following commands in your terminal:

```bash
node -v
npm -v
```

### 1.Clone this repository to your local machine:

```bash
git clone https://github.com/AbAyvazyan/counter.git
cd counter
```
### 2.Install the dependencies:

```bash
npm install
```

## Run the Development Server

```bash
npm run dev
```

This will start the development server, and you should be able to view the app in your browser at http://localhost:5173.