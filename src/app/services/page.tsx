import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Code, ShoppingCart, Smartphone, Settings, TrendingUp, Headphones, CheckCircle, Zap, Shield, Globe } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      icon: Code,
      title: "Website Development",
      description: "Professional website development services tailored to your business needs.",
      features: [
        "Responsive design for all devices",
        "Custom CMS integration",
        "SEO-friendly architecture",
        "Fast loading speeds",
        "Modern UI/UX design",
        "Cross-browser compatibility"
      ],
      technologies: ["React", "Next.js", "WordPress", "PHP", "Laravel"]
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Solutions",
      description: "Complete online store solutions with secure payment integration.",
      features: [
        "Payment gateway integration",
        "Shopping cart functionality",
        "Inventory management",
        "Order tracking system",
        "Customer account management",
        "Multi-currency support"
      ],
      technologies: ["Shopify", "WooCommerce", "Magento", "Custom Solutions"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      features: [
        "Native iOS & Android apps",
        "Cross-platform development",
        "Push notifications",
        "Offline functionality",
        "App Store optimization",
        "Backend API integration"
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin"]
    },
    {
      icon: Settings,
      title: "Custom Software Development",
      description: "Bespoke software solutions designed specifically for your business.",
      features: [
        "Custom business applications",
        "ERP & CRM systems",
        "Database design & optimization",
        "Third-party integrations",
        "Cloud-based solutions",
        "Scalable architecture"
      ],
      technologies: ["Java", "Python", "Node.js", ".NET", "Django"]
    },
    {
      icon: TrendingUp,
      title: "SEO & Digital Marketing",
      description: "Boost your online presence with our comprehensive digital marketing services.",
      features: [
        "Search engine optimization",
        "Social media marketing",
        "Content marketing strategy",
        "Google Ads management",
        "Email marketing campaigns",
        "Analytics & reporting"
      ],
      technologies: ["Google Analytics", "SEMrush", "Ahrefs", "Mailchimp"]
    },
    {
      icon: Headphones,
      title: "Maintenance & Support",
      description: "Ongoing technical support and maintenance to keep your systems running smoothly.",
      features: [
        "24/7 technical support",
        "Regular updates & patches",
        "Performance monitoring",
        "Bug fixes & troubleshooting",
        "Security audits",
        "Backup & disaster recovery"
      ],
      technologies: ["All platforms supported"]
    }
  ]

  const benefits = [
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising quality"
    },
    {
      icon: Shield,
      title: "Secure Solutions",
      description: "Enterprise-grade security for all our services"
    },
    {
      icon: Globe,
      title: "Global Standards",
      description: "Following international best practices and standards"
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              Our Services
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive IT Solutions for Your Business
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              From web development to digital marketing, we offer a full suite of technology services to help your business succeed in the digital world.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 border-y bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <benefit.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="bg-muted/50">
                  <div className="flex items-start gap-4">
                    <service.icon className="h-12 w-12 text-primary flex-shrink-0" />
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-4 flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-primary mt-1">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="mt-6">
                        <Button asChild>
                          <Link href="/contact">Get a Quote</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            We can tailor our services to meet your specific requirements. Contact us to discuss your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Contact Us</Link>
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
