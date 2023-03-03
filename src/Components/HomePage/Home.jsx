import React from 'react'
import Content from './Content'
import ContentTwo from './ContentTwo'
import FeaturedProducts from './FeaturedProducts'
import HeadlineText from './HeadlineText'
import NewsLetter from './NewsLetter'

const Home = () => {
  return (
    <div className=''>
      <HeadlineText />
      <FeaturedProducts />
      <Content />
      <ContentTwo/>
      <NewsLetter/>
    </div>
  )
}

export default Home
