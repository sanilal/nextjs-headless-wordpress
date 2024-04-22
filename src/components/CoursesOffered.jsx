import CourseCategories from "./CourseCategories";
import CourseCategoryTabs from "./CourseCategoryTabs";

export default function CoursesOffered() {
  return (
    <section className="bg-cyan-lime">
      <CourseCategoryTabs />
      <CourseCategories />
    </section>
  )
}
