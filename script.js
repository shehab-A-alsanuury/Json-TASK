
let table1 = document
        .getElementById("table1")
        .getElementsByTagName("tbody")[0];
      let editingRowIndex = -1; // To track which row is being edited

      fetch("smartphone.json")
        .then((response) => response.json())
        .then((data) => displaySmartphones(data))
        .catch((error) => console.error(error));

      function displaySmartphones(data) {
        data.forEach((phone) => {
          let row = `<tr>
                    <td>${phone.id}</td>
                    <td>${phone.type}</td>
                    <td>${phone.model}</td>
                    <td>${phone.price}</td>
                    <td>
                        <button onclick="editSmartphone(${phone.id})">Edit</button>
                        <button onclick="deleteSmartphone(${phone.id})">Delete</button>
                    </td>
                </tr>`;
          table1.innerHTML += row;
        });
      }


let products = [
    { id: 1, brand: "APPLE", model: "PRO", price: 300 },
    { id: 2, brand: "APPLE", model: "PRO", price: 300 },
    { id: 3, brand: "APPLE", model: "PRO", price: 300 },
    { id: 4, brand: "APPLE", model: "PRO", price: 300 },
    { id: 5, brand: "APPLE", model: "PRO", price: 300 }
    

];

function Table() {
    const mytabley = document.getElementById('productmytabley');
    mytabley.innerHTML = '';
    products.forEach(product => {
        const row = `
            <tr>
                <td>${product.id}</td>
                <td>${product.brand}</td>
                <td>${product.model}</td>
                <td>${product.price}</td>
                <td>
                    
                    <button onclick="deleteProduct(${product.id})">DELETE</button>
             

                </td>
            </tr>
        `;
        mytabley.innerHTML += row;
    });
}

function Table() {
    const mytabley = document.getElementById('productmytabley');
    mytabley.innerHTML = '';
    products.forEach(product => {
        const row = `
            <tr>
                <td>${product.id}</td>
                <td>${product.brand}</td>
                <td>${product.model}</td>
                <td>${product.price}</td>
                <td>
                    
                    <button onclick="deleteProduct(${product.id})">DELETE</button>
                </td>
            </tr>
        `;
        mytabley.innerHTML += row;
    });
}
   
function addProduct() {
    const brand = document.getElementById('brandInput').value;
    const model = document.getElementById('modelInput').value;
    const price = document.getElementById('priceInput').value;
    if (brand && model && price) {
        const newId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
        products.push({ id: newId, brand, model, price: Number(price) });
        Table();
        clearInputs();
    } else {
        alert('Please fill all fields');
    }
}
function deleteProduct(id) {
    products = products.filter(product => product.id !== id);
    Table();
}


Table()

