const createComponents = () =>{
    let booleanS = prompt ("Do you want new components on my page?").toLowerCase();
    if (booleanS == "yes"){
    do{
        i = parseInt(prompt("What number of components do you want?"));
        for (let integer = 0; integer<i; integer++){
            nameProduct = prompt("Name of product (Motherboard, Graphic, Monitor, etc)");
            priceProduct2 = parseInt(prompt("Price of this product"));
            let componente = new Componente(nameProduct,priceProduct2);
            componentArray2.push(componente); //Inicia los valores de la variable componente
            let disponibility = prompt("Do you want disponibility?").toLowerCase();
            if(disponibility == "yes"){
                componentArray2[integer].disponibilities(); //habilita la disponibilidad
                let stock = parseInt(prompt("How many stock do you want?"));
                while((isNaN(stock)) || (stock == 0)){
                    stock = parseInt(prompt("How many stock do you want?"));
                }
                componentArray2[integer].stocks(stock); //habilita la cantidad de stock
            }
        }
        for (let integer = 0; integer<i; integer++){
            alert("PRODUCT: "+componentArray2[integer].name+" PRICE: $"+componentArray2[integer].price+" disponibility: "+componentArray2[integer].disponibility+" stock: "+componentArray2[integer].stock);
        }
        booleanS = prompt("Do you want to continue?").toUpperCase();
    }while(booleanS != "NO");
}
}
const Intel = () =>{
    const runIntel = productsIntel.map(elementProcessors => elementProcessors.nameS);
    alert("We have: "+runIntel.join(" "));
    const productProcessor = productsIntel.map (elementProcessors => elementProcessors.nameS); //Recorre el array de productos AMD o Intel
    const priceProcessor = productsIntel.map (elementProcessors => elementProcessors.price);
    runDo(productProcessor,priceProcessor); //llamado a la función runDo() de Intel
}
const AMD = () =>{ //Esto genera la lista correspondiente a si es AMD o es Intel
    const runAMD = productsAMD.map(elementProcessors => elementProcessors.nameS);
    alert("We have: "+runAMD.join(" "));
    const productProcessor = productsAMD.map (elementProcessors => elementProcessors.nameS); //Recorre el array de productos AMD o Intel
    const priceProcessor = productsAMD.map (elementProcessors => elementProcessors.price);
    runDo(productProcessor,priceProcessor); //llamado a la función runDo() AMD
}
const iva=(nameS,price)=>{
    let iva = 0.21;
    let resultIva = (price*iva)+price;
    alert("The name of the product is: "+nameS+" and the price of this with IVA is: u$d"+Math.round(resultIva));
}
const runDo = (productProcessor, priceProcessor) =>{ //Esto genera la lista correspondiente a si es AMD o es Intel
    do{
        nameProduct = prompt("What do you want to buy? ESC FOR EXIT");
        if (productProcessor.indexOf(nameProduct) != -1){
            alert("Ok, you are buying: "+productProcessor[productProcessor.indexOf(nameProduct)]);
            priceProduct2 += parseInt(priceProcessor.splice(productProcessor.indexOf(nameProduct),1));
            productsS += productProcessor.splice(productProcessor.indexOf(nameProduct),1) + ", ";
            if (productProcessor.length < 1){
                alert("STOP");
                break;
            }
        }
    }while (nameProduct != "ESC");
    alert("It still: "+productProcessor.join(" "));
    alert("You buy: "+productsS);
    alert("You need to pay: u$d"+priceProduct2);
    iva (productsS, priceProduct2);
}
const productsAMD = [
    {nameS: "Ryzen 3 1200", price: 1100},
    {nameS: "Ryzen 3 2200g", price: 1350},
    {nameS: "Ryzen 5 2400g", price: 1800},
    {nameS: "Ryzen 5 3600", price: 2500},
    {nameS: "Ryzen 7 3700x", price: 6500},
    {nameS: "Ryzen 5 5600x", price: 8000},
    {nameS: "Ryzen 9 3900x", price: 9000},
    {nameS: "Ryzen 9 3990xt", price: 13370}
]; //Estos son los productos AMD
const products = [
    {nameS:"INTEL", stock: true},
    {nameS:"AMD", stock: true},
    {nameS:"NVIDIA", stock: false}
]; //Estos son las marcas
const productsIntel = [
    {nameS: "i3 9100F", price: 2000},
    {nameS: "i5 9400F", price: 2500},
    {nameS: "i7 7700K", price: 3000},
    {nameS: "i9 9900KF", price: 5000},
    {nameS: "i5 10600K", price: 7635},
    {nameS: "i5 12400F", price: 9000},
    {nameS: "i7 12700KF", price: 10000},
    {nameS: "i9 12900F", price: 18000},
    {nameS: "i9 12900K", price: 30000}
]; //Estos son los productos Intel
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
//Definición de variables globales
let nameProduct = "";
let productsS = "";
let priceProduct2 = 0;
let componentArray2 = [];
let i;
//Inicio
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
        if (namesHighBusiness[namesHighBusiness.indexOf(nameProduct)] == "AMD" ){
            AMD(); //Llamado a la función AMD
        }
        if (namesHighBusiness[namesHighBusiness.indexOf(nameProduct)] == "INTEL" ){ 
            Intel(); //Llamado a la función Intel
        }
    }
    else{
        alert("Sorry, we don't have components of this type. Comeback later :(");
    } //Si es NVIDIA, se cancela
}
createComponents(); //llama a la funcion createComponents();
const x = new Date();
alert("Thank you for visit TecnoStore in the day: "+x.getDate()+"/"+(x.getMonth()+1)+"/"+x.getFullYear()); //Genera una fecha en base a lo que quiero