import React from 'react';
import { Route,Switch,Link } from "react-router-dom";
import './App.css';
import ScreenOne from "./components/ScreenOne";

class App extends React.Component {

  constructor (props) {
    super(props);
    this.state = { 
        screenonedata:[
          {
            id:"data1",
            label:"Name",
            type:"text",
            field:"input",
            value:"John",
          },
          {
            id:"data2",
            label:"ID",
            type:"number",
            field:"input",
            value:"12",
          },
          {
            id:"data3",
            label:"DOB",
            type:"date",
            field:"input",
            value:"2019-12-10",
          }
        ],
        screentwodata:[
          {
            id:"data1",
            label:"Company Id",
            type:"text",
            field:"input",
            value:"12",
          },
          {
            id:"data2",
            label:"Company Name",
            type:"Text",
            field:"input",
            value:"RBS",
          },
          {
            id:"data3",
            label:"Comment",
            type:"text",
            field:"textarea",
            value:"This is a sample comment",
          },
          {
            id:"data4",
            label:"Rating",
            field:"select",
            option:[5,4,3,2,1],
            value:"1",
          },
        ],
    };
  }

  render() {
    return (
      <div>
        <div id="main_outer_cntr">
          <div className="togglebox">
            <Link to="">Screen 1</Link>
            <Link to="screen2">Screen 2</Link>
          </div>
          <Route path="/" exact render={(props) => <ScreenOne {...props} tableprops={this.state.screenonedata} />}/>
          <Route path="/screen1" exact render={(props) => <ScreenOne {...props} tableprops={this.state.screenonedata} />}/>
          <Route path="/screen2" exact render={(props) => <ScreenOne {...props} tableprops={this.state.screentwodata} />}/>
        </div>
      </div>
    );
  }
}

export default App;




