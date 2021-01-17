import React, {Component} from 'react';
import './App.css';
import './Photo.css'


class Photo extends Component
 {
 	constructor(props)
 	{
 		super(props);
 		this.state={
 			products : [] 			
 		}
 	}

 	componentDidMount() 
 	{
 		fetch("https://jsonplaceholder.typicode.com/photos")
    .then(response =>  response.json())
    .then(resData => {
     //  console.log(JSON.stringify(resData))
       //do your logic here       
       //let person = resData.results
        this.setState({ products: resData }); //this is an asynchronous function
    })	
  
 	}

 	Compare = (p1) =>{
 		if(!JSON.parse(localStorage.getItem("document"))){
 			let allProduct = [];
	 			allProduct.push(p1)
	 			//console.log(allProduct);

	 			localStorage.setItem("document", JSON.stringify(allProduct));
	 			//console.log(allProduct);

	 			window.alert("Added to Compare Table");
 		}
 			else{
 		 //console.log("p is", p1);
 		
 		var cartValue= [];
 		 cartValue = JSON.parse(localStorage.getItem("document"))
 		//console.log("Photo list", cartValue);
		cartValue.push(p1)
	
		localStorage.setItem("document", JSON.stringify(cartValue));
 		window.alert(" Added to Compare Table");
 	}
}

Remove = (p1) =>{
 		
 			
 		 //console.log("p is", p1);
 		
 		var cartValue= [];
 		 cartValue = JSON.parse(localStorage.getItem("document"))
 		
 		 let index = cartValue.findIndex(cartValue => cartValue.id === p1.id);
		cartValue.splice(index,1)
		//console.log("Remove list", cartValue);
	
		localStorage.setItem("document", JSON.stringify(cartValue));
 		window.alert(" Removing Photo from Table", index);
 	}

 	

  render(){
  return (
    <div className="App">
    <h1>Photo Listing</h1>

    <div className="productAlign">  
           {this.state.products.map((p, index) => (
           	<div className="mapAlign">
           	<p ><b>Image:</b> {p.url}</p>
	        <p ><b> Title:</b> {p.title}</p>
	        <p ><b> Id:</b> {p.id}</p>
	        <p ><b> URL:</b> {p.url}</p>
	       
	     	<button onClick={()=> this.Compare(p)}>Compare</button>
	     	<button onClick={()=> this.Remove(p)}>Remove</button>
	     	

        </div>
    	))}
        </div>
      
    </div>
  );
  }
}

export default Photo;
