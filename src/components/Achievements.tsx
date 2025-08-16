import { Trophy, Code, Target, Award, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Achievements = () => {
  const codingStats = [
    {
      platform: "LeetCode",
      rating: "1920+",
      rank: "Top 5%",
      solved: "800+",
      description: "Active competitive programmer with strong problem-solving skills",
      color: "from-yellow-400 to-orange-500",
      icon: Code
    },
    {
      platform: "GeeksforGeeks",
      problems: "100+",
      description: "Consistent problem solving across various difficulty levels",
      color: "from-green-400 to-emerald-500",
      icon: Target
    },
    {
      platform: "InterviewBit",
      problems: "100+",
      description: "Interview preparation and advanced problem solving",
      color: "from-blue-400 to-cyan-500",
      icon: Zap
    }
  ];

  const achievements = [
    {
      title: "National Level Championship",
      event: "Mental Arithmetic organized by UCMAS",
      icon: Trophy,
      type: "Competition",
      description: "Recognized for exceptional mental calculation abilities at national level"
    },
    {
      title: "Secured 8th Position",
      event: "6 Mile College Fest Intercollege Competition",
      icon: Award,
      type: "Competition",
      description: "Outstanding performance in intercollege technical competition"
    },
    {
      title: "Secured 8th Position", 
      event: "iHackMyPlace Hackathon Event",
      icon: Users,
      type: "Hackathon",
      description: "Team-based hackathon showcasing innovative problem-solving skills"
    }
  ];

  return (
    <section id="achievements" className="section-padding bg-gradient-to-b from-background to-background/50">
      <div className="container-max">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Coding <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Demonstrating consistent performance in competitive programming and 
            technical competitions with strong problem-solving capabilities.
          </p>
        </div>

        {/* Coding Platform Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {codingStats.map((stat, index) => (
            <div 
              key={index}
              className="glass glass-hover p-8 rounded-xl text-center space-y-6 group transform transition-all duration-300 hover:scale-105"
            >
              <div className={`p-4 bg-gradient-to-r ${stat.color} rounded-xl mx-auto w-fit group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="h-8 w-8 text-white" />
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold gradient-text">{stat.platform}</h3>
                
                <div className="space-y-2">
                  {stat.rating && (
                    <div className="space-y-1">
                      <div className="text-3xl font-bold text-foreground">{stat.rating}</div>
                      <div className="text-sm text-muted-foreground">Rating</div>
                    </div>
                  )}
                  
                  {stat.rank && (
                    <div className="bg-gradient-to-r from-accent/20 to-primary/20 p-3 rounded-lg">
                      <div className="text-lg font-semibold text-primary">{stat.rank}</div>
                      <div className="text-xs text-muted-foreground">Global Ranking</div>
                    </div>
                  )}
                  
                  {stat.solved && (
                    <div className="space-y-1">
                      <div className="text-2xl font-bold text-foreground">{stat.solved}</div>
                      <div className="text-sm text-muted-foreground">Problems Solved</div>
                    </div>
                  )}
                  
                  {stat.problems && (
                    <div className="space-y-1">
                      <div className="text-2xl font-bold text-foreground">{stat.problems}</div>
                      <div className="text-sm text-muted-foreground">Problems Solved</div>
                    </div>
                  )}
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Competition Achievements */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-center">
            Competition <span className="gradient-text">Highlights</span>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="glass glass-hover p-6 rounded-xl space-y-4 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-r from-accent to-primary rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <achievement.icon className="h-6 w-6 text-white" />
                  </div>
                  
                  <div className="flex-1 space-y-2">
                    <div className="text-xs bg-secondary/50 text-muted-foreground px-3 py-1 rounded-full w-fit">
                      {achievement.type}
                    </div>
                    <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {achievement.title}
                    </h4>
                    <p className="text-sm font-medium text-primary">
                      {achievement.event}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="glass glass-hover p-8 rounded-xl max-w-2xl mx-auto space-y-6">
            <h3 className="text-2xl font-bold">
              Ready to <span className="gradient-text">Collaborate?</span>
            </h3>
            <p className="text-muted-foreground">
              Let's build something amazing together. I'm always excited to work on 
              challenging projects and contribute to innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-white px-8 py-3"
              >
                View LeetCode Profile
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="glass border-primary/30 text-foreground hover:text-primary px-8 py-3"
              >
                Check GitHub
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;