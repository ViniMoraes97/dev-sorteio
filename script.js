const sortButton = document.querySelector(".sort-button")


function generateNumber() {
    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)



    if (min >= max) {
        alert("O Valor minimo tem que ser MENOR que o valor Maximo")

    } else {
        const result = Math.floor(Math.random() * (max - min + 1)) + min;
        alert(result)
    }




}

sortButton.addEventListener("click", generateNumber)


