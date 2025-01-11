import TitleSubTitle from "../shared/TitleSubTitle";


const Faq = () => {
    return (
        <div className="join join-vertical mx-auto w-full py-12">
          <TitleSubTitle title={'Frequently Asked Questions'}></TitleSubTitle>      
        {/* FAQ 1 */}
        <div className="collapse collapse-arrow join-item border-base-300 border ">
          <input type="radio" name="faq-accordion" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            What are your opening hours?
          </div>
          <div className="collapse-content">
            <p>We are open every day from 9:00 AM to 10:00 PM.</p>
          </div>
        </div>
      
        {/* FAQ 2 */}
        <div className="collapse collapse-arrow join-item border-base-300 border ">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-xl font-medium">
            Do you offer home delivery services?
          </div>
          <div className="collapse-content">
            <p>Yes, we offer home delivery services within a 10-mile radius. You can place your order online or via phone.</p>
          </div>
        </div>
      
        {/* FAQ 3 */}
        <div className="collapse collapse-arrow join-item border-base-300 border ">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-xl font-medium">
            Can I make a reservation online?
          </div>
          <div className="collapse-content">
            <p>Absolutely! You can use our online reservation system to book your table in advance.</p>
          </div>
        </div>
      
        {/* FAQ 4 */}
        <div className="collapse collapse-arrow join-item border-base-300 border ">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-xl font-medium">
            Are there vegan options on your menu?
          </div>
          <div className="collapse-content">
            <p>Yes, we have a variety of vegan dishes available. Check out our menu for more details.</p>
          </div>
        </div>
      
        {/* FAQ 5 */}
        <div className="collapse collapse-arrow join-item border-base-300 border ">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-xl font-medium">
            Do you provide catering services for events?
          </div>
          <div className="collapse-content">
            <p>Yes, we provide catering services for events like weddings, parties, and corporate meetings. Contact us for a customized menu.</p>
          </div>
        </div>
      </div>
      
    );
};

export default Faq;