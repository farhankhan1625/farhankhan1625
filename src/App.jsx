import {useEffect,useRef,useState} from 'react';
import {profile as P,stats,about,projects,experience,skills,education,achievements,leadership} from './data/profile.js';

function useInView(){const r=useRef(null);const[v,setV]=useState(false);useEffect(()=>{const o=new IntersectionObserver(([e])=>{if(e.isIntersecting){setV(true);o.disconnect()}},{threshold:.4});r.current&&o.observe(r.current);return()=>o.disconnect()},[]);return[r,v]}
function Count({to,dec=0,suffix=''}){const[r,v]=useInView();const[n,setN]=useState(0);
 useEffect(()=>{if(!v)return;if(matchMedia('(prefers-reduced-motion:reduce)').matches){setN(to);return}let s;const f=t=>{s??=t;const p=Math.min((t-s)/1200,1);setN(to*(1-Math.pow(1-p,3)));p<1&&requestAnimationFrame(f)};requestAnimationFrame(f)},[v,to]);
 return <span ref={r}>{n.toFixed(dec)}{suffix}</span>}

const G={'AI / ML':[265,235],GenAI:[300,265],GeoINT:[165,195],IoT:[18,350],Aquaculture:[195,220],Engineering:[38,18],Experience:[210,240]};
const grad=c=>{const[a,b]=G[c[0]]||[210,230];return `linear-gradient(145deg,hsl(${a} 55% 30%),hsl(${b} 60% 9%))`};
const Ln=({href,children,cls='btn'})=><a className={cls} href={href} target="_blank" rel="noopener noreferrer">{children}</a>;
const toItem=e=>({title:e.role,kind:e.org,date:e.date,tagline:'',cat:['Experience'],problem:'',approach:e.points,stack:[],results:[],metrics:[],links:{},noLink:true});

function Modal({p,onClose}){const d=useRef(null);useEffect(()=>{d.current?.showModal()},[]);
 const L=(h,a)=>a?.length?<><h4>{h}</h4><ul>{a.map(x=><li key={x}>{x}</li>)}</ul></>:null;
 return <dialog ref={d} onClose={onClose} onClick={e=>e.target===d.current&&d.current.close()} aria-label={p.title}>
  <div className="mban" style={{background:grad(p.cat)}}><button className="x" onClick={()=>d.current.close()} aria-label="Close">&times;</button>
   <p className="meta">{p.kind} | {p.date}</p><h3>{p.title}</h3>
   <div className="row">{p.links?.github&&<Ln href={p.links.github}>GitHub</Ln>}{p.links?.demo&&<Ln cls="btn info" href={p.links.demo}>Live demo</Ln>}
   {!p.links?.github&&!p.links?.demo&&!p.noLink&&<Ln cls="btn info" href={P.github}>View GitHub</Ln>}</div></div>
  <div className="mbody">{p.tagline&&<p className="tg">{p.tagline}</p>}
   {p.metrics?.length>0&&<div className="mets">{p.metrics.map(m=><div key={m.l}><b>{m.v}</b><span>{m.l}</span></div>)}</div>}
   {p.problem&&<><h4>Problem</h4><p>{p.problem}</p></>}{L(p.noLink?'Highlights':'Approach',p.approach)}{L('Results',p.results)}
   {p.outcome&&<><h4>Outcome</h4><p>{p.outcome}</p></>}
   {p.stack?.length>0&&<div className="chips">{p.stack.map(s=><span key={s}>{s}</span>)}</div>}</div></dialog>}

