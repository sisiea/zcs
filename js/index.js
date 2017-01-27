var datas = [
        {
            question: '1+1?',
            options: ['2', '3', '4', '5'],
            answer: '0'
        },
        {
            question: '1+2?',
            options: ['2', '3', '4', '5'],
            answer: '1'
        },
        {
            question: '1+3?',
            options: ['2', '3', '4', '5'],
            answer: '2'
        }
    ];

    var sliderBegin = '<div class="swiper-slide">';
    var sliderEnd = '</div>';

    var questionBegin = '<div class="questionString">';
    var questionEnd = '</div>';

    var answerBegin = '<input type="radio"';
    var answerEnd = '>';

    var wrapperHTML = '';
    var singleQ ;

    var answerRadio;
    var singleAnswer;





renderPage(datas);

function renderPage(dataArray){
    for(var i = 0;i<dataArray.length;i++){
        singleQ = sliderBegin + questionBegin + dataArray[i].question + questionEnd + renderAnswer(dataArray[i].options) +sliderEnd;
        wrapperHTML = wrapperHTML + singleQ;
    }
    $('.swiper-wrapper').html(wrapperHTML);
}

function renderAnswer(answerArray){
    answerRadio = '';
    for(var i = 0;i<answerArray.length;i++){
        singleAnswer = '';
        singleAnswer = answerBegin + 'name = ' +'i' + 'value = "' + i +'">' +  answerArray[i] + '<br>';
        answerRadio = answerRadio +  singleAnswer;
    }
    return '<div class="answer-area">'+answerRadio+'</div>';
}