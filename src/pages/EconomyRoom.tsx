import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle, ChevronDown, Menu, ArrowRight, List,  Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';

const Header = () => {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: t('nav.home'), to: '/' },
    { label: t('nav.about'), to: '/#about' },
    { label: t('nav.location'), to: '/location' },
    { label: t('nav.contact'), to: '#contact' },
  ];

  const roomLinks = [
    { label: t('nav.roomDetails'), to: '/RoomDetails' },
    { label: t('nav.economyRoom'), to: '/economy-room' },
    { label: t('nav.superiorRoom'), to: '/superior-room' },
    { label: t('nav.maisonetteRoom'), to: '/maisonette-room' },
  ];

  return (
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
  );
};

const RoomCard = ({ title, description, details, images, availableAmenities, categoriesToShow }) => {
  const { t } = useLanguage();
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => setIndex(i => (i + 1) % images.length), 4000);
    return () => clearInterval(intervalRef.current);
  }, [images.length]);

  const amenityLabels = {
    /* rooms */
    title: t("economy.title"),
    title11:t ("economy.title11"),
    title2:t("economy.title2"),
    title3:t("economy.title3"),
    title4:t("economy.title4"),
    title5:t(" economy.title5 "),
    title6:t("economy.title6"),
    title7:t("economy.title7"),
    title8:t("economy.title8"),
    title9:t("economy.title9"),
    title10:t("economy.title10"),

      
      /* Description */
    d1:t("economy.d1"),
    d2:t("economy.d2"),
    d3:t("economy.d3"),
    p4:t("economy.d4"),
    d5:t("economy.d5"),
    d6:t("economy.d6"),
    d7:t("economy.d7"),
    d8:t("economy.d8"),
    d9:t("economy.d9"),
    d10:t("economy.d10"),
    d11:t("economy.d11"),
    d12:t("economy.d12"),
    d13:t("economy.d13"),
    d14:t("economy.d14"),
    d15:t("economy.d15"),
    d16:t("economy.d16"),
    d17:t("economy.d17"),
      /* sizes */
    size:t("economy.size"),
    size1:t("economy.size1"),
    size2:t("economy.size2"),
    size3:t("economy.siz3"),
    size4:t("economy.size4"),
    size5:t("economy.size5"),
    size6:t("economy.size6"),
    /* lists */
    list1:t("economy.list1"),
    list2:t("economy.list2"),
    list3:t("economy.list3"),
    list4:t("economy.list4"),
    list5:t("economy.list5"),
    list6:t("economy.list6"),
    list7:t("economy.list7"),
    list8:t("economy.list8"),
    list9:t("economy.list9"),
    list10:t("economy.list10"),
    list11:t("economy.list11"),
    list12:t("economy.list12"),
    list13:t("economy.list13"),
    list14:t("economy.list14"),
    list15:t ("economy.list15"),
    list16:t("economy.list16"),
    list17:t("economy.list17"),
    list18:t("economy.list18"),
    list19:t("economy.list19"),
    list20:t("economy.list20"),
    list21:t("economy.list21"),
    list22:t("economy.list22"),
    list23:t("economy.list23"),
    list24:t("economy.list24"),
    list25:t("economy.list25"),
    list26:t("economy.list26"),
    list27:t("economy.list27"),
    list28:t("economy.list28"),
    list29:t("economy.list29"),
    list30:t("economy.list30"),
    list31:t("economy.list31"),
    list32:t("economy.list32"),
    list33:t("economy.list33"),
    list34:t("economy.list34"),
    list35:t("economy.list35"),
    list36:t("economy.list36"),
    list37:t("economy.list37"),
    list38:t("economy.list38"),
    list39:t("economy.list39"),
    list40:t("economy.list40"),
    list41:t("economy.list41"),
    list42:t("economy.list42"),
    list43:t("economy.list43"),
    list44:t("economy.list44"),
    list45:t("economy.list45"),
    list46:t("economy.list46"),
    list47:t("economy.list47"),
    list48:t("economy.list48"),
    list49:t("economy.list49"),
    list50:t("economy.list50"),
    list51:t("economy.list51"),

  };

  const allAmenityGroups = [
    { title: t('economy.c1'), keys: ['list6','list7','list8','list9','list10','list11'] },
    { title: t('economy.c2'), keys: ['list12','list13'] },
    { title: t('economy.c3'), keys: ['list1','list2','list3','list4','list5','list14','list15','list16','list17','list18','list19','list20','list21','list23','list24','list25','list26','list28','list29','list30','list31','list31','list33','list34','list35','list36','list39','list40','list41','list42','list43','list44']},
    { title: t('economy.c4'), keys: ['mountainView', 'cityView','list1','list2','list3','list4','list5'] },
  ];

  const groupsToDisplay = categoriesToShow.map(i => allAmenityGroups[i]);

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-6xl w-full flex flex-col md:flex-row relative">
      <div className="w-full md:w-[500px] h-64 md:h-[500px] relative flex-shrink-0 ">
        <img src={images[index]} alt={`${title} image`} className="w-full h-full object-cover" />
        <button
          onClick={() => setIndex(i => Math.max(0, i - 1))}
          disabled={index === 0}
          className={`absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow ${index === 0 ? 'opacity-30 cursor-not-allowed' : ''}`}
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => setIndex(i => Math.min(images.length - 1, i + 1))}
          disabled={index === images.length - 1}
          className={`absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow ${index === images.length - 1 ? 'opacity-30 cursor-not-allowed' : ''}`}
        >
          <ChevronRight />
        </button>
      </div>
      <div className="p-6 md:p-8 flex flex-col flex-1">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900">{title}</h2>
        <p className="text-base md:text-lg text-gray-600 mt-3">{description}</p>
        {details && <div className="mt-4 text-gray-700 space-y-3 text-sm md:text-base">{details}</div>}

        <div className="mt-6 space-y-6">
          {groupsToDisplay.map(({ title, keys }) => {
            const filteredKeys = keys.filter(key => availableAmenities.includes(key));
            if (filteredKeys.length === 0) return null;

            return (
              <div key={title}>
                <h4 className="text-base md:text-lg font-semibold text-blue-800 mb-2">{title}</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                  {filteredKeys.map(key => (
                    <div key={key} className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-800 text-sm md:text-base">{amenityLabels[key]}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const RoomCardPage = () => {
  const { t } = useLanguage();

  const standardAmenities = ['list1','list2','list3','list4','list5','list6','list7','list8','list9','list10','list11','list12','list13','list14','list15','list16','list17','list18','list19','list20','list21','list23','list24','list26','list28','list29','list30','list34','list35','list36','list39','list40','list41','list43','list44'];
  const gardenAmenities = ['list1','list2','list3','list4','list5','list6','list7','list8','list9','list10','list11','list12','list13','list14','list15','list16','list17','list18','list19','list20','list21','list23','list26','list28','list29','list30','list34','list35','list36','list39','list40','list41','list43','list44'];
  const balconyAmenities = ['list1','list2','list3','list4','list5','list7','list8','list9','list10','list11','list12','list13','list14','list15','list16','list17','list18','list19','list20','list21','list23','list25','list26','list29','list30','list31','list33','list34','list35','list36','list39','list40','list41','list42','list43','list44'];
  const familyAmenities = ['list1','list2','list3','list4','list5','list7','list8', 'list9', 'list10','list11','list12','list13','list14','list15','list16','list17','list18','list19','list20','list21','list23','list24','list25','list26','list27','list28','list29','list31','list33','list34','list35','list36','list37','list38','list39','list40','list41','list42','list43','list44'];

  return (
    <div className="pt-32 bg-blue-50 min-h-screen pb-20">
      <Header />
      
      <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-16 px-4">{t('economy.title1')}</h1>
      <div className="grid gap-16 place-items-center px-4 md:px-12">
        
        <RoomCard
          title={t('economy.standardTitle')}
          description={t('economy.gardenDescription')}
          details={<>{t('economy.p2')}<br /><br />{t('economy.p3')}<br /><br />{t('economy.paragraph')}</>}
          images={['/public/economy_room1/bed1.png', '/public/economy_room1/bathroom2.png', '/public/economy_room1/PargaView.png']}
          availableAmenities={gardenAmenities}
          categoriesToShow={[0, 1, 2]}
        />
        <RoomCard
          title={t('economy.gardenTitle')}
          description={t('economy.gardenDescription')}
          details={<>{t('economy.p2')}<br /><br />{t('economy.p3')}<br /><br />{t('economy.paragraph')}</>}
          images={['/public/economy_room1/bed1.png', '/public/economy_room1/bathroom2.png', '/public/economy_room1/PargaView.png']}
          availableAmenities={gardenAmenities}
          categoriesToShow={[0, 1, 2]}
        />
        
      </div>

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

export default RoomCardPage;
