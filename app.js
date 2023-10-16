var cars = {
    honda: {
        civic: {
            name: "Honda Civic",
            year: 2021,
            price: 150000,
            colors: ["white", "black", "red"],
            gate: 4,
            transmission: "automatic",
            src: "images/civic.jpg"

        },
        brv: {
            name: "Honda BR-V",
            year: 2022,
            price: 250000,
            colors: ["white", "black", "red"],
            gate: 4,
            transmission: "automatic",
            src: "images/brv.png"
        },
        city: {
            name: "Honda city",
            year: 2018,
            price: 1000000,
            colors: ["white", "black", "red"],
            gate: 4,
            transmission: "manual",
            src: "images/city.jpg"
        },
        fit: {
            name: "Honda fit",
            year: 2018,
            price: 1200000,
            colors: ["white", "black", "red"],
            gate: 2,
            transmission: "automatic",
            src: "images/fit.jpg"
        },
    },
    toyota: {
        corolla: {
            name: "Toyata Corolla",
            year: 2020,
            price: 150000,
            colors: ["white", "black", "red"],
            gate: 4,
            transmission: "automatic",
            src: "images/corolla.jpg"
        },
        fortuner: {
            name: "Toyota fortuner",
            year: 2022,
            price: 1050000,
            colors: ["white", "black", "red"],
            gate: 4,
            transmission: "automatic",
            src: "images/fortuner.jpg"
        },
        revo: {
            name: "Toyota Revo",
            year: 2012,
            price: 9500000,
            colors: ["white", "black", "red"],
            gate: 4,
            transmission: "automatic",
            src: "images/revo.png"
        },
        yaris: {
            name: "Toyota Yaris",
            year: 2022,
            price: 3800000,
            colors: ["white", "black", "blue"],
            gate: 4,
            transmission: "automatic",
            src: "images/yaris.jpg"
        },
    },
    suzuki: {
        alto: {
            name: "Suzuki Alto",
            year: 2020,
            price: 4500000,
            colors: ["white", "black", "red"],
            gate: 4,
            transmission: "automatic",
            src: "images/alto.png"
        },
        swift: {
            name: "Suzuki Swift",
            year: 2018,
            price: 105000,
            colors: ["white", "black", "red"],
            gate: 4,
            transmission: "automatic",
            src: "images/swift.jpg"
        },
        mehran: {
            name: "Suzuki Mehran (Boss)",
            year: 2016,
            price: 150000,
            colors: ["white", "black", "red"],
            gate: 4,
            transmission: "manual",
            src: "images/mehran.jpeg"
        },
        cultus: {
            name: "Suzuki Cultus",
            year: 2010,
            price: 38000,
            colors: ["white", "black", "blue"],
            gate: 4,
            transmission: "manual",
            src: "images/cultus.jpeg"
        },
    },
    kia: {
        sportage: {
            name: "Kia Sportage",
            year: 2020,
            price: 4500000,
            colors: ["white", "black", "red"],
            gate: 4,
            transmission: "automatic",
            src: "images/sportage.jpeg"
        },
        stonic: {
            name: "Kia Stonic",
            year: 2018,
            price: 105000,
            colors: ["white", "black", "red"],
            gate: 4,
            transmission: "automatic",
            src: "images/stonic.jpg"
        },
        picanto: {
            name: "Kia Picanto",
            year: 2021,
            price: 450000,
            colors: ["white", "black", "red"],
            gate: 4,
            transmission: "automatic",
            src: "images/picanto.png"
        },
        sonet: {
            name: "Kia Sonet",
            year: 2021,
            price: 580000,
            colors: ["white", "black", "blue"],
            gate: 4,
            transmission: "automatic",
            src: "images/sonet.jpg"
        },
    },
    audi: {
        a4: {
            name: "Audi A4",
            year: 2020,
            price: 5500000,
            colors: ["white", "black", "red"],
            gate: 4,
            transmission: "automatic",
            src: "images/a4.jpg"
        },
        r8: {
            name: "Audi R8",
            year: 2022,
            price: 555000,
            colors: ["white", "black", "red"],
            gate: 2,
            transmission: "automatic",
            src: "images/r8.jpg"
        },
        a3: {
            name: "Audi A3",
            year: 2021,
            price: 450000,
            colors: ["white", "black", "red"],
            gate: 4,
            transmission: "automatic",
            src: "images/a3.jpg"
        },
        q5: {
            name: "Audi Q5 Suv",
            year: 2021,
            price: 690000,
            colors: ["white", "black", "blue"],
            gate: 4,
            transmission: "automatic",
            src: "images/q5.jpg"
        },
    },
    hyundai: {
        tucson: {
            name: "Hyundai Tucson",
            year: 2004,
            price: 3050000,
            colors: ["white", "black", "red"],
            gate: 4,
            transmission: "automatic",
            src: "images/tucson.png"
        },
        i10: {
            name: "Hyundai i10",
            year: 2007,
            price: 205000,
            colors: ["white", "black", "red"],
            gate: 4,
            transmission: "automatic",
            src: "images/i10.jpeg"
        },
        elantra: {
            name: "Hyundai Elantra",
            year: 2021,
            price: 450000,
            colors: ["white", "black", "red"],
            gate: 4,
            transmission: "automatic",
            src: "images/elantra.jpg"
        },
        venue: {
            name: "Hyundai Venue",
            year: 2009,
            price: 6850000,
            colors: ["white", "black", "blue"],
            gate: 4,
            transmission: "automatic"
            ,
            src: "images/venue.jpeg"
        },
    },
}

