function getPrimeQuestions() {

    var questions = [];

    for (i = 1; i <= 50; i++) {
        if (i == 1) {
            questions.push({type : 1, question : i + " is a prime number?", answer: false, prompt: "The definition of a <B>prime number</B> is a positive integer that has exactly two positive divisors. However, <B>1</B> only has <B>one</B> positive divisor (1 itself), so it is <B>not</B> prime."});
        }
        else if (test_prime(i)) {
            questions.push({type : 1, question : i + " is a prime number?", answer: true, prompt: i + " is a prime number."});
        } else {
            questions.push({type : 1, question : i + " is a prime number?", answer: false, prompt: i + " can be divided by " + factors(i)});
        }
    }

    return questions;

}

const factors = number => Array
    .from(Array(number + 1), (_, i) => i)
    .filter(i => number % i === 0)

function test_prime(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;
  }
}