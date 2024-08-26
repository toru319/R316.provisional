const quiz = [
    {
        question: '2人が付き合った日は？',
        answers: [
            '2022年9月22日',
            '2022年9月26日',
            '2023年9月26日', 
            '2023年9月22日'
        ],
        answer: '2022年9月26日'
    },{
        question: '2人の誕生日は？',
        answers: [
            '7月19日\n12月24日', 
            '7月18日\n12月26日',
            '7月19日\n12月26日',
            '7月18日\n12月24日'
        ],
        answer: '7月19日\n12月26日'
    },{
        question: '玲美が貫にものをねだる時、どんなことをしますか？',
        answers: [
            '駄々をこねる',
            '怒る',
            '何もしない', 
            'ミニオンみたいになる'
        ],
        answer: 'ミニオンみたいになる'
    }
]

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;
const que = document.getElementById('question');
const btm = document.getElementsByClassName('btn');

const setupQuiz = () => {
    const question = quiz[quizIndex].question;
    const answers = quiz[quizIndex].answers;
    que.textContent = question;
    for (let i = 0; i < answers.length; i++) {
        btm[i].textContent = answers[i];
    }
}
setupQuiz();

const clickHandler = (e) => {
    const answer = quiz[quizIndex].answer;
    if (answer === e.target.textContent) {
        alert('正解!');
        score++;
    } else {
        alert('不正解');
    }

    quizIndex++;

    if (quizIndex < quizLength) {
        setupQuiz();
    } else {
        alert('終了! 正解数は' + score + '/' + quizLength);
    quizIndex = 0;
    score = 0;
    }
}

let handlerIndex = 0;
while (handlerIndex < btm.length) {
    btm[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handlerIndex++;
}