var brands = document.getElementById("brands")
var carModel = document.getElementById("car-model")
var carDiv = document.getElementById("car-div");
for (var company in cars) {
    // debugger
    // console.log(company);
    var options = `<option >${company}</option>`
    brands.innerHTML += options
    // console.log(options);
    for (var model in cars[company]) {
        // console.log(model);
        var colorDiv = "";
        var carData = cars[company][model]
        for (var i = 0; i < carData.colors.length; i++) {
            colorDiv += `<div class="me-2" style="width:20px; margin-bottom:5px; height:20px; border-radius:10px;background-color: ${carData.colors[i]}; border:2px solid black"></div>`
            // console.log(carData.colors[i]);
            // console.log(colorDiv);
        }
        console.log(colorDiv);
        carDiv.innerHTML += ` <div class="card">
       <img src="${carData.src}" class="card-img-top" alt="My Car"/>
          <div class="card-body">
            <h2 class="card-title">${carData.name}</h2>
            <h3 class="card-title">RS:${carData.price}</h3>
            <h6 class="card-text">Model: ${carData.year}</h6>
            <h6 class="card-text">Tramsmission: ${carData.transmission}</h6>
            <h6 class="card-text">Gates: ${carData.gate}</h6>
            <div class="d-flex">
            ${colorDiv}
            </div>
            </div>
        </div>`

    }

}

function setValue(e) {
    console.log(e.value);
    carModel.innerHTML = ""
    for (var key in cars[e.value]) {
        // console.log(cars[e.value]);
        var options = `<option >${key}</option>`
        carModel.innerHTML += options
    }
}
function search() {
    if (brands.value) {
        console.log(brands);
        var colorDiv2 = "";
        for (let i = 0; i < cars[brands.value][carModel.value].colors.length; i++) {
            // console.log(cars[brands.value][carModel.value].colors[i]);
            colorDiv2 += `<div class="me-2" style="width:20px; margin-bottom:5px; height:20px; border-radius:10px; background-color:${cars[brands.value][carModel.value].colors[i]}; border:2px solid black ;"></div>`
        }
        carDiv.innerHTML = ""
        carDiv.innerHTML = `<div class="card"">
        <img src="${cars[brands.value][carModel.value].src}" class="card-img-top" alt="my car"/>
           <div class="card-body" >
             <h2 class="card-title">${cars[brands.value][carModel.value].name}</h2>
             <h3 class="card-title">RS:${cars[brands.value][carModel.value].price}</h3>
             <h6 class="card-text">Model: ${cars[brands.value][carModel.value].year}</h6>
             <h6 class="card-text">Tramsmission: ${cars[brands.value][carModel.value].transmission}</h6>
             <h6 class="card-text">Gates: ${cars[brands.value][carModel.value].gate}</h6>
         <div class="d-flex">
         ${colorDiv2}
         </div>
         </div>
       </div>`
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Found Successfully',
            showConfirmButton: false,
            timer: 1500
        })

    } else if (!brands.value) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please select any of option!',

        })
    }

}

