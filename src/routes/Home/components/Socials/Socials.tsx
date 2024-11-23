import styles from "./socials.module.scss";
import SocialButton from "./components/SocialButton";

const socials = [
  {
    title: "Instagram",
    url: "https://www.instagram.com/arkade.design94/",
    image: "instagram.svg",
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com/arkade.design94/",
    image: "instagram.svg",
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com/arkade.design94/",
    image: "instagram.svg",
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com/arkade.design94/",
    image: "instagram.svg",
  },
];

function Socials() {
  const socialButtons = socials.map((social) => <SocialButton {...social} />);

  return <ul className={styles.list}>{socialButtons}</ul>;
}

export default Socials;
