 // default variables
 let columns = 3;
 let defaultColor = "white";

 
 
 
 //add rows to the grid
function addRow(){
    let tbl = document.getElementById("gridContainer");
    let row = document.createElement("div")
    row.classList.add("row");
    for(let r=0; i<columns; r++){
        let col = document.createElement("div")
        col.classList.add('col-sm border border-dark box white');
        
    }
    
          // append table row i;
    // insert table cells to the new row
    

    /*let table = document.getElementById("gridContainer");
    var newRow = table.insertRow();
    var i = 0;
    for (i = 0; i < table.rows[0].cells.length; i++) {
        var newCell = newRow.insertCell();
        newCell.innerHTML = '';
    }
    console.log(newRow);/*

    /*let rows = document.getElementById("gridContainer").style.gridTemplateRows = "200px";
    for (let i = 0; i<rows.length; i++){
        let newrow = document.createElement("gridContainer");
        rows.className = "col-sm border border-dark box white1";
        


    }*/


    

    
    /*var e = document.body;
    for(var i = 0; i < r; i++){ 
        var row = document.createElement(".col-sm border border-dark box white"); 
        row.className = ".row"; 
        for(var x = 1; x <= r; x++){ 
            var cell = document.createElement(".col-sm border border-dark box white"); 
            cell.className = ".row"; 
            cell.innerText = (i * r) + x;
            row.appendChild(cell); 
        } 
        e.appendChild(row); 
      } 
      document.getElementById("code").innerText = e.innerHTML;*/
    
    
}
//●	add columns to the grid

function createCell(cell, text, style) {
    var div = document.createElement('div'), // create DIV element
        txt = document.createTextNode(text); // create text node
    div.appendChild(txt);                    // append text node to the DIV
    div.setAttribute('class', style);        // set DIV class attribute
    div.setAttribute('className', style);    // set DIV class attribute for IE (?!)
    cell.appendChild(div);                   // append DIV to the table cell
}
function addColumn(){
    //let table = document.getElementById("gridContainer");
    let table = document.getElementsByClassName('.row');
    var newColumn = table.insertCell();
    var i = 0;
    for (i = 0; i < table.rows[0].cells.length; i++) {
        var newCell = newColumn.insertCell();
        newCell.innerHTML = '';
    }
    console.log(newColumn);
    

}
//●	remove rows from the grid
function removeRow(){
    let rowss = document.getElementsByClassName("row");

}
//remove columns from the grid
function removeColumn(){

}
//click on a single cell, changing its color to the currently selected color
function changeColor(){
    var colors = document.getElementById("gridContainer");
    colors.style.color ="blue";
    console.log(colors)


}
//fill all uncolored cells with the currently selected color
function fillUncolored(){
    const divs = document.getElementsByClassName('col-sm border border-dark box white');


}
//fill all cells with the currently selected color
function fillAll(){
    const divs = document.querySelectorAll('.col-sm border border-dark box white');

}
//clear all cells/restore all cells to their original/initial color
function clearAll(){

}
//click and hold (mouseover) from a single cell (start) to a different cell (end) such that all affected/hovered-over cells from start to end change to the currently selected color
function clickHold(){
    //use mouseover function 
    //declare var that cooresponds to all of the boxes on the grid
    // user clicks on color they want
    //if user mouses over the boxes, 

}
