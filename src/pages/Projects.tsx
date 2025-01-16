import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Users2, Target, TreePine } from "lucide-react";

const projects = [
  {
    title: "Forest Habitat Restoration",
    description: "Restoring degraded forest areas through native tree planting and invasive species removal.",
    goal: 50000,
    raised: 35000,
    volunteers: 120,
    impact: "15,000 trees planted",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09",
  },
  {
    title: "Wildlife Corridor Protection",
    description: "Establishing protected corridors to allow safe wildlife movement between habitats.",
    goal: 75000,
    raised: 45000,
    volunteers: 85,
    impact: "200 acres protected",
    image: "https://images.unsplash.com/photo-1500829243541-74b677fecc30",
  },
  {
    title: "Community Conservation Education",
    description: "Educational programs to engage local communities in wildlife conservation efforts.",
    goal: 30000,
    raised: 28000,
    volunteers: 45,
    impact: "1,000+ people reached",
    image: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-sand">
      <Navbar />
      <div className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-montserrat font-bold text-forest mb-8 text-center">
            Conservation Projects
          </h1>
          <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
            Join our ongoing conservation initiatives. Every contribution makes a difference
            in protecting our local wildlife and their habitats.
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.title} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">{project.description}</p>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span className="text-forest font-semibold">
                        ${project.raised.toLocaleString()} / ${project.goal.toLocaleString()}
                      </span>
                    </div>
                    <Progress value={(project.raised / project.goal) * 100} className="h-2" />
                  </div>

                  <div className="grid grid-cols-2 gap-4 py-4">
                    <div className="flex items-center gap-2">
                      <Users2 className="h-5 w-5 text-forest" />
                      <div className="text-sm">
                        <p className="font-semibold">{project.volunteers}</p>
                        <p className="text-gray-600">Volunteers</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Target className="h-5 w-5 text-forest" />
                      <div className="text-sm">
                        <p className="font-semibold">{project.impact}</p>
                        <p className="text-gray-600">Impact</p>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-forest hover:bg-forest-light">
                    Support Project
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;