let userid = location.search.substring(1);
function delpost(postid){
    fetch('https://jsonplaceholder.typicode.com/posts/'+postid, {
  method: 'DELETE',
}).then((res)=>res.status)
.then(result=>console.log(result));
}
fetch("https://jsonplaceholder.typicode.com/users/" + userid + "/posts")
.then((res) => res.json())
.then((data) => {
    // console.log(data);
    // if (data.length > 0) {
    var temp = "";
    data.forEach(async (itemData) => {
      // temp += func(itemData.id);
      // console.log(func(itemData.id));
      // temp += "</div></div>";
      let cmntres = await fetch(
        "https://jsonplaceholder.typicode.com/posts/" +
          itemData.id +
          "/comments"
      );
      let cmntdata = await cmntres.json();

      temp += "<div class='card' data-postid=" + itemData.id + ">";
      temp +=
        "<div class='buttons'><input type='checkbox'><i class='fa-solid fa-pen-to-square'></i><i class='fa-solid fa-trash-can' onclick='delpost("+itemData.id+")'></i></div>";
      temp += "<div class='title'>" + itemData.title + "</div>";
      temp += "<div class='body'>" + itemData.body + "</div>";
      temp += "<div class='comments'>";

      // if (cmntdata.length > 0) {
      var c_temp = "";
      var f = 1;
      for (let itemCmnt of cmntdata) {
        // cmntdata.forEach((itemCmnt)=>{
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

      // }
      temp += "</div></div>";
      //   console.log(temp);
      //   console.log(
      //     "---------------------------------------------------------------------------------------------"
      //   );
        document.getElementById("container").innerHTML = temp;
    });
    // }
  });
//   temp += "<div class='comment1'>";
//   temp += "<div class='commenter'"+itemData.
//       });
//     }
//   });

// async function func(postid) {
//   let fetchdata = await fetch(
//     "https://jsonplaceholder.typicode.com/posts/" + postid + "/comments"
//   );
//   let cmntdata = await fetchdata.json();
// //   console.log(cmntdata);
//   if (cmntdata.length > 0) {
//     var c_temp = "";
//     var f = 1;
//     for (let itemCmnt of cmntdata) {
//       // cmntdata.forEach((itemCmnt)=>{
//       c_temp += "<div class='" + "comment" + f + "'>";
//       c_temp += "<div class='commenter'>" + itemCmnt.name + "</div>";
//       c_temp += "<div class='comment'>" + itemCmnt.body + "</div>";
//       c_temp += "<div class='commenteremail'>" + itemCmnt.email + "</div>";
//       c_temp += "</div>";
//       if (f === 3) {
//         break;
//       }
//       f++;
//     }
//     return c_temp;
//   }
// }

// const result = fetch("https://jsonplaceholder.typicode.com/users/" + userid + "/posts")
//   .then((res) => res.json())
//   .then((data)=>{
//     if (data.length > 0) {
//         temp = "";
//         data.forEach((itemData) => {
//           temp += "<div class='card' data-postid=" + itemData.id + ">";
//           temp += "<div class='title'>" + itemData.title + "</div>";
//           temp += "<div class='body'>" + itemData.body + "</div>";
//           temp += "<div class='comments'>";
//         //   temp += func(itemData.id);
//           // console.log(func(itemData.id));
//           temp+= fetch("https://jsonplaceholder.typicode.com/posts/" + itemData.id + "/comments")
//           .then((cmntres)=>cmntres.json())
//           .then((cmntdata)=>{
//             if (cmntdata.length > 0) {
//                 var c_temp = "";
//                 var f = 1;
//                 for (let itemCmnt of cmntdata) {
//                   // cmntdata.forEach((itemCmnt)=>{
//                   c_temp += "<div class='" + "comment" + f + "'>";
//                   c_temp += "<div class='commenter'>" + itemCmnt.name + "</div>";
//                   c_temp += "<div class='comment'>" + itemCmnt.body + "</div>";
//                   c_temp += "<div class='commenteremail'>" + itemCmnt.email + "</div>";
//                   c_temp += "</div>";
//                   if (f === 3) {
//                     break;
//                   }
//                   f++;
//                 }
//                 temp += c_temp;
//                 temp += "</div></div>";
//                 console.log(temp);
//                 return temp;
//             }
//           })
//         //   temp += "</div></div>";
//         })
//     }

//   })
//   console.log(result);
//   result.then((res)=>{
//     console.log(res);
//   })

