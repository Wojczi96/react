import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

const SearchForm = () => {
    return (
        <form className={styles.searchForm}>
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