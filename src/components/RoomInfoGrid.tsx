
import React from 'react';
import { RoomInfoCard } from './RoomInfoCard';
import { LucideIcon } from 'lucide-react';

interface Amenity {
  icon: LucideIcon;
  label: string;
  included: boolean;
}

interface RoomInfoGridProps {
  images: string[];
  price: string;
  amenities: Amenity[];
}

export const RoomInfoGrid: React.FC<RoomInfoGridProps> = ({
  images,
  price,
  amenities
}) => {
  return (
    <div className="space-y-16">
      {[...Array(5)].map((_, index) => (
        <RoomInfoCard
          key={index}
          images={images}
          price={price}
          amenities={amenities}
          position={index % 2 === 0 ? 'left' : 'right'}
          className="mb-16"
        />
      ))}
    </div>
  );
};
