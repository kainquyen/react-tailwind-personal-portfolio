import { useEffect, useState } from "react";
import Button from "@/components/Button";
import { Menu, X } from "lucide-react";
const navLinks = [
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Testimonials", href: "#testimonials" },
];
export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <header className={`fixed top-0 border-0 left-0 right-0 transition-all duration-500 ${isScrolled ? 'glass-strong py-3' : 'bg-transparent py-5'} z-50`}>
            <nav className="container flex items-center justify-between px-6 mx-auto">
                <a className="text-xl font-bold tracking-tight hover:text-primary">
                    PM <span className="text-primary">.</span>
                </a>

                {/* Desktop Nav  */}
                <div className="hidden md:flex items-center gap-1">
                    <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <Button size="sm">Contact Me</Button>
                </div>

                {/* Mobile Menu Button  */}
                <div
                    className="md:hidden p-2 text-foreground cursor-pointer"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </div>
            </nav>

            {/* Mobile Menu  */}
            {isMobileMenuOpen && (
                <div className="md:hidden glass-strong animate-fade-in">
                    <div className="container mx-auto flex flex-col gap-2 px-6 py-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-lg text-muted-foreground hover:text-foreground rounded-lg p-2"
                            >
                                {link.name}
                            </a>
                        ))}
                        <Button onClick={() => setIsMobileMenuOpen(false)}>Contact Me</Button>
                    </div>
                </div>
            )}
        </header>
    );
}
