interface User {
  name: string;
  age: number;
}

function canDrive(usr: User) {
  console.log('user is', usr.name);

  if (usr.age >= 16) {
    console.log('allow to drive');
  } else {
    console.log('do not allow to drive');
  }
}

const tom = {
  name: 'tom',
  age: 25,
};

canDrive(tom);
//Test 01
//Test 02
//Test 03
