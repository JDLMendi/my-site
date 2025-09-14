/**
 * Interface representing work experience details.
 *
 * @property {string} title - The job title of the position.
 * @property {string} startDate - The start date of the position in the format YYYY-MM-DD.
 * @property {string} [endDate] - The end date of the position in the format YYYY-MM-DD.
 *                                Optional, can be omitted if the position is current.
 * @property {string} company - The name of the company where the position was held.
 * @property {string} location - The geographic location of the company (e.g., city, state, country).
 * @property {string} description - A brief description of the roles and responsibilities
 *                                   associated with the position.
 * @property {string[]} goals - A list of professional goals achieved or targeted during the position.
 * @property {boolean} currentJob - Indicates whether the position is the current job.
 */
interface WorkExperience {
    title: string;
    startDate: string;
    endDate?: string;
    company: string;
    location: string;
    description: string;
    goals: string[];
    currentJob: boolean;
}

/**
 * Represents an array of work experiences.
 *
 * Each work experience object contains details about
 * a job position including the title, start and end dates,
 * company name, job location, description of the role,
 * a list of goals or achievements, and a flag indicating
 * if it is the current job.
 *
 * @type {Array<Object>}
 * @property {string} title - The job title.
 * @property {string} startDate - The start date of the job in YYYY-MM-DD format.
 * @property {string} [endDate] - The end date of the job in YYYY-MM-DD format. Optional for current jobs.
 * @property {string} company - The name of the company.
 * @property {string} location - The location of the job.
 * @property {string} description - A brief description of the job responsibilities.
 * @property {Array<string>} goals - A list of goals or achievements within the job.
 * @property {boolean} currentJob - A flag indicating if the job is the current one.
 */
