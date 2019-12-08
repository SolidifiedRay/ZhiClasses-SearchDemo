import React from 'react';
import s from './Search.css';
import SearchResultItem from '../../components/SearchResultItem/SearchResultItem.js';

class Search extends React.Component{
	
	render(){
		return (
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
		);
	}
}

export default Search;
