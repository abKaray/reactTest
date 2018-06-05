import React, { Component } from 'react';

class Articles extends Component {
    render() {

        const currentPage = this.props.currentPage;
        const todosPerPage = this.props.todosPerPage;
        const itemsArr = this.props.itemsArr;

        const indexOfLastPage = currentPage * todosPerPage;
        const indexOfFirstPage = indexOfLastPage - todosPerPage;
        const currentArticlePage = itemsArr.slice(indexOfFirstPage, indexOfLastPage);

        let article = currentArticlePage.map( (elems, indx) => {
            return(
                <div key={indx} className="article--item">
                    <div className={"article--item-author"}>{elems.name}</div>
                    <div className={'article--item-wrapper'}>
                        <a target="_blank" href={elems.url}>
                            <div className={"article--item-title"}>{elems.description}</div>
                            <div className={'article--item-background'}></div>
                        </a>
                        <button className="article--item-btn">Source link</button>
                    </div>
                </div>
            )
        });

        return(
            article
        )
    }
}

export default Articles;