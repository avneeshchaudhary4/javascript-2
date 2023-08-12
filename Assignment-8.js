function calculateDaysUntilEvent(eventStartDate) {
    // Get the current date and time
    const currentDate = new Date();
    
    // Parse the event's start date
    const startDate = new Date(eventStartDate);
    
    // Calculate the time difference in milliseconds
    const timeDifference = startDate - currentDate;
    
    // Calculate the number of days
    const daysUntilEvent = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    
    return daysUntilEvent;
  }
  
  // Example usage
  const eventStartDate = '2023-09-01'; // Replace this with your event's start date
  const daysUntilEvent = calculateDaysUntilEvent(eventStartDate);
  console.log("Days until event:", daysUntilEvent);
  