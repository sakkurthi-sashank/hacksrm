export const Schedule = () => {
  return (
    <section
      id="Schedule"
      className="flex min-h-screen flex-col items-center justify-center bg-gray-900 px-4 pb-4 pt-5 sm:px-10 sm:pt-10"
    >
      <div className="title-gradient my-10 text-center text-4xl font-semibold sm:mt-20 sm:text-5xl">
        Schedule
      </div>
      <div className="">
        <div className="main">
          {/* <div className="mb-4 flex justify-center">
            <h1 className="text-3xl font-bold text-zinc-400">
              Day 1 - 19th May
            </h1>
          </div> */}
          <ul className="timeline">
            <li className="timeline-item">
              <div className="timeline-content mr-[500px] w-[46%] rounded-lg border border-gray-700 bg-gray-900 ">
                <h2 className="ml-5 text-3xl font-semibold text-white">
                  12:00 PM, 19th May
                </h2>
                <h2 className="ml-5 text-2xl font-semibold text-gray-300">
                  Opening Ceremony
                </h2>
                <p className="text-gray-300">
                  Vice Chancellor Speech, Sponsors Speech, Rules and Problem
                  Statement
                </p>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-content ml-32 w-[46%] rounded-lg border border-gray-700 bg-gray-900 ">
                <h2 className="ml-5 text-3xl font-semibold text-white">
                  01:00 PM, 19th May
                </h2>
                <h2 className="ml-5 text-2xl font-semibold text-gray-300">
                  Start of Hackathon
                </h2>
                <p className="text-gray-300">
                  The hackathon kicks Off! Participants begin working on their
                  projects
                </p>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-content mr-32 w-[46%] rounded-lg border border-gray-700 bg-gray-900 ">
                <h2 className="ml-5 text-3xl font-semibold text-white">
                  1:30PM, 19th May
                </h2>
                <h2 className="ml-5 text-2xl font-semibold text-gray-300">
                  Lunch Break
                </h2>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-content ml-32 w-[46%] rounded-lg border border-gray-700 bg-gray-900 ">
                <h2 className="ml-5 text-3xl font-semibold text-white">
                  06:00PM, 19th May
                </h2>
                <h2 className="ml-5 text-2xl font-semibold text-gray-300">
                  Mentorship Session
                </h2>
                <p className="text-gray-300">
                  Mentorship sessions where industry experts and seasoned
                  professionals will guide you with tips for success in the tech
                  industry.
                </p>
              </div>
            </li>
          </ul>
          <ul className="timeline">
            <li className="timeline-item">
              <div className="timeline-content mr-[500px] w-[46%] rounded-lg border border-gray-700 bg-gray-900">
                <h2 className="ml-5 text-3xl font-semibold text-white">
                  01:30PM, 20th May
                </h2>
                <h2 className="ml-5 text-2xl font-semibold text-gray-300">
                  Hackathon Ends!
                </h2>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-content ml-32 w-[46%] rounded-lg border border-gray-700 bg-gray-900 ">
                <h2 className="ml-5 text-3xl font-semibold text-white">
                  2:30PM, 20th May
                </h2>
                <h2 className="ml-5 text-2xl font-semibold text-gray-300">
                  Presentation Round
                </h2>
                <p className="text-gray-300">
                  Participants present their projects to the judges
                </p>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-content mr-32 w-[46%] rounded-lg border border-gray-700 bg-gray-900 ">
                <h2 className="ml-5 text-3xl font-semibold text-white">
                  05:00PM, 20th May
                </h2>
                <h2 className="ml-5 text-2xl font-semibold text-gray-300">
                  Announcement of Results
                </h2>
                <p className="text-gray-300">
                  Winners will be announced and prizes will be distributed.
                </p>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-content ml-32 w-[46%] rounded-lg border border-gray-700 bg-gray-900 ">
                <h2 className="ml-5 text-3xl font-semibold text-white">
                  05:30PM, 20th May
                </h2>
                <h2 className="ml-5 text-2xl font-semibold text-gray-300">
                  Closing Ceremony
                </h2>
                <p className="text-gray-300">Closing Ceremony</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
