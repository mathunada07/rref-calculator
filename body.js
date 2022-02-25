var matrixArray = [];

function matrixToLatex(matrix) {
    let latexString = "$$\\begin{bmatrix} ";

    for (let row = 0; row < matrix.length; row++) {

        for (let col = 0; col < matrix[row].length; col++) {
            if (col == (matrix[row].length - 1)) {
                latexString += matrix[row][col];
            } else {
                latexString += matrix[row][col] + " && ";
            }
        }

        if (row != (matrix.length - 1)) {
            latexString += " \\\\ ";
        }
    }

    latexString += "\\end{bmatrix}$$";

    return latexString;
}

function stringToMatrix(arrayInput) {
    let isMatrix = true;
    matrixArray = arrayInput.split("\n");

    for (let i = 0; i < matrixArray.length; i++) {
        matrixArray[i] = matrixArray[i].split(" ");
    }

    let columns = matrixArray[0].length;

    for (let row = 0; row < matrixArray.length; row++) {
        if (matrixArray[row].length != columns) {
            isMatrix = false;
        }

        for (let col = 0; col < matrixArray[row].length; col++) {
            let cell = matrixArray[row][col];
            matrixArray[row][col] = Number(cell);

            if (isNaN(matrixArray[row][col])) {
                isMatrix = false;
            }
        }
    }

    return isMatrix;
}

function matrixUpdate() {
    let arrayString = document.getElementById("matrix-input").value;
    let isMatrix = stringToMatrix(arrayString);

    if (isMatrix) {
        let latexString = matrixToLatex(matrixArray);
        document.getElementById("matrix").innerHTML = latexString;
        MathJax.typeset();
    } else {
        document.getElementById("matrix").innerHTML = "invalid matrix";
    }
}