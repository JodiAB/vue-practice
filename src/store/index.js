import { createStore } from 'vuex'
import axios from 'axios';


export default createStore({
  state: {
    Home: {},
    About: [],
    Resume: [], 
    Skills: [],
    EXP: [],
    Time: [],
    Techno: [],
    Projects: [],
    ProjCard: [], 
    Testimonials: [],
    Contact: [],
    Footer: [],
    stars: [],
    Feedback:[],
    camera: {
      x: 0,
      y: 0,
      z: 1
    },
  },
  getters: {},
  mutations: {
    setHome(state, homeData) {
      console.log('Setting Home data:', homeData);
      state.Home = homeData;
    },
    setAbout(state, About){
      console.log('Setting About data:', About);
      state.About = About;
    },
    setResume(state, Resume){
      console.log('Setting Resume data:', Resume);
      state.Resume = Resume;
    },
    setSkills(state, Skills) {
      console.log('Setting Skills data:', Skills);
      state.Skills = Skills;
    },
    setExperience(state, EXP){
      console.log('Setting Experience data:', EXP);
      state.EXP = EXP;
    },
    setTime(state, Time){
      console.log('Setting Time data:', Time);
      state.Time = Time;
    },
    setTechno(state, Techno){
      console.log('Setting Techno data:', Techno);
      state.Techno = Techno;
    },
    setProjects(state, Projects){
      console.log('Setting Projects data:', Projects);
      state.Projects = Projects;
    },
    setProjCard(state, ProjCard){
      console.log('Setting ProjCard data:', ProjCard);
      state.ProjCard = ProjCard;
    },
    setTestimonials(state, Testimonials){
      console.log('Setting Contact data:', Testimonials);
      state.Testimonials = Testimonials;
    },
    setContact(state, Contact){
      console.log('Setting Contact data:', Contact);
      state.Contact = Contact;
    },
    setFooter(state, Footer){
      console.log('Setting Footer data:', Footer);
      state.Footer = Footer;
    },
    setStars(state, stars) {
      state.stars = stars;
    },
    setFeedback(state, Feedback) {
      console.log('Setting Footer data:', Feedback);
      state.Feedback = Feedback;
    },
    setCameraPosition(state, { x, y }) {
      state.camera.x = x;
      state.camera.y = y;
    },
  },
  actions: {

    async fetchDataFromAPI ({commit}){
//fetching data
      try{
        const homeResponse = await axios.get(' https://jodiab.github.io/data/');
        const aboutResponse = await axios.get(' https://jodiab.github.io/data/');
        const resumeResponse = await axios.get('https://jodiab.github.io/data/');
        const skillsResponse = await axios.get(' https://jodiab.github.io/data/');
        const experienceResponse = await axios.get(' https://jodiab.github.io/data/');
        const timeResponse = await axios.get(' https://jodiab.github.io/data/');
        const technoResponse = await axios.get(' https://jodiab.github.io/data/');
        const projectsResponse = await axios.get(' https://jodiab.github.io/data/');
        const projCardResponse = await axios.get(' https://jodiab.github.io/data/');
        const testimonialsResponse = await axios.get('  https://jodiab.github.io/data/');
        const contactResponse = await axios.get(' https://jodiab.github.io/data/');
        const footerResponse = await axios.get(' https://jodiab.github.io/data/');
        const FeedbackResponse = await axios.get(' https://jodiab.github.io/data/');

        const homeData = homeResponse.data;
        const aboutData = aboutResponse.data;
        const resumeData = resumeResponse.data;
        const Skills = skillsResponse.data;
        const experienceData = experienceResponse.data;
        const timeData = timeResponse.data;
        const technoData = technoResponse.data;
        const projectsData = projectsResponse.data;
        const projCardData = projCardResponse.data;
        const testimonialsData = testimonialsResponse.data;
        const contactData = contactResponse.data;
        const footerData = footerResponse.data;
        const feedbackData = FeedbackResponse.data;




// committing the mutations to set the data in the state
        commit('setHome', homeData);
        commit ('setAbout', aboutData);
        commit ('setResume', resumeData);
        commit ('setSkills', Skills);
        commit ('setExperience', experienceData);
        commit ('setTime', timeData);
        commit ('setTechno', technoData);
        commit ('setProjects', projectsData);
        commit ('setProjCard', projCardData);
        commit('setTestimonials', testimonialsData);
        commit ('setContact', contactData);
        commit ('setFooter', footerData);
        commit('setFeedback', feedbackData);
      }
      catch(error){
        console.error('Error with fetching the data:' , error);
      }
    },

    generateStars({ commit }) {
      const stars = [];

      for (let i = 0; i < 115; i++) {
        stars.push({
          x: (Math.random() - 0.5) * 2, // Adjusted to match React example
          y: (Math.random() - 0.5) * 2, // Adjusted to match React example
          z: Math.random() * 2, // Adjusted to match React example
        });
      }

      commit('setStars', stars);
    },
    updateCameraPosition({ commit }) {
      const speed = 0.25;
      const x = Math.sin(Date.now() * 0.0001 * speed) * 100;
      const y = Math.cos(Date.now() * 0.0001 * speed) * 100;
      const z = 1; // Adjusted to match React example

      commit('setCameraPosition', { x, y, z });
    },
  },
  modules: {
  }
});