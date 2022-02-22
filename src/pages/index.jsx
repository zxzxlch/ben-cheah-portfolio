import React from 'react';
import Layout from '../components/layout';
import '../styles/index.css';
import '@fontsource/pt-serif';
import '@fontsource/mulish/400.css';
import '@fontsource/mulish/700.css';

function Index() {
  return (
    <Layout>
      <div className='col-span-6'>
        <h1 className="font-serif text-3xl leading-relaxed text-gray-600 mt-6 mb-4">
          I bridge design and tech to build better products.
        </h1>
      </div>
      <div className='col-span-7'>
        <p>I’m a product designer who is fluent in both design and code.</p>
        <p>
          As the lead UX designer in a product team, I led and advocated for best
          practices such as design research, usability testing, prototyping and
          accessibility.
        </p>
        <p>
          I believe in research and continuous testing to build great products
          that solve real needs.
        </p>
        <p>
          I live with my partner and our two cats. My current obsessions include
          drinking tea, bullet journaling, and watching reality TV.
        </p>
      </div>
    </Layout>
  );
}

export default Index;
