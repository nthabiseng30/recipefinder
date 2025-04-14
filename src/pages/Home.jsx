import React from 'react';
import Header from '../components/Header';
import Recipe from '../components/Recipe';

const Home = () => {
  return (
    <main className='w-full flex flex-col'>
      <Header 
        title={
          <p className="font-bold text-lg">Rover to the rescue, recipes at your fingertips.</p>
        } 
        type='home'
      />
      <section id="recipes" className='md:max-w-[1440px] mx-auto px-4 md:px-20'>
        <Recipe />
      </section>
    </main>
  )
}

export default Home;





