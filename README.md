# 🌐 FundBridge — Modern Crowdfunding & Donation Platform

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-blue?style=for-the-badge&logo=vercel)](https://fundbridge-frontend.vercel.app/profile)
[![React 19](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-Express%205-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Neon.tech-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)](https://neon.tech/)
[![Razorpay](https://img.shields.io/badge/Payments-Razorpay-0C2340?style=for-the-badge&logo=razorpay&logoColor=white)](https://razorpay.com/)
[![Resend](https://img.shields.io/badge/Email-Resend-000000?style=for-the-badge&logo=resend&logoColor=white)](https://resend.com/)

> **FundBridge** is a full-stack crowdfunding and fundraising platform designed to bridge the gap between people in need and compassionate donors. It features real-time campaign tracking, seamless Razorpay payment gateway integration, secure creator payout onboarding, DigiLocker mock KYC verification, and OTP-backed authentication.

---

## 🚀 Live Deployment

- **Frontend App:** [https://fundbridge-frontend.vercel.app/profile](https://fundbridge-frontend.vercel.app/profile)
- **Author GitHub:** [https://github.com/HARSH08BODKHE](https://github.com/HARSH08BODKHE)

---

## ✨ Features

- **🔐 Robust Authentication & Security**
  - Registration with cryptographic 6-digit email OTP verification via Resend.
  - Dual-identifier login (supports username or email).
  - Secure JWT authentication with 7-day expiration.
  - Multi-step OTP confirmation for sensitive actions: password change, payout details editing, and account deletion.

- **📢 Campaign Creation & Management**
  - Interactive multi-step campaign builder.
  - Direct Cloudinary image uploads with live preview.
  - Real-time goal vs. raised amount progress bars.
  - Filtering by category (Medical, Education, Emergency, Community) and dynamic sorting (Least time left, newest, goal amount).
  - Full CRUD capabilities for campaign owners.

- **💳 Seamless Donations & Payment Processing**
  - Razorpay checkout integration with instant order generation.
  - Cryptographic HMAC-SHA256 payment signature verification on the server.
  - Atomic database transactions to update raised amounts and record donations.
  - Support for both logged-in donors and anonymous/guest supporters.

- **🏦 Creator Payout Management**
  - Connected Razorpay route account linking.
  - OTP verification required prior to modifying sensitive payout accounts.

- **🛡️ KYC & Identity Verification**
  - DigiLocker mock identity verification workflow.
  - Verification status badges on user profiles and campaigns.

- **👤 Comprehensive User Profile & Dashboard**
  - Campaign metrics overview (total raised, donor count, active status).
  - Donation history with receipt details.
  - Account security center (password updates, profile editing, irreversible deletion with OTP).

---

## 🏗️ Architecture

```mermaid
graph TD
    A[React 19 + Vite Frontend] -->|REST API Calls| B[Express 5 Backend Server]
    B -->|SQL Queries & Pooling| C[(Neon PostgreSQL)]
    B -->|Orders & Webhook Verification| D[Razorpay Payment Gateway]
    B -->|Transaction OTP Emails| E[Resend Email API]
    A -->|Image Uploads| F[Cloudinary CDN]
```

---

## 📁 Repository Structure

```plaintext
FUNDRAISER/
├── fundbridge_backend/          # Node.js & Express REST API
│   ├── database.js              # PostgreSQL pool connection
│   ├── server.js                # Express app entry & auth endpoints
│   ├── middleware/
│   │   └── auth.js              # JWT & optionalAuth middleware
│   ├── routes/
│   │   ├── account.js           # Account settings & deletion with OTP
│   │   ├── campaignRoutes.js    # Campaign CRUD & filtering
│   │   ├── donations.js         # Donor & campaign donation history
│   │   ├── password.js          # Password reset with OTP
│   │   ├── payment.js           # Razorpay order creation & HMAC verification
│   │   ├── payout.js            # Creator payout linking & verification
│   │   └── verificationRoutes.js# DigiLocker mock KYC verification
│   ├── services/
│   │   ├── emailService.js      # Resend email sender
│   │   └── otpService.js        # Crypto OTP generation & DB storage
│   ├── database/
│   │   └── schema.sql           # Complete PostgreSQL DDL migration
│   ├── requests.rest            # VS Code REST client API tests
│   └── package.json
│
├── fundbridge_frontend/         # React 19 + Vite SPA
│   ├── src/
│   │   ├── components/
│   │   │   ├── Campaigns.jsx    # Campaign catalog & filters
│   │   │   ├── CreateCampaign.jsx # Campaign submission with image upload
│   │   │   ├── Donate.jsx       # Razorpay donation modal & processing
│   │   │   ├── Home.jsx         # Landing page & hero section
│   │   │   ├── Login.jsx        # User login
│   │   │   ├── Register.jsx     # User registration with OTP step
│   │   │   ├── Profile/         # Profile dashboard & sub-pages
│   │   │   └── Nav.jsx          # Responsive navigation bar
│   │   ├── config/
│   │   │   └── api.jsx          # Dynamic backend base URL
│   │   └── utils/
│   │       └── uploadImage.js   # Cloudinary image upload utility
│   ├── vite.config.js
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend Framework** | [React 19](https://react.dev/) + [Vite](https://vitejs.dev/) |
| **Routing** | [React Router DOM v7](https://reactrouter.com/) |
| **Styling** | Custom Vanilla CSS (Modern design, glassmorphism, responsive) |
| **Backend Framework** | [Node.js](https://nodejs.org/) + [Express 5](https://expressjs.com/) |
| **Database** | [PostgreSQL](https://www.postgresql.org/) via [Neon Serverless](https://neon.tech/) |
| **Payments** | [Razorpay](https://razorpay.com/) (Checkout & HMAC-SHA256 verification) |
| **Email Service** | [Resend](https://resend.com/) (Transactional OTP delivery) |
| **Media Hosting** | [Cloudinary](https://cloudinary.com/) (Unsigned image upload preset) |
| **Security** | JSON Web Tokens (`jsonwebtoken`), `bcrypt`, `crypto` |

---

## ⚙️ Local Development Setup

### 1. Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [PostgreSQL](https://www.postgresql.org/) instance or free cloud database on [Neon.tech](https://neon.tech/)
- [Razorpay Test Account](https://dashboard.razorpay.com/)
- [Resend Account](https://resend.com/)

---

### 2. Backend Setup

1. Open terminal and navigate to the backend folder:
   ```bash
   cd fundbridge_backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create your `.env` file based on the template:
   ```bash
   cp .env.example .env
   ```
4. Fill in the credentials in `.env`:
   ```env
   PORT=5000
   DATABASE_URL=postgresql://username:password@ep-sample-pooler.neon.tech/fundbridge?sslmode=require
   JWT_SECRET=your_jwt_secret_key_here
   RESEND_API_KEY=re_your_resend_api_key
   EMAIL_FROM=FundBridge <onboarding@resend.dev>
   RAZORPAY_KEY_ID=rzp_test_your_key_id
   RAZORPAY_KEY_SECRET=your_razorpay_secret
   ```
5. Initialize the database schema:
   Run the SQL statements found in `fundbridge_backend/database/schema.sql` in your PostgreSQL database (via psql, pgAdmin, or the Neon SQL Editor console).
6. Start the backend development server:
   ```bash
   npm run devStart
   ```
   Server will run on `http://localhost:5000`.

---

### 3. Frontend Setup

1. Open a separate terminal and navigate to the frontend folder:
   ```bash
   cd fundbridge_frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create your `.env` file based on the template:
   ```bash
   cp .env.example .env
   ```
4. Configure `.env`:
   ```env
   VITE_API_URL=http://localhost:5000
   VITE_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   VITE_CLOUDINARY_UPLOAD_PRESET=your_cloudinary_preset
   ```
5. Start the Vite dev server:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173`.

---

## 📡 API Reference Overview

| Method | Endpoint | Description | Protected |
| :--- | :--- | :--- | :---: |
| `POST` | `/register` | Register user & dispatch email OTP | No |
| `POST` | `/verify-registration` | Verify email OTP & activate account | No |
| `POST` | `/login` | Authenticate with email/username & password | No |
| `GET` | `/profile` | Fetch authenticated user details | Yes |
| `PUT` | `/profile` | Update profile information | Yes |
| `GET` | `/api/campaigns` | List active campaigns with filters | No |
| `POST` | `/api/campaigns` | Create new campaign | Yes |
| `GET` | `/api/campaigns/:id` | Get single campaign details | No |
| `PUT` | `/api/campaigns/:id` | Update campaign (owner only) | Yes |
| `DELETE`| `/api/campaigns/:id` | Delete campaign (owner only) | Yes |
| `POST` | `/api/payments/create-order` | Create Razorpay order for donation | Optional |
| `POST` | `/api/payments/verify` | Verify Razorpay payment signature & update balance | No |
| `GET` | `/api/donations/my-donations` | List donations received for user's campaigns | Yes |
| `GET` | `/api/payout` | Get user's Razorpay payout status | Yes |
| `PUT` | `/api/payout` | Save/update payout details (OTP required if updating) | Yes |

---

## 👨‍💻 Author

**Harsh Bodkhe**
- GitHub: [@HARSH08BODKHE](https://github.com/HARSH08BODKHE)
- Live Application: [FundBridge on Vercel](https://fundbridge-frontend.vercel.app/profile)

---

## 📄 License

This project is licensed under the [ISC License](LICENSE). Feel free to fork and build upon it!
