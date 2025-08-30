import { Github, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Mayank Dayal</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 max-w-md">
              Full-stack developer and AI engineer passionate about building scalable systems and innovative solutions.
            </p>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:mayankdayal2022@vitbhopal.ac.in" className="hover:text-gray-900 dark:hover:text-gray-300">
                  mayankdayal2022@vitbhopal.ac.in
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+91 7845993975</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>New Delhi, India</span>
              </div>
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="https://linkedin.com/in/mayank-dayal-b1003a247" className="text-gray-400 hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://github.com/Mayankdaya" className="text-gray-400 hover:text-primary">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#about" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300">About</Link></li>
              <li><Link href="#skills" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300">Skills</Link></li>
              <li><Link href="#projects" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300">Projects</Link></li>
              <li><Link href="#education" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300">Education</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://github.com/mayankdayal" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300">GitHub Profile</a></li>
              <li><a href="https://drive.google.com/file/d/10fSF61hwMx3qEVa0pX0iDf2C9TU7HhWV/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300">Download Resume</a></li>
              <li><Link href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300">Get In Touch</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} Mayank Dayal. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300">Privacy</Link>
            <Link href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
