let userid = location.search.substring(1);
let selectedboxes = [];
function selectbox(postid) {
    if (selectedboxes.includes(postid)) {
        selectedboxes.splice(selectedboxes.indexOf(postid), 1);
        alert("Post unselected");
    } else {
        selectedboxes.push(postid);
        alert("Post selected");
    }
    console.log(selectedboxes);
}
function delpost(postid) {
  fetch("https://jsonplaceholder.typicode.com/posts/" + postid, {
    method: "DELETE",
  })
    .then((res) => res.status)
    .then((result) =>{
      if (result == 200) {
        let elem = document.getElementById(postid);
        elem.parentNode.removeChild(elem);
        alert("Post deleted successfully");
        // location.reload();
      } else {
        alert("Error deleting post");
      }
    });
}
fetch("https://jsonplaceholder.typicode.com/users/" + userid + "/posts")
  .then((res) => res.json())
  .then((data) => {
    // var a="";
    // var temp = "";
    data.forEach(async (itemData) => {
      let cmntres = await fetch(
        "https://jsonplaceholder.typicode.com/posts/" +
          itemData.id +
          "/comments"
      );
      let cmntdata = await cmntres.json();
      let temp = "";
      temp += "<div class='card' id=" + itemData.id + ">";
      temp +=
        "<div class='buttons'><input type='checkbox' value='"+itemData.id+"' onclick='selectbox("+itemData.id+")'><i class='fa-solid fa-pen-to-square'></i><i class='fa-solid fa-trash-can' onclick='delpost(" +
        itemData.id +
        ")'></i></div>";
      temp += "<div class='title'>" + itemData.title + "</div>";
      temp += "<div class='body'>" + itemData.body + "</div>";
      temp += "<div class='comments'>";
      let c_temp = "";
      let f = 1;
      for (let itemCmnt of cmntdata) {
        c_temp += `<div class="comment${f}">`;
        c_temp += "<div class='commenter'>" + itemCmnt.name + "</div>";
        c_temp += "<div class='comment'>" + itemCmnt.body + "</div>";
        c_temp += "<div class='commenteremail'>" + itemCmnt.email + "</div>";
        c_temp += "</div>";
        if (f === 3) {
          break;
        }
        f++;
      }
      temp += c_temp;
      temp += "</div></div>";

      // console.log(temp+"temp");
      a=temp;
      // console.log(a+"a");
      document.getElementById("container").innerHTML += temp;
    });
    // console.log(a+"a");
  });
