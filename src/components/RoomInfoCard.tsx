
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Checkbox } from '@/components/ui/checkbox';
import { LucideIcon } from 'lucide-react';

interface Amenity {
  icon: LucideIcon;
  label: string;
  included: boolean;
}

interface RoomInfoCardProps {
  images: string[];
  price: string;
  amenities: Amenity[];
  className?: string;
  position?: 'left' | 'right';
}

export const RoomInfoCard: React.FC<RoomInfoCardProps> = ({
  images,
  price,
  amenities,
  className = "",
  position = 'left'
}) => {
  const positionClasses = position === 'left' 
    ? 'ml-0 mr-auto' 
    : 'ml-auto mr-0';

  return (
    <Card className={`w-full max-w-4xl shadow-xl ${positionClasses} ${className}`}>
      <CardContent className="p-8">
        {/* Image Carousel */}
        <div className="mb-8">
          <Carousel className="w-full">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative h-64 md:h-80">
                    <img
                      src={image}
                      alt={`Room view ${index + 1}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>

        {/* Price Section */}
        <div className="text-center mb-8">
          <div className="text-4xl font-bold text-blue-900 mb-2">{price}</div>
          <div className="text-lg text-gray-600">per night</div>
        </div>

        {/* Amenities Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon;
            return (
              <div key={index} className="flex items-center space-x-2">
                <Checkbox checked={amenity.included} disabled />
                <Icon className="w-5 h-5 text-blue-600" />
                <span className="text-sm text-gray-700">{amenity.label}</span>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
