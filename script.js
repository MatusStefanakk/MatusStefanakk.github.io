function getData(){
    var div = document.getElementById("dc_data");

    var row = document.createElement("tr");  //table row

    var nameCell = document.createElement("td");  //table name data
    nameCell.textContent = "random meno";
    row.appendChild(nameCell);

    var roleCell = document.createElement("td");  //table role data
    roleCell.textContent = "random rola";
    row.appendChild(roleCell);

    div.appendChild(row);
}