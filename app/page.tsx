"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  ChevronDown,
  Heart,
  Shield,
  Clock,
  Users,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Activity,
  Calendar,
  Pill,
  TrendingUp,
  User,
  CircleChevronDown as IconChevronDown,
  Play,
} from "lucide-react"

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const services = [
    {
      title: "Emergency Care",
      description: "24/7 emergency medical services with advanced life support and trauma care",
      image: "/images/yanet-medical-staff.png",
    },
    {
      title: "Cardiology",
      description: "Comprehensive heart care with cutting-edge cardiac interventions and diagnostics",
      image: "/images/yanet-doctors-group.png",
    },
    {
      title: "Pediatrics",
      description: "Specialized pediatric care in a child-friendly environment with family-centered approach",
      image: "/images/yanet-nurses.png",
    },
    {
      title: "Surgery",
      description: "Advanced surgical procedures using minimally invasive techniques and robotic assistance",
      image: "/images/yanet-doctors-outdoor.png",
    },
    {
      title: "Radiology",
      description: "State-of-the-art diagnostic imaging including MRI, CT, ultrasound, and digital X-ray",
      image: "/images/yanet-leadership.png",
    },
  ]

  const testimonials = [
    {
      name: "Almaz Tadesse",
      text: "Yanet Hospital provided exceptional care during my cardiac surgery. The medical team's expertise and compassionate approach made all the difference in my recovery.",
      rating: 5,
    },
    {
      name: "Dawit Bekele",
      text: "Outstanding medical facilities and professional staff. The quality of care and attention to detail exceeded my expectations. Highly recommended for specialized treatment.",
      rating: 5,
    },
    {
      name: "Hanan Mohammed",
      text: "From consultation to treatment, every step was handled with utmost professionalism. The doctors took time to explain everything and ensured I felt comfortable throughout.",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0 opacity-80">
          {/* Multiple DNA molecular patterns at different positions and scales */}
          <div className="absolute top-10 left-10 w-20 h-32 animate-float-slow">
            <img src="/images/dna-red-glow.png" alt="" className="w-full h-full object-contain opacity-50" />
          </div>
          <div className="absolute top-40 right-20 w-16 h-28 animate-float-delay">
            <img src="/images/dna-blue-glow.png" alt="" className="w-full h-full object-contain opacity-40" />
          </div>
          <div className="absolute bottom-32 left-1/4 w-18 h-30 animate-float">
            <img src="/images/dna-red-glow.png" alt="" className="w-full h-full object-contain opacity-45" />
          </div>
          <div className="absolute top-1/3 right-1/4 w-14 h-24 animate-float-slow">
            <img src="/images/dna-blue-glow.png" alt="" className="w-full h-full object-contain opacity-35" />
          </div>
          <div className="absolute bottom-20 right-10 w-22 h-36 animate-float-delay">
            <img src="/images/dna-red-glow.png" alt="" className="w-full h-full object-contain opacity-50" />
          </div>
          <div className="absolute top-2/3 left-16 w-16 h-26 animate-float">
            <img src="/images/dna-blue-glow.png" alt="" className="w-full h-full object-contain opacity-30" />
          </div>
          <div className="absolute top-20 left-1/2 w-18 h-32 animate-float-slow">
            <img src="/images/dna-red-glow.png" alt="" className="w-full h-full object-contain opacity-40" />
          </div>
          <div className="absolute bottom-1/3 right-1/3 w-20 h-34 animate-float-delay">
            <img src="/images/dna-blue-glow.png" alt="" className="w-full h-full object-contain opacity-45" />
          </div>
          <div className="absolute top-1/4 left-1/3 w-15 h-28 animate-float">
            <img src="/images/dna-red-glow.png" alt="" className="w-full h-full object-contain opacity-35" />
          </div>
          <div className="absolute bottom-1/4 left-2/3 w-17 h-30 animate-float-slow">
            <img src="/images/dna-blue-glow.png" alt="" className="w-full h-full object-contain opacity-40" />
          </div>
        </div>
      </div>

      {/* Animated Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-1">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#3151a4]/20 to-[#e01d24]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-[#e01d24]/15 to-[#3151a4]/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[#3151a4]/10 to-[#e01d24]/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Header */}
      <header className="relative z-50 bg-white/5 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/images/yanet-logo.png" alt="Yanet Healthcare Logo" className="h-12 w-auto" />
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {["Home", "About", "Services", "Departments", "Contact"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-white/90 hover:text-white transition-all duration-300 hover:scale-105 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#3151a4] to-[#e01d24] transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}

              <div className="relative group">
                <button className="text-white/90 hover:text-white transition-all duration-300 flex items-center gap-1">
                  Pages <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="p-2">
                    {Array.from({ length: 8 }, (_, i) => (
                      <a
                        key={i}
                        href="#"
                        className="block px-3 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded transition-colors"
                      >
                        Page {i + 1}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#3450a5] via-[#3450a5] to-[#2a4086] z-10">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-16 left-8 w-12 h-20 animate-float-slow opacity-30">
            <img src="/images/dna-red-glow.png" alt="" className="w-full h-full object-contain" />
          </div>
          <div className="absolute top-32 right-12 w-10 h-18 animate-float-delay opacity-25">
            <img src="/images/dna-blue-glow.png" alt="" className="w-full h-full object-contain" />
          </div>
          <div className="absolute bottom-24 left-12 w-14 h-22 animate-float opacity-35">
            <img src="/images/dna-red-glow.png" alt="" className="w-full h-full object-contain" />
          </div>
          <div className="absolute bottom-32 right-16 w-11 h-19 animate-float-slow opacity-25">
            <img src="/images/dna-blue-glow.png" alt="" className="w-full h-full object-contain" />
          </div>
          <div className="absolute top-1/2 right-8 w-13 h-21 animate-float-delay opacity-30">
            <img src="/images/dna-red-glow.png" alt="" className="w-full h-full object-contain" />
          </div>
        </div>

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-white/20 to-[#e01d24]/30 rounded-full blur-3xl animate-pulse drop-shadow-2xl backdrop-blur-sm"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-[#e01d24]/30 to-[#3450a5]/25 rounded-full blur-3xl animate-pulse delay-1000 drop-shadow-2xl backdrop-blur-sm"></div>
          <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-gradient-to-r from-[#3450a5]/20 to-[#e01d24]/20 rounded-full blur-2xl animate-pulse delay-500 drop-shadow-xl backdrop-blur-sm"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center backdrop-blur-sm bg-white/5 rounded-3xl border border-white/10 shadow-2xl p-8">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-lg border border-white/30 rounded-full px-4 py-2 text-white/95 shadow-lg drop-shadow-md">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse drop-shadow-sm"></div>
              Online Platforms offer loans
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Advanced Healthcare
                <br />
                Excellence Starts
                <br />
                With <span className="text-[#e01d24]">Yanet</span>
              </h1>

              <p className="text-xl text-white/80 leading-relaxed max-w-lg">
                Experience world-class medical care with our state-of-the-art facilities, expert physicians, and
                patient-centered approach to healthcare delivery.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#e01d24] to-red-500 hover:from-red-500 hover:to-[#e01d24] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Book Appointment
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg font-semibold backdrop-blur-sm transition-all duration-300 bg-transparent"
              >
                <Play className="w-5 h-5 mr-2" />
                Virtual Tour
              </Button>
            </div>
          </div>

          {/* Right Content - Doctor with Dashboard Widgets */}
          <div className="relative">
            {/* Main Doctor Image */}
            <div className="relative z-10">
              <img
                src="/images/medical-team-blue-scrubs.png"
                alt="Yanet Healthcare Medical Team"
                className="w-full max-w-lg mx-auto"
              />
            </div>

            {/* Dashboard Widgets */}
            <div className="absolute inset-0">
              {/* Dashboard Report Widget */}
              <Card className="absolute top-8 right-0 bg-white/15 backdrop-blur-lg border border-white/30 p-4 rounded-2xl shadow-2xl drop-shadow-xl w-48 animate-float">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-white font-semibold text-sm drop-shadow-sm">Dashboard Report</h4>
                    <div className="text-white/60 text-xs">•••</div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-white/80">
                      <span>100</span>
                      <span>75</span>
                      <span>50</span>
                      <span>25</span>
                      <span>0</span>
                    </div>
                    <div className="h-16 bg-gradient-to-r from-[#3450a5]/30 to-[#e01d24]/30 rounded-lg flex items-end justify-center backdrop-blur-sm shadow-inner">
                      <svg className="w-full h-12" viewBox="0 0 100 40">
                        <path
                          d="M5,35 Q25,15 45,25 T85,10"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          className="text-[#e01d24] drop-shadow-sm"
                        />
                      </svg>
                    </div>
                    <div className="flex justify-between text-xs text-white/60">
                      <span>Jan</span>
                      <span>Feb</span>
                      <span>Mar</span>
                      <span>Apr</span>
                      <span>May</span>
                      <span>Jun</span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Daily Progress Widget */}
              <Card className="absolute bottom-32 right-8 bg-white/15 backdrop-blur-lg border border-white/30 p-4 rounded-2xl shadow-2xl drop-shadow-xl w-40 animate-float-delay">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-white font-semibold text-sm drop-shadow-sm">Your daily progress</h4>
                    <div className="text-white/60 text-xs">•••</div>
                  </div>
                  <div className="relative w-16 h-16 mx-auto">
                    <svg className="w-16 h-16 transform -rotate-90 drop-shadow-md">
                      <circle
                        cx="32"
                        cy="32"
                        r="28"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                        className="text-white/30"
                      />
                      <circle
                        cx="32"
                        cy="32"
                        r="28"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                        strokeDasharray={`${2 * Math.PI * 28}`}
                        strokeDashoffset={`${2 * Math.PI * 28 * (1 - 0.65)}`}
                        className="text-[#e01d24] drop-shadow-sm"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white font-bold text-sm drop-shadow-sm">65%</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-white/80 text-xs">Heart Fit</div>
                    <div className="text-white font-semibold drop-shadow-sm">120</div>
                  </div>
                </div>
              </Card>

              {/* Steps Widget */}
              <Card className="absolute bottom-8 right-0 bg-white/15 backdrop-blur-lg border border-white/30 p-3 rounded-2xl shadow-2xl drop-shadow-xl w-32 animate-float">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg drop-shadow-md">
                      <span className="text-black text-xs font-bold">👟</span>
                    </div>
                    <span className="text-white text-xs font-semibold drop-shadow-sm">3,570</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Partner Logos */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-6 z-10">
          <Card className="bg-white/15 backdrop-blur-xl border border-white/30 p-6 rounded-2xl shadow-2xl drop-shadow-lg">
            <div className="flex items-center justify-between opacity-70">
              <div className="text-white font-semibold text-sm drop-shadow-sm">Ansell</div>
              <div className="text-white font-semibold text-sm drop-shadow-sm">infinitum</div>
              <div className="text-white font-semibold text-sm drop-shadow-sm">Dräger</div>
              <div className="text-white font-semibold text-sm drop-shadow-sm">IKA</div>
              <div className="text-white font-semibold text-sm drop-shadow-sm">MOLDEX</div>
              <div className="text-white font-semibold text-sm drop-shadow-sm">APX</div>
            </div>
          </Card>
        </div>
      </section>

      {/* Health Statistics Dashboard Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              For your <span className="text-[#e01d24]">wellbeing</span>
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Complete health management in one place</h3>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Experience comprehensive healthcare with our integrated digital platform, personalized treatment plans,
              and continuous health monitoring
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Dashboard Image */}
            <div className="relative">
              <Card className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl shadow-2xl overflow-hidden">
                <img
                  src="/images/health-dashboard.png"
                  alt="Health Statistics Dashboard"
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </Card>
            </div>

            {/* Dashboard Features */}
            <div className="space-y-8">
              <div className="grid gap-6">
                <Card className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl hover:bg-white/15 transition-all duration-500 transform hover:scale-105 group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#3151a4] to-[#e01d24] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Activity className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">Comprehensive Health Monitoring</h4>
                      <p className="text-white/70">
                        Advanced monitoring systems track your vital signs, treatment progress, and overall health
                        metrics with real-time updates and alerts.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl hover:bg-white/15 transition-all duration-500 transform hover:scale-105 group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#3151a4] to-[#e01d24] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">Intelligent Appointment System</h4>
                      <p className="text-white/70">
                        Seamlessly schedule consultations with specialists, receive automated reminders, and access
                        telemedicine services from anywhere.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl hover:bg-white/15 transition-all duration-500 transform hover:scale-105 group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#3151a4] to-[#e01d24] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Pill className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">Digital Prescription Management</h4>
                      <p className="text-white/70">
                        Smart medication tracking with dosage reminders, drug interaction alerts, and direct pharmacy
                        coordination for your safety.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl hover:bg-white/15 transition-all duration-500 transform hover:scale-105 group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#3151a4] to-[#e01d24] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">Health Analytics & Insights</h4>
                      <p className="text-white/70">
                        Comprehensive health analytics with personalized insights, treatment recommendations, and
                        progress tracking from our medical experts.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="pt-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#3151a4] to-[#e01d24] hover:from-[#e01d24] hover:to-[#3151a4] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Access Your Dashboard
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Challenge Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content - Features */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  Transforming the <span className="text-[#3450a5]">Future</span>
                  <br />
                  of Healthcare Delivery
                </h2>
              </div>

              <div className="space-y-8">
                {/* Skilled Doctors */}
                <div className="flex items-start gap-6 group">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#3450a5] to-[#e01d24] rounded-full flex items-center justify-center">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-white">Expert Medical Professionals</h3>
                    <p className="text-white/70 leading-relaxed">
                      Our team of board-certified specialists and experienced healthcare professionals deliver
                      personalized, evidence-based medical care with compassion and expertise.
                    </p>
                  </div>
                </div>

                {/* Customizable Workflow */}
                <div className="flex items-start gap-6 group">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#3450a5] to-[#e01d24] rounded-full flex items-center justify-center">
                      <Activity className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-white">Integrated Care Pathways</h3>
                    <p className="text-white/70 leading-relaxed">
                      Streamlined, patient-centered care coordination across all departments, ensuring seamless
                      treatment experiences and optimal health outcomes.
                    </p>
                  </div>
                </div>

                {/* Shareable Working Procedure */}
                <div className="flex items-start gap-6 group">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#3450a5] to-[#e01d24] rounded-full flex items-center justify-center">
                      <Shield className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-white">Collaborative Treatment Protocols</h3>
                    <p className="text-white/70 leading-relaxed">
                      Multidisciplinary care teams work together using shared protocols and advanced communication
                      systems to provide comprehensive, coordinated treatment.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#3450a5] to-[#e01d24] hover:from-[#e01d24] hover:to-[#3450a5] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Learn More About Our Approach
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>

            {/* Right Content - Healthcare Images Grid */}
            <div className="relative">
              <Card className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl shadow-2xl overflow-hidden">
                <div className="grid grid-cols-3 gap-4 h-96">
                  {/* Medical consultation images grid */}
                  <div className="space-y-4">
                    <div className="bg-gradient-to-br from-[#3450a5]/20 to-[#e01d24]/20 rounded-2xl h-24 backdrop-blur-sm border border-white/10 overflow-hidden">
                      <img
                        src="/images/yanet-director.png"
                        alt="Doctor consultation"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="bg-gradient-to-br from-[#e01d24]/20 to-[#3450a5]/20 rounded-2xl h-32 backdrop-blur-sm border border-white/10 overflow-hidden">
                      <img
                        src="/images/yanet-medical-staff.png"
                        alt="Medical equipment"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="bg-gradient-to-br from-[#3450a5]/20 to-[#e01d24]/20 rounded-2xl h-28 backdrop-blur-sm border border-white/10 overflow-hidden">
                      <img
                        src="/images/yanet-nurses.png"
                        alt="Healthcare team"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-gradient-to-br from-[#e01d24]/20 to-[#3450a5]/20 rounded-2xl h-40 backdrop-blur-sm border border-white/10 overflow-hidden">
                      <img
                        src="/images/yanet-doctors-outdoor.png"
                        alt="Patient care"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="bg-gradient-to-br from-[#3450a5]/20 to-[#e01d24]/20 rounded-2xl h-20 backdrop-blur-sm border border-white/10 overflow-hidden">
                      <img
                        src="/images/yanet-leadership.png"
                        alt="Medical technology"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="bg-gradient-to-br from-[#e01d24]/20 to-[#3450a5]/20 rounded-2xl h-24 backdrop-blur-sm border border-white/10 overflow-hidden">
                      <img
                        src="/images/yanet-doctors-group.png"
                        alt="Hospital room"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-gradient-to-br from-[#3450a5]/20 to-[#e01d24]/20 rounded-2xl h-28 backdrop-blur-sm border border-white/10 overflow-hidden">
                      <img
                        src="/images/yanet-medical-staff.png"
                        alt="Medical staff"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="bg-gradient-to-br from-[#e01d24]/20 to-[#3450a5]/20 rounded-2xl h-36 backdrop-blur-sm border border-white/10 overflow-hidden">
                      <img
                        src="/images/yanet-nurses.png"
                        alt="Surgery preparation"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="bg-gradient-to-br from-[#3450a5]/20 to-[#e01d24]/20 rounded-2xl h-24 backdrop-blur-sm border border-white/10 overflow-hidden">
                      <img
                        src="/images/yanet-director.png"
                        alt="Patient recovery"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Honorary Doctor Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#3450a5] font-semibold text-lg mb-2">Our Services</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Our Medical Excellence Team</h2>
          </div>

          <div className="relative">
            {/* Doctor Photos Grid - Overlapping Layout */}
            <div className="relative h-96 max-w-4xl mx-auto">
              {/* Background doctor photo - largest, centered */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <Card className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-500 hover:scale-105">
                  <img src="/images/yanet-doctors-group.png" alt="Lead Doctor" className="w-56 h-72 object-cover" />
                </Card>
              </div>

              {/* Top left doctor */}
              <div className="absolute top-8 left-8 z-20">
                <Card className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden shadow-xl transform -rotate-12 hover:rotate-0 transition-all duration-500 hover:scale-105">
                  <img src="/images/yanet-medical-staff.png" alt="Doctor 1" className="w-32 h-40 object-cover" />
                </Card>
              </div>

              {/* Top right doctor */}
              <div className="absolute top-4 right-16 z-15">
                <Card className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden shadow-xl transform rotate-12 hover:rotate-0 transition-all duration-500 hover:scale-105">
                  <img src="/images/yanet-nurses.png" alt="Doctor 2" className="w-36 h-44 object-cover" />
                </Card>
              </div>

              {/* Bottom left doctor */}
              <div className="absolute bottom-12 left-20 z-15">
                <Card className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden shadow-xl transform rotate-8 hover:rotate-0 transition-all duration-500 hover:scale-105">
                  <img src="/images/yanet-director.png" alt="Doctor 3" className="w-28 h-36 object-cover" />
                </Card>
              </div>

              {/* Bottom right doctor */}
              <div className="absolute bottom-8 right-8 z-20">
                <Card className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden shadow-xl transform -rotate-8 hover:rotate-0 transition-all duration-500 hover:scale-105">
                  <img src="/images/yanet-doctors-outdoor.png" alt="Doctor 4" className="w-40 h-48 object-cover" />
                </Card>
              </div>

              {/* Far right doctor */}
              <div className="absolute top-20 right-0 z-5">
                <Card className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden shadow-xl transform rotate-6 hover:rotate-0 transition-all duration-500 hover:scale-105">
                  <img src="/images/yanet-leadership.png" alt="Doctor 5" className="w-32 h-40 object-cover" />
                </Card>
              </div>
            </div>

            {/* Floating elements for visual enhancement */}
            <div className="absolute top-16 left-1/4 w-4 h-4 bg-gradient-to-br from-[#3450a5] to-[#e01d24] rounded-full animate-pulse opacity-60"></div>
            <div className="absolute bottom-20 right-1/4 w-6 h-6 bg-gradient-to-br from-[#e01d24] to-[#3450a5] rounded-full animate-pulse opacity-40 delay-1000"></div>
            <div className="absolute top-1/3 left-12 w-3 h-3 bg-white/30 rounded-full animate-pulse delay-500"></div>
          </div>

          <div className="text-center mt-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#3450a5] to-[#e01d24] hover:from-[#e01d24] hover:to-[#3450a5] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Meet Our Medical Team
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: "#111c32" }}>
        <div className="absolute inset-0 opacity-60 pointer-events-none">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url('/images/dot-pattern.png')`,
              backgroundSize: "40px 40px",
              backgroundRepeat: "repeat",
              backgroundPosition: "0 0",
              filter: "blur(0.5px) hue-rotate(200deg) brightness(1.5) saturate(2)",
            }}
          ></div>
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none z-1">
          <div className="absolute top-20 left-10 w-16 h-28 animate-float-slow">
            <img src="/images/dna-blue-glow.png" alt="" className="w-full h-full object-contain opacity-20" />
          </div>
          <div className="absolute top-1/3 right-16 w-14 h-24 animate-float-delay">
            <img src="/images/dna-red-glow.png" alt="" className="w-full h-full object-contain opacity-18" />
          </div>
          <div className="absolute bottom-32 left-1/4 w-18 h-30 animate-float">
            <img src="/images/dna-blue-glow.png" alt="" className="w-full h-full object-contain opacity-15" />
          </div>
          <div className="absolute bottom-20 right-20 w-16 h-28 animate-float-slow">
            <img src="/images/dna-red-glow.png" alt="" className="w-full h-full object-contain opacity-20" />
          </div>
          <div className="absolute top-1/2 left-1/2 w-12 h-20 animate-float-delay">
            <img src="/images/dna-blue-glow.png" alt="" className="w-full h-full object-contain opacity-15" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <div className="relative h-96">
                <Card className="absolute bottom-0 left-0 bg-white/10 backdrop-blur-xl border border-white/30 p-8 rounded-2xl hover:shadow-2xl hover:bg-white/20 transition-all duration-500 cursor-pointer group shadow-xl w-48 hover:scale-110 hover:-translate-y-2">
                  <div className="text-center space-y-4">
                    <div className="w-14 h-14 mx-auto bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-[#3450a5]/30 group-hover:to-[#e01d24]/30 transition-all duration-500 group-hover:rotate-12">
                      <Heart className="w-7 h-7 text-white group-hover:text-[#3450a5] transition-colors duration-500" />
                    </div>
                    <h3 className="text-white font-semibold text-base group-hover:text-[#3450a5] transition-colors duration-500">
                      Cardiovascular
                    </h3>
                  </div>
                </Card>

                <Card className="absolute bottom-16 left-20 bg-white/10 backdrop-blur-xl border border-white/30 p-8 rounded-2xl hover:shadow-2xl hover:bg-white/20 transition-all duration-500 cursor-pointer group shadow-xl w-48 hover:scale-110 hover:-translate-y-2">
                  <div className="text-center space-y-4">
                    <div className="w-14 h-14 mx-auto bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-[#3450a5]/30 group-hover:to-[#e01d24]/30 transition-all duration-500 group-hover:rotate-12">
                      <Activity className="w-7 h-7 text-white group-hover:text-[#3450a5] transition-colors duration-500" />
                    </div>
                    <h3 className="text-white font-semibold text-base group-hover:text-[#3450a5] transition-colors duration-500">
                      Neurology
                    </h3>
                  </div>
                </Card>

                <Card className="absolute bottom-32 left-40 bg-white/10 backdrop-blur-xl border border-white/30 p-8 rounded-2xl hover:shadow-2xl hover:bg-white/20 transition-all duration-500 cursor-pointer group shadow-xl w-48 hover:scale-110 hover:-translate-y-2">
                  <div className="text-center space-y-4">
                    <div className="w-14 h-14 mx-auto bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-[#3450a5]/30 group-hover:to-[#e01d24]/30 transition-all duration-500 group-hover:rotate-12">
                      <Shield className="w-7 h-7 text-white group-hover:text-[#3450a5] transition-colors duration-500" />
                    </div>
                    <h3 className="text-white font-semibold text-base group-hover:text-[#3450a5] transition-colors duration-500">
                      Urology
                    </h3>
                  </div>
                </Card>

                <Card className="absolute bottom-8 right-40 bg-white/10 backdrop-blur-xl border border-white/30 p-8 rounded-2xl hover:shadow-2xl hover:bg-white/20 transition-all duration-500 cursor-pointer group shadow-xl w-48 hover:scale-110 hover:-translate-y-2">
                  <div className="text-center space-y-4">
                    <div className="w-14 h-14 mx-auto bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-[#3450a5]/30 group-hover:to-[#e01d24]/30 transition-all duration-500 group-hover:rotate-12">
                      <Users className="w-7 h-7 text-white group-hover:text-[#3450a5] transition-colors duration-500" />
                    </div>
                    <h3 className="text-white font-semibold text-base group-hover:text-[#3450a5] transition-colors duration-500">
                      Surgery
                    </h3>
                  </div>
                </Card>

                <Card className="absolute bottom-24 right-20 bg-gradient-to-br from-[#3450a5]/80 to-[#e01d24]/80 backdrop-blur-xl border border-white/40 p-8 rounded-2xl shadow-2xl cursor-pointer group transform hover:scale-115 hover:-translate-y-3 transition-all duration-500 w-48">
                  <div className="text-center space-y-4">
                    <div className="w-14 h-14 mx-auto bg-white/30 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-white/40 transition-all duration-500 group-hover:rotate-12">
                      <TrendingUp className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-white font-semibold text-base">Nephrology</h3>
                  </div>
                </Card>

                <Card className="absolute bottom-40 right-0 bg-white/10 backdrop-blur-xl border border-white/30 p-8 rounded-2xl hover:shadow-2xl hover:bg-white/20 transition-all duration-500 cursor-pointer group shadow-xl w-48 hover:scale-110 hover:-translate-y-2">
                  <div className="text-center space-y-4">
                    <div className="w-14 h-14 mx-auto bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-[#3450a5]/30 group-hover:to-[#e01d24]/30 transition-all duration-500 group-hover:rotate-12">
                      <Calendar className="w-7 h-7 text-white group-hover:text-[#3450a5] transition-colors duration-500" />
                    </div>
                    <h3 className="text-white font-semibold text-base group-hover:text-[#3450a5] transition-colors duration-500">
                      Dental
                    </h3>
                  </div>
                </Card>
              </div>
            </div>

            <div className="bg-white/15 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/30 hover:bg-white/20 transition-all duration-500">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-0.5 bg-gradient-to-r from-[#3450a5] to-[#e01d24] rounded-full"></div>
                  <span className="text-[#3450a5] font-semibold text-sm uppercase tracking-wide">Department</span>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">Nephrologist</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Our nephrology specialists provide comprehensive kidney care, including advanced treatments for
                    chronic kidney disease, specialized dialysis services, and pre/post kidney transplant management.
                    Using cutting-edge diagnostic tools and evidence-based treatment protocols, we ensure optimal kidney
                    health outcomes.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    We emphasize preventive nephrology, early intervention strategies, and personalized treatment plans
                    to maintain long-term kidney function and improve quality of life for all patients.
                  </p>
                </div>

                <div className="pt-4">
                  <Button className="bg-gradient-to-r from-[#3450a5] to-[#e01d24] hover:from-[#e01d24] hover:to-[#3450a5] text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose <span className="text-[#e01d24]">Yanet Healthcare</span>
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Leading healthcare excellence through innovation, expertise, and unwavering commitment to patient care
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Board-Certified Specialists",
                desc: "Internationally trained physicians with specialized expertise",
              },
              {
                icon: Shield,
                title: "Advanced Medical Technology",
                desc: "State-of-the-art equipment and innovative treatment methods",
              },
              {
                icon: Clock,
                title: "24/7 Emergency Services",
                desc: "Round-the-clock critical care and emergency medical support",
              },
              {
                icon: Heart,
                title: "Patient-Centered Care",
                desc: "Personalized treatment plans focused on individual patient needs and comfort",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl group w-80 flex-shrink-0"
              >
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#3151a4] to-[#e01d24] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-white/70 leading-relaxed mb-4">{feature.desc}</p>
                  <Button
                    variant="ghost"
                    className="text-[#e01d24] hover:text-white hover:bg-[#e01d24]/20 p-0 h-auto font-semibold group/btn"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="text-[#e01d24]">Specialized Services</span>
            </h2>
            <p className="text-xl text-white/80">
              Comprehensive medical services delivered with precision, innovation, and compassionate care
            </p>
          </div>

          <div className="overflow-x-auto pb-6">
            <div className="flex gap-6 w-max">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl group w-80 flex-shrink-0"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                    <p className="text-white/70 leading-relaxed mb-4">{service.description}</p>
                    <Button
                      variant="ghost"
                      className="text-[#e01d24] hover:text-white hover:bg-[#e01d24]/20 p-0 h-auto font-semibold group/btn"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Patient <span className="text-[#e01d24]">Success Stories</span>
            </h2>
            <p className="text-xl text-white/80">
              Real experiences from patients who trust Yanet Healthcare with their wellbeing
            </p>
          </div>

          <div className="relative">
            <div className="flex items-center justify-center gap-4 max-w-7xl mx-auto">
              {/* Far Left - Smallest */}
              <div className="transform -rotate-12 hover:rotate-0 transition-all duration-500 hover:scale-105">
                <Card className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden shadow-xl p-4 w-48">
                  <div className="text-center space-y-3">
                    <div className="w-8 h-8 mx-auto bg-gradient-to-br from-[#e01d24] to-[#3450a5] rounded-full flex items-center justify-center">
                      <img
                        src="/images/yanet-director.png"
                        alt="James Miller"
                        className="w-6 h-6 rounded-full object-cover"
                      />
                    </div>
                    <div className="flex justify-center">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-white/90 text-xs italic">"Professional care."</blockquote>
                    <div className="text-[#3450a5] font-semibold text-sm">James Miller</div>
                  </div>
                </Card>
              </div>

              {/* Left - Medium Small */}
              <div className="transform rotate-8 hover:rotate-0 transition-all duration-500 hover:scale-105">
                <Card className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden shadow-xl p-5 w-56">
                  <div className="text-center space-y-4">
                    <div className="w-10 h-10 mx-auto bg-gradient-to-br from-[#3450a5] to-[#e01d24] rounded-full flex items-center justify-center">
                      <img
                        src="/images/yanet-medical-staff.png"
                        alt="Michael Chen"
                        className="w-8 h-8 rounded-full object-cover"
                      />
                    </div>
                    <div className="flex justify-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-white/90 text-sm italic">
                      "Outstanding medical team and excellent care."
                    </blockquote>
                    <div className="text-[#3450a5] font-semibold">Michael Chen</div>
                  </div>
                </Card>
              </div>

              {/* Center - Largest */}
              <div className="transform rotate-1 hover:rotate-0 transition-all duration-500 hover:scale-105 z-10">
                <Card className="bg-white/15 backdrop-blur-xl border border-white/30 rounded-3xl overflow-hidden shadow-2xl p-8 w-80">
                  <div className="text-center space-y-6">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#3450a5] to-[#e01d24] rounded-full flex items-center justify-center">
                      <img
                        src="/images/yanet-nurses.png"
                        alt="Sarah Johnson"
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    </div>
                    <div className="flex justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-white/90 text-lg italic leading-relaxed">
                      "The care I received at Yanet Hospital was exceptional. The doctors were professional and the
                      facilities are world-class."
                    </blockquote>
                    <div className="text-[#3450a5] font-semibold text-lg">Sarah Johnson</div>
                    <div className="text-white/60 text-sm">Cardiology Patient</div>
                  </div>
                </Card>
              </div>

              {/* Right - Medium Small */}
              <div className="transform -rotate-8 hover:rotate-0 transition-all duration-500 hover:scale-105">
                <Card className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden shadow-xl p-5 w-56">
                  <div className="text-center space-y-4">
                    <div className="w-10 h-10 mx-auto bg-gradient-to-br from-[#e01d24] to-[#3450a5] rounded-full flex items-center justify-center">
                      <img
                        src="/images/yanet-doctors-outdoor.png"
                        alt="Emily Rodriguez"
                        className="w-8 h-8 rounded-full object-cover"
                      />
                    </div>
                    <div className="flex justify-center">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-white/90 text-sm italic">
                      "Modern facilities and compassionate professionals."
                    </blockquote>
                    <div className="text-[#3450a5] font-semibold">Emily Rodriguez</div>
                  </div>
                </Card>
              </div>

              {/* Far Right - Smallest */}
              <div className="transform rotate-12 hover:rotate-0 transition-all duration-500 hover:scale-105">
                <Card className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden shadow-xl p-4 w-48">
                  <div className="text-center space-y-3">
                    <div className="w-8 h-8 mx-auto bg-gradient-to-br from-[#3450a5] to-[#e01d24] rounded-full flex items-center justify-center">
                      <img
                        src="/images/yanet-leadership.png"
                        alt="Lisa Wang"
                        className="w-6 h-6 rounded-full object-cover"
                      />
                    </div>
                    <div className="flex justify-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-white/90 text-xs italic">"Exceptional care."</blockquote>
                    <div className="text-[#3450a5] font-semibold text-sm">Lisa Wang</div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Floating elements for visual enhancement */}
            <div className="absolute top-16 left-1/4 w-4 h-4 bg-gradient-to-br from-[#3450a5] to-[#e01d24] rounded-full animate-pulse opacity-60"></div>
            <div className="absolute bottom-20 right-1/4 w-6 h-6 bg-gradient-to-br from-[#e01d24] to-[#3450a5] rounded-full animate-pulse opacity-40 delay-1000"></div>
            <div className="absolute top-1/3 left-12 w-3 h-3 bg-white/30 rounded-full animate-pulse delay-500"></div>
          </div>

          <div className="text-center mt-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#3450a5] to-[#e01d24] hover:from-[#e01d24] hover:to-[#3450a5] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Read More Testimonials
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-[#1a3787] via-[#1a3687] to-[#0f1a2e]">
        {/* Background DNA strands */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-16 left-8 w-12 h-20 animate-float-slow opacity-18">
            <img src="/images/dna-red-glow.png" alt="" className="w-full h-full object-contain" />
          </div>
          <div className="absolute top-32 right-12 w-10 h-18 animate-float-delay opacity-15">
            <img src="/images/dna-blue-glow.png" alt="" className="w-full h-full object-contain" />
          </div>
          <div className="absolute bottom-24 left-12 w-14 h-22 animate-float opacity-20">
            <img src="/images/dna-red-glow.png" alt="" className="w-full h-full object-contain" />
          </div>
          <div className="absolute bottom-32 right-16 w-11 h-19 animate-float-slow opacity-18">
            <img src="/images/dna-blue-glow.png" alt="" className="w-full h-full object-contain" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-lg border border-white/30 rounded-full px-4 py-2 text-white/95 shadow-lg">
                Contact Us
              </div>

              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  Let's Connect for Better Health.
                </h2>
                <p className="text-xl text-white/80 leading-relaxed">
                  Ready to experience exceptional healthcare? Reach out to us at{" "}
                  <a href="mailto:info@yanethealthcare.com" className="text-[#e01d24] hover:underline">
                    info@yanethealthcare.com
                  </a>
                </p>
              </div>
            </div>

            {/* Right Content - Contact Form */}
            <div className="relative">
              <Card className="bg-white/10 backdrop-blur-xl border border-white/30 p-8 rounded-3xl shadow-2xl">
                <form className="space-y-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className="text-white font-medium text-sm">Full Name</label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                        <User className="w-5 h-5 text-white/60" />
                      </div>
                      <input
                        type="text"
                        placeholder="Enter your full name..."
                        className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-12 py-4 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#3450a5] focus:border-transparent transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Email Address */}
                  <div className="space-y-2">
                    <label className="text-white font-medium text-sm">Email Address</label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                        <Mail className="w-5 h-5 text-white/60" />
                      </div>
                      <input
                        type="email"
                        placeholder="Enter your email address..."
                        className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-12 py-4 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#3450a5] focus:border-transparent transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-2">
                    <label className="text-white font-medium text-sm">Phone Number</label>
                    <div className="relative flex">
                      <div className="flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-l-xl px-4 py-4 border-r-0">
                        <div className="w-6 h-4 bg-gradient-to-r from-blue-500 to-red-500 rounded-sm mr-2"></div>
                        <IconChevronDown className="w-4 h-4 text-white/60" />
                      </div>
                      <input
                        type="tel"
                        placeholder="+251904776464"
                        className="flex-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-r-xl px-4 py-4 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#3450a5] focus:border-transparent transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-white font-medium text-sm">Message</label>
                    <div className="relative">
                      <textarea
                        placeholder="Enter your main text here..."
                        rows={4}
                        className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-4 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#3450a5] focus:border-transparent transition-all duration-300 resize-none"
                      />
                      <div className="absolute bottom-3 right-3 text-white/40 text-sm">300/300</div>
                    </div>
                  </div>

                  {/* Privacy Policy */}
                  <div className="flex items-start gap-3">
                    <div className="relative flex items-center">
                      <input
                        type="checkbox"
                        className="w-5 h-5 bg-white/10 border border-white/20 rounded focus:ring-2 focus:ring-[#3450a5] text-[#3450a5]"
                      />
                    </div>
                    <p className="text-white/80 text-sm leading-relaxed">
                      I hereby agree to our{" "}
                      <a href="#" className="text-[#3450a5] hover:underline">
                        Privacy Policy
                      </a>{" "}
                      terms.
                    </p>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-[#3450a5] to-[#e01d24] hover:from-[#e01d24] hover:to-[#3450a5] text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Submit Form
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 border-t border-white/10">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <img src="/images/yanet-logo.png" alt="Yanet Healthcare Logo" className="h-10 w-auto" />
              </div>
              <p className="text-white/70 leading-relaxed">
                Yanet Healthcare is committed to providing world-class medical services with compassionate care,
                advanced technology, and a patient-first approach to healing and wellness.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
              <div className="space-y-2">
                {["About Us", "Medical Services", "Our Doctors", "Book Appointment", "Contact Us"].map((link) => (
                  <a key={link} href="#" className="block text-white/70 hover:text-white transition-colors">
                    {link}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Medical Services</h3>
              <div className="space-y-2">
                {["Emergency Medicine", "Cardiology", "Pediatric Care", "Surgical Services", "Diagnostic Imaging"].map(
                  (service) => (
                    <a key={service} href="#" className="block text-white/70 hover:text-white transition-colors">
                      {service}
                    </a>
                  ),
                )}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-white/70">
                  <Phone className="w-5 h-5" />
                  <span>+251904776464</span>
                </div>
                <div className="flex items-center gap-3 text-white/70">
                  <Mail className="w-5 h-5" />
                  <span>info@yanethealthcare.com</span>
                </div>
                <div className="flex items-center gap-3 text-white/70">
                  <MapPin className="w-5 h-5" />
                  <span>Addis Ababa, Ethiopia - Premier Healthcare District</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            {/* Updated footer copyright text */}
            <p className="text-white/60 mb-4 md:mb-0">
              © 2024 Yanet Healthcare. All rights reserved. Excellence in Medical Care.
            </p>
            <div className="flex gap-4">
              {["Facebook", "Twitter", "Instagram", "LinkedIn"].map((social) => (
                <Button
                  key={social}
                  variant="ghost"
                  size="sm"
                  className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 rounded-full w-10 h-10 p-0"
                >
                  {social[0]}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
