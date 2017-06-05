var path1 = "/home/";
var path2 = "/a/./b/../../c/";
var path3 = "/../";
var path4 = "/home//foo/";
function pathSimp(str){
  var temp = str.split('/');
  var path = [];
  for(var i = 0;i < temp.length;i++){
    if(temp[i] == '..'){
        path.pop(temp[i]);
    }
    else if(temp[i] != "" && temp[i] != "."){
      path.push(temp[i]);
    }
  }
  return  "/"+path.join("/");
}
console.log("Given Path is \""+path1+"\" Simplified Path is",pathSimp(path1));
console.log("Given Path is \""+path2+"\" Simplified Path is",pathSimp(path2));
console.log("Given Path is \""+path3+"\" Simplified Path is",pathSimp(path3));
console.log("Given Path is \""+path4+"\" Simplified Path is",pathSimp(path4));
