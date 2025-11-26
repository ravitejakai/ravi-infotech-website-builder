import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Eye, Award, Users, TrendingUp, Globe } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  const stats = [
    { value: "10+", label: "Years in Business" },
    { value: "500+", label: "Projects Delivered" },
    { value: "200+", label: "Satisfied Clients" },
    { value: "50+", label: "Team Members" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "15+", label: "Countries Served" }
  ]

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in every project, delivering high-quality solutions that exceed expectations."
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Our clients are at the heart of everything we do. We build lasting relationships based on trust and results."
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "We stay ahead of technology trends to provide cutting-edge solutions for modern business challenges."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Based in India, serving clients worldwide with international quality standards and competitive pricing."
    }
  ]

  const team = [
    {
      name: "Ravi Kumar",
      role: "Founder & CEO",
      description: "15+ years of experience in IT industry with expertise in software architecture and business strategy."
    },
    {
      name: "Priya Sharma",
      role: "Technical Director",
      description: "Expert in full-stack development with a passion for building scalable and efficient solutions."
    },
    {
      name: "Amit Singh",
      role: "Head of Design",
      description: "Creative designer with 10+ years experience crafting beautiful and user-friendly interfaces."
    },
    {
      name: "Neha Gupta",
      role: "Project Manager",
      description: "Certified PMP with expertise in agile methodologies and delivering projects on time and budget."
    }
  ]

  const milestones = [
    { year: "2013", event: "Ravi Infotech founded in Noida" },
    { year: "2015", event: "Reached 50 successful projects" },
    { year: "2017", event: "Expanded to international markets" },
    { year: "2019", event: "Team grew to 30+ professionals" },
    { year: "2021", event: "Achieved ISO 9001 certification" },
    { year: "2023", event: "Completed 500+ projects milestone" }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              About Us
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Empowering Businesses Through Technology
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Founded in 2013, Ravi Infotech has grown from a small startup to a leading IT solutions provider in India, serving clients across the globe with innovative technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-primary/50">
              <CardHeader>
                <Target className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To deliver innovative, reliable, and cost-effective IT solutions that help businesses thrive in the digital age. We are committed to understanding our clients' unique needs and providing tailored solutions that drive real business results.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/50">
              <CardHeader>
                <Eye className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To be the most trusted IT solutions partner for businesses worldwide, recognized for our technical excellence, innovation, and commitment to client success. We envision a future where technology empowers every business to reach its full potential.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index}>
                <CardHeader>
                  <value.icon className="h-10 w-10 text-primary mb-3" />
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
              <p className="text-lg text-muted-foreground">
                A decade of growth, innovation, and success
              </p>
            </div>

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                      {milestone.year.slice(-2)}
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <div className="flex items-baseline gap-3 mb-1">
                      <span className="font-semibold text-lg">{milestone.year}</span>
                      <div className="flex-1 h-px bg-border"></div>
                    </div>
                    <p className="text-muted-foreground">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Leadership Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals dedicated to your success
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 mx-auto">
                    <Users className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="text-center">{member.name}</CardTitle>
                  <CardDescription className="text-center font-semibold text-primary">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Businesses Choose Us</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>India Advantage</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Competitive pricing with international quality standards. Our India-based operations allow us to offer cost-effective solutions without compromising on quality.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Proven Track Record</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Over 500 successful projects delivered across various industries. Our portfolio speaks for itself with satisfied clients worldwide.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Expert Team</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Highly skilled professionals with expertise in latest technologies. Continuous training ensures we stay ahead of industry trends.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>24/7 Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Round-the-clock technical support and maintenance. We're always available when you need us, ensuring your systems run smoothly.
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
