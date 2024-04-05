let turn = 'x';
let title = document.querySelector('.title');
let box=[]
function end(num1,num2,num3) {
    title.innerHTML=`Player ${box[num1]} wins!`
    document.getElementById('item'+num1).style.background=' #378CE7' 
    document.getElementById('item'+num2).style.background=' #378CE7' 
    document.getElementById('item'+num3).style.background=' #378CE7'
    
    setInterval(function(){
        title.innerHTML+=".";
    },1000)
    setTimeout(function() {location.reload()},4000);
}
function winner() {
    for (let index = 1; index < 10; index++) {
     box[index] = document.querySelector(`#item${index}`).innerHTML;
    }   
    if (box[1]== box[2]&&box[2]==box[3] &&box[2] !='') {
        end(1,2,3)
    }
    else if(box[4]==box[5]&&box[5]==box[6] &&box[5]!=''){
        end(4,5,6)
    }
    else if(box[7]==box[8]&&box[8]==box[9] &&box[8]!=''){
        end(7,8,9)
    }
    else if(box[1]==box[4]&&box[4]==box[7] &&box[4]!=''){
        end(1,4,7)
    }
    else if(box[2]==box[5]&&box[5]==box[8] &&box[5]!=''){
        end(2,5,8)
    }
    else if(box[3]==box[6]&&box[6]==box[9] &&box[6]!=''){
        end(3,6,9)
    }
    else if(box[1]==box[5]&&box[5]==box[9] &&box[5]!=''){
        end(1,5,9)
    }
    else if(box[3]==box[5]&&box[5]==box[7] &&box[5]!=''){
        end(3,5,7)
    }
}
function game(id) {
    let element =document.getElementById(id);
    if (turn=== 'x' && element.innerHTML=='') {
        element.innerHTML='X';
        turn ='o';
        title.innerHTML="Turn for O";
    }
    else if(turn=== 'o' && element.innerHTML==''){
        element.innerHTML='o';
        turn ='x';
        title.innerHTML="Turn for x";
    }
    winner()
}