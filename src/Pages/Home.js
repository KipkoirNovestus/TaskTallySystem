import Header from "../Components/Header";
import "../index.css";
import earth from "../Components/images/earth.mp4";
import Footer from "../Components/Footer";
const Home = () => {
  return (
    <>
      <Header />

      <div class="main">
        <video src={earth} autoPlay loop muted />
        <div class="content">
          <h1 class="font-weight-light">Welcome on Board.</h1>
          <p class=" ">
            As you explore the features and functionalities of our system, know
            that our team is here to assist you at any point.
          </p>
        </div>

        <div class="content mt-5">
          <div class="row mt-5 py-4">
            <div class="col-auto mt-5">
              <button type="button" class="btn btn-primary">
                Log In
              </button>
            </div>
            <div class="col-auto mt-5">
              <button type="button" class="btn btn-primary">
                Create Account
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
