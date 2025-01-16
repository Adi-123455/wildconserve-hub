import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Info } from "lucide-react";

const wildlife = [
  {
    name: "Red Deer",
    description: "Majestic creatures often spotted in forest clearings during dawn and dusk.",
    image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f",
    status: "Common",
  },
  {
    name: "Mountain Goat",
    description: "Skilled climbers found in rocky mountain areas throughout the year.",
    image: "https://images.unsplash.com/photo-1438565434616-3ef039228b15",
    status: "Protected",
  },
  {
    name: "Brown Bear",
    description: "Powerful omnivores active during spring and summer months.",
    image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d",
    status: "Endangered",
  },
];

const WildlifeSection = () => {
  return (
    <section id="wildlife" className="py-20 bg-sand">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-montserrat font-bold text-forest mb-12 text-center">
          Local Wildlife Guide
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {wildlife.map((animal) => (
            <Card key={animal.name} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src={animal.image}
                  alt={animal.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{animal.name}</span>
                  <span className="text-sm px-3 py-1 bg-forest text-white rounded-full">
                    {animal.status}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{animal.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WildlifeSection;