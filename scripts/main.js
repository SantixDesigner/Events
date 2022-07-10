let precio;
let precioN = 0;
let cosasNombres = "";
let fueraUndefined = "";
let a = document.createElement("button");
let main = document.getElementById('main');
let boton = document.createElement('button');
const newDom = (precio,cosasNombres, precioN, enlace, a, divProduct, fueraUndefined,boton) =>{
    for (const productoS of componentArray2){
        let producto = document.createElement("div");
        producto.innerHTML = `<img src = "${enlace}">
                              <h2>${productoS.nameS}</h2>
                              <span>Precio: </span>
                              <span>${productoS.price}</span>`;
        a = document.createElement('button');
        a.innerHTML = `Comprar`;
        const funcion = e =>{
            precio = e.currentTarget.previousElementSibling.innerHTML
            cosasNombres = e.currentTarget.previousElementSibling.previousElementSibling.previousElementSibling.innerText;
            console.log(cosasNombres);
            fueraUndefined += cosasNombres + ", ";
            console.log(fueraUndefined);
            precioN += parseInt(precio);
            console.log(precioN);
            producto.remove();
        }
        a.addEventListener("click", funcion);
        producto.append(a);
        divProduct.append(producto);
    }
    const funcion2 = e =>{
        iva(fueraUndefined, precioN);
        boton.remove();
    }
    boton.addEventListener("click", funcion2);
}
const AMD = () =>{ //Esto genera la lista correspondiente a si es AMD o es Intel
    for (const nombre of productsCPU){
        if (nombre.marca == "AMD"){
            let nombres = nombre;
            componentArray2.push(nombres);
        }
    }
    boton.className = "boton";
    boton.innerHTML = `Terminar`;
    main.append(boton);
    newDom(precio,cosasNombres,precioN,"./assets/ryzenej.jpg",a,divProduct,fueraUndefined,boton);
}
const Intel = () =>{ //Esto genera la lista correspondiente a si es AMD o es Intel
    for (const nombre of productsCPU){
        if (nombre.marca == "Intel"){
            let nombres = nombre;
            componentArray2.push(nombres);
        }
    }
    boton.className = "boton";
    boton.innerHTML = `Terminar`;
    main.append(boton);
    newDom(precio,cosasNombres,precioN,"./assets/intel.jpeg",a,divProduct,fueraUndefined,boton);
}
const iva=(nameS,price)=>{
    let iva = 0.21;
    let resultIva = (price*iva)+price;
    alert("The name of all products is: "+nameS+" and the price of this with IVA is: u$d"+Math.round(resultIva));
}
const createComponents = () =>{
    let booleanS = prompt ("Do you want new components on my page?").toLowerCase();
    if (booleanS == "yes"){
        do{
            i = parseInt(prompt("What number of components do you want?"));
            for (let integer = 0; integer<i; integer++){
                nameProduct = prompt("Name of product (Motherboard, Graphic, Monitor, etc)");
                priceProduct2 = parseInt(prompt("Price of this product"));
                let componente = new Componente(nameProduct,priceProduct2);
                componentArray3.push(componente); //Inicia los valores de la variable componente
                let disponibility = prompt("Do you want disponibility?").toLowerCase();
                if(disponibility == "yes"){
                    componentArray3[integer].disponibilities(); //habilita la disponibilidad
                    let stock = parseInt(prompt("How many stock do you want?"));
                    while((isNaN(stock)) || (stock == 0)){
                        stock = parseInt(prompt("How many stock do you want?"));
                    }
                    componentArray3[integer].stocks(stock); //habilita la cantidad de stock
                }
            }
            for (let integer = 0; integer<i; integer++){
                alert("PRODUCT: "+componentArray3[integer].name+" PRICE: $"+componentArray3[integer].price+" disponibility: "+componentArray3[integer].disponibility+" stock: "+componentArray3[integer].stock);
            }
            booleanS = prompt("Do you want to continue?").toUpperCase();
        }while(booleanS != "NO");
    }
}
class Componente{
    constructor(name,price) {
        this.name = name;
        this.price = price
        this.disponibility = false;
        this.stock = 0;
    }
    disponibilities(){
        this.disponibility = true;
    }
    stocks(stock){
         this.stock = stock;
    }
}
const products = [
    {nameS:"INTEL", stock: true},
    {nameS:"AMD", stock: true},
    {nameS:"NVIDIA", stock: false}
]; //Estos son las marcas
const productsCPU = [
    {nameS: "i3 9100F", price: 2000, marca: "Intel"},
    {nameS: "i5 9400F", price: 2500, marca: "Intel"},
    {nameS: "i7 7700K", price: 3000, marca: "Intel"},
    {nameS: "i9 9900KF", price: 5000, marca: "Intel"},
    {nameS: "i5 10600K", price: 7635, marca: "Intel"},
    {nameS: "i5 12400F", price: 9000, marca: "Intel"},
    {nameS: "i7 12700KF", price: 10000, marca: "Intel"},
    {nameS: "i9 12900F", price: 18000, marca: "Intel"},
    {nameS: "i9 12900K", price: 30000, marca: "Intel"},
    {nameS: "Ryzen 3 1200", price: 1100, marca: "AMD"},
    {nameS: "Ryzen 3 2200g", price: 1350, marca: "AMD"},
    {nameS: "Ryzen 5 2400g", price: 1800, marca: "AMD"},
    {nameS: "Ryzen 5 3600", price: 2500, marca: "AMD"},
    {nameS: "Ryzen 7 3700x", price: 6500, marca: "AMD"},
    {nameS: "Ryzen 5 5600x", price: 8000, marca: "AMD"},
    {nameS: "Ryzen 9 3900x", price: 9000, marca: "AMD"},
    {nameS: "Ryzen 9 3990xt", price: 13370, marca: "AMD"}
]
let divProduct = document.getElementById("main-section-2");
let nameProduct = "";
let productsS = "";
let priceProduct2 = 0;
let componentArray2 = [];
let componentArray3 = [];
let i;
alert("Welcome to TecnoStore");
alert("Here you can watch the best prices for components of PC in the market");
nameProduct = prompt("First, what are you searching? AMD/Intel/Nvidia").toUpperCase();
const namesHighBusiness = products.map((elementProcessors) => elementProcessors.nameS);
const checkStock = products.map(elementProcessors => elementProcessors.stock); //Esto recorre el nombre de marcas de los products
while(namesHighBusiness.indexOf(nameProduct) == -1){ /* Esto sirve para identificar si está o no en el arreglo */
nameProduct = prompt("Again, what are you searching?").toUpperCase();
}
if (namesHighBusiness.indexOf(nameProduct)!=-1){
    if (checkStock[namesHighBusiness.indexOf(nameProduct)] == true){
        alert("Oh, great! We have components of this type");
        if (namesHighBusiness[namesHighBusiness.indexOf(nameProduct)] == "AMD"){
            AMD(); //Llamado a la función AMD
        }
        if (namesHighBusiness[namesHighBusiness.indexOf(nameProduct)] == "INTEL"){
            Intel();
        }
    }
    else{
        alert("Sorry, we don't have components of this type. Comeback later :(");
    } //Si es NVIDIA, se cancela
}
if (namesHighBusiness.indexOf(nameProduct) == "INTEL"){
}
createComponents();
const x = new Date();
alert("Thank you for visit TecnoStore in the day: "+x.getDate()+"/"+(x.getMonth()+1)+"/"+x.getFullYear()); //Genera una fecha en base a lo que quiero 

