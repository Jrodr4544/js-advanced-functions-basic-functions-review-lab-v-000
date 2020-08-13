// Your code here
function saturdayFun(activity = 'roller-skate') {
  return (`This Saturday, I want to ${activity}!`)
}

const mondayWork = (activity = 'go to the office') => {
  return (`This Monday, I will ${activity}.`)
}

<<<<<<< HEAD
const wrapAdjective = (param='*') => {
  return function(val = "special") {
    return (`You are ${param}${val}${param}!`)
=======
function wrapAdjective(param='*'){
  return function(val = "special") {
    console.log(`You are ${param}${val}${param}!`)
>>>>>>> d6daedca57cf9bbd158cd8a600aa985d44318599
  }
}

const Calculator = {
<<<<<<< HEAD
  add: function(a, b) {
    return a + b
  },
  subtract: function(a, b) {
    return a - b
  },
  multiply: function(a, b) {
    return a * b
  },
  divide: function(a, b) {
    return a / b
  }
}

function actionApplyer(int, actions) {
  if (actions.length < 1) {
    return int
  }
  
    for (let i = 0; i < actions.length; i++){
      int = actions[i](int);
    }
    
  return int
=======
  add: function() {
    
  },
  subtract: function() {
    
  },
  multiply: function() {
    
  },
  divide: function() {
  
  }
  }
  }
>>>>>>> d6daedca57cf9bbd158cd8a600aa985d44318599
}