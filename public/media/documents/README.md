Place the official Data Processing Agreement (DPA) PDF here so the site can link to it.

Filename and path:

public/documents/DPA.pdf

Behavior:

- The site references `/documents/DPA.pdf` (served from the `public/` folder).
- The link in the license text opens the PDF in a new tab via `target="_blank"` and uses `rel="noopener noreferrer"` for safety.

How to add the real PDF:

1. Copy your `DPA.pdf` into this folder.
2. Commit it to the repository (if appropriate for your project's legal/privacy rules):

```bash
# from repository root
mkdir -p public/documents
cp /path/to/your/DPA.pdf public/documents/DPA.pdf
git add public/documents/DPA.pdf
git commit -m "Add DPA PDF for license page"
```

If you prefer a placeholder file, tell me and I can add a small placeholder PDF here for testing.
