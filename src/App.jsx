import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import { Blog } from './pages/Blog.jsx'
// import { Signup } from './pages/Signup.jsx'
// import { Login } from './pages/Login.jsx'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AuthContextProvider } from './contexts/AuthContexts.jsx'
import PropTypes from 'prop-types'
import { HelmetProvider } from 'react-helmet-async'
import { ApolloProvider } from '@apollo/client/react/index.js'
import { ApolloClient, InMemoryCache } from '@apollo/client/core/index.js'

const queryClient = new QueryClient()

const apolloClient = new ApolloClient({
  uri: import.meta.env.VITE_GRAPHQL_URL,
  cache: new InMemoryCache(),
})

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
      <ApolloProvider client={apolloClient}>
        <QueryClientProvider client={queryClient}>
          <AuthContextProvider>{children}</AuthContextProvider>
        </QueryClientProvider>
      </ApolloProvider>
    </HelmetProvider>
  )
}
App.propTypes = {
  children: PropTypes.element.isRequired,
}
