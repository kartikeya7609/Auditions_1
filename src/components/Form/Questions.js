const questions = [
  {
    type: "text-group",
    questions: [
      { type: "text", label: "Full Name:" },
      {
        type: "radio",
        label: "Year of Study:",
        options: ["1st Year", "2nd Year"],
      },
      {
        type: "text",
        label: "Whatsapp Number:",
      },
    ],
  },
  {
    type: "radio",
    label: "Department:",
    options: [
      "Computer Science and Engineering",
      "Mathematics and Computing",
      "Electronics and Communication Engineering",
      "Mechanical Engineering",
      "Civil Engineering",
      "Electrical Engineering",
      "Biotechnology",
      "Chemical Engineering",
      "Metallurgical and Material Engineering",
      "Chemistry",
    ],
  },
  {
    type: "range",
    label: "Rate yourself out of 10 (10 being highest and 1 being lowest)",
    options: [
      "Time management",
      "Confidence",
      "Ego",
      "Hardwork",
      "Creativity",
      "Teamwork",
      "Leadership",
      "Intelligence",
    ],
  },
  {
    type: "multi-radio",
    label: "Interested In:",
    options: [
      "Graphic Design",
      "Event Management",
      "Web Development ",
      "Robotics",
      "Data Science",
      "Video Editing",
      "Speaker/Presenter",
      "Content Writing",
    ],
  },
  {
    type: "essay",
    label:
      "Q1. What are your club preferences amongst all the clubs that the college has?",
  },
  
  {
    type: "essay",
    label:
      "Q2. You're working on a complex project with your team, but another member consistently misses deadlines and contributes minimally. How do you address this situation while maintaining a positive and productive team environment?",
  },
  
  {
    type: "essay",
    label:
      "Q3. What are you hoping to gain from being a member of this club?",
  },
  
  {
    type: "essay",
    label:
      "Q4. Suppose your idea is technically correct, but your team disagrees with it. How would you handle the situation and move forward?",
  },
  
  {
    type: "essay",
    label:
      "Q5. What kind of events, workshops, or webinars would you like us to organize? Do you think they would be beneficial for the club and why?",
  },
  
  {
    type: "essay",
    label:
      "Q6. If you could teleport anywhere in the world right now, with five minutes to spend, where would you go and what would you do?",
  },
  
  {
    type: "essay",
    label:
      "Q7. Why should we select you as a member of IEEE SB NIT Durgapur?",
  },
  
  {
    type: "essay",
    label:
      "Q8. Convince me to participate in NVISION. Why should someone not miss this event?",
  },
  
  {
    type: "essay",
    label:
      "Q9. What qualities do you have that made you believe you are a good fit for IEEE SB NIT Durgapur?",
  },
  
  {
    type: "essay",
    label:
      "Q10. You have a crush on a good friend of yours, who is reluctant to audition for IEEE SB NIT Durgapur. After a lot of convincing, they audition. You make it to the next round with positive feedback, but your friend is not selected and becomes upset, developing negative thoughts about the club. How would you handle this situation while maintaining your friendship and still giving your best in the next round?",
  },
  ];

export default questions;
