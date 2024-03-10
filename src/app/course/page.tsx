"use client";
import CourseGrid from "@/components/CourseGrid/CourseGrid";
import { getAllCourses } from "@/utils/course/get-all-courses/courses";
import React, { useEffect, useState } from "react";

export default function page() {
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const coursesData = await getAllCourses();
        setCourses(coursesData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching courses:", error);
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);
  return (
    <div>{loading ? <p>Loading...</p> : <CourseGrid data={courses} />}</div>
  );
}
