const playerx=document.querySelector(".playerXCont");
const playero=document.querySelector(".playerOCont");
const x_score=document.querySelector(".xScore");
const o_score=document.querySelector(".oScore");
var xsc=0,osc=0;
x_score.textContent=xsc;o_score.textContent=osc;

var clickedSquare;
function divClicked(divID){
  clickedSquare=document.getElementById(divID);
  if(playerx.classList.contains('active')){
    clickedSquare.style.backgroundImage="url('img/x.png')";
    clickedSquare.classList.add('xadded');
    playerx.classList.remove('active');
    playero.classList.add('active');
    clickedSquare.classList.add('disabled2');
    if(checkClicked("x")){
        xsc+=1;
        x_score.textContent=xsc;
        playerx.classList.add('winner');
        playero.classList.add('loser');
        document.getElementById("reBtn").classList.add('focusBtn');
    };
  } else if(playero.classList.contains('active')){
    clickedSquare.style.backgroundImage="url('img/o.png')";
    clickedSquare.classList.add('oadded');
    playero.classList.remove('active');
    playerx.classList.add('active');
    clickedSquare.classList.add('disabled2');
    if(checkClicked("o")){
        osc+=1;
        o_score.textContent=osc;
        playero.classList.add('winner');
        playerx.classList.add('loser');
        document.getElementById("reBtn").classList.add('focusBtn');
    };
   }
}

var samePic=false; var picChar;
function checkClicked(picChar){
    if(checkArrays(1,2,3,picChar)) return true;
    if(checkArrays(4,5,6,picChar)) return true;
    if(checkArrays(7,8,9,picChar)) return true;
    if(checkArrays(1,4,7,picChar)) return true;
    if(checkArrays(2,5,8,picChar)) return true;
    if(checkArrays(3,6,9,picChar)) return true;
    if(checkArrays(1,5,9,picChar)) return true;
    if(checkArrays(3,5,7,picChar)) return true;
}/*The End of the funtion*/

var num1,num2,num3;
function checkArrays(num1,num2,num3,picChar){
    if(document.getElementById("grid"+num1).classList.contains(picChar+"added") &&
    document.getElementById("grid"+num2).classList.contains(picChar+"added") &&
    document.getElementById("grid"+num3).classList.contains(picChar+"added")){
      colorCells(num1,num2,num3);
      document.getElementById("playingGrid").classList.add('disabled');
      return true;
    }
}
function colorCells(num1,num2,num3){
document.getElementById("grid"+num1).style.backgroundColor="rgba(118, 252, 40, 0.654)";
document.getElementById("grid"+num2).style.backgroundColor="rgba(118, 252, 40, 0.654)";
document.getElementById("grid"+num3).style.backgroundColor="rgba(118, 252, 40, 0.654)";
}
var cellName;
function emptyCells(){
    document.getElementById("playingGrid").classList.remove('disabled');
    for(var m=1;m<=9;m++){
        cellName=document.getElementById("grid"+m);
        cellName.classList.remove('disabled2');
        cellName.style.backgroundImage=null;
        cellName.style.backgroundColor=null;
        if(cellName.classList.contains('xadded')){
            cellName.classList.remove('xadded');
        }
        if(cellName.classList.contains('oadded')){
            cellName.classList.remove('oadded');
        }
    }
    playero.classList.remove('winner','loser','active');
    playerx.classList.remove('winner','loser');
    playerx.classList.add('active');
    document.getElementById("reBtn").classList.remove('focusBtn');
}




















