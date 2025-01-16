import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, AlertTriangle } from "lucide-react";

const speciesData = [
  {
    name: "Red Deer",
    scientificName: "Cervus elaphus",
    status: "Common",
    habitat: "Forest clearings and meadows",
    bestTime: "Dawn and dusk",
    description: "The red deer is one of the largest deer species. The male (stag) and female (hind) are different in size, with the male being much larger. They play a crucial role in maintaining forest ecosystems through their grazing habits.",
    conservation: "While populations are stable, habitat fragmentation poses a growing threat.",
    image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f",
  },
  {
    name: "Mountain Goat",
    scientificName: "Oreamnos americanus",
    status: "Protected",
    habitat: "Rocky mountain slopes",
    bestTime: "Early morning",
    description: "Mountain goats are skilled climbers adapted to steep, rocky mountain terrain. Their distinctive white coat and sharp horns make them easily recognizable.",
    conservation: "Protected status has helped stabilize populations, but climate change affects their alpine habitat.",
    image: "https://images.unsplash.com/photo-1438565434616-3ef039228b15",
  },
  {
    name: "Brown Bear",
    scientificName: "Ursus arctos",
    status: "Endangered",
    habitat: "Forest and mountain regions",
    bestTime: "Spring and summer",
    description: "Brown bears are powerful omnivores with a diverse diet. They play a key role in ecosystem health by dispersing seeds and controlling prey populations.",
    conservation: "Habitat loss and human conflict are major threats. Conservation efforts focus on protecting their territories.",
    image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d",
  },
];

const Species = () => {
  return (
    <div className="min-h-screen bg-sand">
      <Navbar />
      <div className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-montserrat font-bold text-forest mb-8 text-center">
            Local Wildlife Species
          </h1>
          <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
            Discover the diverse wildlife that calls our region home. Understanding these species
            is crucial for their conservation and sustainable coexistence.
          </p>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {speciesData.map((species) => (
              <Card key={species.name} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-64 overflow-hidden">
                  <img
                    src={species.image}
                    alt={species.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <CardTitle className="text-xl mb-1">{species.name}</CardTitle>
                      <p className="text-sm italic text-gray-600">{species.scientificName}</p>
                    </div>
                    <Badge variant={species.status === "Endangered" ? "destructive" : "secondary"}>
                      {species.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-forest" />
                    <span>{species.habitat}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-forest" />
                    <span>Best time: {species.bestTime}</span>
                  </div>
                  <p className="text-gray-700">{species.description}</p>
                  <div className="flex items-start gap-2 bg-forest/10 p-3 rounded-lg">
                    <AlertTriangle className="h-5 w-5 text-forest flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-forest">{species.conservation}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Species;