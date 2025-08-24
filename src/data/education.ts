interface Education {
    title: string;
    startDate: string;
    endDate?: string;
    school: string;
    location: string;
    description: string;
    currentUni: boolean;
}

const  education: Education[] = [
    {
        title: "Masters in Cognitive Neuroimaging and Data Science (Computational Neuroscience)",
        startDate: "2024-09-23",
        endDate: "",
        school: "University of Birmingham",
        location: "United Kingdom",
        description: "",
        currentUni: true,
    },
    {
        title: "Bachelor of Science in Computer Science",
        startDate: "2021-09-25",
        endDate: "2024-07-01",
        school: "University of Birmingham",
        location: "United Kingdom",
        description: "",
        currentUni: false,
    },
];

export default education;