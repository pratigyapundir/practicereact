# 🛍️ MyStore — E-Commerce Web Application

A full-stack, single-page e-commerce web application built with React.js as a hands-on practice project — covering product browsing, search, pagination, authentication, and a working shopping cart.

🔗 **Live Demo:** [Add your deployed link here, e.g. Vercel/Netlify]
📂 **Repo:** github.com/pratigyapundir

---

## ✨ Features

- **Product Catalog** — Live product data fetched from the [DummyJSON API](https://dummyjson.com/), with product listing and detail pages
- **Search** — Debounced, API-driven search with results rendered in the same UI as normal browsing
- **Pagination** — Skip/limit-based pagination with Previous/Next controls that also work correctly across search results
- **Authentication** — Signup/Login with validation, user verification via JSON Server, session persistence with LocalStorage, protected routes, and logout
- **Shopping Cart** — Add/remove items, quantity control, duplicate prevention, live price calculation, and a real-time cart counter in the navbar
- **Responsive UI** — Built with Tailwind CSS, includes a dynamic navbar that adapts to authentication state

---

## 🛠️ Tech Stack

| Category | Tools |
|---|---|
| Frontend | React.js, React Router, Tailwind CSS |
| API / HTTP | Axios, DummyJSON API |
| Mock Backend | JSON Server |
| Persistence | LocalStorage |
| Build Tool | Vite |

---

## 📂 Project Structure

```
mystore/
├── backend/        # JSON Server mock backend (auth/users)
├── public/         # Static assets
├── src/
│   ├── components/ # Reusable components (SearchBar, ProductCard, etc.)
│   ├── pages/      # Route-level pages (ProductsList, ProductDetail, Cart, Login, Signup)
│   └── App.jsx
├── index.html
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/pratigyapundir/mystore.git
cd mystore

# Install dependencies
npm install

# Start the mock backend (JSON Server)
npm run server

# Start the frontend dev server
npm run dev
```

The app will be running at `http://localhost:5173`.

---

## 🧠 What I Learned

This project helped me practice connecting real application pieces together rather than isolated components:

**API → State → Components → Routing → Authentication → LocalStorage → UI**

Key concepts practiced: `useState`, `useEffect`, `useParams`, `useNavigate`, `useMemo`/`useCallback`, debounced search, request cancellation with `AbortController`, and protected routing patterns.

---

## 📌 Notes

This is an active practice project — I'm continuing to improve authentication, component architecture, and cart functionality.