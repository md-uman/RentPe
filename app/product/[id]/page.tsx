"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Star,
  MapPin,
  Shield,
  Heart,
  Share2,
  Calendar,
  Users,
  Wifi,
  Car,
  Dumbbell,
  Waves,
  MessageCircle,
  Phone,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"

const product = {
  id: 1,
  title: "Luxury 2BHK Apartment in Banjara Hills",
  category: "Homes",
  price: "₹25,000",
  period: "month",
  location: "Banjara Hills, Hyderabad",
  rating: 4.8,
  reviews: 24,
  verified: true,
  images: [
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
  ],
  description:
    "Experience luxury living in this beautifully furnished 2BHK apartment located in the heart of Banjara Hills. This premium property offers modern amenities, stunning city views, and is perfect for professionals and families alike.",
  features: ["2 BHK", "Furnished", "Parking", "Gym", "Pool", "WiFi", "AC", "Security"],
  amenities: [
    { icon: Wifi, name: "High-Speed WiFi" },
    { icon: Car, name: "Parking Space" },
    { icon: Dumbbell, name: "Gym Access" },
    { icon: Waves, name: "Swimming Pool" },
    { icon: Shield, name: "24/7 Security" },
    { icon: Users, name: "Community Hall" },
  ],
  owner: {
    name: "Rajesh Kumar",
    avatar: "/placeholder.svg?height=50&width=50",
    rating: 4.9,
    properties: 12,
    joinedDate: "2022",
  },
  availability: {
    available: true,
    minStay: "1 month",
    maxStay: "12 months",
  },
}

const reviews = [
  {
    id: 1,
    user: "Priya Sharma",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    date: "2 weeks ago",
    comment:
      "Excellent property with all modern amenities. The owner is very responsive and helpful. Highly recommended!",
  },
  {
    id: 2,
    user: "Amit Patel",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 4,
    date: "1 month ago",
    comment: "Great location and well-maintained apartment. The gym and pool facilities are excellent.",
  },
  {
    id: 3,
    user: "Sneha Reddy",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    date: "2 months ago",
    comment: "Perfect for working professionals. Close to IT hubs and has all necessary amenities.",
  },
]

export default function ProductPage({ params }: { params: { id: string } }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [startDate, setStartDate] = useState<Date>()
  const [endDate, setEndDate] = useState<Date>()

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
              <Link href="/dashboard" className="text-gray-600 hover:text-primary">
                Dashboard
              </Link>
              <Link href="/help" className="text-gray-600 hover:text-primary">
                Help
              </Link>
            </div>

            <div className="flex items-center space-x-3">
              <Button variant="outline" asChild>
                <Link href="/login">Login</Link>
              </Button>
              <Button asChild>
                <Link href="/signup">Sign Up</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <span>/</span>
          <Link href="/categories/homes" className="hover:text-primary">
            Homes
          </Link>
          <span>/</span>
          <span className="text-gray-900">{product.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative">
                <Image
                  src={product.images[selectedImage] || "/placeholder.svg"}
                  alt={product.title}
                  width={600}
                  height={400}
                  className="w-full h-96 object-cover rounded-lg"
                />
                <div className="absolute top-4 right-4 flex space-x-2">
                  <Button variant="secondary" size="sm">
                    <Heart className="w-4 h-4" />
                  </Button>
                  <Button variant="secondary" size="sm">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <div className="flex space-x-2 overflow-x-auto">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                      selectedImage === index ? "border-primary" : "border-gray-200"
                    }`}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`View ${index + 1}`}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <Badge variant="secondary">{product.category}</Badge>
                    {product.verified && (
                      <Badge className="bg-green-500">
                        <Shield className="w-3 h-3 mr-1" />
                        Verified
                      </Badge>
                    )}
                  </div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.title}</h1>
                  <div className="flex items-center space-x-4 text-gray-600">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {product.location}
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="ml-1">{product.rating}</span>
                      <span className="text-gray-500 ml-1">({product.reviews} reviews)</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-primary">{product.price}</div>
                  <div className="text-gray-600">per {product.period}</div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">{product.description}</p>

              {/* Features */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Features</h3>
                <div className="flex flex-wrap gap-2">
                  {product.features.map((feature) => (
                    <Badge key={feature} variant="outline">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Amenities</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {product.amenities.map((amenity) => (
                    <div key={amenity.name} className="flex items-center space-x-2">
                      <amenity.icon className="w-5 h-5 text-primary" />
                      <span className="text-gray-700">{amenity.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Owner Info */}
            <Card>
              <CardHeader>
                <CardTitle>Property Owner</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src={product.owner.avatar || "/placeholder.svg"} />
                      <AvatarFallback>
                        {product.owner.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-lg">{product.owner.name}</h4>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                          {product.owner.rating}
                        </div>
                        <span>{product.owner.properties} properties</span>
                        <span>Joined {product.owner.joinedDate}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Message
                    </Button>
                    <Button variant="outline" size="sm">
                      <Phone className="w-4 h-4 mr-2" />
                      Call
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Reviews */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Reviews ({product.reviews})</h3>
              <div className="space-y-4">
                {reviews.map((review) => (
                  <Card key={review.id}>
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-4">
                        <Avatar>
                          <AvatarImage src={review.avatar || "/placeholder.svg"} />
                          <AvatarFallback>
                            {review.user
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h5 className="font-medium">{review.user}</h5>
                            <span className="text-sm text-gray-500">{review.date}</span>
                          </div>
                          <div className="flex items-center mb-2">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <p className="text-gray-700">{review.comment}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Book This Property</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{product.price}</div>
                  <div className="text-gray-600">per {product.period}</div>
                </div>

                <Separator />

                {/* Date Selection */}
                <div className="space-y-3">
                  <div>
                    <label className="text-sm font-medium">Start Date</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-start text-left font-normal">
                          <Calendar className="mr-2 h-4 w-4" />
                          {startDate ? format(startDate, "PPP") : "Select start date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <CalendarComponent
                          mode="single"
                          selected={startDate}
                          onSelect={setStartDate}
                          disabled={(date) => date < new Date()}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div>
                    <label className="text-sm font-medium">End Date</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-start text-left font-normal">
                          <Calendar className="mr-2 h-4 w-4" />
                          {endDate ? format(endDate, "PPP") : "Select end date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <CalendarComponent
                          mode="single"
                          selected={endDate}
                          onSelect={setEndDate}
                          disabled={(date) => date < (startDate || new Date())}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

                {/* Availability Info */}
                <div className="bg-green-50 p-3 rounded-lg">
                  <div className="flex items-center text-green-700">
                    <Shield className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">Available Now</span>
                  </div>
                  <div className="text-sm text-green-600 mt-1">
                    Min stay: {product.availability.minStay} • Max stay: {product.availability.maxStay}
                  </div>
                </div>

                {/* Pricing Breakdown */}
                {startDate && endDate && (
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Base rent</span>
                      <span>₹25,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Security deposit</span>
                      <span>₹25,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Service fee</span>
                      <span>₹2,500</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-semibold">
                      <span>Total</span>
                      <span>₹52,500</span>
                    </div>
                  </div>
                )}

                <Button className="w-full" size="lg" asChild>
                  <Link href="/checkout">Book Now</Link>
                </Button>

                <Button variant="outline" className="w-full">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Contact Owner
                </Button>

                <div className="text-xs text-gray-500 text-center">
                  You won't be charged yet. Review details on the next page.
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
