import './App.css';
import { useEffect, useRef } from 'react';

function App() {

  const firstUpdate = useRef(true);

  useEffect(()=>{
    // for strict mode
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
      window.HTSDK.init("xxxxxx-api-key-xxxxxx")

      var booknowbutton = document.querySelector(".ht-book-now-button")

      window.HTSDK.registerOnBookingCallbackHook(booknowbutton.id, {
          onSuccess : ()=>{},
          onFailure : ()=>{},
      });

  },[])

  return (
    <div className="App">
      <a id="unqiue-botton-id" color="#ff481d" className="ht-book-now-button">
          Book Now
      </a>
    </div>
  );
}

export default App;
