// Import stylesheets
import './style.css';

const data = [
  {region: 'US', model: 'A', sales: 150},
  {region: 'US', model: 'B', sales: 120},
  {region: 'US', model: 'C', sales: 350},
  {region: 'EU', model: 'A', sales: 200},
  {region: 'EU', model: 'B', sales: 100},
  {region: 'EU', model: 'C', sales: 250},
  {region: 'CA', model: 'A', sales: 200},
  {region: 'CA', model: 'B', sales: 100},
  {region: 'CA', model: 'C', sales: 230},
  {region: 'CA', model: 'D', sales: 400},
];

// Write Javascript code!
const appDiv = document.getElementById('app');

if (data) {
  const myTable = document.createElement("table")
  const header = myTable.createTHead()
  const row = header.insertRow()

  Object.keys(data[0]).forEach(label => {
    row.insertCell().innerHTML = `<strong>${label}</strong>`
  })

  let sum = 0

  data.forEach((val, idx) => {
    if (idx > 0 && val["region"] !== data[idx - 1]["region"]) {
      const row = myTable.insertRow()
      row.insertCell().innerHTML = data[idx - 1]["region"]
      row.insertCell().innerHTML = "sum"
      row.insertCell().innerHTML = sum
      sum = 0
    }

    sum += val["sales"]
    const row = myTable.insertRow()
      Object.values(val).forEach(value => {
        row.insertCell().innerHTML = value
      })

    if (idx === data.length - 1) {
      const row = myTable.insertRow()
      row.insertCell().innerHTML = val["region"]
      row.insertCell().innerHTML = "sum"
      row.insertCell().innerHTML = sum
      sum = 0
    }
  })
  
  appDiv.appendChild(myTable)
}