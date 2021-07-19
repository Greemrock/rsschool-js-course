import { FooterConteiner, GitHub, Rss } from "./Footer.styled";

export const Footer: React.FC = () => {
  return (
    <FooterConteiner>
      <div>
        <GitHub
          href="https://github.com/greemrock"
          target="_blank"
          rel="noopener noreferrer"
        >
          greemrock
        </GitHub>
        <span>2021</span>
        <Rss
          href="https://rs.school/js/"
          target="_blank"
          rel="noopener noreferrer"
        />
      </div>
    </FooterConteiner>
  );
};
