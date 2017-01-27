    var resultHeader = '支付宝口令:';
    var result = ['早茶社新年快乐','早茶社新年djb','心怀早茶新年大吉','居然全对了'];

    var score = parseInt(GetQueryString('score'));
    var scoreIndex;

    if(score<15){
        scoreIndex = 0;
    }
    else if(score<20){
        scoreIndex = 1;
    }
    else if(score<23){
        scoreIndex = 2;
    }else if(score==23){
        scoreIndex = 3;
    }

    $('#result').text(resultHeader+result[scoreIndex]);

    
function GetQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}