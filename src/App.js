import {Routes,Route} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Posts from './components/Posts';
import CreatePost from './components/CreatePost';
import {Container} from 'react-bootstrap'


const App=()=>{

  return(
    <>
          <Container className='d-flex align-items-center justify-content-center'>

    <Routes>
        <Route path='/' element={<Posts/>}/>
        <Route path='/createPost' element={<CreatePost/>}/>


    </Routes>
          </Container>

    </>
  )
}



export default App;
