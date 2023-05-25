function Home() {
    return (
        <div className="container my-5 ">
            {/* HERO SECTION */}
            <section className="row mb-5">
                <div className="col-md-4 mt-5 mb-5" data-aos="fade-right">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS232JuMZ_RhBMWlSWa3nledz1du1OijxJ7-g&usqp=CAU" className="img-fluid w-100" />
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-7 my-auto text-start" data-aos="fade-left" >
                    <h1 className="fw-bold ">GREETINGS B.SHOPPERS</h1>
                    <p className="text-secondary fs-4">Shop in Style, Get the Look You Love at Our Store.</p>
                </div>
            </section>

            <section className="row bg-secondary-subtle mt-5 mb-5">
                <div className="text-center" >
                    <p className="fs-1 fw-bold p-4" data-aos="flip-up" data-aos-duration="1000"> “The New Look”</p>
                    <p className="fs-3 p-4 text-secondary" data-aos="fade-up" data-aos-duration="2000">In the heart of downtown, a new fashion shop has opened for business. The shop is full of stylish and timeless clothes, ranging from casual daywear to sophisticated evening gowns. Regardless of the occasion, customers can find an outfit that suits their style and personality. All of the clothes in the shop are hand-picked by the owners and displayed with care.
                    </p>
                </div>
            </section>

            <section className="row mt-5 ">
                <div className="col-md-6 bg-dark text-center text-light p-5 ">
                    <h1 className="fw-bold p-3 ">SALE! UP TO 50%</h1>
                    <p className="fs-4" data-aos="fade-right" data-aos-duration="2000">This deal applies to all our products, including our top-of-the-line merchandise. So whether you're looking for clothes, or accessories you won't want to miss this incredible opportunity.
                        Plus, our prices are already competitively priced, so you'll be getting an even bigger discount than you would from other stores. And because it's 50%, you can buy twice as much for the same price.</p>
                </div>
                <div className="col-md-6 bg-secondary p-5">
                    <img className="img-fluid rounded" src="https://m.media-amazon.com/images/I/71lRYxDni0L._AC_UY1000_.jpg" alt="" />
                </div>
            </section>


            {/* TESTIMONIES */}
            <section className="row p-4 mt-5">
                <p className="fw-bold text-uppercase fs-1 p-3 bg-secondary-subtle" data-aos="fade-up" data-aos-duration="2000">Testimonials</p>
                <div id="carouselExampleCaptions" className="carousel slide" data-aos="zoom-in" data-aos-duration="2000">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://img.freepik.com/premium-psd/creative-concept-satisfied-feedback-customer-testimonial-social-media-instagram-post-template_85867-838.jpg?w=2000" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block text-secondary">
                                <h5>First Testimony</h5>
                                <p>Coming from satisfied customer.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="https://elevationb2b.com/wp-content/uploads/2021/01/Facebook-Testimonial-1.png" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block text-secondary">
                                <h5>Second Testimony</h5>
                                <p>Coming from satisfied customer.</p>
                            </div>
                        </div>
                        <div className="carousel-item ">
                            <img src="https://img.pikbest.com/origin/06/43/67/17PpIkbEsTWAe.jpg!w700wp" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block text-secondary">
                                <h5>Third Testimony</h5>
                                <p>Coming from satisfied customer.</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
        </div>
    )
}

export default Home