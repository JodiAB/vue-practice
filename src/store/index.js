import { createStore } from 'vuex'
import axios from 'axios';


export default createStore({
  state: {
    Home: {},
    About: [],
    Resume: [],
    skillsData: [],
    EXP: [],
    Time: [],
    Techno: [],
    Projects: [],
    ProjCard: [], 
    Testimonials: [],
    Contact: [],
    Footer: [],
    stars: [],
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
    setSkills(state, skillsData) {
      console.log('Setting Skills data:', skillsData);
      state.Skills = skillsData;
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
    setCameraPosition(state, { x, y }) {
      state.camera.x = x;
      state.camera.y = y;
    },
  },
  actions: {

    async fetchDataFromAPI ({commit}){
//fetching data
      try{
        const homeResponse = await axios.get(' http://localhost:3000/Home');
        const aboutResponse = await axios.get(' http://localhost:3000/About');
        const resumeResponse = await axios.get(' http://localhost:3000/Resume');
        const skillsResponse = await axios.get(' http://localhost:3000/Skills');
        const experienceResponse = await axios.get(' http://localhost:3000/Experience');
        const timeResponse = await axios.get(' http://localhost:3000/time');
        const technoResponse = await axios.get(' http://localhost:3000/Techno');
        const projectsResponse = await axios.get(' http://localhost:3000/Projects');
        const projCardResponse = await axios.get(' http://localhost:3000/ProjCard');
        const testimonialsResponse = await axios.get('  http://localhost:3000/Testimonials');
        const contactResponse = await axios.get(' http://localhost:3000/Contact');
        const footerResponse = await axios.get(' http://localhost:3000/Footer');

        const homeData = homeResponse.data;
        const aboutData = aboutResponse.data;
        const resumeData = resumeResponse.data;
        const skillsData = skillsResponse.data;
        const experienceData = experienceResponse.data;
        const timeData = timeResponse.data;
        const technoData = technoResponse.data;
        const projectsData = projectsResponse.data;
        const projCardData = projCardResponse.data;
        const testimonialsData = testimonialsResponse.data;
        const contactData = contactResponse.data;
        const footerData = footerResponse.data;


// committing the mutations to set the data in the state
        commit('setHome', homeData);
        commit ('setAbout', aboutData);
        commit ('setResume', resumeData);
        commit ('setSkills', skillsData);
        commit ('setExperience', experienceData);
        commit ('setTime', timeData);
        commit ('setTechno', technoData);
        commit ('setProjects', projectsData);
        commit ('setProjCard', projCardData);
        commit('setTestimonials', testimonialsData);
        commit ('setContact', contactData);
        commit ('setFooter', footerData);
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
