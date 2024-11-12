import { useState } from 'react'
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Textarea } from "@/components/ui/textarea"

export default function AttendanceCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [note, setNote] = useState("")

  // Mock attendance data
  const attendanceData = {
    "2023-05-01": { status: "perfect" },
    "2023-05-05": { status: "low" },
    "2023-05-10": { status: "missed" },
    // Add more dates as needed
  }

  const getDateColor = (date: Date) => {
    const dateString = date.toISOString().split('T')[0]
    if (attendanceData[dateString]) {
      switch (attendanceData[dateString].status) {
        case "perfect":
          return "bg-green-500"
        case "low":
          return "bg-yellow-500"
        case "missed":
          return "bg-red-500"
        default:
          return ""
      }
    }
    return ""
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Attendance Calendar</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Attendance History</CardTitle>
            <CardDescription>View your attendance patterns</CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
              modifiers={{
                customStyles: (date) => getDateColor(date) !== "",
              }}
              modifiersStyles={{
                customStyles: (date) => ({
                  backgroundColor: getDateColor(date),
                  color: "white",
                }),
              }}
            />
          </CardContent>
          <CardFooter className="justify-between">
            <div className="flex items-center space-x-2">
              <Badge className="bg-green-500">Perfect</Badge>
              <Badge className="bg-yellow-500">Low</Badge>
              <Badge className="bg-red-500">Missed</Badge>
            </div>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Add Note</CardTitle>
            <CardDescription>Record reminders or explanations</CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder="Add a note for the selected date..."
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </CardContent>
          <CardFooter>
            <Button className="w-full">Save Note</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
