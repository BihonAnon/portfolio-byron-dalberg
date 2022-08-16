import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../components/Header"
import Project from "../components/Project"
import Footer from "../components/Footer"

function Portfolio() {
  return (
    <div>
      <Header />
      <div className='d-grid gap-3 my-4'>
        <Project
          title="SurfShop"
          description="An ecommerce plateform made for sufers, by surfers"
          updatedAt="8/8/2022"
          image="https://i.ibb.co/sjFy2T4/surfShop.png"
          projectLink="https://peaceful-retreat-32314.herokuapp.com/"
        />
        <Project
          title="Simple Notes"
          description="A simple note taking app utilizing localstorage"
          updatedAt="7/8/2022"
          image="https://i.ibb.co/NSW488P/Simple-Notes.jpg"
          projectLink="https://simple-notes-092831.herokuapp.com/"
        />
        <Project
          title="Weather Dashboard"
          description="A simple weather app utilizing apis"
          updatedAt="7/8/2022"
          image="https://i.ibb.co/t2hd0Bb/Weather-Dashboard.jpg"
          projectLink="https://bihonanon.github.io/WeatherTravelDashboard/"
        />
        <Project
          title="E-Commerce-Backend"
          description="A simple ecommerce backend utilizing SQL"
          updatedAt="7/8/2022"
          image="https://i.ibb.co/QQFjKv3/ECommerce-Backend.jpg"
          projectLink="https://github.com/BihonAnon/E-Commerce-Back-End"
        />
        <Project
          title="DalTech Employee Register"
          description="A employee tracker utilizing SQL"
          updatedAt="7/8/2022"
          image="https://i.ibb.co/XZrXPD1/Daltech-Employee-Register.jpg"
          projectLink="https://github.com/BihonAnon/Daltech-Employee-Register"
        />
        <Project
          title="JiujitBits"
          description="The backend for a social media account targeted at jiujitsu practioners im working on"
          updatedAt="7/8/2022"
          image="https://i.ibb.co/3dRJg4z/Jiujitbits.jpg"
          projectLink="https://github.com/BihonAnon/JiujitBits"
        />
      </div>
      <Footer />
    </div>
  );
}

export default Portfolio;