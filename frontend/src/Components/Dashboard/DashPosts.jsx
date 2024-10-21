/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

function Posts() {
  return (
    <div className="posts flex flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
        <div>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">All Posts</h2>
            <Link
            to='/posts/create'
              className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-black
                  text-white h-9 rounded-md px-3"
            >
              Add New 
            </Link>
          </div>
          <div className="mt-4 border dark:border-gray-800 shadow-sm rounded-lg">
            <div className="relative w-full overflow-auto">
              <table className="w-full caption-bottom text-sm">
                <thead className="[&amp;_tr]:border-b dark:border-gray-800">
                  <tr className="border-b dark:border-gray-800 transition-colors hover:bg-neutral-100 dark:hover:bg-slate-900 data-[state=selected]:bg-muted">
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      Title
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      Author
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                      Date
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                      Status
                    </th>
                    <th className="h-12 px-4 align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 text-right">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="[&amp;_tr:last-child]:border-0">
                  <tr className="border-b dark:border-gray-800 transition-colors hover:bg-neutral-100 dark:hover:bg-slate-900 data-[state=selected]:bg-muted">
                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">
                      The Importance of Blogging
                    </td>
                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                      John Doe
                    </td>
                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                      May 1, 2023
                    </td>
                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                      Published
                    </td>
                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-right"></td>
                  </tr>
                  <tr className="border-b dark:border-gray-800 transition-colors dark:hover:bg-slate-900 hover:bg-neutral-100 data-[state=selected]:bg-muted">
                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">
                      10 Tips for Effective SEO
                    </td>
                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                      Jane Smith
                    </td>
                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                      April 15, 2023
                    </td>
                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                      Draft
                    </td>
                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-right"></td>
                  </tr>
                  <tr className="border-b dark:border-gray-800 transition-colors dark:hover:bg-slate-900 hover:bg-neutral-100 data-[state=selected]:bg-muted">
                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">
                      The Future of Content Marketing
                    </td>
                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                      Michael Johnson
                    </td>
                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                      March 30, 2023
                    </td>
                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                      Scheduled
                    </td>
                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-right"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Posts;
