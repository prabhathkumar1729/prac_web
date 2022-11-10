let userid = location.search.substring(1);
fetch("https://jsonplaceholder.typicode.com/users/"+userid+"/posts")
.then((res) => res.json())
.then((data) => {console.log(data);})