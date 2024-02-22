"use client";
import CTA from "@/components/CTA/CTA";
import Course from "@/components/Course/Course";
import Features from "@/components/Features/Features";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Pricing from "@/components/Pricing/Pricing";
import SignIn from "@/components/SignIn/SignIn";
import { BrowserRouter } from "react-router-dom";

export default function Home() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>

      <Hero />
      <CTA />
      <Features />
      <Course />
    </>
  );
}
