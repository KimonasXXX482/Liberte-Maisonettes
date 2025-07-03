
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

interface RoomSectionsProps {
  roomType: 'economy' | 'superior' | 'maisonette';
}

export const RoomSections: React.FC<RoomSectionsProps> = ({ roomType }) => {
  const { t } = useLanguage();

  const getSectionData = () => {
    switch (roomType) {
      case 'economy':
        return {
          section1: {
            title: t('economySections.overview.title'),
            content: t('economySections.overview.content')
          },
          section2: {
            title: t('economySections.amenities.title'),
            content: t('economySections.amenities.content')
          },
          section3: {
            title: t('economySections.comfort.title'),
            content: t('economySections.comfort.content')
          },
          section4: {
            title: t('economySections.location.title'),
            content: t('economySections.location.content')
          }
        };
      case 'superior':
        return {
          section1: {
            title: t('superiorSections.luxury.title'),
            content: t('superiorSections.luxury.content')
          },
          section2: {
            title: t('superiorSections.features.title'),
            content: t('superiorSections.features.content')
          },
          section3: {
            title: t('superiorSections.space.title'),
            content: t('superiorSections.space.content')
          },
          section4: {
            title: t('superiorSections.experience.title'),
            content: t('superiorSections.experience.content')
          }
        };
      case 'maisonette':
        return {
          section1: {
            title: t('maisonetteSections.elegance.title'),
            content: t('maisonetteSections.elegance.content')
          },
          section2: {
            title: t('maisonetteSections.design.title'),
            content: t('maisonetteSections.design.content')
          },
          section3: {
            title: t('maisonetteSections.privacy.title'),
            content: t('maisonetteSections.privacy.content')
          },
          section4: {
            title: t('maisonetteSections.premium.title'),
            content: t('maisonetteSections.premium.content')
          }
        };
      default:
        return {};
    }
  };

  const sections = getSectionData();

  return (
    <div className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(sections).map(([key, section], index) => (
            <Card key={key} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-blue-900 mb-4">
                  {section.title}
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {section.content}
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-lg px-6 py-3">
                  {t('common.learnMore')}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
