import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart } from "lucide-react";

const Support = () => {
  return (
    <section className="py-20 bg-forest text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Heart className="w-16 h-16 mx-auto mb-6 text-earth animate-float" />
          <h2 className="text-4xl font-montserrat font-bold mb-6">
            Support Conservation
          </h2>
          <p className="text-lg mb-12 text-sand">
            Your contribution helps protect wildlife and their habitats. Support local NGOs and make a difference today.
          </p>
          
          <Card className="bg-white/10 backdrop-blur-sm border-sand/20">
            <CardHeader>
              <CardTitle className="text-2xl text-sand">Monthly Donation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap justify-center gap-4">
                {[10, 25, 50, 100].map((amount) => (
                  <Button
                    key={amount}
                    variant="outline"
                    className="border-sand text-sand hover:bg-sand hover:text-forest min-w-[100px]"
                  >
                    ${amount}
                  </Button>
                ))}
              </div>
              <Button className="w-full mt-6 bg-earth hover:bg-earth-light text-white">
                Donate Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Support;