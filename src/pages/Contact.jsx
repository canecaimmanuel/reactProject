function Contact() {
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-8 pt-5 ps-5 pb-5 bg-secondary-subtle">
                    <img data-aos="zoom-in" data-aos-duration="2000" className="img-fluid rounded" src="https://s.yimg.com/ny/api/res/1.2/4MYO1jGN5ipGq_eZo3nmmg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQzMQ--/https://media.zenfs.com/en/buzzfeed_articles_778/1de2d560f3156351d3824108b94394f7" alt="" />
                </div>
                <div className="col-md-4 p-5 bg-dark-subtle">
                    <h5 data-aos="fade-left" data-aos-duration="1000">Mumbai, India 1980's</h5>
                    <p className="mt-4" data-aos="fade-up" data-aos-duration="1000">Mumbai, formerly known as Bombay, is a major port city on India's west coast. It is the capital of the state of Maharashtra and also the financial and entertainment capital of India. Mumbai is home to India's largest population of millionaires and billionaires.

                        Mumbai’s history dates back to the mid-17th century when the first English East India Company vessel, the Hector, landed on its shores in 1668. The area was originally part of the kingdom of Ashokavardhana, which then became part of the Maurya Empire. </p>
                </div>
            </div>
            <div className="row bg-secondary-subtle text-secondary mt-5 p-4">
                <h2 className="fw-bold" data-aos="fade-right" data-aos-duration="1000">CONTACT US</h2>
            </div>
            <div className="row bg-light p-4 mb-5">
                <div className="col-md-3 mt-4 border">
                    <h5>Get in touch</h5>
                    <p>Phone: +639 270000001</p>
                    <p>www.bshop.com</p>
                    <p>bshop.hotmail.com</p>
                    <p>www.facebook.com/bshop</p>
                    <p>www.twitter.com/bshop</p>
                    <p>www.instagram.com/bshop</p>
                </div>
                <div className="col-md-9">
                    <input
                        className="mt-4 border-secondary form-control"
                        type="text"
                        placeholder="First Name..."
                    />
                    <input
                        className="mt-4 border-secondary form-control"
                        type="text"
                        placeholder="Last Name..."
                    />
                    <span className="mt-4 border-secondary input-group-text text-muted">Message</span>
                    <textarea className="mt-2 form-control border-secondary" aria-label="With textarea"></textarea>
                    <button type="submit" className="btn btn-dark mt-3 mb-4">
                        SUBMIT
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Contact