const question = {
    stem: "Who was the 22nd President of the United States",
    option1: "John Tyler",
    option2: "Grover Cleveland",
    option3: "Benjamin Harrison",
    option4: "Abraham Lincoln",
    correct: 2,
    display: () => {
        document.querySelector('#stem').textContent = question.stem;
        document.querySelector('#john').textContent = question.option1;
        document.querySelector('#grover').textContent = question.option2;
        document.querySelector('#benjamin').textContent = question.option3;
        document.querySelector('#abraham').textContent = question.option4;


        // display the question options here
    },
    check: (userChoice) => {
        const feedback =  document.querySelector('#feedback')
        if (userChoice === question.correct){
            feedback.textContent = "That's Correct!"
        }
        else if(userChoice === 1) {
            feedback.textContent = `Incorrect, ${question.option1} was the 10th`
        }
        else if(userChoice === 3) {
            feedback.textContent = `Incorrect, ${question.option3} was the 23rd`
        }
        else if(userChoice === 4) {
            feedback.textContent = `Incorrect, ${question.option4} was the 16th`
        }
    }   

}

document.querySelector('#john').addEventListener('click', () => {
    question.check(1)
})
document.querySelector('#grover').addEventListener('click', () => {
    question.check(2)
})
document.querySelector('#benjamin').addEventListener('click', () => {
    question.check(3)
})
document.querySelector('#abraham').addEventListener('click', () => {
    question.check(4)
})

question.display();