import factories from "./factories.js"

const selectPleaNum = document.getElementById("repetitions")
const childPlea = document.getElementById("childPlea")

const domManager = {
    buildSelectOptions() {
        for (let i = 1; i < 101; i++){
            if (i === 1) {
                selectPleaNum.innerHTML += factories.repetitionsFactory("Random")
            }
            selectPleaNum.innerHTML += factories.repetitionsFactory(i)
        }
    },
    printPleasToDOM() {
        const demands = document.getElementById("pleaContainer")
        demands.innerHTML = ""
        let pleaNum = selectPleaNum.value
        const plea = childPlea.value
        if (pleaNum === "Random") {
            pleaNum = factories.getRandom(100)
        }
        
        for (let i = 0; i < pleaNum; i++){
            (factories.coinToss() ? demands.innerHTML += `<div>${plea}!</div>` : demands.innerHTML += `<div>${plea.toUpperCase()}!</div>`)
        }
    }
}

export default domManager