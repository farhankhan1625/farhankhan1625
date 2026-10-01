import {useEffect,useRef,useState} from 'react';
import {profile as P,stats,about,projects,filters,experience,skills,education,achievements,leadership} from './data/profile.js';

function useInView(){const r=useRef(null);const[v,setV]=useState(false);useEffect(()=>{const o=new IntersectionObserver(([e])=>{if(e.isIntersecting){setV(true);o.disconnect()}},{threshold:.4});r.current&&o.observe(r.current);return()=>o.disconnect()},[]);return[r,v]}
function Count({to,dec=0,suffix=''}){const[r,v]=useInView();const[n,setN]=useState(0);
 useEffect(()=>{if(!v)return;if(matchMedia('(prefers-reduced-motion:reduce)').matches){setN(to);return}let s;const f=t=>{s??=t;const p=Math.min((t-s)/1200,1);setN(to*(1-Math.pow(1-p,3)));p<1&&requestAnimationFrame(f)};requestAnimationFrame(f)},[v,to]);
 return <span ref={r}>{n.toFixed(dec)}{suffix}</span>}

const nav=['About','Projects','Experience','Skills','Education','Achievements','Leadership','Contact'];
const Ln=({href,children,cls='btn'})=><a className={cls} href={href} target="_blank" rel="noopener noreferrer">{children}</a>;

function Contours(){return <svg className="contours" viewBox="0 0 800 600" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
 {Array.from({length:14},(_,i)=><ellipse key={i} cx={430+i*3} cy={300-i*2} rx={40+i*26} ry={22+i*17} transform={`rotate(${-18+i*2.2} 430 300)`}/>)}
 {[[560,210],[600,380],[300,420]].map(([x,y],i)=><circle key={i} className="pt" cx={x} cy={y} r="4"/>)}</svg>}

function Photo(){const[bad,setBad]=useState(false);return bad?<div className="photo fb" role="img" aria-label="Initials SFK">SFK</div>:
 <img className="photo" src={P.photo} alt="Portrait of Sheikh Farhan Khan" width="260" height="260" onError={()=>setBad(true)}/>}

function Modal({p,onClose}){const d=useRef(null);useEffect(()=>{d.current?.showModal()},[]);
 const L=(h,items)=>items?.length?<><h4>{h}</h4><ul>{items.map(x=><li key={x}>{x}</li>)}</ul></>:null;
 return <dialog ref={d} onClose={onClose} onClick={e=>e.target===d.current&&d.current.close()} aria-label={p.title}><div className="mbody">
  <button className="x" onClick={()=>d.current.close()} aria-label="Close">Close</button>
  <p className="meta">{p.kind} | {p.date}</p><h3>{p.title}</h3><p>{p.tagline}</p>
  {p.metrics.length>0&&<div className="mets">{p.metrics.map(m=><div key={m.l}><b>{m.v}</b><span>{m.l}</span></div>)}</div>}
  <h4>Problem</h4><p>{p.problem}</p>{L('Approach',p.approach)}{L('Results',p.results)}
  {p.outcome&&<><h4>Outcome</h4><p>{p.outcome}</p></>}
  <h4>Stack</h4><div className="chips">{p.stack.map(s=><span key={s}>{s}</span>)}</div>
  <div className="row">{p.links.github&&<Ln href={p.links.github}>GitHub</Ln>}{p.links.demo&&<Ln href={p.links.demo}>Live demo</Ln>}
  {!p.links.github&&!p.links.demo&&<Ln href={P.github} cls="btn ghost">View GitHub profile</Ln>}</div></div></dialog>}

