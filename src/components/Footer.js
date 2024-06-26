import { ReactComponent as EmailIcon } from './logos/email-icon.svg';
import { ReactComponent as LinkedInIcon } from './logos/linkedin-icon.svg';
import { ReactComponent as GitHubIcon } from './logos/github-icon-1.svg';
import { ReactComponent as DownloadIcon } from './logos/download-icon.svg';
import '../styling/footer.css';
import resume from './assets/5-15-24mi-resume.pdf';
import ContactForm from './ContactForm';

function Footer(){

    return(
        <div className='footer'>
            <h2>Let's work together!</h2>
            <div className='ft'>
                <div className='footer-links'>
                    <a href="mailto:isabellasbwiley@gmail.com" title='Email'>
                        <span className='tooltip' data-text='Email'><EmailIcon/></span>
                    </a>
                    <a href='https://www.linkedin.com/in/isabella-wiley/' target='_blank' rel="noreferrer">
                        <span className='tooltip' data-text='LinkedIn'><LinkedInIcon/></span>
                    </a>
                    <a href='https://github.com/isabellawiley' target='_blank' rel="noreferrer">
                        <span className='tooltip' data-text='GitHub'><GitHubIcon/></span>
                    </a>
                    <a href={resume} download target="_blank" rel="noreferrer">
                        <span className='tooltip' data-text='Resume'><DownloadIcon/></span>
                    </a>
                </div>
                <ContactForm />
            </div>
            {/* <form action="mailto:wileyisabella@gmail.com" method="get" enctype="text/plain">
                Subject:<br/>
                <input type="text" name="subject" placeholder="Your Name"/><br/>
                Email:<br/>
                <input type="email" name="email" placeholder="Your Email"/><br/>
                Message:<br/>
                <textarea name="body" rows="5" cols="30" placeholder="Your Message"></textarea><br/>
                <input type="submit" value="Send"/>
            </form> */}
        </div>
    )
}

export default Footer;