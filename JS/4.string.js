// 문자열
let string = '안녕하세요';
string = '안녕!';
console.log(string);
string = "'안녕'";
console.log(string);

// 특수 문자 출벽하는법
string = "'안녕'";
console.log(string);

string = '안녕!\n안녕!\t\t내 이름은\\\u09AC';
console.log(string);

// 템플릿 리터럴 (Template Literal)
let id = '엘리';
let greetings = "'안녕!'" + id + "🙌\n즐거운 하루 되세요!";
console.log(greetings);

greetings = `'안녕, ${id}👋 즐거운 하루 보내세요'`;
console.log(greetings);

// ${} 어떤 특수한 변수가 가르키는 데이터를 읽고싶을때는 변수 또는 표현식도 충분히 넣을수 있다.