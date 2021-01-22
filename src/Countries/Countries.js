import React from 'react';
import { Grid } from "@material-ui/core";
import Country from "./Country/Country"
import useStyles from "./styles";
import { sizing } from '@material-ui/system';

const Countries = ({ countries }) => {
    const classes = useStyles();
    if (countries.length === 0) {
        return (
            <div className={classes.center}>
                <h1>search for countries</h1>
            </div>
        )
    }
    return (
        <>

        <Grid className={classes.container} sm={12} xs={12} md={12} container alignItems="stretch" spacing={3}>
            {countries.map((country) => (
                <Grid  key={country.alpha3Code}   item>
                    <Country country={country} />
                </Grid>
            )) }
        </Grid>
        </>
    )
}

export default Countries
