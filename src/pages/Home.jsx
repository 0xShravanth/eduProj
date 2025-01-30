// pages/Home.js
import Header from "../components/Header";
import Banner from "../components/Banner";
import Dashboard from "../components/Dashboard";
import Footer from "../components/Footer";
import Features from "../components/Features";
import ContactForm from "../components/ContactForm";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Dashboard />
      <Features />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
