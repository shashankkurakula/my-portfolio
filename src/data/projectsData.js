import RecipeBook from "../assets/svg/projects/RecipeBook.png";
import analytics from "../assets/svg/projects/analytics.png";
import MedicalSoftware from "../assets/svg/projects/MedicalSoftware.png";
import movie from "../assets/svg/projects/movie.png";

import one from "../assets/svg/projects/one.svg";
import two from "../assets/svg/projects/two.svg";
import three from "../assets/svg/projects/three.svg";
import four from "../assets/svg/projects/four.svg";

export const projectsData = [
  {
    id: 1,
    projectName: "Pharma Application",
    projectDesc:
      "The primary objective of this project is to streamline and enhance the drug information management process for businesses operating in the pharmaceutical sector.",
    tags: ["ReactJS", "NodeJS", "Material Ui", "MongoDB"],
    code: "https://github.com/shashankkurakula/pharma-app",
    demo: "https://pharma-app-five.vercel.app/",
    image: MedicalSoftware,
  },
  {
    id: 2,
    projectName: "MyRecipeBook",
    projectDesc:
      "A simple, stylish, and responsive full-stack web application that provides step-by-step recipes with video tutorials. ",
    tags: ["React", "Material Ui", "Flask", "SQLite"],
    code: "https://github.com/shashankkurakula/MyRecipeBook",
    demo: "http://myweb.usf.edu/~kantheti/index.html",
    image: RecipeBook,
  },
  {
    id: 3,
    projectName: "Breaking Bad",
    projectDesc:
      "A simple Breaking Bad TV series based application with list of all characters their details and famous quotes.",
    tags: ["React"],
    code: "https://github.com/shashankkurakula/breaking-bad",
    demo: "https://breaking-bad-delta.vercel.app/",
    image: movie,
  },
  {
    id: 4,
    projectName: "Charting The Skies",
    projectDesc:
      "This project uses Tableau to visualize data about airports and air travelers in the United States. The visualizations show the impact of COVID-19 on passenger statistics, as well as delays in arrivals and departures and the frequency of cancelled flights. Enhancing operational efficiency leads to cost savings, improved customer satisfaction, increased revenue, and accurate planning and forecasting. With these insights, businesses will gain competitive advantages. I would like to demonstrate my skills in Tableau.",
    tags: ["Tableau", "MS Excel"],
    code: "https://public.tableau.com/app/profile/shashank.kurakula/viz/ChartingTheSkies/Dashboard2",
    demo: "https://public.tableau.com/app/profile/shashank.kurakula/viz/ChartingTheSkies/Dashboard2",
    image: analytics,
  },
];
