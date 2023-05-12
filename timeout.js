const work= ()=>{
    console.log("lets work");//synchronus function.
}
work();

const remainder= ()=>{
 console.log("please attend the meeting");
}
setInterval(remainder,4000)
setTimeout(remainder,10000); // asynchronous does not block other functions from running until it is ready
                              // long running tasks
const takeBreak=()=>{     
    console.log("please rest");
}
takeBreak();
