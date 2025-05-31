# 🚀 User Management Dashboard

<div align="center">

![User Management Dashboard](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

**A modern, responsive user management dashboard built with Next.js 14, TypeScript, and Tailwind CSS**

*Demonstrating advanced React patterns, form handling, state management, and modern UI/UX design principles*

[🌐 Live Demo](#-live-demo) • [📖 Documentation](#-documentation) • [🛠️ Installation](#️-installation) • [🎯 Features](#-features)

</div>

---

## 📋 Table of Contents

- [🎯 Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [📁 Project Structure](#-project-structure)
- [🚦 Getting Started](#-getting-started)
- [📱 Pages & Features](#-pages--features)
- [🎨 Design System](#-design-system)
- [🔧 Configuration](#-configuration)
- [📊 API Integration](#-api-integration)
- [🧪 Form Validation](#-form-validation)
- [🎯 Assignment Requirements](#-assignment-requirements)
- [🚀 Performance](#-performance)
- [🔮 Future Enhancements](#-future-enhancements)
- [📄 License](#-license)

---

## 🎯 Features

### 🌟 Core Features

| Feature | Description | Status |
|---------|-------------|--------|
| **User Dashboard** | Display users fetched from JSONPlaceholder API with beautiful cards | ✅ Complete |
| **Search & Filter** | Real-time search by name or city with debounced input | ✅ Complete |
| **Add User Form** | Multi-step form with comprehensive validation | ✅ Complete |
| **Delete Users** | Remove users with confirmation modal and animations | ✅ Complete |
| **Responsive Design** | Works seamlessly on desktop, tablet, and mobile | ✅ Complete |
| **Dark/Light Mode** | Toggle between themes with system preference detection | ✅ Complete |

### ⚡ Technical Features

| Feature | Implementation | Benefits |
|---------|----------------|----------|
| **TypeScript** | Full type safety throughout the application | Prevents runtime errors, better IDE support |
| **Form Validation** | React Hook Form + Zod schemas | Type-safe validation, better UX |
| **State Management** | Context API for global state | Efficient state sharing, no prop drilling |
| **Local Storage** | Form progress persistence | Better UX, no data loss |
| **Animations** | Framer Motion for smooth transitions | Professional feel, engaging UX |
| **Error Handling** | Comprehensive error states and loading indicators | Robust user experience |
| **Toast Notifications** | Real-time feedback for user actions | Immediate feedback, better UX |

### 🎨 UI/UX Features

- **Modern Design**: Clean, professional interface with consistent spacing
- **Smooth Animations**: Page transitions, hover effects, and micro-interactions
- **Loading States**: Skeleton screens and spinners for better perceived performance
- **Error States**: User-friendly error messages with retry options
- **Accessibility**: Keyboard navigation, ARIA labels, and semantic HTML
- **Mobile-First**: Responsive design that works on all screen sizes

## 🛠️ Tech Stack

### 🏗️ Core Technologies

| Technology | Version | Purpose | Why Chosen |
|------------|---------|---------|------------|
| **Next.js** | 14.x | React Framework | App Router, SSR, Performance, SEO |
| **TypeScript** | 5.x | Language | Type Safety, Better DX, Error Prevention |
| **React** | 18.x | UI Library | Component-based, Virtual DOM, Ecosystem |
| **Tailwind CSS** | 3.4.x | Styling | Utility-first, Responsive, Dark Mode |

### 📦 Key Dependencies

| Package | Purpose | Benefits |
|---------|---------|----------|
| **React Hook Form** | Form Management | Performance, Validation, Less Re-renders |
| **Zod** | Schema Validation | Type-safe validation, Runtime checking |
| **Framer Motion** | Animations | Smooth transitions, Gesture support |
| **Axios** | HTTP Client | Request/Response interceptors, Error handling |
| **React Hot Toast** | Notifications | Lightweight, Customizable, Accessible |

### 🔧 Development Tools

- **ESLint**: Code linting and formatting
- **PostCSS**: CSS processing and optimization
- **Autoprefixer**: CSS vendor prefixing
- **Git**: Version control and collaboration

## 📁 Project Structure

<details>
<summary>📂 <strong>Detailed Project Structure</strong> (Click to expand)</summary>

```
user-management-dashboard/
├── 📁 public/                          # Static assets and public files
│   ├── favicon.ico                     # Website favicon
│   └── ...                            # Other static assets
│
├── 📁 src/                            # Source code directory
│   ├── 📁 app/                        # Next.js 14 App Router
│   │   ├── 📁 dashboard/              # Dashboard route group
│   │   │   ├── 📁 add/               # Add user sub-route
│   │   │   │   └── page.tsx          # Add user form page
│   │   │   ├── layout.tsx            # Dashboard layout with navigation
│   │   │   └── page.tsx              # Main dashboard page
│   │   ├── layout.tsx                # Root layout with global providers
│   │   ├── page.tsx                  # Home page (redirects to dashboard)
│   │   └── globals.css               # Global styles and Tailwind imports
│   │
│   ├── 📁 components/                 # Reusable React components
│   │   ├── 📁 AddUser/               # Add user form components
│   │   │   ├── StepOne.tsx           # Basic info form step
│   │   │   ├── StepTwo.tsx           # Address info form step
│   │   │   ├── StepThree.tsx         # Review and confirm step
│   │   │   └── FormNavigation.tsx    # Step progress indicator
│   │   ├── 📁 Dashboard/             # Dashboard-specific components
│   │   │   ├── UserCard.tsx          # Individual user card with delete
│   │   │   └── SearchBar.tsx         # Search and filter component
│   │   └── 📁 common/                # Shared/common components
│   │       └── Loader.tsx            # Loading spinner component
│   │
│   ├── 📁 context/                    # React Context providers
│   │   └── UserFormContext.tsx       # Form state management context
│   │
│   ├── 📁 hooks/                      # Custom React hooks
│   │   └── useFetchUsers.ts          # Hook for fetching users from API
│   │
│   ├── 📁 lib/                        # Library configurations and utilities
│   │   └── api.ts                    # Axios configuration and API calls
│   │
│   ├── 📁 styles/                     # Styling files
│   │   └── globals.css               # Global CSS with Tailwind directives
│   │
│   ├── 📁 types/                      # TypeScript type definitions
│   │   └── user.ts                   # User-related type interfaces
│   │
│   └── 📁 utils/                      # Utility functions
│       └── validators.ts             # Zod validation schemas
│
├── 📄 .eslintrc.json                  # ESLint configuration
├── 📄 .gitignore                      # Git ignore rules
├── 📄 next.config.js                  # Next.js configuration
├── 📄 package.json                    # Dependencies and scripts
├── 📄 postcss.config.js               # PostCSS configuration
├── 📄 tailwind.config.js              # Tailwind CSS configuration
├── 📄 tsconfig.json                   # TypeScript configuration
└── 📄 README.md                       # Project documentation
```

</details>

### 🏗️ Architecture Decisions

| Directory | Purpose | Design Pattern |
|-----------|---------|----------------|
| **`src/app/`** | Next.js App Router pages | File-based routing, Layout nesting |
| **`src/components/`** | UI Components | Feature-based organization, Reusability |
| **`src/context/`** | Global State | Context API pattern, Provider pattern |
| **`src/hooks/`** | Custom Logic | Custom hooks pattern, Logic separation |
| **`src/types/`** | Type Definitions | Type-first development, Interface segregation |
| **`src/utils/`** | Pure Functions | Utility pattern, Single responsibility |

## 🚦 Getting Started

### 📋 Prerequisites

Before you begin, ensure you have the following installed on your system:

| Requirement | Version | Download Link | Verification Command |
|-------------|---------|---------------|---------------------|
| **Node.js** | 18.0+ | [nodejs.org](https://nodejs.org/) | `node --version` |
| **npm** | 9.0+ | Included with Node.js | `npm --version` |
| **Git** | Latest | [git-scm.com](https://git-scm.com/) | `git --version` |

### 🛠️ Installation

<details>
<summary>📥 <strong>Step-by-Step Installation Guide</strong> (Click to expand)</summary>

#### 1. **Clone the Repository**
```bash
# Clone the repository
git clone https://github.com/bvivek2148/User-Management-Dashboard.git

# Navigate to the project directory
cd User-Management-Dashboard
```

#### 2. **Install Dependencies**
```bash
# Using npm (recommended)
npm install

# Or using yarn
yarn install

# Or using pnpm
pnpm install
```

#### 3. **Verify Installation**
```bash
# Check if all dependencies are installed correctly
npm list --depth=0
```

#### 4. **Start Development Server**
```bash
# Start the development server
npm run dev

# Or with yarn
yarn dev

# Or with pnpm
pnpm dev
```

#### 5. **Open in Browser**
- Navigate to [http://localhost:3000](http://localhost:3000)
- You should see the User Management Dashboard

</details>

### 🚀 Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| **Development** | `npm run dev` | Starts development server with hot reload |
| **Build** | `npm run build` | Creates optimized production build |
| **Start** | `npm run start` | Starts production server |
| **Lint** | `npm run lint` | Runs ESLint for code quality checks |

### 🏗️ Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start

# Or build and start in one command
npm run build && npm start
```

### 🔧 Environment Setup

<details>
<summary>⚙️ <strong>Development Environment Configuration</strong> (Click to expand)</summary>

#### IDE Recommendations
- **VS Code** with extensions:
  - TypeScript and JavaScript Language Features
  - Tailwind CSS IntelliSense
  - ES7+ React/Redux/React-Native snippets
  - Prettier - Code formatter
  - ESLint

#### Browser DevTools
- React Developer Tools
- Redux DevTools (if using Redux)

#### Optional Tools
- **Postman** for API testing
- **Git GUI** client (GitKraken, SourceTree, etc.)

</details>

## 📱 Pages & Features

### 🏠 Dashboard Page (`/dashboard`)

<details>
<summary>📊 <strong>Dashboard Features Overview</strong> (Click to expand)</summary>

#### 🎯 Core Functionality
- **User Display**: Beautiful card-based layout showing user information
- **Real-time Search**: Debounced search by name or city (300ms delay)
- **Delete Users**: Remove users with confirmation modal
- **Responsive Grid**: Adapts to screen size (1 col mobile, 2 col tablet, 3 col desktop)
- **Loading States**: Skeleton screens and spinners
- **Error Handling**: Retry mechanisms and user-friendly error messages

#### 📋 User Card Information
| Field | Source | Display |
|-------|--------|---------|
| **Name** | `user.name` | Large heading with avatar initial |
| **Email** | `user.email` | With email icon |
| **Phone** | `user.phone` | With phone icon |
| **City** | `user.address.city` | With location icon |
| **Username** | `user.username` | Footer left (@username) |
| **Company** | `user.company.name` | Footer right with delete button |

#### 🔍 Search Functionality
- **Search Fields**: Name and City
- **Debounced Input**: 300ms delay to prevent excessive API calls
- **Real-time Results**: Instant filtering as you type
- **Clear Search**: X button to clear search query
- **Search Feedback**: Shows "Searching for..." message

#### 🗑️ Delete Functionality
- **Delete Button**: Small trash icon beside company name
- **Confirmation Modal**: Prevents accidental deletions
- **Loading State**: Shows spinner during deletion
- **Success Feedback**: Toast notification on successful deletion
- **Local State Update**: Immediately removes user from UI

</details>

### ➕ Add User Page (`/dashboard/add`)

<details>
<summary>📝 <strong>Multi-Step Form Details</strong> (Click to expand)</summary>

#### 🚀 Form Steps Overview

**Step 1: Basic Information**
- **Fields**: Name (required), Email (required)
- **Validation**: Real-time validation with error messages
- **Features**: Auto-focus, form persistence, smooth animations

**Step 2: Address Details**
- **Fields**: Street (required), City (required), Zipcode (required)
- **Layout**: Responsive grid (City and Zipcode side-by-side on larger screens)
- **Navigation**: Back button to previous step

**Step 3: Review & Confirm**
- **Display**: All entered information in organized sections
- **Actions**: Back to edit, Submit to create user
- **Feedback**: Loading state during submission, success/error toasts

#### 🎨 Form Features
| Feature | Implementation | Benefit |
|---------|----------------|---------|
| **Progress Indicator** | Visual step tracker with completion status | Clear progress feedback |
| **Form Persistence** | Auto-save to localStorage | No data loss on page refresh |
| **Validation** | Zod schemas with React Hook Form | Type-safe, real-time validation |
| **Animations** | Framer Motion transitions | Smooth, professional feel |
| **Error Handling** | Field-level and form-level errors | Clear user guidance |

#### 📊 Validation Rules
| Field | Rules | Error Messages |
|-------|-------|----------------|
| **Name** | 2-50 characters, required | "Name must be at least 2 characters" |
| **Email** | Valid email format, required | "Please enter a valid email address" |
| **Street** | Min 5 characters, required | "Street address must be at least 5 characters" |
| **City** | Min 2 characters, required | "City must be at least 2 characters" |
| **Zipcode** | 5-10 characters, required | "Zipcode must be between 5-10 characters" |

</details>

## 🎨 Design System

### 🌓 Theme System

<details>
<summary>🎨 <strong>Theme Implementation Details</strong> (Click to expand)</summary>

#### Light/Dark Mode Features
- **Toggle Button**: Sun/Moon icon in header navigation
- **System Detection**: Automatically detects user's system preference
- **Persistence**: Theme choice saved in localStorage
- **Smooth Transitions**: 200ms transition for all color changes
- **Comprehensive Coverage**: All components support both themes

#### Color Palette
| Element | Light Mode | Dark Mode |
|---------|------------|-----------|
| **Background** | `bg-gray-50` | `bg-gray-900` |
| **Cards** | `bg-white` | `bg-gray-800` |
| **Text Primary** | `text-gray-900` | `text-white` |
| **Text Secondary** | `text-gray-600` | `text-gray-400` |
| **Borders** | `border-gray-200` | `border-gray-700` |
| **Accent** | `text-blue-600` | `text-blue-400` |

</details>

### ✨ Animation System

<details>
<summary>🎬 <strong>Animation Implementation</strong> (Click to expand)</summary>

#### Framer Motion Animations
| Component | Animation Type | Trigger | Duration |
|-----------|----------------|---------|----------|
| **Page Transitions** | Fade + Slide | Route change | 300ms |
| **User Cards** | Stagger + Scale | Page load | 100ms delay each |
| **Form Steps** | Slide X | Step navigation | 300ms |
| **Modals** | Scale + Fade | Open/Close | 200ms |
| **Buttons** | Scale | Hover/Click | 100ms |
| **Loading** | Rotate | Continuous | 1000ms |

#### Micro-interactions
- **Hover Effects**: Scale, color changes, shadow elevation
- **Click Feedback**: Scale down on press, scale up on release
- **Focus States**: Ring outline for accessibility
- **Loading States**: Skeleton screens and spinners

</details>

### 📱 Responsive Design

<details>
<summary>📐 <strong>Responsive Breakpoints</strong> (Click to expand)</summary>

#### Tailwind CSS Breakpoints
| Breakpoint | Screen Size | Grid Columns | Navigation |
|------------|-------------|--------------|------------|
| **Mobile** | < 768px | 1 column | Hamburger menu |
| **Tablet** | 768px - 1024px | 2 columns | Full navigation |
| **Desktop** | > 1024px | 3 columns | Full navigation |

#### Responsive Features
- **Mobile-First**: Designed for mobile, enhanced for larger screens
- **Flexible Grids**: CSS Grid with auto-fit and minmax
- **Adaptive Typography**: Responsive font sizes and line heights
- **Touch-Friendly**: Minimum 44px touch targets
- **Optimized Images**: Next.js Image component with optimization

</details>

### 🎯 UI Components

<details>
<summary>🧩 <strong>Component Design Patterns</strong> (Click to expand)</summary>

#### Design Principles
- **Consistency**: Unified spacing, colors, and typography
- **Accessibility**: ARIA labels, keyboard navigation, semantic HTML
- **Performance**: Optimized re-renders, lazy loading
- **Modularity**: Reusable components with clear interfaces

#### Component Library
| Component | Purpose | Features |
|-----------|---------|----------|
| **UserCard** | Display user info | Hover effects, delete action, responsive |
| **SearchBar** | Filter users | Debounced input, clear button, loading state |
| **FormNavigation** | Step progress | Visual progress, step validation |
| **Loader** | Loading states | Customizable size, text, animations |
| **Modal** | Confirmations | Backdrop, escape key, focus trap |

</details>

## 🔧 Configuration

### 🌐 Environment Variables

<details>
<summary>⚙️ <strong>Environment Configuration</strong> (Click to expand)</summary>

#### Current Setup
- **No environment variables required** - uses public JSONPlaceholder API
- **API Endpoint**: Hardcoded to `https://jsonplaceholder.typicode.com`
- **Development**: All configuration in code files

#### Future Environment Variables (Optional)
```bash
# .env.local (for future enhancements)
NEXT_PUBLIC_API_BASE_URL=https://jsonplaceholder.typicode.com
NEXT_PUBLIC_APP_NAME=User Management Dashboard
NEXT_PUBLIC_ENABLE_ANALYTICS=false
```

</details>

### 🎨 Customization Guide

<details>
<summary>🛠️ <strong>Customization Options</strong> (Click to expand)</summary>

#### Theme Customization
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#your-primary-color',
        secondary: '#your-secondary-color',
      },
      fontFamily: {
        sans: ['Your Font', 'sans-serif'],
      },
    },
  },
}
```

#### API Configuration
```typescript
// src/lib/api.ts
const api = axios.create({
  baseURL: 'https://your-api-endpoint.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});
```

#### Component Styling
- **Global Styles**: `src/styles/globals.css`
- **Component Styles**: Tailwind classes in component files
- **Custom CSS**: Add to globals.css or create new CSS modules

</details>

## 📊 API Integration

### 🌐 JSONPlaceholder API

<details>
<summary>🔌 <strong>API Implementation Details</strong> (Click to expand)</summary>

#### Endpoint Information
| Endpoint | Method | Purpose | Response |
|----------|--------|---------|----------|
| `/users` | GET | Fetch all users | Array of 10 user objects |

#### API Response Structure
```typescript
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: { lat: string; lng: string; };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
```

#### Error Handling
- **Network Errors**: Retry button with user-friendly messages
- **Timeout Handling**: 10-second timeout with fallback
- **Loading States**: Skeleton screens during API calls
- **Error Boundaries**: Graceful error recovery

#### Performance Optimizations
- **Axios Instance**: Configured with interceptors
- **Request Timeout**: 10-second timeout
- **Error Retry**: Manual retry mechanism
- **Caching**: Browser caching for repeated requests

</details>

## 🧪 Form Validation

### 📋 Validation Implementation

<details>
<summary>✅ <strong>Validation System Details</strong> (Click to expand)</summary>

#### Validation Stack
- **React Hook Form**: Form state management and validation
- **Zod**: Runtime type checking and schema validation
- **TypeScript**: Compile-time type safety

#### Validation Rules
| Field | Type | Rules | Error Messages |
|-------|------|-------|----------------|
| **Name** | `string` | Required, 2-50 chars | "Name must be at least 2 characters" |
| **Email** | `string` | Required, valid email | "Please enter a valid email address" |
| **Street** | `string` | Required, min 5 chars | "Street address must be at least 5 characters" |
| **City** | `string` | Required, min 2 chars | "City must be at least 2 characters" |
| **Zipcode** | `string` | Required, 5-10 chars | "Zipcode must be between 5-10 characters" |

#### Validation Features
- **Real-time Validation**: Validates on change and blur
- **Error Display**: Field-level error messages with animations
- **Form State**: Tracks dirty, touched, and valid states
- **Step Validation**: Prevents progression with invalid data
- **Persistence**: Saves valid data to localStorage

#### Zod Schemas
```typescript
// Basic Info Schema
const basicInfoSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
});

// Address Schema
const addressSchema = z.object({
  street: z.string().min(5),
  city: z.string().min(2),
  zipcode: z.string().min(5).max(10),
});
```

</details>

## 🎯 Assignment Requirements Fulfilled

### ✅ Core Requirements Checklist

<details>
<summary>📋 <strong>Detailed Requirements Fulfillment</strong> (Click to expand)</summary>

| Requirement | Status | Implementation | Extras |
|-------------|--------|----------------|--------|
| **Dashboard Page** | ✅ Complete | User list with search and filters | Delete functionality, animations |
| **Add User Form** | ✅ Complete | 3-step form with validation | Progress indicator, persistence |
| **API Integration** | ✅ Complete | JSONPlaceholder users endpoint | Error handling, retry mechanism |
| **State Management** | ✅ Complete | Context API for form state | Local storage integration |
| **TypeScript** | ✅ Complete | Full type safety throughout | Zod runtime validation |
| **Responsive Design** | ✅ Complete | Mobile-friendly layout | Adaptive grid, touch-friendly |
| **Loading States** | ✅ Complete | Comprehensive loading indicators | Skeleton screens, spinners |
| **Error Handling** | ✅ Complete | User-friendly error messages | Retry buttons, toast notifications |
| **Form Validation** | ✅ Complete | Zod schemas with React Hook Form | Real-time validation |
| **Local Storage** | ✅ Complete | Form progress persistence | Auto-save functionality |
| **Animations** | ✅ Complete | Framer Motion throughout | Page transitions, micro-interactions |
| **Dark Mode** | ✅ Complete | Theme toggle with persistence | System preference detection |
| **Toast Notifications** | ✅ Complete | Success/error feedback | Customizable, accessible |

</details>

### 🌟 Bonus Features Implemented

- **🗑️ Delete Users**: Confirmation modal with animations
- **� Advanced Search**: Debounced search with clear functionality
- **💾 Auto-save**: Form progress automatically saved
- **🎨 Professional UI**: Modern design with consistent spacing
- **♿ Accessibility**: ARIA labels, keyboard navigation
- **📱 Mobile Optimized**: Touch-friendly interactions
- **⚡ Performance**: Optimized re-renders and lazy loading

## 🚀 Performance Optimizations

### 📊 Performance Metrics

<details>
<summary>⚡ <strong>Performance Implementation</strong> (Click to expand)</summary>

#### Next.js Optimizations
- **Automatic Code Splitting**: Route-based splitting
- **Image Optimization**: Next.js Image component ready
- **Bundle Analysis**: Built-in analyzer available
- **Static Generation**: Pre-rendered pages where possible
- **Tree Shaking**: Unused code elimination

#### React Optimizations
- **Lazy Loading**: Components loaded on demand
- **Memoization**: `useMemo` for expensive calculations
- **Debounced Search**: 300ms delay to prevent excessive API calls
- **Optimized Re-renders**: Proper dependency arrays
- **Context Optimization**: Separate contexts for different concerns

#### User Experience
- **Skeleton Screens**: Better perceived performance
- **Progressive Loading**: Content loads incrementally
- **Smooth Animations**: 60fps animations with Framer Motion
- **Instant Feedback**: Immediate UI updates with optimistic updates

</details>

## 🔮 Future Enhancements

### 🛣️ Roadmap

<details>
<summary>🚧 <strong>Planned Features</strong> (Click to expand)</summary>

#### Short-term (Next Sprint)
- [ ] **User Editing**: Edit existing user information
- [ ] **Bulk Operations**: Select and delete multiple users
- [ ] **Advanced Filters**: Filter by company, phone, etc.
- [ ] **Export Functionality**: Download user data as CSV/JSON

#### Medium-term (Next Quarter)
- [ ] **Pagination**: Handle large datasets efficiently
- [ ] **User Profile Images**: Avatar upload and display
- [ ] **Search History**: Remember recent searches
- [ ] **Keyboard Shortcuts**: Power user features
- [ ] **Offline Support**: PWA capabilities

#### Long-term (Future Versions)
- [ ] **Real-time Updates**: WebSocket integration
- [ ] **Advanced Analytics**: User statistics and charts
- [ ] **Role-based Access**: Admin/User permissions
- [ ] **API Integration**: Connect to real backend
- [ ] **Testing Suite**: Comprehensive test coverage

</details>

### 🎯 Technical Debt & Improvements

- **Testing**: Add unit tests with Jest and React Testing Library
- **E2E Testing**: Implement Cypress or Playwright tests
- **Performance Monitoring**: Add analytics and performance tracking
- **Error Tracking**: Integrate Sentry or similar service
- **Documentation**: Add Storybook for component documentation

## 🤝 Contributing

### 📝 Development Guidelines

<details>
<summary>👥 <strong>Contribution Guide</strong> (Click to expand)</summary>

#### Getting Started
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Run tests: `npm test`
5. Commit changes: `git commit -m 'Add amazing feature'`
6. Push to branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

#### Code Standards
- **TypeScript**: All new code must be typed
- **ESLint**: Follow the existing linting rules
- **Prettier**: Use for code formatting
- **Conventional Commits**: Follow commit message standards

#### Testing Requirements
- Unit tests for utility functions
- Component tests for UI components
- Integration tests for user flows

</details>

## 📄 License

<div align="center">

**📚 Educational Project**

This project is created for educational purposes as part of a **Full Stack Development Internship Assignment**.

*Feel free to use this code for learning and reference purposes.*

---

<div align="center">

**🚀 Built with ❤️ using**

![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)

**⭐ If you found this project helpful, please give it a star!**

</div>

</div>
