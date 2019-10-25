function uniqueArray() {
    var myArr = ["A", "B", "C", "A", "D", "E", "D"];
    for (var i = 0; i < myArr.length; i++) {
        for (var j = i + 1; j < myArr.length; j++) {
            if (myArr[i] == myArr[j]) {
                myArr.splice(j, 1);
            }
        }
    }
    alert(myArr);
}
function uniqueArr() {
    var myArr = ["A", "B", "C", "A", "D", "E", "D"];
    ArrLen = myArr.length;
    for (var i = 0; i < ArrLen; i++) {
        for (var j = i + 1; j < ArrLen; j++) {
            if (myArr[i] == myArr[j]) {
                myArr[j] = myArr[ArrLen - 1];
                ArrLen--;
                myArr.pop();
            }
        }
    }
    alert(myArr);
}
function printDup() {
    var myArr = ["A", "B", "C", "A", "D", "E", "D", "D", "B", "A"];
    ArrLen = myArr.length;
    var dupArray=[];
    for (var i = 0; i < ArrLen; i++) {
        for (var j = i + 1; j < ArrLen; j++) {
            if (myArr[i] == myArr[j] && dupArray.indexOf(myArr[j])==-1) {
                dupArray.push(myArr[j]);

            }
        }
    }
}
function uniqueRandom() {
    var myArr = [];
    for (i = 1; i <= 100; i++)
        myArr.push(i);

    var randomIndex = [];
    while (randomIndex.length < 40) {
        var rand = Math.floor(Math.random() * 100);
        if (randomIndex.indexOf(rand) == -1)
            randomIndex.push(rand);
    }
    for (j = 0; j < randomIndex.length; j++) {
        document.write(myArr[randomIndex[j]]);
        document.write('<br/>');
    }

}