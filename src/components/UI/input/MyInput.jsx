import React from 'react';
import classes from './MyInput.module.css'

const MyInput = React.forwardRef((props :PropsWithChildren<{}>, ref) => {
    return (
        <input ref={ref} className={classes.myInput} {...props}/>
        );
});

export default MyInput;