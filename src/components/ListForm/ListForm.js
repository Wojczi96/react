import { useState } from "react";
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";
import { useDispatch } from "react-redux";
import styles from "./ListForm.module.scss"
import { addList } from "../../redux/store";


const ListForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addList({ title, description }));
        setTitle('');
        setDescription('');
    }
    return (
        <form onSubmit={handleSubmit} className={styles.listForm}>
            <div className={styles.inputWrapper}>
                <h3>Title:</h3> <TextInput value={title} onChange={e => setTitle(e.target.value)} />
            </div>
            <div className={styles.inputWrapper}>
                <h3>Description:</h3> <TextInput value={description} onChange={e => setDescription(e.target.value)} />
            </div>
            <div className={styles.buttonWrapper}>
                <Button>Add List</Button>
            </div>
        </form>
    )
}

export default ListForm;