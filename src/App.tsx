import Header from './header/Header'
import BoardMain from './board/BoardMain'
import './App.css'

function App() {
  return (
    <>
      <div className='app-container'>
        <div id='header-container'>
          <Header/>
        </div>
        <div id='boardmain-container'>
          <BoardMain/>
        </div>
      </div>
    </>
  )
}
export default App;
