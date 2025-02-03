import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function RecentPostsComponent() {
  const [recentPost, setRecentPost] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
   useEffect(()=>{
    const fetchRecentPosts = async () => {
      try {
        const res = await fetch("/api/posts/recent-posts")
      const data = await res.json()
      console.log(data);
      // if (data.success) {
      //   setRecentPost(data.data);
      // } else {
      //   setError('Failed to fetch recent articles');
      // }
      setLoading(false);
      } catch (error) {
        setError('Error fetching recent articles');
        setLoading(false);
      }
    }
    fetchRecentPosts()
   },[])
  return (
    <div className="RecentPosts my-6">
      <div className="header flex flex-row items-center justify-start w-full">
        <h2 className="uppercase w-fit inline-block dark:text-white bg-zinc-200 text-black dark:bg-gray-800 pl-4 py-1 pr-5 dmSans rounded-sm font-bold text-xs">
          Recent Posts
        </h2>
        <hr className="h-[2px] flex-grow  bg-rose-500 " />
      </div>
      <div className="recentPosts flex flex-col items-start justify-center">
        <Link
          to="/posts/post-slug"
          className="mainRecentPost group w-full rounded-lg my-4"
        >
          <div className="img-Container relative overflow-hidden rounded-sm">
            <img
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjzX7yRkSCQRjQcqG-aOHrAbqmdibHYekUmg1rBXMjBkx2p6VBTKFQkE2m9fhZTCSSyTCniMyV3dVvN15RFo5NxgIjA_-HQgRk1fannn5WNAHxkGwUlfurByHrvS7i-omyu9zsrsyfVN0DAi_IU6r3dcdyfWa7SMTMlDuNsDZGKapn69GwsolPJivioX1pP/s1472/Leonardo_Phoenix_10_A_sad_individual_sitting_on_a_park_bench_s_2.jpg"
              className="opacity-90"
              alt=""
            />
            <div className="absolute bottom-0 left-0 w-full h-4/5 bg-gradient-to-tr from-black to-red-transparent blur opacity-100"></div>
            <div className="postInformation absolute bottom-2 left-3 pr-6 text-white">
              <p className="px-1 py-[0.1rem] mb-2 dmSans w-fit rounded-sm text-[0.55rem] lg:text-xs bg-rose-500">
                Tech
              </p>
              <Link
                to="/posts/post-slug"
                className="poppins text-md lg:text-lg mt-2 opacity-90 font-bold group-hover:text-rose-500  cursor-pointer"
                title="Stop Overthinking: Most People Are Busy with Their Own Lives"
              >
                <h2 className="leading-snug lg:leading-tight">
                  Stop Overthinking: Most People Are Busy with Their Own Lives
                </h2>
              </Link>
              <div className="postInfo my-1">
                <p className="text-[0.55rem] md:text-[0.55rem] lg:text-[0.65rem] inter">
                  By <strong className="text-neutral-300">Darshan</strong> -{" "}
                  Sunday, January 26, 2025
                </p>
              </div>
            </div>
          </div>
        </Link>
        <Link
          to="/posts/post-slug"
          className="recentPost group w-full h-[65px] mb-4 flex flex-row items-start justify-between gap-4"
        >
          <div className="w-[98px] h-[65px]">
          <img
            src="https://shayarimaza.com/files/makar-sankranti-images/happy-makar-sankranti-images-for-whatsapp-and-facebook/Happy-Makar-Sankranti-2023-Images-In-Marathi.jpg"
            alt=""
            className="w-[98px] h-[65px] object-cover"
          />
          </div>
          
          <div className="postInformation flex flex-col items-start justify-start gap-1">
            <Link
              to="/posts/posts-slug"
              className="poppins text-xs lg:text-sm opacity-90 font-bold group-hover:text-rose-500  cursor-pointer leading-1"
              title=" मकर संक्रांति 2025: तिथि, महत्व और अनुष्ठान"
            >
              <h1> मकर संक्रांति 2025: तिथि, महत्व और अनुष्ठान</h1>
            </Link>
            <div className="postInfo">
              <p className="md:text-[0.55rem] lg:text-[0.65rem] opacity-85 inter">
                By <strong className="text-neutral-600">Darshan</strong> -{" "}
                Friday, May 10, 2024
              </p>
            </div>
          </div>
        </Link>
        <Link
          to="/posts/post-slug"
          className="recentPost group w-full h-[65px] mb-4 flex flex-row items-start justify-between gap-4"
        >
          <div className="w-[98px] h-[65px]">
          <img
            src="https://blogger.googleusercontent.com/img/a/AVvXsEhcliunLM8x9XV-Mx27FOBOYpTt89na5pq2AKpR788DwLcG-o8LlFnunV51StrlmJfQwGZbe-o2c9Y40wcAYJQJTi3X7lUIno_yyk06IgdoK-GXFw3b7J5Y1MmPt_am72Y9F7U2hCBKtBN4O9cH8HWxM6joRryQCMI1KLiP-K-WQsh_RrF2r44SKpTliyM3"
            alt=""
            className="w-[98px] h-[65px] "
          />
          </div>
          
          <div className="postInformation flex flex-col items-start justify-start gap-1">
            <Link
              to="/posts/posts-slug"
              className="poppins text-xs lg:text-sm opacity-90 font-bold group-hover:text-rose-500 cursor-pointer leading-1"
              title=" How Dynatrace's Platform Sets the Standard"
            >
              <h1> How Dynatraces Platform Sets the Standard</h1>
            </Link>
            <div className="postInfo">
              <p className="md:text-[0.55rem] lg:text-[0.65rem] opacity-85 inter">
                By <strong className="text-neutral-600">Darshan</strong> -{" "}
                Sunday, Jan 26, 2025
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default RecentPostsComponent;
