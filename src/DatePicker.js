import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from "@material-ui/core/FormControl/FormControl";

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 150,
    },
});

class DatePicker extends React.Component {

    state = {
        bookDate: '',
    };

    handleChange = (e) => {

        const {name, value} = e.target;
        this.setState({[name]: value });
        console.log("Date " + value);
    };

    render() {
        const { classes } = this.props;

        return (
            <form className={classes.container} noValidate>
                <FormControl className={classes.formControl}>
                    <TextField
                        id="date"
                        label="Select Date"
                        type="date"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={this.handleChange}
                    />
                </FormControl>
            </form>
        );
    }
}

DatePicker.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DatePicker);