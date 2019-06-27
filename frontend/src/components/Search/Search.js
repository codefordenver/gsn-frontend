import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
const options = ['All', 'Student', 'Course', 'School', 'District', 'Program']

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedOption: '',
        }
    }

    handleClick() {
        console.log('handle click')
    }

    handleOnChange(e) {
        console.log('selected option', e.target.value);
        this.setState({ selectedOption: e.target.value})
    } 

    render() {
        const options = ['All', 'Student', 'Course', 'School', 'District', 'Program']
        return (
            <form>
                <div>
                    <textarea>

                    </textarea>
                    <Field name="search-options" component="select">
                        {options.map((item, index) => (
                            <option value={item} key={index}>{item}</option>
                        ))}
                    </Field>
                    <button>Submit</button>
                </div>
            </form>
        )
    }
}

const ReduxFormSearch = reduxForm({
    form: 'search',
})(Search)

export default connect()(ReduxFormSearch)