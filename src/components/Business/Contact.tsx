import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <footer className="bg-theme-secondary p-6 mt-10 ">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold">XYZ company</p>
            <p className="text-lg font-semibold">Follow us on : </p>
            <div className="flex space-x-4 mt-2">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/yourusername/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaTwitter size={24} />
              </a>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p>
              &copy; {new Date().getFullYear()} Harshdeep Singh. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;
