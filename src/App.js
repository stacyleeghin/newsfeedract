import React, { Component } from 'react';
import Article from './Article'
import './App.css';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      articles:[
        {
          description: "Here, in Part 2 of our special three-part series, The Advertiser profiles the worst the South Australian business scene has to ... “I suspect you will never commit offences of this type again, mainly ...",
          image: "https://images.gnews.io/b6ebb3779d9b0c2423cbb5f507f866c9",
          publishedAt: "2020-08-10 20:45:00 UTC",
          title: "Risky Business: Adelaide’s biggest corporate crooks Part 2: Romeo Pacifico, Tina McPhee, Christopher Wayne Fuss, Craig Raneberg",
          url: "https://www.themercury.com.au/truecrimeaustralia/crimeinfocus/risky-business-tales-of-adelaides-biggest-corporate-crimes-part-2-romeo-pacifico-tina-mcphee-christopher-wayne-fuss-craig-ranenberg/news-story/09834c2d6b5b798ff4d0fafae1b527f5",
        },
        {
          description: "Here, in Part 2 of our special three-part series, The Advertiser profiles the worst the South Australian business scene has to ... “I suspect you will never commit offences of this type again, mainly ...",
          image: "https://images.gnews.io/b6ebb3779d9b0c2423cbb5f507f866c9",
          publishedAt: "2020-08-10 20:45:00 UTC",
          title: "Risky Business: Adelaide’s biggest corporate crooks Part 2: Romeo Pacifico, Tina McPhee, Christopher Wayne Fuss, Craig Raneberg",
          url: "https://www.themercury.com.au/truecrimeaustralia/crimeinfocus/risky-business-tales-of-adelaides-biggest-corporate-crimes-part-2-romeo-pacifico-tina-mcphee-christopher-wayne-fuss-craig-ranenberg/news-story/09834c2d6b5b798ff4d0fafae1b527f5",
        },
        {
          description: "Here, in Part 2 of our special three-part series, The Advertiser profiles the worst the South Australian business scene has to ... “I suspect you will never commit offences of this type again, mainly ...",
          image: "https://images.gnews.io/b6ebb3779d9b0c2423cbb5f507f866c9",
          publishedAt: "2020-08-10 20:45:00 UTC",
          title: "Risky Business: Adelaide’s biggest corporate crooks Part 2: Romeo Pacifico, Tina McPhee, Christopher Wayne Fuss, Craig Raneberg",
          url: "https://www.themercury.com.au/truecrimeaustralia/crimeinfocus/risky-business-tales-of-adelaides-biggest-corporate-crimes-part-2-romeo-pacifico-tina-mcphee-christopher-wayne-fuss-craig-ranenberg/news-story/09834c2d6b5b798ff4d0fafae1b527f5",
        }
      ]
    }
  }
  render (){

    return(
      <div className="app">
        <div className="nav">
          <i className="fas fa-bars"></i>
          <h2 title>VANITY FAIR</h2>
          <i className="fas fa-search"></i>
        </div>
        <div className="container">

          {
            this.state.articles.map((item)=>{
              var articleProps = {
                ...item
              }

              return (
                <Article {...articleProps}/>
              )
            })
          }

          
        </div>
      </div>
    )
  }
}

export default App;
