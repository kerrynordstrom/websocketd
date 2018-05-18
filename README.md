# Randomizer

This is a program which creates a bash session using “websocketd” (https://github.com/joewalnes/websocketd). Once it is run, it outputs 10kb of random data from the WebSocket. Using the data received from the websocket, the 800x100 Canvas within the HTML document renders where every 1 received from WebSocket is drawn as black, and any 0 is drawn as white. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites

What things you need to install the software and how to install them

```
you must have websocketd and node installed to run this program 
```

### Installing

A step by step series of examples that tell you have to get a development env running

Once you have cloned the repo to your machine, navigate to the folder and run this command to set up your server.

```
websocketd --port=8080 --staticdir=. ./count.sh
```

Then go to your console and navigate to

```
localhost:8080/count.html
```
Your result should render once the numbers are generated (done so with an arbitrary resting time of 1/100th of a second per number).

## Built With

* [WebSocketd](https://github.com/joewalnes/websocketd) - The web socket package used
* [Node](https://nodejs.org/) - Node.js

## Authors

* **Kerry Nordstrom** - *Initial work* - [KerryNordstrom](https://github.com/kerrynordstrom)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
# websocketd
