interface HardSkill {
  name: string;
  description: string;
  icon: string;
}

const hardSkills: HardSkill[] = [
  {
    name: "Virtual Reality",
    description: "Orientated towards implementing VR in Research and Gamification",
    icon: "virtual-reality"
  },
  {
    name: "Unity",
    description: "Main tool for implementing VR or 3D Development",
    icon: "unity"
  },
  {
    name: "C#",
    description: "Language for programming and used within Unity",
    icon: "csharp"
  },
  {
    name: "Python",
    description: "I have been using Python for Implementing AI and data analysis",
    icon: "python"
  },
];

export default hardSkills;