export default function App(){
 const[menu,setMenu]=useState(false);const[f,setF]=useState('All');const[open,setOpen]=useState(null);const[tab,setTab]=useState(Object.keys(skills)[0]);
 const list=projects.filter(p=>f==='All'||p.cat.includes(f));
 return <>
 <a className="skip" href="#main">Skip to content</a>
 <header className="nav"><a className="logo" href="#top">SFK</a>
  <button className="burger" aria-expanded={menu} aria-controls="links" aria-label="Toggle menu" onClick={()=>setMenu(!menu)}>{menu?'Close':'Menu'}</button>
  <nav id="links" className={menu?'open':''} aria-label="Primary">{nav.map(n=><a key={n} href={'#'+n.toLowerCase()} onClick={()=>setMenu(false)}>{n}</a>)}
  <a className="btn sm" href={P.cv} download>Download CV</a></nav></header>
 <main id="main">
 <section id="top" className="hero"><Contours/><div className="wrap hgrid">
  <div><p className="meta">IIT Kharagpur | Aquacultural Engineering</p><h1>{P.name}</h1><p className="lead">{P.headline}</p><p className="sum">{P.summary}</p>
   <div className="row"><a className="btn" href="#projects">View Projects</a><a className="btn alt" href={P.cv} download>Download ML & GenAI CV</a>
   <Ln cls="btn ghost" href={P.linkedin}>LinkedIn</Ln><Ln cls="btn ghost" href={P.github}>GitHub</Ln><a className="btn ghost" href="#contact">Contact</a></div></div>
  <Photo/></div></section>

 <section id="about" className="wrap"><h2>About</h2><div className="cols">{about.map(t=><p key={t}>{t}</p>)}</div></section>
 <section className="wrap" aria-label="Impact in numbers"><div className="stats">{stats.map(s=><div key={s.label}><b><Count {...s}/></b><span>{s.label}</span></div>)}</div></section>

 <section id="projects" className="wrap"><h2>Projects</h2>
  <div className="row" role="group" aria-label="Filter projects">{filters.map(x=><button key={x} className={'chip'+(f===x?' on':'')} aria-pressed={f===x} onClick={()=>setF(x)}>{x}</button>)}</div>
  <div className="grid">{list.map(p=><button key={p.id} className={'card'+(p.featured?' feat':'')} onClick={()=>setOpen(p)}>
   <span className="meta">{p.kind} | {p.date}</span><strong>{p.title}</strong><span>{p.tagline}</span>
   {p.metrics.length>0&&<span className="mini">{p.metrics.slice(0,3).map(m=><i key={m.l}><b>{m.v}</b> {m.l}</i>)}</span>}
   <span className="chips">{p.cat.map(c=><span key={c}>{c}</span>)}</span><span className="more">Read case study</span></button>)}</div></section>
 {open&&<Modal p={open} onClose={()=>setOpen(null)}/>}

 <section id="experience" className="wrap"><h2>Experience</h2><ol className="tl">{experience.map(e=><li key={e.role}><details open={e===experience[0]}>
  <summary><strong>{e.role}</strong><span>{e.org} | {e.date}</span></summary><ul>{e.points.map(x=><li key={x}>{x}</li>)}</ul></details></li>)}</ol></section>

 <section id="skills" className="wrap"><h2>Skills</h2>
  <div className="row" role="tablist">{Object.keys(skills).map(k=><button key={k} role="tab" aria-selected={tab===k} className={'chip'+(tab===k?' on':'')} onClick={()=>setTab(k)}>{k}</button>)}</div>
  <div className="chips big" role="tabpanel">{skills[tab].map(s=><span key={s}>{s}</span>)}</div></section>

 <section id="education" className="wrap"><h2>Education</h2><div className="grid">{education.map(e=><div className="card st" key={e.deg}><span className="meta">{e.date}</span><strong>{e.deg}</strong><span>{e.org}</span><span className="sc">{e.score}</span></div>)}</div></section>
 <section id="achievements" className="wrap"><h2>Achievements</h2><div className="grid">{achievements.map(a=><div className="card st" key={a.t}><strong>{a.t}</strong><span>{a.d}</span></div>)}</div></section>
 <section id="leadership" className="wrap"><h2>Leadership</h2><div className="lead-list">{leadership.map(([r,o])=><div key={r}><strong>{r}</strong><span>{o}</span></div>)}</div></section>

 <section id="contact" className="wrap contact"><h2>Let's build something meaningful</h2><p>Open to ML/AI and GenAI roles, research, consulting and technical collaboration.</p>
  <div className="row">{P.email&&<a className="btn" href={'mailto:'+P.email}>Email me</a>}<Ln href={P.linkedin}>LinkedIn</Ln><Ln cls="btn ghost" href={P.github}>View GitHub</Ln></div></section>
 </main>
 <footer className="foot wrap"><span>{P.name}</span><span><Ln cls="" href={P.linkedin}>LinkedIn</Ln> | <Ln cls="" href={P.github}>GitHub</Ln></span></footer></>}
