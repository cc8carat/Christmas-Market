const Contact = () => {
  return (
    <div className="pageHead">
      <div className="contactPage">
        <h2>You can contact us sent us a message</h2>
        <button>
          <h2>✉️</h2>
        </button>
      </div>
         <div className="form">
           <form name="contact" method="POST" data-netlify-recaptcha="true" data-netlify="true" >
            <div className="nameInput">
            <label htmlFor="name">Name</label> 
            <input type="text" id="name" name="name" placeholder="Enter your name here" />
            </div>
          <div className="emailAddress">
            <label htmlFor="email" >Email</label>  
            <input type="email" name="email" id="email" placeholder="Enter your email here" />
          </div>
          <div className="contactMessage">
            <label htmlFor="message" className="msgText" >Message</label><br />
            <textarea  name="message" id="message" cols="50" rows="10"></textarea>
          </div>
          <div data-netlify-recaptcha="true"></div>
          <div className="buttonDiv">
          <button type="submit" className="formButton">Send</button>
          </div>
        </form>
      </div>
      <div className="bouncer">
        <div>Anna</div>
        <div>Anna</div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Contact;
