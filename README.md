# Legends of Runeterra Expedition Assistant

Our draft assistant is designed to help users make the best choices when it comes to the draft and trading phases of an expedition. By helping users piece together their deck, we believe that they will learn a lot about what type of cards work well together, and hopefully in turn learn about building their own decks.

![Pick Phase image](src/images/ReadMeImageCombined2.png?raw=true "Title")
![Trade Phase image](src/images/ReadMeImageCombined1.png?raw=true "Title")


## How To Install

To install go to the [release page](https://github.com/Saltwater-Giants/Legends-of-Runeterra-Expedition-Assistant/releases) and download the latest installer

## Roadmap
- Record a players deck to use in analytics to tweak card draft rating as well as a record for players to see their previous runs.
- Integrate a deck tracker to see what cards the player has drawn and which cards have been destroyed. As well as which cards the opponent has played and which cards they have destroyed.
- Allow for other card rating sources.
- Build out the card scorer to take into account synergy between cards in a pick as well as the cards in the deck.

## Wishlist for the future
- Incorporate machine learning to provide better weightings to the cards and create a more statistical approach to the draft suggestions.
Should the API be extended to provide a history of a player or set of players, we would be able to build an extensive database for machine learning which would provide the ability to 
- Provide a description explaining the decisions around one pick versus another. This would allow the user to understand why a particular pick is better, allowing them to apply the same logic when building their own decks in the future. 
Prevents the feeling of it being a random chance which is picked, so that if a user performs poorly with a suggested deck it would reduce the chance of it feeling like the system is suggesting incorrectly
- At the end of the draft phase provide the user with a summary of the cards picked and some suggestions of how to play the deck


## Getting Started Developing
### To Use

```bash
# Clone this repository
git clone https://github.com/Saltwater-Giants/Legends-of-Runeterra-Expedition-Assistant
# Go into the repository
cd electron-quick-start
# Install dependencies
npm install
# Run the app
npm run start
# Then run
npm run electron
```

### Building for Production
Not sure how to do this yet might be some hints in the original guide used to make this a react project
https://dev.to/jsmanifest/create-your-first-react-desktop-application-in-electron-with-hot-reload-4jj5

[Guide used to create packaging and build stuff](https://medium.com/@impaachu/how-to-build-a-react-based-electron-app-d0f27413f17f)



```bash
# create windows installer
npm run build
```

## Resources for Learning Electron

- [electronjs.org/docs](https://electronjs.org/docs) - all of Electron's documentation
- [electronjs.org/community#boilerplates](https://electronjs.org/community#boilerplates) - sample starter apps created by the community
- [electron/electron-quick-start](https://github.com/electron/electron-quick-start) - a very basic starter Electron app
- [electron/simple-samples](https://github.com/electron/simple-samples) - small applications with ideas for taking them further
- [electron/electron-api-demos](https://github.com/electron/electron-api-demos) - an Electron app that teaches you how to use Electron
- [hokein/electron-sample-apps](https://github.com/hokein/electron-sample-apps) - small demo apps for the various Electron APIs
