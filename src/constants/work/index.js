import onScreenMovieImage from "../../Resources/Mockups/StreamXplore/HomePage.png";
import weatherIO from "../../Resources/Mockups/weather/weather_io.png";
import organizeTodo from "../../Resources/Mockups/organize-todos/todo-app.png";

export const data = [
	{
		title: "StreamXplore",
		desc: `A dynamic and intuitive movie database exploration platform designed to help users discover movies and series effortlessly. Built with Next.js and Tailwind CSS, StreamXplore offers real-time data, advanced search features, and a seamless browsing experience. Whether you're hunting for the latest releases or searching for hidden gems, StreamXplore delivers a fast and user-friendly interface to make finding your next favorite title a breeze.`,
		tech: ["NextJs", "Typescript", "Tailwind"],
		features: [
			"User Login & Signup functionality",
			"Ineract with blogs or create your own",
		],
		imgSrc: onScreenMovieImage,
		deployedLink: "https://onscreen-movie.vercel.app/",
		gitLink: "https://github.com/lokesh-dc/moviesearch",
	},
	{
		title: "Organize.todo",
		desc: `A dynamic project management tool designed to empower users to organize their tasks efficiently. It features a fully customizable to-do list with multiple statuses (e.g., To Do, In Review, Done) and the ability to define additional statuses to suit user workflows.`,
		tech: [
			"NextJs",
			"Node.js",
			"Express.js",
			"MongoDB",
			"Typescript",
			"Tailwind",
		],
		features: [
			"<b>Customizable Task Statuses:</b> Define and modify task states to match team requirements.",
			"<b>Deadline Tracking:</b> Assign deadlines to tasks and easily manage tasks for timely follow-ups.",
			"<b>Team Collaboration:</b> Allow multiple team members to collaborate on shared projects.",
			"<b>User-Friendly Design:</b> Simplified UI/UX for intuitive navigation and task management.",
		],
		impact:
			"Enhanced productivity and streamlined collaboration for small teams and individuals.",
		imgSrc: organizeTodo,
		deployedLink: "https://organize-todo.vercel.app/dashboard",
		gitLink: "https://github.com/lokesh-dc/organize-todo",
	},
	{
		title: "Weather.io",
		desc: `A responsive weather application using HTML, JavaScript, and CSS that provides real-time weather updates. The app enables users to view current weather conditions for their hometown or any searched location. Additionally, it integrates an interactive map to monitor the current location, assisting users in identifying potential nature-related traffic or abnormalities.`,
		tech: ["HTML", "Weather API", "CSS", "Javascript"],
		features: [
			"User Login & Signup functionality",
			"Ineract with blogs or create your own",
		],
		imgSrc: weatherIO,
		deployedLink: "https://hilarious-alpaca-f7c2a1.netlify.app",
		gitLink: "https://github.com/lokesh-dc/Weather-App",
	},
];
