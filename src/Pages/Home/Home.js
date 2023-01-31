import React from 'react'
import './HomeStyle.css'
import { Form } from '../../Components/Form/Form'
import { Record } from '../../Components/Records/Record'

const Home = () => {
  return (
    <section className='home-section'>
    <Record/>
    <Form/>
    </section>
  )
}

export default Home