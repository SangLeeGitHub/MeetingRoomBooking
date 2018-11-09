import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import DatePicker from './DatePicker';
import RoomPicker from "./RoomPicker";
import TimeSelect from "./TimeSelect";

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 150,
    },
    root: {
        flexGrow: 1,
        display: 'flex',
        flexWrap: 'wrap',
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});

class App extends React.Component {

    state = {
        book: {
            '2018-11-08': {
                '1': {t1: true, t3: true, t5: true }
            }
        }
    };

    handleChange = function (e) {
        console.log(e);
    };

    render() {
        const {classes} = this.props;
        const {book} = this.state;


        return (
            <div className={classes.root}>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>회의실 예약 시스템</Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <DatePicker />
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <RoomPicker onChange={this.handleChange}/>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <TimeSelect bookDate='2018-11-08' bookRoom='1' data={book} />
                        </Paper>
                    </Grid>
                    <Grid item xs={2}>
                        <Paper className={classes.paper}>
                            <div>
                                <Button fullWidth={10} variant="outlined" className={classes.button}>
                                    Cancel
                                </Button>
                                <p/>
                                <Button fullWidth={10} variant="outlined" color="primary" className={classes.button}>
                                    Cancel Book
                                </Button>
                                <p/>
                                <Button fullWidth={10} variant="outlined" color="secondary" className={classes.button}>
                                    Book
                                </Button>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>

                    </Grid>
                </Grid>
            </div>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);

// export default App;
