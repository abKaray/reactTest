import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';
import LeftSide from './LeftSide';
import PageNumber from './PageNumber';
import Articles from './Articles';
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
            todosPerPage: 6
        }
    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData() {
        axios.get('https://newsapi.org/v2/sources?language='+this.state.language+'&country='+this.state.country+'&category='+this.state.category+'&apiKey=1de614fe09614d109bd1527d6587bfb5')
            .then(res => {
                    if (this.state.category !== '') {
                        localStorage.setItem(this.state.category, JSON.stringify(res.data.sources));
                    }
                let cacheArticles =  localStorage.getItem(this.state.category);
                    if ( cacheArticles ) {
                        this.setState({ items: JSON.parse(cacheArticles) });
                        return;
                    }
                this.setState({items: res.data.sources});
            })
    }




    onChangeName = (e) => {
        let name = e.target.name;
        this.setState({[name]: e.target.value, currentPage: 1}, this.fetchData);
    };

    handleClick = (e) => {
        this.setState({
            currentPage: Number(e.target.id)
        });
    };


  render() {
        const {items, currentPage, todosPerPage} = this.state;

    return (
        <div className='wrapper'>
            <div className="left-side">
                <LeftSide changeEvent={this.onChangeName}/>
            </div>
            <div className="right-side">
            <Articles currentPage={currentPage} todosPerPage={todosPerPage} itemsArr={items}/>
                <ul className="pagination-list">
                    <PageNumber pageCurrent={currentPage} itemLength={items.length} itemPerPage={todosPerPage} clickEvent={this.handleClick} />
                </ul>
            </div>
        </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
