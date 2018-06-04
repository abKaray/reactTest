import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';
// import Second from './App';
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




    leftSide() {
        return (<div>
            <select className={'select-wrapper'} onChange={this.changeCategory}>
                <option value="">All categories</option>
                <option value="business">Business</option>
                <option value="technology">Technology</option>
                <option value="entertainment">Entertainment</option>
                <option value="general">General</option>
                <option value="Health">health</option>
                <option value="science">Science</option>
                <option value="sports">Sports</option>
            </select>
            <select className={'select-wrapper'} onChange={this.changeLanguage}>
                <option value="">All language</option>
                <option value="en">en</option>
                <option value="de">de</option>
                <option value="fr">fr</option>
            </select>
            <select className={'select-wrapper'} onChange={this.changeCountry}>
                <option value="">All country</option>
                <option value="au">au</option>
                <option value="de">de</option>
                <option value="gb">gb</option>
                <option value="in">in</option>
                <option value="it">it</option>
                <option value="us">us</option>
            </select>
        </div>)
    }

    changeCategory = (e) => {
        this.setState({category: e.target.value, currentPage: 1}, this.fetchData);
        console.log(this.state.category);
    };
    changeLanguage = (e) => {
        this.setState({language: e.target.value, currentPage: 1}, this.fetchData);
        console.log(this.state.country);
    };
    changeCountry = (e) => {
        this.setState({country: e.target.value, currentPage: 1}, this.fetchData);
    };
    handleClick = (event) => {
        let targ = event.target;
        console.log(targ);
        targ.classList.add('active');
        this.setState({
            currentPage: Number(event.target.id)
        });
    };


  render() {
        const {items, currentPage, todosPerPage} = this.state;

      const indexOfLastPage = currentPage * todosPerPage;
      const indexOfFirstPage = indexOfLastPage - todosPerPage;
      const currentArticlePage = items.slice(indexOfFirstPage, indexOfLastPage);

      console.log(currentPage);

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

      const pageNumber = [];
      for (let i = 1; i <= Math.ceil(items.length / todosPerPage); i++) {
          pageNumber.push(i);
      }

      const renderPageNumbers = pageNumber.map(number => {
          console.log(number);
          return (
              <li key={number} id={number} className={currentPage == number ? 'pagination-list-item active' : 'pagination-list-item'} onClick={this.handleClick}>
                  {number}
              </li>
          );
      });
    return (
        <div className='wrapper'>
            <div className="left-side">
                {this.leftSide()}
            </div>
            <div className="right-side">
            {article}
                <ul className="pagination-list">
                    {renderPageNumbers}
                </ul>
            </div>
        </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
