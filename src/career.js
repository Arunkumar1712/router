import React from "react";
import {MultiActionAreaCard} from "./card"

export function Career(){
    const careerdata=[
        {
            img:require("./power-bi-featured-image.jpg"),
            Title:"Power BI Developer 2024: Career, Skills, Role, Salary, Scope",
            Description:"Power BI development is the new rage in town. Business intelligence has become the backbone of the modern marketing and consumer industry.Consequently, the need and ",
            date:"Feb 23, 2024",
            duration:"21 Min Read"
        },
        {
            img:"https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-Image-Roles-and-Responsibilities-of-a-Frontend-Developer.webp",
            Title:"Top Roles and Responsibilities of a Frontend Developer [2024]",
            Description:"In today's digital age, where websites and mobile apps are an integral part of our daily lives, frontend developers play a crucial role in creating the user interfaces",
            date:"Feb 23, 2024",
            duration:"25 Min Read"
        },
        {
            img:"https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Top-Technologies-to-Learn.webp",
            Title:"Top Technologies to Learn in 2024: Jumpstart a Successful Tech Career",
            Description:"If your New Year resolution consists of building a successful tech career in 2024, then you need a few more weapons in your arsenal to achieve your goal. ",
            date:"Feb 23, 2024",
            duration:"25 Min Read"
        },
        {
            img:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-Product-Based-Companies-for-DevOps-Engineers-in-India.webp",
            Title:"Top 16 Product-Based Companies for DevOps Engineers in India",
            Description:"In the ever-evolving landscape of technology, companies are embarking on a transformative journey to enhance their software development processes. ",
            date:"Feb 23, 2024",
            duration:"25 Min Read"
        },
       {
        img:require("./carrer5.jpg"),
        Title:"Top 10 Unique Project Ideas for College Students",
        Description:"In this competitive world, success is accompanied by the uniqueness of an individual, especially the things that they did during their college days. If you are a college student, it is high time for you to start being ",
        date:"Feb 23, 2024",
        duration:"38 Min Read"
    },
        {
            img:"https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Mechanical-Engineering-Project-Ideas.webp",
            Title:"20 Mechanical Engineering Project Ideas",
            Description:"Mechanical engineering is a field where people make things and solve problems using machines. It's cool because you can take ideas and turn them into real things. You might be a student looking for a fun project or just ",
            date:"Feb 23, 2024",
            duration:"28 Min Read"
        }
    ]
    return(
        <div id="contM1">
           {careerdata.map((e)=>(
            <MultiActionAreaCard img={e.img} Title={e.Title} Description={e.Description} date={e.date} duration={e.duration}/>
           ))}
        </div>
    );

}