# Workflows Documentation

This document explains all GitHub Actions workflows used in this project.  
It also gives troubleshooting help if something fails.

---

## 1. CI Pipeline

**Purpose:**  
The CI pipeline makes sure code quality is good before merging.  
It checks lint, formatting, tests, and build.  

**Triggers:**  
- Runs when code is pushed to `main` or `develop`.  
- Runs on pull requests to `main`.  

**Jobs:**  
1. **Lint** → run ESLint and Prettier check.  
2. **Test** → run Jest unit tests, create coverage report, upload to Codecov.  
   - Pipeline fails if coverage < 80%.  
3. **Build** → build application, save output as artifact.  

**Dependencies:**  
- `test` waits for `lint`.  
- `build` waits for `test`.  

**Secrets:**  
- `CODECOV_TOKEN` (needed to upload coverage report).  

---

## 2. Dependency Audit

**Purpose:**  
Check for security problems in dependencies.  

**Triggers:**  
- Runs daily at midnight (via cron schedule).  

**Job:**  
- Install dependencies.  
- Run `npm audit` to check for vulnerabilities.  

**Secrets:**  
- None.  

---

## 3. Deploy

**Purpose:**  
Deploy the built application to GitHub Pages.  

**Triggers:**  
- Runs on every push to `main` branch.  

**Job:**  
- Install dependencies.  
- Run `npm run build`.  
- Publish the `dist/` folder to GitHub Pages.  

**Secrets:**  
- `GITHUB_TOKEN` (provided automatically by GitHub).  

**Status Badge:**  
In `README.md`, we added:  
```markdown
![Deploy](https://github.com/mnmahy34/CSP451-CheckPoint3-mnmahy/actions/workflows/deploy.yml/badge.svg)
