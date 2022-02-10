import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import FeedbackList from './components/FeedbackList';
import React from 'react';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';

import About from './pages/About';
import AboutLinks from './components/AboutLinks';
import { FeedbackProvider } from './context/FeedbackContext';

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              exact
              path='/'
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>

            <Route exact path='/about' element={<About></About>} />
          </Routes>
          <AboutLinks />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
