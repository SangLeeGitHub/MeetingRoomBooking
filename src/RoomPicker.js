import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 150,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});

class RoomPicker extends React.Component {
    state = {
        room: '',
    };

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value });
        console.log("Room " + value);
    };

    render() {
        const { onChange, classes } = this.props;

        return (
            <form className={classes.root} autoComplete="off">
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="room-picker">Select a Room</InputLabel>
                    <Select
                        native
                        value={this.state.room}
                        onChange={onChange}
                        inputProps={{
                            name: 'room',
                            id: 'room-picker',
                        }}
                    >
                        <option value={0}></option>
                        <option value={1}>Room 1</option>
                        <option value={2}>Room 2</option>
                        <option value={3}>Room 3</option>
                    </Select>
                </FormControl>
            </form>
        );
    }
}

RoomPicker.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RoomPicker);
