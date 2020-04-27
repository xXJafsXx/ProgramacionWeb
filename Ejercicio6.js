//else if statements
//operadores logicos el AND(&&) y el OR(||)
const password = 'p@ss12';

if(password.length >=12 && password.includes('@')){
    console.log('That password is mighty strong');
} else if(password.length >= 8 || password.includes('@') && password.length >=5){
    console.log('That password is strong enough')
} else{
    console.log('That password is not long enough');
}
