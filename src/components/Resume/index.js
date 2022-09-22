import React from "react";

function Resume(){

    return(
        <section className="resume">
            <h1>Resume</h1>
            <h2>Lorreina Guyett</h2>
            <address>
            10025 SE 257th Dr.<br/>
            Damascus OR. 97089
            </address>
            <p>714-585-9510 <br/>
            slorrein369@gmail.com</p>
            <div className="work">
                <p>Work Experience</p>
                <ul>
                    <p>QuickTrak <br/>
                        Remote-Beaverton, OR<br/>
                        Customer Service Administrator May 2021-2022
                    </p>
                    <li>Answering phones from customers professionally and responding to customer inquiries and complaints.</li>
                    <li>Researching required information using available resources.</li>
                    <li>Reviewing and analyzing inspection/audit reports for accuracy. Making corrections as needed before sending the final report to the client.</li>
                    <li>Effectively communicating knowledge of the audit process, products, and services to independent contractors and clients</li>
                </ul>
            </div>
            <div className="work">
                <ul>
                    <p>Gift Tree <br/>
                        Remote-Vancouver, WA<br/>
                        Seasonal Customer Service Representative November 2020-January 2021
                    </p>
                    <li>Handling and resolving customer complaints regarding product sales to customer service problems.</li>
                    <li>Providing customers with the organization's service and product information.</li>
                    <li>Recording details of comments, inquiries, complaints, and actions taken.</li>
                    <li>Managing administration, communicating and coordinating with internal departments.</li>
                </ul>
            </div>
            <div className="education">
                <ul>

                    <li>Riverside Community College-Norco</li>
                    <li>Corona High School - Diploma, Jun 2011</li>
                </ul>
            </div>
        </section>
    )
};

export default Resume;