let userid = location.search.substring(1);
let selectedboxes = [];

function selectbox(postid) {
  if (selectedboxes.includes(postid)) {
    selectedboxes.splice(selectedboxes.indexOf(postid), 1);
  } else {
    selectedboxes.push(postid);
  }
}

function delpost(postid) {
  fetch("https://jsonplaceholder.typicode.com/posts/" + postid, {
    method: "DELETE",
  })
    .then((res) => res.status)
    .then((result) => {
      if (result == 200) {
        let elem = document.getElementById(postid);
        elem.remove();
        alert("Post deleted successfully");
        // location.reload();
      } else {
        alert("Error deleting post");
      }
    });
}

function multidel() {
  for (let postid of selectedboxes) {
    delpost(postid);
  }
}
function conf(postid){
  if (confirm("Are you sure you want to delete the post?")) {
    delpost(postid);
  } else {
    alert("Deletion cancelled");
  }
}
function multi_conf() {
  if (confirm("Are you sure you want to delete the selected post(s)?")) {
    multidel();
  } else {
    alert("Deletion cancelled");
  }
}
fetch("https://jsonplaceholder.typicode.com/users/" + userid + "/posts")
  .then((res) => res.json())
  .then((data) => {
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
        "<div class='buttons'><input type='checkbox' value='" +
        itemData.id +
        "' onclick='selectbox(" +
        itemData.id +
        ")'><i class='fa-solid fa-pen-to-square'></i><i class='fa-solid fa-trash-can' onclick='conf(" +
        itemData.id +
        ")'></i></div>";
      temp += "<div class='title'>" + itemData.title + "</div>";
      temp += "<div class='body'>" + itemData.body + "</div>";
      temp += "<div class='comments'>";
      let c_temp = "";
      let f = 1;
      for (let itemCmnt of cmntdata) {
        c_temp += "<div class='comment" + f + "'>";
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
      document.getElementById("container").innerHTML += temp;
    });
  });
