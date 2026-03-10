import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { ProtectedRoute, GuestRoute } from './GuardComponent'

//auth
const Login = lazy(() => import('@/pages/auth/login/index'));
const SignUp = lazy(() => import('@/pages/auth/signup/index'));
const ForgotPassword = lazy(() => import('@/pages/auth/forget-pass/index'));
const ConfirmMail = lazy(() => import('@/pages/auth/confirm/index'));
const CreatePost = lazy(() => import('@/pages/account/create-post/index'));
const Members = lazy(() => import('@/pages/account/members/index'));
const UpdatePassword = lazy(() => import('@/pages/auth/update-password/index'));

//Home Page
// const HomePage = lazy(() => import('@/pages/home/index'));

//landing Pages
// const AppPage = lazy(() => import('@/pages/landing/app/index'));
// const SassClassicPage = lazy(() => import('@/pages/landing/sass-classic/index'));
// const SoftwarePage = lazy(() => import('@/pages/landing/software/index'));
// const CoworkingPages = lazy(() => import('@/pages/landing/coworking/index'));
// const MarketingPages = lazy(() => import('@/pages/landing/marketing/index'));
// const SassModernPages = lazy(() => import('@/pages/landing/sass-modern/index'));
const HomePage = lazy(() => import('@/pages/home/index'));
// const AgencyPages = lazy(() => import('@/pages/landing/agency/index'));
// const CryptoPages = lazy(() => import('@/pages/landing/crypto/index'));
// const PortfolioPages = lazy(() => import('@/pages/landing/portfolio/index'));

//PortfolioPages
// const PortFolioGrid = lazy(() => import('@/pages/pages/portfolio/grid/index'));
// const PortfolioMasonry = lazy(() => import('@/pages/pages/portfolio/masonry/index'));
// const PortFolioItem = lazy(() => import('@/pages/pages/portfolio/item/index'));

// contact page
const ContactPage = lazy(() => import('@/pages/contact/index'));

// Blog Pages
const BlogList = lazy(() => import('@/pages/blog/index'));
const BlogPost = lazy(() => import('@/pages/blog-post/index'));

//otherPages
const CompanyPage = lazy(() => import('@/pages/company/index'));
// const CareerPage = lazy(() => import('@/pages/pages/career/index'));
// const PricingPage = lazy(() => import('@/pages/pages/pricing/index'));
// const HelpPage = lazy(() => import('@/pages/pages/help/index'));
const Dashboard = lazy(() => import('@/pages/account/dashboard/index'));
const Setting = lazy(() => import('@/pages/account/setting/index'));
// dashboards
const dashboardRoutes = [{
  path: '/',
  name: 'Home',
  element: <Navigate to="/home" />
}];
const landingRoutes = [{
  path: '/home',
  name: 'home',
  element: <HomePage />
}//, {
//   path: '/landing/app',
//   name: 'App',
//   element: <AppPage />
// }, {
//   path: '/landing/sass-classic',
//   name: 'Sass Classic',
//   element: <SassClassicPage />
// }, {
//   path: '/landing/software',
//   name: 'Software',
//   element: <SoftwarePage />
// }, {
//   path: '/landing/coworking',
//   name: 'Coworking',
//   element: <CoworkingPages />
// }, {
//   path: '/landing/marketing',
//   name: 'Marketing',
//   element: <MarketingPages />
// }, {
//   path: '/landing/sass-modern',
//   name: 'Sass Modern',
//   element: <SassModernPages />
// }, {
//   path: '/landing/startup',
//   name: 'Startup',
//   element: <StartupPages />
// }, {
//   path: '/landing/agency',
//   name: 'Agency',
//   element: <AgencyPages />
// }, {
//   path: '/landing/crypto',
//   name: 'Crypto',
//   element: <CryptoPages />
// }, {
//   path: '/landing/portfolio',
//   name: 'Portfolio',
//   element: <PortfolioPages />
// }
];

// Portfolio Routes
// const portfolioRoutes = [{
//   path: '/pages/portfolio/grid',
//   name: 'Portfolio Grid',
//   element: <PortFolioGrid />
// }, {
//   path: '/pages/portfolio/masonry',
//   name: 'Portfolio Masonry',
//   element: <PortfolioMasonry />
// }, {
//   path: '/pages/portfolio/item',
//   name: 'Portfolio Items',
//   element: <PortFolioItem />
// }];

// Blog
const blogroutes = [
  {
    path: '/pages/:type', // Ini akan menangkap 'events' atau 'projects'
    name: 'List',
    element: <BlogList />,
  },
  {
    path: '/pages/:type/:id', // Detail post berdasarkan ID
    name: 'Post',
    element: <BlogPost />,
  },
]

// ui
const uiRoutes = [{
  path: '/contact',
  name: 'Contact us',
  element: <ContactPage />
}];

// auth
const authRoutes = [{
  path: '/auth/login',
  name: 'Login',
  element: <GuestRoute><Login /></GuestRoute>
}, {
  path: '/auth/signup',
  name: 'Register',
  element: <GuestRoute><SignUp /></GuestRoute>
}, {
  path: '/auth/forget-pass',
  name: 'Forgot Password',
  element: <GuestRoute><ForgotPassword /></GuestRoute>
}, {
  path: '/auth/confirm',
  name: 'Confirm Mail',
  element: <GuestRoute><ConfirmMail /></GuestRoute>
}, {
  path: '/account/setting',
  name: 'Setting',
  element: <ProtectedRoute><Setting /></ProtectedRoute>
}, {
  path: '/account/dashboard',
  name: 'Dashboard',
  element: <ProtectedRoute><Dashboard /></ProtectedRoute>
}, {
  path: '/account/create-post',
  name: 'Create Post',
  element: <ProtectedRoute><CreatePost /></ProtectedRoute>
}, {
  path: '/account/create-post/:id',
  name: 'Edit Post',
  element: <ProtectedRoute><CreatePost /></ProtectedRoute>
}, {
  path: '/account/members',
  name: 'Members',
  element: <ProtectedRoute><Members /></ProtectedRoute>
}, {
  path: '/auth/update-password',
  name: 'Update Password',
  element: <GuestRoute><UpdatePassword /></GuestRoute>
}];

// public routes
const otherPublicRoutes = [{
  path: '/pages/about',
  name: 'About',
  element: <CompanyPage />
}//, {
//   path: '/pages/career',
//   name: 'Career',
//   element: <CareerPage />
// }, {
//   path: '/pages/pricing',
//   name: 'Pricing',
//   element: <PricingPage />
// }, {
//   path: '/pages/help',
//   name: 'Help',
//   element: <HelpPage />
// }
];
export const appRoutes = [...dashboardRoutes, ...landingRoutes, ...blogroutes, ...authRoutes, ...otherPublicRoutes, ...uiRoutes];