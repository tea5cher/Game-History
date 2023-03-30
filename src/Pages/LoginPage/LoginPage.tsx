import styles from "./LoginPage.module.scss";
import video from "../../Assets/video/VideoBG.mp4";
import { LoginForm } from "../../Components";

function LoginPage() {
  return (
    <div className={styles.content}>
      <video src={video} autoPlay loop muted controls={false} className={styles.video}></video>
      <div className={styles.overlay}></div>
      <LoginForm />
    </div>
  );
}

export default LoginPage;
