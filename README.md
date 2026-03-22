# ⛽ National Fuel Pass (Redesign)

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=flat&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Lucide](https://img.shields.io/badge/Lucide-EB5757?style=flat&logo=lucide&logoColor=white)](https://lucide.dev/)

An open-source redesign of the official [National Fuel Pass](https://fuelpass.gov.lk/) system in Sri Lanka. This project demonstrates how a modern, mobile-first UI/UX can improve the user experience of a vital public service, while utilizing the **official APIs** directly.

> [!IMPORTANT]
> This is an **unofficial** community project. You can access the official National Fuel Pass website at [fuelpass.gov.lk](https://fuelpass.gov.lk/).

---

## 🎯 Motivation

The official [National Fuel Pass](https://fuelpass.gov.lk/) system is a vital tool for citizens, but its interface can be optimized for better mobile accessibility and user engagement. This redesign explores a more intuitive, modern design that prioritizes:

- **📱 Mobile-First Accessibility**: Optimized specifically for checking passes and quotas on the go.
- **✨ Enhanced UX/UI**: Clean interface with smooth animations and interactive elements.
- **⚡ Performance**: Built with Vanilla JS and Vite for near-instant load times and a lightweight footprint.

---

## ✨ Features

- **🔐 Secure Authentication**: Integrated with the official OTP-based login system.
- **📊 Real-time Quota Tracking**: Visual progress bars and clear indicators for remaining and eligible fuel quotas.
- **🎴 Interactive Fuel Card**: A flippable card component that shows the QR code on the front and detailed quota information on the back.
- **🌓 Dynamic Theming**: Full support for Dark and Light modes with a floating theme switcher.
- **📱 Wallet Integration (POC)**: UI support for Apple and Google Wallets, demonstrating how passes can be integrated for native mobile access.
- **🔔 Toast Notifications**: In-app notifications for status updates and error handling.
- **🔍 Quick Verification**: Fast and easy verification of fuel pass validity using official backend data.

---

## 🛠️ Tech Stack

- **Frontend**: [Vite](https://vitejs.dev/) (Vanilla JavaScript - No heavy frameworks)
- **Styling**: Custom CSS with **CSS Variables** for theming and responsive design.
- **Icons**: [Lucide](https://lucide.dev/) for consistent, lightweight iconography.
- **QR Code**: [qrcode](https://www.npmjs.com/package/qrcode) for client-side generation.
- **State Management**: A custom reactive state-based rendering system.

---

## 📁 Project Structure

```text
src/
├── api/          # API integration with official fuelpass.gov.lk endpoints
├── assets/       # Static assets like images and SVGs
├── components/   # Modular UI components (Dashboard, Login, Verify, etc.)
├── state/        # Reactive application state management
├── utils/        # Utility functions (QR generation, Toast, Wallet POC, etc.)
├── constants.js  # App-wide constants and screen definitions
├── main.js       # Application entry point
└── style.css     # Global styles and theme definitions
```

---

## 📦 Installation

To get the project up and running locally, follow these steps:

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/chathurabuddi/fuel-pass.git
    cd fuel-pass
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

---

## 🏃 Running the Project

### Development Server
To start the development server with hot reload:
```bash
npm run dev
```

### Build for Production
To create an optimized production build:
```bash
npm run build
```

### Preview Production Build
To preview the production build locally:
```bash
npm run preview
```

---

## 📲 Mobile Integration & Wallet

The application is designed as a **Progressive Web App (PWA)** ready experience. It includes UI integration points for:

- **Apple Wallet**: Concept for direct `.pkpass` file generation.
- **Google Wallet**: Concept for Google Wallet API integration.

*Note: In this demo version, wallet buttons currently trigger a QR code download as a proof-of-concept.*

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

When a change affects architecture, user flow, API behavior, scripts, or setup, update both `AGENTS.md` and `README.md` in the same pull request.

Please see [CONTRIBUTING.md](CONTRIBUTING.md) for more information on how to get started.

---

## ⚠️ Disclaimer

This is a **community-driven, open-source project** and is NOT affiliated with the Ministry of Power & Energy, Dialog Axiata PLC, or any official government body. 

- This application uses the same APIs as the official website.
- It is intended for demonstration purposes only.
- Users are encouraged to use the official website for critical transactions and official information.

---

## 📜 License

Distributed under the **MIT License**. See [LICENSE](LICENSE) for more information.

---

## 🙏 Credits

- Ministry of Power & Energy, Sri Lanka
- Dialog Axiata PLC
- Millennium IT ESP
