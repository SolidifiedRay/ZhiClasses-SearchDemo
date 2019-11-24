import React from 'react';
import s from './SearchResultItem.css';

class SearchResultItem extends React.Component{
	
	render(){
		return (
			<div className="courseContent">
				<ul>
					<li>
						<span className="courseInfo courseNum">
							CS-UY 1134
						</span>
					</li>
					<li>
						<span className="courseInfo courseName">
							Data Structure and Algorithm
						</span>
					</li>
					<li>
						<span className="courseCom">
							4
						</span>
					</li>
					<li>
						<span className="courseProNaame">
							TBA
						</span>
					</li>
				</ul>
			</div>
		);
	}
}

export default SearchResultItem;
