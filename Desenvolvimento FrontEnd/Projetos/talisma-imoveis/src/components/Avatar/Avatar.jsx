"use client";
import styles from "./Avatar.module.css";

const UserAvatar = ({
  src,
  alt = "Avatar do usuário",
  fallback = "U",
  size = "medium",
}) => {
  return (
    <div className={`${styles.avatarRoot} ${styles[size]}`}>
      {src ? (
        <img src={src} alt={alt} className={styles.image} />
      ) : (
        <span className={styles.avatarFallback}>{fallback}</span>
      )}
    </div>
  );
};

export default UserAvatar;
