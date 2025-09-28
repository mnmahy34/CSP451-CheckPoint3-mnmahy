# CSP451-CheckPoint3 – GitHub Actions

This project demonstrates how to use **GitHub Actions** to automate Continuous Integration (CI), security scanning, and deployment to GitHub Pages.  
It was built as part of a learning assignment to practice DevOps and automation.

## 🎯 Learning Objectives
- Implement Continuous Integration workflows  
- Automate testing and deployment processes  
- Use GitHub Actions marketplace  
- Implement security scanning and code quality checks  

## ⚙️ Workflows Overview

| Workflow          | Status | Description |
|-------------------|--------|-------------|
| **CI Pipeline**   | ![CI](https://github.com/mnmahy34/CSP451-CheckPoint3-mnmahy/actions/workflows/ci.yml/badge.svg) | Runs linting, testing, and build on push/PR |
| **Deploy**        | ![Deploy](https://github.com/mnmahy34/CSP451-CheckPoint3-mnmahy/actions/workflows/deploy.yml/badge.svg) | Deploys build output to GitHub Pages |
| **Dependency Audit** | ![Audit](https://github.com/mnmahy34/CSP451-CheckPoint3-mnmahy/actions/workflows/dependency.yml/badge.svg) | Runs daily dependency vulnerability check |

---

## 📦 Setup Instructions (Local Development)

1. Clone the repository:
   ```bash
   git clone https://github.com/mnmahy34/CSP451-CheckPoint3-mnmahy.git
   cd ci-assignment
