import React from 'react';
import '../../css/main.css';
import Header from './Header';
import Footer from './Footer';
import NavBar from './NavBar';
import LiveMatches from './LiveMatches';
import { useMachine } from '@xstate/react';
import { liveMatchesMachine } from '../machine/liveMatchesMachine';

const App = () => {
  const [current, send] = useMachine(liveMatchesMachine);
  return (
    <>
    <div id="container">
      <Header />
      <NavBar />
      <LiveMatches current={current} send={send}/>
      <Footer />
    </div>
    </>
  );
}

export default App;
