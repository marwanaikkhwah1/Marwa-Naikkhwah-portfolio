# Marwa Naikkhwah — Personal Portfolio (React + Vite)

A professionally styled, responsive, dark-purple **React + Vite** developer portfolio featuring **five real projects**, two Coursera course certificates, a one-page ATS-friendly PDF resume, and editable profile details.

Inspired by the dark-purple reference chosen by Marwa. This site is **not** yet published; the included links lead to her existing public GitHub repositories and existing live blog dashboard.

## 1. Open the site on your computer

1. Extract the ZIP. Do not open only the ZIP preview.
2. Open the extracted **marwa-portfolio** folder in **VS Code**.
3. Open **Terminal > New Terminal**.
4. Run:

   ```bash
   npm install
   npm run dev
   ```

5. Vite will display a local URL, commonly `http://localhost:5173/`. Open it in your browser. Leave the terminal running while you work.

**What the commands mean:** `npm install` downloads the packages listed in `package.json`. `npm run dev` starts the Vite development server, which refreshes the site when you edit code. Both commands require Node.js installed; `npm install` needs internet access the first time.

## 2. Make a production build

```bash
npm run build
```

This generates the optimized website in the `dist/` folder. You can test it with `npm run preview`.

## 3. Publish it on Netlify

- Push this project to a new GitHub repository **or** upload the built `dist` folder to Netlify.
- If importing the repository in Netlify, use **Build command: `npm run build`** and **Publish directory: `dist`**.
- A `public/_redirects` file is included for convenient single-page hosting.
- **Custom domain:** First publish with a free `.netlify.app` URL. You can buy a domain later, then connect it under Netlify's domain management settings. The custom domain is not purchased or connected by this project.

## 4. Where to edit things

| File/folder | What to change |
|---|---|
| `src/data.js` | Name, professional summary, projects, skills, experience, education, certificates, links |
| `src/App.jsx` | Layout, buttons, interactions, section order |
| `src/style.css` | Purple color palette, sizes, animations, mobile styles, themes |
| `public/projects/` | Replace the 5 stylized **illustrations** with screenshots of your **actual projects** |
| `public/certificates/` | Replace cropped previews with full-resolution certificate images if you wish |
| `public/resume/Marwa_Naikkhwah_Resume.pdf` | Replace the resume PDF with an updated one when needed |
| `public/favicon.svg` | Change the site icon |

### Add a new project

In `src/data.js`, add a new object to `featuredProjects` or `otherProjects` using the same keys (`id`, `title`, `summary`, `contribution`, `tags`, `image`, `github`, `demo`, etc.). The site automatically displays it.

**Note:** The filter is controlled by the two arrays. Update the `05 PROJECTS` count in `src/App.jsx` if you add or remove projects (currently a deliberate display label).

## 5. Real projects included

- Blog Management Dashboard — [GitHub](https://github.com/marwanaikkhwah1/blog-management-dashboardc) · [Live](https://marwa-blog-dashboard.netlify.app)
- MyPatientHUB — [GitHub](https://github.com/marwanaikkhwah1/MyPatientHUB)
- Travel Recommendation — [GitHub](https://github.com/marwanaikkhwah1/travel-recommendation)
- Calculator — [Source file](https://github.com/marwanaikkhwah1/first-git/blob/main/calculator.html)
- Responsive Image Gallery — [GitHub](https://github.com/marwanaikkhwah1/Responsive-image-gallery)

The duplicate `CodeAlpha-ImageGallery` repo is **not** displayed. Only the actual existing Blog dashboard has a confirmed public live demo. **Do not guess public demo URLs** for the others.

## 6. Certificate notes

Two real certificate previews were cropped from the image Marwa supplied:
- IBM / Coursera — JavaScript Programming Essentials (Sep 2026)
- University of Michigan / Coursera — Web Development Fundamentals: HTML, CSS, and JavaScript (Sep 2026)

Public Coursera verification URLs were not supplied, so the buttons **open the certificate preview** instead of falsely claiming an external verification link. Update `src/data.js` and the certificate component if you later want to add public credential verification links. The site's image previews are from a screenshot, not original PDF certificates.

## 7. Accuracy and privacy

- Internship at **Hewad Future Consulting (HBC)** is described as a **UNICEF-supported program**, not employment with UNICEF.
- University dates, English level, and educational details are taken from Marwa's own information. English proficiency is **self-reported**.
- Skills are grouped as practical experience vs. studies; listing a skill is not a claim of a certificate.
- Neither this website nor the ZIP includes private login credentials, API keys, a contact-form backend, or user analytics.
- Contact uses `mailto:` and an optional "Copy email" button.
- No personal portrait; the design is typography-led.
- Fonts load from Google Fonts when internet is available and fall back to system fonts offline.

## 8. Dependencies

React, React DOM, Vite, and Lucide React icons. No Tailwind, UI template framework, server, or database required.

---

Created for Marwa Naikkhwah, October 2026. Editable source code is included.
