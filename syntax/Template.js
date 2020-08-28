let name = "SangMin";

let letter = 'Dear ' + name + '\n\
\n\
Lorem ipsum dolor sit amet, consectetur adipisicing elig, \n\
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' + name + '\n\
Ut enim ad minim veniam, quisnostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequat.\n\
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n\
Excepteur sint occaecat cupidatat non proident non proident, \n\
sunt in culpa qui officia deserunt mollit anim id est laborum ' + name;

console.log(letter);
//리터럴 =  정보를 표현하는 기호

let letters = `Dear ${name}  

Lorem ipsum dolor sit amet, consectetur adipisicing elig,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ${name} 
Ut enim ad minim veniam, quisnostrud ${1+1} exercitation ullamco laboris nisi ut aliquipex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident non proident,
sunt in culpa qui officia deserunt mollit anim id est laborum  ${name}`;

console.log(letters);