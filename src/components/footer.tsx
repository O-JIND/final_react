import { Globe, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-12">
      <div className="mx-auto w-full max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Globe className="w-6 h-6 text-primary" />
              <span className="text-lg font-bold text-foreground">LingoCommunity</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Your gateway to mastering new languages with a supportive community.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                support@lingocommunity.com
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +1 (555) 123-4567
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                San Francisco, CA
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  All Courses
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Popular Lectures
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Find a Mentor
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Community Forum
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Events Calendar
                </a>
              </li>
            </ul>
          </div>

          {/* Languages */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Languages</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Korean
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Japanese
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Chinese
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Spanish
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  View All 50+ Languages
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Accessibility
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} LingoCommunity. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
