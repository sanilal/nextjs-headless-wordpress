import AptechCources from "@/components/AptechCources";
import Aptitude from "@/components/Aptitude";
import CoursesOffered from "@/components/CoursesOffered";
import Header from "@/components/Header";
import HomeSlider from "@/components/HomeSlider";

export default function Home() {
  return (
    <>
    <Header />
    <HomeSlider />
    <CoursesOffered />
    <Aptitude />
    <AptechCources />
    </>
  )
}
