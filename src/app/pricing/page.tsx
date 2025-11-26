"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Check, Info } from "lucide-react"
import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PricingPage() {
  const [currency, setCurrency] = useState("INR")

  const pricingPlans = {
    website: [
      {
        name: "Basic Website",
        price: "₹25,000",
        description: "Perfect for small businesses and startups",
        features: [
          "Up to 5 pages",
          "Responsive design",
          "Contact form",
          "Basic SEO setup",
          "1 month support",
          "Social media integration"
        ],
        popular: false
      },
      {
        name: "Business Website",
        price: "₹50,000",
        description: "Ideal for growing businesses",
        features: [
          "Up to 10 pages",
          "Custom design",
          "CMS integration",
          "Advanced SEO",
          "3 months support",
          "Blog section",
          "Analytics setup",
          "Payment gateway integration"
        ],
        popular: true
      },
      {
        name: "Enterprise Website",
        price: "₹1,00,000+",
        description: "For large-scale businesses",
        features: [
          "Unlimited pages",
          "Premium custom design",
          "Advanced CMS",
          "Enterprise SEO",
          "6 months support",
          "Multi-language support",
          "Advanced integrations",
          "Dedicated account manager"
        ],
        popular: false
      }
    ],
    ecommerce: [
      {
        name: "Starter Store",
        price: "₹40,000",
        description: "Launch your online store",
        features: [
          "Up to 50 products",
          "Payment gateway setup",
          "Shopping cart",
          "Basic inventory management",
          "Order management",
          "2 months support"
        ],
        popular: false
      },
      {
        name: "Professional Store",
        price: "₹80,000",
        description: "For growing online businesses",
        features: [
          "Up to 500 products",
          "Multiple payment gateways",
          "Advanced inventory",
          "Customer accounts",
          "Discount codes & offers",
          "Email notifications",
          "3 months support",
          "SEO optimization"
        ],
        popular: true
      },
      {
        name: "Enterprise Store",
        price: "₹2,00,000+",
        description: "Complete e-commerce solution",
        features: [
          "Unlimited products",
          "Multi-vendor support",
          "Advanced analytics",
          "Custom integrations",
          "Mobile app included",
          "Priority support",
          "6 months support",
          "Marketing automation"
        ],
        popular: false
      }
    ],
    mobile: [
      {
        name: "Single Platform",
        price: "₹1,00,000",
        description: "iOS or Android app",
        features: [
          "Native app development",
          "Up to 10 screens",
          "Basic features",
          "API integration",
          "App store submission",
          "3 months support"
        ],
        popular: false
      },
      {
        name: "Cross-Platform",
        price: "₹1,50,000",
        description: "iOS + Android app",
        features: [
          "React Native/Flutter",
          "Up to 15 screens",
          "Advanced features",
          "Push notifications",
          "Both stores submission",
          "Backend development",
          "6 months support",
          "Analytics integration"
        ],
        popular: true
      },
      {
        name: "Enterprise App",
        price: "₹3,00,000+",
        description: "Complex mobile solution",
        features: [
          "Native or cross-platform",
          "Unlimited screens",
          "Advanced integrations",
          "Offline functionality",
          "Admin panel",
          "API development",
          "12 months support",
          "Regular updates"
        ],
        popular: false
      }
    ],
    other: [
      {
        name: "SEO Package",
        price: "₹15,000/month",
        description: "Boost your online visibility",
        features: [
          "Keyword research",
          "On-page optimization",
          "Content optimization",
          "Link building",
          "Monthly reports",
          "Google Analytics setup"
        ],
        popular: false
      },
      {
        name: "Maintenance",
        price: "₹5,000/month",
        description: "Keep your website updated",
        features: [
          "Regular updates",
          "Security patches",
          "Backup management",
          "Performance monitoring",
          "Bug fixes",
          "Technical support"
        ],
        popular: false
      },
      {
        name: "Custom Software",
        price: "Custom Quote",
        description: "Tailored to your needs",
        features: [
          "Requirements analysis",
          "Custom development",
          "Testing & QA",
          "Deployment",
          "Training",
          "Ongoing support"
        ],
        popular: true
      }
    ]
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              Transparent Pricing
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Affordable IT Solutions for Indian Businesses
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Competitive pricing with no hidden charges. All prices in Indian Rupees (INR). GST applicable as per government regulations.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tables */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="website" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-2 md:grid-cols-4 mb-12">
              <TabsTrigger value="website">Websites</TabsTrigger>
              <TabsTrigger value="ecommerce">E-Commerce</TabsTrigger>
              <TabsTrigger value="mobile">Mobile Apps</TabsTrigger>
              <TabsTrigger value="other">Other Services</TabsTrigger>
            </TabsList>

            <TabsContent value="website">
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {pricingPlans.website.map((plan, index) => (
                  <Card key={index} className={plan.popular ? "border-primary shadow-lg" : ""}>
                    {plan.popular && (
                      <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-semibold">
                        Most Popular
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="text-2xl">{plan.name}</CardTitle>
                      <CardDescription>{plan.description}</CardDescription>
                      <div className="mt-4">
                        <span className="text-4xl font-bold">{plan.price}</span>
                        <span className="text-muted-foreground text-sm ml-2">+ GST</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-6">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full" variant={plan.popular ? "default" : "outline"} asChild>
                        <Link href="/contact">Get Started</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="ecommerce">
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {pricingPlans.ecommerce.map((plan, index) => (
                  <Card key={index} className={plan.popular ? "border-primary shadow-lg" : ""}>
                    {plan.popular && (
                      <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-semibold">
                        Most Popular
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="text-2xl">{plan.name}</CardTitle>
                      <CardDescription>{plan.description}</CardDescription>
                      <div className="mt-4">
                        <span className="text-4xl font-bold">{plan.price}</span>
                        <span className="text-muted-foreground text-sm ml-2">+ GST</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-6">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full" variant={plan.popular ? "default" : "outline"} asChild>
                        <Link href="/contact">Get Started</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="mobile">
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {pricingPlans.mobile.map((plan, index) => (
                  <Card key={index} className={plan.popular ? "border-primary shadow-lg" : ""}>
                    {plan.popular && (
                      <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-semibold">
                        Most Popular
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="text-2xl">{plan.name}</CardTitle>
                      <CardDescription>{plan.description}</CardDescription>
                      <div className="mt-4">
                        <span className="text-4xl font-bold">{plan.price}</span>
                        <span className="text-muted-foreground text-sm ml-2">+ GST</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-6">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full" variant={plan.popular ? "default" : "outline"} asChild>
                        <Link href="/contact">Get Started</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="other">
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {pricingPlans.other.map((plan, index) => (
                  <Card key={index} className={plan.popular ? "border-primary shadow-lg" : ""}>
                    {plan.popular && (
                      <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-semibold">
                        Most Popular
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="text-2xl">{plan.name}</CardTitle>
                      <CardDescription>{plan.description}</CardDescription>
                      <div className="mt-4">
                        <span className="text-4xl font-bold">{plan.price}</span>
                        <span className="text-muted-foreground text-sm ml-2">+ GST</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-6">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full" variant={plan.popular ? "default" : "outline"} asChild>
                        <Link href="/contact">Get Quote</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <div className="flex items-start gap-3">
                <Info className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <CardTitle>Important Information</CardTitle>
                  <CardDescription className="mt-2">
                    <ul className="space-y-2 text-sm">
                      <li>• All prices are in Indian Rupees (INR) and exclude 18% GST</li>
                      <li>• Final pricing may vary based on specific requirements and customizations</li>
                      <li>• Payment terms: 50% advance, 50% on project completion</li>
                      <li>• Domain and hosting charges are additional</li>
                      <li>• Free revisions included as per package</li>
                      <li>• Source code ownership transferred after full payment</li>
                    </ul>
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need a Custom Quote?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Every project is unique. Contact us for a personalized quote based on your specific requirements.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Request Custom Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
