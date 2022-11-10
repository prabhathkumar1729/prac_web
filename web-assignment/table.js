function rowclick(id,name){
location.href="user.html?"+id;
}
fetch("https://jsonplaceholder.typicode.com/users").then(
res => {
    res.json().then(
      data => {
        // console.log(data.data);
        if (data.length > 0) {

          var temp = "";
          data.forEach((itemData) => {
            temp += "<tr onclick='rowclick("+itemData.id+",\""+itemData.name+"\")'>";
            temp += "<td>" + itemData.name + "</td>";
            temp += "<td>" + itemData.email + "</td>";
            temp += "<td>" + itemData.phone + "</td>";
            temp += "<td>" + itemData.website + "</td>";
            temp += "<td>" + itemData.company.name + "</td></tr>";
        //     temp += "<td>" + itemData.employee_salary + "</td></tr>";
        console.log(typeof(itemData.name));
          });
          document.getElementById('data').innerHTML = temp;
          
        }
        console.log(data);
      }
    )
// console.log(res);
}
)