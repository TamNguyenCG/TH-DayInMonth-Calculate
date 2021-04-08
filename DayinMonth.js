function dayCalculate() {
    let ip=+document.getElementById('ip').value
    let result
    switch (ip){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            result=('31 days')
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            result=('30 days')
            break;
        case 2:
            result=('28 or 29 days')
            break;
    }


    /*if (ip==1||ip==3||ip==5||ip==7||ip==8||ip==10||ip==12){
        result=('31 days')
    }else if(ip==4||ip==6||ip==9||ip==11){
        result=('30 days')
    }else if (ip==2){
        result=('28 or 29 days')
    }*/
    document.getElementById('result').innerHTML=('This month have:'+result)
}

