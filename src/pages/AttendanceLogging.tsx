import React, { useState } from 'react'
import { Calendar as CalendarIcon, Clock, MapPin } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns"

export default function AttendanceLogging() {
  const [date, setDate] = useState<Date>()

  const classes = [
    { id: 1, name: "Mathematics 101", time: "09:00 AM", location: "Room A101" },
    { id: 2, name: "Computer Science 202", time: "11:00 AM", location: "Lab B202" },
    { id: 3, name: "Physics 301", time: "02:00 PM", location: "Room C303" },
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Log Attendance</h1>
      <Card>
        <CardHeader>
          <CardTitle>Select Date and Class</CardTitle>
          <CardDescription>Choose the date and class to log your attendance</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col space-y-1.5">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select class" />
            </SelectTrigger>
            <SelectContent>
              {classes.map((cls) => (
                <SelectItem key={cls.id} value={cls.id.toString()}>
                  {cls.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardContent>
        <CardFooter className="flex justify-between">
          <div>
            <p className="text-sm text-muted-foreground flex items-center">
              <Clock className="mr-1 h-4 w-4" /> 09:00 AM
            </p>
            <p className="text-sm text-muted-foreground flex items-center">
              <MapPin className="mr-1 h-4 w-4" /> Room A101
            </p>
          </div>
          <div className="space-x-2">
            <Button variant="outline">Absent</Button>
            <Button variant="outline">Late</Button>
            <Button>Present</Button>
          </div>
        </CardFooter>
      </Card>
      {/* ... (Special Events card) */}
    </div>
  )
}
