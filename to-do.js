let list=[
    {
      userId: 1,
      id: 1,
      title: ["delectus aut autem"],
      completed: false
    },
    {
      userId: 1,
      id: 2,
      title: ["quis ut nam facilis et officia qui"],
      completed: false
    },
    {
      userId: 1,
      id: 3,
      title: ["fugiat veniam minus"],
      completed: false
    },
    {
      userId: 1,
      id: 4,
      title:[ "et porro tempora"],
      completed: true
    },
    {
      userId: 1,
      id: 5,
      title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
      completed: false
    },
    {
      userId: 1,
      id: 6,
      title: "qui ullam ratione quibusdam voluptatem quia omnis",
      completed: false
    },
    {
      userId: 1,
      id: 7,
      title: "illo expedita consequatur quia in",
      completed: false
    },
    {
      userId: 1,
      id: 8,
      title: "quo adipisci enim quam ut ab",
      completed: true
    },
    {
      userId: 1,
      id: 9,
      title: "molestiae perspiciatis ipsa",
      completed: false
    },
    {
      userId: 1,
      id: 10,
      title: "illo est ratione doloremque quia maiores aut",
      completed: true
    },
    {
      userId: 1,
      id: 11,
      title: "vero rerum temporibus dolor",
      completed: true
    },
    {
      userId: 1,
      id: 12,
      title: "ipsa repellendus fugit nisi",
      completed: true
    },
    {
      userId: 1,
      id: 13,
      title: "et doloremque nulla",
      completed: false
    },
    {
      userId: 1,
      id: 14,
      title: "repellendus sunt dolores architecto voluptatum",
      completed: true
    },
    {
      userId: 1,
      id: 15,
      title: "ab voluptatum amet voluptas",
      completed: true
    },


]
// let a=1;
// while (a) {
//     let menu=prompt(`1.umumiy ishlar ro'yxati\n 2.tugallangan ishlar ro'yxati\n 3.tugallanmagan ishlar ro'yxati\n 4.ro'yxatni taxrirlash\n 5.ro'yxatga reja qo'shish\n 6.olib tashlash`);
//     switch (menu[0].toLowerCase()) {
//         case "1":
//             alert(jadval(list));
//             a=1;
//             break;
//         case "2":
//             alert(jadval(bajarilgan(list)));
//             a=1;
//             break;
//         case "3":
//             jadval(bajarilmagan(list));
//             a=1;
//             break;
//         case "4":
//                 a=1;
//                 break;
//         case "5":
//             kiritish();
//             alert(jadval(list));
//             a=1;
//             break;
//         case "6":
//                 ochirish()
//                 alert(jadval(list));
//                 a=1;
//                 break;
//         default:
//             a=0;
//             break;
//     }
// }
// function jadval(list) {
//     let todo="";
//     for (let i = 0; i <=list.length-1; i++) {
//         todo= todo+ `ID:${list[i].id}  |  ${list[i].title}\n`;
//     }  
//     return todo;
// }
// function bajarilgan(list) {
//     let bajarilgan=list.filter((el)=>{
//         return el.completed===true});
//     return bajarilgan;
// }
// function bajarilmagan(list) {
//     let bajarilmagan=list.filter((el)=>{
//         return el.completed===false});
//     let n=prompt(jadval(bajarilmagan));
//     list[n-1].completed=confirm(`${list[n-1].id}-reja  ${list[n-1].title}\n bajarildimi`);
//     return bajarilmagan;
// }
// function kiritish() {
//     let y = 1;
//     while (y) {
//         let push1 = {
//             id: (prompt(`ID: kiriting`)),
//             title: [prompt(`rejani kiriting`)],
//             completed:""
//         }
//         let jvb = 1;
//         while (jvb) {
//             push1.completed = [prompt(`${push1.id} \n ${push1.title}\n\n ${push1.completed} javob qiymatini kiring)`)]
//             if ((push1.completed=="false")||(push1.completed=="true")) {
//                 list.push(push1);
//                 jvb = 0;
//             } else {
//                 alert(`siz kiritgan qiymat "False" yoki "True" bo'lishi kerak tekshirib qaytadan kiriting`);
//                 jvb = 1;
//             }
//         }
//         let yana = prompt(`Yana reja kiritishni istaysizmi \n 1______Ha \n 2______Yo'q`);
//         if ((yana[0].toLowerCase() == "2") || (yana.toLowerCase() == "yo'q")) y = 0;
//         else y=1;
//     }
// }
// function ochirish() {
//     let delate = 1;
//     while (delate) {
//         let n = prompt("O'chirmoqchi bo'lgan rejangizni raqamini kiriting\n" +jadval(list) );
//         let newArr = list.filter((el, index) => {
//             if (index != n - 1) return el;
//         });
//         list = newArr;
//         alert(jadval(list));
//         let yana = prompt(`Yana reja kiritishni istaysizmi \n 1______Ha \n 2______Yo'q`);
//         if ((yana[0].toLowerCase() == "2") || (yana.toLowerCase() == "yo'q")) delate = 0;
//         else delate=1;
//     }
// }
// function tahrirlash() {
//     let tahrir = 1;
//     while (tahrir) {
//     let n = prompt(
//         jadval(list) + "\nTahrirlamoqchi bo'lgan testingiz raqamini kiriting\n"
//     );
//     lest[n - 1] = {
//         id: prompt("Idni kiriting: ", list[n - 1].id),
//         title: ["rejani kiriting:",list[n - 1].title],
//         completed: prompt("qiymatini kiriting: ", list[n - 1].completed),
//     };
//     alert(jadval(list));
//     let yana = prompt(`Yana reja kiritishni istaysizmi \n 1______Ha \n 2______Yo'q`);
//     if ((yana[0].toLowerCase() == "2") || (yana.toLowerCase() == "yo'q")) tahrir = 0;
//     else tahrir=1;
//     }
// }

