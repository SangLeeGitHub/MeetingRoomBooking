import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const styles = theme => ({
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing.unit * 3,
    },
});

class TimeSelect extends React.Component {
    state = {
        timeCheckbox : {
            t1: false,
            t2: false,
            t3: false,
            t4: false,
            t5: false,
            t6: false,
            t7: false,
            t8: false,
            t9: false,
            ta: false,
            tb: false,
            tc: false,
            td: false,
            te: false,
            tf: false,
            tg: false,
            th: false,
            ti: false,
        }
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    render() {
        const { bookDate, bookRoom, data, classes } = this.props;
        const { timeCheckbox } = this.state;

        for (let key in (data[bookDate][bookRoom]))
        {
            timeCheckbox[key] = (data[bookDate][bookRoom])[key];
        }

        // this.setState({timeCheckbox: timeCheckbox});
        // for (let key in (data['2018-11-08']['1'])) this.setState({ [key]: (data['2018-11-08']['1'])[key] })

        return (
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">Select Time</FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Checkbox checked={timeCheckbox.t1} onChange={this.handleChange('t1')} value="t1" />
                            }
                            label="09:00-09:30"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={timeCheckbox.t2} onChange={this.handleChange('t2')} value="t2" />
                            }
                            label="09:30-10:00"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={timeCheckbox.t3} onChange={this.handleChange('t3')} value="t3" />
                            }
                            label="10:00-10:30"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={timeCheckbox.t4} onChange={this.handleChange('t4')} value="t4" />
                            }
                            label="10:30-11:00"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={timeCheckbox.t5} onChange={this.handleChange('t5')} value="t5" />
                            }
                            label="11:00-11:30"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={timeCheckbox.t6} onChange={this.handleChange('t6')} value="t6" />
                            }
                            label="11:30-12:00"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={timeCheckbox.t7} onChange={this.handleChange('t7')} value="t7" />
                            }
                            label="12:00-12:30"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={timeCheckbox.t8} onChange={this.handleChange('t8')} value="t8" />
                            }
                            label="12:30-13:00"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={timeCheckbox.t9} onChange={this.handleChange('t9')} value="t9" />
                            }
                            label="13:00-13:30"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={timeCheckbox.ta} onChange={this.handleChange('ta')} value="ta" />
                            }
                            label="13:30-14:00"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={timeCheckbox.tb} onChange={this.handleChange('tb')} value="tb" />
                            }
                            label="14:00-14:30"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={timeCheckbox.tc} onChange={this.handleChange('tc')} value="tc" />
                            }
                            label="14:30-15:00"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={timeCheckbox.td} onChange={this.handleChange('td')} value="td" />
                            }
                            label="15:00-15:30"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={timeCheckbox.te} onChange={this.handleChange('te')} value="te" />
                            }
                            label="15:30-16:00"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={timeCheckbox.tf} onChange={this.handleChange('tf')} value="tf" />
                            }
                            label="16:00-16:30"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={timeCheckbox.tg} onChange={this.handleChange('tg')} value="tg" />
                            }
                            label="16:30-17:00"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={timeCheckbox.th} onChange={this.handleChange('th')} value="th" />
                            }
                            label="17:00-17:30"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={timeCheckbox.ti} onChange={this.handleChange('ti')} value="ti" />
                            }
                            label="17:30-18:00"
                        />
                    </FormGroup>
                </FormControl>
            </div>
        );
    }
}

TimeSelect.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TimeSelect);