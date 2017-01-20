function populate_table(data) {
  _.forIn(data, function(value, key){
    let table = document.querySelector('#sales_table');
    let tr = document.createElement('tr');
    let month = document.createElement('td');
    month.innerHTML = key;

    let dollars = document.createElement('td');
    dollars.innerHTML = value

    tr.appendChild(month);
    tr.appendChild(dollars);

    table.appendChild(tr);
  });
}
