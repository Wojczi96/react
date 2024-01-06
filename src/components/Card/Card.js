import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import styles from './Card.module.scss';
import { addFavorite, removeCard,} from '../../redux/cardsRedux';

const Card = props => {
    const dispatch = useDispatch();
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addFavorite(props.id));
    }
    const handleRemoveClick = e => {
        e.preventDefault();
        dispatch(removeCard(props.id));
    }

    return (
        <li className={styles.card}>{props.title}
            <div>
                <button onClick={handleSubmit} className={styles.button}><i className={clsx("fa fa-star-o", props.isFavorite && styles.isFavorite)}></i></button>
                <button onClick={handleRemoveClick} className={styles.button}><i className="fa fa-trash"></i></button>
            </div>
        </li>
    )
}

export default Card;