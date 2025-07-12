"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Plus,
  Search,
  Filter,
  MoreHorizontal,
  Edit,
  Trash2,
  Eye,
  Calendar,
  MapPin,
  Star,
  TrendingUp,
  Users,
  DollarSign,
  Home,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const myListings = [
  {
    id: 1,
    title: "Modern 2BHK Apartment",
    category: "Homes",
    price: "₹20,000",
    period: "month",
    location: "Gachibowli, Hyderabad",
    status: "active",
    views: 156,
    inquiries: 12,
    image: "/placeholder.svg?height=150&width=200",
    datePosted: "2024-01-15",
  },
  {
    id: 2,
    title: "Honda City 2022",
    category: "Cars",
    price: "₹2,500",
    period: "day",
    location: "Banjara Hills, Hyderabad",
    status: "rented",
    views: 89,
    inquiries: 8,
    image: "/placeholder.svg?height=150&width=200",
    datePosted: "2024-01-10",
  },
  {
    id: 3,
    title: "Gaming Laptop Setup",
    category: "Electronics",
    price: "₹3,000",
    period: "week",
    location: "Madhapur, Hyderabad",
    status: "pending",
    views: 45,
    inquiries: 3,
    image: "/placeholder.svg?height=150&width=200",
    datePosted: "2024-01-20",
  },
]

const myBookings = [
  {
    id: 1,
    title: "Luxury Villa in Jubilee Hills",
    category: "Homes",
    price: "₹45,000",
    period: "month",
    location: "Jubilee Hills, Hyderabad",
    status: "confirmed",
    startDate: "2024-02-01",
    endDate: "2024-03-01",
    image: "/placeholder.svg?height=150&width=200",
    owner: "Rajesh Kumar",
  },
  {
    id: 2,
    title: "BMW X3 2023",
    category: "Cars",
    price: "₹4,500",
    period: "day",
    location: "Film Nagar, Hyderabad",
    status: "ongoing",
    startDate: "2024-01-25",
    endDate: "2024-01-30",
    image: "/placeholder.svg?height=150&width=200",
    owner: "Priya Sharma",
  },
]

