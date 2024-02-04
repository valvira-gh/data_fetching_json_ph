import styles from '@/app/styles/form.module.css';
import React from 'react';
import { Button } from './Button';

const Form = () => {

    return (
        <form className={styles.form}>
            <div className="form-group">
                <label htmlFor="username">Username: </label>
                <input type="text" placeholder="Who is posting?" />
            </div>
            <div className="form-group">
                <label htmlFor="title">Username: </label>
                <input type="text" placeholder="Post title" />
            </div>
            <div className="form-group">
                <label htmlFor="username">Username: </label>
                <textarea placeholder="What's on your mind?"></textarea>
            </div>
            <Button />
        </form>
    )
}

export default Form;