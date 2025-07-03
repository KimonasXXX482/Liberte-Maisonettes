import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MapPin, Phone, Mail, Wifi, Car, Utensils, Waves, Mountain, Camera, ChevronDown, ArrowRight, Menu } from "lucide-react";
import GoogleMap from "@/components/GoogleMap";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useFontSize } from "@/contexts/FontSizeContext";
import { useState } from "react";

const DiscoverParga = () => {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-blue-100">
              <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-3xl font-bold text-blue-900">{t('hero.title')}</h1>
                <nav className="hidden md:flex space-x-6 items-center">
                  <a href="/" className="text-gray-700 hover:text-blue-600 transition-colors text-lg">{t('nav.home')}</a>
                  <a href="/" className="text-gray-700 hover:text-blue-600 transition-colors text-lg">{t('nav.about')}</a>
                  
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-blue-600 transition-colors text-lg">
                      {t('nav.rooms')}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg z-50">
                      <DropdownMenuItem className="hover:bg-blue-50">
                        <Link to="/RoomDetails" className="w-full text-lg">{t('nav.RoomDetails')}</Link>
                      </DropdownMenuItem>
                     
                      <DropdownMenuItem className="hover:bg-blue-50">
                        <Link to="/economy-room" className="w-full text-lg">{t('nav.economyRoom')}</Link>
                      </DropdownMenuItem>
                      
                      <DropdownMenuItem className="hover:bg-blue-50">
                        <Link to="/maisonette-room" className="w-full text-lg">{t('nav.maisonetteRoom')}</Link>
                      </DropdownMenuItem>
      
                      <DropdownMenuItem className="hover:bg-blue-50">
                        <Link to="/superior-room" className="w-full text-lg">{t('nav.superiorRoom')}</Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  
                  <Link to="/location" className="text-gray-700 hover:text-blue-600 transition-colors text-lg">{t('nav.location')}</Link>
                  <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors text-lg">{t('nav.contact')}</a>
                
                </nav>
                <div className="flex items-center space-x-4">
                  <LanguageSwitcher />
                  
                </div>
                <div className="md:hidden flex items-center space-x-2">
                 
                  <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                    <SheetTrigger asChild>
                      <Button variant="ghost" size="sm" className="p-2">
                        <Menu className="h-6 w-6" />
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-80 bg-white">
                      <nav className="flex flex-col space-y-6 mt-8">
                        <a 
                          href="home" 
                          className="text-gray-700 hover:text-blue-600 transition-colors text-xl py-2 border-b border-gray-100"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {t('nav.home')}
                        </a>
                        <a 
                          href="about" 
                          className="text-gray-700 hover:text-blue-600 transition-colors text-xl py-2 border-b border-gray-100"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {t('nav.about')}
                        </a>
                        
                        {/* Mobile Rooms Section */}
                        <div className="py-2 border-b border-gray-100">
                          <div className="text-gray-700 text-xl mb-3">{t('nav.rooms')}</div>
                          <div className="pl-4 space-y-3">
                            <Link 
                              to="/RoomDetails.tsx" 
                              className="block text-gray-600 hover:text-blue-600 transition-colors text-lg py-1"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {t('nav.RoomDetails')}
                            </Link>
      
                            <Link 
                              to="/economy-room" 
                              className="block text-gray-600 hover:text-blue-600 transition-colors text-lg py-1"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {t('nav.economyRoom')}
                            </Link>
                            
                            <Link 
                              to="/maisonette-room" 
                              className="block text-gray-600 hover:text-blue-600 transition-colors text-lg py-1"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {t('nav.maisonetteRoom')}
                            </Link>
      
                            <Link 
                              to="/superior-room" 
                              className="block text-gray-600 hover:text-blue-600 transition-colors text-lg py-1"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {t('nav.superiorRoom')}
                            </Link>
                          </div>
                        </div>
                        
                        <Link 
                          to="/location" 
                          className="text-gray-700 hover:text-blue-600 transition-colors text-xl py-2 border-b border-gray-100"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {t('nav.location')}
                        </Link>
                        <a 
                          href="#contact" 
                          className="text-gray-700 hover:text-blue-600 transition-colors text-xl py-2 border-b border-gray-100"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {t('nav.contact')}
                        </a>
      
                        <div className="pt-4">
                          <div className="flex justify-center ">
                            <a 
                              href="https://www.booking.com/hotel/gr/villa-kyperi-parga.el.html" 
                              target="_blank" 
                              rel="noopener noreferrer"
                            >
                              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-xl px-10 py-4">
                                {t('hero.bookStay')}
                              </Button>
                            </a>
                          </div>
      
                          
                           <div className="flex justify-center mt-2">
                            <Button 
                              asChild
                              size="lg" 
                              variant="outline" 
                              className="group relative border-2 border-white text-black hover:bg-white hover:text-black text-xl px-10 py-4 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                            >
                              <a href="/pages/RoomDetails.tsx">
                                <span className="relative z-10 flex items-center space-x-2 transition-transform duration-300 group-hover:translate-x-1">
                                  <span>{t('hero.exploreRooms')}</span>
                                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
                              </a>
                            </Button>
                          </div>
                        </div>
                      </nav>
                    </SheetContent>
                  </Sheet>
                </div>
                
                </div>
                
            </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
       <div 
          className=" absolute inset-0 bg-cover bg-center bg-no-repeat "
          style={{
            backgroundImage: "url('/public/lyxnos.jpg')"
          }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t('location.discoverTitle')}
          </h1>
         
        </div>
      </section>

      {/* Location Information */}
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto mb-16">
      <h2 className="text-5xl font-bold text-blue-900 mb-10 text-center">
        {t('location.locationTitle')}
      </h2>

      <div className="bg-white p-12 rounded-lg shadow-lg mb-12">
        <div className="text-gray-700 text-xl leading-relaxed mb-8">
          {t('location.locationDescription')}
        </div>

        <h3 className="text-3xl font-semibold text-blue-800 mb-6 text-center">
          {t('location.highlights')}
        </h3>
        <ul className="text-gray-700 text-xl space-y-2 text-center">
          <li>• Kastro Pargas </li>
          <li>• Piges Axeronta </li>
          <li>• Voutoumi </li>
          <li>• Paxoi - Antipaxoi </li>
        </ul>

        <br />
        <div className="text-gray-700 text-xl leading-relaxed mb-6">
          {t('location.paragraph')}
        </div>
      </div>
    </div>
  </div>
</section>



      {/* Location & Attractions */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            <div>
              <h2 className="text-3xl font-semibold text-blue-900 mb-6">{t('location.perfectLocation')}</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">{t('location.castle')}</h4>
                    <div className="text-gray-600">{t('location.castleDescription')}</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Waves className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">{t('location.beach')}</h4>
                    <div className="text-gray-600">{t('location.beachDescription')}</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Mountain className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">{t('location.dayTrips')}</h4>
                    
                    <div className="text-gray-600">{t('location.dayTripsDescription')}</div>

                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/public/location.png"
                alt="Parga coastline"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">{t('location.findUs')}</h2>
            
          </div>
          
          <div className="max-w-4xl mx-auto">
            <GoogleMap />
            
            <div className="mt-8 text-center">
              <div className="inline-flex items-center space-x-2 text-gray-600">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="font-medium">Kiperi, Parga, Preveza, Greece 48060</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-blue-900 text-white">
              <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                  <h2 className="text-5xl font-bold mb-8">{t('contact.title')}</h2>
                  <div className="text-xl opacity-90 max-w-2xl mx-auto">
                    {t('contact.description')}
                  </div>
                </div>
      
                <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Phone className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-2">{t('contact.phone')}</h3>
                    <div className="opacity-90 text-lg">+30 26840 31234</div>
                  </div>
      
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Mail className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-2">{t('contact.email')}</h3>
                    <div className="opacity-90 text-lg">info@libertemaisonettes.gr</div>
                  </div>
      
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MapPin className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-2">{t('contact.address')}</h3>
                    <div className="opacity-90 text-lg">Kiperi, Parga, Preveza<br />Greece 48060</div>
                  </div>
                </div>
      
               
              </div>
            </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">{t('hero.title')}</h3>
          <div className="opacity-70 mb-4">
            {t('footer.tagline')}
          </div>
          <div className="opacity-50 text-sm">
            {t('footer.copyright')}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DiscoverParga;
