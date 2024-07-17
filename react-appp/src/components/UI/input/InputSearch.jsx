import React from 'react';
import classes from './InputSearch.module.css'

function InputSearch(props) {
    return (
        <input
            placeholder={props.placeholder}
            className={classes.InputSearchClass}
            onKeyDown={e => props.searchFunction(e)}
            >
        </input>
    );
}

export default InputSearch;