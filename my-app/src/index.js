import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';
import LeftSide from './LeftSide';
import PageNumber from './PageNumber';
import Articles from './Articles';
import Paa from './Test';
import registerServiceWorker from './registerServiceWorker';

class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            category: '',
            language: '',
            country: '',
            items: [],
            currentPage: 1,
            todosPerPage: 6,
            filter: [],
            pageNumber: []
        }
    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData() {
        axios.get('https://newsapi.org/v2/sources?language='+this.state.language+'&country='+this.state.country+'&category='+this.state.category+'&apiKey=1de614fe09614d109bd1527d6587bfb5')
            .then(res => {
                this.setState({items: res.data.sources, filter: res.data.sources});
                for (let i = 1; i <= Math.ceil(this.state.items.length / this.state.todosPerPage); i++) {
                    this.setState({pageNumber: [...this.state.pageNumber, i]});
                }
            })
    }


    searchFilter = (e) => {
        let filterFunc = this.state.items.filter(function(item){
            return item.name.toLowerCase().search(
                e.target.value.toLowerCase()) !== -1;
        });
        this.setState({filter: filterFunc});
    };


    onChangeName = (e) => {
        let name = e.target.name;
        this.setState({[name]: e.target.value, currentPage: 1, pageNumber: []}, this.fetchData);
    };

    handleClick = (e) => {
        this.setState({
            currentPage: Number(e.target.id)
        });
    };


    render() {
        const {currentPage, todosPerPage, filter, pageNumber} = this.state;

        const indexOfLastPage = currentPage * todosPerPage;
        const indexOfFirstPage = indexOfLastPage - todosPerPage;
        const currentArticlePage = filter.slice(indexOfFirstPage, indexOfLastPage);

        return (
            <div className='wrapper'>
                <div className="left-side">
                    <LeftSide changeEvent={this.onChangeName} filterFunc={this.searchFilter}/>
                </div>
                <div className="right-side">
                    <Articles currentArticlePage={currentArticlePage} buttonClick={this.getComponent}/>
                    <PageNumber pageCurrent={currentPage} pageNumb={pageNumber}  clickEvent={this.handleClick} />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
