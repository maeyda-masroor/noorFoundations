import { Link } from "react-router-dom";
import YouTube , { YouTubeProps } from "react-youtube";
function AboutUs(){
    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
      const opts: YouTubeProps['opts'] = {
        height: '270',
        width: '270',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };    
    return <div class="container">
      <section class="about-section">
        <div class="container">
            <div class="row">                
                <div class="content-column col-lg-6 col-md-12 col-sm-12 order-2">
                    <div class="inner-column">
                        <div class="sec-title">
                            <span class="title">About Noor Education and Health Care Foundation</span>
                            <h2>We are Creative Tech Enthusiast working since 2015</h2>
                        </div>
                        <div class="text">I am Rahul Yaduvanshi works at Css3 Transition since last 3 years. We are here to provide touch notch solution for your website or web application that helps you to make your website look attractive & efficient in handling by creating usefull plugins thats you need.</div>
                      <div class="text">
                        We are here to serve you next level tutorial that currently in trend to match you with your expertise. Css3 transition is a learning website. where you can find many good quality content related to web development and tutorials about plugins. here we are using html, html5, css, css3, jquery & javascript along with inspirational UI design layout by professionals by using Photoshop and adobe allustrator.
                      </div>
                        <div class="btn-box">
                            <Link to="/contact" class="theme-btn btn-style-one">Contact Us</Link>
                        </div>
                    </div>
                </div>

                <div class="image-column col-lg-6 col-md-12 col-sm-12">
                    <div class="inner-column wow fadeInLeft">
                      <div class="author-desc">
                      </div>
                        <figure class="image-1">
                        <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={onPlayerReady} />
                        </figure>
                    </div>
                </div>
              
            </div>
           <div class="sec-title">
                            <span class="title">Our Future Goal</span>
                            <h2>We want to lead in innovation & Technology</h2>
                        </div>
          <div class="text">
                We works on UI/UX and functionality as well so that a plugins comes with proper stucture & stunning looks which suits to your web app & website.
              </div>
               <div class="text">
                We take a small toolkit here and ride it well so that it is fit for your use. One who performs well and looks even better.
              </div>
               <div class="text">                
Here we are trying to give you all kinds of technical content, whether it is related to designing or functionality. We are creating content on a lot of languages and will continue to make it free of cost even if you use it without any problem. Which is a very important thing.
              </div>
               <div class="text">
                Here you can also share the content you create, if our technical team likes it, then we will also share it on our blog.
              </div>
               <div class="text">
                
In the end, I would say keep visiting our website and enjoy the quality content.
              </div>
        </div>
    </section>
    </div>
    
}
export default AboutUs;