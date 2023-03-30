import styles from "./LoginForm.module.scss";

function LoginForm() {
  return (
    <div className={styles.wrap}>
      <div>Логин</div>
      <div>Пароль</div>
    </div>
  )
}

export default LoginForm