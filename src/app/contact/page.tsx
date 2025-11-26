"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    alert("Thank you for contacting us! We'll get back to you within 24 hours.")
    setFormData({ name: "", email: "", phone: "", service: "", message: "" })
    setIsSubmitting(false)
  }

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Address",
      content: "B-123, Sector 62, Noida, Uttar Pradesh, India - 201301",
      link: "https://maps.google.com/?q=Sector+62+Noida"
    },
    {
      icon: Phone,
      title: "Phone Number",
      content: "+91 98765 43210",
      link: "tel:+919876543210"
    },
    {
      icon: Mail,
      title: "Email Address",
      content: "info@raviinfotech.in",
      link: "mailto:info@raviinfotech.in"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon - Sat: 9:00 AM - 7:00 PM IST",
      link: null
    }
  ]

  const services = [
    "Website Development",
    "E-Commerce Solutions",
    "Mobile App Development",
    "Custom Software Development",
    "SEO & Digital Marketing",
    "Maintenance & Support",
    "Other"
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              Get In Touch
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Discuss Your Project
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Have a project in mind? We'd love to hear from you. Send us a message and we'll respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 border-y bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <info.icon className="h-10 w-10 text-primary mb-3" />
                    <h3 className="font-semibold mb-2">{info.title}</h3>
                    {info.link ? (
                      <a 
                        href={info.link}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        target={info.link.startsWith('http') ? "_blank" : undefined}
                        rel={info.link.startsWith('http') ? "noopener noreferrer" : undefined}
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-sm text-muted-foreground">{info.content}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>
                <p className="text-muted-foreground">
                  Fill out the form below and our team will get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Service Interested In *</Label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) => handleChange("service", value)}
                    required
                  >
                    <SelectTrigger id="service">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Project Details *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project requirements..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>

              {/* WhatsApp Button */}
              <div className="mt-6">
                <Card className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4">
                      <MessageCircle className="h-10 w-10 text-green-600" />
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">Prefer WhatsApp?</h3>
                        <p className="text-sm text-muted-foreground">
                          Chat with us directly for instant support
                        </p>
                      </div>
                      <Button
                        asChild
                        variant="outline"
                        className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                      >
                        <a
                          href="https://wa.me/919876543210?text=Hi%2C%20I%27m%20interested%20in%20your%20services"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Chat Now
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Map & Additional Info */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Visit Our Office</h2>
                <p className="text-muted-foreground">
                  We're located in the heart of Noida's tech hub. Drop by for a coffee and let's discuss your project in person.
                </p>
              </div>

              {/* Embedded Map */}
              <div className="rounded-lg overflow-hidden border mb-6" style={{ height: '400px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.2181747964436!2d77.36762631508042!3d28.626318882422806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5456ef36d9f%3A0x3b7191b1286136c8!2sSector%2062%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ravi Infotech Office Location"
                ></iframe>
              </div>

              {/* Quick Info Cards */}
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Quick Response</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Free Consultation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Book a free 30-minute consultation call to discuss your project requirements and get expert advice.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What is your typical response time?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    We respond to all inquiries within 24 hours. For urgent matters, you can call us directly or use WhatsApp for faster communication.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Do you offer free consultations?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Yes! We offer free initial consultations to understand your requirements and provide recommendations for your project.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What are your payment terms?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    We typically require 50% advance payment and 50% upon project completion. Custom payment plans are available for larger projects.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Do you work with international clients?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Absolutely! We work with clients worldwide and have experience serving businesses across 15+ countries.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
