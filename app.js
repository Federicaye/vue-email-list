
const { createApp } = Vue;
createApp({
    data() {
        return {
            catImgUrl: null,
            tenEmail: [],
            filmQuestionText: "",
            answers: [],
            correctAnswer: "",
            computerQuestions: []
        }
    },
    methods: {},
    methods: {
        getRandomEmail() {
            for (let i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {
                    this.emailRnd = response.data.response;
                    this.tenEmail.push(this.emailRnd);
                })
            }
        },
        solarIrradiance() {
            axios.get('https://api.openweathermap.org/energy/1.0/solar/data?lat=60.45&lon=-38.67&date=2024-04-9&tz=+03:00&APPID=').then((response) => {
                console.log(response.data);
            })
        },
        catImg() {
            axios.get('https://api.thecatapi.com/v1/images/search').then((response) => {
                this.catImgUrl = response.data[0].url;
            })
        },
        filmQuestion() {
            axios.get('https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple').then((response) => {
                this.filmQuestionText = response.data.results[0].question;
                this.answers = response.data.results[0].incorrect_answers;
                console.log(this.filmQuestionText);
                console.log(response.data.results[0].incorrect_answers);
                console.log(this.answers);
                this.correctAnswer = response.data.results[0].correct_answer;
            })
        },
        computerScienceQuestion() {
            axios.get('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple').then((response) => {
                this.computerQuestions = response.data.results;
                console.log(this.computerQuestions) 
                /* const questionScience = response.data.results;
                console.log(this.questionScience); */
            })
        }
    },
    computed: {},
    mounted() {
        this.catImg();
        this.filmQuestion();
       this.computerScienceQuestion(); 
       this.solarIrradiance();
    }
}).mount('#app')