import React,{useState,useEffect} from 'react';
import Navbar from "./Navbar/Navbar";
import Countries from "./Countries/Countries";
import Form from './Form/Form';
import fetchCountries from "./axios/api";
import CssBaseline from '@material-ui/core/CssBaseline';



const App = () => {
  const [reference, setRef] = useState('name');
  const [query, setQuery] = useState('');
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetchCountries(reference, query).then((res) => {
      setCountries(res);
    })
    if (query === '' || query===null ) {
      setCountries([])
    }
  }, [reference, query]);
  
      return (
        <div>
          <CssBaseline/>
          <Navbar/>
          <Form setRef={setRef} reference={reference} setQuery={ setQuery}/>
          <Countries countries={ countries}/>
          </div>
      )
  }
  
export default App;
  