function populate_table(data) {
  let tbody = document.querySelector("tbody");
  data.forEach(function(e){
    let row = document.createElement("tr");
    _.forIn(e,function(value, key){
      let cell = document.createElement("td");
      cell.innerHTML = value;
      row.appendChild(cell);
      console.log(value);
    });
    tbody.appendChild(row);
  });
}
