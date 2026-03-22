# ⛽ National Fuel Pass (Redesign)

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=flat&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

An open-source redesign of the official [National Fuel Pass](https://fuelpass.gov.lk/) system in Sri Lanka. This project aims to demonstrate how the existing system can be improved with a modern, mobile-first UI/UX while utilizing the same underlying APIs as the official website.

> [!NOTE]
> This is an **unofficial** open-source project. You can access the official National Fuel Pass website at [fuelpass.gov.lk](https://fuelpass.gov.lk/).

---

## 🎯 Motivation

The official [National Fuel Pass](https://fuelpass.gov.lk/) system is a vital tool for citizens, but its UI/UX can be significantly improved for a better user experience. This project was developed to show that a more intuitive, modern design is possible, all while using the **same official APIs**.

Key improvements in this redesign:
- **📱 Mobile-First Design**: Optimized for the most common use case — checking your pass on the go.
- **✨ Enhanced UX**: Simplified workflows and interactive elements like the flippable QR card.
- **💼 Wallet Integration**: Direct support for Apple and Google Wallets, reducing the need to rely on screenshots or SMS.

---

## ✨ Features

- **🔐 Secure Authentication**: Simple and secure login process.
- **📊 Real-time Quota Tracking**: View your remaining and eligible fuel quotas at a glance.
- **🎴 Interactive Fuel Card**: A flippable card that shows your QR code on the front and quota details on the back.
- **📱 Wallet Integration**: Add your fuel pass directly to **Apple Wallet** or **Google Wallet** for quick access.
- **🌓 Modern UI/UX**: A dark-themed, mobile-first design with smooth animations.
- **🔍 Quick Verification**: Built-in verification features for fuel pass validity.

---

## 🛠️ Tech Stack

- **Frontend Framework**: [Vite](https://vitejs.dev/) (Vanilla JS)
- **Styling**: Custom CSS with CSS Variables (Modern, Dark Theme)
- **Icons**: [Lucide](https://lucide.dev/)
- **QR Code Generation**: [qrcode](https://www.npmjs.com/package/qrcode)
- **State Management**: Reactive state-based rendering.

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

## 📲 Mobile Integration

The application is fully responsive and designed to be used as a mobile web app. It also supports direct integration with digital wallets:

- **Apple Wallet**: Generate a `.pkpass` file directly for iOS devices.
- **Google Wallet**: Integration with Google Wallet for Android devices.

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

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

- Ministry of Power & Energy
- Dialog Axiata PLC
- Millennium IT ESP
