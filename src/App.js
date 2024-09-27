import React from 'react';
import './App.css';
import Pages from './components/pages/pages';
import ClickButton from './components/pages/clickButton';
import LikedDisliked from './components/pages/likeDisliked';
function App() {
  return (
    <>
      {/* <Pages /> */}
      <LikedDisliked />
    </>
  );
}

export default App;
