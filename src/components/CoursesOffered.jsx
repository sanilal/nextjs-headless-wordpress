import CourseCategories from "./CourseCategories";
import CourseCategoryTabs from "./CourseCategoryTabs";

export default function CoursesOffered() {
  return (
    <section className="bg-cyan-lime">
      <div className="container max-w-7xl mx-auto py-12">
        <CourseCategoryTabs />
        <CourseCategories />
      </div>
    </section>
  )
}
