import { footerLinks } from "../data/FooterData";
  
  const Footer = () => {
    return (
      <footer className="bg-gray-100 font-sans text-gray-800 px-6 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-32">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="font-medium mb-1 text-lg">{section.title}</h3>
              <ul className="space-y-4 text-sm">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-200 font-medium">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
    );
  };
  
  export default Footer;
  