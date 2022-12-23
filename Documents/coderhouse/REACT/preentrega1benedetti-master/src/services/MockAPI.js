const data = [ 
    {
        id: 1 , 
        tipo: "percusion",
        marca:"Pearl",
        modelo:"master Custom",
        imagen:"/assets/R.jfif",
        origen: "Usa",
        precio: 1000,
    } ,

    {
        id: 2 , 
        tipo: "vientos",
        marca: "yamaha",
        modelo: "SXJ100",
        imagen: "/assets/R.jfif",
        origen: "MEXICO",
        precio: 1000,
    },
    {
        id: 3 , 
        tipo: "ACCESORIOS" ,
        marca: "ACME",
        modelo: "PJSNW211",
        imagen: "/assets/R.jfif",
        origen: "ARGENTINA",
        precio: "1000",
    } , 

    {
        id: 4 , 
        tipo: "CUERDAS",
        marca: "FENDER",
        modelo: "STRATOCASTER FGJ21000",
        imagen: "/assets/R.jfif",
        origen: "MEXICO",
        precio: 1000,
    }
]


export function getItems() {
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve (data);
    
        }, 1500)
    })
}

export function getItemsByCategory(cat) {
    return new Promise ((resolve,reject)=>{
        let itemFind = data.filter((item)=>{
            return item.tipo===cat
        });
        setTimeout (()=>{
            if(itemFind) resolve (itemFind) 
            else reject (new Error("NO ENCONTRADO"))
        }, 1500)
    })
}
