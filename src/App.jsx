import { Suspense } from 'react';
import './App.css'
import MyNavbar from './Components/MyNavbar'
import Nav from './Components/Nav'
import PrichingOption from './Priching Option/PrichingOption';

const priceingPromise = fetch('Priching.json').then(res => res.json());


function App() {

  return (
    <>
      <header> 
        <MyNavbar></MyNavbar>
       {/* <Nav></Nav> */}
      </header>
      <main>
          <Suspense fallback={<span className="loading loading-dots loading-lg"></span>}>
            <PrichingOption priceingPromise ={priceingPromise}></PrichingOption>
          </Suspense>
      </main>
    </>
  )
}

export default App
