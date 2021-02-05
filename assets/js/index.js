let randomAnswers = [
    "It is certain", 
    "It is decidedly so", 
    "Without a doubt", 
    "Yes - definitely",
    "You may rely on it", 
    "As I see it, yes", 
    "Most likely", 
    "Outlook good", 
    "Yes", "Signs point to yes",
    "Don't count on it", 
    "My reply is no",
    "My sources say no", 
    "Outlook not so good",
    "Very doubtful", 
    "Reply hazy, try again", 
    "Ask again later", 
    "Better not tell you now",
    "Cannot predict now", 
    "Concentrate and ask again"
];


let randomAnswer = Math.floor(Math.random() * randomAnswers.length)

$('.submitBtn').on('click', function () {
    $(this).hide()
    $('.visually-hidden').text(`🎱 The 8ball has answered! ${randomAnswers[randomAnswer]}`)
    $('.visually-hidden').attr('class', 'lead')
});