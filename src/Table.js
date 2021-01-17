import React, {Component} from 'react';
import './App.css';
import './Table.css'


class Table extends Component
 {
 	constructor(props)
 	{
 		super(props);
 		this.state={
 			table : [] 			
 		}
 	}

 	componentDidMount() 
 	{
 		//localStorage.clear();
 		var tabledata= JSON.parse(localStorage.getItem('document'))

 		this.setState({
 			table : tabledata || []
 		})
 	}


  render(){
  return (
    <div className="App">
    <h1>Comparision Table</h1>

	    <div className="tableAlign">  
	    <table >
           	<tr>
			    <th colspan="3">Comparision Table</th>
			    
			 </tr>
			 <tr>
			    <th>ID</th>
			    <th>URL</th> 
			    <th>Title</th>
			 </tr>
			 </table>
           {this.state.table.map((p, index) => (
           
           	<div  >
          	 <table >
			  <tr>
			    <td className="tablemapAlign">{p.id}</td>
			    <td className="tablemapAlign">{p.url}</td>
			    <td className="tablemapAlign">{p.title}</td>
			   
			  </tr>
  			</table>
	     	 </div>

    	))}
        </div>
      
    </div>
  );
  }
}

export default Table;
