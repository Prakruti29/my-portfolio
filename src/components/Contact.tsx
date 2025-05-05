
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    emailjs.send("service_l1a39sk","template_hnwkhfe",formData,"YzeafOxQn1MXTDTP-")
    
      .then(() => {
        toast({
          title: "Message sent!",
          description: "Thanks for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      })
      .catch((error) => {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again later.",
        });
        console.error("EmailJS error:", error);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };
  

  return (
    <section id="contact" className="section bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-center mb-12">
          Get in <span className="text-portfolio-teal">Touch</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1 space-y-6">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-portfolio-teal/10 rounded-full p-3 mr-4">
                  <Mail className="h-5 w-5 text-portfolio-teal" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:prakrutigandhi294@gmail.com" className="text-gray-600 hover:text-portfolio-teal">
                    prakrutigandhi294@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-portfolio-teal/10 rounded-full p-3 mr-4">
                  <Phone className="h-5 w-5 text-portfolio-teal" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <a href="tel:+917600063875" className="text-gray-600 hover:text-portfolio-teal">
                    +91 76000 63875
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-portfolio-teal/10 rounded-full p-3 mr-4">
                  <Linkedin className="h-5 w-5 text-portfolio-teal" />
                </div>
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <a 
                    href="https://linkedin.com/in/prakrutigandhi" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-portfolio-teal"
                  >
                    linkedin.com/in/prakrutigandhi
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-portfolio-teal/10 rounded-full p-3 mr-4">
                  <Github className="h-5 w-5 text-portfolio-teal" />
                </div>
                <div>
                  <p className="font-medium">GitHub</p>
                  <a 
                    href="https://github.com/Prakruti29" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-portfolio-teal"
                  >
                    github.com/prakrutigandhi
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email"
                        required
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message"
                      required
                      className="min-h-[150px] w-full"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-portfolio-teal hover:bg-portfolio-teal/90"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
