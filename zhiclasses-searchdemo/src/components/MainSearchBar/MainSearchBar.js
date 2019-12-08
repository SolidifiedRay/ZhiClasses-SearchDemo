import React from 'react';
import './MainSearchBar.css';
import { Link } from 'react-router-dom';

class MainSearchBar extends React.Component{
	
	render(){
		return (
			<div className="mainSearch">
		        <input
					onKeyDown={this.keypress}
					type="text"
					className="mainSearchText"
					placeholder="课程名、课程编号、教授名"
					onChange={this.handleChange}
		        />
		        <Link to='\search'>
			        <input
						type="submit"
						value="搜  课"
						className="mainSearchButton"
						onClick={this.handleSubmit}
			        />
		        </Link>
	  		</div>
		);
	}
}

export default MainSearchBar;
