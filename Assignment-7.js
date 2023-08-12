function generateOTP() {
    // Generate a random 4-digit number between 0 and 9999
    const otp = Math.floor(Math.random() * 10000);
    
    // Format the OTP to have leading zeros if necessary
    const formattedOTP = otp.toString().padStart(4, '0');
    
    return formattedOTP;
  }
  
  // Generate and log a random OTP
  const otp = generateOTP();
  console.log("Generated OTP:", otp);
  