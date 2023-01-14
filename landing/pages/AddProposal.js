
import ConnectButton from './Components/ConnectWalllet'
import React,{useState} from 'react';


export default function Home() {
  //const [isConnected, setIsConnected] = useState(false);
  const [ProjectName, setProjectName] = useState('');
  const [ProjectDescription, setProjectDescription] = useState('');
  const [Location,setLocation] = useState('');
  const [fundingGoal,setFundingGoal] = useState(0);
  return (
   <>
<div>
  <h1> Add Proposal</h1>

  <label>Project Name</label>
  <input type="text" value={ProjectName} onChange={(e) => setProjectName(e.target.value)} />

  <label>Project Description</label>
  <input type="text" value={ProjectDescription} onChange={(e) => setProjectDescription(e.target.value)} />

  <label>Location</label>
  <input type="text" value={Location} onChange={(e) => setLocation(e.target.value)} />

  <label>Funding Goal</label>
  <input type="number" value={fundingGoal} onChange={(e) => setFundingGoal(e.target.value)} />

  <button onClick={() => console.log(ProjectName,ProjectDescription,Location,fundingGoal)}>Add Proposal</button>
</div>

   </>
  )
}
