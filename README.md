# 🍽️ Eat-'N-Split'

A simple React application designed to help friends split bills and track shared expenses. This project was built as part of [Jonas Schmedtmann's "The Ultimate React Course"](https://www.udemy.com/course/the-ultimate-react-course/) on Udemy to practice fundamental React concepts.

## 🚀 Live Demo

You can view and interact with the live project here:

**[https://shaabanelnhas.github.io/Eat-N-Splite/](https://shaabanelnhas.github.io/Eat-N-Splite/)**

## ✨ Features

* **Add Friends:** Easily add new friends to your list.
* **Split Bills:** Select a friend to open the bill-splitting form.
* **Calculate Expenses:** Enter the total bill value and your expense, and the app automatically calculates your friend's portion.
* **Track Balances:** The app updates and displays who owes whom, making it easy to see if you are even, you owe money, or your friend owes you.
* **Clean UI:** Toggle forms open and closed for a user-friendly experience.

## 🛠️ Core Concepts Implemented

This project was a key exercise in understanding and implementing core React patterns:

* **React Components:** The application is broken down into reusable components (`AllFriends`, `FormAddFriend`, `FormSplit`, `Friend`).
* **React Hooks:** Primarily uses `useState` to manage all application state.
* **State Management (Lifting State Up):** The main `App` component holds and manages all shared state (like the `friends` list and `selectedFriend`) and passes it down to child components via props.
* **Controlled Components:** All forms (`FormAddFriend` and `FormSplit`) are implemented as controlled components, with their state living in the parent.
* **Derived State:** The friend's expense is calculated as derived state (`const friendExpense = billValue - yourExpense;`) to ensure it's always in sync.
* **Conditional Rendering:** Used extensively to show/hide components (like the `FormSplit` and `FormAddFriend`) based on the application's state.

## 📂 How to Run Locally

1.  Clone the repository:
    ```bash
    git clone [https://github.com/ShaabanElnhas/Eat-N-Splite.git](https://github.com/ShaabanElnhas/Eat-N-Splite.git)
    ```
2.  Navigate to the project directory:
    ```bash
    cd Eat-N-Splite
    ```
3.  Install dependencies:
    ```bash
    npm install
    ```
4.  Start the development server:
    ```bash
    npm start
    ```
