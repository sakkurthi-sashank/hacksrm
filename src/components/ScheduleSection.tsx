export const ScheduleSection = () => {
  return (
    <section
      id="Schedule"
      className="flex min-h-screen flex-col items-center justify-center bg-gray-950 px-4 pb-4 pt-5 sm:px-10 sm:pt-10"
    >
      <div className="mb-20 text-center text-4xl font-semibold sm:text-5xl font-josefin-sans bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA]">
        Schedule
      </div>
      <div className="main font-josefin-sans">
        <ul className="timeline">
          <li className="timeline-item">
            <div className="timeline-content mr-[500px] w-[46%] rounded-sm border border-gray-700 bg-gray-950 ">
              <h2 className="ml-5 text-2xl font-semibold text-white">
                12:00 PM, 19th May
              </h2>
              <h2 className="ml-5 text-xl font-semibold text-gray-300">
                Hackathon Start/Kick Off
              </h2>
            </div>
          </li>
          <li className="timeline-item">
            <div className="timeline-content ml-32 w-[46%] rounded-sm border border-gray-700 bg-gray-950">
              <h2 className="ml-5 text-2xl font-semibold text-white">
                01:00 PM, 19th May
              </h2>
              <h2 className="ml-5 text-xl font-semibold text-gray-300">
                Start of Hackathon
              </h2>
            </div>
          </li>
          <li className="timeline-item">
            <div className="timeline-content mr-32 w-[46%] rounded-sm border border-gray-700 bg-gray-950">
              <h2 className="ml-5 text-2xl font-semibold text-white">
                3:00 PM, 19th May
              </h2>
              <h2 className="ml-5 text-xl font-semibold text-gray-300">
                A Checkin on the Participants and their Progress (not mandatory)
              </h2>
            </div>
          </li>
          <li className="timeline-item">
            <div className="timeline-content ml-32 w-[46%] rounded-sm border border-gray-700 bg-gray-950">
              <h2 className="ml-5 text-2xl font-semibold text-white">
                4:00 PM, 19th May
              </h2>
              <h2 className="ml-5 text-xl font-semibold text-gray-300">
                Session by Cartesi
              </h2>
            </div>
          </li>
        </ul>
        <ul className="timeline">
          <li className="timeline-item">
            <div className="timeline-content mr-[500px] w-[46%] rounded-sm border border-gray-700 bg-gray-950">
              <h2 className="ml-5 text-2xl font-semibold text-white">
                01:30PM, 20th May
              </h2>
              <h2 className="ml-5 text-xl font-semibold text-gray-300">
                Submission Deadline
              </h2>
            </div>
          </li>
          <li className="timeline-item">
            <div className="timeline-content ml-32 w-[46%] rounded-sm border border-gray-700 bg-gray-950">
              <h2 className="ml-5 text-2xl font-semibold text-white">
                2:30PM, 20th May
              </h2>
              <h2 className="ml-5 text-xl font-semibold text-gray-300">
                Presentation Round
              </h2>
            </div>
          </li>
          <li className="timeline-item">
            <div className="timeline-content mr-32 w-[46%] rounded-sm border border-gray-700 bg-gray-950">
              <h2 className="ml-5 text-2xl font-semibold text-white">
                05:00PM, 20th May
              </h2>
              <h2 className="ml-5 text-xl font-semibold text-gray-300">
                Announcement of Results
              </h2>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
