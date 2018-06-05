import React, { Component } from 'react';

class LeftSide extends Component{
    render(){
        const changeEvent = this.props.changeEvent;
        return(
            <div>
                <select name='category' className={'select-wrapper'} onChange={changeEvent}>
                    <option value="">All categories</option>
                    <option value="business">Business</option>
                    <option value="technology">Technology</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="general">General</option>
                    <option value="Health">health</option>
                    <option value="science">Science</option>
                    <option value="sports">Sports</option>
                </select>
                <select name='language' className={'select-wrapper'} onChange={changeEvent}>
                    <option value="">All language</option>
                    <option value="en">en</option>
                    <option value="de">de</option>
                    <option value="fr">fr</option>
                </select>
                <select name='country' className={'select-wrapper'} onChange={changeEvent}>
                    <option value="">All country</option>
                    <option value="au">au</option>
                    <option value="de">de</option>
                    <option value="gb">gb</option>
                    <option value="in">in</option>
                    <option value="it">it</option>
                    <option value="us">us</option>
                </select>
            </div>
        )
    }
}
export default LeftSide;