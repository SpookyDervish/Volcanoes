//===== ELEMENTS =====\\
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const scoreDiv = document.getElementById("scoreContainer");


//===== VARIABLES =====\\
let questions = [
    {
        question: "Why do volcanoes erupt?",
        imgSrc: "images/diagram-1.png",
        choiceA: "Because of movement of the tectonic plates",
        choiceB: "Because of explosions that shake the ground",
        choiceC: "Because of trees swaying",
        correct: "A"
    }, {
        question: "Where does the lava in the volcano come from?",
        imgSrc: "images/diagram-2.png",
        choiceA: "Out of thin air",
        choiceB: "The Earth's mantle",
        choiceC: "The Earth's core",
        correct: "B"

    }, {
        question: "What comes out of a volcano?",
        imgSrc: "images/diagram-3.png",
        choiceA: "Water, ash, and smoke",
        choiceB: "Lava, ash, and smoke",
        choiceC: "Smelly gas, ash, and smoke",
        correct: "B"
    }, {
        question: "Why do volcanoes cause so much destrution?",
        imgSrc: "images/diagram-3.png",
        choiceA: "Lava purs out of the volcano and burns and consumes nearby objects",
        choiceB: "The lava bursting ut of the volcano creates a shockwave and estroys buildings an flings peopleor objects away",
        choiceC: "The deafening sound of the volcano kills everything in a certain radius",
        correct: "A"
    }
];

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let score = 0;


//===== FUNCTIONS =====\\
function renderQuestion() {
    let q = questions[runningQuestion];

    question.innerHTML = "<p>" + q.question + "</p>";
    qImg.innerHTML = "<img src=" + q.imgSrc + " alt='Image failed to load'>";

    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}


function renderProgress() {
    for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
        progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
    }
}

function renderScore() {
    scoreDiv.style.display = "block";
    quiz.style.display = "none";
    let scorePercnt =   Math.round(100 * score / questions.length);

    scoreDiv.innerHTML = "<p style='font-size: 2.5rem; font-weight: 600;'>" + scorePercnt + "%</p>";
}

function checkAnswer(answer) {
    if (questions[runningQuestion].correct == answer) {
        score++;
    }

    if (runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
    } else {
        renderScore();
    }
}


//===== MAINS =====\\
renderQuestion();
