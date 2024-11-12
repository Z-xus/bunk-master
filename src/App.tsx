import React, { useState } from 'react';
import { Outlet, Link, useLocation } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner"
import { Button } from "@/components/ui/button"
import { Home, ClipboardList, Calendar, PieChart, Users } from 'lucide-react'
import Navbar from './components/common/Navbar';
import './index.css'

function App() {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const navItems = [
    { path: '/dashboard', icon: Home, label: 'Home' },
    { path: '/attendance-logging', icon: ClipboardList, label: 'Log Attendance' },
    { path: '/class-schedule', icon: Calendar, label: 'Class Schedule' },
    { path: '/attendance-calendar', icon: Calendar, label: 'Attendance Calendar' },
    { path: '/attendance-reports', icon: PieChart, label: 'Reports' },
    { path: '/attendance-collaboration', icon: Users, label: 'Collaboration' },
  ];

  return (
    <div className='transition-colors ease-in-out duration-1000 flex h-screen bg-gray-100'>
      <nav className={`bg-white shadow-md transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-16'}`}>
        <div className="p-4">
          <h1 className={`text-2xl font-bold ${isSidebarOpen ? '' : 'hidden'}`}>Attendance Tracker</h1>
        </div>
        <ul className="space-y-2 p-4">
          {navItems.map((item) => (
            <li key={item.path}>
              <Button
                variant={location.pathname === item.path ? 'default' : 'ghost'}
                className={`w-full justify-start ${isSidebarOpen ? '' : 'px-2'}`}
                asChild
              >
                <Link to={item.path}>
                  <item.icon className="h-4 w-4" />
                  {isSidebarOpen && <span className="ml-2">{item.label}</span>}
                </Link>
              </Button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-y-auto p-4">
          <Outlet />
        </main>
      </div>
      <Toaster />
    </div>
  )
}

export default App
