import { useSelector } from "react-redux";
import PageTitle from "../PageTitle/PageTitle";
import { getAllFavorite } from "../../redux/cardsRedux";
import Card from "../Card/Card";
import styles from "./Favorite.module.scss"



const Favorite = () => {
    const favorite = useSelector(state => getAllFavorite(state));

    return (
        <div>
            <PageTitle>FAVORITE</PageTitle>
            <div className={styles.columnWrapper}>
                <article className={styles.column}>
                    <ul className={styles.cards}>
                        {favorite.map(card => <Card key={card.id} id={card.id} title={card.title} card={card} isFavorite={card.isFavorite}/>)}
                    </ul>
                </article>
            </div>
        </div>
    )
}
export default Favorite;