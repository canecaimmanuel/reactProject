function Products() {
    return (
        <div className="container">
            {/* PRODUCTS */}
            <section className="row bg-secondary-subtle p-4 mt-4">
                <div className="col-md-12">
                    <h4 className="fw-bold text-center fs-2" data-aos="fade-zoom-in" data-aos-duration="2000">OUR PRODUCTS</h4>
                    <div className="row mt-5">
                        <div className="col-md-4 d-flex mt-5" data-aos="zoom-in-up" data-aos-duration="2000">
                            <div className="card">
                                <img src={'men.png'} className="img-fluid" alt="" />
                                <div className="card-body text-center">
                                    Men's Wear
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex mt-5" data-aos="zoom-in-up" data-aos-duration="2000">
                            <div className="card">
                                <img src={'women.png'} className="img-fluid" alt="" />
                                <div className="card-body text-center">
                                    Women's Wear
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex mt-5" data-aos="zoom-in-up" data-aos-duration="2000">
                            <div className="card">
                                <img src={'child.png'} className="img-fluid" alt="" />
                                <div className="card-body text-center">
                                    Children Clothing
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mt-4 d-flex mt-5" data-aos="zoom-in-up" data-aos-duration="2000">
                            <div className="card">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiquCFrflS7rAOTJVSLLFff93QYU0brE0q4ofmW7g8xoiGfTl49fIde1n7CP4uoVb9HSM&usqp=CAU" className="img-fluid  rounded" alt="" />
                                <div className="card-body text-center">
                                    Men's Accessories
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mt-4 d-flex mt-5" data-aos="zoom-in-up" data-aos-duration="2000">
                            <div className="card">
                                <img src="https://i.pinimg.com/originals/1d/12/0c/1d120ca5bc5e5032dabb3b64b6229a53.jpg" className="img-fluid  rounded" alt="" />
                                <div className="card-body text-center">
                                    Women's Accessories
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mt-4 d-flex mt-5" data-aos="zoom-in-up" data-aos-duration="2000">
                            <div className="card">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbv1ga1CzVFcpeDJb6hAkcKbV32mhfUc6_OA&usqp=CAU" className="img-fluid  rounded" alt="" />
                                <div className="card-body text-center">
                                    Children Accessories
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Products