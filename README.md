# Southeast Winter Retreat Website (2027)

Official website and multi-track workshop directory for the **2027 Southeast College Winter Retreat** (Jan 29 – Jan 31, 2027 at Liberty University Mountain Conference Center, VA).

* **Live Website:** [sewr26.netlify.app](https://sewr26.netlify.app)
* **GitHub Repository:** [KevinHu101/southeast-winter-retreat](https://github.com/KevinHu101/southeast-winter-retreat)

---

## 🚀 How Auto-Deployment Works
This project is connected to **Netlify** via Continuous Deployment linked to the `main` branch of this GitHub repository. 
* Whenever a change is pushed to GitHub, Netlify automatically builds and updates the live site within seconds. 
* **No manual file uploading or Netlify drops are required anymore.**

---

## 🛠️ Project Structure
* `index.html` — Main landing page (Hero, About, Details & Pricing, Promo Video, Packing Checklist, Registration/Google Form, FAQ).
* `workshops.html` — Multi-track workshop cards, descriptions, and speaker details.
* `styles.css` — Custom styling adhering to the winter/icy aesthetic palette (`#E3F2FD`, `#3A7CA5`, `#0B192C`, etc.).
* `script.js` — Interactive elements including falling snowflakes, mobile menu toggles, and dynamic scroll-spy tracking.
* `asset/` — Images, icons, and media files used across the site.

---

## 📝 How to Update the Website

If you need to make updates (such as changing dates, adding workshops, or updating pricing deadlines), follow these steps:

### 1. Make your edits locally
Open the project folder in your code editor (like VS Code), make the necessary text, style, or script updates in the respective files (`index.html`, `styles.css`, etc.), and test them locally by opening `index.html` in your browser.

### 2. Commit and Push to GitHub
Open your terminal inside the project folder and run:

```bash
# Check which files were modified
git status

# Stage all changes
git add .

# Commit with a clear description of your update
git commit -m "Update schedule / workshop details"

# Push changes to GitHub (this triggers auto-deployment!)
git push origin main