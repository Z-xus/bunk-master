import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import DashboardPage from './pages/Dashboard.tsx'
import AttendanceLogging from './pages/AttendanceLogging.tsx'
import ClassSchedule from './pages/ClassSchedule.tsx'
import AttendanceCalendar from './pages/AttendanceCalendar.tsx'
import AttendanceReports from './pages/AttendanceReports.tsx'
import AttendanceCollaboration from './pages/AttendanceCollaboration.tsx'

const tmp = 'h-screen bg-black text-white text-4xl text-center grid place-items-center'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div className={tmp}>Oops.. There seems to be a problem.</div>,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard" replace />,
      },
      {
        path: '/dashboard',
        element: <DashboardPage />,
      },
      {
        path: '/attendance-logging',
        element: <AttendanceLogging />,
      },
      {
        path: '/class-schedule',
        element: <ClassSchedule />,
      },
      {
        path: '/attendance-calendar',
        element: <AttendanceCalendar />,
      },
      {
        path: '/attendance-reports',
        element: <AttendanceReports />,
      },
      {
        path: '/attendance-collaboration',
        element: <AttendanceCollaboration />,
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
