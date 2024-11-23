import styles from "../socials.module.scss";

interface SocialButtonProps {
  title: string;
  url: string;
  image: string;
}

function SocialButton({ title, url, image }: SocialButtonProps) {
  return (
    <a href={url} className={styles.listItem} target="_blank" rel="noreferrer">
      <img alt={image.split(".")[0]} src={`/${image}`} />
    </a>
  );
}

export default SocialButton;
