# Flash Cards
A minimal react app which helps you prepare for GRE by improving your vocabulary.

It uses soothing, and aesthetically pleasing color combinations present in nature [(thanks canva!)](https://www.canva.com/learn/100-color-combinations/) to improve concenteration, and is redundatly minimal to immerse the user and divert all the focus on the words. A modern twist on the age old tradition of using physcial flash cards to learn words.

<p align="center">
  <img src="https://github.com/CosmicCoder96/FlashCards/blob/master/demo-2.jpg?raw=true">
</p>

## Usage
Just click on a card to find the meaning of the word on it, accompanied by an example sentence which uses the word. Use the **Draw Card** to get more words!

<p align="center">
  <img src="https://github.com/CosmicCoder96/FlashCards/blob/master/demo.gif?raw=true">
</p>

## How to run

### Using the heroku deployment
The app is live on [heroku](https://flashcards-gre.herokuapp.com/).

### Setting up locally
* clone the repository or download it as zip, and navigate to the project directory.
* run `npm install` to install all the dependencies in the project.
* Start the app using `npm start`.
* All set! Browse at `localhost:3000`.

## Contributing
* Fancy reactjs ? Feel free to send a PR to improve anything.
* A vocabulary genius? Help others! The words are retrieved using a `firebase` database but a static list is maintained inside `src/Data/Cards.json`. Feel free to add more words to it!
