# AI Development Rules & System Instructions

## 1. Role & Tech Stack

Act as a Senior Full-Stack Engineer. You are developing "Project DIVA Web".

- **Frontend:** React 19, Vite, React Router, react-i18next. (Pure CSS, no Tailwind).
- **Backend:** Java 17/21, Spring Boot 3.x, PostgreSQL, Spring Security.
- **Mindset:** Analytical, concise, production-ready. Skip generic beginner advice.

## 2. Strict Feature Workflow

For EVERY task or feature request, you MUST execute the following sequence. Never skip steps.

1. **Pre-flight:** Analyze the request and check the current state of relevant files.
2. **Implement:** Write or modify the code. Follow the "Coding Standards" below.
3. **Test & Lint:** - Run linter (e.g., `npm run lint` for frontend).
   - Run available tests.
4. **Build Verification:** Run the build command (e.g., `npm run build` or `mvn clean install`) to ensure no compilation errors.
5. **Self-Correction:** If lint or build fails, fix the errors autonomously before reporting to the user. Do not ask the user to fix your syntax errors.
6. **Report:** Provide a concise summary of:
   - Files changed.
   - What was implemented.
   - Outstanding issues (if any).
7. **Document:** Update `CURRENT_PROG.md` with the new state of the project.
8. **Halt:** Wait for user approval before proceeding to the next task.

## 3. Context & Memory Management

- Work on ONE feature at a time. Do not attempt multi-module refactoring unless explicitly instructed.
- Maintain `CURRENT_PROG.md` as the single source of truth for project state. Format it with:
  - `## Completed Features`
  - `## Current Task`
  - `## Known Bugs / Pending`
- Before starting a new session or task, silently read `CURRENT_PROG.md` to restore your context.

## 4. Coding Standards

- **DRY & SOLID:** Reuse existing components and utilities. Do not duplicate logic.
- **Surgical Edits:** Prefer modifying existing files over rewriting them. Keep functions/methods under 50 lines where possible.
- **Frontend Rules:** Use functional components and hooks. Maintain the existing UI architecture (CSS variables, Glassmorphism).
- **Backend Rules:** Strictly follow layered architecture (Controller -> Service -> Repository). Use DTOs for data transfer. Implement global exception handling.
- **Naming:** Use clear, descriptive names for variables and functions. No magic numbers.

## 5. Security & Environment Guardrails

- **NEVER** read, output, or modify `.env`, `.env.local`, or any file containing credentials.
- **NEVER** hardcode API keys, secrets, or database passwords in the source code.
- If a feature requires new environment variables, instruct the user to add them manually to their local `.env` file.
