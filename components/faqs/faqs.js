"use client";

import React, { useState } from "react";
import "./faq.css";

export default function FAQs() {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (index) => {
    setOpenItem((prevItem) => (prevItem === index ? null : index));
  };

  const faqItemsColumn1 = faqItems.slice(0, Math.ceil(faqItems.length / 2));
  const faqItemsColumn2 = faqItems.slice(Math.ceil(faqItems.length / 2));

  return (
    <section id="faq" className="faq-area pb-120">
      <div className="container">
        <div className="section-header">
          <h4 className="poppins-extrabold section-title">FAQs</h4>
          <h3 className="poppins-extrabold about-intro">What to Know</h3>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="faq-wrap">
              <div className="accordion" id="accordionColumn1">
                {faqItemsColumn1.map((item, index) => (
                  <div className="card" key={index}>
                    <div className="card-header" id={`heading${index}`}>
                      <h2 className="mb-0">
                        <button
                          className={`faq-btn ${
                            openItem === index ? "" : "collapsed"
                          }`}
                          type="button"
                          onClick={() => toggleItem(index)}
                          aria-expanded={openItem === index ? "true" : "false"}
                          aria-controls={`collapse${index}`}
                        >
                          {item.question}
                        </button>
                      </h2>
                    </div>
                    <div
                      id={`collapse${index}`}
                      className={`collapse ${openItem === index ? "show" : ""}`}
                      aria-labelledby={`heading${index}`}
                      data-parent="#accordionColumn1"
                    >
                      <div className="card-body">{item.answer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="faq-wrap">
              <div className="accordion" id="accordionColumn2">
                {faqItemsColumn2.map((item, index) => (
                  <div className="card" key={index}>
                    <div className="card-header" id={`heading${index}`}>
                      <h2 className="mb-0">
                        <button
                          className={`faq-btn ${
                            openItem === index + faqItemsColumn1.length
                              ? ""
                              : "collapsed"
                          }`}
                          type="button"
                          onClick={() =>
                            toggleItem(index + faqItemsColumn1.length)
                          }
                          aria-expanded={
                            openItem === index + faqItemsColumn1.length
                              ? "true"
                              : "false"
                          }
                          aria-controls={`collapse${index}`}
                        >
                          {item.question}
                        </button>
                      </h2>
                    </div>
                    <div
                      id={`collapse${index}`}
                      className={`collapse ${
                        openItem === index + faqItemsColumn1.length
                          ? "show"
                          : ""
                      }`}
                      aria-labelledby={`heading${index}`}
                      data-parent="#accordionColumn2"
                    >
                      <div className="card-body">{item.answer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Sample FAQ items
const faqItems = [
  {
    question: "How does your innovative solution ensure the safety of children on school buses?",
    answer:
      "Our innovative solution employs state-of-the-art technology to monitor and secure school buses, guaranteeing the safety of every child's journey to and from school.",
  },
  {
    question: "What inspired the creation of your innovative solution?",
    answer:
      "Our journey began with a simple idea - to secure school buses and provide peace of mind for parents and schools.",
  },
  {
    question: "Can parents track their children's whereabouts while they're on the school bus?",
    answer:
      "Yes, parents can track their children's whereabouts in real-time using our innovative solution's tracking feature, ensuring added peace of mind.",
  },
  {
    question: "Are there any additional safety features incorporated into your solution?",
    answer:
      "Yes, our solution includes additional safety features such as emergency alerts, route optimization, and driver behavior monitoring to enhance overall safety standards.",
  },
  {
    question: "How does your solution benefit schools?",
    answer:
      "Our solution not only ensures the safety of children but also benefits schools by providing detailed insights into bus operations, optimizing routes, and enhancing overall efficiency.",
  },
  {
    question: "What sets your solution apart from others in the market?",
    answer:
      "Our solution stands out due to its comprehensive approach to school bus safety, incorporating advanced technology, real-time tracking, and customizable features tailored to the needs of parents and schools.",
  },
  {
    question: "Is your solution easy for schools to implement and use?",
    answer:
      "Yes, our solution is designed to be user-friendly and easy to implement for schools, with minimal training required for administrators and drivers.",
  },
  {
    question: "Can your solution be customized to fit the specific needs of different school districts?",
    answer:
      "Yes, our solution is highly customizable and can be tailored to fit the specific needs and requirements of different school districts, ensuring flexibility and scalability.",
  },
  {
    question: "How can schools or parents get started with your solution?",
    answer:
      "Schools or parents interested in implementing our solution can reach out to our team through our website or contact us directly for a consultation and demonstration of our capabilities.",
  },
  {
    question: "What kind of support do you offer to schools or parents using your solution?",
    answer:
      "We offer comprehensive support to schools or parents using our solution, including training, technical assistance, and ongoing customer support to ensure a smooth and successful implementation.",
  },
];

