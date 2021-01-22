import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
 
    paper: {
        display: 'flex',
        justifyContent: 'center',
        alignItem: 'center',
        flexWrap: 'wrap',
        marginBottom:20
    },
    [theme.breakpoints.down('sm')]:{
        paper: {
            display: 'flex',
            
        },
        search: {
            width:'300px'
        },
        select: {
            width:'300px'
        }
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 200,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));