'use client'
import Card from '@/components/Card'

export default function Home() {
  return (

    <main className="">
        <div>
            <h3 className="page_title">Teaching</h3>
            <div className="card_layout_4">
                <Card
                    href="/Teaching/FS25"
                    imgSrc="/img/Main/FS25.jpg"
                    imgAlt="ACOCII"
                    title="ACOC II "
                    description="Slides and Mentis."
                    semester="FS25"
                    aiTag="AI generated"
                    remark="up next"
                />
                <Card
                    href="/Teaching/HS24"
                    imgSrc="/img/Main/OCI.jpg"
                    imgAlt="NextUI hero Image with delay"
                    title="OC I"
                    description="Session Notes."
                    semester="HS24"
                    aiTag="AI generated"
                    remark="currently"
                />
                <Card
                    href="/Teaching/FS24"
                    imgSrc="/img/Main/ACOCII.jpg"
                    imgAlt="NextUI hero Image with delay"
                    title="ACOC II"
                    description="Slides and Mentis."
                    semester="FS24"
                    aiTag="AI generated"
                />
                <Card
                    href="/Teaching"
                    imgSrc="/img/Main/past_teachings.jpeg"
                    imgAlt="ACACII"
                    title="All Teachings"
                    description="Current and past exercise session."
                    aiTag="AI generated"
                />
            </div>
            <h3 className="page_title mt-6">Personal</h3>
            <div className="card_layout_4">
                <Card
                    href="/Library"
                    imgSrc="/img/Main/bib.jpg"
                    imgAlt="Library"
                    title="Library"
                    description="Useful documents for all lectures I have taken."
                />
                <Card
                    href="/Presentation"
                    imgSrc="/img/Main/RBTL_big.jpg"
                    imgAlt="Presentation"
                    title="Presentations"
                    description="All presentation accompanying posters."
                />
                <Card
                    href="/About"
                    imgSrc="/img/Main/dominik.jpg"
                    imgAlt="About"
                    title="About"
                    description="More information about this website, the content and me."
                />
                <Card
                    href="/Contact"
                    imgSrc="/img/Main/contact.jpg"
                    imgAlt="Contact"
                    title="Contact Me"
                    description="Get in Touch with me!"
                    aiTag="AI generated"
                />
            </div>
        </div>

    </main>
  )
}
