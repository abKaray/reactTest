import React, { Component } from 'react';

const Articles = (props) => {
    return (
        <div>
            {props.currentArticlePage.map((elems, indx) =>
                <div key={indx} className="article--item">
                    <div className={"article--item-author"}>{elems.name}</div>
                    <div className={'article--item-wrapper'}>
                        <a target="_blank" href={elems.url}>
                            <div className={"article--item-title"}>{elems.description}</div>
                            <div onClick={props.buttonClick} className={'article--item-background'}></div>
                        </a>
                        <button className="article--item-btn">Source link</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Articles;