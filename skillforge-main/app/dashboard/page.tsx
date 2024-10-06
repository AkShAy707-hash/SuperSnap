"use client"
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, UserPlus, Settings, LogOut } from 'lucide-react'

export default function Dashboard() {
  const navigate = useNavigate()

  const handleLogout = () => {
    navigate('/login')
  }

  return (
    <div className="flex h-screen bg-gray-700">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-yellow-500">
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-6">ServiceConnect</h1>
          <nav>
            <ul className="space-y-2">
              <li>
                <Button variant="ghost" className="w-full justify-start text-yellow-500 hover:text-yellow-400 hover:bg-gray-700">
                  <Home className="mr-2" size={20} />
                  Dashboard
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="w-full justify-start text-yellow-500 hover:text-yellow-400 hover:bg-gray-700">
                  <UserPlus className="mr-2" size={20} />
                  Hiring
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="w-full justify-start text-yellow-500 hover:text-yellow-400 hover:bg-gray-700">
                  <Settings className="mr-2" size={20} />
                  Settings
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="w-full justify-start text-yellow-500 hover:text-yellow-400 hover:bg-gray-700" onClick={handleLogout}>
                  <LogOut className="mr-2" size={20} />
                  Sign Out
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar */}
        <header className="bg-gray-800 text-yellow-500 p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Dashboard</h2>
            <span>Welcome, User!</span>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-700 p-6">
          <Card className="mb-6 bg-gray-800 border-gray-600">
            <CardHeader>
              <CardTitle className="text-yellow-500">Welcome to the Dashboard!</CardTitle>
            </CardHeader>
            <CardContent className="text-yellow-500">
              <p>This is your personalized dashboard. Here you can manage your services and requests.</p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-gray-800 border-gray-600">
              <CardHeader>
                <CardTitle className="text-yellow-500">Customer Section</CardTitle>
              </CardHeader>
              <CardContent className="text-yellow-500">
                <p>Here you can request services and view your past requests.</p>
                <Button className="mt-4 bg-yellow-500 text-gray-800 hover:bg-yellow-600">Request Service</Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-600">
              <CardHeader>
                <CardTitle className="text-yellow-500">Service Provider Section</CardTitle>
              </CardHeader>
              <CardContent className="text-yellow-500">
                <p>Here you can view and accept job requests.</p>
                <Button className="mt-4 bg-yellow-500 text-gray-800 hover:bg-yellow-600">View Job Requests</Button>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
