# Sheikh Farhan Khan: portfolio (React + Vite, GitHub Pages)
Build: `npm install` then `npm run dev` (local) or `npm run build` (outputs `dist/`).
All content lives in `src/data/profile.js`. Nothing else needs editing for content changes.

## HOW TO UPDATE YOUR PORTFOLIO LATER
**A. Profile photo:** put your new image in `public/assets/images/` named `profile.jpeg` (replace the old one). Different filename or .jpg? Change `photo` in `src/data/profile.js`. If the file is missing the site shows your initials.
**B. ML & GenAI CV:** replace `public/assets/cv/Sheikh_Farhan_Khan_ML_GenAI_CV.pdf` with the new PDF, same filename. It is the only CV linked on the site.
**C. Add a project:** open `src/data/profile.js`, copy one block inside `projects`, paste it at the end, change the text. `cat` must use names from `filters`. Add `links:{github:'https://github.com/...'}` only for real URLs.
**D. Skills:** edit the `skills` object (one list per group) in the same file.
**E. Education:** edit the `education` list in the same file.
**F. Deploy:** one-time: GitHub repo > Settings > Pages > Source: "GitHub Actions". Then commit and push to `main` (`git add . && git commit -m "update" && git push`). The workflow in `.github/workflows/deploy.yml` builds and publishes. Site: https://farhankhan1625.github.io/farhankhan1625/
If you rename the repo, change `base` in `vite.config.js` to `'/<new-name>/'`.

## To check manually
Email (none in your CVs), profile photo file, project repo/demo links, extra projects (Block-wise Waterbody Estimation, AI-Assisted Surface Water Mapping, Grain Cleaner, Tourist Mapping, Autism Detection: no details in the CVs), social preview image.