/*
var rowName, colName, diamName;var CharName;
var divClassName;var i=0,j;

    while(!samePic){
        for(i=0;i<row1.length;i++){
            divClassName="grid"+Number(row1[i]);
           if(document.getElementById(divClassName).classList.contains(picChar+"added")){
               samePic=true;
           }else {
               samePic=false;}
        }

        for(i=0;i<row2.length;i++){
            divClassName="grid"+Number(row2[i]);
           if(document.getElementById(divClassName).classList.contains(picChar+"added")){
               samePic=true;
           }else {
               samePic=false;}
        }
       
        for(i=0;i<row3.length;i++){
            divClassName="grid"+Number(row3[i]);
           if(document.getElementById(divClassName).classList.contains(picChar+"added")){
               samePic=true;
           }else {
               samePic=false;}
        }

        for(i=0;i<col1.length;i++){
            divClassName="grid"+Number(col1[i]);
           if(document.getElementById(divClassName).classList.contains(picChar+"added")){
               samePic=true;
           }else {
               samePic=false;}
        }
      
        for(i=0;i<col2.length;i++){
            divClassName="grid"+Number(col2[i]);
           if(document.getElementById(divClassName).classList.contains(picChar+"added")){
               samePic=true;
           }else {
               samePic=false;}
        }

        for(i=0;i<col3.length;i++){
            divClassName="grid"+Number(col3[i]);
           if(document.getElementById(divClassName).classList.contains(picChar+"added")){
               samePic=true;
           }else {
               samePic=false;}
        }
 
   
     for(i=0;i<diam1.length;i++){
        divClassName="grid"+Number(diam1[i]);
       if(document.getElementById(divClassName).classList.contains(picChar+"added")){
           samePic=true;
       }else {
           samePic=false;}
    }

    for(i=0;i<diam2.length;i++){
        divClassName="grid"+Number(diam2[i]);
       if(document.getElementById(divClassName).classList.contains(picChar+"added")){
           samePic=true;
       }else {
           samePic=false;}
    }

    }

    }
/*********************************************************************************************************************************** */


           
/*  Check Columns  */
/*for(i=1;i<=3;i++){
    colName="col"+i;
   for(j=0;j<=2;j++){
    divClassName="grid"+Number(colName[j]);
       if(document.getElementsByClassName(divClassName).backgroundImage==picUrl){
                 samePic=true;
                 console.log(samePic);
       } else break;
 }
 if(samePic){ /*is there a winner? */
/*}
}*/

/*  Check Diameters  */
/*for(i=1;i<=2;i++){
    diamName="diam"+i;
   for(j=0;j<=2;j++){
    divClassName="grid"+diamName[j];
       if(document.getElementsByClassName(divClassName).backgroundImage==picUrl){
                 samePic=true;
                 console.log(samePic);
       } else break;
 }

 if(samePic){ /*is there a winner? 

}
}*/


/*THE END OF THE MAIN BIG FUNCTION*/




/*
var series=[];var activeChar;var isWinner=false;  
var j;
function checkSerise(series,activeChar,otherPlayer){
    playerId="player"+activeChar+"Cont";
    otherId="player"+otherPlayer+"Cont";
isWinner=checkWithNumber(series,1);
isWinner=checkWithNumber(series,3);
isWinner=checkWithNumber(series,4);

if(isWinner){
    document.getElementsByClassName(playerId).style.backgroundColor="green";
    document.getElementsByClassName(otherId).style.backgroundColor="red";
}
}
var addedNumber; var generated1Arr=[];
function checkWithNumber(series,addedNumber){
    generated1Arr=[addedNumber,addedNumber*2,]
    j=0;
    if(Number(series[j])+addedNumber === Number(series[j+1])){
        for(j=0;j<series.length;j++){
             if(Number(series[j])+addedNumber === Number(series[j+1])){
              return true;
                }
                else return false;
             }
    }

}
var divClass;var divClass1;var divClass2;
var picChar;var picUrl; var picSame=false;
function checkRows(picChar){
    j=1;
    picUrl="img/"+picChar+".png";
    for(var i=1;i<8;i+3){
        for(j=i;j<=(j+2);j++){
            divClass = "grid"+j;
            if(document.getElementsByClassName(divClass).backgroundImage==picUrl)
            {
               picSame=true;
            }else picSame=false;
         }
    }

}*/