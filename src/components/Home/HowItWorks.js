import React from 'react'
import { data } from '../../data'
import { Step } from './Step'

const HowItWorks = () => {
  const { howItWorks } = data.homePage
  return (
    <section className="container mt-4 pt-4 pt-lg-0 pb-4 pb-lg-5">
      <h2 className="h1 text-center pb-3 pb-md-0 mb-md-5">{howItWorks.title}</h2>
      <div className="steps">
        {
          howItWorks.sections.map(section => (<Step key={section.id} {...section} />))
        }
      </div>
    </section>
  )
}

export default HowItWorks
