const dataArray = [20.0, 15.6, 27.8, 49.7, 67.2];

function calculateAverage (myarray){
    let sum = 0;
    console.log(myarray)
    for(let i = 0; i<myarray.length; i++){
        sum += myarray[i];
        console.log(sum)
    }
    let avg = sum/myarray.length;
    console.log(avg);
    let finalResult = Math.round(avg);
    console.log("Average Result is: " + finalResult);
}

calculateAverage(dataArray);
