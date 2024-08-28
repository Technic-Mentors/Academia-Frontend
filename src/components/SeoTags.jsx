import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useLocation } from 'react-router-dom'

export default function SeoTags() {
    const { pathname } = useLocation()
    const [name, setName] = useState("")
    const [title, setTitle] = useState("")
    const [url, setUrl] = useState("")
    const [img, setImg] = useState("")
    const [description, setDescription] = useState("")

    useEffect(() => {
        if (pathname === "/") {
            setName("Home")
            setTitle("Leading Online Learning Platform - Mentors Academia")
            setUrl("https://mentorsacademia.com/")
            setImg("https://mentorsacademia.com/static/media/register-your-school.f4a0ccf314cbc437f989.avif")
            setDescription("Mentors Academia is your go-to online learning platform. Empowering students with quality education and innovative learning tools. Start your journey today!")
        } else if (pathname === "/about") {
            setName("About")
            setTitle("About Us - Mentors Academia")
            setUrl("https://mentorsacademia.com/about")
            setImg("https://mentorsacademia.com/static/media/about-us.b17a1029ee7da6cb7303.avif")
            setDescription("Learn about Mentors Academia, our mission, and how we empower students with innovative online learning solutions. Discover our commitment to education today.")
        } else if (pathname === "/course") {
            setName("Course")
            setTitle("Our Online Courses - Mentors Academia")
            setUrl("https://mentorsacademia.com/course")
            setImg("https://mentorsacademia.com/static/media/front-end-developer-course.aff08bd106dab929dff7.avif")
            setDescription("Browse our extensive course catalog at Mentors Academia. Find a variety of online courses designed to enhance your skills and knowledge. Enroll today!")
        } else if (pathname === "/teacher") {
            setName("Teacher")
            setTitle("Meet Our Teachers - Mentors Academia")
            setUrl("https://mentorsacademia.com/teacher")
            setImg("https://mentorsacademia.com/static/media/teacher-default.3d200c7279c3ba0a590e.avif")
            setDescription("Discover our dedicated educators at Mentors Academia. Explore profiles of experienced teachers who bring quality education to our online learning platform.")
        } else if (pathname === "/school") {
            setName("School")
            setTitle("Schools Directory - Mentors Academia")
            setUrl("https://mentorsacademia.com/school")
            setImg("https://res.cloudinary.com/dbtgadcbb/image/upload/v1707821218/u0py5wzdkr9huvdq3w3s.png")
            setDescription("Explore the schools listed on Mentors Academia. Find educational institutions partnering with our platform to offer enhanced learning opportunities.")
        } else if (pathname === "/signin") {
            setName("Signin")
            setTitle("Access Your Learning Dashboard - Mentors Academia")
            setUrl("https://mentorsacademia.com/signin")
            setImg("https://mentorsacademia.com/static/media/sign-in-img.bbf02b8510ce803f6881.avif")
            setDescription("Log in to your Mentors Academia account to access your courses, track progress, and manage your profile with ease.")
        } else if (pathname === "/signup") {
            setName("Signup")
            setTitle("Join Our Online Learning Platform - Mentors Academia")
            setUrl("https://mentorsacademia.com/signup")
            setImg("https://mentorsacademia.com/static/media/signup-img.6aa6e6b54599a6b27ee0.avif")
            setDescription("Create your account on Mentors Academia to access quality learning content and resources. Join our learning community today and start your educational journey!")
        }
    }, [pathname])
    return (
        <>
            <Helmet>
                <title>{title}</title>
                {/* open grapgh tag */}
                <meta property="og:title" content={name} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={img} />
                <meta property="og:url" content={url} />
                <meta property="og:type" content="website" />

                {/* twitter card  */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@TechnicMentor" />
                <meta name="twitter:title" content={name} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={img} />

                {/* Schema.org structured data */}
                <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": url,
            "name": "Technic Mentors",
            "description": description ,
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://technicmentors.com/search?q={search_term_string}",
                "actionPlatform": [
                  "https://schema.org/DesktopWebPlatform",
                  "https://schema.org/IOSPlatform",
                  "https://schema.org/AndroidPlatform"
                ]
              },
              "query-input": "required name=search_term_string"
            }
          }
        `}</script>
                <link rel="canonical" href={url} />
                <meta name="description" content={description} />
            </Helmet>
        </>
    )
}
