import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';


const ColumnForm = props => {
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        props.action({ title: title, icon: icon});
        setTitle('');
        setIcon('');
    };

	return (
        <form onSubmit={handleSubmit} className={styles.columnForm}>
            <div className={styles.inputWrapper}>
                <h3>Title:</h3> <TextInput value={title} onChange={e => setTitle(e.target.value)} />
            </div>
            <div className={styles.inputWrapper}>
                <h3>Icon:</h3> <TextInput value={icon} onChange={e => setIcon(e.target.value)} />
            </div>
            <div className={styles.buttonWrapper}>
                <Button>Add column</Button>
            </div>
        </form>
	);
};

export default ColumnForm;