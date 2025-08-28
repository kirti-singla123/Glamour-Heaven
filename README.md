# ✨ GlamourHaven – Service Booking Website  

**GlamourHaven** is a full-stack service booking platform that allows **customers** to book salon/spa services online, while enabling **staff/admins** to manage those bookings through a secure dashboard.  

The system is built with a **React frontend** and a **Django backend**, seamlessly connected via **REST APIs**.  

---

## 🌐 Live Links

- 🌸 **Customer Booking Page:** [glamourheaven.netlify.app](https://glamourheaven.netlify.app)
- 👩‍💼 **Admin Dashboard (Login Required):** [glamourheaven.netlify.app/dashboard](https://glamourheaven.netlify.app/dashboard)  
  **💡 Demo Credentials:**  
  &nbsp;&nbsp;• **Username:** `dell`  
  &nbsp;&nbsp;• **Password:** `admin123`
- ⚙️ **Backend API Root (Developer Only):** [glamourheaven-backend.onrender.com](https://glamourheaven-backend.onrender.com)
- 📊 **Bookings API:** [glamourheaven-backend.onrender.com/api/bookings/](https://glamourheaven-backend.onrender.com/api/bookings/)


---

## ✨ Features  

### 👩‍💻 For Customers  
- ✅ Browse and book **salon/spa services**  
- ✅ Simple & responsive **booking form**  
- ✅ Smooth, modern **UI/UX** (desktop & mobile)  

### 🛠️ For Staff/Admins  
- ✅ **Dashboard** to view all bookings  
- ✅ **Accept / Reject** bookings in one click  
- ✅ Add **manual bookings** (walk-in customers)  
- ✅ **WhatsApp notifications** via Twilio API (on accept/reject)  
- ✅ Secure **login-protected dashboard** (APIs locked without authentication)  

---

## 🛠️ Tech Stack  
- 🎨 **Frontend**: React + Tailwind CSS → *(Deployed on Netlify)*  
- ⚙️ **Backend**: Django + Django REST Framework → *(Deployed on Render)*  
- 🗄️ **Database**: SQLite3  
- 💬 **Messaging**: Twilio API (WhatsApp integration)  
- 🔗 **Integration**: REST APIs (Frontend ↔ Backend)  

---

## 🚀 Deployment Workflow  
- 🌍 **Frontend** hosted on **Netlify**  
- ⚡ **Backend** hosted on **Render**  
- 🔗 Connected via **REST APIs**  

---

## 📌 API Documentation

Below is a list of all main REST API endpoints available in the backend:

| Endpoint | Method | Description |
|----------|---------|-------------|
| `/` | GET | Root welcome message |
| `/admin/` | - | Django Admin site |
| `/api/token/auth/` | POST | Obtain authentication token (login) |
| `/api/bookings/` | GET | List all bookings (Auth required) |
| `/api/bookings/` | POST | Create a new booking (Public allowed) |
| `/api/bookings/{id}/` | GET | Retrieve booking details (Auth required) |
| `/api/bookings/{id}/` | PATCH | Update a booking (Auth required) |
| `/api/bookings/{id}/` | DELETE | Delete a booking (Auth required) |
| `/api/bookings/{id}/accept/` | POST | Accept a booking & send WhatsApp notification |
| `/api/bookings/{id}/reject/` | POST | Reject a booking & send WhatsApp notification |


## 📌 Summary  
This project delivers a **complete salon booking solution**, featuring:  
- 🌸 A **customer-facing booking platform**  
- 👩‍💼 A **secure admin dashboard**  
- 🔗 **API-driven integration** with authentication & notifications  

✨ A showcase of **full-stack development, API integration, authentication, and third-party service integration**.  
