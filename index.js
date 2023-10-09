const orders =[]
let counter = 0

function sendData() {
    let inputName = document.getElementById("name");
    let inputValue = document.getElementById("value");

    let order = {name:'',value:0}
    order.name = inputName.value
    order.value = Number(inputValue.value)
    
    orders.push(order)
    const body = document.querySelector("body");
    
    for (let i = counter; i < orders.length; i++) {
        const divContenedor = document.createElement("div");
        divContenedor.setAttribute("class", "card");
        divContenedor.setAttribute("id", "Orden número"+i+1);
    
        const h1Name = document.createElement("h1");
        h1Name.textContent = `Orden número ${i+1}`;

        const h3Name = document.createElement("h3");
        h3Name.textContent = `Nombre pizza: ${orders[i].name}`;
    
        const h3Value = document.createElement("h3");
        h3Value.textContent = `Costo pizza: ${orders[i].value}`;

        divContenedor.appendChild(h1Name);
        divContenedor.appendChild(h3Name);
        divContenedor.appendChild(h3Value);

    
        body.appendChild(divContenedor);
        counter++
      }
      console.log(counter)
}
