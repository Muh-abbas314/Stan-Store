"use client"
import NavBar from "@/app/Navbar/Navbar";
import Image from "next/image";
import MainUI from "./MainUi/MainUi";
import Footer from "./Footer/Footer";
// import 'my-app/node_modules/bootstrap/dist/css/bootstrap.css'
// import '../node_modules/bootstrap/dist/css/bootstrap.css'
export default function Home() {
  return (
   <div >
    <NavBar/>
    <MainUI/>
    <Footer/>
   </div>
  );
}