var NOCHOSEN = '';
var datas = [
        {
            question: '琪琪收到的祖传指环是什么颜色的？',
            options: ['芋色', '蓝色', '绿色', '有收到过？'],
            answer: '2'
        },
        {
            question: '意姐的工作是__,副业是__',
            options: ['公务员，卖多肉', '卖多肉，公务员'],
            answer: '0'
        },
        {
            question: '早茶舍说的女神是谁',
            options: ['航航', '琪琪', 'xl', '可可'],
            answer: '2'
        },
        {
            question: '冬衣的号也是谁',
            options: ['洋洋', '立中', '张斌', '徒荣'],
            answer: '1'
        },
        {
            question: '航航在哪个城市留学',
            options: ['New卡So', 'Newcastle', '纽卡素', 'crystal'],
            answer: '0'
        },
        {
            question: '瑶瑶和谁滚一样的床单',
            options: ['老板', '何老板', '何Allen', 'Allen He'],
            answer: '0'
        },
        {
            question: '老板的抽屉里面是什么',
            options: [ '猫粮', 'TT','情x用品'],
            answer: '1'
        },
        {
            question: '过年后，by用的手机牌子是什么？',
            options: ['iPhone', '格力', 'Nokia', 'Vivo'],
            answer: '1'
        },
        {
            question: '早茶舍幽灵舍员是谁',
            options: ['沙沙', '芊芊', '名利', '老板'],
            answer: '01'
        },
        {
            question: '大师创作的表情包是哪个明星的',
            options: ['象晗', '马晗', '鹿晗', '羊晗'],
            answer: '2'
        },
        {
            question: 'rain和金泰熙结婚多久了？',
            options: ['刚结婚', '金婚', '大约好几百年了', '银魂'],
            answer: '2'
        },
        {
            question: '老板回阳江差点被税扯烂衫？',
            options: ['小区保安', '早餐店老板', '摩托佬', '滴滴司机'],
            answer: '2'
        },
        {
            question: '杨幂、佟丽娅、唐嫣谁最美？',
            options: ['大幂幂！', '丫丫！', '未央未央！！', 'wuli航航！！！'],
            answer: '3'
        },
        {
            question: '谁给泳衣发了个大红包，但是没有给早茶社发',
            options: ['可可', '航航', '冰洋', '琪琪'],
            answer: '0'
        },
        {
            question: '霖式形容的是什么',
            options: ['体位', '菜式', '文章的风格'],
            answer: '2'
        },
        {
            question: '早茶社每年为哪一天干杯',
            options: ['12月9日', '7月18日', '3月1日', '4月6日'],
            answer: '0'
        },
        {
            question: 'Newcastle 与 中国的时差是多少？',
            options: ['16个小时', '4个小时', '12个小时', '0时差'],
            answer: '3'
        },
        {
            question: '瑶瑶、宏柏、洋洋都有一个共同点？',
            options: ['都是男的', '都喜欢女的', '都希望舍友上厕所冲水', '都喜欢苏打绿'],
            answer: '2'
        },
        {
            question: '中秋节早茶社看了多少场电影？',
            options: ['1', '2', '3', '4'],
            answer: '1'
        },
        {
            question: '谁看起来不像是会早恋的人？',
            options: ['琪琪', '宏柏', '冬意', '洋洋'],
            answer: '2'
        },
        {
            question: '徒荣被盗号后哪里发了不该发的图片？',
            options: ['微博', 'QQ说说', '朋友圈'],
            answer: '1'
        },
        {
            question: '早茶社谁的政治90+？',
            options: ['琪琪', '如期', '可可', '宏柏'],
            answer: '1'
        },
        {
            question: '洋洋上班不久后就去医院了，为什么',
            options: ['加班太多，身体被掏空', '椅子不舒服，腰椎出问题', '编不下去了。。。'],
            answer: '1'
        },
        {
            question: '以下哪个不属于星海旗下产业',
            options: ['海记茶餐厅', '星海音乐学院', '星海家电维修', '星海师姐美甲','以上均不属于'],
            answer: '4'
        },        
        {
            question: '最悲伤的问题：谁国庆和春节都没有放假',
            options: ['琪琪', '意姐', '嗨嗨', '洋洋'],
            answer: '0'
        }
    ];

var chosenMap = {};

var score ;

    var sliderBegin = '<div class="swiper-slide">';
    var sliderEnd = '</div>';

    var questionBegin = '<div class="questionString">';
    var questionEnd = '</div>';

    var answerBegin = '<input type="radio" class="answerOp"';
    var answerEnd = '>';

    var wrapperHTML = '';
    var singleQ ;

    var answerRadio;
    var singleAnswer;


initChosenMap();
renderPage(datas);

$('.answerOp').change(function(e){
    var index = $(e.target.parentElement).attr('id').split('_')[1];
    chosenMap[index] = e.target.value;
})
$('#submitBtn').click(function(){
    var result = calcScore();
    window.open('https://sisiea.github.io/zcs/result.html?score='+result);
})




function renderPage(dataArray){
    for(var i = 0;i<dataArray.length;i++){
        singleQ = sliderBegin + questionBegin + dataArray[i].question + questionEnd + renderAnswer(dataArray[i].options,i) +sliderEnd;
        wrapperHTML = wrapperHTML + singleQ;
    }
    $('.swiper-wrapper').html(wrapperHTML);
    var $resultpage = $('<div class="swiper-slide resultPage"></div>');
    var $sureBtn = $('<div id="submitBtn">Sure</div>');
    var $resultDisplay = $('<div id="displayarea"></div>');

    $resultpage.append($sureBtn).append($resultDisplay);
    $('.swiper-wrapper').append($resultpage);
}

function renderAnswer(answerArray,index){
    answerRadio = '';
    for(var i = 0;i<answerArray.length;i++){
        singleAnswer = '';
        singleAnswer = answerBegin + 'name = "' + index + '"value = "' + i +'">' +  answerArray[i] + '<br>';
        answerRadio = answerRadio +  singleAnswer;
    }
    return '<div class="answer-area" id='+'op_'+index+'>'+answerRadio+'</div>';
}

function initChosenMap(){
    for(var i = 0;i<chosenMap.length;i++){
        chosenMap[i] = '';
    }
}

function calcScore(){
    debugger;
    var finalscore = 0;
    for(var i = 0;i<datas.length;i++){
            if(datas[i].answer.indexOf(chosenMap[i]) != -1){
                finalscore++;
            }
        }
    return finalscore;
}

function showResult(score){
    
}

