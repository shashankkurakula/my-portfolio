import one from '../assets/svg/projects/one.svg'
import two from '../assets/svg/projects/two.svg'
import three from '../assets/svg/projects/three.svg'
import four from '../assets/svg/projects/four.svg'
import five from '../assets/svg/projects/five.svg'
import six from '../assets/svg/projects/six.svg'
import seven from '../assets/svg/projects/seven.svg'
import eight from '../assets/svg/projects/eight.svg'
import RecipeBook from '../assets/svg/projects/RecipeBook.png'
import analytics from '../assets/svg/projects/analytics.png'
import MedicalSoftware from '../assets/svg/projects/MedicalSoftware.png'
import movie from '../assets/svg/projects/movie.png'


export const projectsData = [
    {
        id: 1,
        projectName: 'MyRecipeBook',
        projectDesc: 'Stylish, responsive full-stack web app with diverse recipes, video tutorials, and data visualization. Optimized for performance, content strategy, user satisfaction, and business growth.',
        tags: ['React', 'Material Ui', 'Flask', 'SQLite'],
        code: 'https://github.com/shashankkurakula/MyRecipeBook',
        demo: 'http://myweb.usf.edu/~kantheti/index.html',
        image: RecipeBook
    },
    {  
        id: 2,
        projectName: 'Charting The Skies',
        projectDesc: 'Tableau project visualizing US airport data, including COVID-19 impact, delays, and flight cancellations. Enhances operations, satisfaction, revenue, planning, and forecasting for competitive advantages.',
        tags: ['Tableau', 'MS Excel'],
        code: 'https://public.tableau.com/app/profile/shashank.kurakula/viz/ChartingTheSkies/Dashboard2',
        demo: 'https://public.tableau.com/app/profile/shashank.kurakula/viz/ChartingTheSkies/Dashboard2',
        image: analytics
    },
    {
        id: 3,
        projectName: 'Pharma Application',
        projectDesc: 'Comprehensive pharma app providing detailed drug information, including usage, dosage, side effects, and interactions for informed decision-making.',
        tags: ['ReactJS', 'NodeJS', 'Material Ui', 'MongoDB'],
        code: 'https://github.com/shashankkurakula/pharma-app',
        demo: 'https://pharma-app-five.vercel.app/',
        image: MedicalSoftware
    },
    {
        id: 4,
        projectName: 'Entertainment Hub',
        projectDesc: 'Experience a seamless movie app built on MERN stack. Add films to wishlists, share reviews, and discover cast details. Real-time updates, engaging features, and comprehensive insights drive user retention and revenue growth.',
        tags: ['Flutter', 'Firebase'],
        code: 'https://github.com/shashankkurakula/entertainment-hub',
        demo: 'https://entertainmenthub.netlify.app/',
        image: movie
    },
    // {
    //     id: 5,
    //     projectName: 'E-Commerce App',
    //     projectDesc: 'A Simple E-commerce application',
    //     tags: ['React Native', 'Firebase'],
    //     code: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    //     demo: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    //     image: five
    // },
    // {
    //     id: 6,
    //     projectName: 'Uber Lite',
    //     projectDesc: 'Uber clone',
    //     tags: ['Flutter'],
    //     code: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    //     demo: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    //     image: six
    // },
    // {
    //     id: 7,
    //     projectName: 'Stock Market App',
    //     projectDesc: 'A simple stock market API app',
    //     tags: ['React', 'Redux', 'Bootstrap'],
    //     code: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    //     demo: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    //     image: seven
    // },
    // {
    //     id: 8,
    //     projectName: 'Car Pooling System',
    //     projectDesc: 'The carpooling system merges multiple people in a car which leads to meet new people, reduces pollution',
    //     tags: ['Flutter', 'React'],
    //     code: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    //     demo: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    //     image: eight
    // },
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/