"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Smartphone, ShoppingCart, Settings, TrendingUp, Headphones, CheckCircle, Star } from "lucide-react"
import { useState } from "react"

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const services = [
    {
      icon: Code,
      title: "Website Development",
      description: "Custom websites built with modern technologies and responsive design."
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Solutions",
      description: "Full-featured online stores with payment gateway integration."
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android."
    },
    {
      icon: Settings,
      title: "Custom Software",
      description: "Tailored software solutions to meet your unique business needs."
    },
    {
      icon: TrendingUp,
      title: "SEO & Digital Marketing",
      description: "Boost your online presence with our expert marketing services."
    },
    {
      icon: Headphones,
      title: "Support & Maintenance",
      description: "24/7 technical support and ongoing maintenance services."
    }
  ]

  const technologies = [
    "React", "Next.js", "Node.js", "Python", "Java", "Angular", "Vue.js", "PHP",
    "Laravel", "Django", "MongoDB", "MySQL", "PostgreSQL", "AWS", "Azure", "Docker"
  ]

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "TechStart India",
      text: "Ravi Infotech delivered our e-commerce platform ahead of schedule. Their expertise and professionalism are unmatched.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      company: "Digital Solutions Ltd",
      text: "Outstanding mobile app development service. The team was responsive and delivered exactly what we needed.",
      rating: 5
    },
    {
      name: "Amit Patel",
      company: "Business Hub",
      text: "Their SEO services transformed our online presence. We saw a 300% increase in organic traffic within 6 months.",
      rating: 5
    }
  ]

  const stats = [
    { value: "500+", label: "Projects Completed" },
    { value: "200+", label: "Happy Clients" },
    { value: "10+", label: "Years Experience" },
    { value: "50+", label: "Team Members" }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              Leading IT Solutions Provider in India
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transform Your Business with
              <span className="text-primary"> Innovative Technology</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We deliver cutting-edge IT solutions including web development, mobile apps, and digital marketing services to help your business thrive in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Get Free Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Ravi Infotech?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine technical expertise with business understanding to deliver solutions that drive real results.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CheckCircle className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Proven Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Over 10 years of experience delivering successful projects across various industries.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CheckCircle className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Affordable Pricing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Competitive India-based pricing with transparent costs and no hidden charges.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CheckCircle className="h-12 w-12 text-primary mb-4" />
                <CardTitle>24/7 Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Round-the-clock technical support and maintenance to keep your systems running smoothly.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive IT solutions tailored to your business needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <service.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technologies We Work With</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We use the latest and most reliable technologies to build your solutions
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="text-base px-4 py-2">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted by businesses across India
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-lg mb-4 italic">"{testimonials[currentTestimonial].text}"</p>
                <div>
                  <p className="font-semibold">{testimonials[currentTestimonial].name}</p>
                  <p className="text-sm text-muted-foreground">{testimonials[currentTestimonial].company}</p>
                </div>
              </CardContent>
            </Card>
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`h-2 w-2 rounded-full transition-all ${
                    currentTestimonial === index ? "bg-primary w-8" : "bg-muted-foreground/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with innovative technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Contact Us Today</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}