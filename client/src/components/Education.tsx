import brownLogo from '../assets/images/brown.png';
import fsuLogo from '../assets/images/fsu.png';
import chilesLogo from '../assets/images/chiles.jpg';

const educationInfo = [
    {   
        image: {brownLogo}, 
        name: "Brown University", 
        major: "Bachelor of Science in Applied Math + Computer Science",
        date: "Aug. 2024 - May 2028"
    },
    {   
        image: {fsuLogo}, 
        name: "Florida State University", 
        major: "High School Dual Enrollment",
        date: "Aug. 2023 - May 2024"
    },{   
        image: {chilesLogo}, 
        name: "Lawton Chiles High School", 
        major: "High School Diploma",
        date: "Aug. 2020 - May 2024"
    }
]

const Education = () => {
    return (
        <section>
            <h2 className="text-black">Education</h2>
            <div>
            </div>
        </section>
    );
}

export default Education