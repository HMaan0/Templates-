import Button from "../Button";

const aboutData = {
  description: `
      Hi! I'm Harshdeep Singh, a passionate software engineer with a knack for building intuitive and efficient web applications. 
      I enjoy creating scalable solutions using modern web technologies, focusing on user experience and performance.
    `,
  skills: [
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "TypeScript",
    "PostgreSQL",
  ],
  personalDetails: {
    name: "Harshdeep Singh",
    location: "Alberta, Canada",
    email: "harshdeep@example.com",
  },
};

const About = () => {
  return (
    <div className="mt-10 p-6 bg-gray-100 dark:bg-Primary_dark rounded-lg shadow-lg">
      <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
        About Me
      </p>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
        {aboutData.description}
      </p>

      <div className="mb-8">
        <p className="text-2xl font-semibold mb-4">Skills</p>
        <ul className="flex flex-wrap gap-4">
          {aboutData.skills.map((skill, index) => (
            <li key={index}>
              <Button>{skill}</Button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="text-2xl font-semibold mb-4">Personal Details</p>
        <ul className="text-gray-700 dark:text-gray-300">
          <li className="mb-2">
            <strong>Name:</strong> {aboutData.personalDetails.name}
          </li>
          <li className="mb-2">
            <strong>Location:</strong> {aboutData.personalDetails.location}
          </li>
          <li>
            <strong>Email:</strong> {aboutData.personalDetails.email}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
