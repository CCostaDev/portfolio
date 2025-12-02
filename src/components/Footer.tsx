const Footer = () => {
  return (
    <footer className="border-t border-slate-800 mt-8">
      <div className="max-w-5xl mx-auto px-4 py-4 text-[11px] text-slate-500 flex justify-between">
        <span>
          © {new Date().getFullYear()} CCostaDev. All rights reserved.
        </span>
        <span>Built with React, TypeScript & Tailwind</span>
      </div>
    </footer>
  );
};

export default Footer;
