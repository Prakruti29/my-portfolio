
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const Education = () => {
  const education = [
    {
      degree: "Masters of Science in Information Technology",
      institution: "Dhirubhai Ambani Institute of Information Communication and Technology",
      location: "Gandhinagar, Gujarat",
      period: "June 2020 - July 2022",
      grade: "7.85 / 10"
    },
    {
      degree: "Bachelors of Science in Information Technology and Computer Applications",
      institution: "KSSBM",
      location: "Ahmedabad, Gujarat",
      period: "June 2017 - May 2020",
      grade: "7.9 / 10"
    }
  ];

  return (
    <section id="education" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-center mb-12">
          <span className="text-portfolio-teal dark:text-portfolio-light-teal">Education</span> & Qualifications
        </h2>

        <div className="space-y-8">
          {education.map((edu, idx) => (
            <Card key={idx} className="border-l-4 border-l-portfolio-teal dark:border-l-portfolio-light-teal dark:bg-gray-800">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{edu.institution}</p>
                    <p className="text-gray-500 dark:text-gray-400">{edu.location}</p>
                  </div>
                  <div className="mt-4 md:mt-0 md:text-right">
                    <p className="text-portfolio-teal dark:text-portfolio-light-teal font-medium">{edu.period}</p>
                    <p className="text-gray-600 dark:text-gray-300">Grade: {edu.grade}</p>
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

export default Education;
