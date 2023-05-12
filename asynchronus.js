//Write an asynchronous function that accepts a message string and a delay time in milliseconds.
// The function should log the message to the console after the specified delay time.
// const delayLogMessage = ()=>{
//     console.log("I will come after 20 minutes ");
// }
// setInterval(delayLogMessage,4000)

const delayLogMessage = () => {
    console.log("I will come after 20 minutes");
  };
  
  const intervalID = setInterval(delayLogMessage, 4000);
  
  
  if (intervalID) {
    clearInterval(intervalID);
  }
delayLogMessage()

//You have an array of user IDs and a function getUserData(id) 
//that returns a Promise with user data when given a user ID. 
//Write an asynchronous function that fetches and logs the data for each 
//user ID one by one, in sequence
const  idnumbers=[1,2,3,4,5,6,7,8,9];
const fetchData =async ()=>{
    for(let id in idnumbers){
                let data= await getUserData(id);
                console.log(data);
            }
}
const getUserData=(id)=>{
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(`data for user number ${id}`);
        },4000);
    })
}
fetchData()

//You have an asynchronous function performTask()
// that returns a Promise. The Promise resolves if the task
// is successful and rejects if there's an error. Write a function 
//that calls performTask() and logs a custom success message if the task
// is successful, and a custom error message if there's an error.


function performTask() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = false; 
  
        if (success) {
          resolve("Task complete");
        } else {
          reject("Task not completed to satisfaction");
        }
      }, 4000); 
    });
  }
  function handleTaskResult() {
    performTask()
      .then((result) => {
        console.log("Success:", result); 
      })
      .catch((error) => {
        console.log("Error:", error); 
      });
  }
    handleTaskResult();

