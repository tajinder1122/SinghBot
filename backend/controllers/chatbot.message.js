import Bot from "../models/bot.model.js";
import User from "../models/user.model.js";

export const Message=async(req,res)=>{
    try{
        const {text}=req.body;
        console.log(text)
        if(!text?.trim()){
            return res.status(400).json({error:"Text cannot be empty"});
        }
   
        const user=await User.create({
            sender:"user",
            text
        })

        //Data to train bot
       const botResponses={"hey": "Hey! Nice to see you here.","yo": "Yo! What's up?",
  "whats up": "Not much, just here to chat with you. What about you?",
  "how's it going": "It's going well, thanks! How are things with you?",
  "long time no see": "Yeah! It's been a while. How have you been?",
  "good afternoon": "Good afternoon! Hope your day is going well.",
  "good evening": "Good evening! How was your day?",
  "see you later": "Sure! Catch you later.",
  "bye": "Goodbye! Take care and stay awesome.",
  "take care": "You too! Stay safe and happy.",
  "nice to meet you": "Nice to meet you as well!",
  "glad to see you": "I'm glad to see you too!",
  "how's your day": "My day's been great so far. How about yours?",
  "are you real": "I'm a virtual assistant, but I'm here to chat like a real friend.",
  "do you sleep": "Nope, I never sleep—I'm always here for you.",
  "can you help me": "Of course! Tell me what you need help with.",
  "do you know me": "Not personally, but I'd love to get to know you better.",
  "are you human": "I'm not human, but I try my best to talk like one.",
  "do you like me": "Of course! I enjoy chatting with you.",
  "how old are you": "I don't have an age—I'm as timeless as the internet.",
  "hi": "Hello! How are you today?",
  "hello": "Hi there! How can I help you?",
  "how are you": "I'm doing great, thank you! How about you?",
  "good morning": "Good morning! Wishing you a productive day.",
  "good night": "Good night! Sweet dreams.",
  "thank you": "You're welcome! Happy to help.",
  "who are you": "I'm your chatbot assistant, here to answer your questions.",
  "what is your name": "I'm an AI chatbot. You can call me your assistant.",
  "what can you do": "I can answer your questions, help with information, and chat with you.",
  "what is love": "Love is a deep feeling of affection, care, and connection with someone.",
  "what is life": "Life is the existence of an individual, full of experiences, learning, and growth.",
  "what is happiness": "Happiness is a state of well-being and positive emotions.",
  "what is success": "Success is achieving your goals and being satisfied with your progress.",
  "what is friendship": "Friendship is a bond of trust, care, and support between people.",
  "what is time": "Time is a continuous sequence of events from the past, through the present, to the future.",
  "what is future": "The future is the time that has not yet happened; it depends on your actions today.",
  "what is money": "Money is a medium of exchange used to buy goods and services.",
  "what is coding interview": "A coding interview tests problem-solving and programming skills.",
  "what is behavioral interview": "Behavioral interviews assess how you handled past situations.",
  "how to introduce yourself": "Start with your name, background, skills, and goals.",
  "what is resume": "A resume is a summary of your education, experience, and skills.",
  "what is cover letter": "A cover letter is a personalized letter sent with a resume.",
  "what is aptitude test": "An aptitude test measures logical reasoning and problem-solving ability.",
  "what is technical round": "A technical round tests your subject knowledge and coding skills.",
  "what is hr round": "HR round checks personality, communication, and cultural fit.",
  "how to crack interview": "Prepare well, practice questions, and stay confident.",
  "what is group discussion": "Group discussion tests communication, knowledge, and teamwork.",
  "what is machine learning": "Machine learning is a field of AI that enables systems to learn from data and improve over time without being explicitly programmed.",
  "what is artificial intelligence": "Artificial intelligence is the simulation of human intelligence in machines that are designed to think, reason, and learn.",
  "what is data science": "Data science combines statistics, programming, and domain knowledge to extract meaningful insights from data.",
  "what is cloud computing": "Cloud computing provides on-demand access to computing resources like servers, storage, and applications over the internet.",
  "what is api": "An API (Application Programming Interface) is a set of rules that allows different software applications to communicate with each other.",
  "what is frontend development": "Frontend development focuses on building the visual and interactive parts of a website or application.",
  "what is backend development": "Backend development handles the server, database, and application logic behind a system.",
  "what is database": "A database is an organized collection of structured information or data stored electronically.",
  "what is sql": "SQL (Structured Query Language) is used to communicate with and manage databases.",
  "what is nosql": "NoSQL databases are non-relational databases that store data in flexible formats like documents, key-value pairs, or graphs.",
  "what is react": "React is a popular JavaScript library for building fast, interactive user interfaces.",
  "what is nodejs": "Node.js is a runtime environment that lets developers run JavaScript code outside the browser, usually on the server side.",
  "what is expressjs": "Express.js is a lightweight framework for building web applications and APIs with Node.js.",
  "what is mongodb": "MongoDB is a NoSQL database that stores data in flexible, JSON-like documents.",
  "what is docker": "Docker is a platform for developing, shipping, and running applications inside lightweight, portable containers.",
  "what is kubernetes": "Kubernetes is an open-source system for automating deployment, scaling, and management of containerized applications.",
  "what is operating system": "An operating system is software that manages hardware and software resources on a computer.",
  "what is version control": "Version control is a system that records changes to code and allows multiple people to collaborate, with Git being the most popular example.",
  "what is github": "GitHub is a platform for hosting, sharing, and collaborating on Git repositories.",
  "what is agile methodology": "Agile is an iterative approach to software development that emphasizes flexibility, collaboration, and customer feedback.",
  "what is devops": "DevOps is a culture and practice that integrates development and operations teams to improve software delivery and reliability.",
  "what is cybersecurity": "Cybersecurity is the practice of protecting systems, networks, and data from digital attacks.",
  "what is blockchain": "Blockchain is a decentralized digital ledger that records transactions across many computers securely.",
  "what is iot": "IoT (Internet of Things) refers to physical devices connected to the internet that can collect and share data."

} 

const normalizedText = text.toLowerCase().trim();
const botResponse = botResponses[normalizedText] || "Sorry, I don't understand that!!"; 

const bot = await Bot.create({
    text:botResponse
})

return res.status(200).json({
    userMessage:user.text,
    botMessage:bot.text,
})
    }catch (error){
     console.log("Error in Message Controller:",error);
     return res.status(500).json({error:"Internal Server Error"});
    }
}