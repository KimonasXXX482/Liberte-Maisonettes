
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
import { ChevronDown, ArrowRight, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useFontSize } from "@/contexts/FontSizeContext";
import { useState } from "react";

const RoomDetails = () => {
  const { t } = useLanguage();
  const { fontSize } = useFontSize();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const fontSizeStyle = {
    fontSize: `${fontSize}em`,
  };

  return (
    <div className="min-h-screen bg-white" style={fontSizeStyle}>
      
      {/* Header - Same as Index.tsx */}
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

      <section id="home" className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className=" absolute inset-0 bg-cover bg-center bg-no-repeat "
          style={{
            backgroundImage: "url('/public/home.jpg')"
          }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            {t('roomDetails.bgtitle')}
          </h1>        
          
        </div>
      </section>

      {/* Main Content */}
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* Section 1: Title + Box with Paragraph */}
          <section className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-blue-900 mb-8">{t('roomDetails.title')}</h2>
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <p className="text-xl text-gray-700 leading-relaxed">
                  {t('roomDetails.overview')}
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Section 2: Title + List with 3 Buttons */}
          <section className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-blue-900 mb-8">{t('roomDetails.roomTypesTitle')}</h2>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4">
                {t('roomDetails.economyRoom')}
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
                {t('roomDetails.superiorRoom')}
              </Button>
              <Button className="bg-amber-600 hover:bg-amber-700 text-lg px-8 py-4">
                {t('roomDetails.maisonetteRoom')}
              </Button>
            </div>
          </section>

          {/* Section 3: Title + Box with Paragraph */}
          <section className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-blue-900 mb-8">{t('roomDetails.amenitiesTitle')}</h2>
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <p className="text-xl text-gray-700 leading-relaxed">
                  {t('roomDetails.amenitiesDescription')}
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Section 4: 4 Boxes with Title + Paragraph */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="shadow-lg">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-semibold text-blue-900 mb-4">{t('roomDetails.seasideViewsTitle')}</h3>
                  <p className="text-lg text-gray-600">
                    {t('roomDetails.seasideViewsDescription')}
                    <li>{t('roomDetails.seasideViewsDescription2')}</li>
                    <li>{t('roomDetails.seasideViewsDescription3')}</li>
                    <li>{t('roomDetails.seasideViewsDescription4')}</li>
                    <li>{t('roomDetails.seasideViewsDescription5')}</li>
                    <li>{t('roomDetails.seasideViewsDescription6')}</li>
                    <li>{t('roomDetails.seasideViewsDescription7')}</li>
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-semibold text-blue-900 mb-4">{t('roomDetails.modernComfortTitle')}</h3>
                  <p className="text-lg text-gray-600 text-left">
                    <li>{t('roomDetails.modernComfortDescription')}</li>
                    <li>{t('roomDetails.modernComfortDescription2')}</li>
                    <li>{t('roomDetails.modernComfortDescription3')}</li>
                    <li>{t('roomDetails.modernComfortDescription4')}</li>
                    <li>{t('roomDetails.modernComfortDescription5')}</li>
                    <li>{t('roomDetails.modernComfortDescription6')}</li>
                    <li>{t('roomDetails.modernComfortDescription7')}</li>
                    <li>{t('roomDetails.modernComfortDescription8')}</li>
                    
                  </p>
                  
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-semibold text-blue-900 mb-4">{t('roomDetails.privateTerraceTitle')}</h3>
                  <p className="text-lg text-gray-600 text-left">
                    
                    <li>{t('roomDetails.privateTerraceDescription3')}</li>
                    <li>{t('roomDetails.privateTerraceDescription4')}</li>
                    <li>{t('roomDetails.privateTerraceDescription5')}</li>
                    <li>{t('roomDetails.privateTerraceDescription6')}</li>
                    <li>{t('roomDetails.privateTerraceDescription7')}</li>
                    <li>{t('roomDetails.privateTerraceDescription8')}</li>
                 
                  </p>


                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-semibold text-blue-900 mb-4">{t('roomDetails.premiumServiceTitle')}</h3>
                  <p className="text-lg text-gray-600 text-left">
                    <li>{t('roomDetails.premiumServiceDescription')}</li>
                    <li>{t('roomDetails.premiumServiceDescription2')}</li>
                    <li>{t('roomDetails.premiumServiceDescription3')}</li>
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

        </div>
      </main>

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

export default RoomDetails;
