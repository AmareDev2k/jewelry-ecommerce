# User Authentication TODO (Auth0)

This document outlines the steps required to integrate user authentication into the Aurelia Jewelry E-commerce application using Auth0. Since this is a React application built with Vite, we will use the `@auth0/auth0-react` SDK.

## Phase 1: Auth0 Tenant & Dashboard Setup
- [ ] **Create an Auth0 Account/Tenant:** Sign up or log into Auth0 and navigate to the dashboard.
- [ ] **Register the Application:** 
  - Go to Applications > Applications and create a new **Single Page Application (SPA)**.
  - Name it `Aurelia E-commerce`.
- [ ] **Configure Allowed URLs:** In the application settings, set the following to `http://localhost:5173` (your local Vite dev server url):
  - **Allowed Callback URLs**
  - **Allowed Logout URLs**
  - **Allowed Web Origins**
  - *Note: Don't forget to update these URLs when deploying to production.*
- [ ] **Save Changes:** Ensure the dashboard settings are saved.

## Phase 2: Project Configuration
- [ ] **Install Auth0 SDK:** 
  - Run `npm install @auth0/auth0-react` in the terminal.
- [ ] **Set Environment Variables:** 
  - Create a `.env` file in the root of the project.
  - Add your Auth0 domain and client ID from the dashboard:
    ```env
    VITE_AUTH0_DOMAIN=your-auth0-domain.auth0.com
    VITE_AUTH0_CLIENT_ID=your-auth0-client-id
    ```

## Phase 3: Application Integration
- [ ] **Configure `Auth0Provider`:** 
  - Open `src/main.jsx`.
  - Import `Auth0Provider` from `@auth0/auth0-react`.
  - Wrap the `<App />` component (or `<BrowserRouter>`) with `<Auth0Provider>`, passing in the `domain`, `clientId`, and `authorizationParams.redirect_uri` (set to `window.location.origin`).
- [ ] **Implement Login / Logout:** 
  - Update `src/components/Navbar.jsx`.
  - Import `useAuth0` from `@auth0/auth0-react`.
  - Extract `loginWithRedirect`, `logout`, `isAuthenticated`, and `user`.
  - Add a "Login" button that triggers `loginWithRedirect()` if the user is not authenticated.
  - Add a "Log Out" button that triggers `logout({ logoutParams: { returnTo: window.location.origin } })` if the user is authenticated.
- [ ] **Display User Profile:** 
  - Conditionally render the user's name or avatar in the Navbar when `isAuthenticated` is true.

## Phase 4: Route Protection
- [ ] **Protect Secure Pages:** 
  - Secure sensitive routes like `/checkout` or `/cart` (if desired).
  - Use the `withAuthenticationRequired` higher-order component from `@auth0/auth0-react` on page components (e.g., `Checkout.jsx`), or create a protected route wrapper component.

## Phase 5: (Optional) Advanced Features
- [ ] **Role-Based Access Control (RBAC):** Set up roles for 'Admin' vs 'Customer' if an admin dashboard is needed.
- [ ] **Custom Branding:** Customize the Auth0 Universal Login page to match the "Editorial Luxury" dark theme of Aurelia.
