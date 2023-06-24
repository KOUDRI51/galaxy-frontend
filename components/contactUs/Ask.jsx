const Ask = () => {
  return (
    <section className="ask section__space bg__img">
      <div className="container">
        <div className="ask__area">
          <div className="alert__newsletter__area">
            <div className="section__header">
              <h2 className="neutral-top">Ask a Question</h2>
            </div>
            <form action="#" name="ask__from" method="post">
              <div className="row">
                <div className="col-sm-6">
                  <div className="input input--secondary">
                    <label htmlFor="askFirstName">First Name*</label>
                    <input
                      type="text"
                      name="ask__first__name"
                      id="askFirstName"
                      placeholder="Enter Your First Name"
                      required="required"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input input--secondary">
                    <label htmlFor="askLastName">Last Name*</label>
                    <input
                      type="text"
                      name="ask__last__name"
                      id="askLastName"
                      placeholder="Enter Your Last Name"
                      required="required"
                    />
                  </div>
                </div>
              </div>
              <div className="input input--secondary">
                <label htmlFor="askRegistrationMail">Email*</label>
                <input
                  type="email"
                  name="ask__registration__email"
                  id="askRegistrationMail"
                  placeholder="Enter your email"
                  required="required"
                />
              </div>
              <div className="input input--secondary input__alt">
                <label htmlFor="askNumber">Phone*</label>
                <div className="input-group">
                  <div className="input-group-prepend current select">
                    <select
                      className="number__code__select fw-semibold"
                      id="numberCodeSelectAlert"
                    >
                      <option value="0">+1</option>
                      <option value="1">+2</option>
                      <option value="2">+3</option>
                      <option value="3">+4</option>
                      <option value="4">+5</option>
                      <option value="5">+6</option>
                    </select>
                  </div>
                  <input
                    type="number"
                    name="ask__number"
                    id="askNumber"
                    required="required"
                    placeholder="345-323-1234"
                  />
                </div>
              </div>
              <div className="input input--secondary">
                <label htmlFor="askSubject">Subject*</label>
                <input
                  type="text"
                  name="ask__subject"
                  id="askSubject"
                  placeholder="Write Subject"
                  required="required"
                />
              </div>
              <div className="input input--secondary">
                <label htmlFor="askMessage">Message*</label>
                <textarea
                  name="ask_message"
                  id="askMessage"
                  required="required"
                  placeholder="Write Message"
                ></textarea>
              </div>
              <div className="input__button">
                <button type="submit" className="button button--effect">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ask;
