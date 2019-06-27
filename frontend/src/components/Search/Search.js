import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import './Search.css'

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedOption: '',
        }
    }

    handleClick() {  //feel free to remove handleClick and handleOnChange if not needed
        console.log('handle click')
    }

    handleOnChange(e) {
        console.log('selected option', e.target.value);
        this.setState({ selectedOption: e.target.value})
    } 

    render() {
        const options = ['All', 'Student', 'Course', 'School', 'District', 'Program']
        return (
            <div className="form-wrapper">
                <form className="search-form">
                    <Field 
                        className="search-input"
                        name="search-input" 
                        component="textarea" />               
                    <Field 
                        className="search-options"
                        name="search-options" 
                        component="select">
                        {options.map((item, index) => (
                            <option value={item} key={index}>{item}</option>
                        ))}
                    </Field>
                    <button className="submit-button">Submit</button>                
                </form>
            </div>
        )
    }
}

const ReduxFormSearch = reduxForm({
    form: 'search',
})(Search)

export default connect()(ReduxFormSearch)