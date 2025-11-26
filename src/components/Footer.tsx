import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <span className="text-xl font-bold">RI</span>
              </div>
              <span className="text-xl font-bold">Ravi Infotech</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Leading IT solutions provider in India, delivering innovative technology services to businesses worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Website Development</li>
              <li className="text-sm text-muted-foreground">E-Commerce Solutions</li>
              <li className="text-sm text-muted-foreground">Mobile App Development</li>
              <li className="text-sm text-muted-foreground">Custom Software</li>
              <li className="text-sm text-muted-foreground">SEO & Digital Marketing</li>
              <li className="text-sm text-muted-foreground">Maintenance & Support</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  Sector 62, Noida, Uttar Pradesh, India - 201301
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} className="text-muted-foreground" />
                <a href="tel:+919876543210" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} className="text-muted-foreground" />
                <a href="mailto:info@raviinfotech.in" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  info@raviinfotech.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ravi Infotech. All rights reserved. | GST: 09XXXXX1234X1XX
          </p>
        </div>
      </div>
    </footer>
  )
}
