import React from 'react';
import { Element } from 'react-scroll';
import Project from '../Project/Project';
import "./projectcontainer.css";

function ProjectContainer() {

    const projects=[
        {
            img:"https://cdn.dribbble.com/users/9684942/screenshots/17237296/media/b41efc032f220d4199480f4557e87f18.jpg?compress=1&resize=400x300&vertical=top",
            title:"E-commerce store",
            link:"https://ecommerce-nike-store.netlify.app",
            desc:"Ecommerce store built with HTML,CSS,JS"
        },
        {
            img:"https://s3.amazonaws.com/www-inside-design/uploads/2018/05/weather-app-4_feature.jpg",
            title:"Weather App",
            link:"https://open-weather-api-react-app.netlify.app",
            desc:"Weather App using API and ReactJS"
        },
        {
            img:"https://clickup.com/blog/wp-content/uploads/2019/01/to-do-list-apps.png",
            title:"TO-DO-LIST",
            link:"https://t-o-d-o-list-react-app.netlify.app",
            desc:"TO-DO-LIST using ReactJS"
        },
]

  return (
    <Element name='Projects' className="projectContainer" id="projects">
        <h1>Projects</h1>
        <p>
            Here are some projects which I have done .
        </p>
        <div className="projectContainer-projects">
            {
                projects.map((project,index) =>{
                    return(
                        <Project key={index} img={project.img} desc={project.desc} link={project.link} title={project.title}/>
                    )
                })
            }
        </div>
    </Element>
  )
}

export default ProjectContainer