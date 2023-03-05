import ConnectButton from './Components/ConnectWalllet'
import React,{useState} from 'react';


export default function Home() {
  const [ProjectName, setProjectName] = useState('');
  const [ProjectDescription, setProjectDescription] = useState('');
  const [Location,setLocation] = useState('');
  const [fundingGoal,setFundingGoal] = useState(0);

  return (
    <div style={{ fontFamily: 'Futura, sans-serif' }}>
      <h1>Add Proposal</h1>
      <div className="form-item">
        <label className="Font">Project Name</label>
        <input type="text" value={ProjectName} onChange={(e) => setProjectName(e.target.value)} />
      </div>
      <div className="form-item">
        <label className="Font">Project Description</label>
        <input type="text" value={ProjectDescription} onChange={(e) => setProjectDescription(e.target.value)} />
      </div>
      <div className="form-item">
        <label>Location</label>
        <input type="text" value={Location} onChange={(e) => setLocation(e.target.value)} />
      </div>
      <div className="form-item">
        <label>Funding Goal</label>
        <input type="number" value={fundingGoal} onChange={(e) => setFundingGoal(e.target.value)} />
      </div>
      <button onClick={() => console.log(ProjectName,ProjectDescription,Location,fundingGoal)}>Post</button>
    </div>
  )
}