function Row({id,title,children}){const r=useRef(null);const go=d=>r.current.scrollBy({left:d*r.current.clientWidth*.8,behavior:'smooth'});
 return <section id={id} className="rowS"><h2>{title}</h2><div className="rw">
  <button className="arr l" aria-label="Scroll left" onClick={()=>go(-1)}>&#8249;</button>
  <div className="rail" ref={r}>{children}</div>
  <button className="arr r" aria-label="Scroll right" onClick={()=>go(1)}>&#8250;</button></div></section>}

const Tile=({p,open})=><button className="tile" style={{background:grad(p.cat)}} onClick={()=>open(p)}>
 <span className="tk">{p.cat[0]}</span><strong>{p.title.split('|')[0].trim()}</strong><span className="dt">{p.date}</span>
 <span className="hov"><span>{p.tagline||p.kind}</span><span className="chips">{(p.stack||[]).slice(0,3).map(s=><span key={s}>{s}</span>)}</span></span></button>;

export default function App(){
 const[o,setO]=useState(null);const[sc,setSc]=useState(false);const[menu,setMenu]=useState(false);
 useEffect(()=>{const f=()=>setSc(scrollY>40);f();addEventListener('scroll',f,{passive:true});return()=>removeEventListener('scroll',f)},[]);
 const by=(...c)=>projects.filter(p=>p.cat.some(x=>c.includes(x)));
 const nav=[['Projects','projects'],['Experience','experience'],['Skills','skills'],['Achievements','achievements'],['Education','education'],['Contact','contact']];
 return <>
 <a className="skip" href="#main">Skip to content</a>
 <header className={'nav'+(sc||menu?' solid':'')}><a className="logo" href="#top">FARHAN</a>
  <button className="burger" aria-expanded={menu} aria-label="Toggle menu" onClick={()=>setMenu(!menu)}>{menu?'Close':'Menu'}</button>
  <nav className={menu?'open':''} aria-label="Primary">{nav.map(([n,i])=><a key={i} href={'#'+i} onClick={()=>setMenu(false)}>{n}</a>)}</nav></header>
 <main id="main">
 <section id="top" className="hero">
  <img className="hphoto" src={P.photo} alt="Portrait of Sheikh Farhan Khan" onError={e=>e.currentTarget.style.display='none'}/>
  <div className="hshade"/><div className="htxt">
   <p className="badge"><b>N</b> National Finalist | Bharatiya Antariksh Hackathon 2026</p>
   <h1>{P.name}</h1><p className="lead">{P.headline}</p><p className="sum">{P.summary}</p>
   <div className="row"><a className="btn play" href="#projects">&#9654; View Projects</a><a className="btn info" href="#about">&#9432; More Info</a>
   <Ln cls="btn info" href={P.linkedin}>LinkedIn</Ln><Ln cls="btn info" href={P.github}>GitHub</Ln></div></div></section>
 <div className="strip" aria-label="Impact in numbers">{stats.map(s=><div key={s.label}><b><Count {...s}/></b><span>{s.label}</span></div>)}</div>
 <Row id="projects" title="Featured Projects">{projects.filter(p=>p.featured).map(p=><Tile key={p.id} p={p} open={setO}/>)}</Row>
 <Row title="AI / ML & GenAI">{by('AI / ML','GenAI').map(p=><Tile key={p.id} p={p} open={setO}/>)}</Row>
 <Row title="Geospatial & Water Systems">{by('GeoINT','Aquaculture').map(p=><Tile key={p.id} p={p} open={setO}/>)}</Row>
 <Row title="IoT & Engineering Design">{by('IoT','Engineering').map(p=><Tile key={p.id} p={p} open={setO}/>)}</Row>
 <Row id="experience" title="Experience & Training">{experience.map(e=><Tile key={e.role} p={toItem(e)} open={setO}/>)}</Row>
 <Row id="achievements" title="Top Achievements">{achievements.map((a,i)=><div className="top" key={a.t}><b aria-hidden="true">{i+1}</b><div className="tc"><strong>{a.t}</strong><span>{a.d}</span></div></div>)}</Row>
 <Row id="skills" title="Skills">{Object.entries(skills).map(([k,v])=><div className="sk" key={k}><strong>{k}</strong><div className="chips">{v.map(s=><span key={s}>{s}</span>)}</div></div>)}</Row>
 <Row id="education" title="Education">{education.map(e=><div className="sk" key={e.deg}><span className="meta">{e.date}</span><strong>{e.deg}</strong><span>{e.org}</span><em>{e.score}</em></div>)}</Row>
 <Row title="Leadership & Activities">{leadership.map(([r,x])=><div className="sk sm" key={r}><strong>{r}</strong><span>{x}</span></div>)}</Row>
 <section id="about" className="wrap"><h2>About</h2><div className="cols">{about.map(t=><p key={t}>{t}</p>)}</div></section>
 <section id="contact" className="wrap contact"><h2>Let's build something meaningful</h2><p>Open to ML/AI and GenAI roles, research, consulting and technical collaboration.</p>
  <div className="row">{P.email&&<a className="btn play" href={'mailto:'+P.email}>Email me</a>}<Ln cls="btn info" href={P.linkedin}>LinkedIn</Ln><Ln cls="btn info" href={P.github}>View GitHub</Ln></div></section>
 </main>
 {o&&<Modal p={o} onClose={()=>setO(null)}/>}
 <footer className="foot"><span>{P.name}</span><span><Ln cls="" href={P.linkedin}>LinkedIn</Ln> | <Ln cls="" href={P.github}>GitHub</Ln></span></footer></>}
