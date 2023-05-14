
// storing the computer and user score
let result = {user : 0, com : 0}

// finding the game result
const gameRes = (userRes, comRes) => {
    if(comRes === "rock" && userRes === "paper"){
        result.user += 1
        return "you won the game"
    }
    else if(comRes === "rock" && userRes === "scissor"){
        result.com += 1
        return "Computer won the game"
    }
    else if(comRes === "rock" && userRes === "rock"){
        result.com += 1
        result.user += 1
        return "Match draw"
    }
    else if(comRes === "paper" && userRes === "rock"){
        result.com += 1
        return "Computer won the game"
    }
    else if(comRes === "paper" && userRes === "scissor"){
        result.user += 1
        return "you won the game"
    }
    else if(comRes === "paper" && userRes === "paper"){
        result.com += 1
        result.user += 1
        return "Match draw"

    }
    else if(comRes === "scissor" && userRes === "paper"){
        result.com += 1
        return "Computer won the game"

    }
    else if(comRes === "scissor" && userRes === "rock"){
        result.user += 1
        return "You won the game"
    }
    else if(comRes === "scissor" && userRes === "scissor"){
        result.com += 1
        result.user += 1
        return "Match draw"

    }
}

let tournamentWinner = document.getElementById("tournamentWinner")
let winner = document.getElementById("winner")
let userPoint = document.getElementById("userPoint")
let comPoint = document.getElementById("comPoint")
let userSelection = document.getElementById("userSelection")
let comSelection = document.getElementById("comSelection")
let comItem = document.getElementById("comItem")

// gettin user input
const userRes = () => {
    let userRes = document.querySelectorAll(".RPSclick")
    userRes.forEach(userResult => {
    userResult.onclick = () => getInput(userResult.getAttribute("name"))
    })
}
// computer result 
const comRes = () => {
    let gameele = ["rock", "paper", "scissor"]
    let comRes = gameele[Math.floor(Math.random() * gameele.length)]
    return comRes
}

const getInput = (userRes) =>{
    if(result.user < 10 && result.com < 10){
        let comResult = comRes()
        userSelection.innerHTML =  `You selected ${userRes}`
        // console.log("user choice : ",userRes)

        comItem.style.display = "block"
        comSelection.innerHTML = `Computer selected  ${comResult}`
        comItem.src = `./img/${comResult}.png`
        // console.log("computer choice : ",comResult)

        // calling function
        let gameWinner = gameRes(userRes, comResult)

        // console.log("result \nUser : ",result.user,"\nComputer : ",result.com)

        tournamentWinner.innerHTML = ``
        winner.innerHTML = `${gameWinner}`
        userPoint.innerHTML = `User point : ${result.user}`
        comPoint.innerHTML = `Computer point : ${result.com}`
    }

    // tournament winner
    else if(result.user >= 10 || result.com >= 10){
        let winner = (result.user >= 10) ? "You wins the tournament" : (result.com >= 10) ? "Computer wins the tournament" : "draw";
        // console.log(winner)
        tournamentWinner.innerHTML = `${winner}`
    }
}
const reset = () => {
    result.com = 0
    result.user = 0
    winner.innerHTML = ``
    userPoint.innerHTML = ``
    comPoint.innerHTML = ``
    tournamentWinner.innerHTML = `Game restarted`
    comItem.style.display = "none"
    userSelection.innerHTML = ``
    comSelection.innerHTML = ``
}