const recentActivity = [
  {
    id: 1,
    type: "inquiry",
    message: "New inquiry for Modern 2BHK Apartment",
    time: "2 hours ago",
    user: "Amit Patel",
  },
  {
    id: 2,
    type: "booking",
    message: "Booking confirmed for BMW X3 2023",
    time: "1 day ago",
    user: "You",
  },
  {
    id: 3,
    type: "review",
    message: "New review received for Honda City 2022",
    time: "2 days ago",
    user: "Sneha Reddy",
  },
]

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <span className="text-2xl font-bold text-primary">RentPe</span>
            </Link>

            <div className="hidden md:flex items-center space-x-6">
              <Link href="/categories/all" className="text-gray-600 hover:text-primary">
                Browse
              </Link>
              <Link href="/dashboard" className="text-primary font-medium">
                Dashboard
              </Link>
              <Link href="/help" className="text-gray-600 hover:text-primary">
                Help
              </Link>
            </div>

            <div className="flex items-center space-x-3">
              <Button asChild>
                <Link href="/list-item">
                  <Plus className="w-4 h-4 mr-2" />
                  List Item
                </Link>
              </Button>
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=32&width=32" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, John!</h1>
          <p className="text-gray-600">Manage your listings, bookings, and track your rental activity</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="listings">My Listings</TabsTrigger>
            <TabsTrigger value="bookings">My Bookings</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Listings</CardTitle>
                  <Home className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3</div>
                  <p className="text-xs text-muted-foreground">+1 from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">₹67,500</div>
                  <p className="text-xs text-muted-foreground">+12% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Bookings</CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2</div>
                  <p className="text-xs text-muted-foreground">1 ending soon</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Views</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">290</div>
                  <p className="text-xs text-muted-foreground">+8% from last week</p>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Manage your rental business efficiently</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button className="h-20 flex-col" asChild>
                    <Link href="/list-item">
                      <Plus className="w-6 h-6 mb-2" />
                      List New Item
                    </Link>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col" asChild>
                    <Link href="/search">
                      <Search className="w-6 h-6 mb-2" />
                      Find Rentals
                    </Link>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col">
                    <Users className="w-6 h-6 mb-2" />
                    View Messages
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-center space-x-4">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{activity.message}</p>
                        <p className="text-xs text-gray-500">
                          {activity.time} • {activity.user}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* My Listings Tab */}
          <TabsContent value="listings" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">My Listings</h2>
              <Button asChild>
                <Link href="/list-item">
                  <Plus className="w-4 h-4 mr-2" />
                  Add New Listing
                </Link>
              </Button>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex-1">
                <Input placeholder="Search your listings..." />
              </div>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {myListings.map((listing) => (
                <Card key={listing.id} className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="relative">
                      <Image
                        src={listing.image || "/placeholder.svg"}
                        alt={listing.title}
                        width={200}
                        height={150}
                        className="w-full h-40 object-cover rounded-t-lg"
                      />
                      <Badge
                        className={`absolute top-3 right-3 ${
                          listing.status === "active"
                            ? "bg-green-500"
                            : listing.status === "rented"
                              ? "bg-blue-500"
                              : "bg-yellow-500"
                        }`}
                      >
                        {listing.status}
                      </Badge>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm" className="absolute top-3 left-3 bg-white/80">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem>
                            <Eye className="w-4 h-4 mr-2" />
                            View
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="w-4 h-4 mr-2" />
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            <Trash2 className="w-4 h-4 mr-2" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    <div className="p-4">
                      <Badge variant="secondary" className="mb-2">
                        {listing.category}
                      </Badge>
                      <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{listing.title}</h3>
                      <div className="flex items-center text-gray-600 text-sm mb-2">
                        <MapPin className="w-4 h-4 mr-1" />
                        {listing.location}
                      </div>
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <span className="text-lg font-bold text-primary">{listing.price}</span>
                          <span className="text-gray-600">/{listing.period}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{listing.views} views</span>
                        <span>{listing.inquiries} inquiries</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* My Bookings Tab */}
          <TabsContent value="bookings" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">My Bookings</h2>
              <Button variant="outline" asChild>
                <Link href="/search">
                  <Search className="w-4 h-4 mr-2" />
                  Find More Rentals
                </Link>
              </Button>
            </div>

            <div className="space-y-4">
              {myBookings.map((booking) => (
                <Card key={booking.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <Image
                        src={booking.image || "/placeholder.svg"}
                        alt={booking.title}
                        width={120}
                        height={80}
                        className="w-24 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="secondary">{booking.category}</Badge>
                          <Badge
                            className={
                              booking.status === "confirmed"
                                ? "bg-green-500"
                                : booking.status === "ongoing"
                                  ? "bg-blue-500"
                                  : "bg-yellow-500"
                            }
                          >
                            {booking.status}
                          </Badge>
                        </div>
                        <h3 className="font-semibold text-lg mb-1">{booking.title}</h3>
                        <div className="flex items-center text-gray-600 text-sm mb-2">
                          <MapPin className="w-4 h-4 mr-1" />
                          {booking.location}
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-gray-600">
                            <span className="font-medium">Owner:</span> {booking.owner}
                          </div>
                          <div className="text-sm text-gray-600">
                            {booking.startDate} - {booking.endDate}
                          </div>
                          <div>
                            <span className="text-lg font-bold text-primary">{booking.price}</span>
                            <span className="text-gray-600">/{booking.period}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col space-y-2">
                        <Button size="sm" asChild>
                          <Link href={`/product/${booking.id}`}>View Details</Link>
                        </Button>
                        <Button variant="outline" size="sm">
                          Contact Owner
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Activity Tab */}
          <TabsContent value="activity" className="space-y-6">
            <h2 className="text-2xl font-bold">Activity Feed</h2>

            <div className="space-y-4">
              {recentActivity
                .concat([
                  {
                    id: 4,
                    type: "listing",
                    message: "Your listing 'Modern 2BHK Apartment' was viewed 15 times today",
                    time: "3 days ago",
                    user: "System",
                  },
                  {
                    id: 5,
                    type: "payment",
                    message: "Payment received for Honda City 2022 rental",
                    time: "1 week ago",
                    user: "RentPe",
                  },
                ])
                .map((activity) => (
                  <Card key={activity.id}>
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                          {activity.type === "inquiry" && <Users className="w-4 h-4 text-primary" />}
                          {activity.type === "booking" && <Calendar className="w-4 h-4 text-primary" />}
                          {activity.type === "review" && <Star className="w-4 h-4 text-primary" />}
                          {activity.type === "listing" && <Eye className="w-4 h-4 text-primary" />}
                          {activity.type === "payment" && <DollarSign className="w-4 h-4 text-primary" />}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">{activity.message}</p>
                          <p className="text-sm text-gray-500">
                            {activity.time} • {activity.user}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
