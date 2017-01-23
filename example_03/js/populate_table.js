function populate_table(data) {
  var table = document.querySelector("table");
  data.forEach(function(e){
    let tr = document.createElement("tr");
    _.forIn(e, function(item){
      let td = document.createElement("td");
      td.innerHTML = item;
      tr.appendChild(td);
    });
    table.appendChild(tr)
  });
}
