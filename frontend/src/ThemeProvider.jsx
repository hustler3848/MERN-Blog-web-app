/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React from 'react'
import {useSelector} from 'react-redux'

function themeProvide({children}) {
    const {theme} = useSelector((state) => state.theme)
  return (
    <div className={theme}>
        <div className="bg-white text-gray-700 dark:text-gray-200 dark:bg-slate-950">
            {children}
        </div>
    </div>
  )
}

export default themeProvide