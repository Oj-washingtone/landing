import Image from "next/image";
import styles from "./main.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import BlogSection from "@/components/blog/BlogSection";
import FAQs from "@/components/faqs/faqs";

export default function Home() {
  return (
    <div>
      <Header />

      <main className="main">
        <div className="container">
          {/* <!-- Intro Section --> */}
          <div className="row">
            <div className="col-sm-12 intro-section">
              <div className="row">
                <div className="col-sm-6 intro-wrapper">
                  <div className="welcome">Welcome</div>
                  <h1 className="poppins-extrabold intro-text">
                    Securing kid's future, one bus at a time.
                  </h1>

                  <div className="actions">
                    <button className="my-btn custom-btn-outline">
                      Learn More
                    </button>
                    <button className="my-btn custom-btn-fill">
                      Contact Us
                    </button>
                  </div>
                </div>
                <div className="col-sm-6 intro-wrapper intro-image">
                  <Image
                    src="/img/gallery/1.jpg"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Intro section -->
    <!-- About the project --> */}
          <div className="row about-wrapper" id="about">
            <div className="col-sm-6">
              <div className="main-image-wrapper">
                <Image
                  src="/img/gallery/2.jpg"
                  alt="Picture of the author"
                  width={400}
                  height={400}
                />
              </div>
            </div>

            <div className="col-sm-6">
              <div className="my-about-text">
                <h4 className="poppins-extrabold section-title">About</h4>
                <h1 className="poppins-extrabold about-intro">What's Our</h1>
                <h1 className="poppins-extrabold about-intro">Product Story</h1>
              </div>

              <p className="normap-text poppins-regular">
                Or innovative products are committed to ensuring the safety of
                our children. Our journey began with a simple idea - to secure
                school buses and provide peace of mind for parents and schools.
                Our innovative solution monitors and secures school buses,
                ensuring that every child's journey to and from school is safe.
              </p>

              {/* <ul>
                <li><i className="bi bi-chevron-double-right"></i> About</li>
                <li><i className="bi bi-chevron-double-right"></i> About</li>
                <li><i className="bi bi-chevron-double-right"></i> About</li>
                <li><i className="bi bi-chevron-double-right"></i> About</li>
                <li><i className="bi bi-chevron-double-right"></i> About</li>
              </ul> */}
            </div>
          </div>
          {/* <!-- End about the project --> */}

          <div className="row features-section" id="features">
            <div className="section-header">
              <h4 className="poppins-extrabold section-title">Our Approach</h4>
              <h3 className="poppins-extrabold about-intro">How It Works.</h3>
            </div>
            <div className="col-sm-12">
              <div className="row">
                <div className="col-sm-4">
                  <div className="feature-wrapper">
                    <div className="feature-icon"></div>
                    <h4 className="poppins-bold feature-title">
                      1.
                    </h4>
                    <p className="poppins-regular feature-text">
                      NFC Reader Installation: An NFC reader is installed at the
                      door of each school bus.
                    </p>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="feature-wrapper">
                    <div className="feature-icon"></div>
                    <h4 className="poppins-bold feature-title">
                      2.
                    </h4>
                    <p className="poppins-regular feature-text">
                      Student Check-In: Before boarding the bus, students tap
                      their digital ID card on the NFC reader.
                    </p>
                  </div>
                </div>

                <div className="col-sm-4">
                  <div className="feature-wrapper">
                    <div className="feature-icon"></div>
                    <h4 className="poppins-bold feature-title">3.</h4>
                    <p className="poppins-regular feature-text">
                      Parents receive a text notification containing,
                      Bus registration number Driver's name and contact details
                      Departure time Live tracking link
                    </p>
                  </div>
                </div>

                <div className="col-sm-4">
                  <div className="feature-wrapper">
                    <div className="feature-icon"></div>
                    <h4 className="poppins-bold feature-title">
                      4.
                    </h4>
                    <p className="poppins-regular feature-text">
                      Live Tracking Link that allows parents to track the
                      bus in real-time View bus speed and direction The monitor
                      stops and route progress Receive overspeed alerts
                    </p>
                  </div>
                </div>

                <div className="col-sm-4">
                  <div className="feature-wrapper">
                    <div className="feature-icon"></div>
                    <h4 className="poppins-bold feature-title">
                      5.
                    </h4>
                    <p className="poppins-regular feature-text">
                      Live Video Feed: Our system includes a camera inside the
                      bus, providing: Real-time video streaming Ensuring student
                      safety and behavior monitoring
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="call-to-action">
          <h1 className="call-to-action-text poppins-extrabold">
            We're crafting a pathway <br /> for prosperity.
          </h1>
        </div>
        <div className="container">
          <FAQs />

          <div className="row contactus-section" id="contactus">
            <div className="section-header">
              <h4 className="poppins-extrabold section-title">Contact</h4>
              <h3 className="poppins-extrabold about-intro">Talk to us.</h3>
            </div>

            <div className="col-sm-12 conct-wrapper">
              <div className="row">
                <div className="form-wrapper">
                  <form className="contact-form form-wrapper">
                    <div className="row form-row">
                      <div className="col-sm-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First name"
                        />
                      </div>
                      <div className="col-sm-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last name"
                        />
                      </div>
                    </div>

                    <div className="row form-row">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="School (Optional)"
                        />
                      </div>
                    </div>

                    <div className="row form-row">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Email"
                        />
                      </div>
                    </div>

                    <div className="row form-row">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Subject"
                        />
                      </div>
                    </div>

                    <div className="row form-row">
                      <div className="col-sm-12">
                        <textarea
                          className="form-control"
                          id="label"
                          rows="3"
                          placeholder="Message"
                        ></textarea>
                      </div>
                    </div>
                    <div className="row form-row">
                      <div className="col-sm-12">
                        <button className="my-btn custom-btn-fill">Send</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
