import React from 'react';
import './MainSearchBar.css';

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
		        <input
					type="submit"
					value="搜  课"
					className="mainSearchButton"
					onClick={this.handleSubmit}
		        />
	  		</div>
		);
	}
}

export default MainSearchBar;
