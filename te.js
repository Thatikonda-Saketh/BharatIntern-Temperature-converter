const celTOfah = (num) => {
    let fahrenheit = (num*(9/5)+32);
    return fahrenheit;
}
const fahTOcel = (num)=>{
    let celsius = ((num-32)*5/9);
    return celsius;
}
function conversion()
{var choice = document.getElementById("choice#").value
var num = document.getElementById("degree-input").value
    //const choice = choice#.options[tempSelected.selectedIndex].value
    var count=0
    if(choice=="celcius")
    {
        count = celTOfah(num)
        count=count+' fahrenheit'
    }
    else if(choice=="Fahrenheit"){
        count = fahTOcel(num)
        count=count+ ' celcius'
    }
    document.getElementById('count').innerHTML=count;
    return
}