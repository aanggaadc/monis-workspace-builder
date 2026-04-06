# 🖥️ Workspace Builder

Interactive workspace builder built with Next.js. Users can customize their desk setup by selecting items like desks, chairs, monitors, and accessories with real-time preview.

---

## ✨ Features

- 🎯 Interactive canvas preview
- 🪑 Select desk, chair, monitor, and accessories
- 🔒 Conditional selection (monitor requires desk)
- 🔁 Toggle accessories (add/remove)
- 🎨 Smooth animations with Framer Motion
- 📱 Responsive UI with Tailwind CSS
- ⚡ State management with Zustand

---

## 🧱 Tech Stack

- Framework: Next.js (App Router)
- Styling: Tailwind CSS
- State Management: Zustand
- Animation: Framer Motion
- Image Optimization: Next/Image

---

## 📂 Project Structure

src/
│
├── app/
│   └── builder/
│       └── page.tsx
│
├── components/
│   ├── Canvas.tsx
│   ├── ItemSelector.tsx
│   └── SummaryPanel.tsx
│
├── data/
│   └── products.ts
│
├── store/
│   └── useWorkspaceStore.ts
│
├── types/
│   └── workspace.ts

---

## 🚀 Getting Started

### 1. Clone project

git clone https://github.com/your-repo/workspace-builder.git
cd workspace-builder

### 2. Install dependencies

npm install

### 3. Run development server

npm run dev

Open http://localhost:3000

---

## 🧠 Core Logic

### State Management (Zustand)

- desk, chair, monitor → single select
- accessories → multi select (toggle)

### Conditional Selection

Monitor hanya bisa dipilih jika desk sudah ada

### Canvas Rendering

- Layered rendering (desk → monitor → accessories → chair)
- Absolute positioning
- Animated with Framer Motion

---

## 🎨 UI Behavior

- Selected item → highlight
- Disabled tab → reduced opacity
- Consistent card height across items
- Image auto-fit using object-contain

---

## ⚠️ Known Limitations

- No drag & drop positioning (yet)
- No persistence (refresh resets state)
- Fixed item positioning from data

---

## 🛠️ Future Improvements

- Drag & drop accessories
- Save / load workspace config
- Price calculation & summary
- Undo / redo system
- Multi-monitor support
- API-driven product data

---

## 👨‍💻 Author

Built by Angga