const workExperience: WorkExperience[] = [
    {
        title: "Learning Experience Developer",
        startDate: "2025-10-01",
        company: "Collaborative Teaching Laboratory",
        location: "University of Birmingham, Birmingham, UK",
        description: "Involved in developing innovative learning resources to transform how students engage with laboratory work. As part of the CTL's in-house Educational Technology (EdTech) team, I will be collaborating with academics to create bespoke digital materials and in-lab learning experiences.",
        goals: [
            // "Design and develop a range of digital learning materials and educational media.",
            // "Create tailored learning experiences using online and blended pedagogies.",
            // "Manage and develop online course content and assessment tools.",
            // "Collaborate with cross-functional teams to deliver transformative student experiences.",
            // "Demonstrate proficiency with industry content development tools such as Articulate Storyline or similar.",
            // "Work with virtual learning environments (VLE) like Canvas.",
            // "Utilise project management skills to self-govern and work independently."
        ],
        currentJob: true,
    },
    {
        title: "CTL EdTech Intern (2025)",
        startDate: "2025-07-01",
        endDate: "2025-09-10",
        company: "University of Birmingham",
        location: "Birmingham, UK",
        description: "Involved in developing a Mouse Dissection/Anatomy Tool using Photogrammetry and exploring the use of VR as a learning tool.",
        goals: [
            "Involved in the development of the Mouse Dissection/Anatomy Tool which aims to help students to revisit the anatomy of a mouse through their course through the use of Photogrammetry and exploring workflows including 3D reconstruction softwares.",
            "Exploring methods of utilising Virtual Reality as a learning tool with possible usage of Mobile Device Management (MDM) solutions and models to extend to different subjects (beyond Chimera X).",
        ],
        currentJob: false,
    },
    {
        title: "Senior Student Ambassador",
        startDate: "2022-09-01",
        company: "University of Birmingham",
        location: "Birmingham, UK",
        description: "Senior EPS Ambassador for the School of Computer Science and LES Postgraduate Ambassador for the School of Psychology, guiding prospective students and sharing experiences about university life and interdisciplinary research.",
        goals: [
            "Senior EPS Ambassador with the School of Computer Science and LES Postgraduate Ambassador for the School of Psychology, responsible for guiding prospective students and parents during tours and Open Days and providing insight about the course.",
            "In addition, talking about my experiences as an ongoing student progressing into an interdisciplinary master's and research with Psychology.",
        ],
        currentJob: true,
    },
    {
        title: "Research Assistant (School of Psychology - Virtual Reality Lab)",
        startDate: "2024-09-01",
        endDate: "2025-06-30",
        company: "University of Birmingham",
        location: "Birmingham, UK",
        description: "Contributed to the ARME project through plugin integration, maintained the VR Lab website, developed Mechanical Eyes for eye-tracking tests, and provided guidance on VR development and motion capture systems.",
        goals: [
            "Involved with the plugin integration for the ARME project (Adaptive Metronome) that utilises the Linear Phase Correction Model, and maintains code integrity, documentations, and utilisation throughout the project.",
            "Assisting in the progress of developing Mechanical Eyes used for Eye-Tracking quality testing in Virtual Reality.",
            "Maintainer for the VR Lab website.",
            "Providing guidance in VR development to undergraduate and postgraduate students.",
            "Involved in running sessions in BhamXR, and administration behind the scenes in the VR Lab.",
            "Assisted in the Motion Capture Course, providing guidance and background knowledge on how motion capture systems work.",
        ],
        currentJob: false,
    },
    {
        title: "President (2023/2024) and Secretary (2025)",
        startDate: "2023-09-01",
        endDate: "2025-06-30",
        company: "Virtual Reality Society (UBVR)",
        location: "Birmingham, UK",
        description: "Led the society by planning and overseeing activities, coordinating events, engaging with the student community, and providing technical advice and training for VR equipment and projects.",
        goals: [
            "Plan and oversee society activities, coordinating events for students to explore virtual reality.",
            "Engage with the student community, aiming towards building awareness of community and opportunities.",
            "Train committee members on equipment handling, safety, and experience selection.",
            "Provide technical advice on setting up projects and usage for VR.",
        ],
        currentJob: false,
    },
    {
        title: "Jiu Jitsu Secretary",
        startDate: "2023-08-01",
        endDate: "2025-06-30",
        company: "Sport and Fitness",
        location: "Birmingham, UK",
        description: "Managed administrative tasks for the Jiu Jitsu club, liaised with Sport and Fitness and The Jiu Jitsu Foundation, ensured proper member registration, co-managed social media, and assisted in training.",
        goals: [
            "Manage administrative tasks, and liaise with Sport and Fitness for club operations and The Jiu Jitsu Foundation for administration in competitions.",
            "Ensured proper member registration for membership and insurance.",
            "Act as vice-captain for the club when the captain is unavailable.",
            "Co-managed social media, creating graphic contents and answering queries.",
            "Assisted lower grade in learning the syllabus through demonstration and guidance.",
        ],
        currentJob: false,
    },
    {
        title: "CTL EdTech Intern (2024)",
        startDate: "2024-07-01",
        endDate: "2024-09-30",
        company: "University of Birmingham",
        location: "Birmingham, UK",
        description: "Served as Project Lead and Developer for the VR Fume Cabinet Project, managing tasks and coordinating with staff. Also organised VR Tasters for Family Day and assisted other interns.",
        goals: [
            "Project Lead and Developer for the VR Fume Cabinet Project, managing task allocation and project milestones and coordinating with staff to ensure resource availability and intern support.",
            "Organised VR Tasters for Family Day, planned teaching sessions and researched VR in education to enhance student preparation for practicals.",
            "Coordinated and assisted other interns in completing provided tasks outside projects.",
        ],
        currentJob: false,
    },
    {
        title: "Host",
        startDate: "2024-02-01",
        endDate: "2024-08-31",
        company: "The Park Playground",
        location: "Birmingham, UK",
        description: "Led VR game sessions, managed guest experiences for regular and large corporate events, and performed troubleshooting and maintenance on VR hardware and software.",
        goals: [
            "Led VR game sessions, managing guest experiences from setup to completion.",
            "Handled large corporate events",
            "Troubleshooting and maintenance of in-house VR hardware/software",
        ],
        currentJob: false,
    },
    {
        title: "UoBe Festival Project and Event Assistant",
        startDate: "2023-01-01",
        endDate: "2023-02-28",
        company: "University of Birmingham",
        location: "Birmingham, UK",
        description: "Managed the festival's booking website, collected promotional materials, moderated talks, and prepared VR equipment for use during the event.",
        goals: [
            "Managed the booking website, collected promotional materials, and performed data analysis.",
            "Moderated talks, managed queries, and prepared VR equipment for festival use.",
        ],
        currentJob: false,
    }
];
export default workExperience;