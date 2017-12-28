class Graph {
  constructor(dinh, arrSubj){
	this.dinh = dinh;
	// this.list = Array(dinh).fill([]);
	this.list = [];
	for(let i=0; i<dinh; i++)
	  this.list.push([]);
	this.subjects = arrSubj;
  }
  
  static fromArr(arr){
	  var listSubject = [];
	  for(let i=0; i<arr.length; i++){
		  if(listSubject.indexOf(arr[i].subject) === -1){
			  listSubject.push(arr[i].subject);
		  }
	  }
	  
	  var graph = new Graph(listSubject.length, listSubject);
	  
	//   for(let i=0; i<listSubject.length-1; i++){
	//       for(let j=i+1; j<listSubject.length; j++){
	//           for(let k=0; k<arr.length; k++){
	//               if()
	//           }
	//       }
	//   }
	
	  var listSubjectsOfStudent = {};
	  for(let i=0; i<arr.length; i++){
	  	let obj = arr[i];
		if(!listSubjectsOfStudent.hasOwnProperty(obj.name)){
			listSubjectsOfStudent[obj.name] = [obj.subject];
			
		} else {
			listSubjectsOfStudent[obj.name].push(obj.subject);
		}
	  }
	  
	  var added = [];
	  Object.keys(listSubjectsOfStudent).forEach((key) => {
	  	for(let i=0; i<listSubjectsOfStudent[key].length-1; i++){
	  		for(let j=i+1; j<listSubjectsOfStudent[key].length; j++)	{
	  			var u = listSubject.indexOf(listSubjectsOfStudent[key][i]);
	  			var v = listSubject.indexOf(listSubjectsOfStudent[key][j]);
	  			graph.addEdge(u, v);
	  		}
	  	}
	  });
	  
	  //console.log(JSON.stringify(graph));
	  //console.log(JSON.stringify(listSubjectsOfStudent));
	  
	  return graph;
  }
  
  addEdge(u, v){
  	//check value: trung`, dao nguoc ko can ? (u,v)==(v,u)
  	if(this.list[u].indexOf(v) === -1){
		this.list[u].push(v);
		this.list[v].push(u);
  	}
  }
  coloring(){
	var result = Array(this.dinh).fill(-1);
	result[0] = 0;  // assign first vertex color
	
	var availableColor = Array(this.dinh).fill(true);

	for(let i=1; i<this.dinh; i++){
	  this.list[i].forEach((node)=> {
		if(result[node] !== -1){
		  availableColor[result[node]] = false;
		}
	  });

	  var color;
	  for(let i=0; i<this.dinh; i++){
		if(availableColor[i]){
		  color = i;
		  break;
		}
	  }

	  result[i] = color;

	  availableColor = Array(this.dinh).fill(true);
	}

	return result;
  }
}
module.exports = Graph;