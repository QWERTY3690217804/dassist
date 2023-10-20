import React, { useEffect, useState } from "react";
import './Major.css';

const buttonNames = [ 'Biology', 'Computer Science', 'Economics',
                      'English', 'Mathematics', 'Pyschology',
                      'Sociology', 'Kinesiology', 'Law',
                      'Anthropology'
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
        <div>
            <p>Hi</p>
        </div>
    );
}

export default Major;