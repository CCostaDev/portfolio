const Contact = () => {
  return (
    <section id="contact" className="py-12 border-t border-slate-800">
      <h2 className="text-xl font-semibold mb-4">Contact</h2>
      <p className="text-sm text-slate-300 mb-4 max-w-md">
        If you'd like to chat about a junior role, a project, or anything
        dev-related, feel free to reach out.
      </p>
      <div className="flex flex-wrap gap-4 text-sm">
        <a
          href="mailto:ccosta.business@gmail.com"
          className="px-4 py-2 rounded-lg border border-slate-600 hover:border-accent transition"
        >
          ccosta.business@gmail.com
        </a>
        <a
          href="https://github.com/CCostaDev"
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 rounded-lg border border-slate-600 hover:border-accent transition"
        >
          GitHub
        </a>
      </div>
    </section>
  );
};

export default Contact;
