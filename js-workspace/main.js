

function compare(start, end){
    if(start < end){
        return -1;
    }else if(start == end){
        return 0;
    }else{
        return 1;
    }
}

function isRangeNumber(number){
    if(number >=1 && number <=1000){
        return true;
    }
    return false;
}

function calculate(start, end){

    var result = new Array();
    for(let i = start; i < end + 1; i++){
        let list = new Array();
        for(let j = start; j <= i; j++){
            let tmpString = j + "*" + i + "=" + i * j;
            list.push(tmpString);
        }
        result.push(list);
    }
    return result;
}

function createMultilyTable(start, end){
    if(compare(start, end) > 0){
        return null
    }
    if(!isRangeNumber(start) || !isRangeNumber(end)){
        return null;
    }
    var multilyTable = calculate(start, end);

    return multilyTable;
}



module.exports = createMultilyTable;