let section1 = document.getElementById('main-section-1'); 
let form = document.createElement('form');
let divHijoForm1;
form.className = "p-1";
form.action = "";
section1.append(form);

const Inputs = [
    {inputName: "Intel"},
    {inputName: "AMD"},
    {inputName: "Gabinetes"},
    {inputName: "Monitores"},
    {inputName: "Placas de Video"},
    {inputName: "Ram"},
    {inputName: "Discos"},    
    {inputName: "Periféricos"}
]
const Minimos = [
    {minMax:"Importe Mínimo", min: "0", max:"100000"},
    {minMax:"Importe Máximo", min: "50000", max:"200000"}
]
let divAplicar = document.createElement('div');
divAplicar.className = "div-a";
divAplicar.innerHTML = `<a href="">APLICAR</a>`;
let divAplicar2 = document.createElement('div');
divAplicar2.className = "div-a";
divAplicar2.innerHTML = `<a href="">APLICAR</a>`;
let componentArray4 = [];
for (const Input of Inputs){
    componentArray4.push(Input);
}
divHijoForm1 = document.createElement('div');
form.appendChild(divHijoForm1);
let divHijoForm3;
for (const tipos of componentArray4){
    divHijoForm3 = document.createElement('div'); 
    divHijoForm3.innerHTML =`   <label for="">${tipos.inputName}</label>
                                <input type="radio" name="asd" id="">`;
    divHijoForm1.appendChild(divHijoForm3);
}
divHijoForm1.appendChild(divAplicar2);
let divHijoForm2 = document.createElement('div');
form.appendChild(divHijoForm2);
let divHijoForm4;
for(const Minimo of Minimos){
    divHijoForm4 = document.createElement('div');
    divHijoForm4.innerHTML =   `<label for="">${Minimo.minMax}</label>
                                <input type="range" min=${Minimo.min} max=${Minimo.max}>`;
    divHijoForm2.appendChild(divHijoForm4);
}
divHijoForm2.appendChild(divAplicar);