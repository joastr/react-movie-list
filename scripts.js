'use strict';
/*
var element = 
    React.createElement('div', {}, 
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {},
            React.createElement('li', {},
                React.createElement('h2', {}, 'Harry Potter'),
                React.createElement('p', {}, 'Film o czarodzieju')
            ),
            React.createElement('li', {},
                React.createElement('h2', {}, 'Król Lew'),
                React.createElement('p', {}, 'Film opowiadający historię króla sawanny')
            )    
        )         
    );

    ReactDOM.render(element, document.getElementById('app'));
*/

var movies = [
{
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    image: './photo/harry.png',
    //sep: '',
},
{
    id: 2,
    title: 'Król Lew',
    desc: 'film o królu sawanny',
    image: './photo/leo.png',
    //sep: ''
},
{
    id: 3,
    title: 'Gladiator',
    desc: 'film o herosie',
    image: './photo/gladiator.png',
    //sep: ''
},
{
    id: 4,
    title: 'Spiderman',
    desc: 'film o człowieku pająku',
    image: './photo/spider.png',
    //sep: ''
}

];

var moviesElements = movies.map(function(movie) {
    return React.createElement('li', {key: movie.id},
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {src: movie.image, style: {width:"200px", height:"auto" }})
      );
  });

var element =
  React.createElement('div', {style: {display:"block", margin:"0 auto", width: "800px"}},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
);

ReactDOM.render(element, document.getElementById('app'));