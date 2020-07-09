import React from 'react'

import { ResumeContainer, Column, Section, SectionTitle, SectionText, EventContainer, EventPeriod, Table } from './styles'

interface EventProps {
    title: string;
    duration?: string;
    children: React.ReactNode;
    titleExtension?: string;
}

// Work Experience or Education
const ProfessionalEvent: React.FC<EventProps> =({title, duration, children, titleExtension})=> {
    return <EventContainer>
        <span>
            <SectionText><b>{title}</b>{titleExtension? ` · ${titleExtension}`:''}</SectionText>
        </span>  
        <EventPeriod>{duration}</EventPeriod>
        { children }
    </EventContainer>
  }

const Resume =()=>(
    <ResumeContainer>
        <Column order={2}>
            <Section>
                <SectionTitle>
                    Skills
                </SectionTitle>
                <Table>{["JavaScript", "Java", "C#", "React", "TypeScript", "Android"].map(skill=><SectionText>{skill}</SectionText>)}</Table>
            </Section>
            <Section>
                <SectionTitle>
                    Languages
                </SectionTitle>
                <Table>
                    {   ["French", "Native", 
                        'English' , "CAE (C1)",
                        'German' , "Basic (B1)"].map(skill=><SectionText>{skill}</SectionText>)}
                </Table>
            </Section>
            <Section>
                <SectionTitle>
                    Education
                </SectionTitle>
                <ProfessionalEvent title="Aalto University" duration="2018 - Current">
                   <SectionText>M.Sc. in Computer Science</SectionText>
                </ProfessionalEvent>
                <ProfessionalEvent title="Haaga-Helia" duration="2017 - 2018">
                   <SectionText>B.Sc. in Business Administration</SectionText>
                </ProfessionalEvent>
                <ProfessionalEvent title="HES-SO Valais" duration="2015 - 2017">
                   <SectionText>B.Sc. in Business Information Technology</SectionText>
                </ProfessionalEvent>
            </Section>
            <Section>
                <SectionTitle>
                    Future Ventures
                </SectionTitle>
                {['Image/Video Editing', 'Ruby on Rails', 'Swift'].map(skill=><SectionText>{skill}</SectionText>)}
            </Section>
        
        </Column>
        <Column order={1}>
            <Section>
                <SectionTitle>
                    Work Experience
                </SectionTitle>
                <ProfessionalEvent title="Fujitsu Software Technologies" titleExtension="Software Engineer Intern" duration="June 2019 - August 2019 (3 mos)">
                   <SectionText>Developed an interactive data visualization tool using D3.js and Vue.js. The data processing and algorithm were coded in JavaScript.</SectionText>
                </ProfessionalEvent>
                <ProfessionalEvent title="Institute of Information Systems" titleExtension="Software Engineer Intern" duration="June 2018 - August 2018 (3 mos)">
                   <SectionText>Designed a prototype to visualize 3D medical images on the Microsoft HoloLens and the HTC Vive using Unity and C#. Developed a Java API to handle the heavy computations.</SectionText>
                </ProfessionalEvent>
                <ProfessionalEvent title="Chetzeron 2112 SA" titleExtension="Waiter and Kitchen Assistant" duration="November 2014 - April 2015 (6 mos)">
                   <SectionText>Customer service, food / beverage service, scheduling, inventory.</SectionText>
                </ProfessionalEvent>
                <ProfessionalEvent title="Voyages L'Oiseau Bleu SA" titleExtension="Intern" duration="August 2013 - July 2014 (1 yr)">
                   <SectionText>Customer service, bus passes sales, excursion planning.</SectionText>
                </ProfessionalEvent>

            </Section>
            <Section>
                <SectionTitle>
                    Extra-Curricular
                </SectionTitle>
                <ProfessionalEvent title="Developer, Junction 2019" titleExtension="challenge 2nd place ">
                   <SectionText>Our service incited clients to make sustainable choices. Our team developed a React dashboard and an Android application, both connected to a Firebase backend.</SectionText>
                </ProfessionalEvent>
                <ProfessionalEvent title="Volunteer, Geneva Health Forum 2018">
                   <SectionText>Promoted the use of XR technologies in the medical field to experts in the healthcare industry. Our rescue application made during the Arkathon was showcased.</SectionText>
                </ProfessionalEvent>
                <ProfessionalEvent title="Developer, Arkathon 2018" titleExtension="Jury’s pick Award">
                   <SectionText>Our team developed a simulation to train specialists to intervene in an extreme environment. Our rescue simulation was made for the HTC Vive using Unity and C#.</SectionText>
                </ProfessionalEvent>
            </Section>
            
        </Column>

    </ResumeContainer>
)

export default Resume