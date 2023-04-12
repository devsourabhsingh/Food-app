import React from 'react'

const MenuNew= (props) => {
  return (
    <>
      {/* my main items section */}
      <div className="menu-items container-fluid mt-5">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="row my-5 ">
              {props?.items?.length > 0 &&
           props?.items.map((elem) => {
                  const { id, fname, image, description, price } = elem;
                  return (
                    <div className="item1  col-md-4 col-lg-4  my-5" key={id}>
                      <div className="row Item-inside">
                        {/* for images */}
                        <div
                          className="
 col-lg-4 img-div"
                        >
                          <img
                            src={image}
                            alt="menuPic"
                            className="img-fluid"
                          />
                        </div>
                        {/* menu items desciption */}
                        <div className="col-12 col-md-12 col-lg-8">
                          <div
                            className="main-title pt-4
 pb-3"
                          >
                            <h1>{fname}</h1>
                            <p>
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Deleniti, asperiores?
                            </p>
                          </div>
                          <div className="menu-price">
                            <div className="price-book-divide d-flex justify-content-between">
                              <h2>price :{price}</h2>
                              <a href="#">
                                <button className="btn btn-primary">
                                  order now
                                </button>
                              </a>
                            </div>
                            <p>price may vary on selected date</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default MenuNew;