import React from "react"

export const LocationIcon = (props) => {
    return (
        <svg width="11" height="15" viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M5.25 3.375C3.80078 3.375 2.625 4.57812 2.625 6C2.625 7.44922 3.80078 8.625 5.25 8.625C6.67188 8.625 7.875 7.44922 7.875 6C7.875 4.57812 6.67188 3.375 5.25 3.375ZM5.25 7.75C4.26562 7.75 3.5 6.98438 3.5 6C3.5 5.04297 4.26562 4.25 5.25 4.25C6.20703 4.25 7 5.04297 7 6C7 6.98438 6.20703 7.75 5.25 7.75ZM5.25 0.75C2.32422 0.75 0 3.10156 0 6C0 8.13281 0.710938 8.73438 4.70312 14.4766C4.94922 14.8594 5.52344 14.8594 5.76953 14.4766C9.76172 8.73438 10.5 8.13281 10.5 6C10.5 3.10156 8.14844 0.75 5.25 0.75ZM5.25 13.7109C1.42188 8.21484 0.875 7.77734 0.875 6C0.875 4.85156 1.3125 3.75781 2.13281 2.91016C2.98047 2.08984 4.07422 1.625 5.25 1.625C6.39844 1.625 7.49219 2.08984 8.33984 2.91016C9.16016 3.75781 9.625 4.85156 9.625 6C9.625 7.77734 9.05078 8.21484 5.25 13.7109Z"
                fill={props.fill ? props.fill : "#D8D8D8"}
            />
        </svg>
    )
}