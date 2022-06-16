import "./index.scss";
export default function Form({ title, subtitle, backgroundImage }) {
  return (
    <section
      className="register-form"
      style={{ backgroundImage: "url(" + backgroundImage.url + ")" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            {title && <h2>{title}</h2>}
            {subtitle && <h3>{subtitle}</h3>}
            <form action="#" id="form1">
              <div className="form-field left">
                <label htmlFor="ff1">First name</label>
                <input
                  name="fname"
                  type="text"
                  id="ff1"
                  placeholder="First name"
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="ff2">Last name</label>
                <input
                  name="lname"
                  type="text"
                  id="ff2"
                  placeholder="Last name"
                  required
                />
              </div>
              <div className="form-field left">
                <label htmlFor="ff3">Email</label>
                <input
                  name="email"
                  type="text"
                  id="ff3"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="ff4">Phone</label>
                <input
                  name="phone"
                  type="number"
                  id="ff4"
                  placeholder="Phone"
                />
              </div>
              <div className="form-field left">
                <label htmlFor="ff5">Address</label>
                <input
                  name="address"
                  type="text"
                  id="ff5"
                  placeholder="Address"
                />
              </div>

              <div className="form-field">
                <label htmlFor="ff6">Country</label>
                <input
                  name="country"
                  type="text"
                  id="ff6"
                  placeholder="Country"
                />
              </div>
              <div className="form-field">
                <label htmlFor="ff11">Comments/Questions</label>
                <textarea
                  id="ff11"
                  name="comments"
                  rows="3"
                  placeholder="Comments/Questions"
                ></textarea>
              </div>
              <div className="form-field radio left">
                <p>Are You a Realtor?</p>
                <input name="realtor1" type="radio" id="ff7" />
                <label htmlFor="ff7">Yes</label>
                <input name="realtor2" type="radio" id="ff8" />
                <label htmlFor="ff8">No</label>
              </div>
              <div className="form-field radio left">
                <p>Are You Working With a Realtor?</p>
                <input name="realtor3" type="radio" id="ff9" />
                <label htmlFor="ff9">Yes</label>
                <input name="realtor4" type="radio" id="ff10" />
                <label htmlFor="ff10">No</label>
              </div>
            </form>
            <p className="privacy">
              By inquiring you are opting in to receive newsletters and updates.
              We do not share email addresses with third parties. All emails
              will come from Mar a Cielo.
            </p>
            <button type="submit" form="form1" value="Submit">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
