function isPrime (n) {

    if(n <= 1) {
        return false
    } else if(n <= 3) {
        return true;
    } else if(n % 2 === 0 || n % 3 === 0) {
        return false;
    }

    let i = 5;
    while(i*i <= n) {
        if(n % i === 0 || n % (i+2) === 0) {
            return false;
        }
        i = i + 6;
    }

    return true;
}


function getPrimeNumbers(limit) {
    let primeNumbers = [];

    for(i = 0; i <= limit; i++) {
        if(isPrime(i)) {
            primeNumbers.push(i);
        }
    }

    return primeNumbers;
}

module.exports = {
    isPrime,
    getPrimeNumbers
}
