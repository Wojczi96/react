import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/store';


const ColumnForm = (props) => {
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addColumn({ title, icon, listId: props.listId }));
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