import React from 'react';

const About = () => {
    return (
      <div id="about" className="shadow-sm">
        <div id="aboutHeader" className="hideAboutHeader headingSection"><h2>About Me</h2><div className="underscore"></div></div>
        <p style={{marginTop:"0.8rem"}} className="hide">I always wanted to be a chef.</p>
        <p className="hide">Watching people cook always intrigued me. From cooking shows on TV to seeing my mother cook for my family, I always find it interesting to see a variety of ingredients that have very different flavors merging into one delicious meal. One of the things I love about cooking is food plating. Arranging food on a plate as beautiful as possible without eliminating the consistency of taste is one hell of a skill. Don't get me wrong, I'm team "bubur diaduk", but seeing the shredded chicken, fried soybeans and cakwe beautifully stacked on top of the porridge is always satisfying.</p>
        <p className="hide">Many years passed and now I know I'm really bad at cooking. I throw myself into something different, web development. When you think about it, developing a website is very similar to cooking. It's all about unity of different things. Unity of different people working for the same goal, unity of different components joined to become a complete application, unity of different libraries/dependencies assimilating to help the developers. It's also about arranging parts of the web beautifully without eliminating features and making it complicated for users to use.</p>
        <p className="hide">In a way, web development fulfilled my dream of becoming a chef. Developing websites answer my urges to combine different things into something beautiful, to think of the best way to display something, to serve something that I made for others to use. And better yet, developing websites teach me to maintain something and always encourage me to keep up with rapid changes.</p>
        <p style={{fontWeight:"bold"}} className="hide">And that's why I become a Web Developer.</p>
      </div>
    );
  }
  
  export default About;