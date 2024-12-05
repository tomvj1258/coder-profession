// app/page.tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Code2, Database, Laptop, Users, Clock, ArrowRight } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full border-b bg-white/80 backdrop-blur-md z-50">
        <div className="container flex h-16 items-center justify-between">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            MERN Master
          </span>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm font-medium text-gray-700 hover:text-blue-600">Features</a>
            <a href="#curriculum" className="text-sm font-medium text-gray-700 hover:text-blue-600">Curriculum</a>
            <a href="#pricing" className="text-sm font-medium text-gray-700 hover:text-blue-600">Pricing</a>
            <Button>Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Master the MERN Stack
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Learn MongoDB, Express.js, React, and Node.js through hands-on projects 
            and real-world applications.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="text-lg">
              Start Learning Now
            </Button>
            <Button size="lg" variant="outline" className="text-lg">
              View Curriculum
            </Button>
          </div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section id="features" className="py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Why Choose MERN Master?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Interactive Learning */}
            <Card className="group hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-blue-50 to-indigo-50">
              <CardContent className="p-8">
                <div className="h-12 w-12 bg-blue-600 rounded-2xl mb-6 flex items-center justify-center">
                  <Laptop className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Interactive Learning</h3>
                <p className="text-gray-600">
                  Learn by doing with hands-on projects and real-time coding exercises.
                </p>
              </CardContent>
            </Card>

            {/* Full Stack Coverage */}
            <Card className="group row-span-2 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-purple-50 to-pink-50">
              <CardContent className="p-8">
                <div className="h-12 w-12 bg-purple-600 rounded-2xl mb-6 flex items-center justify-center">
                  <Code2 className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Full Stack Coverage</h3>
                <p className="text-gray-600 mb-6">
                  Comprehensive curriculum covering MongoDB, Express.js, React, and Node.js.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <Check className="h-5 w-5 mr-2 text-green-500" />
                    Database Design
                  </li>
                  <li className="flex items-center text-gray-600">
                    <Check className="h-5 w-5 mr-2 text-green-500" />
                    API Development
                  </li>
                  <li className="flex items-center text-gray-600">
                    <Check className="h-5 w-5 mr-2 text-green-500" />
                    Frontend Architecture
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Learn at Your Pace */}
            <Card className="group hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-green-50 to-teal-50">
              <CardContent className="p-8">
                <div className="h-12 w-12 bg-green-600 rounded-2xl mb-6 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Learn at Your Pace</h3>
                <p className="text-gray-600">
                  Flexible learning schedule with lifetime access to course materials.
                </p>
              </CardContent>
            </Card>

            {/* Community Support */}
            <Card className="group col-span-2 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-yellow-50 to-orange-50">
              <CardContent className="p-8">
                <div className="h-12 w-12 bg-yellow-600 rounded-2xl mb-6 flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Community Support</h3>
                <p className="text-gray-600">
                  Join a thriving community of developers. Get help, share knowledge, 
                  and collaborate on projects.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 text-white text-center">
          <div>
            <div className="text-4xl font-bold mb-2">10,000+</div>
            <div className="text-blue-100">Active Students</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">95%</div>
            <div className="text-blue-100">Success Rate</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">24/7</div>
            <div className="text-blue-100">Support Available</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Join thousands of developers who have transformed their careers with MERN Master.
          </p>
          <Button size="lg" className="text-lg">
            Enroll Now <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}