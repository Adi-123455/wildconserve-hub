import { Card, CardContent } from "@/components/ui/card";
import { Info } from "lucide-react";

const guidelines = [
  {
    title: "Keep Your Distance",
    description: "Maintain a safe distance of at least 100 meters from wildlife.",
  },
  {
    title: "No Feeding",
    description: "Never feed wild animals as it disrupts their natural behavior.",
  },
  {
    title: "Stay on Trails",
    description: "Use designated trails to protect vegetation and prevent erosion.",
  },
  {
    title: "No Littering",
    description: "Pack out what you pack in. Leave no trace behind.",
  },
];

const Guidelines = () => {
  return (
    <section id="guidelines" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-montserrat font-bold text-forest mb-12 text-center">
          Visitor Guidelines
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {guidelines.map((guideline) => (
            <Card key={guideline.title} className="bg-sky/10 border-none hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-sky rounded-lg">
                    <Info className="h-6 w-6 text-sky-dark" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold mb-2">{guideline.title}</h3>
                    <p className="text-gray-600 text-sm">{guideline.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Guidelines;