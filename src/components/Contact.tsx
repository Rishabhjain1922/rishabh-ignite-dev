import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Linkedin, 
  Github, 
  ExternalLink,
  CheckCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(formData.subject);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      const mailtoLink = `mailto:Rishabhjain1922@gmail.com?subject=${subject}&body=${body}`;
      
      // Open default email client
      window.location.href = mailtoLink;
      
      toast({
        title: "Email client opened!",
        description: "Your default email client should open with the message. If not, please email me directly at Rishabhjain1922@gmail.com",
      });
      
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an issue opening your email client. Please email me directly at Rishabhjain1922@gmail.com",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91-6265388250",
      href: "tel:+916265388250"
    },
    {
      icon: Mail,
      label: "Email",
      value: "Rishabhjain1922@gmail.com",
      href: "mailto:Rishabhjain1922@gmail.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bangalore, Karnataka",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/rishabh-jain-22a19422a/",
      username: "@rishabhjain1922"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Rishabhjain1922",
      username: "@Rishabhjain1922"
    },
    {
      icon: ExternalLink,
      label: "LeetCode",
      href: "https://leetcode.com/u/Rishabhjain1922/",
      username: "@Rishabhjain1922"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-background/50 to-background">
      <div className="container-max">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how I can help 
            bring your ideas to life with cutting-edge technology solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="glass glass-hover p-8 rounded-xl space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-foreground">Send a Message</h3>
              <p className="text-muted-foreground">
                Fill out the form below and I'll get back to you as soon as possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="glass border-primary/30 focus:border-primary bg-background/50"
                    placeholder="Your full name"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="glass border-primary/30 focus:border-primary bg-background/50"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-foreground">
                  Subject *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="glass border-primary/30 focus:border-primary bg-background/50"
                  placeholder="What's this about?"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="glass border-primary/30 focus:border-primary bg-background/50 resize-none"
                  placeholder="Tell me about your project or how I can help..."
                />
              </div>

              <Button 
                type="submit" 
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-white font-medium py-3 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glass glass-hover p-8 rounded-xl space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Contact Information</h3>
              
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <a 
                    key={index}
                    href={item.href}
                    className="flex items-center gap-4 p-4 glass glass-hover rounded-xl group transition-all duration-300"
                  >
                    <div className="p-3 bg-gradient-to-r from-accent to-primary rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="h-5 w-5 text-white" />
                    </div>
                    
                    <div className="space-y-1">
                      <div className="text-sm text-muted-foreground">{item.label}</div>
                      <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {item.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="glass glass-hover p-8 rounded-xl space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Connect Online</h3>
              
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 glass glass-hover rounded-xl group transition-all duration-300"
                  >
                    <div className="p-3 bg-gradient-to-r from-accent to-primary rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <social.icon className="h-5 w-5 text-white" />
                    </div>
                    
                    <div className="space-y-1">
                      <div className="text-sm text-muted-foreground">{social.label}</div>
                      <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {social.username}
                      </div>
                    </div>
                    
                    <ExternalLink className="h-4 w-4 text-muted-foreground ml-auto group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Response Promise */}
            <div className="glass glass-hover p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle className="h-6 w-6 text-success" />
                <h4 className="font-semibold text-foreground">Quick Response</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                I typically respond to messages within 24 hours. For urgent inquiries, 
                feel free to reach out via phone or LinkedIn.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;