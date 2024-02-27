import React from "react";
import {MultiActionAreaCard} from "./card"
export function Full(){
    const fulldata=[
        {
            img:"https://www.guvi.in/blog/wp-content/uploads/2023/08/Feature-image-Best-Full-Stack-Development-Online-Courses.webp",
            Title:"Best Ways to Learn Full Stack Development in 2024",
            Description:"Full stack development is and will be a promising and in-demand career in the upcoming years. According to Stack Overflow, there are more than 90,000 developers ",
            date:"Feb 23, 2024 ",
            duration:"43 Min Read"
        },
        {
            img:require("./fullimg2.jpg"),
            Title:"Top Full Stack Development Webinars and Workshops",
            Description:"In this digital age, websites, and applications are central in various industries, driving a high demand for skilled Full Stack Developers. Whether you're just starting your career ",
            date:"Feb 23, 2024 ",
            duration:"15 Min Read"
        },
        {
            img:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-Books-to-Learn-Full-Stack-Development.webp",
            Title:"How Long Would It Take to Be a Full Stack Developer?",
            Description:"In this blog, we'll find out the time and effort needed to master Full Stack Development. We'll We'll explore what it includes, where you can learn, and the challenges ",
            date:"Feb 23, 2024 ",
            duration:"10 Min Read"
        },
        {
            img:"https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-Image-Difference-Between-Software-Developer-vs-Full-Stack-Developer.webp",
            Title:"Difference Between Software Developer vs Full Stack Developer",
            Description:"Understanding the differences between a Software Developer vs Full Stack Developer is important  ",
            date:"Feb 13, 2024 ",
            duration:"26 Min Read"
        },
        {
            img:"https://www.guvi.in/blog/wp-content/uploads/2024/02/Top-Full-Stack-Developer-Interview-Questions-Answers.webp",
            Title:"Top 24 Full Stack Developer Interview Questions & Answers",
            Description:"Full Stack Developers are skilled individuals who possess expertise in all aspects of web development, ",
            date:"Feb 13, 2024 ",
            duration:"56 Min Read"
        },{
            img:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Featured-Image-top-product-based-companies-for-full-stack-developers.webp",
            Title:"Hot Topics That You Need To Know In Full Stack Developer Syllabus | 2024",
            Description:"A full stack developer has to work in all the areas of an application, be it the front end, ",
            date:"Feb 23, 2024 ",
            duration:"18 Min Read"
        }
    ]
    return(
        <div id="contM">
        {fulldata.map((e)=>(
            <MultiActionAreaCard img={e.img} Title={e.Title} Description={e.Description} date={e.date} duration={e.duration}/>
           ))}
      
        </div>
    );
}