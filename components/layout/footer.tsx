import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="#home" className="text-xl font-bold">
              <span className="text-indigo-600 dark:text-indigo-400">EK</span>DEV
            </Link>
            <p className="mt-2 text-muted-foreground text-sm">
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <Link 
              href="https://github.com/emmanuel0konan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link 
              href="www.linkedin.com/in/emmanuel-konan-b14742263" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link 
              href="mailto:emmanuel.konan@epitech.eu" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} EKDEV  .
          </p>
        </div>
      </div>
    </footer>
  );
}