import styles from './Button.module.scss';

const Button = sente => {
    return (<button className={styles.button}> {sente.text} </button>)
}

export default Button;