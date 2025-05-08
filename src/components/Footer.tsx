const Footer: React.FC = () => {
    return (
      <footer className="bg-neutral-800 text-neutral-200 text-xs py-6 mt-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <img src="/assets" alt="" />
            <span className="font-semibold">CryptoPulse</span> © {new Date().getFullYear()} All rights reserved.
          </div>
          <div className="flex space-x-4 text-xs">
            <a href="#" className="hover:text-blue-400 transition">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition">Terms of Service</a>
            <a href="https://github.com/your-repo" target="_blank" className="hover:text-blue-400 transition">GitHub</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
