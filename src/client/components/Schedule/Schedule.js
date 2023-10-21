import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Schedule() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedMajor = queryParams.get('major');
  const selectedUniversity = queryParams.get('university');
  const [seasonStorage, setSeasonStorage] = useState({});
  const studentCourseload = "MATH1A/ENG1A/BIO1A/ARTS1A/PHIL1/PHIL2/COMM7/ANTH2/PSYC1/BIOL6A/PHYS4A";
  const seasons = ['fall', 'winter', 'spring', 'summer', 'fall2', 'winter2', 'spring2'];
  const initialSeasonStorage = {};
  seasons.forEach((season) => {
      initialSeasonStorage[season] = [];
  });

  const fetchClasses = () => {
    
    const encodedMajorName = encodeURIComponent(selectedMajor);
    const encodedCollegeName = encodeURIComponent(selectedUniversity);
    const url = `http://localhost:6250/getClassList?majorName=${encodedMajorName}&collegeName=${encodedCollegeName}`;

    fetch(url)
    .then((response) => {
        if (response.ok) {
        return response.json();
        } else if (response.status === 404) {
        throw new Error('Class list not found');
        } else {
        throw new Error('Error fetching class_list');
        }
    })
    .then((data) => {
        console.log("Fetched Class List:", data.class_list);
        const classListSet = new Set(data.class_list.split('/'));
      const studentCoursesSet = new Set(studentCourseload.split('/'));

      const combinedCourses = Array.from(new Set([...studentCoursesSet, ...classListSet]));

      const updatedSeasonStorage = { ...initialSeasonStorage };
      
      console.log("Combined Courses:", combinedCourses);

        const subjects = {};
        const maxCoursesPerSeason = Math.ceil(combinedCourses.length / seasons.length);

        combinedCourses.forEach((course) => {
            const subject = course.substring(0, 4);
            
            for (let i = 0; i < seasons.length; i++) {
                const season = seasons[i];
                if (!subjects[season]) {
                    subjects[season] = [];
                }
                
                if (!subjects[season].includes(subject) && updatedSeasonStorage[season].length < maxCoursesPerSeason) {
                    updatedSeasonStorage[season].push(course);
                    subjects[season].push(subject);
                    break;
                }
            }
        });
      
        setSeasonStorage(updatedSeasonStorage);
        console.log("Updated Season Storage:", updatedSeasonStorage);
    })
    .catch((error) => {
        console.error('Error fetching class_list:', error);
    });
  };
  

  return (
    <div className="Schedule">
    <button onClick={fetchClasses}>Fetch Classes</button>
    <p>Major: {selectedMajor}</p>
    <p>University: {selectedUniversity}</p>
    <div>
      {seasonStorage && seasons.map((season) => (
        <div key={season}>
          <h2>{season}</h2>
          <ul>
            {seasonStorage[season] && seasonStorage[season].map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
  );
}

export default Schedule;