import React from 'react';
import './main.css';

class ScreenOne extends React.Component {
	constructor (props) {
		super(props);
		this.state = { 
			tableonecontent:[],
			tabletwocontent:[],
			screenName:'',
		};
		this.handleChange = this.handleChange.bind(this);
		this.populatetablecontent = this.populatetablecontent.bind(this);
	}

	//Intial Call
	componentDidMount(){
		let screen = this.props.location.pathname;
		this.setState({
			tableonecontent:this.props.tableprops,
			screenName:screen.replace("/", "")===""?"Screen1":screen.replace("/", ""),
		})
	}


	//onchange for inputs
	handleChange(index,e){
		let contentCopy = JSON.parse(JSON.stringify(this.state.tableonecontent));
		//make changes to value
		contentCopy[index].value = e.target.value;
		this.setState({
			tableonecontent:contentCopy 
		}) 
	}


	/// populate seacont table with firat bale content
	populatetablecontent(){
		this.setState({
			tabletwocontent:this.state.tableonecontent
		})
	}


	render() {

		// mapping throu the content
		const tbonecnt=this.state.tableonecontent.map((content, index) => {
			let tableContent;
			if (content.field === 'input') {
			     tableContent = <input 
								id={content.id} 
								value={content.value}
								type={content.type}
								onChange={(e) => this.handleChange(index,e)}/>
			} else if (content.field === 'textarea') {
			     tableContent = <textarea 
								id={content.id} 
								value={content.value}
								onChange={(e) => this.handleChange(index,e)}/>
			} else if (content.field === 'select'){
				const options = content.option.map((opt, index) => {
					return (
						<option key={index} value={opt}>{opt}</option>
					)
				});
				tableContent = <select 
								id={content.id} 
								onChange={(e) => this.handleChange(index,e)}>
								{options}
							</select>
			}

		  return (
		  	<li key={content.id}>
		  		<label>{content.label}</label>
		  		{tableContent}
			</li>
		  );
		});

		// mapping throu the content
		const tbtwocnt=this.state.tabletwocontent.map((content, index) => {
		  return (
		  	<li key={content.id}>
		  		<label>{content.label}</label>
		  		<p>{content.value}</p>
			</li>
		  );
		});
		
		return (
			<div id="outer_cntr">	
				<h3>{this.state.screenName}</h3>	
				<div className="tableboxContainer">
					<div className="tableBox">
						<h5>First Table</h5>
						<ul>
							{tbonecnt}
						</ul>
					</div>
					<div className="tableBox">
						<h5>Second Table</h5>
						<ul>
							{tbtwocnt}
						</ul>
					</div>
				</div>
				<div className="populatebtn" onClick={this.populatetablecontent}>Populate</div>
			</div>
		);
	}

}
export default ScreenOne