import axios from 'axios';


/*function getData(){
	return [
		 {
		      "id": 5,
		      "name": "Promises are not promising",
		      "isClosed": false,
		      "createdAt": "2018-05-04T12:21:33.283Z"
		    },
		    {
		      "id": 6,
		      "name": "Data integrity checks failed",
		      "isClosed": false,
		      "createdAt": "2018-05-24T10:57:55.421Z"
		    }
	];
}*/

function load(){
	return function(dispatch){
		console.log(arguments);
		//let bugs = getData();
		axios.get('http://localhost:3030/bugs')
			.then(response => response.data)
			.then(bugs => dispatch({ type : 'LOAD', payload : bugs}));
	}
}

export default load;