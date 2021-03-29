let product = ["XIAOMI", "SONY", "IPHONE", "SAMSUNG"]
let count;

// function display() {
//     for (let i = 0; i < product.length; i++) {
//         document.getElementById("bang").innerHTML +=
//             "<tbody id =" + "themdong" + ">" +
//             "<tr>" +
//             "<td>" + product[i] + "</td>" +
//             "<td><button>Edit</button></td>" +
//             "<td><button>Delete</button></td>" +
//             "<td></td>" +
//             "</tr>" +
//             "</tbody>"
//     }
//     count = product.length
//     document.getElementById("dem").innerHTML += count + "product"
// }
// display()

function display3() {
    document.getElementById("bang").innerHTML +=
        "<tbody id =" + "themdong" + ">" +
        "<tr>" +
        "<td>" + product[0] + "</td>" +
        "<td><button>Edit</button></td>" +
        "<td><button>Delete</button></td>" +
        "<td></td>" +
        "</tr>" +
        "</tbody>"
    for (let i = 1; i < product.length; i++) {
        document.getElementById("themdong").innerHTML +=
            "<tr>" +
            "<td>" + product[i] + "</td>" +
            "<td><button>Edit</button></td>" +
            "<td><button>Delete</button></td>" +
            "<td></td>" +
            "</tr>"
    }
    count = product.length
    document.getElementById("dem").innerHTML += count + "product"
}
display3()

function display2() {
    document.getElementById("themdong").innerHTML += "<tr>" +
        "<td>" + product[product.length - 1] + "</td>" +
        "<td><button>Edit</button></td>" +
        "<td><button>Delete</button></td>" +
        "<td></td>" +
        "</tr>"
    count = product.length
    document.getElementById("dem").innerHTML = count + " Product"
}

function add() {
    let a = document.getElementById("nameProduct").value;
    product.push(a);
    xoa()
    display3()
}


function xoa() {
    document.getElementById("themdong").remove();
}