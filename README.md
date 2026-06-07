# Portfolio — Local preview

This is a small, responsive static portfolio site you can customize.

Files created:

- `index.html` — main page
- `css/styles.css` — styles
- `js/main.js` — small interactive helpers
- `img/profile.svg` — simple avatar placeholder

How to preview locally

Open `index.html` in a browser, or from a terminal serve the folder with Python's simple HTTP server (recommended):

PowerShell (from the `portfolio` folder):

```powershell
# serve on http://localhost:8000
python -m http.server 8000
```

Then open http://localhost:8000 in your browser.

How to customize

- Replace `img/profile.svg` with your photo or preferred SVG/PNG.
- Edit text in `index.html` (your name, about, project cards).
- Update colors and spacing in `css/styles.css`.
- Add project screenshots inside `img/` and link them from the project cards.

Where to upload your profile picture

- Place an image file named `profile.jpg` or `profile.png` in the `img/` folder and replace the existing `profile.svg` (or update the `src` in `index.html` to match the filename). Example path: `portfolio/img/profile.jpg`.
- For best results use a square image (min 600x600) and crop it to center on your face. Browser will resize it to fit the layout.

Suggested next content to add

- Project screenshots and short descriptions for each card under the Projects section.
- A downloadable resume (PDF) linked from the header or About section.
- Case studies: one-page writeups for 1-2 projects with problem, approach, and result.
- Links to code repositories (GitHub) for projects you want to showcase.
- Optional: add social proof (testimonials), certifications, or coursework highlights.

If you send me your profile image and any project links/text, I can add them into the site and deploy it for you.

Want more?

- I can add a resume download, contact form backend, deployment config (Netlify/Vercel), or convert this to a React app. Tell me which and I'll implement it.
