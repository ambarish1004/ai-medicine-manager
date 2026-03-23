# 💊 AI Medicine Manager

An AI-powered medicine management system that helps users track medication, analyze adherence behavior, and receive intelligent recommendations.

---

## 🚀 Features

- 📌 Add and manage medicines
- 📝 Track medication feedback (on-time, delay, side effects)
- 🧠 AI-based risk prediction
- 📊 Adherence score calculation
- ⚠️ Medicine conflict detection
- ⏰ Smart schedule adjustment
- 💡 Missed dose recovery suggestions
- 🔍 Explainable AI insights (reason behind decisions)

---

## 🧠 How It Works

1. User adds medicine details (name, dosage, time)
2. User logs feedback (taken or missed, delay, side effects)
3. AI engine analyzes:
   - Missed doses
   - Delay patterns
   - Side effects
4. System generates:
   - Risk level (Low / High)
   - Adherence score
   - Schedule adjustment
   - Recovery advice
   - Conflict warnings

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Chart.js (for visualization)

### Backend
- FastAPI (Python)
- SQLite (Database)

---

## 📁 Project Structure

AI-Medicine-Manager/
│
├── backend/
│ ├── app/
│ │ ├── main.py
│ │ ├── models/
│ │ ├── routes/
│ │ ├── services/
│ │ └── database.py
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── App.js
│ │ └── api.js
│
└── README.md

BACKEND SETUP (FastAPI)
🔹 Step 1: Go to backend folder
cd backend
🔹 Step 2: Create virtual environment (recommended)
python -m venv venv

Activate:

Windows:

venv\Scripts\activate

Mac/Linux:

source venv/bin/activate
🔹 Step 3: Install dependencies
pip install fastapi uvicorn sqlalchemy
🔹 Step 4: Run backend server
uvicorn app.main:app --reload --port 8001

👉 Backend will run at:

http://127.0.0.1:8001

👉 API Docs:

http://127.0.0.1:8001/docs
🌐 FRONTEND SETUP (React)
🔹 Step 1: Go to frontend folder
cd ../frontend
🔹 Step 2: Install dependencies
npm install
🔹 Step 3: Run frontend
npm start

👉 Frontend will run at:

http://localhost:3000
🔗 API Configuration

Make sure your frontend api.js has:

const BASE_URL = "http://127.0.0.1:8001";
🧪 Testing the System
Add medicines via UI or API
Add feedback data
Go to Get Insights
Enter medicine ID
View AI-generated results
📊 Sample Output
{
  "risk": "High Risk",
  "reason": "Frequent missed doses and high delay",
  "adherence_score": 65,
  "recovery_advice": "Take dose now",
  "conflicts": ["Avoid taking aspirin with ibuprofen"],
  "final_decision": "Shift time + High Alert"
}
📈 Future Enhancements
🤖 Machine Learning-based predictions
⌚ Wearable device integration
🏥 Doctor dashboard
☁️ Cloud deployment
📱 Mobile application
👨‍💻 Developed By

Final Year Computer Engineering Students
AI-based Healthcare Project
