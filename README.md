# 🚀 LeetCode Progress Tracker

A simple and interactive web application that allows users to search for a LeetCode username and view their problem-solving progress based on **Easy, Medium, and Hard** problems.

## 🌐 Project Overview

The LeetCode Progress Tracker fetches user statistics from a LeetCode API and dynamically displays the user's problem-solving progress.

It provides a quick visual overview of how many problems the user has solved and their progress across different difficulty levels.

## ✨ Features

- 🔎 Search LeetCode users by username
- 📊 Display solved problems by difficulty
- 🟢 Easy problems progress
- 🟡 Medium problems progress
- 🔴 Hard problems progress
- 📈 Calculate difficulty-wise solving percentage
- ⚡ Fetch data dynamically using API
- 🎨 Responsive and simple user interface
- 🔄 Update results without refreshing the page

## 🛠️ Technologies Used

- **HTML5** — Structure of the application
- **CSS3** — Styling and responsive UI
- **JavaScript** — Application logic and DOM manipulation
- **REST API** — Fetching LeetCode user statistics
- **Fetch API** — Making asynchronous API requests
- **JSON** — Processing API response data

## 📂 Project Structure

```text
leetcode-progress-tracker/
│
├── index.html
├── style.css
├── java.js
└── README.md
```

## 🔄 How It Works

1. User enters a LeetCode username.
2. JavaScript sends a request to the LeetCode statistics API.
3. The API returns the user's problem-solving data.
4. The application processes the JSON response.
5. Solved problems are categorized into:
   - Easy
   - Medium
   - Hard
6. The results are dynamically displayed on the webpage.

## 📊 Progress Calculation

The application calculates the solving percentage for each difficulty level.

```text
Percentage = (Solved Problems / Total Problems) × 100
```

For example:

```text
Easy:
Solved = 100
Total = 969

Percentage = (100 / 969) × 100
```

The same calculation is performed for Medium and Hard problems.

## 💡 Key Concepts Learned

While building this project, I worked with:

- JavaScript `fetch()`
- Promises
- `async/await`
- REST APIs
- JSON data
- DOM manipulation
- Event handling
- Dynamic UI updates
- Error handling
- API response processing
- CORS-related API issues

## ▶️ How to Run Locally

Clone the repository:

```bash
git clone https://github.com/sauravkushwaha283/leetcode-progress-tracker.git
```

Open the project folder:

```bash
cd leetcode-progress-tracker
```

Then open:

```text
index.html
```

in your browser.

You can also use **VS Code Live Server** to run the project.

## 🔗 GitHub Repository

[LeetCode Progress Tracker](https://github.com/sauravkushwaha283/leetcode-progress-tracker)

## 👨‍💻 Author

**Sourav Kushwaha**

Computer Engineering Student

GitHub: [@sauravkushwaha283](https://github.com/sauravkushwaha283)

---

⭐ If you find this project useful, consider giving it a star!
