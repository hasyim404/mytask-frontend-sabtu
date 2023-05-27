import StyledFooter from "./Footer.styled";

const Footer = () => {
  return (
    <StyledFooter>
      <footer className="footer">
        <h2 className="footer__title">Movie App</h2>
        <p className="footer__author">
          <a href="https://github.com/hasyim404">@hasyim404</a>
        </p>
      </footer>
    </StyledFooter>
  );
};

export default Footer;
