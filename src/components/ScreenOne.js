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
		this.setState({
			tableonecontent:this.props.tableprops,
			screenName:this.props.location.pathname.replace("/", "")===""?"Screen1":this.props.location.pathname.replace("/", ""),
		})
	}


	//onchange for inputs
	handleChange(index,e){
		const contentCopy = JSON.parse(JSON.stringify(this.state.tableonecontent));
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
			if (content.field === 'input') {
				return (
			  		<li key={content.id}>
			  		<label>{content.label}</label>
				     <input 
						id={content.id} 
						value={content.value}
						type={content.type}
						onChange={(e) => this.handleChange(index,e)}/>
					</li>
			    );
			} else if (content.field === 'textarea') {
				return (
			  		<li key={content.id}>
			  		<label>{content.label}</label>
			     	<textarea 
						id={content.id} 
						value={content.value}
						onChange={(e) => this.handleChange(index,e)}/>
					</li>
			    );
			} else if (content.field === 'select'){
				return (
			  		<li key={content.id}>
			  		<label>{content.label}</label>
			     		<select 
						id={content.id} 
						onChange={(e) => this.handleChange(index,e)}>
						{ 
								content.option.map((opt, index) => {
									return (
										<option key={index} value={opt}>{opt}</option>
									)
								})
						}
						</select>
					</li>
			    );
			}else{
				return null
			}
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