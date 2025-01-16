import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-forest text-white">
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1472396961693-142e6e269027')] 
        bg-cover bg-center"
        style={{ opacity: 0.3 }}
      />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-montserrat font-bold mb-6 animate-float">
            Discover & Protect Our Wildlife
          </h1>
          <p className="text-xl mb-8 text-sand">
            Join us in preserving the natural beauty and biodiversity of our region.
            Track wildlife, learn about conservation, and make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-earth hover:bg-earth-light text-white text-lg px-8 py-6">
              Explore Map
            </Button>
            <Button variant="outline" className="border-sand text-sand hover:bg-sand hover:text-forest text-lg px-8 py-6">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;