// let a=document.createElement("*")
// for (let i = 0; i < array.length; i++) {
//   const element = array[i];
  
// }


///////////////////////////////////////

// var allElements = document.getElementsByTagName("*");

// for (var i = 0, len = allElements.length; i < len; i++) {
//   var element = allElements[i];
//   element.style.padding = "0";
//   element.style.margin = "0";
//   element.style.boxSizing = "border-box";
// }

let root = document.querySelector("#root");
let container=document.createElement("div");
container.className="container";
root.appendChild(container);
// container.style.width="100%";
// container.style.maxWidth="600px"
// container.style.margin="0 auto";

let h1=document.createElement("h1");
h1.innerText="PHP TO DO Listg"
container.appendChild(h1);
// h1.style.fontWeight="30";
// h1.style.color="red";

let p=document.createElement("p");
p.innerText="Task is add successfully"
container.appendChild(p);
// p.style.fontWeight="20";
// p.style.color="green";

let inputbox=document.createElement("div");
inputbox.className="inputbox";
container.appendChild(inputbox);


let input=document.createElement("input");
// input.style.fontWeight="20";
// input.style.color="green";
// input.style.height="30px";
// input.style.outline="none";
// input.style.paddingLeft="5px";
// input.style.width="100%";
// input.style.maxWidth="500px";
inputbox.appendChild(input);

let inputbtn=document.createElement("button");
inputbtn.innerText="ADD";
let editing = false;
let newArr=list;
inputbtn.addEventListener("click", addTodo);

function maxid(newArr) {
  let max=[];
  for (let i = 0; i < newArr.length; i++) {
    max.push(newArr[i].id)
  }
  return(max.reduce((a,b)=> Math.max(a,b)))
  
}
function addTodo() {
  let newTodo = {
    userId: 1,
    id: maxid(newArr)+1,
    title: input.value,
    completed: false,
  };
    newArr.push(newTodo);
    console.log(newArr);
    showlist(newArr);
    input.value=""; 
}
inputbox.appendChild(inputbtn);

let id=null;

let okbtn=document.createElement("button");
okbtn.innerText="OK";
okbtn.style.display="none";

okbtn.addEventListener("click", editTodo);
function editTodo() {
  newArr[id].title=input.value;
  input.value = "";
  showlist(newArr);
  okbtn.style.display="none";
  inputbtn.style.display="";
}
inputbox.appendChild(okbtn);

let ul=document.createElement("ul");
container.appendChild(ul);

function showlist(list) {
  ul.innerHTML = "";
  for (let i = 0; i < list.length; i++) {
    let li=document.createElement("li");
    let div2=document.createElement("div");
    div2.className="div2";
    let text=document.createElement("p");
    let check=document.createElement("span");
    let check_icon=document.createElement("i");
  
    li.style.textDecoration = `${newArr[i].completed ? "line-through"  : ""}`;
    check_icon.style.display = `${newArr[i].completed ? "" : "none"}`;
    check_icon.className="bi bi-check-lg";
    check.appendChild(check_icon);
    div2.appendChild(check);

    text.textContent= list[i].title;
    div2.appendChild(text);
    li.appendChild(div2);
      
    div2.addEventListener("click", function () {
      newArr[i].completed = !newArr[i].completed;
      li.style.textDecoration = `${newArr[i].completed ? "line-through" : ""}`;
      check_icon.style.display = `${newArr[i].completed ? "" : "none"}`;
      console.log(newArr);
    });


    
    let div=document.createElement("div");
    div.className="div1";
    let edit=document.createElement("i");
    edit.className="bi bi-pencil-square";

    let del=document.createElement("i");
    del.className="bi bi-trash-fill ";
    del.style.color="red";
  
    del.addEventListener("click",function () {
      let n =list[i].id
      console.log(n);
      newArr = list.filter(el => {
      if (el.id != n) return el;});
      console.log(newArr);
      list = newArr;
      showlist(newArr);
    });
    edit.addEventListener("click",function () {
      okbtn.style.display="";
      inputbtn.style.display="none";
      input.value=newArr[i].title;
      newArr[i].title=input.value;
      console.log(newArr[i].title);
      id=i;
    }); 
    div.appendChild(edit);
    div.appendChild(del);
    li.appendChild(div);
    ul.appendChild(li);
  }
  
}

showlist(list);




// let h1=document.querySelector(".text")
// h1.innerHTML=`<h1>PHP TO DO List</h1><p>Task is add successfully</p>`


// let input=document.querySelector(".todos")
// input.innerHTML=`<input type="text" placeholder="kiriting"></input><button>Add</button>`


// function jadval(list) {
//   let todo="";
//   for (let i = 0; i <=list.length-1; i++) {
//       todo= todo+ `<li>ID:${list[i].id} ${list[i].title} <div ><input id="chek${i+1}" type="checkbox"><label for="chek${i+1}"> !!!</label> <input id="delate${i+1}" type="checkbox"><label for="delate${i+1}"> ????</label></li></div> `;
//   }  
//   return todo;
// }
// let ul=document.querySelector("ul")
// ul.innerHTML=jadval(list)

