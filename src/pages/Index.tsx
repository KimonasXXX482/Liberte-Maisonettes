
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


const Index = () => {
  const { t } = useLanguage();
  const { fontSize } = useFontSize();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  const fontSizeStyle = {
    fontSize: `${fontSize}em`,
  };

  return (
    <div className="min-h-screen bg-white" style={fontSizeStyle}>
      
      
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
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className=" absolute inset-0 bg-cover bg-center bg-no-repeat "
          style={{
            backgroundImage: "url('/public/home.jpg')"
          }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
            {t('hero.title')}
          </h1>
          <p className="text-2xl md:text-3xl mb-8 opacity-90 animate-fade-in">
            {t('hero.subtitle')}
          </p>
         
          <div className="space-x-4 animate-fade-in">
            <a 
              href="https://www.booking.com/hotel/gr/villa-kyperi-parga.el.html" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-xl px-10 py-4">
                {t('hero.bookStay')}
              </Button>
            </a>

          <Button 
              asChild
              size="lg" 
              variant="outline" 
              className="group relative border-2 border-white text-black hover:bg-white hover:text-black text-xl px-10 py-4 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <Link to="/RoomDetails" className="relative group inline-block">
              <span className="relative z-10 flex items-center space-x-2 transition-transform duration-300 group-hover:translate-x-1">
                <span>{t('hero.exploreRooms')}</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
            </Link>
            </Button> 
          </div>
        </div>
      </section>

      <div className="mt-8 mx-auto w-[300px] aspect-[9/16]">
  <video 
    className="w-full h-full rounded-xl shadow-xl object-cover"
    src="/public/home_video.mp4"
    autoPlay 
    loop 
    muted 
    playsInline
  />
</div>
<br />
<br />


      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-blue-50 to-white">

       
        <div className="w-full px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-5xl font-bold text-blue-900 mb-8">{t('about.title')}</h2>
            <div className="text-xl text-gray-700 leading-relaxed mb-8">
              {t('about.description')}
            </div>
            
            {/* Hotel Information - Full Width */}
            <div className="w-full bg-white p-10 rounded-lg shadow-lg mb-12">
              <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
                <div className="order-2 md:order-1">
                  <img 
                    src="dwmatia.png" 
                    alt="Hotel interior"
                    className="w-full h-50 object-cover rounded-lg shadow-md"
                  />
                </div>
                <div className="text-left order-1 md:order-2">
                  <h3 className="text-3xl font-semibold text-blue-900 mb-6 text-center">{t('about.hotelTitle')}</h3>
                  <div className="text-xl text-gray-700 leading-relaxed">
                    {t('about.hotelDescription')}
                  </div>
                </div>
              </div>
            </div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-6 text-center">{t('location.locationTitle')}</h2>
            
            <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
              <div className="text-gray-700 leading-relaxed mb-6">
                {t('location.locationDescription')}
              </div>
              
              <h3 className="text-xl font-semibold text-blue-800 mb-4 ">{t('location.highlights')}</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Kastro Pargas </li>
                <li>• Piges Axeronta </li>
                <li>• Voutoumi </li>
                <li>• Paxoi - Antipaxoi </li>
              </ul>
              <br />
              <div className="text-gray-700 leading-relaxed mb-6">
                {t('location.paragraph')}
              </div>
            </div>
          </div>
        </div>

            {/* Full Width Image after Breakfast */}
            <div className="w-full mb-12">
              <img 
                src="public/iliobasilema.jpg"
                alt="Beautiful seaside view"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Breakfast Information - Full Width */}
            <div className="max-w-4xl mx-auto bg-white p-10 rounded-lg shadow-lg text-left mb-8">
              <h3 className="text-3xl font-semibold text-blue-900 mb-6 text-center">
                {t('about.breakfastTitle')}
              </h3>
              
              <div className="text-xl text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
                {t('about.breakfastDescription')}
              </div>
              <br />
              <img  
                    src="/public/prwino.jpg" 
                    alt="Hotel interior"
                    
                    style={{ height: "400px", display: "block", marginLeft: "auto", marginRight: "auto" }}
                  />
            </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-blue-900 mb-8">{t('rooms.title')}</h2>
            <div className="text-xl text-gray-700 max-w-2xl mx-auto mb-12">
              {t('rooms.description')}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-lg">
              <div className="relative overflow-hidden">
                <img 
                  src="/public/home.jpg"
                  alt="Economy Room"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-lg font-semibold">
                  {t('rooms.economy')}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-blue-900 mb-3">{t('rooms.economyTitle')}</h3>
                <div className="text-lg text-gray-600 mb-4">
                  {t('rooms.economyDescription')}
                </div>
                <Link to="/economy-room">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg px-6 py-3">{t('about.viewDetails')}</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-lg">
              <div className="relative overflow-hidden">
                <img 
                  src="/public/home.jpg"
                  alt="Superior Room"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-lg font-semibold">
                  {t('rooms.superior')}
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-blue-900 mb-3">{t('rooms.maisonetteTitle')}</h3>
                <div className="text-lg text-gray-600 mb-4">
                  {t('rooms.maisonetteDescription')}
                </div>
                <Link to="/maisonette-room">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg px-6 py-3">{t('about.viewDetails')}</Button>
                </Link>
              </CardContent>
              
            </Card>

            <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-lg">
              <div className="relative overflow-hidden">
                <img 
                  src="/public/home.jpg"
                  alt="Maisonette Room"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-lg font-semibold">
                  {t('rooms.maisonette')}
                </div>

                <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-blue-900 mb-3">{t('rooms.superiorTitle')}</h3>
                <div className="text-lg text-gray-600 mb-4">
                  {t('rooms.superiorDescription')}
                </div>
                <Link to="/superior-room">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg px-6 py-3">{t('about.viewDetails')}</Button>
                </Link>
              </CardContent>
              </div>
              
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
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
          <h3 className="text-3xl font-bold mb-4">{t('hero.title')}</h3>
          <div className="opacity-70 mb-4 text-lg">
            {t('footer.tagline')}
          </div>
          <div className="opacity-50 text-lg">
            {t('footer.copyright')}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
