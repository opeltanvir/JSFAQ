function explain_callback(name, age, task) {
    console.log('Hello', name );
    console.log('your age ', age);
     task();   
}

function washHand() {
    console.log('wash hand with soap')    
}
function takeShower() {
    console.log('Take shower');
}
function scrollFacebook() {
    console.log('scroll facebook but dont like any post')
}

explain_callback('sogir uddin',17, washHand);
explain_callback('jakir' ,13,takeShower);
explain_callback('mugir uddin', 21,scrollFacebook);