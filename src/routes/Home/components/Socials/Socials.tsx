import styles from "./socials.module.scss";
import SocialButton from "./components/SocialButton";

const socials = [
  {
    title: "Instagram",
    url: "https://www.instagram.com/dark.arkade/",
    image: "instagram.svg",
  },
  {
    title: "TikTok",
    url: "https://www.tiktok.com/@dark.arkade",
    image: "tiktok.svg",
  },
  {
    title: "Spotify",
    url: "https://open.spotify.com/artist/2HmJ9J0hLsMp81HvQj7B1l?si=ExqUWDjmRSSm-sZ0TKTUtw",
    image: "spotify.svg",
  },
  {
    title: "SoundCloud",
    url: "https://soundcloud.com/dark-arkade",
    image: "soundcloud.svg",
  },
];

function Socials() {
  const socialButtons = socials.map((social) => <SocialButton {...social} />);

  return <ul className={styles.list}>{socialButtons}</ul>;
}

export default Socials;
