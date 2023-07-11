class Validations {

  validateEmail(email) {
    const re =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  validatePassword(password) {
    var lowerCaseLetters = /[a-z]/g;
    if(password.match(lowerCaseLetters)) {
      
    } else {
     
    }
  
    var upperCaseLetters = /[A-Z]/g;
    if(password.match(upperCaseLetters)) {
      
    } else {
      
    }
  
    var numbers = /[0-9]/g;
    if(password.match(numbers)) {
  
    } else {
  
    }
  
    if(password.length >= 8) {

    } else {

    }
  }
}

export default new Validations()