// Footer component for footer section
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      Created By
      <i className="fa-solid fa-heart"></i>
      <a
        href="https://www.linkedin.com/in/arvind302/"
        target="_blank"
        rel="noreferrer"
        title="Arvind Rathour Linkedin Profile"
      >
        Arvind Rathour
      </a>
      <i className="fa-solid fa-copyright"></i>
      {year}
      <strong>
        Khana<span>Khajana</span>
      </strong>
    </div>
  );
};

export default Footer;