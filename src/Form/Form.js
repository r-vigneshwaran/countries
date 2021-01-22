import React from 'react'
import { Toolbar, TextField, FormControl, InputLabel, Select, MenuItem,  Container } from "@material-ui/core";
import useStyles from "./styles";


const Form = ({ reference, setRef,setQuery }) => {
    const classes = useStyles();

    const handleChange = (event) => {
        setRef(event.target.value);
    };
    const handleTextChange = (event) => {
        setQuery(event.target.value);
        console.log(event.target.value)
    };

    return (
        <div>
            <Container className={classes.paper}>
                <Toolbar className={classes.toolbar}>
                    <TextField id="filled-basic" onChange={handleTextChange} label={reference} variant="filled" className={classes.search} />
                </Toolbar>
                <Toolbar className={classes.toolbar}>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label">Ref</InputLabel>
                        <Select
                            className={classes.select}
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={reference}
                            onChange={handleChange}
                            label="Ref"
                        >
                            <MenuItem value='name'>Name</MenuItem>
                            <MenuItem value='fullname'>Full Name</MenuItem>
                            <MenuItem value='alpha'>Code</MenuItem>
                            <MenuItem value='currency'>Currency</MenuItem>
                            <MenuItem value='lang'>Language</MenuItem>
                            <MenuItem value='capital'>Capital City</MenuItem>
                            <MenuItem value='callingcode'>Calling Code</MenuItem>
                            <MenuItem value='region'>Region</MenuItem>
                            <MenuItem value='regionalbloc'>Region Bloc</MenuItem>
                        </Select>
                    </FormControl>
                </Toolbar>
            </Container>
        </div>
    )
}

export default Form
