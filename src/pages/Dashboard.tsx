import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Bell, Calendar, ChevronRight, ClipboardList, PieChart } from 'lucide-react'

export default function DashboardPage() {
  const attendancePercentage = 85
  const getAttendanceStatus = (percentage: number) => {
    if (percentage >= 90) return { status: 'On Track', color: 'text-green-500' }
    if (percentage >= 75) return { status: 'Approaching Minimum', color: 'text-yellow-500' }
    return { status: 'Below Minimum', color: 'text-red-500' }
  }

  const { status, color } = getAttendanceStatus(attendancePercentage)

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Attendance Overview</CardTitle>
            <CardDescription>Your current attendance status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold mb-2">{attendancePercentage}%</div>
            <Progress value={attendancePercentage} className="mb-2" />
            <p className={`font-semibold ${color}`}>{status}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Access key features</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <Button className="w-full justify-between">
              Log Attendance <ClipboardList className="ml-2 h-4 w-4" />
            </Button>
            <Button className="w-full justify-between" variant="outline">
              View Schedule <Calendar className="ml-2 h-4 w-4" />
            </Button>
            <Button className="w-full justify-between" variant="outline">
              Access Reports <PieChart className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </div>
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            <li className="flex items-center">
              <Bell className="mr-2 h-4 w-4 text-blue-500" />
              <span>You've achieved 100% attendance this week!</span>
            </li>
            <li className="flex items-center">
              <Bell className="mr-2 h-4 w-4 text-yellow-500" />
              <span>Reminder: Log your attendance for today's classes</span>
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button variant="link" className="w-full justify-between">
            View All Activities <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
