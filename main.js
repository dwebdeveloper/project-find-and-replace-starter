// You should NOT change the HTML or CSS in this project (at least until you reach
// the bonus objectives). Focus on the JavaScript.

const findInput = document.querySelector(".find-input")
const replaceInput = document.querySelector(".replace-input")
const replaceAllButton = document.querySelector(".replace-all-button")

// The following variable holds your OUTER ARRAY of row elements.
// Later you will need an OUTER LOOP to loop over the individual elements within
// this array.
const rowElements = document.querySelectorAll(".row")

// When you call the function belwo, it will get and return an INNER ARRAY
// containing the cell elements for a given row.
// Call this function from WITHIN your row elements loop. Then you will, in turn,
// need to loop over the resulting cell elements. But where should this whole
// NESTED LOOP go? Think through the user's experience: when should WHAT happen? 
function getCellElements(currentRowElement) {
    return currentRowElement.querySelectorAll(".cell")
}


replaceAllButton.addEventListener('click', function () {
    let inputString = findInput.value;
    let replaceText = replaceInput.value;
    //console.log(inputString + ' To be searched');
    //console.log('To be replaced with ' + replaceText);

    for (let outerArray = 0; outerArray < rowElements.length; outerArray += 1) {
        //console.log(rowElements.length); // Here as reference for the amount of rows available
        const currentRowElement = rowElements[outerArray] // Here to specify the rows

        const cellElements = getCellElements(currentRowElement)
        for (let innerCellArray = 0; innerCellArray < cellElements.length; innerCellArray += 1) {
            // console.log(cellElements.length)
            const eachCellText = cellElements[innerCellArray]// Here the value in each cell is shown
            //console.log(eachCellText)
            let innerCellText = eachCellText.innerHTML
            // console.log('The value inside the innerCellText is: ' + innerCellText)
            //console.log(innerCellText.includes(inputString))

            if (innerCellText.includes(inputString)) {
                let replacestring = innerCellText.replace(inputString, replaceText)
                eachCellText.innerHTML = replacestring
                console.log(innerCellText, inputString)
            } else {
                return alert('NO Match')
            }

        }
    }
})
