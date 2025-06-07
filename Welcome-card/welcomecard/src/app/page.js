"use client";
//to link the 3 pages
import Link from "next/link";
//importing the css file
import "./globals.css";

export default function Home() {
  return (
    <>
      <h1 className="part">Part B</h1>
     {/* Container for the 3 navigation boxes */}
        <div className="box-container">

            <Link href = '/welcome-card'>
        <div class="holographic-container">
      <div class="holographic-card">
        <h2>Welcome-Card</h2>
        </div>
        </div>
          </Link>

    <Link href = '/projcounter'>
     <div class="holographic-container">
    <div class="holographic-card">
      <h2>Counter</h2>
    </div>
  </div>
  </Link>

 <Link href = '/studentinfo'>
        <div class="holographic-container">
    <div class="holographic-card">
      <h2>Student-info</h2>
    </div>
  </div>
  </Link>
      </div>
    </>
  );
}
