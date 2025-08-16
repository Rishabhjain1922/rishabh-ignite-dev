import { GraduationCap, MapPin, Calendar, Target } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-background to-background/50">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - About content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                About <span className="gradient-text">Me</span>
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate software engineer with a strong foundation in full-stack development. 
                Currently pursuing my B.Tech in Electronics and Telecommunication Engineering, 
                I've gained hands-on experience through internships and personal projects.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey in technology started with a curiosity for problem-solving, which led me to 
                competitive programming and eventually to full-stack development. I love building 
                scalable applications and exploring new technologies.
              </p>
            </div>

            {/* Goals section */}
            <div className="glass glass-hover p-6 rounded-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-r from-accent to-primary rounded-lg">
                  <Target className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Career Goals</h3>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                To leverage my technical skills and problem-solving abilities in a challenging 
                software engineering role, contributing to innovative projects while continuously 
                learning and growing in the field of technology.
              </p>
            </div>
          </div>

          {/* Right side - Education cards */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-center lg:text-left">Education</h3>
            
            {/* Current Education */}
            <div className="glass glass-hover p-6 rounded-xl space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-r from-accent to-primary rounded-xl">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                
                <div className="flex-1 space-y-2">
                  <h4 className="text-xl font-semibold">R.V College of Engineering</h4>
                  <p className="text-primary font-medium">
                    B.Tech - Electronics and Telecommunication Engineering
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>2021 - 2025</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>Bangalore, Karnataka</span>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-accent/20 to-primary/20 p-3 rounded-lg">
                    <span className="text-sm font-medium">CGPA: 8.44</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Previous Education */}
            <div className="glass glass-hover p-6 rounded-xl space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-r from-accent/70 to-primary/70 rounded-xl">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                
                <div className="flex-1 space-y-2">
                  <h4 className="text-xl font-semibold">Shri Narsingh Public School</h4>
                  <p className="text-primary font-medium">
                    Senior Secondary - Physics, Chemistry and Maths
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>2018 - 2020</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>Narsinghpur, Madhya Pradesh</span>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-accent/20 to-primary/20 p-3 rounded-lg">
                    <span className="text-sm font-medium">Percentage: 94.3%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;