const Contact = ({ icon, text, href, apply, onClick }) => {
  return (
    <a
      className="flex items-center space-x-2"
      href={href}
      rel="noreferrer"
      target={apply ? "_blank" : ""}
      onClick={onClick}
    >
      {icon}
      <span className="text-md md:text-lg">{text}</span>
    </a>
  );
};

export default Contact;
