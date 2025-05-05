
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        { name: "React", proficiency: 95 },
        { name: "TypeScript", proficiency: 90 },
        { name: "Material UI", proficiency: 85 },
        { name: "Ant Design", proficiency: 80 },
        { name: "JavaScript", proficiency: 95 },
      ]
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Node.js", proficiency: 85 },
        { name: "Express", proficiency: 80 },
        { name: "Java", proficiency: 75 },
        { name: ".NET", proficiency: 70 },
        { name: "RESTful APIs", proficiency: 90 },
      ]
    },
    {
      category: "Database",
      skills: [
        { name: "MySQL", proficiency: 80 },
        { name: "MongoDB", proficiency: 85 },
        { name: "PostgreSQL", proficiency: 75 },
      ]
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git", proficiency: 90 },
        { name: "Cypress", proficiency: 80 },
        { name: "Postman", proficiency: 85 },
        { name: "Jira", proficiency: 90 },
        { name: "Agile/Scrum", proficiency: 95 },
      ]
    },
    {
      category: "Languages",
      skills: [
        { name: "English", proficiency: 100 },
        { name: "Hindi", proficiency: 95 },
        { name: "Gujarati", proficiency: 100 }
      ]
    }
  ];

  const additionalSkills = [
    "Responsive Design", "Cross-Browser Compatibility", 
    "Test-Driven Development", "Webpack", "NPM", "Yarn", "Redux", 
    "Context API", "Hooks"
  ];

  return (
    <section id="skills" className="section bg-white dark:bg-navy-900">
      <div className="container mx-auto">
        <h2 className="text-center mb-12 dark:text-white">
          Technical <span className="text-portfolio-teal dark:text-portfolio-light-teal">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="bg-white dark:bg-navy-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl animate-on-scroll">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-portfolio-teal dark:text-portfolio-light-teal">{category.category}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, index) => (
                    <div key={index} className="space-y-1">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium dark:text-gray-200">{skill.name}</span>
                        <span className="text-sm font-medium text-portfolio-teal dark:text-portfolio-light-teal">{skill.proficiency}%</span>
                      </div>
                      <Progress value={skill.proficiency} className="h-2" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <div className="bg-white dark:bg-navy-800 rounded-lg shadow-lg p-8 animate-on-scroll">
            <h3 className="text-xl font-semibold mb-6 text-center dark:text-white">Additional Skills & Technologies</h3>
            
            <div className="flex flex-wrap justify-center gap-3">
              {additionalSkills.map((skill, index) => (
                <Badge 
                  key={index}
                  className="skill-tag bg-portfolio-teal/20 text-portfolio-teal dark:bg-portfolio-teal/30 dark:text-portfolio-light-teal hover:bg-portfolio-teal hover:text-white text-sm py-2 px-4"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
