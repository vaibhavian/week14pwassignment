function calculateRemainingDays(eventDate) {
   
    const endDate = new Date(eventDate);
    

    const currentDate = new Date();

  
    const timeDifference = endDate - currentDate;

 
    const remainingDays = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    return remainingDays;
}


const eventDate = '2023-08-31';
console.log(calculateRemainingDays(eventDate)); 
