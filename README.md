# LateFix

LateFix is a mobile app built with Expo and React Native that uses Supabase for backend services. It includes an Expo Router-based navigation structure and local storage integration for session persistence.

**Status:** Work in progress — app scaffold ready.

**Features**

- Simple, modular Expo app using `expo-router`.
- Supabase integration for auth and data storage.
- Local session persistence with `@react-native-async-storage/async-storage`.

**Tech Stack**

- Frontend: React Native (Expo)
- Router: `expo-router`
- Backend: Supabase (via `@supabase/supabase-js`)
- Storage: `expo-sqlite` + AsyncStorage

**Quick Start**
Prerequisites:

- Node.js (16+ recommended)
- npm or yarn
- Expo CLI (optional) — you can use the bundled `expo` dependency via `npx`.

From the repository root run:

```bash
cd latefix
npm install
# start the dev server
npm run start
# or run on a platform
npm run android
npm run ios
npm run web
```

**Environment Variables**
The app expects the following environment variables to be available at runtime (prefixed with `EXPO_PUBLIC_` so they are accessible to the client):

- `EXPO_PUBLIC_SUPABASE_URL` — your Supabase project URL
- `EXPO_PUBLIC_SUPABASE_KEY` — your Supabase public/anon key

You can set these in your shell, CI, or with Expo/EAS secrets. A simple local approach is to set them before starting the app:

```bash
export EXPO_PUBLIC_SUPABASE_URL="https://your-project.supabase.co"
export EXPO_PUBLIC_SUPABASE_KEY="your-anon-key"
npm run start
```

On Windows PowerShell, use:

```powershell
$env:EXPO_PUBLIC_SUPABASE_URL = "https://your-project.supabase.co"
$env:EXPO_PUBLIC_SUPABASE_KEY = "your-anon-key"
npm run start
```

Note: `latefix/utils/supabase.ts` reads `process.env.EXPO_PUBLIC_SUPABASE_URL` and `process.env.EXPO_PUBLIC_SUPABASE_KEY`.

**Project Structure (high level)**

- `latefix/` — main Expo app folder
  - `app/` — app routes and screens (uses `expo-router`)
  - `assets/` — images and static assets
  - `utils/` — helpers such as `supabase.ts`

**Scripts** (run from `latefix` folder)

- `npm run start` — start Expo dev tools
- `npm run android` — open Android simulator or device
- `npm run ios` — open iOS simulator (macOS only)
- `npm run web` — run in the browser
- `npm run lint` — run ESLint

**Contributing**

- Open an issue or PR for bugs and feature requests.
- Keep changes focused and add tests where appropriate.

**Next Steps / Suggestions**

- Add a `.env.example` listing required env vars.
- Add README screenshots or a short demo GIF in `assets/images`.
- Configure CI to run `npm run lint` and basic type checks.

**License**
TBD
