import React, { useState } from "react";
import PageWithNavbar from "../../common/components/pages_with_navbar/PagesWithNavbar";
import { onCampusCourses } from "../../common/data/courseData";
import OnCampusModal from "../../common/components/modals/OnCampusModal";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";

import Gallery from "../../common/components/gallery/Gallery";

import { Partener } from "../../common/components/universityPartener";
import './index.css'

const OnCampus = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const openModal = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCourse(null);
  };

  const openBrochure = (url) => {
    window.open(url, "_blank");
  };

  const downloadIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className="w-4 h-4"
      fill="#9de045"
    >
      <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </svg>
  );

  return (
    <PageWithNavbar>
      <div className="text-center">
        <h1 className="header">On-Campus Programs</h1>
        <hr />
      </div>
      <div className="flex flex-col px-28 py-20">
        <div className="grid grid-cols-3 gap-10 pt-12 px-14flex flex-row items-center w-full justify-between pt-12 px-14">
          {onCampusCourses.map((course, index) => (
            <div
              className="w-full border bg-secondary text-primary rounded-2xl hover:scale-105 duration-700"
              key={index}
            >
              <div className="flex flex-col items-center gap-1 pt-2">
                <span className="text-4xl font-semibold">{course.name}</span>
                <span className="text-md font-normal">
                  {"("}
                  {course.title}
                  {")"}
                </span>
                <span className="text-md font-semibold">
                  Actual Price:{" "}
                  <span className="line-through">{course.price}</span>
                </span>
                <span className="text-2xl font-semibold">
                  Offer Price: {course.actualPrice}
                </span>
                <div className="border border-primary w-full mt-4"></div>
                <div className="flex flex-col gap-2 py-4">
                  {course.benifits.map((benefit, index) => (
                    <div
                      className="flex flex-row items-start gap-4 text-md px-4"
                      key={index}
                    >
                      {!benefit.isAvailable ? (
                        <CloseOutlined className="text-red-500" />
                      ) : (
                        <CheckOutlined />
                      )}
                      <span
                        className={`text-md text-white font-normal tracking-wide ${
                          !benefit.isAvailable && "line-through text-red-500"
                        }`}
                      >
                        {benefit.title}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-row w-full border-t border-0 border-t-primary text-lg font-medium">
                  <button
                    className="flex flex-row w-1/2 gap-1.5 rounded-l-2xl rounded-t-none items-center justify-center bg-secondary text-primary py-2"
                    onClick={() => openBrochure(course.brochureUrl)}
                  >
                    {downloadIcon}Brochure
                  </button>
                  <button
                    className="flex flex-row w-1/2 rounded-r-2xl rounded-t-[0px_1rem] items-center justify-center bg-primary text-secondary py-2"
                    onClick={() => openModal(course)}
                  >
                    View Course
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {isModalOpen && (
          <OnCampusModal onClose={closeModal} course={selectedCourse} />
        )}
        <div className="mt-16 mb-4">
          <Gallery />
        </div>
        <div>
          <Partener />
        </div>
      </div>
    </PageWithNavbar>
  );
};

export default OnCampus;
