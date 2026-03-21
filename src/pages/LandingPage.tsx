/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Menu, 
  X, 
  PlayCircle, 
  Check, 
  Brain, 
  Heart, 
  Smartphone,
  Phone,
  MapPin,
  Clock,
  Share2,
  Mail,
  ChevronDown
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";

// --- Sub-components ---

const CheckIcon = () => (
  <div className="mt-1 w-6 h-6 rounded-full bg-primary-fixed flex items-center justify-center flex-shrink-0">
    <Check className="text-primary w-4 h-4" strokeWidth={3} />
  </div>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <Link to="/">
          <Logo />
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <a className="font-headline text-sm font-semibold tracking-tight text-primary border-b-2 border-primary pb-1" href="#">Home</a>
          <a className="font-headline text-sm font-semibold tracking-tight text-secondary hover:text-primary transition-colors" href="#about">About Us</a>
          <a className="font-headline text-sm font-semibold tracking-tight text-secondary hover:text-primary transition-colors" href="#contact">Contact Us</a>
          <a className="font-headline text-sm font-semibold tracking-tight text-secondary hover:text-primary transition-colors" href="#mission">Our Mission</a>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/get-started" className="hidden sm:block font-headline text-sm font-semibold tracking-tight text-secondary px-4 py-2 hover:bg-surface-container-low rounded-lg transition-all">Log In</Link>
          <Link to="/get-started" className="bg-primary text-on-primary font-headline text-sm font-semibold tracking-tight px-6 py-2.5 rounded-lg hover:opacity-90 transition-all active:scale-95">Sign Up</Link>
          
          <button className="md:hidden text-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t border-surface-container-high p-6 flex flex-col gap-4"
        >
          <a className="font-headline font-semibold text-primary" href="#" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a className="font-headline font-semibold text-secondary" href="#about" onClick={() => setIsMenuOpen(false)}>About Us</a>
          <a className="font-headline font-semibold text-secondary" href="#contact" onClick={() => setIsMenuOpen(false)}>Contact Us</a>
          <a className="font-headline font-semibold text-secondary" href="#mission" onClick={() => setIsMenuOpen(false)}>Our Mission</a>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section className="relative min-h-[800px] flex items-center overflow-hidden bg-surface">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="lg:col-span-7 z-10"
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant text-sm font-bold tracking-wide mb-6">
          ESTABLISHED 2024
        </span>
        <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-primary leading-[1.1] mb-8">
          The Empathetic <br/> <span className="text-surface-tint">Guardian</span> of Your Pet's Life.
        </h1>
        <p className="text-lg md:text-xl text-secondary max-w-xl mb-10 leading-relaxed">
          Beyond clinical care, we provide a sanctuary for your pet's health. PetWell merges advanced veterinary intelligence with deep emotional understanding.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/get-started" className="bg-primary text-on-primary px-10 py-4 rounded-xl font-bold text-lg hover:opacity-90 shadow-lg shadow-primary/10 transition-all active:scale-95 text-center">
            Get Started
          </Link>
          <button className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-lg text-primary hover:bg-surface-container-low transition-all">
            <PlayCircle className="w-6 h-6" />
            Watch our Story
          </button>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="lg:col-span-5 relative"
      >
        <div className="relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-surface-container-high shadow-2xl">
          <img 
            alt="Happy Golden Retriever with owner" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDheGAcqQVIuZUpghuQ3yxNBVeAins4QcBfemkkGcWruYlWHhKFl6PhA1RB-oiZPgwRDnJBnZJEsHdiMaA4bVIhj2Smm7k0_c1hJa9Pz71bm1E9WNzps1X7yCvxDK6ttVSr3Y1N8QiHlS9OQPW600YS6iKv5pmLuaYysGSus5ukjuQVe-NgSzfJPdtyVsmYC7svAWu5acQa2L7FYGBuHZrK3lP8ZwqflnuLAimSSVpSxoofW-fZd9sJbn7sbh5_BoxBhW2yfC3jt_uo"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute -bottom-8 -left-12 bg-white p-6 rounded-2xl shadow-xl max-w-[240px] hidden md:block border border-surface-container-high"
        >
          <div className="flex items-center gap-4 mb-3">
            <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center">
              <Heart className="text-primary w-5 h-5 fill-primary" />
            </div>
            <span className="font-bold text-primary">Health Score</span>
          </div>
          <div className="h-2 w-full bg-surface-container-low rounded-full mb-2">
            <div className="h-full bg-surface-tint rounded-full w-[92%]"></div>
          </div>
          <p className="text-xs text-secondary font-medium">92% Optimal Pet Vitality</p>
        </motion.div>
      </motion.div>
    </div>
    <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-fixed/30 -z-0 rounded-l-[100px] blur-3xl opacity-50"></div>
  </section>
);

