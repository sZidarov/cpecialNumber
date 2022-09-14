function specialNumbers (input){
    let num = Number (input[0]);
    let printLine = "";
    for (i=1111;i<=9999;i++){
        let currentNum = ""+i;
        let isSpecial=true;
        for (j=0;j<currentNum.length;j++){
            let currentDigit = Number (currentNum.charAt(j));
            if(num%currentDigit!==0){
                isSpecial=false;
                break;
            }

        }
        if(isSpecial){
            printLine += currentNum+" ";
        }
    }
    console.log(printLine);
}
specialNumbers(["16"])
