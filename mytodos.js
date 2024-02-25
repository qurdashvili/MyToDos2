function myFanction() {
    var confirm = window.confirm("Do You Want To Save?");

    if(confirm == true){
     
    
    var valuee = document.getElementById("myinput").value;
    if (valuee) {

        const para = document.createElement("p");
        para.innerText = valuee;
        para.setAttribute("class", "pharagrpstyle");
        para.setAttribute("contenteditable", true);
        const chekbox = document.createElement("input");
        chekbox.setAttribute("type", "checkbox");
        const list = document.createElement("li");
        const div = document.createElement("div");
        div.setAttribute("class", "divliststyle");
        div.appendChild(chekbox);
        div.appendChild(list);

        
        para.addEventListener("click", (e) => {

            if (e.target.nextSibling) {
                e.target.nextSibling.remove();
            }

            const savebutton = document.createElement("button");
            savebutton.setAttribute("class", "btn btn-primary pe-3 ps-3 pt-2 pb-2");
            list.appendChild(savebutton);
            savebutton.innerText = "save";

            savebutton.addEventListener("click", (e) => {

                if (e.target.style.display == "none") {
                    e.target.style.display = "block";
                }

                
                var confirm = window.confirm("Do You Want To Save?");

                if(confirm == true){
                 e.target.style.display = "none";
                }
            })
       

        });

        list.appendChild(para);
        list.setAttribute("class", "liststyle");
        const button = document.createElement("button");
        button.setAttribute("class", "btn btn-danger");
        button.innerText = "remove";




        div.appendChild(button)

        document.getElementById("myinput").value = "";

        const textlist = document.getElementById("mylist");

        textlist.appendChild(div);
        button.addEventListener("click", (e) => {
           var confirm = window.confirm("Do You Want To Delete?");

           if(confirm == true){
            div.remove();
           }

            

        });
    }

}
}
