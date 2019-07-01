import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import './Search.css'

class Search extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            selectedOption: 'All',
        }
    }

    handleChange(event) {
        this.setState({
            selectedOption: event.target.value
        })
    }

    render() {
        const options = ['All', 'Student', 'Course', 'School', 'District', 'Program']
      
        return (
            <div className="form-wrapper">
                <form className="search-form">
                    <Field 
                        name="search-input" 
                        className="search-input"
                        component={TextField} />               
                    <Select 
                        name="search-options"
                        className="search-options"
                        onChange={this.handleChange}
                        value={this.state.selectedOption}>
                        {options.map((item, index) => (
                            <MenuItem value={item} key={index}>{item}</MenuItem>
                        ))}
                    </Select>
                    <Button 
                        size="small"
                        variant="contained"
                        color="secondary"
                        className="submit-button">
                        Submit
                    </Button>                
                </form>
            </div>
        )
    }
}

const ReduxFormSearch = reduxForm({
    form: 'search',
})(Search)

export default connect()(ReduxFormSearch)