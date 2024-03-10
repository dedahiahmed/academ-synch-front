"use client";
import CourseGrid from "@/components/CourseGrid/CourseGrid";
import Navbar from "@/components/Navbar/Navbar";
import { getAllCourses } from "@/utils/course/get-all-courses/courses";
import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";

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
    <div>
      {" "}
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
      <CourseGrid data={courses} />
    </div>
  );
}
