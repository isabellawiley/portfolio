
function Contact(){

    return(
        <div id='Contact'>
            <h1>Contact</h1>
            <form action="mailto:isbwr99@gmail.com" method="POST" encType="text/plain">
                <input type='text' name='name' placeholder="Name"/>
                <input type='email' name='email' placeholder="Email"/>
                <input type='text' name ='comment' size='50' placeholder="Comment"/>
                <input type='submit' value='Send'/>
            </form>
            {/* //isabellasbwiley@gmail.com
            /* <form action="https://formspree.io/noah.appel@gmail.com" method="POST" id="ss-form">
                            <input type="hidden" name="_subject" value="Portfolio Inquiry">
                            <input type="hidden" name="_next" value="http://noahappel.me#contact">
                            <div>
                                <label for="name" class="label">Name</label>
                                <input type="text" name="name" class="input name" placeholder="Name">
                            </div>
                            <div>
                                <label for="email" class="label">Email</label>
                                <input type="email" name="email" class="input email" placeholder="Email">
                            </div>
                            <div>
                                <label for="comments" class="label">Comments</label>
                                <textarea name="comments" class="textarea comments" placeholder="Comments"></textarea>
                            </div>
                            <div>
                                <input type="submit" class="submit" value="Send">
                            </div>
                        </form> */ }
        </div>
    )
}

export default Contact;
