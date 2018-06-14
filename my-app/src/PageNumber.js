import React, { Component } from 'react';

const PageNumber = (props) => {
    return(
        <ul className="pagination-list">
            {props.pageNumb.map( (number) => {
                return (
                    <li key={number} id={number} className={props.pageCurrent === number ? 'pagination-list-item active' : 'pagination-list-item'} onClick={props.clickEvent}>
                        {number}
                    </li>
                );
            })}
        </ul>
    )
};

export default PageNumber;