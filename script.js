let boxes = document.querySelectorAll('.box')
let currentPlayer = document.querySelector('.current-player')
let grid = document.querySelector('.grid')
let gameUpdate = document.querySelector('.game-update')

let chance = 0;
let turn1 = "X";
let turn2 = "O";

let pos = [
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
]
let flag = ["","","","","","","","",""]


boxes.forEach((box,index)=>{

    box.addEventListener('click',(e)=>{

        if(chance%2===0)
            {
                e.target.innerText =turn1
                flag[index] = turn1
                currentPlayer.innerText = `Current Player - ${turn2}`
            }
        else
        {
            e.target.innerText =turn2 
            flag[index] = turn2
            currentPlayer.innerText = `Current Player - ${turn1}`
        }
        chance++;

        e.target.style.pointerEvents ="none"
        let ans = win()

        if(chance===9&&ans===false){


            currentPlayer.innerText="Game Tied!"
            gameUpdate.classList.add('active')
            
  
        }
        
        
        console.log("ans",ans)
        if(ans){
            boxes[ans[0]].classList.add('win')
            boxes[ans[1]].classList.add('win')
            boxes[ans[2]].classList.add('win')
            

            boxes.forEach((box)=>{
                box.style.pointerEvents ="none"
                
            })
            gameUpdate.classList.add('active')
        }
        // console.log(boxes[ans[0]].innerHTML)

    })
})

function win() {
    for (let i = 0; i < pos.length; i++) {

        let p = pos[i];
        if (flag[p[0]] === flag[p[1]] && flag[p[1]] === flag[p[2]] && flag[p[0]] !== ""&& flag[p[1]] !== ""&& flag[p[2]] !== "") {
           console.log("p = ",p)
            return p; // Return the winning positions if a winning condition is found
        }
    }
    return false; // Return null if no winning condition is found
}

function update(){

    boxes.forEach((box)=>{
        box.style.pointerEvents ="all"
        box.classList.remove('win')
        box.innerText=""
    })
    flag = ["","","","","","","","",""]
    chance=0
    currentPlayer.innerText=`Current Player - ${turn1}`

    gameUpdate.classList.remove('active')

}





