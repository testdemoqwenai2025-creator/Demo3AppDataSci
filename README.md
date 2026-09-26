# Demo3AppDataSci

**Public preview endpoint for the ModernDataSciEng Platform.**

This repository is a **preview-only mirror** — it does NOT contain source code.

## Where is the source code?

The full source lives in the **private** repository:
**[AppDataSci3-Advanced](https://github.com/testdemoqwenai2025-creator/AppDataSci3-Advanced)****

All development, contributions, and issue tracking happen there.

## Live preview

The built static site is served from the `gh-pages` branch:

### <https://testdemoqwenai2025-creator.github.io/Demo3AppDataSci/>

It updates automatically on every push to `main` on the private repo, via the
`deploy-pages.yml` GitHub Actions workflow.

## Why is `main` empty?

Per the project's architecture:

- **Private repo (`AppDataSci3-Advanced`)**: source of truth — all source
  code, worklog, design docs, configs, scripts.
- **Public repo (`Demo3AppDataSci`)**: HTML-only preview endpoint — built
  static site served via GitHub Pages from the `gh-pages` branch.

This separation ensures interested parties can preview the platform without
signing an NDA, while keeping the source code private.

## Repository structure

```
Demo3AppDataSci/
├── main/         ← this branch: stub README (this file) only
└── gh-pages/    ← built static site (HTML/CSS/JS), force-pushed by deploy-pages.yml
```

## Contact

- Email: `testdemoqwenai2025@gmail.com`
- GitHub: [@testdemoqwenai2025-creator](https://github.com/testdemoqwenai2025-creator)
- Source repo: [AppDataSci3-Advanced](https://github.com/testdemoqwenai2025-creator/AppDataSci3-Advanced)

## Licence

Reference / educational use. Synthetic data only. © ModernDataSciEng Ltd (fictional).
