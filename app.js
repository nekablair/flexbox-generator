// alert("hi")
let flexContainer = document.getElementById("flexContainer")

count = 0
function makeFlexItems(count) {
    flexContainer.innerHTML = ""
    for(let i = 0; i < count; i++) {
        const flexItem = document.createElement("div")
        flexItem.classList.add("flexItem")
        flexItem.textContent = `Item: ${i + 1} |`
        flexContainer.appendChild(flexItem)
    }
}

const userInput = input("Enter the number of flex items you want: ")
const itemCount = parseInt(userInput)

if (!isNaN(itemCount) && itemCount > 0) {
    makeFlexItems(itemCount)
} else {
    alert("Please enter a value greater than 0.")
}