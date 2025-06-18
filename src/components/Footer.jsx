const Footer = () => {
  return (
    <footer className="w-full  text-neutral-400 text-sm py-6 px-4 flex flex-col md:flex-row items-center justify-between">
      <p className="mb-2 md:mb-0">© {new Date().getFullYear()} Baltazar Molteni</p>

      <div className="flex space-x-4">
        <a href="https://github.com/baltamolteni" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/baltazar-molteni-975087250/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
