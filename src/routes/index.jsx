import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

//auth
const Login = lazy(() => import('@/pages/auth/login/index'));
const SignUp = lazy(() => import('@/pages/auth/signup/index'));
const ForgotPassword = lazy(() => import('@/pages/auth/forget-pass/index'));
const ConfirmMail = lazy(() => import('@/pages/auth/confirm/index'));
const CreatePost = lazy(() => import('@/pages/account/create-post/index'));
const Members = lazy(() => import('@/pages/account/members/index'));

//Home Page
const HomePage = lazy(() => import('@/pages/home/index'));

//landing Pages
const AppPage = lazy(() => import('@/pages/landing/app/index'));
const SassClassicPage = lazy(() => import('@/pages/landing/sass-classic/index'));
const SoftwarePage = lazy(() => import('@/pages/landing/software/index'));
const CoworkingPages = lazy(() => import('@/pages/landing/coworking/index'));
const MarketingPages = lazy(() => import('@/pages/landing/marketing/index'));
const SassModernPages = lazy(() => import('@/pages/landing/sass-modern/index'));
const StartupPages = lazy(() => import('@/pages/landing/startup/index'));
const AgencyPages = lazy(() => import('@/pages/landing/agency/index'));
const CryptoPages = lazy(() => import('@/pages/landing/crypto/index'));
const PortfolioPages = lazy(() => import('@/pages/landing/portfolio/index'));

//PortfolioPages
const PortFolioGrid = lazy(() => import('@/pages/pages/portfolio/grid/index'));
const PortfolioMasonry = lazy(() => import('@/pages/pages/portfolio/masonry/index'));
const PortFolioItem = lazy(() => import('@/pages/pages/portfolio/item/index'));

// contact page
const ContactPage = lazy(() => import('@/pages/contact/index'));

// Blog Pages
const BlogList = lazy(() => import('@/pages/pages/blog/index'));
const BlogPost = lazy(() => import('@/pages/pages/blog-post/index'));

//otherPages
const CompanyPage = lazy(() => import('@/pages/pages/company/index'));
const CareerPage = lazy(() => import('@/pages/pages/career/index'));
const PricingPage = lazy(() => import('@/pages/pages/pricing/index'));
const HelpPage = lazy(() => import('@/pages/pages/help/index'));
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
}, {
  path: '/landing/app',
  name: 'App',
  element: <AppPage />
}, {
  path: '/landing/sass-classic',
  name: 'Sass Classic',
  element: <SassClassicPage />
}, {
  path: '/landing/software',
  name: 'Software',
  element: <SoftwarePage />
}, {
  path: '/landing/coworking',
  name: 'Coworking',
  element: <CoworkingPages />
}, {
  path: '/landing/marketing',
  name: 'Marketing',
  element: <MarketingPages />
}, {
  path: '/landing/sass-modern',
  name: 'Sass Modern',
  element: <SassModernPages />
}, {
  path: '/landing/startup',
  name: 'Startup',
  element: <StartupPages />
}, {
  path: '/landing/agency',
  name: 'Agency',
  element: <AgencyPages />
}, {
  path: '/landing/crypto',
  name: 'Crypto',
  element: <CryptoPages />
}, {
  path: '/landing/portfolio',
  name: 'Portfolio',
  element: <PortfolioPages />
}];

// Portfolio Routes
const portfolioRoutes = [{
  path: '/pages/portfolio/grid',
  name: 'Portfolio Grid',
  element: <PortFolioGrid />
}, {
  path: '/pages/portfolio/masonry',
  name: 'Portfolio Masonry',
  element: <PortfolioMasonry />
}, {
  path: '/pages/portfolio/item',
  name: 'Portfolio Items',
  element: <PortFolioItem />
}];

// Blog
const blogroutes = [{
  path: '/pages/blog',
  name: 'List',
  element: <BlogList />
}, {
  path: '/pages/blog-post',
  name: 'Post',
  element: <BlogPost />
}];

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
  element: <Login />
}, {
  path: '/auth/signup',
  name: 'Register',
  element: <SignUp />
}, {
  path: '/auth/forget-pass',
  name: 'Forgot Password',
  element: <ForgotPassword />
}, {
  path: '/auth/confirm',
  name: 'Confirm Mail',
  element: <ConfirmMail />
}, {
  path: '/account/setting',
  name: 'Setting',
  element: <Setting />
}, {
  path: '/account/dashboard',
  name: 'Dashboard',
  element: <Dashboard />
}, {
  path: '/account/create-post',
  name: 'Create Post',
  element: <CreatePost />
}, {
  path: '/account/create-post/:id',
  name: 'Edit Post',
  element: <CreatePost />
}, {
  path: '/account/members',
  name: 'Members',
  element: <Members />
}];

// public routes
const otherPublicRoutes = [{
  path: '/pages/company',
  name: 'Company',
  element: <CompanyPage />
}, {
  path: '/pages/career',
  name: 'Career',
  element: <CareerPage />
}, {
  path: '/pages/pricing',
  name: 'Pricing',
  element: <PricingPage />
}, {
  path: '/pages/help',
  name: 'Help',
  element: <HelpPage />
}];
export const appRoutes = [...dashboardRoutes, ...landingRoutes, ...portfolioRoutes, ...blogroutes, ...authRoutes, ...uiRoutes, ...otherPublicRoutes];