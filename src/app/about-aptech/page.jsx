import Footer from "@/components/Footer"
import Header from "@/components/Header"

export const metadata = {
    title: 'About Page',
    description: 'About description',
  }

export default function About() {
  return (
    <>
    <Header />
      
      <section className="flex flex-col">
        <div className="bg-inner-page-header">
          <div className="container max-w-7xl mx-auto py-12">
          <h1 className="text-center text-white font-bold text-4xl mt-4">About APTECH</h1>
          <div className="text-center text-white text-sm mb-4">
            <a href="/">Home</a> / <a href="/">About Aptech</a>
          </div>
          </div>
        </div>
        
          <div className="container max-w-7xl mx-auto py-12  ">
          <div className="flex">
              <img src="https://www.aptech.ae/wp-content/uploads/2020/12/aptech-lab-2.jpg" alt="" className="mr-2" />
            
            <div className="">
              <p>Aptech Computer Training is among the leaders in career education in the UAE and provides ministry approved certificate courses.
      The company focuses on career development for students and working professionals. In addition, Aptech also offers various training services to large companies to help develop the skills of their employees.
      Newly emerging trends and technologies like Artificial Intelligence (AI) cloud computing, mobile applications, Multimedia courses, Social media and Data analytics are bringing about increasing job opportunities in the IT & ICT industry. Aptech Computer Training, through its courses and curriculum, ensures that you are at par with global standards. </p>

      <p>Aptech Computer Training is not related to Aptech Worldwide</p>
            </div>
            </div>
          </div>
      
      
      </section>
      <Footer />
       </>
  )
}
