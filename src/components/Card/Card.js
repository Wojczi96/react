import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import styles from './Card.module.scss';
import { addFavorite } from '../../redux/store';

const Card = props => {
    const dispatch = useDispatch();
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addFavorite(props.id));

    }
    return (
        <li className={styles.card}>{props.title}
            <div>
                <button onClick={handleSubmit} className={styles.button}><i className={clsx("fa fa-star-o", props.isFavorite && styles.isFavorite)}></i></button>
            </div>
        </li>
    )
}

export default Card;