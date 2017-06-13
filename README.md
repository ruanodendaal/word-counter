# Tech test

## Brief
Given a book in a text file (http://www.loyalbooks.com/download/text/Railway-Children-by-E-Nesbit.txt)
1. Write an application that outputs the individual words that appear in the book, and how many times that word appears in the text file.
2. Output whether the number of times each word appears is a prime number.

Assumptions:
- Ignore punctuation & capitalisation

## Approach

Firstly I thought about the overall problem and the steps required to solve it. Which I broke down to these steps:
- Load a text file into a variable as a string.
- Remove any unwanted characters from the string
- Iterate through and count all words.
- Calculate if a particular word count is a prime number.
- Output result including if a prime number e.g. "'the'  frequency: 41 | Prime number?  true".

Then I decided on which testing framework. Jasmine since it's one I know and have used.

## How to run

1. Clone this repository
`$ git clone https://github.com/ruanodendaal/word-counter`

2. Install node and necessary dependancies
```
$ cd word-counter
$ brew install node
$ npm install
```

3. Run local server, with the following command:
`npm start`

4. Visit `http://localhost:3000/` in your browser

5. You can use your own or the file `railway-children.txt` in this repository.

### To run tests
- Find the `SpecRunner.html` in project root.
- Open it in your browser.

## Tools/Languages

- Jasmine v2.5.2
- JavaScript
- Node v7.9.0

## Successes

- TDD'd all my code.
- Prime algorithm, after some research I found that I could increase the efficiency of this calculation by only checking numbers up to its square root. I'm not sure how to measure this but it has to be less...right?

## Struggles

1. Node vs Browser. I spent a bit of time deciding whether or not to use Node or do this in the browser. In the end I went for the browser and tried to use Node again later. **Learning:** commit to final decision.
2. Object / class design. I feel like I jumped into writing code too soon which mean I spent time later renaming files. **Learning:** Take more time diagraming the architecture before writing code.
3. Abstracting the FileProcessor into a separate file. WIP can be found on branch `file-processor`. Came across issues waiting for the WordProcessor to complete. **Learning:** Look into creating Promises.


## Future enhancements

- Number 3 from above!
- Error Handling: Implement some error handling on the file load.
- Using something like Travic CI to auto run my tests.
