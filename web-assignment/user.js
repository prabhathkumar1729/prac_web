let userid = location.search.substring(1);
function delpost(postid) {
  fetch("https://jsonplaceholder.typicode.com/posts/" + postid, {
    method: "DELETE",
  })
    .then((res) => res.status)
    .then((result) => console.log(result));
}
fetch("https://jsonplaceholder.typicode.com/users/" + userid + "/posts")
  .then((res) => res.json())
  .then((data) => {
    var temp = "";
    data.forEach(async (itemData) => {
      let cmntres = await fetch(
        "https://jsonplaceholder.typicode.com/posts/" +
          itemData.id +
          "/comments"
      );
      let cmntdata = await cmntres.json();
      temp += "<div class='card' data-postid=" + itemData.id + ">";
      temp +=
        "<div class='buttons'><input type='checkbox'><i class='fa-solid fa-pen-to-square'></i><i class='fa-solid fa-trash-can' onclick='delpost(" +
        itemData.id +
        ")'></i></div>";
      temp += "<div class='title'>" + itemData.title + "</div>";
      temp += "<div class='body'>" + itemData.body + "</div>";
      temp += "<div class='comments'>";
      var c_temp = "";
      var f = 1;
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
      document.getElementById("container").innerHTML = temp;
    });
  });
