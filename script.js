const clues = [

    {
        emoji: "😊",

        question: `
            You liked this even though it was incomplete...<br>
            It was broken, but somehow that made it special.<br>
            What was it?
        `,

        answers: [
            "little finger",
            "littlefinger",
            "small finger"
        ]
    },


    {
        emoji: "😜",

        question: `
            Think of all the times we ate together...<br>
            Which food did we end up having again and again?
        `,

        answers: [
            "mutton",
            "paratha",
            "Paratha / Non veg",
            "non veg",
            "nonveg"
        ]
    },


    {
        emoji: "👤",

        question: `
            Most of the time, it was just us...<br>
            But one day, someone unexpected joined our usual plan.<br>
            Who was that special third person?
        `,

        answers: [
            "skanda"
        ]
    },


    {
        emoji: "😋",

        question: `
            Among all the biryanis we've had,<br>
            which one kept making its way back to our table?
        `,

        answers: [
            "prawn briyani",
            "prawn biriyani",
            "prawn"
        ]
    },


    {
        emoji: "🤓",

        question: `
            Remember our cooking moment? 👩‍🍳<br>
            We didn't just eat it... we actually made it!<br>
            What fry did we make?
        `,

        answers: [
            "fish fry"
        ]
    },


    {
        emoji: "🎁",

        question: `
            There was one box that made us unusually excited to open it... 😏<br>
            It wasn't a gift box, but opening it felt like one.<br>
            What was it?
        `,

        answers: [
            "tiffin box",
            "tiffinbox",
            "tiffin"
        ]
    }

];


let current = 0;


/* Convert answer into simple format */

function normalize(value) {

    return value
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9 ]/g, "")
        .replace(/\s+/g, " ");

}


/* Start treasure hunt */

function startHunt() {

    document
        .getElementById("welcome")
        .classList
        .add("hidden");


    document
        .getElementById("hunt")
        .classList
        .remove("hidden");


    showClue();

}


/* Show current clue */

function showClue() {

    const clue = clues[current];


    document
        .getElementById("progress")
        .textContent =
        `Clue ${current + 1} of ${clues.length}`;


    document
        .getElementById("clueEmoji")
        .textContent =
        clue.emoji;


    document
        .getElementById("clueTitle")
        .textContent =
        `Clue ${current + 1}`;


    document
        .getElementById("question")
        .innerHTML =
        clue.question;


    document
        .getElementById("answer")
        .value = "";


    document
        .getElementById("result")
        .textContent = "";


    document
        .getElementById("answer")
        .focus();

}


/* Check answer */

function checkAnswer() {

    const input =
        normalize(
            document.getElementById("answer").value
        );


    const valid =
        clues[current].answers.some(
            answer =>
                normalize(answer) === input
        );


    const result =
        document.getElementById("result");


    /* Empty answer */

    if (!input) {

        result.textContent =
            "Type your answer first 😊";

        return;
    }


    /* Correct answer */

    if (valid) {

        if (current === clues.length - 1) {

            document
                .getElementById("hunt")
                .classList
                .add("hidden");


            document
                .getElementById("treasure")
                .classList
                .remove("hidden");


            return;
        }


        result.textContent =
            "🎉 Correct! You found the next clue!";


        result.style.color =
            "#2e7d32";


        setTimeout(function() {

            current++;

            showClue();

        }, 900);

    }


    /* Wrong answer */

    else {

        result.textContent =
            "❌ Not quite... Think about our memories and try again! ❤️";


        result.style.color =
            "#c62828";

    }

}


/* Press Enter to submit */

document
    .getElementById("answer")
    .addEventListener(
        "keydown",
        function(event) {

            if (event.key === "Enter") {

                checkAnswer();

            }

        }
    );
