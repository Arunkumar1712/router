import React from "react";
import {MultiActionAreaCard} from "./card"

export function Datasc(){
    const scdat =[
        {
            img:"https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Useful-Python-Libraries-and-Tools-For-Data-Science-Beginners.webp",
            Title:"Useful Python Libraries & Tools for Data Science Beginners",
            Description:"In a world filled with information, knowing how to understand and use data is super important. Data science, ",
            date:"Feb 13, 2024 ",
            duration:"35 Min Read"
        },
        {
            img:"https://www.guvi.in/blog/wp-content/uploads/2023/08/data-science-webinars-and-workshops-1536x804.webp",
            Title:"Data Science Webinars and Workshops",
            Description:"In today's world, it's becoming increasingly important to be knowledgeable in the field of data science. With data being such an integral part  ",
            date:"Feb 13, 2024 ",
            duration:"16 Min Read"
        },
        {
            img:require("./Aivsdata.webp"),
            Title:"AI vs ML vs Data Science: What Should You Learn In 2024?",
            Description:"In 2014, a small instant messaging company with about 50 employees was acquired for $19 billion.best",
            date:"Feb 13, 2024 ",
            duration:"16 Min Read"
        },
        {
            img:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
            Title:"7 Must-Watch Data Science Focused YouTube Channels for Effective Learning",
            Description:"Data science has become one of the most sought-after skills in the current job market.",
            date:"Feb 13, 2024 ",
            duration:"25 Min Read"
        },
        {
            img:require("./data5.webp"),
            Title:"Can A Commerce Student Do Data Science?",
            Description:"With the growing data science stakes taken into consideration, many non-CS students & B.Com students might also consider tracing their path into data science proficiencies. If you a",
            date:"Feb 13, 2024 ",
            duration:"16 Min Read"
        },
        {
            img:require("./dat6.webp"),
            Title:"Top 100 Amazon Data Scientist Interview Questions!",
            Description:"Aspiring to be a Data Scientist at Amazon? Refer- Amazon Data Scientist Interview Questions here.Amazon(US) tops the LinkedIn  ",
            date:"Feb 13, 2024 ",
            duration:"16 Min Read"
        },
    ]
    return(
        <div id="contM">
         {scdat.map((e)=>(
            <MultiActionAreaCard img={e.img} Title={e.Title} Description={e.Description} date={e.date} duration={e.duration}/>
           ))}
        </div>
    );
}