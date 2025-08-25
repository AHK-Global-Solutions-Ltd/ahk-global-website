import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Star, 
  CheckCircle, 
  Users, 
  Clock, 
  Globe, 
  Zap,
  Shield,
  BarChart3,
  Code,
  Cloud,
  MessageCircle,
  Linkedin,
  ArrowUp,
  Menu,
  X
} from 'lucide-react'
import './App.css'

// Import images
import heroImage from './assets/hero_office_image.webp'
import whyChooseImage from './assets/why_choose_office_image.webp'
import realEstateImage from './assets/real_estate_image.webp'
import deliveryImage from './assets/delivery_services_image.webp'
import healthcareImage from './assets/healthcare_image.webp'
import technologyImage from './assets/technology_team_image.webp'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navigationItems = [
    { name: 'Home', href: '#home', color: 'bg-green-100 text-green-700' },
    { name: 'Services', href: '#services', color: 'bg-blue-100 text-blue-700' },
    { name: 'Industries', href: '#industries', color: 'bg-orange-100 text-orange-700' },
    { name: 'About', href: '#about', color: 'bg-purple-100 text-purple-700' },
    { name: 'Contact', href: '#contact', color: 'bg-teal-100 text-teal-700' }
  ]

  const stats = [
    { number: '500+', label: 'Happy Clients' },
    { number: '24/7', label: 'Support Available' },
    { number: '99%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Countries Served' }
  ]

  const services = [
    {
      title: 'Virtual Assistance',
      description: 'Professional administrative support, call handling, scheduling, and CRM management',
      features: ['24/7 Call Answering', 'Email & Calendar Management', 'Lead Qualification', 'Multi-language Support']
    },
    {
      title: 'Accounting & Bookkeeping',
      description: 'Complete financial management from basic bookkeeping to advanced reporting',
      features: ['UAE & USA Compliance', 'Multi-entity Consolidation', 'Payroll Management', 'Financial Reporting']
    }
  ]

  const whyChooseFeatures = [
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Human + Technology',
      description: 'Skilled professionals enhanced by AI and automation for optimal efficiency.'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Global Reach',
      description: 'Serving clients across 50+ countries with local expertise and understanding.'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: '24/7 Support',
      description: 'Round-the-clock availability to support your business operations.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Scalable Solutions',
      description: 'Flexible services that grow with your business needs and requirements.'
    }
  ]

  const industries = [
    {
      title: 'Real Estate',
      description: 'Comprehensive property management and investor support services',
      image: realEstateImage,
      features: ['Property Management', 'MLS Support', 'Investor Lead Generation', 'Market Analytics']
    },
    {
      title: 'Delivery Services',
      description: 'Complete operational support for delivery and logistics companies',
      image: deliveryImage,
      features: ['Fleet Management', 'Rider Recruitment', '24/7 Operations', 'Performance Tracking']
    },
    {
      title: 'Healthcare',
      description: 'HIPAA-compliant medical billing and administrative support',
      image: healthcareImage,
      features: ['Medical Billing', 'Claims Processing', 'Patient Management', 'Compliance Support']
    }
  ]

  const technologies = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Zoho One',
      description: 'Complete business suite'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'AI Integration',
      description: 'Smart automation'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Custom Development',
      description: 'MERN & Python stack'
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud Hosting',
      description: 'AWS & Azure'
    }
  ]

  const testimonials = [
    {
      rating: 5,
      text: "AHK Global Solutions transformed our back office operations. Their virtual assistants are professional and efficient, handling everything from customer calls to complex data management.",
      author: "Sarah Johnson",
      position: "Tech Startup CEO"
    },
    {
      rating: 5,
      text: "The accounting services are top-notch. They handle our multi-entity books with precision and provide excellent reporting that helps us make informed business decisions.",
      author: "",
      position: ""
    },
    {
      rating: 5,
      text: "Outstanding digital marketing support! They've increased our online presence and lead generation beyond our expectations. Highly professional team.",
      author: "David Thompson",
      position: "Healthcare Practice Owner"
    },
    {
      rating: 5,
      text: "The technology development team delivered our custom CRM solution on time and within budget. Their expertise in MERN stack is impressive.",
      author: "",
      position: ""
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">
                AHK Global<br />
                <span className="text-sm font-normal text-gray-600">Solutions Limited</span>
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-1">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-opacity-80 ${item.color}`}
                >
                  {item.name.toLowerCase()}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <Zap className="w-4 h-4 mr-2" />
                Get Started
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-2">
                {navigationItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium ${item.color}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name.toLowerCase()}
                  </a>
                ))}
                <Button className="bg-blue-600 hover:bg-blue-700 text-white mt-4">
                  <Zap className="w-4 h-4 mr-2" />
                  Get Started
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Your Global<br />
                  <span className="text-blue-600">Back Office Hub</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Comprehensive business support services combining human expertise with advanced automation. 
                  Focus on growing your business while we handle the rest.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Zap className="w-5 h-5 mr-2" />
                  Get Started
                </Button>
                <Button size="lg" variant="outline" className="border-orange-500 text-orange-600 hover:bg-orange-50">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  View Services
                </Button>
              </div>

              <div className="flex items-center space-x-2 text-orange-600">
                <span className="text-2xl">🎁</span>
                <span className="font-semibold">Special Offer: 3 Months Free Bookkeeping</span>
              </div>
            </div>

            <div className="relative">
              <img
                src={heroImage}
                alt="Modern office space"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -top-4 -right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg">
                <MessageCircle className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="relative">
                  <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-600 rounded-full opacity-20"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Service Pillars */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-blue-600 mb-4">
              Our Core Service Pillars
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive back office solutions tailored to your business needs
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-shadow duration-300">
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose AHK */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold text-blue-600">
                  Why Choose AHK Global Solutions?
                </h2>
                <p className="text-xl text-gray-600">
                  We combine the best of human expertise with cutting-edge technology to deliver exceptional results.
                </p>
              </div>

              <div className="space-y-6">
                {whyChooseFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Phone className="w-5 h-5 mr-2" />
                Schedule a Consultation
              </Button>
            </div>

            <div className="relative">
              <img
                src={whyChooseImage}
                alt="Professional office environment"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Industry Solutions */}
      <section id="industries" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-blue-600 mb-4">
              Specialized Industry Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Tailored services for specific industry needs and requirements
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">{industry.title}</h3>
                  <p className="text-gray-600">{industry.description}</p>
                  
                  <div className="space-y-2">
                    {industry.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    className={`w-full mt-4 ${
                      index === 0 ? 'bg-blue-600 hover:bg-blue-700' :
                      index === 1 ? 'bg-blue-600 hover:bg-blue-700' :
                      'bg-blue-600 hover:bg-blue-700'
                    } text-white`}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src={technologyImage}
                alt="Technology team working"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold text-blue-600">
                  Powered by Advanced Technology
                </h2>
                <p className="text-xl text-gray-600">
                  Our technology stack ensures efficient, secure, and scalable operations for all your business needs.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {technologies.map((tech, index) => (
                  <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="space-y-3">
                      <div className="bg-blue-100 p-3 rounded-lg inline-block">
                        {tech.icon}
                      </div>
                      <h3 className="font-bold text-gray-900">{tech.title}</h3>
                      <p className="text-sm text-gray-600">{tech.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-blue-600 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by businesses worldwide for exceptional service delivery
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {testimonials.slice(0, 2).map((testimonial, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-shadow duration-300">
                <CardContent className="space-y-6">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <blockquote className="text-lg text-gray-700 italic">
                    "{testimonial.text}"
                  </blockquote>
                  
                  {testimonial.author && (
                    <div className="border-t pt-4">
                      <div className="font-bold text-gray-900">{testimonial.author}</div>
                      <div className="text-blue-600">{testimonial.position}</div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Ready to Transform Your Back Office?
          </h2>
          <p className="text-xl opacity-90">
            Get started with our comprehensive back office solutions and focus on what matters most - growing your business.
          </p>
          
          <div className="bg-orange-500 text-white px-6 py-3 rounded-lg inline-block font-semibold">
            🎁 Special Offer: 3 Months Free Bookkeeping
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Zap className="w-5 h-5 mr-2" />
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <BarChart3 className="w-5 h-5 mr-2" />
              View Services
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Services */}
            <div>
              <h3 className="text-lg font-bold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Virtual Assistant</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Accounting & Bookkeeping</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Digital Marketing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Technology Development</a></li>
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h3 className="text-lg font-bold mb-4">Industries</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Real Estate</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Delivery Services</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Healthcare</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Consulting</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms-of-use" className="hover:text-white transition-colors">Terms of Use</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Info</h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4" />
                  <span>info@ahksolution.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4" />
                  <span>careers@ahksolution.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4" />
                  <span>+1 (848) 466-6666</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 mt-1" />
                  <div className="space-y-2">
                    <div>2082 Michelson Dr, Irvine, CA 92612</div>
                    <div>Office 2304 Prime Tower, Business Bay, Dubai, UAE</div>
                    <div>112 Hall Rd, Block B Gulberg 2, Lahore, Pakistan</div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold mb-3">Follow Us</h4>
                <div className="flex space-x-3">
                  <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                    <MessageCircle className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                    <Linkedin className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2025 AHK Global Solutions Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg z-50"
          size="sm"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      )}

      {/* Floating Action Buttons */}
      <div className="fixed right-6 bottom-20 space-y-3 z-40">
        <Button className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg">
          <MessageCircle className="w-5 h-5" />
        </Button>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg">
          <Linkedin className="w-5 h-5" />
        </Button>
      </div>
    </div>
  )
}

export default App

