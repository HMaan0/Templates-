import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import data from "../../../data/Portfolio/data";

const Contact = () => {
  return (
    <footer className="dark:bg-Primary_dark p-6 mt-10 rounded-lg rounded-b-none">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-lg font-semibold">Connect with me:</p>
          <div className="flex space-x-4 mt-2">
            {data.contact.Github && (
              <a
                href={data.contact.Github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaGithub size={24} />
              </a>
            )}
            {data.contact.LinkedIn && (
              <a
                href={data.contact.LinkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaLinkedin size={24} />
              </a>
            )}
            {data.contact.Twitter && (
              <a
                href={data.contact.Twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaTwitter size={24} />
              </a>
            )}
            {data.contact.Email && (
              <a
                href={`mailto:${data.contact.Email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaEnvelope size={24} />
              </a>
            )}
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
  );
};

export default Contact;
