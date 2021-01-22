import React from 'react'
import {  Card, CardActionArea, CardActions, CardMedia, CardContent, Typography, Button } from "@material-ui/core";
import useStyles from "./styles";


const Country = ({ country }) => {
    const classes = useStyles();
    return (
        <div >
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={country.flag}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            country name : {country.name}
                        </Typography>
                        <Typography variant="body1" color="textSecondary" component="p">
                            country capital :  {country.capital}
                        </Typography>
                        <Typography variant="body1" color="textSecondary" component="p">
                            country alphacode : {country.alpha2Code}
                        </Typography>
                        <Typography variant="body1" color="textSecondary" component="p">
                            region:  {country.region}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        time zone : {country.timezones}
                    </Button>
                    <Button size="small" color="primary">
                        population : {country.population}
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default Country
