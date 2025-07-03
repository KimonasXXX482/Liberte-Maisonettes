
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface RoomInfoBoxProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export const RoomInfoBox: React.FC<RoomInfoBoxProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  className = "" 
}) => {
  return (
    <Card className={`group hover:shadow-xl transition-all duration-300 border-0 shadow-lg ${className}`}>
      <CardContent className="p-8 text-center">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
          <Icon className="w-8 h-8 text-blue-600" />
        </div>
        <h3 className="text-2xl font-semibold text-blue-900 mb-4">{title}</h3>
        <div className="text-lg text-gray-600">
          {description}
        </div>
      </CardContent>
    </Card>
  );
};
