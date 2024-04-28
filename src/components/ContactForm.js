import { useState } from "react";
import '../styling/projects.css';

function ContactForm(){
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");
        const formData = new FormData(event.target);

        formData.append("access_key", "bfbb5eb2-e8a3-4e43-a47c-39a6ab7dcf4f");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
          });
        
        const data = await response.json();

        if(data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        }
        else {
            console.log("Error", data);
            setResult(data.message);
        }
    }

    return(
        <div>
            <form className="ctForm" onSubmit={onSubmit}>
                <label for="name">Name</label>
                <input id="name" type="text" name="name" required/>
                <label for="email">Email</label>
                <input id="email" type="email" name="email" required/>
                <label for="message">Message</label>
                <textarea id="message" name="message" required></textarea>

                <button type="submit">Send Message</button>
            </form>
            <span>{result}</span>
        </div>
    )
}

export default ContactForm;