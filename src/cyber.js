import React from "react";
import {MultiActionAreaCard} from "./card"

export function Cyber(){
    const cyberdata =[
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
    ]
    return(
        <div id="contM">
         {cyberdata.map((e)=>(
            <MultiActionAreaCard img={e.img} Title={e.Title} Description={e.Description} date={e.date} duration={e.duration}/>
           ))}
        </div>
    );
}