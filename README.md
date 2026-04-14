# Bulk User Management System

## 🚀 Tech Stack
- Node.js
- Express
- MongoDB

## 📌 Features
- Bulk user creation (15,000+ records)
- Bulk update using bulkWrite
- Schema validation & unique email constraint
- Indexed database for performance
- JSON export
- BSON backup support

## ⚙️ Setup
npm install
npm start

## 📡 APIs

### Bulk Create
POST /api/users/bulk-create

### Bulk Update
PUT /api/users/bulk-update

### Export JSON
GET /api/users/export/json

## 📦 Export BSON
mongodump --db your_db --out backup/

## 🧠 Architecture
Controller → Service → MongoDB

## ⚡ Performance
- Chunking for large data
- MongoDB indexing
- BulkWrite optimization