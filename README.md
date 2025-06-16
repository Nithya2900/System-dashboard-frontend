# 📊 System Dashboard Frontend

This is the frontend interface for the **System Dashboard** — a real-time system monitoring application that displays live stats such as CPU usage, memory, disk space, and system details. Built using **React.js**, it fetches data from a Node.js backend API and presents it with a clean, interactive dashboard UI.

## ✨ Features

- 💻 Real-time display of system stats
- 📈 CPU, memory, and disk usage visualization
- 🧠 OS and hardware info viewer
- 🔄 Auto-refreshing data (optional toggle)
- 📱 Responsive layout (works on mobile too)

## 🔧 Technologies Used

- **React.js**
- **Axios** – for HTTP requests
- **CSS** – custom-styled without Tailwind or Bootstrap
- **Chart.js** (optional for graphs if added)


## 🌐 Backend Integration

The frontend fetches system stats from the following API:

```http
GET https://system-dashboard-backend-wl6q.onrender.com
```
## 🚀 How to Run Locally
```bash
Clone the repository:
git clone https://github.com/Nithya2900/System-dashboard-frontend.git
cd System-dashboard-frontend

Install dependencies:
npm install

Start the development server:
npm start

Open your browser and visit:
http://localhost:3000
```

🌍 ## Deployment
The frontend is live on Netlify
🔗 Live URL: https://system-dashboard-frontend.netlify.app/


