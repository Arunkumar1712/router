import React from "react";
import {MultiActionAreaCard} from "./card";

 export function Data (){
    
    const data =[
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
    },
    //////////////datascience/////
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
    //////////////////////////cybersecurity////////////////////////
    {
        img:require("./cyber1.webp"),
        Title:"Cybersecurity Vs Ethical Hacking: Top 10 Differences",
        Description:"Cybersecurity & Ethical hacking and have been key in making sure that your data online is secure, users are ",
        date:"Oct 04, 2023",
        duration:"20 Min Read"
    },
    {
        img:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
        Title:"Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
        Description:"In the rapidly evolving field of cybersecurity, there is a common misconception that coding skills are a prerequisite  ",
        date:"Dec 04, 2023",
        duration:"13 Min Read"
    },
    {
       img:require("./cyber3.jpg"),
        Title:"Top 7 Cyber Security Attacks in Real Life",
        Description:"In the rapidly evolving field of cybersecurity, there is a common misconception that coding skills are a prerequisite for success.While it is true that certain cybersecurity,In the rapidly ",
        date:"Dec 05, 2023",
        duration:"19 Min Read"
    },
    {
        img:require("./cybersecuity-4.gif"),
        Title:"What is Cybersecurity? Importance and its uses",
        Description:"Look around today, you will witness that we are more reliant on technology and devices than ever before. Benefits of this trend range from getting rid of Yellowbook, and having near-instant access  ",
        date:"Dec 05, 2023",
        duration:"25 Min Read"
    },
    {
        img:"https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
        Title:"What Is Hacking? Types of Hacking & More",
        Description:"Have you ever wondered what hacking is all about? It's a big deal in today's tech-heavy world, and it can be both fascinating and scary. In this blog, we're going to explore hacking in simple terms so that you can ",
        date:"Dec 05, 2023",
        duration:"21 Min Read"
    },
    {
        img:require("./cyber6.webp"),
        Title:"Is coding required for cybersecurity? If yes, how crucial ",
        Description:"Many people ask how important is coding for cybersecurity, and the lawyerly answer is: Well, it depends on many facets. Because just starting off, many roles don’t really",
        date:"Dec 05, 2023",
        duration:"21 Min Read"
    },
    ///////////////////////////////////carrer data///////////////////////
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
    },
]

    return(
        <div id="contM">
{data.map((e)=>(
    <MultiActionAreaCard img={e.img} Title={e.Title} Description={e.Description} date={e.date} duration={e.duration}/>
))}
        </div>
    );
}