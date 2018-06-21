import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LeftSide extends Component{

    static defaultProps = {
        category: [{name: 'All Category', value: ''}, {name: "Business", value: 'business'}, {name: "Technology", value: 'technology'}, {name: "Entertainment", value: 'entertainment'}, {name: "General", value: 'general'}, {name: "Health", value: 'health'}, {name: "Science", value: 'science'},{name: "Sports", value: 'sports'}],
        language: ['en', 'de', 'fr'],
        country: [{name: 'All Country', value: ''}, {name: "au", value: 'au'}, {name: "de", value: 'de'}, {name: "gb", value: 'gb'}, {name: "in", value: 'in'}, {name: "it", value: 'it'}, {name: "us", value: 'us'}]
    };

    render(){
        const {changeEvent, filterFunc} = this.props;
        return(
            <div className="left-side">
                <input type="text" className='input-wrapper' placeholder='Search' onChange={filterFunc}/>
                <select name='category' className='select-wrapper' onChange={changeEvent}>
                    {LeftSide.defaultProps.category.map( (elem, indx) =>
                        <option key={indx} value={elem.value}>{elem.name}</option>)}
                </select>
                <select name='language' className='select-wrapper' onChange={changeEvent}>
                    <option value="">All language</option>
                    {LeftSide.defaultProps.language.map( (elem, indx) =>
                        <option key={indx} value={elem}>{elem}</option>)}
                </select>
                <select name='country' className='select-wrapper' onChange={changeEvent}>
                    {LeftSide.defaultProps.country.map( (elem, indx) =>
                        <option key={indx} value={elem.value}>{elem.name}</option>)}
                </select>
            </div>
        )
    }
}

export default LeftSide;

LeftSide.propTypes = {
    category: PropTypes.array,
    language: PropTypes.array,
    country: PropTypes.array,
    changeEvent: PropTypes.func,
    filterFunc: PropTypes.func
};