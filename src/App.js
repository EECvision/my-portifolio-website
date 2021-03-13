import HomePage from './pages/home.component';
import AboutPage from './pages/about.component';
import BlogsPage from './pages/blogs.component';
import ProjectsPage from './pages/projects.component';
import Footer from './components/footer.component';
import './App.css';

function App() {
  return (
    <div>
      <HomePage/>
      <AboutPage/>
      <ProjectsPage/> 
      <BlogsPage/>     
      <Footer/>
    </div>
  );
}

export default App;
