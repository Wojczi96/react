import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { updateSearchString } from '../../redux/store';

const SearchForm = () => {
    const dispatch = useDispatch();
    const handleSubmit = e => {
        e.preventDefault();
        const searchString = e.target[0].value;
        dispatch(updateSearchString(searchString));
    }

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput placeholder="Search..." />
            <div className={styles.searchButton}>
            <Button>
                <span className="fa fa-search" />
            </Button>
            </div>
        </form>
    );
  };

  export default SearchForm;