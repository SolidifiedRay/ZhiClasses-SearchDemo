import React from 'react';
import s from './SearchResultItem.css';

class SearchResultItem extends React.Component{
	
	render(){
		return this.props.courses.map((course) => (
			<div className="courseContent">
				<ul>
					<li>
						<span className="courseInfo courseNum">
							{course.userId}
						</span>
					</li>
					<li>
						<span className="courseInfo courseName">
							{course.id}
						</span>
					</li>
					<li>
						<span className="courseCom">
							{course.title}
						</span>
					</li>
					<li>
						<span className="courseProNaame">
							{course.completed}
						</span>
					</li>
				</ul>
			</div>
		));
	}
}

export default SearchResultItem;
