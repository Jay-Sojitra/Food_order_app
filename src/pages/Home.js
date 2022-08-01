import React from 'react';
import Cards from '../components/Cards';
import Navbar from '../components/Navbar';
import Orders from '../components/Orders';


function Home() {
  return (

    <div className ="main">
      <div className ='container_1' >
        <Navbar />
      </div>
      <div>
        <Cards />
      </div>
      <div>
        <Orders clssName = 'OrderedList'/>
      </div>
    </div>


  );
}

export default Home;
