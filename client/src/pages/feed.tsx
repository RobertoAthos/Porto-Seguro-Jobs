import SideBar from "@/components/NavBar";
import React from "react";
import Image from "next/image";
import NavBar from "@/components/NavBar";
import PostWidget from "@/components/PostWidget";


export default function feed() {
  return (

  <>
      <NavBar/>
      <main>
        <section id="feed">
          <PostWidget/>
        </section>
      </main>
  </>
  );
}
