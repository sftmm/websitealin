import React from 'react';

import Hero from '../../components/hero';
import Article from '../../components/article';
import Picture from '../../components/pictures';
import Footer from '../../components/Footer';
import SideArticle from '../../components/sidearticle';
// import Storefront from '../../components/Storefront';

export default function HomePage() {
  return (
    <>
    <Hero />
    <Article />
    <Picture />
    <SideArticle />
    <Footer />
    </>
  );
}
