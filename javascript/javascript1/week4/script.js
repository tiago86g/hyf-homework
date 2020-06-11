// 1. Voice assistant
let user = { todo: [] };

function getReply(command) {
  command = command.split(' ');
  const x = parseInt(command[2]);
  const y = parseInt(command[4]);
  const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  // console.log(user, user.name, command.slice(-1), command.includes('Hello'));

  if (command.includes('Hello') && command.slice(-1) == user.name) {
    return console.log(`Good to see you again ${user.name}`);
  } else if (command.includes('Hello')) {
    user.name = command.slice(-1).toString();
    return console.log(`Nice to meet you ${user.name}`);
  } else if (command === 'What is my name' && user.name == undefined) {
    return console.log(`Sorry, but I don't know you`);
  } else if (command.includes('name?')) {
    return console.log(`Your name is ${user.name}`);
  } else if (command.includes('Add')) {
    newTodo = command.slice(1);
    newTodo = newTodo.slice(0, -3).join(' ');
    user.todo.push(newTodo);
    console.log(user);
  } else if (command.includes('Remove')) {
    todoToRemove = command.slice(1);
    todoToRemove = todoToRemove.slice(0, -3).join(' ');
    userTodo = user.todo;
    index = userTodo.indexOf(todoToRemove);
    if (index == -1) {
      console.log(`Your todo is not valid`);
    } else {
      user.todo.splice(index, 1);
      console.log(`Removed ${todoToRemove} from your todo`, user.todo);
    }
  } else if (command.includes('What is on my todo?')) {
    console.log(`you have ${user.todo.length} todos - ${user.todo.toString()}`);
  } else if (command.includes('today?')) {
    const todayMonth = month[new Date().getMonth()];
    const todayDay = new Date().getDate();
    const todayYear = new Date().getFullYear();
    console.log(`Today is ${todayDay}. of ${todayMonth} ${todayYear}`);
  } else if (command.includes('+')) {
    const calc = x + y;
    console.log(calc);
  } else if (command.includes('x')) {
    const calc = x * y;
    console.log(calc);
  } else if (command.includes('Set')) {
    timer = parseInt(command[4]);
    console.log(`Timer set for ${timer} seconds`);
    setTimeout(
      task => console.log(`Your ${timer} seconds are gone!`),
      timer * 1000
    );
  } else if (command.includes('Clean')) {
    console.log(`Ok ${user.name}, your data has been erased`);
    user = new Object();
    console.log(user);
  }
}

getReply('Hello my name is Benjamin');
getReply('Hello my name is Benjamin');
getReply('Hello my name is Tiago');
getReply('Add fishing to my todo');
getReply('Add singing in the shower to my todo');
getReply('What is my name');
getReply('Remove fishing from my todo');
getReply('Add fishing to my todo');
getReply('What is on my todo?');
getReply('What day is it today?');
getReply('what is 2 + 3');
getReply('what is 3 x 5');
getReply('Set a timer for 3 secundes');
getReply('Clean my data');
