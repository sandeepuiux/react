import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';

const Footer = () => {



return(
    <>
    <footer className="p-2">
        <div className="container">
            <div className="row">
                <div className="col-5 col-md-5 small">&#169; Copyright 2020</div>
                <div className="col-7 col-md-7 small text-right">Follow Us:&nbsp;
                <a style={{color: '#3e54aa'}} href="https://www.facebook.com/sandeep.saxena.1447342" target="_blank"><FacebookIcon/></a>&nbsp;
                <a style={{color: '#0678b6'}} href="https://www.linkedin.com/in/sandeep-kumar-41a656118/" target="_blank"><LinkedInIcon/></a>&nbsp;
                <a style={{color: '#ff2d3c'}} href="https://www.youtube.com/channel/UCUevxYRYOniWt9Fj0WU_s3w" target="_blank"><YouTubeIcon/></a>&nbsp;
                <a style={{color: '#60b8ff'}} href="https://twitter.com/sandeepwebdesig" target="_blank"><TwitterIcon/></a></div>
            </div>
        </div>
    </footer>
    </>
)

}

export default Footer;