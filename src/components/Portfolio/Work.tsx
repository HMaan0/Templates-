const workData = [
  {
    title: "Software Engineer",
    company: "Tech Corp",
    duration: "2022/01/15 - 2023/06/30",
    description:
      "Worked as a software engineer focusing on web development, building full-stack applications using React and Node.js.",
  },
  {
    title: "Frontend Developer",
    company: "Design Solutions",
    duration: "2020/03/10 - 2021/12/15",
    description:
      "Led frontend development for several projects, implementing responsive designs with Tailwind CSS and optimizing performance.",
  },
  {
    title: "Backend Developer",
    company: "Data Systems",
    duration: "2018/06/01 - 2020/02/28",
    description:
      "Developed and maintained REST APIs using Node.js and PostgreSQL, ensuring smooth data flows for a large-scale platform.",
  },
];

const Work = () => {
  return (
    <div className="mt-10">
      <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
        My Work Experience
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {workData.map((work, index) => (
          <div
            key={index}
            className="p-4 dark:bg-Primary_dark bg-white shadow-lg rounded-lg transform transition-transform hover:scale-105"
          >
            <p className="text-xl sm:text-2xl font-semibold mb-2">
              {work.title}
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-1">
              {work.company}
            </p>
            <div className="text-sm text-gray-500 mb-4">{work.duration}</div>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {work.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
