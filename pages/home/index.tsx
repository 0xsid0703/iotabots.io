import React from 'react'
import fs from 'fs'
import matter from 'gray-matter'
import BaseLayout from '../../layout/BaseLayout'
import Hero from './Sections/Hero'
import Metaverse from './Sections/Metaverse'
import Roadmap from './Sections/Roadmap'

export const Home: React.FC = () => (
  <BaseLayout>
    <Hero />
    <Metaverse />
    <Roadmap />
  </BaseLayout>
)

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export async function getStaticProps() {
  const files = fs.readdirSync('projects')

  const projects = files.map((file) => {
    const data = fs.readFileSync(`projects/${file}`).toString()

    return {
      ...matter(data).data,
      slug: file.split('.')[0],
    }
  })

  return {
    props: {
      projects,
    },
  }
}

export default Home
