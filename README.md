# Eneba Frontend

A React Native application built with Expo for browsing and searching product listings.

## Architecture Overview

This project follows a clean, modular architecture that separates concerns into distinct layers:

### Project Structure

```
enb-frontend/
├── api/                    # API integration layer
│   ├── client.ts          # Axios client configuration
│   └── product-listings.ts # Product listings API endpoints
├── app/                    # Application screens (file-based routing)
│   ├── _layout.tsx        # Root layout with global context
│   └── index.tsx          # Main product listing screen
├── assets/                 # Static assets
│   ├── fonts/             # Custom Metropolis font family
│   └── images/            # SVG icons and images
├── components/             # Reusable React components
│   ├── Header/            # Header components
│   │   ├── Header.tsx
│   │   ├── IconButton.tsx
│   │   ├── Logo.tsx
│   │   ├── RegionSelector.tsx
│   │   ├── SearchBar.tsx
│   │   └── UserAvatar.tsx
│   └── ProductListing/    # Product listing components
│       ├── CashbackBox.tsx
│       ├── LikeCountBox.tsx
│       ├── PlatformBox.tsx
│       ├── PlatformIcon.tsx
│       ├── ProductListing.tsx
│       ├── ProductListingDescription.tsx
│       ├── ProductListingImage.tsx
│       └── ProductListingPriceBox.tsx
├── constants/              # App-wide constants
│   └── typography.ts      # Typography definitions
└── utils/                  # Helper functions
    └── ProductListingUtils.tsx
```

### Architecture Layers

#### 1. **API Layer** (`/api`)
- **Purpose**: Handles all external API communication
- **Key Files**:
  - `client.ts`: Configures axios instance with base URL from environment variables
  - `product-listings.ts`: Defines product listings API endpoints
- **Pattern**: Centralized API configuration with modular endpoint organization

#### 2. **App Layer** (`/app`)
- **Purpose**: Application routing and global state management
- **Key Features**:
  - File-based routing using Expo Router
  - `_layout.tsx` serves as the root layout with:
    - Font loading and initialization
    - SearchContext provider for global search state
    - Splash screen management
  - `index.tsx` is the main screen displaying product listings in a grid layout
- **State Management**: React Context API for search functionality

#### 3. **Component Layer** (`/components`)
- **Purpose**: Reusable UI components organized by feature
- **Organization**:
  - **Header components**: Navigation, search, user controls
  - **ProductListing components**: Product card UI with pricing, cashback, and platform info
- **Pattern**: Atomic design principles with small, composable components

#### 4. **Assets** (`/assets`)
- Custom Metropolis font family (Regular, Medium, SemiBold, Bold)
- SVG icons and product images
- All assets are loaded and managed through Expo's asset system

#### 5. **Constants** (`/constants`)
- Centralized typography definitions
- Ensures consistent styling across the application

#### 6. **Utilities** (`/utils`)
- Helper functions and utilities
- Product listing data transformations and calculations

### Environment Configuration

- `EXPO_PUBLIC_API_URL`: Backend API base URL (configured in environment variables)

## Get Started

1. Install dependencies

```bash
npm install
```

2. Start the app

```bash
npx expo start
```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

## Technology Stack

- **Framework**: Expo + React Native
- **Language**: TypeScript
- **Routing**: Expo Router (file-based)
- **State Management**: React Context API
- **HTTP Client**: Axios
- **Styling**: React Native StyleSheet API
