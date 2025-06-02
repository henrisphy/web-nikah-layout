import { useState } from "react";
import Card from "../../components/ui/Card";

export default function GiftRSVP() {
  const [formData, setFormData] = useState({
    name: "",
    attendance: "yes",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    alert("Thank you for your RSVP!");
  };

  return (
    <section id="rsvp" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Gift Info */}
        <div>
          <h2 className="section-title">Gift</h2>
          <Card>
            <p className="mb-4">
              Your presence is our greatest gift. For those wishing to give, we
              appreciate monetary gifts.
            </p>
            <div className="mt-6 space-y-4">
              <div>
                <h3 className="text-xl font-medium mb-2">Bank Transfer</h3>
                <div className="space-y-2">
                  <p>Bank: BCA</p>
                  <p>Account: 1234567890</p>
                  <p>Name: Aisyah & Fahmi</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* RSVP Form */}
        <div>
          <h2 className="section-title">RSVP</h2>
          <Card>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full input-field"
                />
              </div>

              <div>
                <label className="block mb-1">Will you attend?</label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="attendance"
                      value="yes"
                      checked={formData.attendance === "yes"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Yes
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="attendance"
                      value="no"
                      checked={formData.attendance === "no"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    No
                  </label>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                  className="w-full input-field"
                ></textarea>
              </div>

              <button type="submit" className="w-full button-primary">
                Submit
              </button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
