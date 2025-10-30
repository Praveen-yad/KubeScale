# 🌐 KubeScale, AI Powered MERN Deployment Platform

> **Containerize, orchestrate, and launch your MERN applications in minutes powered by Docker, Kubernetes, and CI/CD automation.**

---

## 🚀 Overview

**KubeScale** is a simplified SaaS platform designed to automate the deployment of **MERN applications**.  
It handles the complete DevOps workflow from code upload to live deployment using **Docker**, **Kubernetes**, and **GitHub Actions**.

KubeScale enables developers to:
- Upload a project (or connect a GitHub repo)
- Automatically containerize it using Docker
- Deploy and scale it through Kubernetes
- Access it instantly via a live public URL (using Ngrok for MVP)

---

## ✨ Features

✅ **Automatic Containerization**: Converts MERN apps into Docker containers  
✅ **Kubernetes Orchestration**: Manages and scales containers seamlessly  
✅ **CI/CD Integration**: Supports GitHub Actions for automated redeployments  
✅ **Live Deployment URLs**: Expose running apps instantly using Ngrok  
✅ **Smart Cleanup**: Removes `node_modules`, `build`, and `.git` before packaging  
✅ **Future-Ready Design**: Easily extendable with AI optimization and monitoring tools  

---


## 🧠 Architecture Overview

The platform is built around an automated deployment pipeline that transforms user submitted MERN projects into live, containerized web applications.

User Uploads ZIP / GitHub Repo
↓
[ Node.js Backend ]

Unzips & prepares project

Builds Docker image

Deploys via Docker or Kubernetes

Exposes via Ngrok public URL
↓
[ Frontend Dashboard ]

Displays deployment progress

Shows live public link and status


### 🏗️ How It Works
1. **Upload or Connect Repo** → User provides a ZIP file or GitHub repository link.  
2. **Unzip & Cleanup** → The backend extracts the project and removes large unnecessary folders (e.g., `node_modules`).  
3. **Containerize** → The app is automatically wrapped into a Docker image.  
4. **Deploy** → The image is deployed locally or to a Kubernetes cluster.  
5. **Expose Publicly** → A live link is generated using Ngrok for instant sharing.  
6. **Monitor** → Users can view build progress and deployment logs via the dashboard.


## 🧰 Tech Stack

| Layer | Technology |
|-------|-------------|
| **Frontend** | React (Vite), Tailwind CSS |
| **Backend** | Node.js, Express.js |
| **Database (if extended)** | MongoDB |
| **Containerization** | Docker |
| **Orchestration** | Kubernetes (Minikube for local MVP) |
| **CI/CD** | GitHub Actions |
| **Tunneling / Public URLs** | Ngrok (for MVP) |
| **Version Control** | Git & GitHub |
| **Environment Management** | dotenv |
| **Future Enhancements** | AI-powered Dockerfile generation & resource optimization |

### 💡 Why These Technologies?

- **React (Vite)** → Lightweight and fast frontend build system  
- **Node.js + Express.js** → Simplifies backend API handling and integration  
- **Docker** → Enables consistent deployment environments  
- **Kubernetes** → Provides scalability and self-healing for deployed containers  
- **Ngrok** → Offers quick public access for local deployments during MVP stage  
- **GitHub Actions** → Automates deployment pipelines via CI/CD  


## ⚙️ Installation & Setup

Follow these steps to run **KubeScale** locally for development or testing.

---

### 2️⃣ Install dependencies
Backend
cd backend
npm install

Frontend
cd ../frontend
npm install

### 3️⃣ Setup environment variables

Create a .env file inside your backend/ directory and add the following:

NGROK_AUTHTOKEN=<your_ngrok_token>

💡 You can get your Ngrok Auth Token from https://dashboard.ngrok.com
.

### 4️⃣ Start the servers
Run the backend
cd backend
npm run dev

Run the frontend
cd frontend
npm run dev


Your app will now be live at:

### Frontend → http://localhost:5173

### Backend → http://localhost:3000