const About = () => (
  <section className="py-24 bg-surface-container-low" id="about">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
          <div className="space-y-4 pt-12">
            <img 
              alt="Professional veterinarian" 
              className="w-full aspect-[3/4] object-cover rounded-2xl shadow-md" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZvPCtqXnTz92xDIs4kRp4rwtppctpS16wvyrAnrELGZIV3poGtFryF3WBd8upFB7OanaJ0NlFHzOvW3FrBaLvLT3F0S8xicd5CZQlmD5nfP-4imQb-wARgGnNc6o283GFQuvX-C-QGnCQqj3IKAJKn8mzKqKwzzo5_7W1f85p45AAUU4JXb5VuYJuKr1iG1J7oogtL5t4KJnvEF3weIOaVN2zsXlcq4rKMHNWj84BlFMDwvh-DDAJzIovNmj7NwzbrDCVqTjvHCPe"
              referrerPolicy="no-referrer"
            />
            <img 
              alt="Dog in clinic" 
              className="w-full aspect-square object-cover rounded-2xl shadow-md" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7Noy6AUfXZDkZHBU1df9euaCki9ou3AZHoUA9UmSfGYMBVwAszsD8ZOS-9A3zMlBqL3SWv8cXYgW2huZBeWLAhPlMNyx53hme_lJw03GMdySR6wvTXzhmgzOebsTcdB5ve1t0wAtbT48rqY45urmekLC1Ry62uNZMmqg3PIo-nik1_TzHR6dgL49Uz3A9vvGbVCMmHq2mUZt-MRIh2uic_aMoNXbxfafRxqTTVwlMsYtg1jgtG2V8m2VbgNrjN80yAMLR3nRpjnmb"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="space-y-4">
            <img 
              alt="Modern pet facility" 
              className="w-full aspect-square object-cover rounded-2xl shadow-md" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBo9BULCN1Lz11MEXv_aDnjKrsffG3ExyCsbjhK6ppXaVo6rPWXWao2Oi8wrhipDs-JRlBiQ_Ox4S4csHBRbqdjqZ8wipzXDliMnt2jkd_qTETG42mqlW8NxMQtk02wyNZjENZZT5PTuoWhx7G6Ytk0W-VBETIZunOjaAb_Ig1asqwwzm_Wx_NLdOkX4_64Gu9eRAJnnAY9S_iF7wC5TTI0-i1TsyS2fTcX_hPJbTFsrAGfmKtJ9oqjzZSkfqAk04sqpGStG2TzdMT1"
              referrerPolicy="no-referrer"
            />
            <img 
              alt="Cat health check" 
              className="w-full aspect-[3/4] object-cover rounded-2xl shadow-md" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcKnmh_GaZE7KcrsPESKLWDfkn3QcRlLxIiU3LvP3HxpC_47ws7A6yGqXT2oUad1wEnUsfcYFLlNVjyT63MtHL_YczqWFZJO1kpvr1jACYCHgaWYo1SsNR3JkMrH790AG71FKXtJ87scnk3NeacZEkX_tSOAPzf10FP4o6OSYvPOAWZOcjnREpBmQh7NPXrG_kLEBDh85DJUYWmJYqG50ULM8XJuYlaC4pwZuQf4lEzFmMgYcn_dr9c_87JOelmsYw8-938OrsImYs"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
        <div>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-8 leading-tight">
            Redefining the <br/> Modern Care Circle
          </h2>
          <p className="text-secondary text-lg mb-8 leading-relaxed">
            At PetWell, we believe that pet healthcare should be as sophisticated as human medicine, yet as warm as a home. We've built an ecosystem where data meets devotion.
          </p>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <CheckIcon />
              <div>
                <h4 className="font-bold text-primary mb-1">Board-Certified Specialists</h4>
                <p className="text-sm text-secondary">Our team includes leaders in feline and canine internal medicine.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckIcon />
              <div>
                <h4 className="font-bold text-primary mb-1">Emotion-First Approach</h4>
                <p className="text-sm text-secondary">We study pet behavior to ensure every visit is fear-free and calming.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Mission = () => (
  <section className="py-24 bg-surface" id="mission">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="font-headline text-4xl font-bold text-primary mb-4">Our Core Mission</h2>
        <p className="text-secondary max-w-2xl mx-auto">Ensuring every pet lives their fullest, healthiest life through innovation and empathy.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-primary text-white rounded-[2rem] p-10 flex flex-col justify-between relative overflow-hidden group min-h-[400px]">
          <div className="z-10">
            <Brain className="w-12 h-12 mb-6 text-surface-tint" />
            <h3 className="text-3xl font-bold mb-4">Preventative Intelligence</h3>
            <p className="max-w-md text-white/80 text-lg">Predicting health issues before they arise using advanced diagnostic tracking and nutritional science.</p>
          </div>
          <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-20 group-hover:scale-105 transition-transform duration-700">
            <img 
              alt="Laboratory pet health" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGw3TtgfK7k13dOD9UMPOloZnq7zVVa0TFzXFRPnD5pOKrcruurDrmOY03paTSKiSutjPWSPGoBDBY0pwQ3qcLaUjcWLeraKIq4rov2oQMyT3FKUVt8pGhrb58-k5F9OMvieqFFfLfKIYOyd1EcElTId5wZJgCBra4QI8UdfAIjLFDFGpsUBdFFYLaClLyfw1RupAwZZTenqdxOYDewsB3s3QGkrSSfIJWWxvmfYUyOZttcEyYX0b3UH67Pp58rOjS3awLZNmUmnsF"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="bg-secondary-fixed rounded-[2rem] p-10 flex flex-col justify-center items-center text-center min-h-[400px]">
          <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm">
            <Heart className="w-10 h-10 text-primary fill-primary" />
          </div>
          <h3 className="text-2xl font-bold text-primary mb-2">Unwavering Love</h3>
          <p className="text-secondary">Treating every patient like our own family member.</p>
        </div>

        <div className="bg-primary-fixed rounded-[2rem] p-10 flex flex-col justify-between min-h-[300px]">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">Community Reach</h3>
            <p className="text-secondary">Supporting local shelters and rescue organizations through our Guardian fund.</p>
          </div>
          <div className="flex -space-x-3 mt-6">
            {[1, 2, 3].map((i) => (
              <img 
                key={i}
                className="w-10 h-10 rounded-full border-2 border-white object-cover" 
                src={`https://picsum.photos/seed/user${i}/100/100`}
                alt="Avatar"
                referrerPolicy="no-referrer"
              />
            ))}
            <div className="w-10 h-10 rounded-full border-2 border-white bg-white flex items-center justify-center text-[10px] font-bold text-primary">+500</div>
          </div>
        </div>

        <div className="md:col-span-2 bg-surface-container-high rounded-[2rem] p-10 flex flex-col sm:flex-row items-center gap-10 min-h-[300px]">
          <div className="flex-1">
            <Smartphone className="w-10 h-10 mb-4 text-primary" />
            <h3 className="text-2xl font-bold text-primary mb-2">Technological Edge</h3>
            <p className="text-secondary">24/7 Digital monitoring and instant specialist access from anywhere.</p>
          </div>
          <div className="w-full sm:w-64 h-40 rounded-xl bg-primary/10 overflow-hidden shadow-inner">
            <img 
              alt="Pet monitor app" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRkZUcapAVXQlzTPnt2jquD_Jle6t1so5EZC7DEEMDS6D8WDE5x7zhSYjW9ijSn9QT0KEkA2QNQAoInHhNJCnoeawrYHf4uNDJTwPujrr7MEH86CpK2QJR6kBProkVEoCYbXsLWxomYL--j9fa-LCcx70imjP53rbWSz1rU4UOuZnfXlkSZkiqQ9gIv6zoRmblJDC4IriQAt-Q0qZrpkgzNSTa_nK-OmNlh2J2XscsLWggz2oxnEwE1JHMkmxT86qImhGjeNmn1vDN"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section className="py-24 bg-surface-container-low" id="contact">
    <div className="max-w-7xl mx-auto px-6">
      <div className="bg-white rounded-[3rem] shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        <div className="p-12 md:p-16">
          <h2 className="font-headline text-4xl font-bold text-primary mb-4">Let's Connect</h2>
          <p className="text-secondary mb-10">Our concierge team is available to assist you with any inquiries regarding your pet's wellness plan.</p>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-secondary uppercase tracking-widest">Full Name</label>
                <input className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 transition-all" placeholder="John Doe" type="text"/>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-secondary uppercase tracking-widest">Email Address</label>
                <input className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 transition-all" placeholder="john@example.com" type="email"/>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-secondary uppercase tracking-widest">Subject</label>
              <div className="relative">
                <select className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 transition-all appearance-none">
                  <option>General Inquiry</option>
                  <option>Medical Emergency</option>
                  <option>Partnership</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary pointer-events-none" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-secondary uppercase tracking-widest">Message</label>
              <textarea className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 transition-all" placeholder="How can we help you and your pet today?" rows={4}></textarea>
            </div>
            <button className="w-full bg-primary text-on-primary font-bold py-4 rounded-xl hover:opacity-90 transition-all active:scale-[0.98]">
              Send Message
            </button>
          </form>
        </div>
        <div className="bg-primary p-12 md:p-16 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="z-10">
            <h3 className="text-3xl font-bold mb-8">Reach us directly</h3>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-surface-tint" />
                <div>
                  <p className="text-sm opacity-60">Call Us</p>
                  <p className="font-bold">+1 (800) PET-WELL</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-surface-tint" />
                <div>
                  <p className="text-sm opacity-60">Visit Us</p>
                  <p className="font-bold">128 Guardian Way, San Francisco, CA</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Clock className="w-6 h-6 text-surface-tint" />
                <div>
                  <p className="text-sm opacity-60">Care Hours</p>
                  <p className="font-bold">24/7 Support Available</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="z-10 bg-white/10 backdrop-blur-md p-6 rounded-2xl mt-12">
            <p className="text-sm italic opacity-90">"The fastest response time I've ever experienced in vet care. Truly guardians."</p>
            <p className="text-xs font-bold mt-2">— Sarah K., Cat Guardian</p>
          </div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-surface-tint/20 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="w-full bg-surface-container-high">
    <div className="flex flex-col md:flex-row justify-between items-center px-8 py-12 max-w-7xl mx-auto">
      <div className="flex flex-col mb-8 md:mb-0">
        <Logo className="mb-2" />
        <p className="text-xs text-secondary">© 2024 PetWell. The Empathetic Guardian. All rights reserved.</p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-6">
        <a className="text-xs text-secondary hover:text-primary transition-colors" href="#">Privacy Policy</a>
        <a className="text-xs text-secondary hover:text-primary transition-colors" href="#">Terms of Service</a>
        <a className="text-xs text-secondary hover:text-primary transition-colors" href="#">Cookie Settings</a>
        <a className="text-xs text-secondary hover:text-primary transition-colors" href="#">Accessibility</a>
      </div>
      
      <div className="flex gap-4 mt-8 md:mt-0">
        <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-secondary hover:bg-primary hover:text-white transition-all shadow-sm">
          <Share2 className="w-5 h-5" />
        </button>
        <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-secondary hover:bg-primary hover:text-white transition-all shadow-sm">
          <Mail className="w-5 h-5" />
        </button>
      </div>
    </div>
  </footer>
);

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <About />
        <Mission />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
