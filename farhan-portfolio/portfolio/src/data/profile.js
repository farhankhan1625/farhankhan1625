// ======================= EDIT THIS FILE TO UPDATE THE SITE =======================
// 1 PHOTO: replace public/assets/images/profile.jpeg (same filename), or change `photo` below.
// 2 CV:    replace public/assets/cv/Sheikh_Farhan_Khan_ML_GenAI_CV.pdf (same filename), or change `cv`.
// 3 EMAIL: fill `email`. Empty = no email button (none was in your CVs, so none was invented).
// 4 LINKEDIN / 5 GITHUB: the two URLs below.   6 PROJECTS: `projects`.   7 SKILLS: `skills`.
const B = import.meta.env.BASE_URL;
export const profile = {
  name: 'Sheikh Farhan Khan',
  headline: 'AI/ML & Geospatial Engineer | IoT & Aquacultural Systems',
  summary: 'M.Tech at IIT Kharagpur (Aquacultural Engineering). I build machine learning, GenAI and geospatial systems for water, climate and urban-heat problems, and design the hardware and hydraulics behind them.',
  email: '',
  photo: B + 'assets/images/profile.jpeg',
  cv: B + 'assets/cv/Sheikh_Farhan_Khan_ML_GenAI_CV.pdf',
  linkedin: 'https://www.linkedin.com/in/farhankhan16',
  github: 'https://github.com/farhankhan1625',
};
export const about = [
  'I am an M.Tech student in Aquacultural Engineering at IIT Kharagpur (expected 2027), with a B.Tech in Agricultural Engineering from Dr. PDKV Akola, where I graduated with the highest CGPA in my batch.',
  'My work sits between engineering and AI: satellite and LiDAR data for flood and heat risk, ConvLSTM forecasting for a climate digital twin, local RAG assistants, and a GPS-guided RC boat for water sampling.',
  'I have also worked on the business side of water treatment, mapping Pan-India markets and designing reactor and RO housing drawings during an internship at Sundarban Chemicals.',
];
export const stats = [
  {to:250,suffix:' GB',label:'multi-source environmental data fused'},
  {to:629,suffix:'K',label:'Delhi NCR pixels modelled'},
  {to:1.65,dec:2,suffix:'B',label:'LiDAR points processed'},
  {to:747.9,dec:1,suffix:' km',label:'drainage network designed'},
  {to:69.7,dec:1,suffix:'%',label:'simulated flood reduction'},
  {to:80,label:'Pareto-optimal heat strategies'},
  {to:450,suffix:'+',label:'companies in B2B database'},
  {to:8.91,dec:2,label:'M.Tech CGPA (of 10)'},
];
export const filters = ['All','AI / ML','GenAI','GeoINT','IoT','Aquaculture','Engineering'];
export const projects = [
 {id:'rcboat',title:'GPS-Based RC Boat for Water Sampling',cat:['IoT','Aquaculture','Engineering'],date:'Aug 2026 - Present',kind:'M.Tech project (MTP)',featured:true,
  tagline:'A low-cost, GPS-tracked RC boat for field-based surface water sampling.',
  problem:'Surface water sampling in the field needs a low-cost platform that can be steered and tracked, and can eventually report data for aquatic monitoring.',
  approach:['Arduino/ESP controller with GPS, RC control and L298N-driven DC motors','Onboard sampling components integrated with the propulsion and control systems','Propulsion tuned with a large-diameter, low-pitch, low-RPM propeller','Centralized battery placement for a low centre of gravity','IoT-enabled GPS tracking, with potential real-time data transmission'],
  stack:['Arduino/ESP','GPS','RC control','L298N','DC motors','IoT'],results:['Working design for field surface water sampling operations'],metrics:[],links:{}},
 {id:'surya',title:'SuryaVedha | AI/ML Urban Heat Mitigation',cat:['AI / ML','GeoINT'],date:'Jul - Aug 2026',kind:'Bharatiya Antariksh Hackathon 2026, National Finalist',featured:true,
  tagline:'Urban heat island modelling and mitigation planning for Delhi NCR.',
  problem:'Assess urban heat drivers and spatial risk across Delhi NCR and plan mitigation with cost, cooling and equity in mind.',
  approach:['Fused Landsat, Sentinel-2, ERA5 and 40+ CPCB stations','Compared Random Forest, XGBoost and DNN; selected XGBoost','SHAP to identify NDVI, air temperature and NDBI as key heat drivers','NSGA-II multi-objective optimisation of mitigation strategies','Streamlit dashboard for scenario-based planning'],
  stack:['Python','XGBoost','SHAP','NSGA-II','Streamlit','Landsat','Sentinel-2','ERA5'],
  results:['XGBoost gave the best test performance','Mitigation solutions span -1.1 C to -2.9 C'],
  metrics:[{v:'250 GB',l:'data'},{v:'629K',l:'pixels'},{v:'0.856',l:'R2'},{v:'0.849',l:'spatial validation R2'},{v:'0.928 C',l:'RMSE (hold-out)'},{v:'80',l:'Pareto strategies'}],
  outcome:'National Finalist, Top 34 of 15,104 teams.',links:{}},
 {id:'drain',title:'Drainage Mitra | AI-Based Drainage Network Design',cat:['AI / ML','GeoINT','Engineering'],date:'Mar 2026',kind:'MoPR IIT Tirupati Hackathon, Finalist (Top 38)',featured:true,
  tagline:'Automated DTMs, waterlogging hotspots and drainage design from LiDAR.',
  problem:'Identify waterlogging hotspots and design drainage networks from terrain data across villages in multiple states.',
  approach:['LiDAR to 2 m DTM using PMF and Random Forest refinement','XGBoost + Isolation Forest ensemble for hotspot prediction','Attention U-Net spatial refinement with SHAP explainability','Outlet-connected MST, Manning\'s equation and Rational Method for network design','GIS-based outputs through a deployable pipeline'],
  stack:['Python','XGBoost','Isolation Forest','Attention U-Net','SHAP','GIS','LiDAR'],
  results:['Mean F1 0.849 and cross-village AUC-ROC 0.860','69.7% reduction in simulated flood impact'],
  metrics:[{v:'1.65B',l:'LiDAR points'},{v:'10 / 5',l:'villages / states'},{v:'2 m',l:'DTM'},{v:'0.860',l:'AUC-ROC'},{v:'747.9 km',l:'network'},{v:'69.7%',l:'flood reduction'}],
  outcome:'Finalist at the MoPR IIT Tirupati Hackathon.',links:{}},
 {id:'vyom',title:'VYOM JAL | Digital Twin for Climate Forecasting',cat:['AI / ML','GeoINT'],date:'Jul 2026',kind:'Bharatiya Antariksh Hackathon 2026',featured:true,
  tagline:'An AI-powered digital twin of India for climate-driven water risk.',
  problem:'Forecast climate-driven water risks across regions of India with forecasts people can act on.',
  approach:['Multi-source satellite, climate and terrain data','ConvLSTM spatiotemporal forecasting pipeline','Explainability and uncertainty quantification','Interactive dashboard for real-time forecasting, validation and scenario analysis'],
  stack:['ConvLSTM','Python','Satellite data','Terrain data','Dashboard'],results:['End-to-end forecasting pipeline with confidence-aware outputs'],metrics:[],links:{}},
 {id:'rag',title:'ResearchMate | Local RAG Research Assistant',cat:['GenAI','AI / ML'],date:'Sep 2026',kind:'Personal project',featured:true,
  tagline:'Ask questions of research PDFs, fully local, with page-level sources.',
  problem:'Query research PDFs with answers grounded in the documents.',
  approach:['PDF ingestion and recursive chunking','MiniLM embeddings with ChromaDB retrieval','Top-k retrieval with distance-based relevance filtering','Llama 3.2 via Ollama, Streamlit UI with page-level source display'],
  stack:['MiniLM','ChromaDB','Llama 3.2','Ollama','Streamlit'],results:['Context-grounded PDF Q&A with indexing and source display'],metrics:[],links:{}},
 {id:'captcha',title:'CAPTCHA Character Recognition',cat:['AI / ML'],date:'Sep 2026',kind:'Deep learning',featured:false,
  tagline:'A PyTorch CNN trained on synthetic CAPTCHAs.',
  problem:'Recognise characters in CAPTCHA images with varied fonts, colours and noise.',
  approach:['50K synthetic images with randomised fonts, colours, noise and geometry','CNN on 32x32 grayscale inputs, affine/perspective augmentation, AdamW and LR scheduling','Inference pipeline: character segmentation, softmax confidence scoring, GPU/CPU execution','Evaluation: classification reports, confusion matrices, per-class accuracy'],
  stack:['PyTorch','CNN','Computer vision'],results:['Evaluated with classification reports and per-class accuracy'],metrics:[{v:'50K',l:'synthetic images'}],links:{}},
];
export const experience = [
 {role:'Business Development & Design Engineer Intern',org:'Sundarban Chemicals Pvt. Ltd., Kolkata',date:'May - Jul 2026',
  points:['Mapped Pan-India water/wastewater markets and built a 450+ company B2B database covering treatment technologies, requirements and decision-makers','Structured customer-segment intelligence to find prospective clients and treatment-system opportunities','Turned market requirements into electrochemical reactor concepts and SolidWorks layouts (3D assemblies)','Designed 4040 RO membrane housings and prepared manufacturing-ready 2D drawings']},
 {role:'Training: AICRP on Post-Harvest Engineering & Technology',org:'Experiential Learning Unit, Dr. PDKV, Akola',date:'Sep - Dec 2024',
  points:['Hands-on practical training in post-harvest engineering and food processing technologies','Explored sales and marketing of processed foods, covering technical and commercial aspects of agri-food']},
];
export const skills = {
 'AI / ML':['Python','Scikit-learn','XGBoost','Random Forest','Isolation Forest','SHAP','Feature Engineering','PyTorch','CNN','ConvLSTM','Attention U-Net'],
 'GenAI / LLM':['Generative AI','LLMs','LangChain','LangGraph','CrewAI','MCP','ChromaDB','LLM Evaluation','Knowledge Graphs','RAG'],
 'Geospatial':['QGIS','Google Earth Engine','GIS & Spatial Analysis','Remote Sensing'],
 'Engineering':['SolidWorks','AutoCAD','ANSYS','MATLAB','Hydraulic Modelling','Aquaculture System Design','Water Quality Management'],
 'IoT / Embedded':['Arduino/ESP','Embedded Systems','IoT','GPS-Based Systems'],
 'Deployment':['FastAPI','Docker','Streamlit','Git/GitHub'],
 'Data':['NumPy','Pandas','SQL','Matplotlib','MS Excel','Data Visualization'],
 'Business':['Market Research','Market Intelligence','Business Development','Strategic Analysis','Project Management','Stakeholder Management'],
};
export const education = [
 {deg:'M.Tech, Aquacultural Engineering',org:'IIT Kharagpur',date:'Expected 2027',score:'CGPA 8.91 / 10'},
 {deg:'B.Tech, Agricultural Engineering',org:'Dr. Panjabrao Deshmukh Krishi Vidyapeeth, Akola',date:'2025',score:'CGPA 8.26 / 10, highest CGPA in the graduating batch'},
 {deg:'Higher Secondary Certificate',org:'MP Board of Secondary Education, Bhopal',date:'2019',score:'83%'},
 {deg:'High School Certificate',org:'MP Board of Secondary Education, Bhopal',date:'2017',score:'84.6%'},
];
export const achievements = [
 {t:'National Finalist, Bharatiya Antariksh Hackathon 2026',d:'NRSC, ISRO Hyderabad. Top 34 of 15,104 teams.'},
 {t:'MoPR IIT Tirupati Hackathon',d:'Geospatial Intelligence track. Top 38 teams.'},
 {t:'Highest CGPA, B.Tech 2025 batch',d:'Agricultural Engineering, Dr. PDKV Akola.'},
 {t:'Academic felicitation',d:'Dr. Panjabrao Deshmukh Competitive Forum, Akola.'},
];
export const leadership = [
 ['Placement Coordinator','Aquacultural Engineering, IIT Kharagpur'],['Manager','Innovation & Incubation Cell, IIT Kharagpur'],
 ['Secretary, Library','Pt. Madan Mohan Malviya Hall, IIT Kharagpur'],['Media & Content Team Head','Gopali Youth Welfare Society, IIT Kharagpur, 2.5 years'],
 ['Prefect (Hostel President)','Raigarh Boys Hostel, Dr. PDKV Akola, 2024'],['Executive Body Member & GATE Exam In-charge','Dr. Panjabrao Deshmukh Competitive Forum'],
 ['Steering Committee Member','Annual Social Gathering 2025, managing a 5+ lakh budget'],['Vice-Captain','SAEINDIA TIFAN 2025, automated vegetable transplanter'],
 ['Representative','13th Bhartiya Chhatra Sansad 2024, MIT-WPU Pune'],['NSS Volunteer','120-hour Special Camp'],
];
