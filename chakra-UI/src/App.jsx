import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

// Layouts and Pages
import RootLayout from './Layout/RootLayout'
import Dashboard, { tasksloader } from './Pages/Dashboard'
import Create from './Pages/Create'
import Profile from './Pages/Profile'

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Dashboard />} loader={tasksloader} />
      <Route path="/Create" element={<Create />} />
      <Route path="/Profile" element={<Profile />} loader={tasksloader} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App