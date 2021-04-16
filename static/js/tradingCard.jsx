"use strict";

const tradingCardData = [
  {
    name: 'Balloonicorn',
    skill: 'video games',
    imgUrl: '/static/img/balloonicorn.jpg',
  },

  {
    name: 'Float',
    skill: 'baking pretzels',
    imgUrl: '/static/img/float.jpg'
  },

  {
    name: 'Llambda',
    skill: 'knitting scarves',
    imgUrl: '/static/img/llambda.jpg'
  },


  {
    name: 'Off-By-One',
    skill: 'climbing mountains',
    imgUrl: '/static/img/off-by-one.jpg'
  },

  {
    name: 'Seed.py',
    skill: 'making curry dishes',
    imgUrl: '/static/img/seedpy.jpg'
  },

  {
    name: 'Polymorphism',
    skill: 'costumes',
    imgUrl: '/static/img/polymorphism.jpg'
  },

  {
    name: 'Short Stack Overflow',
    skill: 'ocean animal trivia',
    imgUrl: '/static/img/shortstack-overflow.jpg'
  },

  {
    name: 'Merge',
    skill: 'bullet journaling',
    imgUrl: '/static/img/merge.jpg'
  }
];

// define TradingCard component
   // render one trading card

   function TradingCard(props) {
    return (
      <div className="card">
        <h2>Name: {props.name}</h2>
        <img src={props.imgUrl} />
        <h2>Skill: {props.skill} </h2>
      </div>
    );
  }

// define TradingCardContainer component

  // loop over each data point
  // and make a TradingCard component
  // return all those TradingCard's we made
  function TradingCardContainer() {
    const tradingCards = [];

    for (const currentCard of tradingCardData) {
      tradingCards.push(
      <TradingCard name={currentCard.name} 
      imgUrl={currentCard.imgUrl} 
      skill={currentCard.skill}/>
      );
    }

    return (
      <React.Fragment> {tradingCards} </React.Fragment>
    );

    // a way to do it with map
    // return(
    // <React.Fragment>
    //   {tradingCardData.map(currentCard =>
    //       <p key={currentCard.id}>{currentCard.name}   {currentCard.skill}</p>
    //   )}
    // </React.Fragment>
    // )
  }

// mount just ONE thing onto the page:
// one TradingCardContainer component
ReactDOM.render(
    (
      <TradingCardContainer/>
    ),
    document.querySelector('#cardblock')
  );


console.log("hiii");