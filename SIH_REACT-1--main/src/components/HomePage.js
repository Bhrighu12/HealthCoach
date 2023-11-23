import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="frame">
        <div className="frame1">
          <div className="frame2">
            <a href="/bmi"><button className="bmi">BMI</button></a>
            <a href="/doctor"><button className="ai">AI Doctor</button></a>
            <a href="/diets"><button className="charts">Diets</button></a>
            <a href="/exercises"><button className="exer">Exercises</button></a>
            <div className="yourai-health-coach">Your Health Coach</div>
          </div>
        </div>
        <div className="frame3">
          <div className="frame4">
            <img className="image-1-icon" alt="" src="/image-1@2x.png" />
            <div className="unlock-your-full">
              Unlock Your Full Potential with Personalized Health and Fitness
              Guidance
            </div>
            <button className="sign-up2">
              <a href="/signup"><button className="sign-up1">Get Started</button></a>
            </button>
          </div>
        </div>
        <div className="frame5">
          <div className="are-you-ready">
            Are you ready to embark on a journey to a healthier, fitter you?
            Look no further! Our cutting-edge AI-powered health coach is here to
            revolutionize your wellness experience. Say goodbye to generic
            advice and embrace a personalized approach tailored just for you.
          </div>
        </div>
      </div>
      <div className="frame6">
        <div className="frame7">
          <div className="frame8">
            <div className="why-choose-our-container">
              <p className="why-choose-our">
                Why Choose Our AI-Powered Health Coach?
              </p>
              <ul className="personalization-at-its-best-ta">
                <li className="personalization-at-its-best">
                  <span>Personalization at Its Best</span>
                </li>
                <li className="personalization-at-its-best">
                  <span>Tailored Workout Plans</span>
                </li>
                <li className="personalization-at-its-best">
                  <span>Smart Dietary Recommendations</span>
                </li>
                <li className="personalization-at-its-best">
                  <span>Real-Time Progress Tracking</span>
                </li>
                <li>
                  <span>User-Friendly Interface</span>
                </li>
              </ul>
            </div>
            <img className="image-2-icon" alt="" src="/image-2@2x.png" />
          </div>
        </div>
        <div className="what-you-gain-container">
          <p className="what-you-gain">{`What you gain by living more healthily includes: `}</p>
          <ul className="personalization-at-its-best-ta">
            <li className="saving-money-eating-junk-foo">
              <span className="feeling-better-mentally">
                feeling better mentally – regular exercise can lift your mood
                and help you feel better
              </span>
            </li>
            <li className="saving-money-eating-junk-foo">
              <span className="feeling-better-mentally">
                saving money – eating junk food, smoking, and drinking sugary
                drinks or alcohol are all expensive habits
              </span>
            </li>
            <li className="saving-money-eating-junk-foo">
              <span className="feeling-better-mentally">
                fewer health problems – living a healthier lifestyle means a
                lower risk of developing many illnesses
              </span>
            </li>
            <li>
              <span className="feeling-better-mentally">
                taking control of your life – getting healthy helps you feel in
                control of your life.
              </span>
            </li>
          </ul>
        </div>
        <div className="frame9">
          <div className="faqs-parent">
            <button className="faqs">
              <button className="sign-up1">FAQS</button>
            </button>
            <button className="sign-up4">
              <button className="sign-up1">ABOUT US</button>
            </button>
            <button className="sign-up5">
              <div className="get-started">GET STARTED</div>
            </button>
          </div>
        </div>
        <div className="frame10">
          <div className="rectangle-parent">
            <div className="frame-child" />
            <div className="reviews">REVIEWS</div>
            <div className="your-ai-powered-health">
              Your AI-Powered Health Coach website offers an impeccable user
              experience, seamlessly blending sleek design with intuitive
              navigation. The dashboard's real-time insights and adaptive
              learning create a personalized journey. Responsive across devices,
              the platform effortlessly transforms health tracking into an
              engaging and insightful activity. A beacon of simplicity and
              sophistication in digital wellness.
            </div>
            <div className="the-your-ai-powered">
              The Your AI-Powered Health Coach website delivers a seamless and
              engaging user experience. Its intuitive design, responsive
              interface, and dynamic learning capabilities create a personalized
              wellness journey. The platform's clean layout and real-time
              visualizations make health tracking enjoyable, setting a high
              standard for user-friendly digital health solutions.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
