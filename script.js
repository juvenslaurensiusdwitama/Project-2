const questions = [
    {
        question: 'Siapa presiden pertama indonesia?',
        answers: [
            {text: 'Habibie',correct: false},
            {text: 'Soekarno',correct: true},
            {text: 'Jokowi',correct: false},
            {text: 'SBY',correct: false}
        ]
    },
    {
        question: 'Siapa petinju paling terkenal di dunia?',
        answers: [
            {text: 'Floyd Mayweather', correct: false},
            {text: 'Mike Tyson', correct: false},
            {text: 'Manny Pacquiao', correct: false},
            {text: 'Muhammad Ali', correct: true},
        ]
    },
    {
        question: 'Hewan terlambat di dunia?',
        answers: [
            {text: 'Kungkang (Sloth)', correct: true},
            {text: 'Cheetah', correct: false},
            {text: 'Harimau', correct: false},
            {text: 'Kucing', correct: false},
        ]
    },
    {
        question: 'Ulang tahun indonesia?',
        answers: [
            {text: '20 September 1945', correct: false},
            {text: '9 Januari 1947', correct: false},
            {text: '17 Agustus 1945', correct: true},
            {text: '12 Agustus 1943', correct: false},
        ]
    },
    {
        question: 'Legenda basket dunia?',
        answers: [
            {text: 'Kyrie Irving', correct: false},
            {text: 'Stephen Curry', correct: false},
            {text: 'Michael Jordan', correct: true},
            {text: 'James Harden', correct: false},
        ]
    },
]

const questionElement = document.getElementById('question')
const answerButtonGroup = document.getElementById('answer-btn-group')
const nextBtn = document.getElementById('next-button')

let score = 0
let currentIndexQ = 0

const startQuiz = () =>{
    score = 0
    currentIndexQ = 0
    nextBtn.innerHTML = 'Next'
    showQuestion()
}

const showQuestion = () =>{
    resetState()
    let currentObj = questions[currentIndexQ]
    let questionNo = currentIndexQ + 1

    questionElement.innerHTML = questionNo + '. ' +currentObj.question
    currentObj.answers.forEach(answer =>{
        let ansBtn = document.createElement('button')
        ansBtn.innerHTML = answer.text
        ansBtn.classList.add('answer-btn')
        answerButtonGroup.append(ansBtn)
        
        if(answer.correct){
            ansBtn.dataset.correct = answer.correct
        }
        ansBtn.addEventListener('click', (e)=>{
            if(e.target.dataset.correct){
                e.target.classList.add('correct')
                score++
                alert('Your answer is correct!')
            }else{
                e.target.classList.add('wrong')
                alert('Your answer is wrong!')              
            }
            Array.from(answerButtonGroup.children).forEach(btn =>{
                btn.disabled = true
            })
            nextBtn.style.display = 'block'
        })
    })
}

const handleNext = ()=>{
    currentIndexQ++
    if(currentIndexQ < questions.length){
        showQuestion()
    }else{
        questionElement.innerHTML = `You score ${score} out of ${questions.length}`
        Array.from(answerButtonGroup.children).forEach(btn=>{
            btn.remove()
        })
        nextBtn.innerHTML = 'Play Again!'
    }
}

nextBtn.addEventListener('click', ()=>{
    if(currentIndexQ < questions.length){
        handleNext()
    }else{
        startQuiz()
    }
})

const resetState = () =>{
    nextBtn.style.display = 'none'
    while(answerButtonGroup.firstChild){
        answerButtonGroup.firstChild.remove()
    }
}

startQuiz()