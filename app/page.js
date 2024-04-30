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
              <h4 className="poppins-extrabold section-title">Features</h4>
              <h3 className="poppins-extrabold about-intro">Why Choose Us</h3>
            </div>
            <div className="col-sm-12">
              <div className="row">
                <div className="col-sm-4">
                  <div className="feature-wrapper">
                    <div className="feature-icon"></div>
                    <h4 className="poppins-bold feature-title">
                      Real-time tracking
                    </h4>
                    <p className="poppins-regular feature-text">
                      Our solution provides real-time tracking of school buses,
                      allowing parents and schools to monitor the location of
                      the bus at all times.
                    </p>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="feature-wrapper">
                    <div className="feature-icon"></div>
                    <h4 className="poppins-bold feature-title">
                      Driver behavior
                    </h4>
                    <p className="poppins-regular feature-text">
                      Our solution monitors driver behavior, ensuring that
                      drivers adhere to safe driving practices at all times.
                    </p>
                  </div>
                </div>

                <div className="col-sm-4">
                  <div className="feature-wrapper">
                    <div className="feature-icon"></div>
                    <h4 className="poppins-bold feature-title">Notification</h4>
                    <p className="poppins-regular feature-text">
                      Parents receive SMS notifications every time their child
                      boards or exits the school bus, both in the morning and
                      afternoon.
                    </p>
                  </div>
                </div>

                <div className="col-sm-4">
                  <div className="feature-wrapper">
                    <div className="feature-icon"></div>
                    <h4 className="poppins-bold feature-title">
                      Emergency alerts
                    </h4>
                    <p className="poppins-regular feature-text">
                      Our solution sends emergency alerts to parents and schools
                      in case of an emergency, ensuring that help is always at
                      hand.
                    </p>
                  </div>
                </div>

                <div className="col-sm-4">
                  <div className="feature-wrapper">
                    <div className="feature-icon"></div>
                    <h4 className="poppins-bold feature-title">School App</h4>
                    <p className="poppins-regular feature-text">
                      Our solution comes with a school app that allows schools
                      to monitor the location of the bus and receive alerts on
                      their smartphones.
                    </p>
                  </div>
                </div>

                <div className="col-sm-4">
                  <div className="feature-wrapper">
                    <div className="feature-icon"></div>
                    <h4 className="poppins-bold feature-title">Parent app</h4>
                    <p className="poppins-regular feature-text">
                      Our solution comes with a parent app that allows parents
                      to track the location of the bus and receive alerts on
                      their smartphones.
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

          <div className="row contactus-section">
            <div className="section-header">
              <h4 className="poppins-extrabold section-title">Contact</h4>
              <h3 className="poppins-extrabold about-intro">Talk to us</h3>
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
