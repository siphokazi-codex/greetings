function getMessage(firstname, language) {

    firstname =  firstname.substr(0,1).toUpperCase() + firstname.substr(1).toLowerCase();
  if (language === "English"){
      return "Hello, " + firstname
  }
  else if (language === "French") {
      return "Bonjour, " + firstname
  }
  else if(language === "Tshivenda"){
   return "Ndaa, " + firstname
  }
}
