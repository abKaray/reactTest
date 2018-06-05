import React, { Component } from 'react';

class PageNumber extends Component {
    render() {
        console.log('click');
        const pageNumber = [];

        const itemLength = this.props.itemLength;
        const itemPerPage = this.props.itemPerPage;
        const pageCurrent = this.props.pageCurrent;
        const clickEvent = this.props.clickEvent;

        for (let i = 1; i <= Math.ceil(itemLength / itemPerPage); i++) {
            pageNumber.push(i);
        }

        const renderPageNumbers = pageNumber.map(number => {
            return (
                <li key={number} id={number} className={pageCurrent === number ? 'pagination-list-item active' : 'pagination-list-item'} onClick={clickEvent}>
                    {number}
                </li>
            );
        });
        return(
            renderPageNumbers
        )
    }
}

export default PageNumber;