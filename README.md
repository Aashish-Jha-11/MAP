<div align="center">
  <img src="public/images/Banner.png" alt="ThoughtWeb Banner" width="600">
  
  # 🧠 ThoughtWeb
  
  ### Map your mind. Connect your thoughts. Visualize your life.
  
  [![GitHub](https://img.shields.io/badge/Aashish--Jha--11-ThoughtWeb-black?logo=github)](https://github.com/Aashish-Jha-11/MAP)
  [![Version](https://img.shields.io/badge/version-Beta-black)](https://github.com/Aashish-Jha-11/MAP)
  [![License](https://img.shields.io/badge/License-MIT-black)](LICENSE)
  
  <a href="https://aashish-jha-11.github.io/MAP/" target="_blank">
    <img src="https://img.shields.io/badge/🚀_Try_It_Live-black?style=for-the-badge" alt="Try ThoughtWeb" width="200">
  </a>
</div>

---

## 🎯 What is ThoughtWeb?

Ever feel like your thoughts are scattered across a million browser tabs in your brain? **ThoughtWeb** is your digital space to connect the dots—literally. 

Build interactive mind maps that link your education, work, hobbies, dreams, and everything in between. It's part brain dump, part visual diary, and 100% yours.

### ✨ Key Features

- 🎨 **Futuristic Cyberpunk UI** - Neon aesthetics that make organizing thoughts actually fun
- 🔐 **Cloud Sync with Google** - Sign in once, access anywhere via Supabase
- 💾 **Local-First** - Works offline, saves locally, no account needed
- 🎯 **Drag & Connect** - Intuitive interface for building complex networks
- 📱 **Mobile-Friendly** - Pinch to zoom, tap to connect, works on any device
- 🌐 **100% Open Source** - Fork it, break it, make it yours

---

## 🚀 Quick Start

### Using the App

1. **Create Your Center** - Drop your name, that's your universe's starting point
2. **Branch Out** - Click nodes to add children, build your categories
3. **Connect Ideas** - Hit connect mode and link related thoughts
4. **Edit Freely** - Double-click any node to rename it
5. **Never Lose Progress** - Auto-saves locally, cloud sync with Google sign-in

### Running Locally

```bash
# Clone this repo
git clone https://github.com/Aashish-Jha-11/MAP.git
cd MAP

# Install dependencies
npm install

# Fire it up
npm start

# Build for production
npm run build
```

---

## 🛠️ Tech Stack

- **React 18** - Because hooks are life
- **D3.js** - For those smooth SVG connections
- **Supabase** - PostgreSQL cloud sync + Google OAuth
- **LocalStorage** - Offline-first fallback
- **Pure CSS** - Custom cyberpunk theme, zero frameworks

---

## 💡 How Saving Works

**Without Login:** Everything saves to your browser's localStorage + downloads as JSON  
**With Google Sign-In:** Syncs to Supabase cloud (PostgreSQL) - access from anywhere, any device

Your data, your choice. No forced accounts, no tracking.

---

## 🤝 Contributing

Pull requests are welcome! Found a bug? Got a cool feature idea? Open an issue or fork the repo.

**Ideas for contributors:**
- More export formats (PNG, PDF, Markdown)
- Collaboration features (shared maps)
- Custom themes and color schemes
- Keyboard shortcuts
- Mobile app version

---

## 💭 The Story

This project was born during a Dr. Edward Rogers session about the importance of thought mapping. The idea hit hard, and thanks to some quality ADHD-fueled hyperfocus, ThoughtWeb went from concept to reality in record time.

Originally built with Firebase, now rebuilt with Supabase for better open-source vibes and a more generous free tier.

---

## 📄 License

MIT License - See [LICENSE](LICENSE) for details.

Built with caffeine and chaos by [Aashish Jha](https://github.com/Aashish-Jha-11)

---

<div align="center">
  <sub>If this helped you organize your brain, ⭐ star the repo!</sub>
</div>

## Description

ThoughtWeb is a web application that allows you to create and visualize your personal networks. You can add nodes representing different aspects of your life, such as education, work experience, hobbies, dreams, and family, and connect them to visualize relationships and dependencies.
<div align="center">


<div align="center">
    <a href="https://aashish-jha-11.github.io/MAP/" target="_blank">
        <img src="https://img.shields.io/badge/Make%20Your%20Own%20ThoughtWeb-black?style=for-the-badge&logoColor=white" alt="Make Your Own ThoughtWeb" width="300">
    </a>
</div>

</div>


## How to Use It

1. **Start Your Mind Map**: Enter your name to create the main node.
2. **Add Nodes**: Click on nodes to select them, and use the action panel to add child nodes.
3. **Connect Nodes**: Enable connect mode to link nodes together.
4. **Edit Nodes**: Double-click on nodes to edit their labels.
5. **Save and Load**: Use the top bar buttons to save your mind map to a file or load an existing one.

## How to Build It Locally

1. **Clone the repository**:
    ```sh
    git clone https://github.com/Aashish-Jha-11/MAP.git
    cd MAP
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

3. **Start the development server**:
    ```sh
    npm start
    ```

4. **Build the project**:
    ```sh
    npm run build
    ```

## File Description

- `index.html`: The main HTML file for the application.
- `index.js`: The entry point for the React application.
- `App.js`: The main application component.
- `ThoughtWeb.js`: The core component for creating and visualizing the mind map.
- `ThoughtWeb.css`: The CSS file for styling the ThoughtWeb component.

## How Saving Works

ThoughtWeb allows you to save your mind map to local storage and download it as a JSON file. You can also load a previously saved mind map from a JSON file.
Signing in with Google saves it on the cloud using Supabase (PostgreSQL), so if you sign in on any other device, it fetches your saved MindMap no matter where you saved it.

## Open Source Contributions

We welcome contributions from the community. Feel free to fork the repository, make changes, and submit a pull request.

## Acknowledgements

- I would like to thank Dr. Edward Rogers for his session on importance of a thought map like such in life, it was a huge inspiration behind this project.

- Also, I would love to thank my undiagnosed ADHD for impulsively jumping on the idea as soon as the session ended.

- This project has been rebuilt with Supabase instead of Firebase for better open-source compatibility and a generous free tier.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
