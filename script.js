var cardcontainer=document.getElementById("cardcontainer")
var cardname=document.getElementById('cardname')
var addtaskpopup=document.getElementById('addtaskpopup')
var parent=document.getElementById('parent')
var addItemPopup=document.getElementById('addItemPopup')
var notask=document.getElementById('notask')
var singlecard=document.getElementById('singleCard')
var backbtn=document.getElementById('backbtn')
var head=document.getElementById('head')
var additem=document.getElementById('additem')
let issinglecard=false
//show task button
function showPopup(){
    addtaskpopup.classList.remove("hide")
    parent.classList.add('blur')
    
}

function hideAddTask(){
    addtaskpopup.classList.add("hide")
    parent.classList.remove('blur')
}

function addCard(){
    notask.classList.add('hide')
     hideAddTask()
    //create element
    let card=document.createElement("div")
    let heading=document.createElement("h4")
    let hr=document.createElement("hr")
    let subTasklist=document.createElement("div")
    let addSubtask=document.createElement("button")
    let deletCard=document.createElement("button")
    
    //append child
    cardcontainer.appendChild(card)
    card.appendChild(heading)
    card.appendChild(hr)
    card.appendChild(subTasklist)
    card.appendChild(addSubtask)
    card.appendChild(deletCard)

    heading.innerText=cardname.value
    cardname.value=""//clearing the popup
    addSubtask.innerHTML='<i class="fa-solid fa-circle-plus"></i>'
    deletCard.innerHTML='<i class="fa-solid fa-trash"></i>'
    card.classList.add("card")

    deletCard.addEventListener("click",() => {
        card.remove()
        if(cardcontainer.innerText==="")
        notask.classList.remove('hide')
    })

    addSubtask.addEventListener("click",function(event){
        addItemPopup.classList.remove('hide')
        parent.classList.add('blur')

        let subtaskPopup=document.createElement("div")
        let subtaskPopupheading=document.createElement("h3")
        let subtaskname=document.createElement("input")
        let addbutton=document.createElement("button")
        let closebutton=document.createElement("button")
        
        addItemPopup.appendChild(subtaskPopupheading)
        addItemPopup.appendChild(subtaskname)
        addItemPopup.appendChild(addbutton)
        addItemPopup.appendChild(closebutton)

        subtaskPopupheading.innerText="Add Task"
        addbutton.innerText="Add"
        addbutton.setAttribute("class","add")
        closebutton.innerText="Close"
        closebutton.setAttribute("class","add")
        closebutton.addEventListener('click',()=>{
            addItemPopup.classList.add('hide')
            parent.classList.remove('blur')
        })


        addbutton.addEventListener('click',()=>{
            addItemPopup.classList.add('hide')
            parent.classList.remove('blur')
            let item=document.createElement('div')
            let itemtext=document.createElement('span')
            let markdone=document.createElement('button')
                  
                

            //append
            item.appendChild(itemtext)
            item.appendChild(markdone)
            item.setAttribute("class","task")
            itemtext.setAttribute("class","span")
            markdone.setAttribute("class","markdone")

            //values
            itemtext.innerText=subtaskname.value
            markdone.innerText='Markdone'
            item.classList.add('markdone')
            item.appendChild(markdone)
            markdone.addEventListener('click',()=>{
                itemtext.style.textDecoration = "line-through"
                markdone.classList.add('hide')
            })
            

            subTasklist.appendChild(item)
            addItemPopup.innerText=""
        })
        
    })

    heading.addEventListener('click',()=>{
        singlecard.classList.remove('hide')
        cardcontainer.classList.add('hide')
        notask.classList.add('hide')
        issinglecard=true
        let copycard=card.cloneNode(true)
        singlecard.appendChild(copycard)
        copycard.style.card="center"
        parent.firstElementChild.classList.remove('hide')
        backbtn.classList.remove('hide')
        copycard.lastElementChild.addEventListener('click',()=>{
            card.remove()
            copycard.remove()
            if(cardcontainer.innerText==="");
           
    })
    //markdone
    
    let markdoneClone=copycard.querySelectorAll('.markdone')
    // let itemtext=copycard.querySelectorAll('span')
                for(let i=0; i < markdoneClone.length;i++){
                    markdoneClone[i].addEventListener('click',()=>{
                    markdoneClone[i].previousElementSibling.style.textDecoration="line-through";
                    markdoneClone[i].classList.add('hide')
                     itemtext.style.textDecoration = "line-through";
                    markdone.classList.add('hide')
                })
                }

   
        // const copytasklist=copycard.querySelector('div')
        copycard.lastElementChild.previousElementSibling.addEventListener('click',()=>{
    

            addItemPopup.classList.remove('hide')
            let subtaskPopup=document.createElement("div")
            let subtaskPopupheading=document.createElement("h3")
            let subtaskname=document.createElement("input")
            let addbutton=document.createElement("button")
            let closebutton=document.createElement("button")
            
            addItemPopup.appendChild( subtaskPopup)
            addItemPopup.appendChild(subtaskPopupheading)
            addItemPopup.appendChild(subtaskname)
            addItemPopup.appendChild(addbutton)
            addItemPopup.appendChild(closebutton)
          

            subtaskPopupheading.innerText="Add Task"
            addbutton.innerText="Add"
            addbutton.setAttribute("class","add")
            closebutton.innerText="Close"
            closebutton.setAttribute("class","add")
        closebutton.addEventListener('click',()=>{
            addItemPopup.classList.add('hide')
            parent.classList.remove('blur')
        })
        addbutton.addEventListener('click',()=>{
            addItemPopup.classList.add('hide')
            parent.classList.remove('blur')
            let item=document.createElement('div')
            let itemtext=document.createElement('span')
            let markdone=document.createElement('button')             

            //append
            item.appendChild(itemtext)
            item.appendChild(markdone)
            item.setAttribute("class","task")
            itemtext.setAttribute("class","span")
            markdone.setAttribute("class","markdone")
           
            

            //values
            itemtext.innerText=subtaskname.value
            markdone.innerText='Markdone'
            item.classList.add('markdone')
            item.appendChild(markdone)

            subTasklist.appendChild(item)
            addItemPopup.innerText=""

            markdone.addEventListener('click',()=>{
                itemtext.style.textDecoration = "line-through"
                markdone.classList.add('hide')
            })
            
            
            if(issinglecard){
                let copylist=copycard.querySelector('div')
                let itemClone=item.cloneNode(true)  
                copylist.appendChild(itemClone)
                let markdoneClone=itemClone.querySelectorAll('.markdone')
                for(let i=0; i < markdoneClone.length;i++){
                    markdoneClone[i].addEventListener('click',()=>{
                    markdoneClone[i].previousSibling.style.textDecoration="line-through"
                    itemtext.style.textDecoration = "line-through"
                    markdone.classList.add('hide')
                    markdoneClone[i].classList.add('hide') 
                })
                }
                          
            
            }
             

            
        })          
              
        }) 
        parent.firstElementChild.classList.remove('hide') 
      })
}


function back(){
    parent.firstElementChild.classList.add('hide')
    singlecard.classList.add('hide')
    cardcontainer.classList.remove('hide')
    issinglecard=false
    singlecard.innerText=""
}
backbtn.addEventListener('click',()=>{
    head.classList.remove('hide')
    parent.classList.remove('hide')
    backbtn.classList.add('hide')
    additem.classList.remove('hide')
    
})
