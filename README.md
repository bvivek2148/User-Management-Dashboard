# User Management Dashboard

A modern, responsive user management dashboard built with Next.js, TypeScript, and Tailwind CSS. This application demonstrates advanced React patterns, form handling, state management, and modern UI/UX design principles.

## 🚀 Features

### Core Features
- **User Dashboard**: Display users fetched from JSONPlaceholder API
- **Search & Filter**: Real-time search by name or city
- **Add User Form**: Multi-step form with validation
- **Responsive Design**: Works seamlessly on all devices
- **Dark/Light Mode**: Toggle between themes with persistence

### Technical Features
- **TypeScript**: Full type safety throughout the application
- **Form Validation**: Using React Hook Form with Zod schemas
- **State Management**: Context API for form state
- **Local Storage**: Form progress persistence
- **Animations**: Smooth transitions with Framer Motion
- **Error Handling**: Comprehensive error states and loading indicators
- **Toast Notifications**: User feedback for actions

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Forms**: React Hook Form + Zod
- **Animations**: Framer Motion
- **HTTP Client**: Axios
- **Notifications**: React Hot Toast
- **State Management**: React Context API

## 📁 Project Structure

```
user-management-dashboard/
├── public/                     # Static assets
├── src/
│   ├── app/                   # Next.js App Router pages
│   │   ├── dashboard/         # Dashboard pages
│   │   │   ├── add/          # Add user page
│   │   │   ├── layout.tsx    # Dashboard layout
│   │   │   └── page.tsx      # Main dashboard
│   │   ├── layout.tsx        # Root layout
│   │   └── page.tsx          # Home page (redirects)
│   ├── components/           # React components
│   │   ├── AddUser/         # Add user form components
│   │   ├── Dashboard/       # Dashboard components
│   │   └── common/          # Shared components
│   ├── context/             # React Context providers
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # API utilities
│   ├── styles/              # Global styles
│   ├── types/               # TypeScript type definitions
│   └── utils/               # Utility functions
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd user-management-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📱 Pages & Features

### Dashboard (`/dashboard`)
- Fetches and displays users from JSONPlaceholder API
- Real-time search functionality (name/city)
- Loading states and error handling
- Responsive grid layout
- User cards with contact information

### Add User (`/dashboard/add`)
- **Step 1**: Basic Information (name, email)
- **Step 2**: Address Details (street, city, zipcode)
- **Step 3**: Review & Confirm
- Form validation with error messages
- Progress indicator
- Local storage persistence
- Success/error notifications

## 🎨 Design Features

### Theme System
- Light/Dark mode toggle
- System preference detection
- Theme persistence in localStorage
- Smooth transitions between themes

### Animations
- Page transitions
- Form step animations
- Loading spinners
- Hover effects
- Micro-interactions

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Adaptive navigation
- Touch-friendly interactions

## 🔧 Configuration

### Environment Variables
No environment variables required - uses public JSONPlaceholder API.

### Customization
- **Colors**: Modify `tailwind.config.js`
- **Fonts**: Update in `src/app/layout.tsx`
- **API Endpoint**: Change in `src/lib/api.ts`

## 📊 API Integration

The application integrates with [JSONPlaceholder](https://jsonplaceholder.typicode.com/) API:

- **GET /users**: Fetch all users
- Error handling for network failures
- Loading states during API calls
- TypeScript interfaces for API responses

## 🧪 Form Validation

### Validation Rules
- **Name**: 2-50 characters, required
- **Email**: Valid email format, required
- **Street**: Minimum 5 characters, required
- **City**: Minimum 2 characters, required
- **Zipcode**: 5-10 characters, required

### Features
- Real-time validation
- Error message display
- Form state persistence
- Step-by-step validation

## 🎯 Assignment Requirements Fulfilled

✅ **Dashboard Page**: User list with search and filters  
✅ **Add User Form**: 3-step form with validation  
✅ **API Integration**: JSONPlaceholder users endpoint  
✅ **State Management**: Context API for form state  
✅ **TypeScript**: Full type safety  
✅ **Responsive Design**: Mobile-friendly layout  
✅ **Loading States**: Comprehensive loading indicators  
✅ **Error Handling**: User-friendly error messages  
✅ **Form Validation**: Zod schemas with React Hook Form  
✅ **Local Storage**: Form progress persistence  
✅ **Animations**: Framer Motion throughout  
✅ **Dark Mode**: Theme toggle with persistence  
✅ **Toast Notifications**: Success/error feedback  

## 🚀 Performance Optimizations

- **Code Splitting**: Automatic with Next.js App Router
- **Image Optimization**: Next.js Image component ready
- **Bundle Analysis**: Built-in Next.js analyzer
- **Lazy Loading**: Components loaded on demand
- **Memoization**: Optimized re-renders with useMemo

## 🔮 Future Enhancements

- User editing functionality
- User deletion with confirmation
- Pagination for large datasets
- Advanced filtering options
- Export functionality
- User profile images
- Bulk operations
- Search history
- Keyboard shortcuts

## 📄 License

This project is created for educational purposes as part of a Full Stack Development internship assignment.

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
