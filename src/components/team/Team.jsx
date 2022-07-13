import './team.scss';
import admin from '../../assets/team/admin.png';
import members from '../../assets/team/members.png';

const Team = () => {
  return (
    <div className="team">
      <div className="title">Team</div>
      <div className="content">
        <div className="admin">
          <img src={admin} alt="admin" />
          <div className="status">
            <p>Total Admin</p>
            <p>6</p>
          </div>
        </div>
        <div className="members">
          <img src={members} alt="members" />
          <div className="status">
            <p>Team Member</p>
            <p>12</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
