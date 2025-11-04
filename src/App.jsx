import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import { Blog } from './pages/Blog.jsx'
// import { Signup } from './pages/Signup.jsx'
// import { Login } from './pages/Login.jsx'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AuthContextProvider } from './contexts/AuthContexts.jsx'
import PropTypes from 'prop-types'
import { HelmetProvider } from 'react-helmet-async'

const queryClient = new QueryClient()

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Blog />,
//   },
//   {
//     path: '/signup',
//     element: <Signup />,
//   },
//   {
//     path: '/login',
//     element: <Login />,
//   },
// ])

export function App({ children }) {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>{children}</AuthContextProvider>
      </QueryClientProvider>
    </HelmetProvider>
  )
}
App.propTypes = {
  children: PropTypes.element.isRequired,
}
