import React, { useEffect, useState } from "react";
import './Major.css';
import biology from "../../assets/dna.png";
import computer from "../../assets/settings.png";
import economics from "../../assets/economic.png";
import english from "../../assets/essay.png";
import math from "../../assets/calculator.png";
import psych from "../../assets/brain.png";
import sociology from "../../assets/sociology.png";
import kinesiology from "../../assets/gym.png";
import law from "../../assets/balance.png";

const buttonData = [ {major: 'Biology', imageSrc: biology},
                     {major: 'Computer Science', imageSrc: computer},
                     {major: 'Economics', imageSrc: economics},
                     {major: 'English', imageSrc: english},
                     {major: 'Mathematics', imageSrc: math},
                     {major: 'Psychology', imageSrc: psych},
                     {major: 'Sociology', imageSrc: sociology},
                     {major: 'Kinesiology', imageSrc: kinesiology},
                     {major: 'Law', imageSrc: law}
                    ]
    

const Major = () => {
    const [isVisible, setVisible] = useState(false);

    //1000ms
    useEffect(() => {
        setTimeout(() => {
            setVisible(true);
        }, 1000);
    }, []);

    return (
        <div className="major-grid">
            {buttonData.map((data, index) => (
                <button
                key={index}
                className="major-item"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center', // Center vertically
                  justifyContent: 'center', // Center horizontally
                }}
              >
                <img
                  src={data.imageSrc}
                  style={{ width: '65%', height: '65%' }}
                />
                <a>{data.major}</a>
              </button>
            ))}
        </div>
    );
}

export default Major;