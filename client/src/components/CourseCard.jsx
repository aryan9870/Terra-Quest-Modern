import React from 'react'

const CourseCard = ({course}) => {
  return (
    <div
            key={course.id}
            className="bg-[#08142E] cursor-pointer rounded-[30px] overflow-hidden border border-white/10 hover:border-orange-500 transition"
          >
            {/* Thumbnail */}
            <div className="h-40 bg-gradient-to-r from-orange-500 to-orange-600"></div>

            {/* Content */}
            <div className="p-5">
              <span className="text-orange-500 text-sm font-semibold">
                {course.category}
              </span>

              <h3 className="text-white text-xl font-semibold mt-3">
                {course.title}
              </h3>

              <p className="text-gray-400 mt-3">
                Live Classes • Notes • Test Series
              </p>

              <div className="flex items-center justify-between mt-6">
                <span className="text-white text-md font-bold">
                  {course.price}
                </span>

                <button className="bg-orange-500 font-semibold hover:bg-orange-600 px-5 py-2 rounded-full text-white">
                  Enroll
                </button>
              </div>
            </div>
          </div>
  )
}

export default CourseCard