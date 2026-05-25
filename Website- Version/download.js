//This code will execute when the "click" event is triggered on some button called "Download".

//The button will be contained inside of a form which will then submit the POST request to determine if 



//The function will check to see what type of machine is running, and the result of this function will be used by another function, assignToPostForm, which will set the link of the form to the link of the respective device's App Store (Google Play or Apple's App Store)


//Both of these functions are client-side javascript
function checkDeviceType(nav){

  //Tests to see if the device running this code is Apple
  if(nav.userAgent.includes("iPhone")){


    
  }

  //Tests to see if the device running this code is Android
  else if(nav.userAgent.includes("Android")){

    
  }

  else if(nav.userAgent.includes("Linux")){
//Prompt connection to https://linuxphoneapps.org/apps/    
  }
else if(nav.userAgent.includes("KaiOS"))
//Prompt connection to KaiStore
  
}




