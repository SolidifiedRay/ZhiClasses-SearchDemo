import React from 'react';
import logo from './logo.svg';
import Header from './components/Header/Header.js';
import MainSearchBar from './components/MainSearchBar/MainSearchBar.js';
import SearchResultItem from './components/SearchResultItem/SearchResultItem.js';
import './Search.css';

class App extends React.Component {
	render(){
		return (
			<div>
			  <Header/>
			  <MainSearchBar/>
				<div className="searchMiddleDiv">
					<span className="searchResultNum">
						搜索到 0 条关于 的结果
					</span>
					<div className="searchCourseDiv">
						<div className="courseTitle">
							<ul>
								<li>
									<span>课程编号</span>
								</li>
								<li>
									<span>课程名</span>
								</li>
								<li>
									<span>学分</span>
								</li>
								<li>
									<span>教授名</span>
								</li>
							</ul>
						</div>
						<SearchResultItem/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
