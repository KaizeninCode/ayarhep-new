import React from 'react'
// import NavBar from './NavBar'

const work = [
  {
    title: "Care For Others",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque hic possimus tenetur error quibusdam excepturi veniam incidunt? Voluptate velit, officia mollitia facere repudiandae maxime, vero sapiente eaque exercitationem possimus perspiciatis, similique qui hic veritatis placeat. Fuga quisquam rem quos quas officiis ipsum nihil quod natus, fugit itaque doloremque consequatur in.",
  },
  {
    title: "End Stigma",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque hic possimus tenetur error quibusdam excepturi veniam incidunt? Voluptate velit, officia mollitia facere repudiandae maxime, vero sapiente eaque exercitationem possimus perspiciatis, similique qui hic veritatis placeat. Fuga quisquam rem quos quas officiis ipsum nihil quod natus, fugit itaque doloremque consequatur in.",
  },
  {
    title: "Raise Awareness",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque hic possimus tenetur error quibusdam excepturi veniam incidunt? Voluptate velit, officia mollitia facere repudiandae maxime, vero sapiente eaque exercitationem possimus perspiciatis, similique qui hic veritatis placeat. Fuga quisquam rem quos quas officiis ipsum nihil quod natus, fugit itaque doloremque consequatur in.",
  }
]
const FocusArea = () => {
  return (
    <div id="focus-area">
        {work.map(item => (
          <div className="work-item">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
          </div>
        ))}
    </div>
  )
}

export default FocusArea
