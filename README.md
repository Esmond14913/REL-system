# REL Portal (HQA Laboratory Management System)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Local-first](https://img.shields.io/badge/Data-Local--first-blue.svg)](#architecture)
[![PWA](https://img.shields.io/badge/App-PWA--Ready-indigo.svg)](#features)

**REL Portal** is a high-performance, privacy-focused laboratory management system designed for HQA (Hardware Quality Assurance) workflows. It utilizes a **local-first** architecture, allowing teams to manage complex datasets directly through local Excel files without the need for a backend server.

---

## 🚀 Features

- **Local-first Data Engine**: Full CRUD operations directly on your local `.xlsx` files via the **File System Access API**.
- **Comprehensive Modules**:
  - **Records**: Real-time experiment and test record management.
  - **Tracking**: Advanced sample and inventory tracking with QR-ready IDs.
  - **Readiness**: Logistics and material readiness dashboard with ETA tracking.
  - **Stats**: Automated analytics and yield reports (excluding N/A results).
- **Responsive Dashboard**: Elegant, bilingual (ZH/EN) UI built with React & Tailwind CSS.
- **PWA Support**: Install it on your desktop/mobile for quick access and offline UI stability.

## 🏗️ Architecture

Unlike traditional web apps, REL Portal does not store your sensitive data in the cloud. 
1. **Direct Access**: Connect the portal to a local project folder.
2. **Auto-Sync**: The system automatically reads/writes to `HQA_Master_YYYYMMDD.xlsx`.
3. **Privacy**: Your data never leaves your computer or local network.

## 🛠️ Getting Started

### Prerequisites
- A modern browser that supports the **File System Access API** (Google Chrome or Microsoft Edge recommended).
- **HTTPS Environment**: The local file API requires a secure context.

### Usage
1. Open [index.html](index.html) in your browser.
2. Go to **Settings (系統設定)**.
3. Click **Connect Project Folder (連線專案資料夾)**.
4. Select your working directory. The system will automatically create or load the Master Excel file.

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

---
*Built with ❤️ for HQA Optimization.*
